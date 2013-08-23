db.orders.drop();
db.createCollection('orders', {capped:true, size:1000000})
