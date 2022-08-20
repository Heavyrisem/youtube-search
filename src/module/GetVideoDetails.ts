import axios from 'axios';
import { load } from 'cheerio';
import { VideoDetailsType } from '../VideoDetailModel';

const findTextAndReturnRemainder = (target: string, variable: string): string => {
  const chopFront = target.substring(target.search(variable) + variable.length, target.length);
  const result = chopFront.substring(0, chopFront.search('};') + 1);
  return result;
};

const getVideoDetails = async (videoId: string) => {
  const response = await axios.request<string>({
    method: 'GET',
    url: `https://www.youtube.com/watch`,
    headers: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
    params: {
      v: videoId,
    },
  });
  const $ = load(response.data);
  const scripts = $($('script')).text();

  return JSON.parse(
    findTextAndReturnRemainder(scripts, 'var ytInitialData = '),
  ) as VideoDetailsType;
};

export default getVideoDetails;
