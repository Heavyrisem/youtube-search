export interface SearchYoutubeParams extends Record<string, any> {
  channelId?: string;
  channelType?: 'any' | 'show';
  eventType?: 'completed' | 'live' | 'upcoming';
  maxResults?: number;
  order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount';
  pageToken?: string;
  publishedAfter?: Date;
  publishedBefore?: Date;
  q?: string;
  /** https://www.iso.org/iso-3166-country-codes.html */
  regionCode?: string;
  safeSearch?: 'moderate' | 'none' | 'strict';
  topicId?: string;
  type?: 'channel' | 'video' | 'playlist';
  videoCaption?: 'any' | 'closedCaption' | 'none';
  videoCategoryId?: string;
  videoDementions?: '2d' | '3d' | 'any';
  videoDuration?: 'any' | 'long' | 'medium' | 'short';
  videoEmbeddable?: 'any' | 'true';
  videoLicense?: 'any' | 'creativeCommon' | 'youtube';
  videoSyndicated?: 'any' | 'true';
  videoType?: 'any' | 'episode' | 'movie';
}

export interface SearchYoutubeModel {
  kind: string;
  etag: string;
  id: { kind: string; videoId: string };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

export interface SearchCaptionParams extends Record<string, any> {
  part?: ('id' | 'snippet')[];
  id?: string;
}

export interface SearchCaptionModel {
  kind: string;
  etag: string;
  id: string;
  snippet?: {
    videoId: string;
    lastUpdated: Date;
    trackKind: string;
    language: string;
    name: string;
    audioTrackType: string;
    isCC: boolean;
    isLarge: boolean;
    isEasyReader: boolean;
    isDraft: boolean;
    isAutoSynced: boolean;
    status: string;
  };
}

export interface GetVideoInfoParams extends Record<string, any> {
  part?: (
    | 'id'
    | 'snippet'
    | 'contentDetails'
    | 'fileDetails'
    | 'liveStreamingDetails'
    | 'player'
    | 'processingDetails'
    | 'recordingDetails'
    | 'statistics'
    | 'status'
    | 'suggestions'
    | 'topicDetails'
  )[];
  chart?: 'mostPopular';
  id?: string;
  maxResults?: number;
  pageToken?: string;
  regionCode?: string;
  videoCategoryId?: string;
}

export interface GetVideoInfoModel extends Record<string, any> {
  kind: string;
  etag: string;
  id?: string;
  snippet?: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
  };
  contentDetails?: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: string[];
      blocked: string[];
    };
    contentRating: {
      mpaaRating: string;
      tvpgRating: string;
      bbfcRating: string;
      chvrsRating: string;
      eirinRating: string;
      cbfcRating: string;
      fmocRating: string;
      icaaRating: string;
      acbRating: string;
      oflcRating: string;
      fskRating: string;
      kmrbRating: string;
      djctqRating: string;
      russiaRating: string;
      rtcRating: string;
      ytRating: string;
    };
  };
  status?: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
  };
  statistics?: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
  player?: {
    embedHtml: string;
  };
  topicDetails?: {
    topicIds: string[];
    relevantTopicIds: string[];
  };
  recordingDetails?: {
    locationDescription: string;
    location: {
      latitude: number;
      longitude: number;
      altitude: number;
    };
    recordingDate: string;
  };
  fileDetails?: {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    videoStreams: [
      {
        widthPixels: number;
        heightPixels: number;
        frameRateFps: number;
        aspectRatio: number;
        codec: string;
        bitrateBps: number;
        rotation: string;
        vendor: string;
      },
    ];
    audioStreams: [
      {
        channelCount: number;
        codec: string;
        bitrateBps: number;
        vendor: string;
      },
    ];
    durationMs: number;
    bitrateBps: number;
    recordingLocation: {
      latitude: number;
      longitude: number;
      altitude: number;
    };
    creationTime: string;
  };
  processingDetails?: {
    processingStatus: string;
    processingProgress: {
      partsTotal: number;
      partsProcessed: number;
      timeLeftMs: number;
    };
    processingFailureReason: string;
    fileDetailsAvailability: string;
    processingIssuesAvailability: string;
    tagSuggestionsAvailability: string;
    editorSuggestionsAvailability: string;
    thumbnailsAvailability: string;
  };
  suggestions?: {
    processingErrors: string[];
    processingWarnings: string[];
    processingHints: string[];
    tagSuggestions: [
      {
        tag: string;
        categoryRestricts: string[];
      },
    ];
    editorSuggestions: string[];
  };
}

// export interface GetCaptionParams extends Record<string, any> {
//   videoId: string;
//   id?: string;
// }

// export interface GetCaptionModel {}
