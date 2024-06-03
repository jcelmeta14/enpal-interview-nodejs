import { extractDomain } from "../helpers/extractDomain";
import { illegalDomainsSet } from "./constants";

export const checkUrlIllegalDomains = (req, res, next) => {
  const { originalLink } = req.body;
  const extractedDomain = extractDomain(originalLink);

  console.log('extractedDomain', extractedDomain);

  if (illegalDomainsSet.has(extractedDomain)) {
    res.status(451).send('This content is illegal');
    return;
  }

  next();
}