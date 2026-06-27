import { Animated } from 'react-native'

export interface UseContentAnimationParams {
  scrollY: Animated.Value
  contentHeight: number
  headerHeight: number
  scaleMin?: number
  fitContentWidth?: boolean
}
