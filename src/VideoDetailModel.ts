/* eslint-disable no-use-before-define */
export interface VideoDetailsType {
  responseContext: ResponseContext;
  contents: Contents;
  currentVideoEndpoint: NextEndpoint;
  trackingParams: string;
  playerOverlays: PlayerOverlays;
  overlay: Overlay;
  onResponseReceivedEndpoints: OnResponseReceivedEndpoint[];
  engagementPanels: EngagementPanel[];
  topbar: Topbar;
  frameworkUpdates: FrameworkUpdates;
}

export interface FrameworkUpdates {
  entityBatchUpdate: EntityBatchUpdate;
}

export interface EntityBatchUpdate {
  mutations: Mutation[];
  timestamp: Timestamp;
}

export interface Timestamp {
  seconds: string;
  nanos: number;
}

export interface Mutation {
  entityKey: string;
  type: string;
  options: Options;
}

export interface Options {
  persistenceOption: string;
}

export interface Topbar {
  desktopTopbarRenderer: DesktopTopbarRenderer;
}

export interface DesktopTopbarRenderer {
  logo: Logo;
  searchbox: Searchbox;
  trackingParams: string;
  countryCode: string;
  topbarButtons: TopbarButton[];
  hotkeyDialog: HotkeyDialog;
  backButton: BackButton;
  forwardButton: BackButton;
  a11ySkipNavigationButton: A11ySkipNavigationButton;
  voiceSearchButton: VoiceSearchButton;
}

export interface VoiceSearchButton {
  buttonRenderer: ButtonRenderer18;
}

export interface ButtonRenderer18 {
  style: string;
  size: string;
  isDisabled: boolean;
  serviceEndpoint: ServiceEndpoint4;
  icon: Icon;
  tooltip: string;
  trackingParams: string;
  accessibilityData: Accessibility;
}

export interface ServiceEndpoint4 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signalServiceEndpoint: SignalServiceEndpoint5;
}

export interface SignalServiceEndpoint5 {
  signal: string;
  actions: Action7[];
}

export interface Action7 {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction4;
}

export interface OpenPopupAction4 {
  popup: Popup4;
  popupType: string;
}

export interface Popup4 {
  voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}

export interface VoiceSearchDialogRenderer {
  placeholderHeader: Title;
  promptHeader: Title;
  exampleQuery1: Title;
  exampleQuery2: Title;
  promptMicrophoneLabel: Title;
  loadingHeader: Title;
  connectionErrorHeader: Title;
  connectionErrorMicrophoneLabel: Title;
  permissionsHeader: Title;
  permissionsSubtext: Title;
  disabledHeader: Title;
  disabledSubtext: Title;
  microphoneButtonAriaLabel: Title;
  exitButton: ClearButton;
  trackingParams: string;
  microphoneOffPromptHeader: Title;
}

export interface A11ySkipNavigationButton {
  buttonRenderer: ButtonRenderer17;
}

export interface ButtonRenderer17 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: Title;
  trackingParams: string;
  command: OnResponseReceivedEndpoint;
}

export interface BackButton {
  buttonRenderer: ButtonRenderer16;
}

export interface ButtonRenderer16 {
  trackingParams: string;
  command: OnResponseReceivedEndpoint;
}

export interface HotkeyDialog {
  hotkeyDialogRenderer: HotkeyDialogRenderer;
}

export interface HotkeyDialogRenderer {
  title: Title;
  sections: Section[];
  dismissButton: DismissButton2;
  trackingParams: string;
}

export interface DismissButton2 {
  buttonRenderer: ButtonRenderer15;
}

export interface ButtonRenderer15 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: Title;
  trackingParams: string;
}

export interface Section {
  hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
  title: Title;
  options: Option[];
}

export interface Option {
  hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
  label: Title;
  hotkey: string;
  hotkeyAccessibilityLabel?: Accessibility;
}

export interface TopbarButton {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;
  buttonRenderer?: ButtonRenderer14;
}

export interface ButtonRenderer14 {
  style: string;
  size: string;
  text: Title;
  icon: Icon;
  navigationEndpoint: NavigationEndpoint11;
  trackingParams: string;
  targetId: string;
}

export interface NavigationEndpoint11 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  signInEndpoint: SignInEndpoint4;
}

export interface SignInEndpoint4 {
  idamTag: string;
}

export interface TopbarMenuButtonRenderer {
  icon: Icon;
  menuRequest: MenuRequest;
  trackingParams: string;
  accessibility: Accessibility;
  tooltip: string;
  style: string;
}

export interface MenuRequest {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  signalServiceEndpoint: SignalServiceEndpoint4;
}

export interface SignalServiceEndpoint4 {
  signal: string;
  actions: Action6[];
}

