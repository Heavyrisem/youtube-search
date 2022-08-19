import { createAxiosInstance } from '@module/axiosInstance';
import searchYoutube from '@module/SearchYoutube';
import { SearchYoutubeModel } from '@src/models';

import dotenv from 'dotenv';

dotenv.config();
describe('SearchYoutube', () => {
  const axiosInstance = createAxiosInstance(process.env.API_KEY as string);
  let result: SearchYoutubeModel[] = [];

  it('Search Video', async () => {
    result = await searchYoutube(axiosInstance, 'Heat Waves', { maxResults: 2 });
    expect(result.length).toBeGreaterThan(0);
  });

  it('Search Result Length', () => {
    expect(result.length).toBe(2);
  });
});
