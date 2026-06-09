import { SourceCodeRegistry } from './types';

// UI Elements
import { buttonsSource } from './ui-elements/buttons';
import { alertsSource } from './ui-elements/alerts';
import { badgesSource } from './ui-elements/badges';
import { cardsSource } from './ui-elements/cards';
import { dropdownsSource } from './ui-elements/dropdowns';
import { modalsSource } from './ui-elements/modals';
import { tabsSource } from './ui-elements/tabs';
import { accordionsSource } from './ui-elements/accordions';
import { tooltipsSource } from './ui-elements/tooltips';
import { progressSource } from './ui-elements/progress';
import { spinnersSource } from './ui-elements/spinners';
import { skeletonsSource } from './ui-elements/skeletons';
import { avatarsSource } from './ui-elements/avatars';
import { paginationSource } from './ui-elements/pagination';
import { popoversSource } from './ui-elements/popovers';
import { toastsSource } from './ui-elements/toasts';
import { timelinesSource } from './ui-elements/timelines';
import { typographySource } from './ui-elements/typography';
import { breadcrumbSource } from './ui-elements/breadcrumb';
import { emptyStatesSource } from './ui-elements/empty-states';
import { tagInputSource } from './ui-elements/tag-input';
import { codeBlockSource } from './ui-elements/code-block';
import { dividersSource } from './ui-elements/dividers';
import { chipsSource } from './ui-elements/chips';
import { switchesSource } from './ui-elements/switches';
import { radioGroupsSource } from './ui-elements/radio-groups';
import { checkboxesSource } from './ui-elements/checkboxes';
import { textInputsSource } from './ui-elements/text-inputs';
import { textareasSource } from './ui-elements/textareas';
import { selectMenusSource } from './ui-elements/select-menus';
import { rangeSlidersSource } from './ui-elements/range-sliders';
import { fileUploadSource } from './ui-elements/file-upload';
import { colorSwatchesSource } from './ui-elements/color-swatches';
import { iconShowcaseSource } from './ui-elements/icon-showcase';
import { dataTagsSource } from './ui-elements/data-tags';
import { notificationBadgeSource } from './ui-elements/notification-badge';
import { statusIndicatorSource } from './ui-elements/status-indicator';
import { countdownTimerSource } from './ui-elements/countdown-timer';
import { gradientTextSource } from './ui-elements/gradient-text';
import { animatedUnderlineSource } from './ui-elements/animated-underline';
import { keyboardKeysSource } from './ui-elements/keyboard-keys';
import { metricCardsSource } from './ui-elements/metric-cards';
import { comparisonToggleSource } from './ui-elements/comparison-toggle';
import { scrollIndicatorSource } from './ui-elements/scroll-indicator';
import { resizablePanelSource } from './ui-elements/resizable-panel';
import { collapsibleSectionsSource } from './ui-elements/collapsible-sections';
import { dragHandleListSource } from './ui-elements/drag-handle-list';
import { tabsWithIconsSource } from './ui-elements/tabs-with-icons';
import { verticalNavSource } from './ui-elements/vertical-nav';
import { breadcrumbDropdownSource } from './ui-elements/breadcrumb-dropdown';

// New UI Elements
import { actionMenuSource } from './ui-elements/action-menu';
import { avatarStatusSource } from './ui-elements/avatar-status';
import { badgeGroupSource } from './ui-elements/badge-group';
import { breadcrumbSeparatorSource } from './ui-elements/breadcrumb-separator';
import { buttonLoadingSource } from './ui-elements/button-loading';
import { cardCollapsibleSource } from './ui-elements/card-collapsible';
import { chipInputSource } from './ui-elements/chip-input';
import { colorDotSource } from './ui-elements/color-dot';
import { counterBadgeSource } from './ui-elements/counter-badge';
import { dateBadgeSource } from './ui-elements/date-badge';
import { dotLoaderSource } from './ui-elements/dot-loader';
import { dropdownGroupSource } from './ui-elements/dropdown-group';
import { expandableTextSource } from './ui-elements/expandable-text';
import { filterChipSource } from './ui-elements/filter-chip';
import { floatingLabelSource } from './ui-elements/floating-label';
import { gradientBorderCardSource } from './ui-elements/gradient-border-card';
import { groupedAvatarSource } from './ui-elements/grouped-avatar';
import { iconBadgeSource } from './ui-elements/icon-badge';
import { imagePlaceholderSource } from './ui-elements/image-placeholder';
import { inlineEditSource } from './ui-elements/inline-edit';
import { keyValueListSource } from './ui-elements/key-value-list';
import { labelTagSource } from './ui-elements/label-tag';
import { linkPreviewSource } from './ui-elements/link-preview';
import { listCheckableSource } from './ui-elements/list-checkable';
import { loadingSkeletonSource } from './ui-elements/loading-skeleton';
import { mediaCardSource } from './ui-elements/media-card';
import { menuItemSource } from './ui-elements/menu-item';
import { metaTagSource } from './ui-elements/meta-tag';
import { miniChartSource } from './ui-elements/mini-chart';
import { multiSelectChipSource } from './ui-elements/multi-select-chip';
import { navPillSource } from './ui-elements/nav-pill';
import { numberCounterSource } from './ui-elements/number-counter';
import { optionCardSource } from './ui-elements/option-card';
import { overflowMenuSource } from './ui-elements/overflow-menu';
import { passwordStrengthSource } from './ui-elements/password-strength';
import { pillBadgeSource } from './ui-elements/pill-badge';
import { previewCardSource } from './ui-elements/preview-card';
import { progressStepSource } from './ui-elements/progress-step';
import { quantityInputSource } from './ui-elements/quantity-input';
import { radioCardSource } from './ui-elements/radio-card';
import { ratingDisplaySource } from './ui-elements/rating-display';
import { searchFilterSource } from './ui-elements/search-filter';
import { segmentedControlSource } from './ui-elements/segmented-control';
import { selectComboSource } from './ui-elements/select-combo';
import { signalIndicatorSource } from './ui-elements/signal-indicator';
import { sizeSelectorSource } from './ui-elements/size-selector';
import { sliderRangeSource } from './ui-elements/slider-range';
import { snippetCodeSource } from './ui-elements/snippet-code';
import { sortIndicatorSource } from './ui-elements/sort-indicator';
import { spinnerDotSource } from './ui-elements/spinner-dot';
import { stackedCardSource } from './ui-elements/stacked-card';
import { stepNavSource } from './ui-elements/step-nav';
import { stickyNoteSource } from './ui-elements/sticky-note';
import { subMenuSource } from './ui-elements/sub-menu';
import { swapButtonSource } from './ui-elements/swap-button';
import { tabScrollableSource } from './ui-elements/tab-scrollable';
import { tagClosableSource } from './ui-elements/tag-closable';
import { textHighlightSource } from './ui-elements/text-highlight';
import { thumbRatingSource } from './ui-elements/thumb-rating';
import { timeBadgeSource } from './ui-elements/time-badge';
import { toastStackUiSource } from './ui-elements/toast-stack-ui';
import { toggleChipSource } from './ui-elements/toggle-chip';
import { toolbarActionsSource } from './ui-elements/toolbar-actions';
import { tooltipRichSource } from './ui-elements/tooltip-rich';
import { treeItemSource } from './ui-elements/tree-item';
import { truncatedTextSource } from './ui-elements/truncated-text';
import { uploadZoneSource } from './ui-elements/upload-zone';
import { userMenuSource } from './ui-elements/user-menu';
import { verificationBadgeSource } from './ui-elements/verification-badge';
import { videoPlaceholderSource } from './ui-elements/video-placeholder';
import { virtualListUiSource } from './ui-elements/virtual-list-ui';
import { waveDividerSource } from './ui-elements/wave-divider';
import { weekPickerSource } from './ui-elements/week-picker';
import { widgetStatSource } from './ui-elements/widget-stat';
import { wizardStepUiSource } from './ui-elements/wizard-step-ui';
import { wordCounterSource } from './ui-elements/word-counter';
import { wrapTagSource } from './ui-elements/wrap-tag';
import { zoomControlSource } from './ui-elements/zoom-control';
import { accordionMultiSource } from './ui-elements/accordion-multi';
import { alertDismissibleSource } from './ui-elements/alert-dismissible';
import { avatarStackHorizontalSource } from './ui-elements/avatar-stack-horizontal';
import { badgeOverlaySource } from './ui-elements/badge-overlay';
import { breadcrumbTrailUiSource } from './ui-elements/breadcrumb-trail-ui';
import { buttonIconSplitSource } from './ui-elements/button-icon-split';
import { cardStatsSource } from './ui-elements/card-stats';
import { chipRemovableSource } from './ui-elements/chip-removable';
import { colorSwatchRowSource } from './ui-elements/color-swatch-row';
import { counterInlineSource } from './ui-elements/counter-inline';
import { dateRangeBadgeSource } from './ui-elements/date-range-badge';
import { dragIndicatorSource } from './ui-elements/drag-indicator';
import { dropdownOverflowSource } from './ui-elements/dropdown-overflow';
import { expandButtonSource } from './ui-elements/expand-button';
import { filterBarSource } from './ui-elements/filter-bar';
import { formFieldSource } from './ui-elements/form-field';
import { gradientHeaderSource } from './ui-elements/gradient-header';
import { groupCheckboxSource } from './ui-elements/group-checkbox';
import { iconToggleSource } from './ui-elements/icon-toggle';
import { imageCropPreviewSource } from './ui-elements/image-crop-preview';
import { inlineNotificationSource } from './ui-elements/inline-notification';
import { keyValueGridSource } from './ui-elements/key-value-grid';
import { labeledInputSource } from './ui-elements/labeled-input';
import { linkButtonSource } from './ui-elements/link-button';
import { listDraggableSource } from './ui-elements/list-draggable';
import { loadingDotsSource } from './ui-elements/loading-dots';
import { mediaObjectSource } from './ui-elements/media-object';
import { menuDropdownSource } from './ui-elements/menu-dropdown';
import { miniStatCardSource } from './ui-elements/mini-stat-card';
import { multiProgressSource } from './ui-elements/multi-progress';
import { nestedListSource } from './ui-elements/nested-list';
import { numberInputSpinnerSource } from './ui-elements/number-input-spinner';
import { optionToggleSource } from './ui-elements/option-toggle';
import { overlayTriggerSource } from './ui-elements/overlay-trigger';
import { passwordToggleSource } from './ui-elements/password-toggle';
import { pieMiniSource } from './ui-elements/pie-mini';
import { placeholderShimmerSource } from './ui-elements/placeholder-shimmer';
import { progressRingSource } from './ui-elements/progress-ring';
import { quickActionBarSource } from './ui-elements/quick-action-bar';
import { reactBadgeSource } from './ui-elements/react-badge';
import { scrollShadowSource } from './ui-elements/scroll-shadow';
import { selectGroupedSource } from './ui-elements/select-grouped';
import { sidebarMiniSource } from './ui-elements/sidebar-mini';
import { skeletonTableSource } from './ui-elements/skeleton-table';
import { sortableListSource } from './ui-elements/sortable-list';
import { spinnerBarSource } from './ui-elements/spinner-bar';
import { statusPulseSource } from './ui-elements/status-pulse';
import { stickyHeaderUiSource } from './ui-elements/sticky-header-ui';
import { summaryCardSource } from './ui-elements/summary-card';
import { tabClosableSource } from './ui-elements/tab-closable';
import { textTruncateSource } from './ui-elements/text-truncate';
import { themeSwitcherSource } from './ui-elements/theme-switcher';
import { toastNotificationSource } from './ui-elements/toast-notification';
import { toggleButtonGroupSource } from './ui-elements/toggle-button-group';
import { tooltipClickSource } from './ui-elements/tooltip-click';
import { uploadProgressSource } from './ui-elements/upload-progress';
import { userAvatarGroupSource } from './ui-elements/user-avatar-group';
import { verificationInputSource } from './ui-elements/verification-input';
import { viewToggleSource } from './ui-elements/view-toggle';
import { wizardProgressSource } from './ui-elements/wizard-progress';
import { yearPickerSource } from './ui-elements/year-picker';
import { accordionSidebarSource } from './ui-elements/accordion-sidebar';
import { alertBannerSource } from './ui-elements/alert-banner';
import { avatarDropdownSource } from './ui-elements/avatar-dropdown';
import { badgeStackSource } from './ui-elements/badge-stack';
import { breadcrumbIconSource } from './ui-elements/breadcrumb-icon';
import { buttonDropdownSource } from './ui-elements/button-dropdown';
import { cardInteractiveSource } from './ui-elements/card-interactive';
import { chipSelectSource } from './ui-elements/chip-select';
import { colorPickerMiniSource } from './ui-elements/color-picker-mini';
import { counterAnimatedSource } from './ui-elements/counter-animated';
import { dateInputSource } from './ui-elements/date-input';
import { drawerPanelSource } from './ui-elements/drawer-panel';
import { dropdownChecklistSource } from './ui-elements/dropdown-checklist';
import { expandCollapseSource } from './ui-elements/expand-collapse';
import { filterDropdownSource } from './ui-elements/filter-dropdown';
import { formGroupSource } from './ui-elements/form-group';
import { gradientTextBoxSource } from './ui-elements/gradient-text-box';
import { groupRadioSource } from './ui-elements/group-radio';
import { iconPickerSource } from './ui-elements/icon-picker';
import { imageGalleryMiniSource } from './ui-elements/image-gallery-mini';

