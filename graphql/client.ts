import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

const isBrowser: boolean = typeof window === "object";

const host: string = isBrowser ? process.env.NEXT_PUBLIC_CLIEN_API_HOST : process.env.NEXT_PUBLIC_API_HOST

const client = new ApolloClient({
  ssrMode: !isBrowser,
  link: createHttpLink({
    uri: `http://${host}`,
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache()
});

export default client;