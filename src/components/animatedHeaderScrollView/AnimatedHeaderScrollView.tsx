import { Animated } from 'react-native'
import { AnimatedHeaderScrollViewProps } from './types'
import { SCROLL_EVENT_THROTTLE } from './constants'
import { useAnimatedHeaderScrollView } from './hooks'
import HeaderView from '../headerView'
import ContentView from '../contentView'

const AnimatedHeaderScrollView = ({
  topHeaderComponent,
  scrolledHeaderComponent,
  contentComponent,
  children,
  headerBackgroundColor,
  scaleMin,
  fitContentWidth,
  useSafeArea,
  ...scrollViewProps
}: AnimatedHeaderScrollViewProps) => {
  const { scrollY, contentHeight, headerHeight, isHeaderCollapsed, onScroll, onContentLayout, onHeaderLayout } =
    useAnimatedHeaderScrollView()

  return (
    <>
      <HeaderView
        topHeaderComponent={topHeaderComponent}
        scrolledHeaderComponent={scrolledHeaderComponent}
        headerBackgroundColor={headerBackgroundColor}
        useSafeArea={useSafeArea}
        scrollY={scrollY}
        contentHeight={contentHeight}
        headerHeight={headerHeight}
        isHeaderCollapsed={isHeaderCollapsed}
        onHeaderLayout={onHeaderLayout}
      />
      <Animated.ScrollView {...scrollViewProps} onScroll={onScroll} scrollEventThrottle={SCROLL_EVENT_THROTTLE}>
        <ContentView
          scrollY={scrollY}
          contentHeight={contentHeight}
          headerHeight={headerHeight}
          scaleMin={scaleMin}
          fitContentWidth={fitContentWidth}
          onLayout={onContentLayout}
        >
          {contentComponent}
        </ContentView>
        {children}
      </Animated.ScrollView>
    </>
  )
}

export default AnimatedHeaderScrollView