// Advanced UI
import { animatedCounterSource } from './advanced-ui/animated-counter';
import { glowButtonSource } from './advanced-ui/glow-button';
import { flipCardSource } from './advanced-ui/flip-card';
import { shimmerLoaderSource } from './advanced-ui/shimmer-loader';
import { morphingIconSource } from './advanced-ui/morphing-icon';
import { staggerListSource } from './advanced-ui/stagger-list';
import { parallaxCardSource } from './advanced-ui/parallax-card';
import { waveBackgroundSource } from './advanced-ui/wave-background';
import { typewriterTextSource } from './advanced-ui/typewriter-text';
import { magneticButtonSource } from './advanced-ui/magnetic-button';
import { spotlightCardSource } from './advanced-ui/spotlight-card';
import { gradientBorderSource } from './advanced-ui/gradient-border';
import { rippleButtonSource } from './advanced-ui/ripple-button';
import { slideInPanelSource } from './advanced-ui/slide-in-panel';
import { toastStackSource } from './advanced-ui/toast-stack';
import { draggableCardSource } from './advanced-ui/draggable-card';
import { confettiButtonSource } from './advanced-ui/confetti-button';
import { neonGlowSource } from './advanced-ui/neon-glow';
import { glassCardSource } from './advanced-ui/glass-card';
import { stepperNavigationSource } from './advanced-ui/stepper-navigation';

// Advanced UI - New Components
import { threeDCardSource } from './advanced-ui/3d-card';
import { morphingShapeSource } from './advanced-ui/morphing-shape';
import { liquidButtonSource } from './advanced-ui/liquid-button';
import { particleBackgroundSource } from './advanced-ui/particle-background';
import { gradientMeshSource } from './advanced-ui/gradient-mesh';
import { tiltCardSource } from './advanced-ui/tilt-card';
import { elasticSliderSource } from './advanced-ui/elastic-slider';
import { physicsCardSource } from './advanced-ui/physics-card';
import { orbitLoaderSource } from './advanced-ui/orbit-loader';
import { dnaHelixSource } from './advanced-ui/dna-helix';
import { auroraBackgroundSource } from './advanced-ui/aurora-background';
import { fireworkButtonSource } from './advanced-ui/firework-button';
import { elasticInputSource } from './advanced-ui/elastic-input';
import { masonryGridSource } from './advanced-ui/masonry-grid';
import { marqueeTextSource } from './advanced-ui/marquee-text';
import { typingEffectSource } from './advanced-ui/typing-effect';
import { counterWheelSource } from './advanced-ui/counter-wheel';
import { breathingCardSource } from './advanced-ui/breathing-card';
import { hoverMorphSource } from './advanced-ui/hover-morph';
import { gravityListSource } from './advanced-ui/gravity-list';
import { glitchTextSource } from './advanced-ui/glitch-text';
import { waveTextSource } from './advanced-ui/wave-text';
import { springButtonSource } from './advanced-ui/spring-button';
import { particleButtonSource } from './advanced-ui/particle-button';
import { neonBorderSource } from './advanced-ui/neon-border';
import { matrixRainSource } from './advanced-ui/matrix-rain';
import { blurRevealContentSource } from './advanced-ui/blur-reveal-content';
import { scaleRevealSource } from './advanced-ui/scale-reveal';
import { slideRevealSource } from './advanced-ui/slide-reveal';
import { fadeGridSource } from './advanced-ui/fade-grid';
import { staggerCardsSource } from './advanced-ui/stagger-cards';
import { zoomGallerySource } from './advanced-ui/zoom-gallery';
import { swipeDeckSource } from './advanced-ui/swipe-deck';
import { bouncingDotsSource } from './advanced-ui/bouncing-dots';
import { rotatingTextSource } from './advanced-ui/rotating-text';

// Advanced UI - Previously Missing
import { accordionanimatedSource } from './advanced-ui/accordion-animated';
import { blurrevealSource } from './advanced-ui/blur-reveal';
import { bouncenotificationSource } from './advanced-ui/bounce-notification';
import { checkboxanimatedSource } from './advanced-ui/checkbox-animated';
import { draweranimatedSource } from './advanced-ui/drawer-animated';
import { dropdownmenuanimatedSource } from './advanced-ui/dropdown-menu-animated';
import { errorboundaryfallbackSource } from './advanced-ui/error-boundary-fallback';
import { expandablesearchSource } from './advanced-ui/expandable-search';
import { fadeinimageSource } from './advanced-ui/fade-in-image';
import { floatingactionbuttonSource } from './advanced-ui/floating-action-button';
import { gradienttextSource } from './advanced-ui/gradient-text';
import { infinitescrollloaderSource } from './advanced-ui/infinite-scroll-loader';
import { jelloeffectSource } from './advanced-ui/jello-effect';
import { popoveranimatedSource } from './advanced-ui/popover-animated';
import { progresscircleanimatedSource } from './advanced-ui/progress-circle-animated';
import { progressstepanimatedSource } from './advanced-ui/progress-step-animated';
import { pulltorefreshSource } from './advanced-ui/pull-to-refresh';
import { pulsedotSource } from './advanced-ui/pulse-dot';
import { radioanimatedSource } from './advanced-ui/radio-animated';
import { revealcardSource } from './advanced-ui/reveal-card';
import { rotatingloaderSource } from './advanced-ui/rotating-loader';
import { scalehoverSource } from './advanced-ui/scale-hover';
import { sidebaranimatedSource } from './advanced-ui/sidebar-animated';
import { slideupmodalSource } from './advanced-ui/slide-up-modal';
import { successanimationSource } from './advanced-ui/success-animation';
import { swipeablelistitemSource } from './advanced-ui/swipeable-list-item';
import { tabindicatorSource } from './advanced-ui/tab-indicator';
import { toggleswitchanimatedSource } from './advanced-ui/toggle-switch-animated';
import { tooltipanimatedSource } from './advanced-ui/tooltip-animated';
import { wobblebuttonSource } from './advanced-ui/wobble-button';

