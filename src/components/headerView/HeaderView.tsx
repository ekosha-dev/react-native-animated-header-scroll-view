import { Animated } from 'react-native'
import { styles } from './styles'
import { HeaderViewProps } from './types'
import { useHeaderAnimation } from './hooks'
import SafeAreaTop from '../safeAreaTop'

const HeaderView = ({
  topHeaderComponent,
  scrolledHeaderComponent,
  headerBackgroundColor,
  useSafeArea,
  scrollY,
  contentHeight,
  headerHeight,
  isHeaderCollapsed,
  onHeaderLayout,
}: HeaderViewProps) => {
  const { topHeaderOpacity, scrolledHeaderOpacity } = useHeaderAnimation({
    scrollY,
    contentHeight,
    headerHeight,
  })

  return (
    <>
      {!!topHeaderComponent && (
        <Animated.View
          style={[styles.header, { opacity: topHeaderOpacity }]}
          // Once collapsed, the top header is hidden — let taps fall through to the sticky header.
          pointerEvents={isHeaderCollapsed ? 'none' : 'auto'}
          onLayout={onHeaderLayout}
        >
          <SafeAreaTop enabled={useSafeArea}>{topHeaderComponent}</SafeAreaTop>
        </Animated.View>
      )}
      {!!scrolledHeaderComponent && (
        <Animated.View
          style={[styles.header, { opacity: scrolledHeaderOpacity }]}
          // The sticky header only receives taps while it is the visible layer.
          pointerEvents={isHeaderCollapsed ? 'auto' : 'none'}
        >
          <SafeAreaTop enabled={useSafeArea} style={{ backgroundColor: headerBackgroundColor }}>
            {scrolledHeaderComponent}
          </SafeAreaTop>
        </Animated.View>
      )}
    </>
  )
}

export default HeaderView
