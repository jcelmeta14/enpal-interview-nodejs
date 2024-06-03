import { cacheService } from "./chacheServiceClient";
import { isRestrictedDomain } from "./helpers/isRestrictedDomain";
import { shortenUrl } from "./shortenUrl";

export class UrlController {
  async createShortUrl(req, res) {
    console.log(`${req.method} ${req.url}`);

    const { originalLink } = req.body;
    const shortenedUrl = shortenUrl(originalLink);

    // todo: we could also check the existance in cache, but we are using hashing
    cacheService.set(shortenedUrl, originalLink);

    res.setHeader('Content-Type', 'text/plain');
    res.send(shortenedUrl);
  }

  async redirectToOriginalUrl(req, res) {
    console.log(`${req.method} ${req.url}`);

    const { slug } = req.params;
    const { isAdult } = req.query

    // TODO We should also call toLowerCase() on the slug
    const originalLink = cacheService.get(slug);

    if (!originalLink) {
      res.status(404).send('URL not found');
      return;
    }

    if (isRestrictedDomain(originalLink) && isAdult !== 'true') {
      res.status(403).send("You're not allowed to access this page");
      return;
    }

    res.redirect(301, originalLink);
  }
}
