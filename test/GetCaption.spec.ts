import getCaption from '@module/GetCaption';
import dotenv from 'dotenv';

dotenv.config();
describe('GetCaption', () => {
  let result = '';

  it('Search fail if no captions found', async () => {
    await expect(getCaption('gYPkper1290', 'en')).rejects.toThrow(
      'No captions found for this video',
    );
  });

  it('Search fail if no caption language found', async () => {
    await expect(getCaption('1R0AUyvNc4Y', 'invalid')).rejects.toThrow(
      'Could not find captions for invalid',
    );
  });

  it('Get Caption', async () => {
    result = await getCaption('1R0AUyvNc4Y', 'en', 'vtt');
    expect(result).not.toEqual('');
  });

  it('Check Valid VTT Caption', () => {
    expect(result.startsWith('WEBVTT')).toBeTruthy();
  });
});
