let btn=document.querySelector('.btn');
// let couponNum = new Date().getTime().toString(36);

// for(let i=0; i<10; i++){
    btn.addEventListener('click', click);
// }

function click(e) {
    alert(new Date().getTime().toString(36));
}