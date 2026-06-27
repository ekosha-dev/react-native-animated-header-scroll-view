import { ReactNode } from 'react'
import { ColorValue, ScrollViewProps } from 'react-native'

export interface AnimatedHeaderScrollViewProps extends ScrollViewProps {
  /**
   * Component shown as the main header before scrolling.
   *
   * @example
   * topHeaderComponent={<Text>Top Header</Text>}
   */
  topHeaderComponent?: ReactNode

  /**
   * Component shown as the sticky header after scrolling past the content.
   *
   * @example
   * scrolledHeaderComponent={<Text>Scrolled Header</Text>}
   */
  scrolledHeaderComponent?: ReactNode

  /**
   * Content rendered inside the ScrollView that is animated with scaling and
   * translation as the user scrolls.
   *
   * @example
   * contentComponent={<Image source={...} />}
   */
  contentComponent?: ReactNode

  /**
   * Regular static content rendered below the animated content.
   *
   * @example
   * <View><Text>Static Content</Text></View>
   */
  children?: ReactNode

  /**
   * How far the animated content shrinks while scrolling up. A value of `0.8`
   * shrinks it to 80% of its size.
   *
   * @default 0.7
   *
   * @example
   * scaleMin={0.8}
   */
  scaleMin?: number

  /**
   * Keeps `contentComponent` full-width as it shrinks, so a scaled-down image
   * never leaves gaps on the sides. Handled internally — no `Dimensions` math
   * on the app side. The content must be styled to stretch (e.g. an image with
   * `width: '100%'`). Only applies when `scaleMin < 1`.
   *
   * @default true
   *
   * @example
   * fitContentWidth={false}
   */
  fitContentWidth?: boolean

  /**
   * Background color for the `scrolledHeaderComponent`, including its safe-area
   * inset region. Useful to match the sticky header's background.
   *
   * @example
   * headerBackgroundColor="#ffffff"
   */
  headerBackgroundColor?: ColorValue

  /**
   * Adds top safe-area padding to the header (status bar / notch). Handled
   * natively — no `react-native-safe-area-context` required.
   *
   * @default false
   *
   * @example
   * useSafeArea
   */
  useSafeArea?: boolean
}
