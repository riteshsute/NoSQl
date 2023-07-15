const getDb = require('../util/database').getDb;

class Product {
  constructor (title, price, description, imageUrl) {
    this.title =  title;
    this.price= price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .then((client) => {
        const collection = client.db().collection('products');
        return collection.insertOne(this);
      })
      .then((result) => {
        console.log(result);
        console.log('Created Product');
        return result; 
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