export interface Action6 {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction3;
}

export interface OpenPopupAction3 {
  popup: Popup3;
  popupType: string;
  beReused: boolean;
}

export interface Popup3 {
  multiPageMenuRenderer: MultiPageMenuRenderer;
}

export interface MultiPageMenuRenderer {
  trackingParams: string;
  style: string;
  showLoadingSpinner: boolean;
}

export interface Searchbox {
  fusionSearchboxRenderer: FusionSearchboxRenderer;
}

export interface FusionSearchboxRenderer {
  icon: Icon;
  placeholderText: Title;
  config: Config;
  trackingParams: string;
  searchEndpoint: SearchEndpoint2;
  clearButton: ClearButton;
}

export interface ClearButton {
  buttonRenderer: ButtonRenderer13;
}

export interface ButtonRenderer13 {
  style: string;
  size: string;
  isDisabled: boolean;
  icon: Icon;
  trackingParams: string;
  accessibilityData: Accessibility;
}

export interface SearchEndpoint2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  searchEndpoint: SearchEndpoint;
}

export interface SearchEndpoint {
  query: string;
}

export interface Config {
  webSearchboxConfig: WebSearchboxConfig;
}

export interface WebSearchboxConfig {
  requestLanguage: string;
  requestDomain: string;
  hasOnscreenKeyboard: boolean;
  focusSearchbox: boolean;
}

export interface Logo {
  topbarLogoRenderer: TopbarLogoRenderer;
}

export interface TopbarLogoRenderer {
  iconImage: Icon;
  tooltipText: Title;
  endpoint: Endpoint2;
  trackingParams: string;
  overrideEntityKey: string;
}

export interface EngagementPanel {
  engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}

export interface EngagementPanelSectionListRenderer {
  content: Content5;
  targetId: string;
  visibility: string;
  loggingDirectives: LoggingDirectives;
  panelIdentifier?: string;
  header?: Header;
  veType?: number;
}

export interface Header {
  engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}

export interface EngagementPanelTitleHeaderRenderer {
  title: ViewCountText;
  visibilityButton: VisibilityButton;
  trackingParams: string;
  contextualInfo?: Title;
  menu?: Menu2;
}

export interface Menu2 {
  sortFilterSubMenuRenderer: SortFilterSubMenuRenderer;
}

export interface SortFilterSubMenuRenderer {
  subMenuItems: SubMenuItem[];
  icon: Icon;
  accessibility: Accessibility;
  trackingParams: string;
}

export interface SubMenuItem {
  title: string;
  selected: boolean;
  serviceEndpoint: ServiceEndpoint3;
  trackingParams: string;
}

export interface ServiceEndpoint3 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  continuationCommand: ContinuationCommand2;
}

export interface ContinuationCommand2 {
  token: string;
  request: string;
  command: Command8;
}

export interface Command8 {
  clickTrackingParams: string;
  showReloadUiCommand: ScrollToEngagementPanelCommand;
}

export interface VisibilityButton {
  buttonRenderer: ButtonRenderer12;
}

export interface ButtonRenderer12 {
  icon: Icon;
  trackingParams: string;
  accessibilityData: Accessibility;
  command: Command7;
  style?: string;
  size?: string;
}

export interface Command7 {
  clickTrackingParams: string;
  commandExecutorCommand?: CommandExecutorCommand3;
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
}

export interface CommandExecutorCommand3 {
  commands: Command6[];
}

export interface Command6 {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
  updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
}

export interface UpdateToggleButtonStateCommand {
  toggled: boolean;
  buttonId: string;
}

export interface LoggingDirectives {
  trackingParams: string;
  visibility: Visibility;
  enableDisplayloggerExperiment: boolean;
}

export interface Visibility {
  types: string;
}

export interface Content5 {
  adsEngagementPanelContentRenderer?: SignInEndpoint;
  structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;
  sectionListRenderer?: SectionListRenderer;
}

export interface SectionListRenderer {
  contents: Content4[];
  trackingParams: string;
}

export interface Content4 {
  itemSectionRenderer: ItemSectionRenderer2;
}

export interface ItemSectionRenderer2 {
  contents: Content3[];
  trackingParams: string;
  sectionIdentifier: string;
  targetId: string;
}

export interface Content3 {
  continuationItemRenderer: ContinuationItemRenderer;
}

export interface StructuredDescriptionContentRenderer {
  items: Item3[];
}

export interface Item3 {
  expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer;
  videoDescriptionMusicSectionRenderer?: VideoDescriptionMusicSectionRenderer;
}

export interface VideoDescriptionMusicSectionRenderer {
  sectionTitle: ViewCount;
  carouselLockups: CarouselLockup[];
  topicLink: TopicLink;
  premiumUpsellLink: PremiumUpsellLink;
}

