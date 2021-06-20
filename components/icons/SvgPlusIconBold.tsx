import styled from 'styled-components'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 13px;
  height: auto;
  margin-left: ${(props) => props.theme.margins.lg};
  margin-right: ${(props) => props.theme.margins.lg};
  color: ${(props) => props.theme.colors.secondary};
`
export const SvgPlusIconBold = () => (
  <Svg viewBox="0 0 48 48">
    <path
      fill="currentColor"
      d="M48 19.612H28.389V.005h-8.717v19.607H.06v8.716h19.612v19.608h8.717V28.328H48z"
    />
  </Svg>
)
