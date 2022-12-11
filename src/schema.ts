import { makeExecutableSchema } from "@graphql-tools/schema"
import type { GraphQLContext } from './context'

const typeDefinitions = /* GraphQL*/ `
   type Query {
        getStats(period: Period!, insurer: String, product: String, tag: String): Int
        }
        
    enum Period {
        Total
        Year
        Quartal
        Week
        }
`

type getArguments = {
    insurer?: string; 
    product?: string;
    tag? : string;
    period: string
};



const getResolvers = async (
    _: unknown, args: getArguments, context: GraphQLContext): Promise<Number | null> => 
    {
        const createWhereConditon = (value:string | undefined,label:string ) => {
            return value ? { [label]: {
                equals: value
            }} : {};
        }

        const queryResult = await context.prisma.testStats.aggregate({
    _sum: {
        [args.period]: true,
    },
    where: {
        ...createWhereConditon(args.insurer, "InsurerLabel"),
        ...createWhereConditon(args.product, "ProductLabel"),
        ...createWhereConditon(args.tag, "TagLabel"),
    },
});

console.log(args);
console.log(JSON.stringify(queryResult));
return queryResult._sum[args.period]; 
};
    
const resolvers = {
    Query: {
        getStats: getResolvers
    }
}

export const schema = makeExecutableSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
})