export interface PremiumUpsellLink {
  runs: Run5[];
}

export interface Run5 {
  text: string;
  navigationEndpoint: Endpoint2;
}

export interface TopicLink {
  topicLinkRenderer: TopicLinkRenderer;
}

export interface TopicLinkRenderer {
  title: ViewCount;
  thumbnailDetails: ThumbnailDetails;
  endpoint: Endpoint2;
  callToActionIcon: Icon;
  trackingParams: string;
}

export interface Endpoint2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata4;
  browseEndpoint: BrowseEndpoint2;
}

export interface BrowseEndpoint2 {
  browseId: string;
}

export interface ThumbnailDetails {
  thumbnails: CommonConfig[];
}

export interface CarouselLockup {
  carouselLockupRenderer: CarouselLockupRenderer;
}

export interface CarouselLockupRenderer {
  infoRows: InfoRow[];
}

export interface InfoRow {
  infoRowRenderer: InfoRowRenderer;
}

export interface InfoRowRenderer {
  title: ViewCount;
  defaultMetadata?: DefaultMetadata;
  trackingParams: string;
  infoRowExpandStatusKey?: string;
  expandedMetadata?: ViewCount;
  expandIcon?: Icon;
}

export interface DefaultMetadata {
  runs?: Run4[];
  simpleText?: string;
}

export interface Run4 {
  text: string;
  navigationEndpoint: NavigationEndpoint10;
}

export interface NavigationEndpoint10 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata7;
  watchEndpoint?: WatchEndpoint2;
  browseEndpoint?: BrowseEndpoint;
}

export interface CommandMetadata7 {
  webCommandMetadata: WebCommandMetadata7;
}

export interface WebCommandMetadata7 {
  url: string;
  webPageType: string;
  rootVe: number;
  apiUrl?: string;
}

export interface ExpandableVideoDescriptionBodyRenderer {
  descriptionBodyText: Title;
  showMoreText: ViewCount;
  showLessText: ViewCount;
}

export interface OnResponseReceivedEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signalServiceEndpoint: SignalServiceEndpoint3;
}

export interface SignalServiceEndpoint3 {
  signal: string;
  actions: Action5[];
}

export interface Action5 {
  clickTrackingParams: string;
  signalAction: SignalAction;
}

export interface SignalAction {
  signal: string;
}

export interface Overlay {
  tooltipRenderer: TooltipRenderer;
}

export interface TooltipRenderer {
  promoConfig: PromoConfig;
  targetId: string;
  text: Title;
  detailsText: Title;
  dismissButton: DismissButton;
  suggestedPosition: SubscriptionButton;
  dismissStrategy: SubscriptionButton;
  dwellTimeMs: string;
  trackingParams: string;
}

export interface DismissButton {
  buttonRenderer: ButtonRenderer11;
}

export interface ButtonRenderer11 {
  style: string;
  size: string;
  text: Title;
  trackingParams: string;
  command: Command5;
}

export interface Command5 {
  clickTrackingParams: string;
  commandExecutorCommand: CommandExecutorCommand2;
}

export interface CommandExecutorCommand2 {
  commands: ImpressionEndpoint[];
}

export interface PromoConfig {
  promoId: string;
  impressionEndpoints: ImpressionEndpoint[];
  acceptCommand: ImpressionEndpoint;
  dismissCommand: ImpressionEndpoint;
}

export interface ImpressionEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  feedbackEndpoint: FeedbackEndpoint;
}

export interface FeedbackEndpoint {
  feedbackToken: string;
  uiActions: UiActions;
}

export interface UiActions {
  hideEnclosingContainer: boolean;
}

export interface PlayerOverlays {
  playerOverlayRenderer: PlayerOverlayRenderer;
}

export interface PlayerOverlayRenderer {
  endScreen: EndScreen;
  autoplay: Autoplay3;
  shareButton: ShareButton;
  addToMenu: AddToMenu;
  videoDetails: VideoDetails;
  autonavToggle: AutonavToggle;
}

export interface AutonavToggle {
  autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer;
}

export interface AutoplaySwitchButtonRenderer {
  enabledAccessibilityData: Accessibility;
  disabledAccessibilityData: Accessibility;
  trackingParams: string;
}

export interface VideoDetails {
  playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}

export interface PlayerOverlayVideoDetailsRenderer {
  title: ViewCount;
  subtitle: Title;
}

export interface AddToMenu {
  menuRenderer: MenuRenderer3;
}

export interface MenuRenderer3 {
  trackingParams: string;
}

export interface ShareButton {
  buttonRenderer: ButtonRenderer10;
}

