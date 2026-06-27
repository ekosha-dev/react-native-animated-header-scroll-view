import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface SafeAreaTopProps {
  /**
   * When `true`, top safe-area padding is applied (status bar / notch).
   *
   * @default false
   */
  enabled?: boolean

  /**
   * Style applied to the wrapping view. A `backgroundColor` set here also
   * fills the safe-area inset region (useful for sticky headers).
   */
  style?: StyleProp<ViewStyle>

  children?: ReactNode
}
