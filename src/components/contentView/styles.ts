import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  // Full-width wrapper that centers the widened content and clips the overflow,
  // so the content can fill the screen at minimum scale without causing
  // horizontal scrolling.
  fill: {
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  // Keeps the actual content centered within the widened box, so content that
  // is narrower than full width is not pushed off to one side.
  fillContent: {
    alignItems: 'center',
  },
})
