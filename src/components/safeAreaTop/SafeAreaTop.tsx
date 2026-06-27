import { Platform, SafeAreaView, StatusBar, View } from 'react-native'
import { SafeAreaTopProps } from './types'

// The Android status bar height is a static value, so it can be read once.
const ANDROID_TOP_INSET = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0

/**
 * Applies top safe-area padding without any third-party dependency.
 *
 * - iOS: delegates to the core `SafeAreaView`, which reflects the notch and
 *   status bar natively (and lets `backgroundColor` fill the inset region).
 * - Android: pads by the native `StatusBar.currentHeight`.
 */
const SafeAreaTop = ({ enabled = false, style, children }: SafeAreaTopProps) => {
  if (enabled && Platform.OS === 'ios') {
    return <SafeAreaView style={style}>{children}</SafeAreaView>
  }

  if (enabled) {
    return <View style={[{ paddingTop: ANDROID_TOP_INSET }, style]}>{children}</View>
  }

  return <View style={style}>{children}</View>
}

export default SafeAreaTop
