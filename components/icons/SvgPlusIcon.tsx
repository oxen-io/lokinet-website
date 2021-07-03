import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 40px;
  height: auto;
  color: ${(props) => props.theme.colors.secondary};
`;

export const SvgPlusIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </Svg>
);
