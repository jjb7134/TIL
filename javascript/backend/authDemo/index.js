const express = require('express');
const app = express();
const User = require('./models/user'); //오타 조심하자
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

// mongoose로 mongo랑 연결해주기
mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("몽고 연결 성공!")
    })
    .catch(err => {
        console.log("ㅜ머하노 뭐하노 뭐하노")
        console.log(err)
    })


app.set('view engine','ejs');
app.set('views','views');

// req.body를 파싱하자
app.use(express.urlencoded({ extended: true}));
app.use(session({ secret: 'notagoodsecret'}))

app.get('/', (req,res) => {
    res.send('이건 홈페이지누')
})

// req,res 순서가 중요하구나
app.get('/register', (req,res) => {
    res.render('register')
})

// get은 url에 유저 정보가 쿼리문으로 나타기 때문에 post로 처리
app.post('/register', async (req, res) => {
    const {password, username} = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    // post 라우터니 아래로 처리해주자
    res.redirect('/')
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.get('/secret', (req,res) => {
    if(!req.session.user_id) {
        res.redirect('/login')
    }
    res.send('이건 보안 처리 됩니다.')
})
app.post('/login', async (req,res) => {
    const { username, password} = req.body;
    const user = await User.findOne({ username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword) {
        // 로그인 성공하면 세션에 id 저장
        req.session.user_id = user._id;
        res.redirect('/secret')
    }else {
        res.redirect('/login')
    }
})

app.listen(3000, () => {
    console.log('서버 연결 성고응~!')
})