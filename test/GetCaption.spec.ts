import getCaption from '@module/GetCaption';
import dotenv from 'dotenv';

dotenv.config();
describe('GetCaption', () => {
  let result = '';

  it('Get Caption', async () => {
    result = await getCaption('1R0AUyvNc4Y', 'en', 'vtt');
    expect(result).not.toEqual('');
  });

  it('Check Valid VTT Caption', () => {
    expect(result.startsWith('WEBVTT')).toBeTruthy();
  });
});
