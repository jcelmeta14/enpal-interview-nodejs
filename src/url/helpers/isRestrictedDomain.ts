import { restrictedDomainsSet } from "./constants";
import { extractDomainWithTLD } from "./extractDomain"

export const isRestrictedDomain = (url: string): boolean => {
  const domainWithTld = extractDomainWithTLD(url);

  return restrictedDomainsSet.has(domainWithTld)
}