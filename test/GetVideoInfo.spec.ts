import { createAxiosInstance } from '@module/axiosInstance';
import getVideoInfo from '@module/GetVideoInfo';
import { GetVideoInfoModel } from '@src/models';
import dotenv from 'dotenv';

dotenv.config();
describe('GetVideoInfo', () => {
  const axiosInstance = createAxiosInstance(process.env.API_KEY as string);
  let result: GetVideoInfoModel[] = [];

  it('Get Video Info by VideoID', async () => {
    result = await getVideoInfo(axiosInstance, '1R0AUyvNc4Y', { maxResults: 1 });
    expect(result.length).toBeGreaterThan(0);
  });

  it('Get Video Info Result Length', () => {
    expect(result.length).toBe(1);
  });
});
