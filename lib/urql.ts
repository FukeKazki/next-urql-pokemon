import { registerUrql } from "@urql/next/rsc";
import { cacheExchange, createClient, fetchExchange } from "urql";

const makeClient = () => {
  return createClient({
    url: "https://graphql-pokemon2.vercel.app/",
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);
