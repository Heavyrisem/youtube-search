import { createAxiosInstance } from '@module/axiosInstance';
import getCaption from '@module/GetCaption';
import getRelatedMusic from '@module/GetRelatedMusic';
import getVideoInfo from '@module/GetVideoInfo';
import searchCaption from '@module/SearchCaption';
import searchYoutube from '@module/SearchYoutube';
import { CaptionForamt } from '@module/types';
import { AxiosInstance } from 'axios';
import { GetVideoInfoParams, SearchCaptionParams, SearchYoutubeParams } from './models';

export class YoutubeSearch {
  axiosInstance: AxiosInstance;

  constructor(readonly apiKey: string) {
    this.axiosInstance = createAxiosInstance(apiKey);
  }

  getVideoInfo(videoId: string, options?: GetVideoInfoParams) {
    return getVideoInfo(this.axiosInstance, videoId, options);
  }

  searchCaption(keyWord: string, options?: SearchCaptionParams) {
    return searchCaption(this.axiosInstance, keyWord, options);
  }

  searchYoutube(keyWord: string, options?: SearchYoutubeParams) {
    return searchYoutube(this.axiosInstance, keyWord, options);
  }

  getCaption(videoId: string, lang: string, captionFormat: CaptionForamt) {
    return getCaption(videoId, lang, captionFormat);
  }

  getVideoDetails(videoId: string) {
    return getVideoInfo(this.axiosInstance, videoId);
  }

  getRelatedMusic(videoId: string) {
    return getRelatedMusic(videoId);
  }
}
