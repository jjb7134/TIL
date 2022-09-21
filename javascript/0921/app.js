const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('느그 가짜 데이타 여깄띠');
            }
            reject('에러 나부러따 아그야');
        }, 1000);
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('요청 됬다리~!')
        console.log('데이타는 바로', data)
    })
    .catch((err) => {
        console.log('안대애애', err)
    })

const makeRainbow = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

makeRainbow('red', 1000)
    .then(() => makeRainbow('orange', 1000))
    .then(() => makeRainbow('yellow', 1000))
    .then(() => makeRainbow('green', 1000))
    .then(() => makeRainbow('blue', 1000))
    .then(() => makeRainbow('indigo', 1000))
    .then(() => makeRainbow('violet', 1000))


// async function hello() {

// }

    const sing = async () => {
        throw '앙대, 문제생김!'
        return '랄랄라'
    }

    sing()
        .then(data => {
            console.log('프로미스 성공', data)
        })
        .catch(err => {
            console.log('앙대애애, 프로미스 실패')
            console.log(err)
        })

const login = async (username, password) => {
    if(!username || !password) throw '틀러부러야'
    if(password === '비번') throw '통과~!'
    throw '암호 쳐라'
}

login('asdf','비번')
    .then(msg => {
        console.log('성공~!')
        console.log(msg)
    })
    .catch(err => {
        console.log('실패')
        console.log(err)
    })