import { createAxiosInstance } from '@module/axiosInstance';
import getCaption from '@module/GetCaption';
import getVideoInfo from '@module/GetVideoInfo';
import searchCaption from '@module/SearchCaption';
import searchYoutube from '@module/SearchYoutube';
import { CaptionForamt } from '@module/types';
import { GetVideoInfoParams, SearchCaptionParams, SearchYoutubeParams } from './models';

const initalize = (API_KEY: string) => {
  const axiosInstance = createAxiosInstance(API_KEY);

  return {
    searchVideo: (keyWord: string, options?: SearchYoutubeParams) =>
      searchYoutube(axiosInstance, keyWord, options),
    searchCaption: (videoId: string, options?: SearchCaptionParams) =>
      searchCaption(axiosInstance, videoId, options),
    getCaption: (videoId: string, lang: string, format?: CaptionForamt) =>
      getCaption(videoId, lang, format),
    getVideoInfo: (videoId: string, options?: GetVideoInfoParams) =>
      getVideoInfo(axiosInstance, videoId, options),
  };
};

export default initalize;