// New Advanced UI
import { threeDFlipCardSource } from './advanced-ui/3d-flip-card';
import { accordionTreeSource } from './advanced-ui/accordion-tree';
import { animatedBorderSource } from './advanced-ui/animated-border';
import { auroraCardSource } from './advanced-ui/aurora-card';
import { bentoGridSource } from './advanced-ui/bento-grid';
import { blobAnimationSource } from './advanced-ui/blob-animation';
import { bounceScrollSource } from './advanced-ui/bounce-scroll';
import { canvasParticlesSource } from './advanced-ui/canvas-particles';
import { chartLiveSource } from './advanced-ui/chart-live';
import { confettiExplosionSource } from './advanced-ui/confetti-explosion';
import { cursorGlowSource } from './advanced-ui/cursor-glow';
import { dataTypewriterSource } from './advanced-ui/data-typewriter';
import { elasticScrollSource } from './advanced-ui/elastic-scroll';
import { flipBoardSource } from './advanced-ui/flip-board';
import { floatingCardsSource } from './advanced-ui/floating-cards';
import { galaxyBackgroundSource } from './advanced-ui/galaxy-background';
import { glassMorphismPanelSource } from './advanced-ui/glass-morphism-panel';
import { gradientFlowSource } from './advanced-ui/gradient-flow';
import { hexagonGridSource } from './advanced-ui/hexagon-grid';
import { hologramCardSource } from './advanced-ui/hologram-card';
import { interactiveGridSource } from './advanced-ui/interactive-grid';
import { jellyCardSource } from './advanced-ui/jelly-card';
import { kaleidoscopeSource } from './advanced-ui/kaleidoscope';
import { lavaLampSource } from './advanced-ui/lava-lamp';
import { magneticCardsSource } from './advanced-ui/magnetic-cards';
import { marqueeInfiniteSource } from './advanced-ui/marquee-infinite';
import { morphingLayoutSource } from './advanced-ui/morphing-layout';
import { neonButtonSource } from './advanced-ui/neon-button';
import { orbitSystemSource } from './advanced-ui/orbit-system';
import { parallaxGallerySource } from './advanced-ui/parallax-gallery';
import { physicsSimulationSource } from './advanced-ui/physics-simulation';
import { rippleEffectSource } from './advanced-ui/ripple-effect';
import { safariCardSource } from './advanced-ui/safari-card';
import { spotlightFocusSource } from './advanced-ui/spotlight-focus';
import { staggerAnimationSource } from './advanced-ui/stagger-animation';
import { waveCanvasSource } from './advanced-ui/wave-canvas';
import { xylophoneBarsSource } from './advanced-ui/xylophone-bars';
import { zenBackgroundSource } from './advanced-ui/zen-background';
import { zoomMorphSource } from './advanced-ui/zoom-morph';
import { accordionExpandSource } from './advanced-ui/accordion-expand';
import { backgroundShiftSource } from './advanced-ui/background-shift';
import { cardStackSource } from './advanced-ui/card-stack';
import { dragPreviewSource } from './advanced-ui/drag-preview';
import { elasticListSource } from './advanced-ui/elastic-list';
import { floatingDockSource } from './advanced-ui/floating-dock';
import { glowPanelSource } from './advanced-ui/glow-panel';
import { hoverDepthSource } from './advanced-ui/hover-depth';
import { isometricGridSource } from './advanced-ui/isometric-grid';
import { jumpButtonSource } from './advanced-ui/jump-button';
import { kineticTypographySource } from './advanced-ui/kinetic-typography';
import { liquidNavSource } from './advanced-ui/liquid-nav';
import { morphButtonGroupSource } from './advanced-ui/morph-button-group';
import { neonTextSource } from './advanced-ui/neon-text';
import { oscillateLoaderSource } from './advanced-ui/oscillate-loader';
import { particleNetworkSource } from './advanced-ui/particle-network';
import { quicksandEffectSource } from './advanced-ui/quicksand-effect';
import { revealAnimationSource } from './advanced-ui/reveal-animation';
import { shimmerBorderSource } from './advanced-ui/shimmer-border';
import { snapScrollSource } from './advanced-ui/snap-scroll';
import { tiltGallerySource } from './advanced-ui/tilt-gallery';
import { vortexLoaderSource } from './advanced-ui/vortex-loader';
import { waveTextAnimationSource } from './advanced-ui/wave-text-animation';
import { xRayCardSource } from './advanced-ui/x-ray-card';
import { yieldAnimationSource } from './advanced-ui/yield-animation';
import { accordionDragSource } from './advanced-ui/accordion-drag';
import { blurTransitionSource } from './advanced-ui/blur-transition';
import { cardFlip3dSource } from './advanced-ui/card-flip-3d';
import { depthCardSource } from './advanced-ui/depth-card';
import { elasticGridSource } from './advanced-ui/elastic-grid';
import { floatingActionSource } from './advanced-ui/floating-action';
import { gradientOrbSource } from './advanced-ui/gradient-orb';
import { hoverGlowSource } from './advanced-ui/hover-glow';
import { interactiveMeshSource } from './advanced-ui/interactive-mesh';
import { jellyButtonSource } from './advanced-ui/jelly-button';
import { knobControlSource } from './advanced-ui/knob-control';
import { lavaMenuSource } from './advanced-ui/lava-menu';
import { morphInputSource } from './advanced-ui/morph-input';
import { neonLineSource } from './advanced-ui/neon-line';
import { orbitMenuSource } from './advanced-ui/orbit-menu';
import { parallaxTextSource } from './advanced-ui/parallax-text';
import { pieSpinSource } from './advanced-ui/pie-spin';
import { radialProgressSource } from './advanced-ui/radial-progress';
import { shakeEffectSource } from './advanced-ui/shake-effect';
import { skeletonWaveSource } from './advanced-ui/skeleton-wave';
import { springListSource } from './advanced-ui/spring-list';
import { typewriterLoopSource } from './advanced-ui/typewriter-loop';
import { unfoldCardSource } from './advanced-ui/unfold-card';
import { vibrateButtonSource } from './advanced-ui/vibrate-button';
import { waterRippleSource } from './advanced-ui/water-ripple';
import { accordionSlideSource } from './advanced-ui/accordion-slide';
import { bubbleAnimationSource } from './advanced-ui/bubble-animation';
import { cardSwapSource } from './advanced-ui/card-swap';
import { dragSortSource } from './advanced-ui/drag-sort';
import { elasticButtonSource } from './advanced-ui/elastic-button';
import { floatingLabelsSource } from './advanced-ui/floating-labels';
import { glowTextSource } from './advanced-ui/glow-text';
import { hoverScaleSource } from './advanced-ui/hover-scale';
import { ionBackgroundSource } from './advanced-ui/ion-background';
import { jumpTextSource } from './advanced-ui/jump-text';
import { keyframeRotateSource } from './advanced-ui/keyframe-rotate';
import { lensEffectSource } from './advanced-ui/lens-effect';
import { morphDialogSource } from './advanced-ui/morph-dialog';
import { neonPulseSource } from './advanced-ui/neon-pulse';
import { orbitSpinnerSource } from './advanced-ui/orbit-spinner';
import { pathAnimationSource } from './advanced-ui/path-animation';
import { pistonLoaderSource } from './advanced-ui/piston-loader';
import { radialMenuSource } from './advanced-ui/radial-menu';
import { shakeInputSource } from './advanced-ui/shake-input';
import { skewCardSource } from './advanced-ui/skew-card';
import { spotlightSearchSource } from './advanced-ui/spotlight-search';
import { toggleMorphSource } from './advanced-ui/toggle-morph';
import { underwaveSource } from './advanced-ui/underwave';
import { vortexCardSource } from './advanced-ui/vortex-card';
import { zigzagDividerSource } from './advanced-ui/zigzag-divider';
import { accordionRevealSource } from './advanced-ui/accordion-reveal';
import { blurCardSource } from './advanced-ui/blur-card';
import { cardTiltSource } from './advanced-ui/card-tilt';
import { driftAnimationSource } from './advanced-ui/drift-animation';
import { elasticToggleSource } from './advanced-ui/elastic-toggle';
import { floatAnimationSource } from './advanced-ui/float-animation';
import { glowRingSource } from './advanced-ui/glow-ring';
import { hoverBoardSource } from './advanced-ui/hover-board';
import { inverseCardSource } from './advanced-ui/inverse-card';
import { jellyGridSource } from './advanced-ui/jelly-grid';
import { knobSpinnerSource } from './advanced-ui/knob-spinner';
import { lavaButtonSource } from './advanced-ui/lava-button';
import { morphTabsSource } from './advanced-ui/morph-tabs';
import { neonSwitchSource } from './advanced-ui/neon-switch';
import { orbitDotsSource } from './advanced-ui/orbit-dots';
import { parallaxScrollSource } from './advanced-ui/parallax-scroll';
import { progressMorphSource } from './advanced-ui/progress-morph';
import { rainEffectSource } from './advanced-ui/rain-effect';
import { slideElasticSource } from './advanced-ui/slide-elastic';
import { spinLoaderSource } from './advanced-ui/spin-loader';
import { stretchTextSource } from './advanced-ui/stretch-text';
import { twistCardSource } from './advanced-ui/twist-card';
import { waveButtonSource } from './advanced-ui/wave-button';
import { vortexSpinnerSource } from './advanced-ui/vortex-spinner';
import { accordionGroupSource } from './advanced-ui/accordion-group';
import { blendCardSource } from './advanced-ui/blend-card';
import { cableAnimationSource } from './advanced-ui/cable-animation';
import { distortEffectSource } from './advanced-ui/distort-effect';
import { emberGlowSource } from './advanced-ui/ember-glow';
import { flareButtonSource } from './advanced-ui/flare-button';
import { ghostCardSource } from './advanced-ui/ghost-card';

