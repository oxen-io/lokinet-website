import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 20px;
  height: auto;
  color: var(--color-text);
`;

export const SvgCircleIcon = () => (
  <Svg viewBox="0 0 70 70">
    <circle
      cx="35"
      cy="35"
      r="30"
      stroke="currentColor"
      fillOpacity={0}
      strokeWidth="4"
    />
  </Svg>
);
