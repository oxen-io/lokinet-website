import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme/theme";

const ToggleLightSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 76 31"
    >
      <path
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="10"
        d="M.5 15.5c0 8.3 6.7 15 15 15h45c8.3 0 15-6.7 15-15s-6.7-15-15-15h-45C7.2.5.5 7.2.5 15.5z"
      />
      <path
        d="M60.5 30.5c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <path d="M60.5 12.9c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6zm0-1c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z" />
      <path
        d="M60.5 10.6V6.7M60.5 24.3v-3.9M57 12l-2.7-2.7M66.7 21.7L64 19M55.6 15.5h-3.9M69.3 15.5h-3.9M57 19l-2.7 2.7M66.7 9.3L64 12"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
      />
      <path d="M8.6 18.9V12h1.3v5.7h3.6v1.1H8.6zM15.2 18.9V12h1.3v6.9h-1.3zM21.6 19.1c-.7 0-1.3-.1-1.8-.4s-.9-.6-1.1-1.2-.4-1.2-.4-2c0-1.2.3-2.1.9-2.7.6-.6 1.5-.9 2.6-.9.4 0 .8 0 1.2.1s.7.3 1 .5c.3.2.5.5.7.8s.3.7.3 1.1h-1.3c0-.3-.1-.6-.3-.8-.2-.2-.4-.4-.7-.5-.3-.1-.6-.2-.9-.2-.7 0-1.3.2-1.7.6-.4.4-.5 1-.5 1.8v.2c0 .8.2 1.4.5 1.8.3.4.9.6 1.6.6.4 0 .8-.1 1.1-.2.3-.1.5-.3.7-.6.2-.2.2-.5.2-.9v-.4l.5.4h-2.7v-1.1H25v3.7h-1l-.1-.8c-.3.3-.6.5-1 .7-.3.3-.8.4-1.3.4zM26.9 18.9V12h1.3v2.8h3.2V12h1.3v6.9h-1.3v-3h-3.2v3h-1.3zM36.4 18.9v-5.8h-2.2V12h5.7v1.1h-2.2v5.8h-1.3z" />
    </svg>
  );
};

const ToggleSvgDark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 76 31"
    >
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M.5 15.5c0 8.3 6.7 15 15 15h45c8.3 0 15-6.7 15-15s-6.7-15-15-15h-45C7.2.5.5 7.2.5 15.5z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        d="M15.5 30.5c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"
      />
      <path
        stroke="#fff"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M19.7 21.3c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c-1-.6-2.2-1-3.5-1-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7c1.3.1 2.5-.2 3.5-.8z"
      />
      <path
        d="M36.5 18.9V12h2.7c1 0 1.9.3 2.4.8.6.6.9 1.4.9 2.6s-.3 2-.9 2.6c-.6.6-1.4.8-2.4.8h-2.7zm1.3-1.1h1.5c.4 0 .8-.1 1.1-.2s.5-.4.7-.7c.2-.3.2-.7.2-1.3v-.2c0-.5-.1-.9-.2-1.2-.2-.3-.4-.6-.7-.7s-.7-.2-1.1-.2h-1.5v4.5zM43.7 18.9l2.7-6.9H48l2.7 6.9h-1.4l-.6-1.5h-3.1l-.6 1.5h-1.3zm2.2-2.5h2.3l-.7-1.9c0-.1-.1-.2-.1-.3 0-.1-.1-.3-.1-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.2-.1-.2s0 .1-.1.2c0 .1-.1.2-.1.4 0 .1-.1.3-.1.4 0 .1-.1.2-.1.3l-.8 1.9zM52 18.9V12h3.6c.8 0 1.3.2 1.7.6s.6.9.6 1.5c0 .5-.1.9-.3 1.2-.2.3-.5.6-.9.7l1.5 2.9h-1.4l-1.3-2.6h-2.1v2.6H52zm1.2-3.7h2.2c.3 0 .6-.1.8-.3.2-.2.3-.4.3-.8 0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.8-.3h-2.2v2.1zM59.8 18.9V12h1.3v3.5l3.3-3.5H66l-2.7 2.8 2.7 4.1h-1.5l-2.1-3.2-1.4 1.2v2h-1.2z"
        fill="#fff"
      />
    </svg>
  );
};

const StyledButton = styled.button`
  width: 76px;
  padding: 0px;
  margin: 0px;
  height: auto;
  background: none;
  border: none;
  transition: 0.3s;
  &:hover {
    filter: invert(1);
  }
  cursor: pointer;
`;

export const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (colorMode === undefined) {
    return null;
  }
  return (
    <StyledButton
      onClick={() => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
    >
      {colorMode === "dark" ? <ToggleSvgDark /> : <ToggleLightSvg />}
    </StyledButton>
  );
};
