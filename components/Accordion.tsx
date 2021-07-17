import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./icons/Icon";

const StyledSectionTitle = styled.a`
  width: 100%;
  padding: var(--margins-md);

  display: flex;
  font-family: Archivo, sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  border-bottom: 1px solid var(--color-border-accordion);
`;

const StyledLi = styled.li<{ isExpanded: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  border-bottom: ${(props) => (props.isExpanded ? "1px" : "0px")} solid
    var(--color-border-accordion);
`;

const SvgBold = styled(Icon)`
  width: 20px;
  height: auto;
  margin-left: var(--margins-lg);
  margin-right: var(--margins-lg);
  color: var(--color-text);
`;

export const SvgPlusIconBold = () => (
  <SvgBold viewBox="0 0 24 24" stroke="currentColor" fill="none">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </SvgBold>
);

export const SvgMinusLongBoldIcon = () => (
  <SvgBold viewBox="0 0 20 20" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M14 12H4"
    />
  </SvgBold>
);

export const AccordionSection = (props: any) => {
  const { onClick, expandedIndex, index, title, children } = props;

  const isExpanded = expandedIndex === index;
  return (
    <StyledLi isExpanded={isExpanded}>
      <StyledSectionTitle
        onClick={() => (isExpanded ? onClick(-1) : onClick(index))}
      >
        {isExpanded ? <SvgMinusLongBoldIcon /> : <SvgPlusIconBold />}
        {title}
      </StyledSectionTitle>

      <AccordionSectionContent isExpanded={isExpanded}>
        {children}
      </AccordionSectionContent>
    </StyledLi>
  );
};

const StyledContent = styled.div<{ isExpanded: boolean }>`
  padding-top: ${(props) => (props.isExpanded ? "var(--margins-xl)" : 0)};
  padding-bottom: ${(props) => (props.isExpanded ? "var(--margins-xl)" : 0)};
  padding-right: var(--margins-xl);
  padding-left: var(--margins-xl);
  padding-right: 400px;

  transform: ${(props) =>
    props.isExpanded ? "translate(0)" : "translate(-1)"};
  height: ${(props) => (props.isExpanded ? "auto" : "0")};
  transform-origin: top;
  transition: all 0.3s ease;
  text-align: justify;
  overflow: hidden;
`;

export const AccordionSectionContent = (props: {
  children: React.ReactNode;
  isExpanded: boolean;
}) => {
  return (
    <StyledContent isExpanded={props.isExpanded}>
      {props.children}
    </StyledContent>
  );
};

const StyledAccordion = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: var(--margins-md);
  margin-bottom: var(--margins-md);

  border-left: 1px solid var(--color-border-accordion);
  border-right: 1px solid var(--color-border-accordion);
  li:first-child {
    border-top: 1px solid var(--color-border-accordion);
  }
  list-style-type: none;
`;

export const Accordion = (props: { children: React.ReactNodeArray }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  let index = -1;
  const childrenWithExpandedIndex = React.Children.map<
    React.ReactNode,
    React.ReactNode
  >(props.children, (child) => {
    index = index + 1;
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        expandedIndex: expandedIndex,
        index,
        onClick: setExpandedIndex,
      });
    }
  });

  return <StyledAccordion>{childrenWithExpandedIndex}</StyledAccordion>;
};