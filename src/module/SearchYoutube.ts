import { AxiosInstance } from 'axios';
import { SearchYoutubeModel, SearchYoutubeParams } from '../models';
import { APIResponse } from './types';

interface SearchYoutubeResponse extends APIResponse<SearchYoutubeModel> {
  nextPageToken: string;
  regionCode: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
}

const searchYoutube = (instance: AxiosInstance, keyWord: string, options?: SearchYoutubeParams) => {
  return instance
    .request<SearchYoutubeResponse>({
      method: 'GET',
      url: 'search',
      params: {
        q: keyWord,
        part: 'snippet',
        type: 'video',
        ...options,
      },
    })
    .then((res) => res.data.items);
};

export default searchYoutube;
