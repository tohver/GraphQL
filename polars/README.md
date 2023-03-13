# Scope

## What does this service do?

This is an example of graphQL API. The server provides a way to request example basic statistics on TV shows and the people consuming them.
The statistics statistics base on randomly generated fakedata.
<br> 
You can ask:
> how many of the sample persons belong to a given group (combinations of industry and activity)
> how many people from the selected group (see above) used to watch a given TV network
> how many people from the selected group watched the selected TV show

The `period` parameter is obligatory. You can request the number persons from the beginning (`Total`), last year (`Year`), three months (`Quartal`) or one week (`Week`). 


# Requirements
* Node, Yarn or NPM
* polars
* GraphQL Yoga


# Getting started
```
# 1. Build the docker image
`docker build -t shows .` 
# 2. Run the container
`docker run -p 4000:4000 shows`
4.The Yoga server enables the GraphQL playgorund on http://localhost:4000
```
