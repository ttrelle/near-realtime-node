db.orders.drop();
db.createCollection('orders', {capped:true, size:10000})
