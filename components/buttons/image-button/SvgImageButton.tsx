import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: 0.3s;
  padding: ${(props) => props.theme.margins.sm};

  &:hover {
    filter: invert(1);
  }
`

export default function SvgImageButton(props: {
  children: React.ReactElement
}) {
  return <StyledButton>{props.children}</StyledButton>
}
