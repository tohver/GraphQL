# Scope

## What does this service do?

The graphql API server provides a way to request basic statistics about the closed and not cancelled contracts.
You can ask:
> how many contracts were closed in a given period with the selected insurer, for the selected product or industry(???) or any combination of them.
The `period` parameter is obligatory. You can request the number of all contracts from the beginning (`Total`), last year (`Year`), three months (`Quartal`) or one week (`Week`). 
you can combine insurer, tag and product (or choose only the period)


# Requirements
* Node, Yarn or NPM
* Prisma CLI installed globally - `yarn -g add prisma`
* GraphQL Yoga


# Getting started
```
# 1. Install packages
`yarn install` or `npm install` 
# 2. Copy `.env-example` to `.env` (in src folder) and update the keys
cp .env.example .env && code .env
# 3. Initialize the prisma client
yarn prisma generate 
# or 
npx prisma generate
4. Start GraphQL server (runs playground on http://localhost:4000)
```
