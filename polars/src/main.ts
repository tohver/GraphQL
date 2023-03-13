import "dotenv/config";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { createContext } from "./context";
import { schema } from "./schema";

const port = 4000;

const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT
  ? process.env.GRAPHQL_ENDPOINT
  : "/graphql";

function main() {
  const yoga = createYoga({
    schema,
    context: createContext,
    graphqlEndpoint,
  });
  const server = createServer(yoga);
  server.listen(port, () => {
    console.log(
      `Server is listening on http://localhost:${port}${graphqlEndpoint}`
    );
  });
}

main();
