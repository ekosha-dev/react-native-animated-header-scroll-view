import { Animated } from 'react-native'

export interface UseHeaderAnimationParams {
  scrollY: Animated.Value
  contentHeight: number
  headerHeight: number
}
