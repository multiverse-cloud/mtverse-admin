const missingSourceSlugs = new Set<string>([
  '/source/extended-ui/audio-player-widget',
  '/source/extended-ui/video-player-widget',
  '/source/extended-ui/image-compare-widget',
  '/source/extended-ui/map-placeholder-widget',
]);

export function hasSourceData(sourceSlug?: string) {
  if (!sourceSlug?.startsWith('/source/')) return false;
  return !missingSourceSlugs.has(sourceSlug);
}
