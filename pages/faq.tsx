import { Accordion, AccordionSection } from "../components/Accordion";
import { Flex } from "../components/flex/Flex";
import Layout from "../components/layout/Layout";
import METADATA from "../constants/metadata";
import { PageRoot } from "../components/layout/PageRoot";
import React from "react";
import { fetchFAQItems } from "../services/cms";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: underline;
`;

export const getStaticProps: any = async () => {
  const { entries: _entries, total } = await fetchFAQItems();
  const entries: any = {};
  _entries.forEach((entry: any) => {
    if (!entries[entry.tag]) {
      entries[entry.tag] = [];
    }
    entries[entry.tag].push(entry);
  });

  return {
    props: {
      entries,
      total,
    },
    revalidate: 100,
  };
};

export default function Faq(props: any) {
  const { entries: faqItems } = props;

  const docToReactOption = {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <StyledLink
          className="underline"
          href={data.uri}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          {children}
        </StyledLink>
      ),
    },
  };

  const renderFAQList = (() => {
    const content = [];
    for (let key of Object.keys(faqItems)) {
      content.push(
        <div key={key} className="mb-10">
          <h2>{key}</h2>
          <div>
            <Accordion>
              {faqItems[key].map((faqItem: any) => {
                return (
                  <AccordionSection key={key} title={faqItem.question}>
                    {documentToReactComponents(
                      faqItem.answer,
                      docToReactOption
                    )}
                  </AccordionSection>
                );
              })}
            </Accordion>
          </div>
        </div>
      );
    }
    return content;
  })();

  return (
    <PageRoot>
      <Layout title={"FAQ"} metadata={METADATA["FAQ_PAGE"]}>
        <Flex
          container={true}
          width="100%"
          flexDirection="column"
          alignItems="flex-start"
          padding="30px 0px"
        >
          {renderFAQList}
        </Flex>
      </Layout>
    </PageRoot>
  );
}