export interface ButtonRenderer10 {
  style: string;
  size: string;
  isDisabled: boolean;
  icon: Icon;
  navigationEndpoint: ServiceEndpoint;
  tooltip: string;
  trackingParams: string;
}

export interface Autoplay3 {
  playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer;
}

export interface PlayerOverlayAutoplayRenderer {
  title: ViewCount;
  videoTitle: SubscriberCountText;
  byline: Title2;
  pauseText: ViewCount;
  background: Thumbnail2;
  countDownSecs: number;
  cancelButton: CancelButton;
  nextButton: NextButton;
  trackingParams: string;
  closeButton: CloseButton;
  thumbnailOverlays: ThumbnailOverlay5[];
  preferImmediateRedirect: boolean;
  videoId: string;
  publishedTimeText: ViewCount;
  webShowNewAutonavCountdown: boolean;
  webShowBigThumbnailEndscreen: boolean;
  shortViewCountText: SubscriberCountText;
  countDownSecsForFullscreen: number;
}

export interface ThumbnailOverlay5 {
  thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}

export interface CloseButton {
  buttonRenderer: ButtonRenderer9;
}

export interface ButtonRenderer9 {
  style: string;
  size: string;
  isDisabled: boolean;
  icon: Icon;
  accessibility: AccessibilityData;
  trackingParams: string;
}

export interface NextButton {
  buttonRenderer: ButtonRenderer8;
}

export interface ButtonRenderer8 {
  style: string;
  size: string;
  isDisabled: boolean;
  navigationEndpoint: NextEndpoint;
  accessibility: AccessibilityData;
  trackingParams: string;
  accessibilityData: Accessibility;
}

export interface CancelButton {
  buttonRenderer: ButtonRenderer7;
}

export interface ButtonRenderer7 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: ViewCount;
  accessibility: AccessibilityData;
  trackingParams: string;
  accessibilityData: Accessibility;
  command: Command4;
}

export interface Command4 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  getSurveyCommand: GetSurveyCommand;
}

export interface GetSurveyCommand {
  endpoint: Endpoint;
  action: string;
}

export interface Endpoint {
  watch: SignInEndpoint;
}

export interface EndScreen {
  watchNextEndScreenRenderer: WatchNextEndScreenRenderer;
}

export interface WatchNextEndScreenRenderer {
  results: Result2[];
  title: ViewCount;
  trackingParams: string;
}

export interface Result2 {
  endScreenVideoRenderer?: EndScreenVideoRenderer;
  endScreenPlaylistRenderer?: EndScreenPlaylistRenderer;
}

export interface EndScreenPlaylistRenderer {
  playlistId: string;
  title: ViewCount;
  thumbnail: Thumbnail2;
  videoCount: string;
  longBylineText: Title2;
  videoCountText: Title;
  navigationEndpoint: NavigationEndpoint9;
  trackingParams: string;
}

export interface EndScreenVideoRenderer {
  videoId: string;
  thumbnail: Thumbnail2;
  title: SubscriberCountText;
  shortBylineText: Title2;
  lengthText?: SubscriberCountText;
  lengthInSeconds?: number;
  navigationEndpoint: NextEndpoint;
  trackingParams: string;
  shortViewCountText: ShortViewCountText;
  publishedTimeText: ViewCount;
  thumbnailOverlays: ThumbnailOverlay4[];
}

export interface ThumbnailOverlay4 {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2;
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayTimeStatusRenderer2 {
  text: Text;
  style: string;
  icon?: Icon;
}

export interface Text {
  accessibility: Accessibility;
  simpleText?: string;
  runs?: Run[];
}

export interface Contents {
  twoColumnWatchNextResults: TwoColumnWatchNextResults;
}

export interface TwoColumnWatchNextResults {
  results: Results2;
  secondaryResults: SecondaryResults2;
  autoplay: Autoplay2;
}

export interface Autoplay2 {
  autoplay: Autoplay;
}

export interface Autoplay {
  sets: set[];
  countDownSecs: number;
  trackingParams: string;
}

export interface set {
  mode: string;
  autoplayVideo: NavigationEndpoint;
}

export interface SecondaryResults2 {
  secondaryResults: SecondaryResults;
}

export interface SecondaryResults {
  results: Result[];
  trackingParams: string;
  targetId: string;
}

export interface Result {
  compactVideoRenderer?: CompactVideoRenderer;
  compactPlaylistRenderer?: CompactPlaylistRenderer;
  compactRadioRenderer?: CompactRadioRenderer;
  continuationItemRenderer?: ContinuationItemRenderer2;
}

export interface ContinuationItemRenderer2 {
  trigger: string;
  continuationEndpoint: ContinuationEndpoint;
  button: Button4;
}

export interface Button4 {
  buttonRenderer: ButtonRenderer6;
}

export interface ButtonRenderer6 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: Title;
  trackingParams: string;
  command: ContinuationEndpoint;
}

