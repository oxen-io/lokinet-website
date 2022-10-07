import { Accordion, AccordionSection } from "../components/Accordion";
import { Flex } from "../components/flex/Flex";
import Layout from "../components/layout/Layout";
import METADATA from "../constants/metadata";
import { PageRoot } from "../components/layout/PageRoot";
import React from "react";
import { fetchFAQItems } from "../services/cms";
import CMS from "../constants/cms";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import styled from "styled-components";
import { IFAQItem } from "@/types/cms";

const StyledLink = styled.a`
  text-decoration: underline;
`;

const StyledFaqWrapper = styled.div`
  margin-bottom: 0.125rem; ;
`;

type Props = {
  entries: Object;
};

export default function Faq(props: Props) {
  const { entries: faqItems }: { entries: { [key: string]: any } } = props;

  const docToReactOption: Options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
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
        <StyledFaqWrapper key={key}>
          <h2>{key}</h2>
          <div>
            <Accordion>
              {faqItems[key].map((faqItem: IFAQItem, index: number) => {
                return (
                  <AccordionSection
                    key={`${key}-${index}`}
                    title={faqItem.question}
                  >
                    {documentToReactComponents(
                      faqItem.answer,
                      docToReactOption
                    )}
                  </AccordionSection>
                );
              })}
            </Accordion>
          </div>
        </StyledFaqWrapper>
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
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
