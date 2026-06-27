import { Animated, View } from 'react-native'
import { ContentViewProps } from './types'
import { useContentAnimation } from './hooks'
import { styles } from './styles'

const ContentView = ({
  scrollY,
  contentHeight,
  headerHeight,
  scaleMin,
  fitContentWidth,
  children,
  onLayout,
}: ContentViewProps) => {
  const { transformStyle, fillWidth } = useContentAnimation({
    scrollY,
    contentHeight,
    headerHeight,
    scaleMin,
    fitContentWidth,
  })

  if (!children) {
    return null
  }

  // The content shrinks below full size, so widen it to keep covering the
  // screen at minimum scale (no gaps on the sides). No app-side sizing needed.
  if (fillWidth !== null) {
    return (
      <View style={styles.fill} onLayout={onLayout}>
        <Animated.View style={[styles.fillContent, { width: fillWidth }, transformStyle]}>{children}</Animated.View>
      </View>
    )
  }

  return (
    <Animated.View style={transformStyle} onLayout={onLayout}>
      {children}
    </Animated.View>
  )
}

export default ContentView