export interface CompactRadioRenderer {
  playlistId: string;
  thumbnail: Thumbnail3;
  title: ViewCount;
  navigationEndpoint: NavigationEndpoint9;
  videoCountText: Title;
  secondaryNavigationEndpoint: SecondaryNavigationEndpoint;
  longBylineText: ViewCount;
  trackingParams: string;
  thumbnailText: ThumbnailText;
  videoCountShortText: Title;
  shareUrl: string;
  thumbnailOverlays: ThumbnailOverlay3[];
}

export interface ThumbnailOverlay3 {
  thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer;
  thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer;
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayBottomPanelRenderer {
  icon: Icon;
}

export interface SecondaryNavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  watchEndpoint: WatchEndpoint5;
}

export interface WatchEndpoint5 {
  videoId: string;
  playlistId: string;
  params: string;
  loggingContext: LoggingContext;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface Thumbnail3 {
  thumbnails: Thumbnail[];
  sampledThumbnailColor: SampledThumbnailColor;
}

export interface SampledThumbnailColor {
  red: number;
  green: number;
  blue: number;
}

export interface CompactPlaylistRenderer {
  playlistId: string;
  thumbnail: Thumbnail2;
  title: ViewCount;
  shortBylineText: Title2;
  videoCountText: Title;
  navigationEndpoint: NavigationEndpoint9;
  publishedTimeText: ViewCount;
  videoCountShortText: ViewCount;
  trackingParams: string;
  sidebarThumbnails: Thumbnail2[];
  thumbnailText: ThumbnailText;
  shareUrl: string;
  thumbnailRenderer: ThumbnailRenderer;
  longBylineText: Title2;
  thumbnailOverlays: ThumbnailOverlay2[];
}

export interface ThumbnailOverlay2 {
  thumbnailOverlaySidePanelRenderer?: ThumbnailOverlaySidePanelRenderer;
  thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer;
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayHoverTextRenderer {
  text: Title;
  icon: Icon;
}

export interface ThumbnailOverlaySidePanelRenderer {
  text: ViewCount;
  icon: Icon;
}

export interface ThumbnailRenderer {
  playlistCustomThumbnailRenderer: PlaylistCustomThumbnailRenderer;
}

export interface PlaylistCustomThumbnailRenderer {
  thumbnail: Thumbnail2;
}

export interface ThumbnailText {
  runs: Run3[];
}

export interface Run3 {
  text: string;
  bold?: boolean;
}

export interface NavigationEndpoint9 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  watchEndpoint: WatchEndpoint4;
}

export interface WatchEndpoint4 {
  videoId: string;
  playlistId: string;
  params: string;
  continuePlayback: boolean;
  loggingContext: LoggingContext;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext;
}

export interface VssLoggingContext {
  serializedContextData: string;
}

export interface CompactVideoRenderer {
  videoId: string;
  thumbnail: Thumbnail2;
  title: SubscriberCountText;
  longBylineText: Title2;
  publishedTimeText?: ViewCount;
  viewCountText: ViewCountText;
  lengthText?: SubscriberCountText;
  navigationEndpoint: NavigationEndpoint8;
  shortBylineText: Title2;
  channelThumbnail: Thumbnail2;
  trackingParams: string;
  shortViewCountText: ShortViewCountText;
  menu: Menu;
  thumbnailOverlays: ThumbnailOverlay[];
  accessibility: Accessibility;
  badges?: Badge[];
  ownerBadges?: OwnerBadge[];
}

export interface OwnerBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer2;
}

export interface MetadataBadgeRenderer2 {
  icon: Icon;
  style: string;
  tooltip: string;
  trackingParams: string;
  accessibilityData: AccessibilityData;
}

export interface Badge {
  metadataBadgeRenderer: MetadataBadgeRenderer;
}

export interface MetadataBadgeRenderer {
  icon?: Icon;
  style: string;
  label: string;
  trackingParams: string;
}

export interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer;
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer;
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer;
}

export interface ThumbnailOverlayNowPlayingRenderer {
  text: Title;
}

export interface ThumbnailOverlayToggleButtonRenderer {
  isToggled?: boolean;
  untoggledIcon: Icon;
  toggledIcon: Icon;
  untoggledTooltip: string;
  toggledTooltip: string;
  untoggledServiceEndpoint: UntoggledServiceEndpoint;
  toggledServiceEndpoint?: ToggledServiceEndpoint;
  untoggledAccessibility: Accessibility;
  toggledAccessibility: Accessibility;
  trackingParams: string;
}

export interface ToggledServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  playlistEditEndpoint: PlaylistEditEndpoint2;
}

