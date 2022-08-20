import { createAxiosInstance } from '@module/axiosInstance';
import getVideoInfo from '@module/GetVideoInfo';
import dotenv from 'dotenv';

dotenv.config();
describe('GetVideoInfo', () => {
  const axiosInstance = createAxiosInstance(process.env.API_KEY as string);

  it('Get Video Info by VideoID', async () => {
    const result = await getVideoInfo(axiosInstance, 'mRD0-GxqHVo');
    expect(result.length).toBeGreaterThan(0);
  });

  it('Get Video Info Result Length', async () => {
    const result = await getVideoInfo(axiosInstance, 'mRD0-GxqHVo', { maxResults: 1 });
    expect(result.length).toEqual(1);
  });

  it('Get Video Info with part=contentDetails', async () => {
    const resultWithContentDetails = await getVideoInfo(axiosInstance, 'mRD0-GxqHVo', {
      part: ['contentDetails'],
    });
    expect(resultWithContentDetails.shift()).toHaveProperty('contentDetails');
  });
});
