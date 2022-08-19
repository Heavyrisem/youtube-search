import axios from 'axios';
import ytdl from 'ytdl-core';
import { CaptionForamt } from './types';

const getCaption = async (videoId: string, lang: string, format: CaptionForamt = 'vtt') => {
  const info = await ytdl.getInfo(videoId);

  const { captionTracks } = info.player_response.captions?.playerCaptionsTracklistRenderer ?? {};

  if (captionTracks && captionTracks.length) {
    const track = captionTracks.find((t) => t.languageCode === lang);

    if (track) return axios.get<string>(`${track.baseUrl}&fmt=${format}`).then((res) => res.data);

    throw Error(`Could not find captions for ${lang}`);
  } else throw Error('No captions found for this video');
};

export default getCaption;
