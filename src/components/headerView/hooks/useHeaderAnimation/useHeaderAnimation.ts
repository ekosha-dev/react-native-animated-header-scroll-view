import { Animated } from 'react-native'
import { UseHeaderAnimationParams } from './types'
import { CROSSFADE_DISTANCE, MIN_THRESHOLD } from './constants'

/**
 * Derives the two header opacities directly from the scroll position, so the
 * crossfade runs entirely on the native thread with no JS state or re-renders.
 *
 * The top header fades out (and the scrolled header fades in) over the last
 * `CROSSFADE_DISTANCE` px before the content has scrolled past the header.
 */
const useHeaderAnimation = ({ scrollY, contentHeight, headerHeight }: UseHeaderAnimationParams) => {
  const threshold = Math.max(MIN_THRESHOLD, contentHeight - headerHeight)
  const crossfadeStart = Math.max(0, threshold - CROSSFADE_DISTANCE)
  const inputRange = [crossfadeStart, threshold]

  const topHeaderOpacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  const scrolledHeaderOpacity = scrollY.interpolate({
    inputRange,
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  return { topHeaderOpacity, scrolledHeaderOpacity }
}

export default useHeaderAnimation
