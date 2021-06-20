import React, { useState } from 'react'
import styled from 'styled-components'
import { SvgMinusIcon } from './icons/SvgMinusIcon'
import { SvgPlusIconBold } from './icons/SvgPlusIconBold'

const StyledSectionTitle = styled.a`
  width: 100%;
  padding: ${(props) => props.theme.margins.md};

  display: flex;
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  border-bottom: 1px solid ${(props) => props.theme.colors.borderAccordion};
`

const StyledLi = styled.li<{ isExpanded: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  border-bottom: ${(props) => (props.isExpanded ? '1px' : '0px')} solid
    ${(props) => props.theme.colors.borderAccordion};
`

export const AccordionSection = (props: {
  title: string
  index: number
  expandedIndex: number
  onClick: (index?: number) => void
  children: React.ReactNode
}) => {
  const { onClick, expandedIndex, index, title, children } = props
  console.log('expandedIndex', expandedIndex)
  console.log('index', index)
  const isExpanded = expandedIndex === index
  return (
    <StyledLi isExpanded={isExpanded}>
      <StyledSectionTitle
        onClick={() => (isExpanded ? onClick(-1) : onClick(index))}
      >
        {isExpanded ? <SvgMinusIcon /> : <SvgPlusIconBold />}
        {title}
      </StyledSectionTitle>

      <AccordionSectionContent isExpanded={isExpanded}>
        {children}
      </AccordionSectionContent>
    </StyledLi>
  )
}

const StyledContent = styled.div<{ isExpanded: boolean }>`
  padding-top: ${(props) => (props.isExpanded ? props.theme.margins.xl : 0)};
  padding-bottom: ${(props) => (props.isExpanded ? props.theme.margins.xl : 0)};
  padding-right: ${(props) => props.theme.margins.xl};
  padding-left: ${(props) => props.theme.margins.xl};
  padding-right: 400px;

  transform: ${(props) => (props.isExpanded ? 'scaleY(1)' : 'scaleY(0)')};
  height: ${(props) => (props.isExpanded ? 'auto' : '0')};
  transform-origin: top;
  transition: all 0.3s ease;
  text-align: justify;
  overflow: hidden;
`

export const AccordionSectionContent = (props: {
  children: React.ReactNode
  isExpanded: boolean
}) => {
  return (
    <StyledContent isExpanded={props.isExpanded}>
      {props.children}
    </StyledContent>
  )
}

const StyledAccordion = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: ${(props) => props.theme.margins.md};
  margin-bottom: ${(props) => props.theme.margins.md};

  border-left: 1px solid ${(props) => props.theme.colors.borderAccordion};
  border-right: 1px solid ${(props) => props.theme.colors.borderAccordion};
  li:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.borderAccordion};
  }
  list-style-type: none;
`

export const Accordion = (props: { children: React.ReactNodeArray }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1)

  let index = -1
  const childrenWithExpandedIndex = React.Children.map<
    React.ReactNode,
    React.ReactNode
  >(props.children, (child) => {
    index = index + 1
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        expandedIndex: expandedIndex,
        index,
        onClick: setExpandedIndex,
      })
    }
  })

  return <StyledAccordion>{childrenWithExpandedIndex}</StyledAccordion>
}