export interface PlaylistEditEndpoint2 {
  playlistId: string;
  actions: Action4[];
}

export interface Action4 {
  action: string;
  removedVideoId: string;
}

export interface UntoggledServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata6;
  playlistEditEndpoint?: PlaylistEditEndpoint;
  signalServiceEndpoint?: SignalServiceEndpoint2;
}

export interface SignalServiceEndpoint2 {
  signal: string;
  actions: Action3[];
}

export interface Action3 {
  clickTrackingParams: string;
  addToPlaylistCommand: AddToPlaylistCommand;
}

export interface PlaylistEditEndpoint {
  playlistId: string;
  actions: Action2[];
}

export interface Action2 {
  addedVideoId: string;
  action: string;
}

export interface CommandMetadata6 {
  webCommandMetadata: WebCommandMetadata6;
}

export interface WebCommandMetadata6 {
  sendPost: boolean;
  apiUrl?: string;
}

export interface ThumbnailOverlayTimeStatusRenderer {
  text: SubscriberCountText;
  style: string;
}

export interface Menu {
  menuRenderer: MenuRenderer2;
}

export interface MenuRenderer2 {
  items: Item2[];
  trackingParams: string;
  accessibility: Accessibility;
  targetId?: string;
}

export interface Item2 {
  menuServiceItemRenderer: MenuServiceItemRenderer;
}

export interface MenuServiceItemRenderer {
  text: Title;
  icon: Icon;
  serviceEndpoint: ServiceEndpoint2;
  trackingParams: string;
}

export interface ServiceEndpoint2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signalServiceEndpoint: SignalServiceEndpoint;
}

export interface SignalServiceEndpoint {
  signal: string;
  actions: Action[];
}

export interface Action {
  clickTrackingParams: string;
  addToPlaylistCommand?: AddToPlaylistCommand;
  openPopupAction?: OpenPopupAction2;
}

export interface OpenPopupAction2 {
  popup: Popup2;
  popupType: string;
}

export interface Popup2 {
  notificationActionRenderer: NotificationActionRenderer;
}

export interface NotificationActionRenderer {
  responseText: ViewCount;
  trackingParams: string;
}

export interface AddToPlaylistCommand {
  openMiniplayer: boolean;
  openListPanel: boolean;
  videoId: string;
  listType: string;
  onCreateListCommand: OnCreateListCommand;
  videoIds: string[];
}

export interface OnCreateListCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;
}

export interface CreatePlaylistServiceEndpoint {
  videoIds: string[];
  params: string;
}

export interface CommandMetadata5 {
  webCommandMetadata: WebCommandMetadata5;
}

export interface WebCommandMetadata5 {
  sendPost: boolean;
}

export interface ShortViewCountText {
  accessibility?: Accessibility;
  simpleText?: string;
  runs?: Run[];
}

export interface NavigationEndpoint8 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  watchEndpoint: WatchEndpoint3;
}

export interface WatchEndpoint3 {
  videoId: string;
  nofollow: boolean;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface ViewCountText {
  simpleText?: string;
  runs?: Run[];
}

export interface Results2 {
  results: Results;
}

export interface Results {
  contents: Content2[];
  trackingParams: string;
}

export interface Content2 {
  videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;
  videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
  itemSectionRenderer?: ItemSectionRenderer;
}

export interface ItemSectionRenderer {
  contents: Content[];
  trackingParams: string;
  sectionIdentifier: string;
  targetId?: string;
}

export interface Content {
  commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer;
  continuationItemRenderer?: ContinuationItemRenderer;
}

export interface ContinuationItemRenderer {
  trigger: string;
  continuationEndpoint: ContinuationEndpoint;
}

export interface ContinuationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  continuationCommand: ContinuationCommand;
}

export interface ContinuationCommand {
  token: string;
  request: string;
}

export interface CommentsEntryPointHeaderRenderer {
  headerText: Title;
  onTap: ShowMoreCommand;
  trackingParams: string;
  commentCount: ViewCount;
  teaserAvatar: TeaserAvatar;
  teaserContent: ViewCount;
  targetId: string;
}

export interface TeaserAvatar {
  thumbnails: Thumbnail[];
  accessibility: Accessibility;
}

export interface VideoSecondaryInfoRenderer {
  owner: Owner;
  description: Title;
  subscribeButton: SubscribeButton;
  metadataRowContainer: MetadataRowContainer;
  showMoreText: ViewCount;
  showLessText: ViewCount;
  trackingParams: string;
  defaultExpanded: boolean;
  descriptionCollapsedLines: number;
  showMoreCommand: ShowMoreCommand;
  showLessCommand: ShowLessCommand;
}

