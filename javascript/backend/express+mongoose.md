```jsx
//model 부분에 과일 재고 관리 앱을 만드는 중
//index.js
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('멍멍')
})

app.listen(3000, () => {
    console.log("3000 포트로 연결됬누~!~!")
})
```

```jsx
//product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'diary']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
```

```jsx
//seed.js
// 데이터를 먼저 심어주자
// 데이터 없이 작업하긴 힘들다.
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const p = new Product({
    name: '샤인 머스켓',
    price: 5000,
    category: 'fruit'
})
p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })
```