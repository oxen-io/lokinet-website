import styled from 'styled-components'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 13px;
  height: auto;
  margin-left: ${(props) => props.theme.margins.lg};
  margin-right: ${(props) => props.theme.margins.lg};
  color: ${(props) => props.theme.colors.secondary};
`

export const SvgMinusIcon = () => (
  <Svg viewBox="0 0 512 512">
    <path fill="currentColor" d="M64 224h384v64H64z" />
  </Svg>
)