export interface ShowLessCommand {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface ShowMoreCommand {
  clickTrackingParams: string;
  commandExecutorCommand: CommandExecutorCommand;
}

export interface CommandExecutorCommand {
  commands: Command3[];
}

export interface Command3 {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction;
  scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand;
}

export interface ScrollToEngagementPanelCommand {
  targetId: string;
}

export interface ChangeEngagementPanelVisibilityAction {
  targetId: string;
  visibility: string;
}

export interface MetadataRowContainer {
  metadataRowContainerRenderer: MetadataRowContainerRenderer;
}

export interface MetadataRowContainerRenderer {
  collapsedItemCount: number;
  trackingParams: string;
}

export interface SubscribeButton {
  buttonRenderer: ButtonRenderer5;
}

export interface ButtonRenderer5 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: Title;
  navigationEndpoint: NavigationEndpoint7;
  trackingParams: string;
  targetId: string;
}

export interface NavigationEndpoint7 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  modalEndpoint: ModalEndpoint4;
}

export interface ModalEndpoint4 {
  modal: Modal4;
}

export interface Modal4 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer4;
}

export interface ModalWithTitleAndButtonRenderer4 {
  title: ViewCount;
  content: ViewCount;
  button: Button3;
}

export interface Button3 {
  buttonRenderer: ButtonRenderer4;
}

export interface ButtonRenderer4 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: ViewCount;
  navigationEndpoint: NavigationEndpoint6;
  trackingParams: string;
}

export interface NavigationEndpoint6 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  signInEndpoint: SignInEndpoint3;
}

export interface SignInEndpoint3 {
  nextEndpoint: NextEndpoint;
  continueAction: string;
  idamTag: string;
}

export interface Owner {
  videoOwnerRenderer: VideoOwnerRenderer;
}

export interface VideoOwnerRenderer {
  thumbnail: Thumbnail2;
  title: Title2;
  subscriptionButton: SubscriptionButton;
  navigationEndpoint: NavigationEndpoint5;
  subscriberCountText: SubscriberCountText;
  trackingParams: string;
}

export interface SubscriberCountText {
  accessibility: Accessibility;
  simpleText: string;
}

export interface SubscriptionButton {
  type: string;
}

export interface Title2 {
  runs: Run2[];
}

export interface Run2 {
  text: string;
  navigationEndpoint: NavigationEndpoint5;
}

export interface NavigationEndpoint5 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata4;
  browseEndpoint: BrowseEndpoint;
}

export interface BrowseEndpoint {
  browseId: string;
  canonicalBaseUrl: string;
}

export interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata4;
}

export interface WebCommandMetadata4 {
  url: string;
  webPageType: string;
  rootVe: number;
  apiUrl: string;
}

export interface Thumbnail2 {
  thumbnails: Thumbnail[];
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoPrimaryInfoRenderer {
  title: Title;
  viewCount: ViewCount2;
  videoActions: VideoActions;
  trackingParams: string;
  dateText: ViewCount;
}

export interface VideoActions {
  menuRenderer: MenuRenderer;
}

export interface MenuRenderer {
  items: Item[];
  trackingParams: string;
  topLevelButtons: TopLevelButton[];
  accessibility: Accessibility;
}

export interface TopLevelButton {
  toggleButtonRenderer?: ToggleButtonRenderer;
  buttonRenderer?: ButtonRenderer3;
}

export interface ButtonRenderer3 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: Title;
  serviceEndpoint?: ServiceEndpoint;
  icon: Icon;
  tooltip: string;
  trackingParams: string;
  accessibilityData: Accessibility;
  accessibility?: AccessibilityData;
  command?: Command2;
}

export interface Command2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  modalEndpoint: ModalEndpoint3;
}

export interface ModalEndpoint3 {
  modal: Modal3;
}

export interface Modal3 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer3;
}

export interface ModalWithTitleAndButtonRenderer3 {
  title: Title;
  content: Title;
  button: Button2;
}

export interface ServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
  shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}

export interface ShareEntityServiceEndpoint {
  serializedShareEntity: string;
  commands: Command[];
}

export interface Command {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction;
}

export interface OpenPopupAction {
  popup: Popup;
  popupType: string;
  beReused: boolean;
}

export interface Popup {
  unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}

export interface UnifiedSharePanelRenderer {
  trackingParams: string;
  showLoadingSpinner: boolean;
}

export interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadata3;
}

export interface WebCommandMetadata3 {
  sendPost: boolean;
  apiUrl: string;
}

