const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('64ba35acf8e0ff19a5a9323b')
    .then(user => {
      req.user = user
      console.log(user._id, 'lsasalajhxljsx')
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
  'mongodb+srv://riteshsute:Ritesh123@cluster0.rz6r007.mongodb.net/shop?retryWrites=true&w=majority'
)
.then(result => { 
  User.findOne().then(user => {
    if (!user) {
      const user = new User ({
        name: 'ritz',
        email: 'ritz@gmail.com',
        cart: {
          items: []
      }
    });
    user.save();  
    }
  })
  
  app.listen(3000);
  console.log('server connected')
})
.catch(err => {
  console.log(err)
})