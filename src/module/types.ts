export type CaptionForamt = 'xml' | 'ttml' | 'vtt' | 'srv1' | 'srv2' | 'srv3';

export type APIResponse<T> = {
  kind: string;
  etag: string;
  items: T[];
};
