import { AxiosInstance } from 'axios';
import { GetVideoInfoModel, GetVideoInfoParams } from '../models';
import { APIResponse } from './types';

interface GetVideoInfoResponse extends APIResponse<GetVideoInfoModel> {
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

const getVideoInfo = (instance: AxiosInstance, videoId: string, options?: GetVideoInfoParams) => {
  const { part, ...rest } = options ?? { part: ['id', 'snippet'] };

  return instance
    .request<GetVideoInfoResponse>({
      method: 'GET',
      url: 'videos',
      params: {
        id: videoId,
        part: part?.join(','),
        ...rest,
      },
    })
    .then((res) => res.data.items);
};

export default getVideoInfo;
