import { MusicInfo } from '@src/models';
import getVideoDetails from './GetVideoDetails';

const getRelatedMusic = async (videoId: string): Promise<MusicInfo> => {
  const response = await getVideoDetails(videoId);
  const infoRows = response.engagementPanels
    .find(
      (panel) =>
        panel.engagementPanelSectionListRenderer.panelIdentifier ===
        'engagement-panel-structured-description',
    )
    ?.engagementPanelSectionListRenderer.content.structuredDescriptionContentRenderer?.items.find(
      (renderer) => renderer.videoDescriptionMusicSectionRenderer,
    )
    ?.videoDescriptionMusicSectionRenderer?.carouselLockups.find((v) => v.carouselLockupRenderer)
    ?.carouselLockupRenderer.infoRows.map((row) => row.infoRowRenderer);

  if (!infoRows) throw new Error('No related music found');

  const songMetadata = infoRows?.find((item) => item.title.simpleText === 'SONG')?.defaultMetadata;

  const title =
    songMetadata?.runs !== undefined ? songMetadata.runs?.[0]?.text : songMetadata?.simpleText;
  if (!title) throw new Error('No title found');

  const artists = infoRows
    .find((item) => item.title.simpleText === 'ARTIST')
    ?.defaultMetadata?.runs?.map((artist) => artist.text);
  if (!artists) throw new Error('No artists found');

  const album = infoRows.find((item) => item.title.simpleText === 'ALBUM')?.defaultMetadata
    ?.simpleText;

  const ytMusicId = infoRows.find((item) => item.title.simpleText === 'SONG')?.defaultMetadata
    ?.runs?.[0]?.navigationEndpoint.watchEndpoint?.videoId;

  return {
    title,
    artists,
    album,
    ytMusicId,
  };
};

export default getRelatedMusic;
