import styled from 'styled-components'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 32px;
  height: auto;
  color: ${(props) => props.theme.colors.secondary};
`

export const SvgPlusImage = () => (
  <Svg viewBox="0 0 1000 1000">
    <path
      fill="currentColor"
      d="M512 150v337h338v25H512v338h-25V512H150v-25h337V150h25"
    />
  </Svg>
)
