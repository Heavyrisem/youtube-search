import getVideoDetails from '@module/GetVideoDetails';

describe('GetVideoDetails', () => {
  it('Get Video Details by VideoID', async () => {
    const videoDetails = await getVideoDetails('mRD0-GxqHVo');
    expect(videoDetails).toHaveProperty('responseContext');
  });
});
