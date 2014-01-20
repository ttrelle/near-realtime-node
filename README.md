# Near-Realtime Showcase ##

A showcase for a very simple near-realtime system including visualization and a NoSQL datastore. For a detailed explanation, please have a look at my [blog post](http://blog.codecentric.de/...).

![Near realtime visualization w/ Smoothie Charts](realtime-mongodb-chart.png)

## Usage ##
Set up the node.js project:
	npm install

Set up a MongoDB replica set with one node running an the default port 27017. 

To start the node server, run

	node main.js

After that, open a web browser at this URL:

	http://localhost:8080/

You won't see any graphs unless you insert some data into MongoDB. To do this, open another shell and type:

	cd mongo
	mongo 02_stream_data.js
