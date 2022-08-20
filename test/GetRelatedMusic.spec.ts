import getRelatedMusic from '@module/GetRelatedMusic';
import { MusicInfo } from '@src/models';

describe('GetRelatedMusic', () => {
  it('Get Related Music', async () => {
    const relatedMusic = await getRelatedMusic('mRD0-GxqHVo');

    expect(relatedMusic).toEqual({
      title: 'Heat Waves',
      artists: ['Glass Animals'],
      album: 'Heat Waves',
    } as MusicInfo);
  });

  it('Get Related Music with ytMusicId', async () => {
    const relatedMusic = await getRelatedMusic('1R0AUyvNc4Y');

    expect(relatedMusic).toEqual({
      title: 'The Other Side Of Paradise',
      artists: ['Glass Animals'],
      album: 'The Other Side Of Paradise',
      ytMusicId: 'RMPX_vgqQnM',
    } as MusicInfo);
  });
});
