# Scope

## What does this service do?

This graphQL API server provides a way to request some basic statistics on TV shows and the people consuming them.
The statistics were made based on randomly generated fake data.
<br> 
You can ask:
* how many of the sample belong to a given group (combinations of industries and activities) <br>
* how many of people from the selected group (see above) used to watch a given TV network over the given period
* how many people from the selected group watched the selected TV show over the selected period 

The `period` parameter is obligatory. 


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
