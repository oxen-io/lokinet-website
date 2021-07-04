import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 32px;
  height: auto;
  color: var(--color-text);
`;

export const SvgCircleIcon = () => (
  <Svg viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="30"
      stroke="currentColor"
      fillOpacity={0}
      strokeWidth="4"
    />
  </Svg>
);
