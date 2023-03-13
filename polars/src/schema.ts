import { makeExecutableSchema } from "@graphql-tools/schema"
import pl from "nodejs-polars"
import type { GraphQLContext } from "./context"

const typeDefinitions = /* GraphQL*/ `
   type Query {
        getStats(period: Period!, sendung: String, hobby: String, tag: String): Int
        }

    enum Period {
        Total
        Year
        Quartal
        Week
        }
      
      enum hobby {
        Lesen
        Kalligraphie
        Angeln
        Meditation
        Stricken
        Yoga
        Malen
        Improvisationstheater
        Origami
        Fotografie
        Skateboarden
        Jonglieren
        Trampolinspringen
        Tischtennis
        Klettern
        Bowling
        Schwimmen
        Tanzen
        Kochen
      }

      enum sendung {
        Bibelclip
        Exclusiv
        Explosiv
        Extra
        Gala
        Sisi
        Vermisst
        VIPstagram
      }
`;
type GetArguments = {
  sendung?: string;
  hobby?: string;
  tag?: string;
  period: string;
};

const getResolvers = (
  _: unknown,
  args: GetArguments,
  context: GraphQLContext
): Number | null => {
  const trueCondition = pl.col("TagLabel").neq(pl.lit("doesnotexist)"));

  const conditionInsurer = args.sendung
    ? pl.col("Sendung").eq(pl.lit(args.sendung))
    : trueCondition;
  const conditionTag = args.tag
    ? pl.col("TagLabel").eq(pl.lit(args.tag))
    : trueCondition;
  const conditionProduct = args.hobby
    ? pl.col("Hobby").eq(pl.lit(args.hobby))
    : trueCondition;

  const result = context.policyDf.select(
    pl
      .col(args.period)
      .filter(conditionInsurer.and(conditionTag).and(conditionProduct))
      .sum()
  );
  console.log(result);
  console.log("\n\n**************\n\n");
  return Number(result.getColumn(args.period)[0]);
};

const resolvers = {
  Query: {
    getStats: getResolvers,
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