// Extended UI
import { commandPaletteSource } from './extended-ui/command-palette';
import { colorPickerSource } from './extended-ui/color-picker';
import { dateDisplaySource } from './extended-ui/date-display';
import { keyboardShortcutsSource } from './extended-ui/keyboard-shortcuts';
import { copyToClipboardSource } from './extended-ui/copy-to-clipboard';
import { ratingStarsSource } from './extended-ui/rating-stars';
import { likeButtonSource } from './extended-ui/like-button';
import { shareButtonSource } from './extended-ui/share-button';
import { bookmarkButtonSource } from './extended-ui/bookmark-button';
import { followButtonSource } from './extended-ui/follow-button';
import { mentionInputSource } from './extended-ui/mention-input';
import { hashtagInputSource } from './extended-ui/hashtag-input';
import { richTextEditorSource } from './extended-ui/rich-text-editor';
import { markdownPreviewSource } from './extended-ui/markdown-preview';
import { codeEditorSource } from './extended-ui/code-editor';
import { diffViewerSource } from './extended-ui/diff-viewer';
import { fileTreeSource } from './extended-ui/file-tree';
import { breadcrumbTrailSource } from './extended-ui/breadcrumb-trail';
import { stepperFormSource } from './extended-ui/stepper-form';
import { carouselSource } from './extended-ui/carousel';
import { audioPlayerSource } from './extended-ui/audio-player';
import { videoPlayerSource } from './extended-ui/video-player';
import { calendarWidgetSource } from './extended-ui/calendar-widget';
import { weatherWidgetSource } from './extended-ui/weather-widget';
import { stockTickerSource } from './extended-ui/stock-ticker';
import { chatBubbleSource } from './extended-ui/chat-bubble';
import { socialCardSource } from './extended-ui/social-card';
import { productCardSource } from './extended-ui/product-card';
import { profileCardSource } from './extended-ui/profile-card';
import { notificationPanelSource } from './extended-ui/notification-panel';
import { activityFeedSource } from './extended-ui/activity-feed';
import { commentThreadSource } from './extended-ui/comment-thread';
import { tagManagerSource } from './extended-ui/tag-manager';
import { imageCompareSource } from './extended-ui/image-compare';
import { mapPlaceholderSource } from './extended-ui/map-placeholder';
import { dataTableMiniSource } from './extended-ui/data-table-mini';
import { chartPlaceholderSource } from './extended-ui/chart-placeholder';
import { progressDashboardSource } from './extended-ui/progress-dashboard';
import { surveyFormSource } from './extended-ui/survey-form';
import { contactCardSource } from './extended-ui/contact-card';
import { pricingToggleSource } from './extended-ui/pricing-toggle';
import { filterPanelSource } from './extended-ui/filter-panel';
import { searchResultsSource } from './extended-ui/search-results';
import { avatarGroupSource } from './extended-ui/avatar-group';
import { kanbanBoardSource } from './extended-ui/kanban-board';
import { metricGaugeSource } from './extended-ui/metric-gauge';
import { donutChartSource } from './extended-ui/donut-chart';
import { badgeCollectionSource } from './extended-ui/badge-collection';
import { onboardingStepsSource } from './extended-ui/onboarding-steps';
import { cookieConsentSource } from './extended-ui/cookie-consent';

// Extended UI - Previously Missing
import { announcementbarSource } from './extended-ui/announcement-bar';
import { avataruploadSource } from './extended-ui/avatar-upload';
import { chartwidgetSource } from './extended-ui/chart-widget';
import { cookiebannerSource } from './extended-ui/cookie-banner';
import { dropzoneareaSource } from './extended-ui/dropzone-area';
import { filelistSource } from './extended-ui/file-list';
import { focustrapSource } from './extended-ui/focus-trap';
import { fullscreentoggleSource } from './extended-ui/fullscreen-toggle';
import { gallerygridSource } from './extended-ui/gallery-grid';
import { infobannerSource } from './extended-ui/info-banner';
import { keyboardnavSource } from './extended-ui/keyboard-nav';
import { lightboxSource } from './extended-ui/lightbox';
import { liveregionSource } from './extended-ui/live-region';
import { maintenancebannerSource } from './extended-ui/maintenance-banner';
import { onboardingtooltipSource } from './extended-ui/onboarding-tooltip';
import { printbuttonSource } from './extended-ui/print-button';
import { qrcodeSource } from './extended-ui/qr-code';
import { reactionpickerSource } from './extended-ui/reaction-picker';
import { screenreaderonlySource } from './extended-ui/screen-reader-only';
import { skiplinkSource } from './extended-ui/skip-link';
import { statwidgetSource } from './extended-ui/stat-widget';
import { syntaxhighlightSource } from './extended-ui/syntax-highlight';
import { timedisplaySource } from './extended-ui/time-display';
import { tourguideSource } from './extended-ui/tour-guide';
import { warningbannerSource } from './extended-ui/warning-banner';
import { wizardnavSource } from './extended-ui/wizard-nav';

