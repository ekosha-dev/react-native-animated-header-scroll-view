import { ReactNode } from 'react'
import { Animated, ColorValue, LayoutChangeEvent } from 'react-native'

export interface HeaderViewProps {
  topHeaderComponent?: ReactNode
  scrolledHeaderComponent?: ReactNode
  headerBackgroundColor?: ColorValue
  useSafeArea?: boolean
  scrollY: Animated.Value
  contentHeight: number
  headerHeight: number
  isHeaderCollapsed: boolean
  onHeaderLayout: (event: LayoutChangeEvent) => void
}
