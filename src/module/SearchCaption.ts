import { AxiosInstance } from 'axios';
import { SearchCaptionModel, SearchCaptionParams } from '../models';
import { APIResponse } from './types';

type SearchCaptionResponse = APIResponse<SearchCaptionModel>;

const searchCaption = (instance: AxiosInstance, videoId: string, options?: SearchCaptionParams) => {
  const { part, ...rest } = options ?? { part: ['snippet'] };

  return instance
    .request<SearchCaptionResponse>({
      method: 'GET',
      url: 'captions',
      params: {
        videoId,
        part: part?.join(','),
        ...rest,
      },
    })
    .then((res) => res.data.items);
};

export default searchCaption;