// New Extended UI
import { activityTimelineSource } from './extended-ui/activity-timeline';
import { addressBookSource } from './extended-ui/address-book';
import { analyticsWidgetSource } from './extended-ui/analytics-widget';
import { audioVisualizerSource } from './extended-ui/audio-visualizer';
import { badgeSystemSource } from './extended-ui/badge-system';
import { billingCardSource } from './extended-ui/billing-card';
import { bookmarkManagerSource } from './extended-ui/bookmark-manager';
import { calendarHeatmapSource } from './extended-ui/calendar-heatmap';
import { chatInterfaceSource } from './extended-ui/chat-interface';
import { colorPaletteSource } from './extended-ui/color-palette';
import { commandInputSource } from './extended-ui/command-input';
import { comparisonSliderSource } from './extended-ui/comparison-slider';
import { couponGeneratorSource } from './extended-ui/coupon-generator';
import { dataExplorerSource } from './extended-ui/data-explorer';
import { diffEditorSource } from './extended-ui/diff-editor';
import { emailTemplateSource } from './extended-ui/email-template';
import { feedbackFormSource } from './extended-ui/feedback-form';
import { fileBrowserSource } from './extended-ui/file-browser';
import { ganttChartSource } from './extended-ui/gantt-chart';
import { habitTrackerSource } from './extended-ui/habit-tracker';
import { imageEditorSource } from './extended-ui/image-editor';
import { invoiceBuilderSource } from './extended-ui/invoice-builder';
import { journalEntrySource } from './extended-ui/journal-entry';
import { kanbanAdvancedSource } from './extended-ui/kanban-advanced';
import { layoutBuilderSource } from './extended-ui/layout-builder';
import { mapLocatorSource } from './extended-ui/map-locator';
import { markdownEditorExtSource } from './extended-ui/markdown-editor-ext';
import { navigationBreadcrumbSource } from './extended-ui/navigation-breadcrumb';
import { orderTrackerSource } from './extended-ui/order-tracker';
import { paymentFormSource } from './extended-ui/payment-form';
import { quizComponentSource } from './extended-ui/quiz-component';
import { recipeCardSource } from './extended-ui/recipe-card';
import { shoppingListSource } from './extended-ui/shopping-list';
import { taskOrganizerSource } from './extended-ui/task-organizer';
import { unitConverterSource } from './extended-ui/unit-converter';
import { versionHistorySource } from './extended-ui/version-history';
import { weatherDashboardSource } from './extended-ui/weather-dashboard';
import { workoutPlannerSource } from './extended-ui/workout-planner';
import { xmlViewerSource } from './extended-ui/xml-viewer';
import { yamlEditorSource } from './extended-ui/yaml-editor';
import { accountSelectorSource } from './extended-ui/account-selector';
import { barcodeScannerSource } from './extended-ui/barcode-scanner';
import { calendarSchedulerSource } from './extended-ui/calendar-scheduler';
import { chartBuilderSource } from './extended-ui/chart-builder';
import { documentViewerSource } from './extended-ui/document-viewer';
import { excelGridSource } from './extended-ui/excel-grid';
import { formWizardSource } from './extended-ui/form-wizard';
import { geoAutocompleteSource } from './extended-ui/geo-autocomplete';
import { hexPickerSource } from './extended-ui/hex-picker';
import { integrationPanelSource } from './extended-ui/integration-panel';
import { jsonTreeSource } from './extended-ui/json-tree';
import { keyManagerSource } from './extended-ui/key-manager';
import { linkShortenerSource } from './extended-ui/link-shortener';
import { metricBoardSource } from './extended-ui/metric-board';
import { noteOrganizerSource } from './extended-ui/note-organizer';
import { otpVerificationSource } from './extended-ui/otp-verification';
import { pipelineViewSource } from './extended-ui/pipeline-view';
import { queryBuilderSource } from './extended-ui/query-builder';
import { roleManagerSource } from './extended-ui/role-manager';
import { spreadsheetMiniSource } from './extended-ui/spreadsheet-mini';
import { tagCloudSource } from './extended-ui/tag-cloud';
import { userDirectorySource } from './extended-ui/user-directory';
import { videoConferenceSource } from './extended-ui/video-conference';
import { webhookEditorSource } from './extended-ui/webhook-editor';
import { zipExplorerSource } from './extended-ui/zip-explorer';
import { approvalFlowSource } from './extended-ui/approval-flow';
import { budgetTrackerSource } from './extended-ui/budget-tracker';
import { checklistAdvancedSource } from './extended-ui/checklist-advanced';
import { diagramViewerSource } from './extended-ui/diagram-viewer';
import { escalationMatrixSource } from './extended-ui/escalation-matrix';
import { fleetMonitorSource } from './extended-ui/fleet-monitor';
import { gradeBookSource } from './extended-ui/grade-book';
import { healthDashboardSource } from './extended-ui/health-dashboard';
import { inventoryGridSource } from './extended-ui/inventory-grid';
import { jobQueueSource } from './extended-ui/job-queue';
import { knowledgeBaseSource } from './extended-ui/knowledge-base';
import { licenseManagerSource } from './extended-ui/license-manager';
import { milestoneTrackerSource } from './extended-ui/milestone-tracker';
import { newsletterBuilderSource } from './extended-ui/newsletter-builder';
import { orgChartSource } from './extended-ui/org-chart';
import { permissionGridSource } from './extended-ui/permission-grid';
import { quoteGeneratorSource } from './extended-ui/quote-generator';
import { resourceAllocatorSource } from './extended-ui/resource-allocator';
import { schedulingBoardSource } from './extended-ui/scheduling-board';
import { timelineAdvancedSource } from './extended-ui/timeline-advanced';
import { uptimeMonitorSource } from './extended-ui/uptime-monitor';
import { vendorListSource } from './extended-ui/vendor-list';
import { workflowDesignerSource } from './extended-ui/workflow-designer';
import { xrayViewerSource } from './extended-ui/xray-viewer';
import { accessLogSource } from './extended-ui/access-log';
import { benefitCardSource } from './extended-ui/benefit-card';
import { competencyMatrixSource } from './extended-ui/competency-matrix';
import { dailyPlannerSource } from './extended-ui/daily-planner';
import { eventSchedulerSource } from './extended-ui/event-scheduler';
import { forumThreadSource } from './extended-ui/forum-thread';
import { goalTrackerSource } from './extended-ui/goal-tracker';
import { hrDashboardSource } from './extended-ui/hr-dashboard';
import { ideaBoardSource } from './extended-ui/idea-board';
import { journalCalendarSource } from './extended-ui/journal-calendar';
import { keyResultTrackerSource } from './extended-ui/key-result-tracker';
import { learningPathSource } from './extended-ui/learning-path';
import { membershipCardSource } from './extended-ui/membership-card';
import { notificationHubSource } from './extended-ui/notification-hub';
import { outcomeTrackerSource } from './extended-ui/outcome-tracker';
import { performanceReviewSource } from './extended-ui/performance-review';
import { questionBankSource } from './extended-ui/question-bank';
import { riskRegisterSource } from './extended-ui/risk-register';
import { sprintBoardSource } from './extended-ui/sprint-board';
import { taskDependencySource } from './extended-ui/task-dependency';
import { usageAnalyticsSource } from './extended-ui/usage-analytics';
import { valueStreamSource } from './extended-ui/value-stream';
import { whiteboardMiniSource } from './extended-ui/whiteboard-mini';
import { activityHeatmapSource } from './extended-ui/activity-heatmap';
import { bookReaderSource } from './extended-ui/book-reader';
import { codeReviewSource } from './extended-ui/code-review';
import { decisionMatrixSource } from './extended-ui/decision-matrix';
import { eventLogSource } from './extended-ui/event-log';
import { feedbackCollectorSource } from './extended-ui/feedback-collector';
import { gitDiffViewerSource } from './extended-ui/git-diff-viewer';
import { heatmapCalendarSource } from './extended-ui/heatmap-calendar';
import { inspectionFormSource } from './extended-ui/inspection-form';
import { jobApplicationSource } from './extended-ui/job-application';
import { kanbanSwimlaneSource } from './extended-ui/kanban-swimlane';
import { logViewerSource } from './extended-ui/log-viewer';
import { mediaBrowserSource } from './extended-ui/media-browser';
import { networkGraphSource } from './extended-ui/network-graph';
import { orgTreeSource } from './extended-ui/org-tree';
import { pollWidgetSource } from './extended-ui/poll-widget';
import { quizBuilderSource } from './extended-ui/quiz-builder';
import { retroBoardSource } from './extended-ui/retro-board';
import { skillRadarSource } from './extended-ui/skill-radar';
import { teamPulseSource } from './extended-ui/team-pulse';
import { userPermissionsSource } from './extended-ui/user-permissions';
import { versionDiffSource } from './extended-ui/version-diff';
import { workspaceSwitcherSource } from './extended-ui/workspace-switcher';
import { analyticsFunnelSource } from './extended-ui/analytics-funnel';
import { branchSelectorSource } from './extended-ui/branch-selector';
import { changelogViewerSource } from './extended-ui/changelog-viewer';
import { deploymentLogSource } from './extended-ui/deployment-log';
import { featureFlagSource } from './extended-ui/feature-flag';
import { incidentTrackerSource } from './extended-ui/incident-tracker';
import { mergeRequestSource } from './extended-ui/merge-request';
import { pipelineEditorSource } from './extended-ui/pipeline-editor';
import { releaseNotesSource } from './extended-ui/release-notes';
import { sprintRetrospectiveSource } from './extended-ui/sprint-retrospective';
import { testRunnerSource } from './extended-ui/test-runner';
import { velocityChartSource } from './extended-ui/velocity-chart';
import { wikiEditorSource } from './extended-ui/wiki-editor';
import { backlogPrioritizerSource } from './extended-ui/backlog-prioritizer';
import { bugTrackerSource } from './extended-ui/bug-tracker';
import { capacityPlannerSource } from './extended-ui/capacity-planner';
import { dependencyGraphSource } from './extended-ui/dependency-graph';
import { estimateCalculatorSource } from './extended-ui/estimate-calculator';
import { flagManagerSource } from './extended-ui/flag-manager';
import { iterationBoardSource } from './extended-ui/iteration-board';

