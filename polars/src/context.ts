import "dotenv/config";
import pl from "nodejs-polars";

export type GraphQLContext = {
  policyDf: pl.DataFrame;
};

export function createContext(): GraphQLContext {
  // if (!process.env.DATAFRAME_STORAGE_PATH) {
  //   throw new Error(
  //     "Environment variable 'DATAFRAME_STORAGE_PATH' must be set"
  //   );
  // }
  return {
    policyDf: pl.readCSV("./data/df.csv"),
  };
}
