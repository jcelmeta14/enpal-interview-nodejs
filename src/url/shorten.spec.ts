import { shortenUrl } from './shortenUrl';


it('it returns a max length url', () => {
  const url = 'https://www.example.com';
  const shortenedUrl = shortenUrl(url);

  expect(shortenedUrl.length).toBeLessThanOrEqual(8);
})

it('it returns the same shortened url for the same input', () => {
  const url = 'https://www.example.com';
  const shortenedUrl = shortenUrl(url);
  const shortenedUrl1 = shortenUrl(url);

  expect(shortenedUrl).toEqual(shortenedUrl1);
})