export const sourceCodeRegistry: SourceCodeRegistry = {
  'ui-elements': {
    buttons: buttonsSource,
    alerts: alertsSource,
    badges: badgesSource,
    cards: cardsSource,
    dropdowns: dropdownsSource,
    modals: modalsSource,
    tabs: tabsSource,
    accordions: accordionsSource,
    tooltips: tooltipsSource,
    progress: progressSource,
    spinners: spinnersSource,
    skeletons: skeletonsSource,
    avatars: avatarsSource,
    pagination: paginationSource,
    popovers: popoversSource,
    toasts: toastsSource,
    timelines: timelinesSource,
    typography: typographySource,
    breadcrumb: breadcrumbSource,
    'empty-states': emptyStatesSource,
    'tag-input': tagInputSource,
    'code-block': codeBlockSource,
    dividers: dividersSource,
    chips: chipsSource,
    switches: switchesSource,
    'radio-groups': radioGroupsSource,
    checkboxes: checkboxesSource,
    'text-inputs': textInputsSource,
    textareas: textareasSource,
    'select-menus': selectMenusSource,
    'range-sliders': rangeSlidersSource,
    'file-upload': fileUploadSource,
    'color-swatches': colorSwatchesSource,
    'icon-showcase': iconShowcaseSource,
    'data-tags': dataTagsSource,
    'notification-badge': notificationBadgeSource,
    'status-indicator': statusIndicatorSource,
    'countdown-timer': countdownTimerSource,
    'gradient-text': gradientTextSource,
    'animated-underline': animatedUnderlineSource,
    'keyboard-keys': keyboardKeysSource,
    'metric-cards': metricCardsSource,
    'comparison-toggle': comparisonToggleSource,
    'scroll-indicator': scrollIndicatorSource,
    'resizable-panel': resizablePanelSource,
    'collapsible-sections': collapsibleSectionsSource,
    'drag-handle-list': dragHandleListSource,
    'tabs-with-icons': tabsWithIconsSource,
    'vertical-nav': verticalNavSource,
    'breadcrumb-dropdown': breadcrumbDropdownSource,
    'action-menu': actionMenuSource,
    'avatar-status': avatarStatusSource,
    'badge-group': badgeGroupSource,
    'breadcrumb-separator': breadcrumbSeparatorSource,
    'button-loading': buttonLoadingSource,
    'card-collapsible': cardCollapsibleSource,
    'chip-input': chipInputSource,
    'color-dot': colorDotSource,
    'counter-badge': counterBadgeSource,
    'date-badge': dateBadgeSource,
    'dot-loader': dotLoaderSource,
    'dropdown-group': dropdownGroupSource,
    'expandable-text': expandableTextSource,
    'filter-chip': filterChipSource,
    'floating-label': floatingLabelSource,
    'gradient-border-card': gradientBorderCardSource,
    'grouped-avatar': groupedAvatarSource,
    'icon-badge': iconBadgeSource,
    'image-placeholder': imagePlaceholderSource,
    'inline-edit': inlineEditSource,
    'key-value-list': keyValueListSource,
    'label-tag': labelTagSource,
    'link-preview': linkPreviewSource,
    'list-checkable': listCheckableSource,
    'loading-skeleton': loadingSkeletonSource,
    'media-card': mediaCardSource,
    'menu-item': menuItemSource,
    'meta-tag': metaTagSource,
    'mini-chart': miniChartSource,
    'multi-select-chip': multiSelectChipSource,
    'nav-pill': navPillSource,
    'number-counter': numberCounterSource,
    'option-card': optionCardSource,
    'overflow-menu': overflowMenuSource,
    'password-strength': passwordStrengthSource,
    'pill-badge': pillBadgeSource,
    'preview-card': previewCardSource,
    'progress-step': progressStepSource,
    'quantity-input': quantityInputSource,
    'radio-card': radioCardSource,
    'rating-display': ratingDisplaySource,
    'search-filter': searchFilterSource,
    'segmented-control': segmentedControlSource,
    'select-combo': selectComboSource,
    'signal-indicator': signalIndicatorSource,
    'size-selector': sizeSelectorSource,
    'slider-range': sliderRangeSource,
    'snippet-code': snippetCodeSource,
    'sort-indicator': sortIndicatorSource,
    'spinner-dot': spinnerDotSource,
    'stacked-card': stackedCardSource,
    'step-nav': stepNavSource,
    'sticky-note': stickyNoteSource,
    'sub-menu': subMenuSource,
    'swap-button': swapButtonSource,
    'tab-scrollable': tabScrollableSource,
    'tag-closable': tagClosableSource,
    'text-highlight': textHighlightSource,
    'thumb-rating': thumbRatingSource,
    'time-badge': timeBadgeSource,
    'toast-stack-ui': toastStackUiSource,
    'toggle-chip': toggleChipSource,
    'toolbar-actions': toolbarActionsSource,
    'tooltip-rich': tooltipRichSource,
    'tree-item': treeItemSource,
    'truncated-text': truncatedTextSource,
    'upload-zone': uploadZoneSource,
    'user-menu': userMenuSource,
    'verification-badge': verificationBadgeSource,
    'video-placeholder': videoPlaceholderSource,
    'virtual-list-ui': virtualListUiSource,
    'wave-divider': waveDividerSource,
    'week-picker': weekPickerSource,
    'widget-stat': widgetStatSource,
    'wizard-step-ui': wizardStepUiSource,
    'word-counter': wordCounterSource,
    'wrap-tag': wrapTagSource,
    'zoom-control': zoomControlSource,
    'accordion-multi': accordionMultiSource,
    'alert-dismissible': alertDismissibleSource,
    'avatar-stack-horizontal': avatarStackHorizontalSource,
    'badge-overlay': badgeOverlaySource,
    'breadcrumb-trail-ui': breadcrumbTrailUiSource,
    'button-icon-split': buttonIconSplitSource,
    'card-stats': cardStatsSource,
    'chip-removable': chipRemovableSource,
    'color-swatch-row': colorSwatchRowSource,
    'counter-inline': counterInlineSource,
    'date-range-badge': dateRangeBadgeSource,
    'drag-indicator': dragIndicatorSource,
    'dropdown-overflow': dropdownOverflowSource,
    'expand-button': expandButtonSource,
    'filter-bar': filterBarSource,
    'form-field': formFieldSource,
    'gradient-header': gradientHeaderSource,
    'group-checkbox': groupCheckboxSource,
    'icon-toggle': iconToggleSource,
    'image-crop-preview': imageCropPreviewSource,
    'inline-notification': inlineNotificationSource,
    'key-value-grid': keyValueGridSource,
    'labeled-input': labeledInputSource,
    'link-button': linkButtonSource,
    'list-draggable': listDraggableSource,
    'loading-dots': loadingDotsSource,
    'media-object': mediaObjectSource,
    'menu-dropdown': menuDropdownSource,
    'mini-stat-card': miniStatCardSource,
    'multi-progress': multiProgressSource,
    'nested-list': nestedListSource,
    'number-input-spinner': numberInputSpinnerSource,
    'option-toggle': optionToggleSource,
    'overlay-trigger': overlayTriggerSource,
    'password-toggle': passwordToggleSource,
    'pie-mini': pieMiniSource,
    'placeholder-shimmer': placeholderShimmerSource,
    'progress-ring': progressRingSource,
    'quick-action-bar': quickActionBarSource,
    'react-badge': reactBadgeSource,
    'scroll-shadow': scrollShadowSource,
    'select-grouped': selectGroupedSource,
    'sidebar-mini': sidebarMiniSource,
    'skeleton-table': skeletonTableSource,
    'sortable-list': sortableListSource,
    'spinner-bar': spinnerBarSource,
    'status-pulse': statusPulseSource,
    'sticky-header-ui': stickyHeaderUiSource,
    'summary-card': summaryCardSource,
    'tab-closable': tabClosableSource,
    'text-truncate': textTruncateSource,
    'theme-switcher': themeSwitcherSource,
    'toast-notification': toastNotificationSource,
    'toggle-button-group': toggleButtonGroupSource,
    'tooltip-click': tooltipClickSource,
    'upload-progress': uploadProgressSource,
    'user-avatar-group': userAvatarGroupSource,
    'verification-input': verificationInputSource,
    'view-toggle': viewToggleSource,
    'wizard-progress': wizardProgressSource,
    'year-picker': yearPickerSource,
    'accordion-sidebar': accordionSidebarSource,
    'alert-banner': alertBannerSource,
    'avatar-dropdown': avatarDropdownSource,
    'badge-stack': badgeStackSource,
    'breadcrumb-icon': breadcrumbIconSource,
    'button-dropdown': buttonDropdownSource,
    'card-interactive': cardInteractiveSource,
    'chip-select': chipSelectSource,
    'color-picker-mini': colorPickerMiniSource,
    'counter-animated': counterAnimatedSource,
    'date-input': dateInputSource,
    'drawer-panel': drawerPanelSource,
    'dropdown-checklist': dropdownChecklistSource,
    'expand-collapse': expandCollapseSource,
    'filter-dropdown': filterDropdownSource,
    'form-group': formGroupSource,
    'gradient-text-box': gradientTextBoxSource,
    'group-radio': groupRadioSource,
    'icon-picker': iconPickerSource,
    'image-gallery-mini': imageGalleryMiniSource,
  },
  'advanced-ui': {
    'animated-counter': animatedCounterSource,
    'glow-button': glowButtonSource,
    'flip-card': flipCardSource,
    'shimmer-loader': shimmerLoaderSource,
    'morphing-icon': morphingIconSource,
    'stagger-list': staggerListSource,
    'parallax-card': parallaxCardSource,
    'wave-background': waveBackgroundSource,
    'typewriter-text': typewriterTextSource,
    'magnetic-button': magneticButtonSource,
    'spotlight-card': spotlightCardSource,
    'gradient-border': gradientBorderSource,
    'ripple-button': rippleButtonSource,
    'slide-in-panel': slideInPanelSource,
    'toast-stack': toastStackSource,
    'draggable-card': draggableCardSource,
    'confetti-button': confettiButtonSource,
    'neon-glow': neonGlowSource,
    'glass-card': glassCardSource,
    'stepper-navigation': stepperNavigationSource,
    '3d-card': threeDCardSource,
    'morphing-shape': morphingShapeSource,
    'liquid-button': liquidButtonSource,
    'particle-background': particleBackgroundSource,
    'gradient-mesh': gradientMeshSource,
    'tilt-card': tiltCardSource,
    'elastic-slider': elasticSliderSource,
    'physics-card': physicsCardSource,
    'orbit-loader': orbitLoaderSource,
    'dna-helix': dnaHelixSource,
    'aurora-background': auroraBackgroundSource,
    'firework-button': fireworkButtonSource,
    'elastic-input': elasticInputSource,
    'masonry-grid': masonryGridSource,
    'marquee-text': marqueeTextSource,
    'typing-effect': typingEffectSource,
    'counter-wheel': counterWheelSource,
    'breathing-card': breathingCardSource,
    'hover-morph': hoverMorphSource,
    'gravity-list': gravityListSource,
    'glitch-text': glitchTextSource,
    'wave-text': waveTextSource,
    'spring-button': springButtonSource,
    'particle-button': particleButtonSource,
    'neon-border': neonBorderSource,
    'matrix-rain': matrixRainSource,
    'blur-reveal-content': blurRevealContentSource,
    'scale-reveal': scaleRevealSource,
    'slide-reveal': slideRevealSource,
    'fade-grid': fadeGridSource,
    'stagger-cards': staggerCardsSource,
    'zoom-gallery': zoomGallerySource,
    'swipe-deck': swipeDeckSource,
    'bouncing-dots': bouncingDotsSource,
    'rotating-text': rotatingTextSource,
    'accordion-animated': accordionanimatedSource,
    'blur-reveal': blurrevealSource,
    'bounce-notification': bouncenotificationSource,
    'checkbox-animated': checkboxanimatedSource,
    'drawer-animated': draweranimatedSource,
    'dropdown-menu-animated': dropdownmenuanimatedSource,
    'error-boundary-fallback': errorboundaryfallbackSource,
    'expandable-search': expandablesearchSource,
    'fade-in-image': fadeinimageSource,
    'floating-action-button': floatingactionbuttonSource,
    'gradient-text-adv': gradienttextSource,
    'infinite-scroll-loader': infinitescrollloaderSource,
    'jello-effect': jelloeffectSource,
    'popover-animated': popoveranimatedSource,
    'progress-circle-animated': progresscircleanimatedSource,
    'progress-step-animated': progressstepanimatedSource,
    'pull-to-refresh': pulltorefreshSource,
    'pulse-dot': pulsedotSource,
    'radio-animated': radioanimatedSource,
    'reveal-card': revealcardSource,
    'rotating-loader': rotatingloaderSource,
    'scale-hover': scalehoverSource,
    'sidebar-animated': sidebaranimatedSource,
    'slide-up-modal': slideupmodalSource,
    'success-animation': successanimationSource,
    'swipeable-list-item': swipeablelistitemSource,
    'tab-indicator': tabindicatorSource,
    'toggle-switch-animated': toggleswitchanimatedSource,
    'tooltip-animated': tooltipanimatedSource,
    'wobble-button': wobblebuttonSource,
    '3d-flip-card': threeDFlipCardSource,
    'accordion-tree': accordionTreeSource,
    'animated-border': animatedBorderSource,
    'aurora-card': auroraCardSource,
    'bento-grid': bentoGridSource,
    'blob-animation': blobAnimationSource,
    'bounce-scroll': bounceScrollSource,
    'canvas-particles': canvasParticlesSource,
    'chart-live': chartLiveSource,
    'confetti-explosion': confettiExplosionSource,
    'cursor-glow': cursorGlowSource,
    'data-typewriter': dataTypewriterSource,
    'elastic-scroll': elasticScrollSource,
    'flip-board': flipBoardSource,
    'floating-cards': floatingCardsSource,
    'galaxy-background': galaxyBackgroundSource,
    'glass-morphism-panel': glassMorphismPanelSource,
    'gradient-flow': gradientFlowSource,
    'hexagon-grid': hexagonGridSource,
    'hologram-card': hologramCardSource,
    'interactive-grid': interactiveGridSource,
    'jelly-card': jellyCardSource,
    'kaleidoscope': kaleidoscopeSource,
    'lava-lamp': lavaLampSource,
    'magnetic-cards': magneticCardsSource,
    'marquee-infinite': marqueeInfiniteSource,
    'morphing-layout': morphingLayoutSource,
    'neon-button': neonButtonSource,
    'orbit-system': orbitSystemSource,
    'parallax-gallery': parallaxGallerySource,
    'physics-simulation': physicsSimulationSource,
    'ripple-effect': rippleEffectSource,
    'safari-card': safariCardSource,
    'spotlight-focus': spotlightFocusSource,
    'stagger-animation': staggerAnimationSource,
    'wave-canvas': waveCanvasSource,
    'xylophone-bars': xylophoneBarsSource,
    'zen-background': zenBackgroundSource,
    'zoom-morph': zoomMorphSource,
    'accordion-expand': accordionExpandSource,
    'background-shift': backgroundShiftSource,
    'card-stack': cardStackSource,
    'drag-preview': dragPreviewSource,
    'elastic-list': elasticListSource,
    'floating-dock': floatingDockSource,
    'glow-panel': glowPanelSource,
    'hover-depth': hoverDepthSource,
    'isometric-grid': isometricGridSource,
    'jump-button': jumpButtonSource,
    'kinetic-typography': kineticTypographySource,
    'liquid-nav': liquidNavSource,
    'morph-button-group': morphButtonGroupSource,
    'neon-text': neonTextSource,
    'oscillate-loader': oscillateLoaderSource,
    'particle-network': particleNetworkSource,
    'quicksand-effect': quicksandEffectSource,
    'reveal-animation': revealAnimationSource,
    'shimmer-border': shimmerBorderSource,
    'snap-scroll': snapScrollSource,
    'tilt-gallery': tiltGallerySource,
    'vortex-loader': vortexLoaderSource,
    'wave-text-animation': waveTextAnimationSource,
    'x-ray-card': xRayCardSource,
    'yield-animation': yieldAnimationSource,
    'accordion-drag': accordionDragSource,
    'blur-transition': blurTransitionSource,
    'card-flip-3d': cardFlip3dSource,
    'depth-card': depthCardSource,
    'elastic-grid': elasticGridSource,
    'floating-action': floatingActionSource,
    'gradient-orb': gradientOrbSource,
    'hover-glow': hoverGlowSource,
    'interactive-mesh': interactiveMeshSource,
    'jelly-button': jellyButtonSource,
    'knob-control': knobControlSource,
    'lava-menu': lavaMenuSource,
    'morph-input': morphInputSource,
    'neon-line': neonLineSource,
    'orbit-menu': orbitMenuSource,
    'parallax-text': parallaxTextSource,
    'pie-spin': pieSpinSource,
    'radial-progress': radialProgressSource,
    'shake-effect': shakeEffectSource,
    'skeleton-wave': skeletonWaveSource,
    'spring-list': springListSource,
    'typewriter-loop': typewriterLoopSource,
    'unfold-card': unfoldCardSource,
    'vibrate-button': vibrateButtonSource,
    'water-ripple': waterRippleSource,
    'accordion-slide': accordionSlideSource,
    'bubble-animation': bubbleAnimationSource,
    'card-swap': cardSwapSource,
    'drag-sort': dragSortSource,
    'elastic-button': elasticButtonSource,
    'floating-labels': floatingLabelsSource,
    'glow-text': glowTextSource,
    'hover-scale': hoverScaleSource,
    'ion-background': ionBackgroundSource,
    'jump-text': jumpTextSource,
    'keyframe-rotate': keyframeRotateSource,
    'lens-effect': lensEffectSource,
    'morph-dialog': morphDialogSource,
    'neon-pulse': neonPulseSource,
    'orbit-spinner': orbitSpinnerSource,
    'path-animation': pathAnimationSource,
    'piston-loader': pistonLoaderSource,
    'radial-menu': radialMenuSource,
    'shake-input': shakeInputSource,
    'skew-card': skewCardSource,
    'spotlight-search': spotlightSearchSource,
    'toggle-morph': toggleMorphSource,
    'underwave': underwaveSource,
    'vortex-card': vortexCardSource,
    'zigzag-divider': zigzagDividerSource,
    'accordion-reveal': accordionRevealSource,
    'blur-card': blurCardSource,
    'card-tilt': cardTiltSource,
    'drift-animation': driftAnimationSource,
    'elastic-toggle': elasticToggleSource,
    'float-animation': floatAnimationSource,
    'glow-ring': glowRingSource,
    'hover-board': hoverBoardSource,
    'inverse-card': inverseCardSource,
    'jelly-grid': jellyGridSource,
    'knob-spinner': knobSpinnerSource,
    'lava-button': lavaButtonSource,
    'morph-tabs': morphTabsSource,
    'neon-switch': neonSwitchSource,
    'orbit-dots': orbitDotsSource,
    'parallax-scroll': parallaxScrollSource,
    'progress-morph': progressMorphSource,
    'rain-effect': rainEffectSource,
    'slide-elastic': slideElasticSource,
    'spin-loader': spinLoaderSource,
    'stretch-text': stretchTextSource,
    'twist-card': twistCardSource,
    'wave-button': waveButtonSource,
    'vortex-spinner': vortexSpinnerSource,
    'accordion-group': accordionGroupSource,
    'blend-card': blendCardSource,
    'cable-animation': cableAnimationSource,
    'distort-effect': distortEffectSource,
    'ember-glow': emberGlowSource,
    'flare-button': flareButtonSource,
    'ghost-card': ghostCardSource,
  },
  'extended-ui': {
    'command-palette': commandPaletteSource,
    'color-picker': colorPickerSource,
    'date-display': dateDisplaySource,
    'keyboard-shortcuts': keyboardShortcutsSource,
    'copy-to-clipboard': copyToClipboardSource,
    'rating-stars': ratingStarsSource,
    'like-button': likeButtonSource,
    'share-button': shareButtonSource,
    'bookmark-button': bookmarkButtonSource,
    'follow-button': followButtonSource,
    'mention-input': mentionInputSource,
    'hashtag-input': hashtagInputSource,
    'rich-text-editor': richTextEditorSource,
    'markdown-preview': markdownPreviewSource,
    'code-editor': codeEditorSource,
    'diff-viewer': diffViewerSource,
    'file-tree': fileTreeSource,
    'breadcrumb-trail': breadcrumbTrailSource,
    'stepper-form': stepperFormSource,
    carousel: carouselSource,
    'audio-player': audioPlayerSource,
    'video-player': videoPlayerSource,
    'calendar-widget': calendarWidgetSource,
    'weather-widget': weatherWidgetSource,
    'stock-ticker': stockTickerSource,
    'chat-bubble': chatBubbleSource,
    'social-card': socialCardSource,
    'product-card': productCardSource,
    'profile-card': profileCardSource,
    'notification-panel': notificationPanelSource,
    'activity-feed': activityFeedSource,
    'comment-thread': commentThreadSource,
    'tag-manager': tagManagerSource,
    'image-compare': imageCompareSource,
    'map-placeholder': mapPlaceholderSource,
    'data-table-mini': dataTableMiniSource,
    'chart-placeholder': chartPlaceholderSource,
    'progress-dashboard': progressDashboardSource,
    'survey-form': surveyFormSource,
    'contact-card': contactCardSource,
    'pricing-toggle': pricingToggleSource,
    'filter-panel': filterPanelSource,
    'search-results': searchResultsSource,
    'avatar-group': avatarGroupSource,
    'kanban-board': kanbanBoardSource,
    'metric-gauge': metricGaugeSource,
    'donut-chart': donutChartSource,
    'badge-collection': badgeCollectionSource,
    'onboarding-steps': onboardingStepsSource,
    'cookie-consent': cookieConsentSource,
    'announcement-bar': announcementbarSource,
    'avatar-upload': avataruploadSource,
    'chart-widget': chartwidgetSource,
    'cookie-banner': cookiebannerSource,
    'dropzone-area': dropzoneareaSource,
    'file-list': filelistSource,
    'focus-trap': focustrapSource,
    'fullscreen-toggle': fullscreentoggleSource,
    'gallery-grid': gallerygridSource,
    'info-banner': infobannerSource,
    'keyboard-nav': keyboardnavSource,
    'lightbox': lightboxSource,
    'live-region': liveregionSource,
    'maintenance-banner': maintenancebannerSource,
    'onboarding-tooltip': onboardingtooltipSource,
    'print-button': printbuttonSource,
    'qr-code': qrcodeSource,
    'reaction-picker': reactionpickerSource,
    'screen-reader-only': screenreaderonlySource,
    'skip-link': skiplinkSource,
    'stat-widget': statwidgetSource,
    'syntax-highlight': syntaxhighlightSource,
    'time-display-ext': timedisplaySource,
    'tour-guide': tourguideSource,
    'warning-banner': warningbannerSource,
    'wizard-nav': wizardnavSource,
    'activity-timeline': activityTimelineSource,
    'address-book': addressBookSource,
    'analytics-widget': analyticsWidgetSource,
    'audio-visualizer': audioVisualizerSource,
    'badge-system': badgeSystemSource,
    'billing-card': billingCardSource,
    'bookmark-manager': bookmarkManagerSource,
    'calendar-heatmap': calendarHeatmapSource,
    'chat-interface': chatInterfaceSource,
    'color-palette': colorPaletteSource,
    'command-input': commandInputSource,
    'comparison-slider': comparisonSliderSource,
    'coupon-generator': couponGeneratorSource,
    'data-explorer': dataExplorerSource,
    'diff-editor': diffEditorSource,
    'email-template': emailTemplateSource,
    'feedback-form': feedbackFormSource,
    'file-browser': fileBrowserSource,
    'gantt-chart': ganttChartSource,
    'habit-tracker': habitTrackerSource,
    'image-editor': imageEditorSource,
    'invoice-builder': invoiceBuilderSource,
    'journal-entry': journalEntrySource,
    'kanban-advanced': kanbanAdvancedSource,
    'layout-builder': layoutBuilderSource,
    'map-locator': mapLocatorSource,
    'markdown-editor-ext': markdownEditorExtSource,
    'navigation-breadcrumb': navigationBreadcrumbSource,
    'order-tracker': orderTrackerSource,
    'payment-form': paymentFormSource,
    'quiz-component': quizComponentSource,
    'recipe-card': recipeCardSource,
    'shopping-list': shoppingListSource,
    'task-organizer': taskOrganizerSource,
    'unit-converter': unitConverterSource,
    'version-history': versionHistorySource,
    'weather-dashboard': weatherDashboardSource,
    'workout-planner': workoutPlannerSource,
    'xml-viewer': xmlViewerSource,
    'yaml-editor': yamlEditorSource,
    'account-selector': accountSelectorSource,
    'barcode-scanner': barcodeScannerSource,
    'calendar-scheduler': calendarSchedulerSource,
    'chart-builder': chartBuilderSource,
    'document-viewer': documentViewerSource,
    'excel-grid': excelGridSource,
    'form-wizard': formWizardSource,
    'geo-autocomplete': geoAutocompleteSource,
    'hex-picker': hexPickerSource,
    'integration-panel': integrationPanelSource,
    'json-tree': jsonTreeSource,
    'key-manager': keyManagerSource,
    'link-shortener': linkShortenerSource,
    'metric-board': metricBoardSource,
    'note-organizer': noteOrganizerSource,
    'otp-verification': otpVerificationSource,
    'pipeline-view': pipelineViewSource,
    'query-builder': queryBuilderSource,
    'role-manager': roleManagerSource,
    'spreadsheet-mini': spreadsheetMiniSource,
    'tag-cloud': tagCloudSource,
    'user-directory': userDirectorySource,
    'video-conference': videoConferenceSource,
    'webhook-editor': webhookEditorSource,
    'zip-explorer': zipExplorerSource,
    'approval-flow': approvalFlowSource,
    'budget-tracker': budgetTrackerSource,
    'checklist-advanced': checklistAdvancedSource,
    'diagram-viewer': diagramViewerSource,
    'escalation-matrix': escalationMatrixSource,
    'fleet-monitor': fleetMonitorSource,
    'grade-book': gradeBookSource,
    'health-dashboard': healthDashboardSource,
    'inventory-grid': inventoryGridSource,
    'job-queue': jobQueueSource,
    'knowledge-base': knowledgeBaseSource,
    'license-manager': licenseManagerSource,
    'milestone-tracker': milestoneTrackerSource,
    'newsletter-builder': newsletterBuilderSource,
    'org-chart': orgChartSource,
    'permission-grid': permissionGridSource,
    'quote-generator': quoteGeneratorSource,
    'resource-allocator': resourceAllocatorSource,
    'scheduling-board': schedulingBoardSource,
    'timeline-advanced': timelineAdvancedSource,
    'uptime-monitor': uptimeMonitorSource,
    'vendor-list': vendorListSource,
    'workflow-designer': workflowDesignerSource,
    'xray-viewer': xrayViewerSource,
    'access-log': accessLogSource,
    'benefit-card': benefitCardSource,
    'competency-matrix': competencyMatrixSource,
    'daily-planner': dailyPlannerSource,
    'event-scheduler': eventSchedulerSource,
    'forum-thread': forumThreadSource,
    'goal-tracker': goalTrackerSource,
    'hr-dashboard': hrDashboardSource,
    'idea-board': ideaBoardSource,
    'journal-calendar': journalCalendarSource,
    'key-result-tracker': keyResultTrackerSource,
    'learning-path': learningPathSource,
    'membership-card': membershipCardSource,
    'notification-hub': notificationHubSource,
    'outcome-tracker': outcomeTrackerSource,
    'performance-review': performanceReviewSource,
    'question-bank': questionBankSource,
    'risk-register': riskRegisterSource,
    'sprint-board': sprintBoardSource,
    'task-dependency': taskDependencySource,
    'usage-analytics': usageAnalyticsSource,
    'value-stream': valueStreamSource,
    'whiteboard-mini': whiteboardMiniSource,
    'activity-heatmap': activityHeatmapSource,
    'book-reader': bookReaderSource,
    'code-review': codeReviewSource,
    'decision-matrix': decisionMatrixSource,
    'event-log': eventLogSource,
    'feedback-collector': feedbackCollectorSource,
    'git-diff-viewer': gitDiffViewerSource,
    'heatmap-calendar': heatmapCalendarSource,
    'inspection-form': inspectionFormSource,
    'job-application': jobApplicationSource,
    'kanban-swimlane': kanbanSwimlaneSource,
    'log-viewer': logViewerSource,
    'media-browser': mediaBrowserSource,
    'network-graph': networkGraphSource,
    'org-tree': orgTreeSource,
    'poll-widget': pollWidgetSource,
    'quiz-builder': quizBuilderSource,
    'retro-board': retroBoardSource,
    'skill-radar': skillRadarSource,
    'team-pulse': teamPulseSource,
    'user-permissions': userPermissionsSource,
    'version-diff': versionDiffSource,
    'workspace-switcher': workspaceSwitcherSource,
    'analytics-funnel': analyticsFunnelSource,
    'branch-selector': branchSelectorSource,
    'changelog-viewer': changelogViewerSource,
    'deployment-log': deploymentLogSource,
    'feature-flag': featureFlagSource,
    'incident-tracker': incidentTrackerSource,
    'merge-request': mergeRequestSource,
    'pipeline-editor': pipelineEditorSource,
    'release-notes': releaseNotesSource,
    'sprint-retrospective': sprintRetrospectiveSource,
    'test-runner': testRunnerSource,
    'velocity-chart': velocityChartSource,
    'wiki-editor': wikiEditorSource,
    'backlog-prioritizer': backlogPrioritizerSource,
    'bug-tracker': bugTrackerSource,
    'capacity-planner': capacityPlannerSource,
    'dependency-graph': dependencyGraphSource,
    'estimate-calculator': estimateCalculatorSource,
    'flag-manager': flagManagerSource,
    'iteration-board': iterationBoardSource,
  },
};

export function getSourceData(category: string, component: string) {
  return sourceCodeRegistry[category]?.[component] ?? null;
}

export function getCategoryComponents(category: string) {
  const cat = sourceCodeRegistry[category];
  if (!cat) return [];
  return Object.entries(cat).map(([slug, { slug: _slug, ...rest }]) => ({
    slug,
    ...rest,
  }));
}
