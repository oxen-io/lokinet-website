import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 20px;
  height: auto;
  margin-left: ${(props) => props.theme.margins.lg};
  margin-right: ${(props) => props.theme.margins.lg};
  color: var(--color-text);
`;

export const SvgMinusLongIcon = () => (
  <Svg viewBox="0 0 20 20" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </Svg>
);
