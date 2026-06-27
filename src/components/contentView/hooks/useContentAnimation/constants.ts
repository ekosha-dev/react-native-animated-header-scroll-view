// Scroll offsets (px). Negative values represent an overscroll pull-down.
export const PULL_DISTANCE = -200 // furthest pull-down distance that is tracked
export const REST_OFFSET = 0 // scroll offset at rest
export const MIN_SCROLL_RANGE = 1 // floor for the scroll range; avoids a zero-length interpolation

// Scale applied to the animated content.
export const PULL_SCALE = 1.3 // scale when fully pulled down
export const REST_SCALE = 1 // scale at rest
export const DEFAULT_MIN_SCALE = 0.7 // default scale once scrolled up

// Vertical translation (px) applied to the animated content.
export const PULL_TRANSLATE_Y = 10 // translateY when fully pulled down
export const REST_TRANSLATE_Y = 0 // translateY at rest
export const SCROLLED_TRANSLATE_Y = -30 // translateY once scrolled up
