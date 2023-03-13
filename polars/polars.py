import pandas as pd

df_csv = pd.read_csv("./data/df.csv")
# df_parquet = pd.read_parquet("./data/df.parquet")

print(
    df_csv[
        df_csv.InsurerLabel == "andsafe"]
    .groupby(by="TagLabel")
    .sum()
    [["TagLabel", "Total", "Year", "Quartal", "Week"]]

)