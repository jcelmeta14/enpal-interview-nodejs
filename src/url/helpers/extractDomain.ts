export const extractDomain = (url: string): string => {
  try {
    const parsedUrl = new URL(url);

    const domainParts = parsedUrl.hostname.split('.');
    domainParts.pop();

    return domainParts.join('.');
  } catch (err) {
    throw new Error('Invalid URL');
  }
}

export const extractDomainWithTLD = (url: string): string => {
  try {
    const parsedUrl = new URL(url);

    return parsedUrl.hostname;
  } catch (err) {
    throw new Error('Invalid URL');
  }
}