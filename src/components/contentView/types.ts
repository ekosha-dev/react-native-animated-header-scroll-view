import { ReactNode } from 'react'
import { Animated, LayoutChangeEvent } from 'react-native'

export interface ContentViewProps {
  scrollY: Animated.Value
  contentHeight: number
  headerHeight: number
  scaleMin?: number
  fitContentWidth?: boolean
  children?: ReactNode
  onLayout?: (event: LayoutChangeEvent) => void
}
