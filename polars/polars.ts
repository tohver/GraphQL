import pl from "nodejs-polars";

const df = pl.readParquet("./data/df.parquet");

const df2 = df.select(
  pl
    .col("Week")
    .filter(pl.col("InsurerLabel").eq(pl.lit("andsafe")))
    .sum()
);

console.log(df2.head());
