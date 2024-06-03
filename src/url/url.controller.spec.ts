import * as httpMocks from 'node-mocks-http';
import { UrlController } from './url.controller';
import { cacheService } from './chacheServiceClient';

describe('UrlController', () => {
  let controller: UrlController;

  beforeEach(() => {
    controller = new UrlController();
  });

  it('Should create a short URL', async () => {
    const request = httpMocks.createRequest({
      body: {
        originalLink: 'https://www.example.com',
      },
    });
    const response = httpMocks.createResponse();

    await controller.createShortUrl(request, response);

    expect(response._getData()).toBe('sptdh3e');
  });

  it('Should redirect a short URL to the original URL', async () => {
    cacheService.set('sptdh3e', 'https://www.example.com')
    const request = httpMocks.createRequest({
      params: {
        slug: 'sptdh3e',
      },
    });
    const response = httpMocks.createResponse();

    await controller.redirectToOriginalUrl(request, response);

    expect(response._getRedirectUrl()).toEqual('https://www.example.com');
  });
});
