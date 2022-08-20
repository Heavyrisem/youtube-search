import { createAxiosInstance } from '@module/axiosInstance';
import searchCaption from '@module/SearchCaption';
import { SearchCaptionModel } from '@src/models';
import dotenv from 'dotenv';

dotenv.config();
describe('SearchCaption', () => {
  const axiosInstance = createAxiosInstance(process.env.API_KEY as string);
  let result: SearchCaptionModel[] = [];

  it('Search fail with not found 404', async () => {
    await expect(searchCaption(axiosInstance, 'invalid video id')).rejects.toThrow(
      'Request failed with status code 404',
    );
  });

  it('Search Caption', async () => {
    result = await searchCaption(axiosInstance, 'mRD0-GxqHVo');
    expect(result.length).toBeGreaterThan(0);
  });
});