export interface ToggleButtonRenderer {
  style: Style;
  isToggled: boolean;
  isDisabled: boolean;
  defaultIcon: Icon;
  defaultText: DefaultText;
  toggledText: DefaultText;
  accessibility: AccessibilityData;
  trackingParams: string;
  defaultTooltip: string;
  toggledTooltip: string;
  toggledStyle: Style;
  defaultNavigationEndpoint: DefaultNavigationEndpoint;
  accessibilityData: Accessibility;
  toggleButtonSupportedData: ToggleButtonSupportedData;
  targetId: string;
}

export interface ToggleButtonSupportedData {
  toggleButtonIdData: ToggleButtonIdData;
}

export interface ToggleButtonIdData {
  id: string;
}

export interface DefaultNavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  modalEndpoint: ModalEndpoint2;
}

export interface ModalEndpoint2 {
  modal: Modal2;
}

export interface Modal2 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2;
}

export interface ModalWithTitleAndButtonRenderer2 {
  title: ViewCount;
  content: ViewCount;
  button: Button2;
}

export interface Button2 {
  buttonRenderer: ButtonRenderer2;
}

export interface ButtonRenderer2 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: ViewCount;
  navigationEndpoint: NavigationEndpoint4;
  trackingParams: string;
}

export interface NavigationEndpoint4 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  signInEndpoint: SignInEndpoint2;
}

export interface SignInEndpoint2 {
  nextEndpoint: NextEndpoint;
  idamTag: string;
}

export interface NextEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  watchEndpoint: WatchEndpoint2;
}

export interface WatchEndpoint2 {
  videoId: string;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface Html5PlaybackOnesieConfig {
  commonConfig: CommonConfig;
}

export interface CommonConfig {
  url: string;
}

export interface DefaultText {
  accessibility?: Accessibility;
  simpleText: string;
}

export interface Accessibility {
  accessibilityData: AccessibilityData;
}

export interface AccessibilityData {
  label: string;
}

export interface Style {
  styleType: string;
}

export interface Item {
  menuNavigationItemRenderer: MenuNavigationItemRenderer;
}

export interface MenuNavigationItemRenderer {
  text: Title;
  icon: Icon;
  navigationEndpoint: NavigationEndpoint3;
  trackingParams: string;
}

export interface NavigationEndpoint3 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  modalEndpoint: ModalEndpoint;
}

export interface ModalEndpoint {
  modal: Modal;
}

export interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

export interface ModalWithTitleAndButtonRenderer {
  title: Title;
  content: Title;
  button: Button;
}

export interface Button {
  buttonRenderer: ButtonRenderer;
}

export interface ButtonRenderer {
  style: string;
  size: string;
  isDisabled: boolean;
  text: ViewCount;
  navigationEndpoint: NavigationEndpoint2;
  trackingParams: string;
}

export interface NavigationEndpoint2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  signInEndpoint: SignInEndpoint;
}

export interface SignInEndpoint {
  hack: boolean;
}

export interface CommandMetadata2 {
  webCommandMetadata: WebCommandMetadata2;
}

export interface WebCommandMetadata2 {
  ignoreNavigation: boolean;
}

export interface Icon {
  iconType: string;
}

export interface ViewCount2 {
  videoViewCountRenderer: VideoViewCountRenderer;
}

export interface VideoViewCountRenderer {
  viewCount: ViewCount;
  shortViewCount: ViewCount;
}

export interface ViewCount {
  simpleText: string;
}

export interface Title {
  runs: Run[];
}

export interface Run {
  text: string;
}

export interface ResponseContext {
  serviceTrackingParams: ServiceTrackingParam[];
  mainAppWebResponseContext: MainAppWebResponseContext;
  webResponseContextExtensionData: WebResponseContextExtensionData;
}

export interface WebResponseContextExtensionData {
  ytConfigData: YtConfigData;
  webPrefetchData: WebPrefetchData;
  hasDecorated: boolean;
}

export interface WebPrefetchData {
  navigationEndpoints: NavigationEndpoint[];
}

export interface NavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  watchEndpoint: WatchEndpoint;
}

export interface WatchEndpoint {
  videoId: string;
  params: string;
  playerParams: string;
  watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig;
}

export interface WatchEndpointSupportedPrefetchConfig {
  prefetchHintConfig: PrefetchHintConfig;
}

export interface PrefetchHintConfig {
  prefetchPriority: number;
  countdownUiRelativeSecondsPrefetchCondition: number;
}

export interface CommandMetadata {
  webCommandMetadata: WebCommandMetadata;
}

export interface WebCommandMetadata {
  url: string;
  webPageType: string;
  rootVe: number;
}

export interface YtConfigData {
  visitorData: string;
  rootVisualElementType: number;
}

export interface MainAppWebResponseContext {
  loggedOut: boolean;
}

export interface ServiceTrackingParam {
  service: string;
  params: Param[];
}

export interface Param {
  key: string;
  value: string;
}
