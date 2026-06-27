import { useWindowDimensions } from 'react-native'
import { UseContentAnimationParams } from './types'
import {
  DEFAULT_MIN_SCALE,
  MIN_SCROLL_RANGE,
  PULL_DISTANCE,
  PULL_SCALE,
  PULL_TRANSLATE_Y,
  REST_OFFSET,
  REST_SCALE,
  REST_TRANSLATE_Y,
  SCROLLED_TRANSLATE_Y,
} from './constants'

/**
 * Builds the scale + translateY transform for the animated content, driven
 * directly by the scroll position (native thread, no JS state).
 *
 * Pulling down zooms the content in; scrolling up shrinks and lifts it.
 *
 * Also returns `fillWidth`: when the content shrinks below its original size
 * (`scaleMin < 1`) a plain `scale` would leave gaps on the sides, so the content
 * is widened to `screenWidth / scaleMin` to stay full-width at its smallest size.
 * `null` means no widening is needed.
 */
const useContentAnimation = ({
  scrollY,
  contentHeight,
  headerHeight,
  scaleMin = DEFAULT_MIN_SCALE,
  fitContentWidth = true,
}: UseContentAnimationParams) => {
  const { width: screenWidth } = useWindowDimensions()

  const maxScroll = Math.max(MIN_SCROLL_RANGE, contentHeight - headerHeight)
  const inputRange = [PULL_DISTANCE, REST_OFFSET, maxScroll]

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [PULL_SCALE, REST_SCALE, scaleMin],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  })

  const translateY = scrollY.interpolate({
    inputRange,
    outputRange: [PULL_TRANSLATE_Y, REST_TRANSLATE_Y, SCROLLED_TRANSLATE_Y],
    extrapolate: 'clamp',
  })

  const fillWidth = fitContentWidth && scaleMin < 1 ? screenWidth / scaleMin : null

  return { transformStyle: { transform: [{ scale }, { translateY }] }, fillWidth }
}

export default useContentAnimation
