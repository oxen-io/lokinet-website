import { ContentfulClientApi, EntryCollection, createClient } from "contentful";
import {
  IFAQItem,
  IFetchEntriesReturn,
  IFetchFAQItemsReturn,
} from "@/types/cms";

const client: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  host: "cdn.contentful.com",
});

export async function fetchFAQItems(): Promise<IFetchFAQItemsReturn> {
  const _entries = await client.getEntries({
    content_type: "faq_item", // only fetch faq items
    order: "fields.id",
  });

  const results = await generateEntries(_entries, "faq");
  return { entries: results.entries as Array<IFAQItem>, total: results.total };
}

function convertFAQ(rawData: any): IFAQItem {
  const rawFAQ = rawData.fields;
  const { question, answer, id, tag, slug } = rawFAQ;

  return {
    id: id ?? null,
    question: question ?? null,
    answer: answer ?? null,
    tag: tag ?? null,
    slug: slug ?? null,
  };
}

async function generateEntries(
  entries: EntryCollection<unknown>,
  entryType: "post" | "faq" | "page"
): Promise<IFetchEntriesReturn> {
  let _entries: any = [];
  if (entries && entries.items && entries.items.length > 0) {
    switch (entryType) {
      case "faq":
        _entries = entries.items.map((entry) => convertFAQ(entry));
        break;
    }
    return { entries: _entries, total: entries.total };
  }

  return { entries: _entries, total: 0 };
}
