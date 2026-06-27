import { useCallback, useMemo, useRef, useState } from 'react'
import { Animated, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

/**
 * Owns the shared scroll value and the measured layout heights.
 *
 * `onScroll` is a native-driven `Animated.event`, so the scroll position feeds
 * the header and content animations on the native thread. Its listener only
 * flips `isHeaderCollapsed` once the content has scrolled past the header,
 * which is used to switch touch handling between the two header layers (opacity
 * alone does not affect hit-testing). It does no animation work, so it never
 * causes a re-render except at the single moment the headers swap.
 */
const useAnimatedHeaderScrollView = () => {
  const scrollY = useRef(new Animated.Value(0)).current
  const [contentHeight, setContentHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false)

  // Held in a ref so the scroll listener always reads the latest threshold
  // without having to be recreated whenever a layout height changes.
  const collapseThreshold = useRef(0)
  collapseThreshold.current = Math.max(0, contentHeight - headerHeight)

  const onScroll = useMemo(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: true,
        listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
          setIsHeaderCollapsed(event.nativeEvent.contentOffset.y >= collapseThreshold.current)
        },
      }),
    [scrollY]
  )

  const onContentLayout = useCallback((event: LayoutChangeEvent) => {
    setContentHeight(event.nativeEvent.layout.height)
  }, [])

  const onHeaderLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height)
  }, [])

  return {
    scrollY,
    contentHeight,
    headerHeight,
    isHeaderCollapsed,
    onScroll,
    onContentLayout,
    onHeaderLayout,
  }
}

export default useAnimatedHeaderScrollView
