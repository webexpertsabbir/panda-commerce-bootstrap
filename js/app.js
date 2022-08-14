//1 h2 element color chanege
const h2Lightblue = document.getElementsByTagName('h2');
for (const Lightblue of h2Lightblue) {
    Lightblue.style.color = 'lightblue';
}

//2 backpack section backgraund Change
const backpackBg = document.getElementById('backpack');
backpackBg.style.backgroundColor = 'tomato';

//3 card class border radias

const cardBorder = document.querySelectorAll('.card');
for (const cardBorderRadias of cardBorder) {
    // console.log(cardBorderRadias);
    cardBorderRadias.style.borderRadius = '30px';
}

//4 onlick event handeler add
function btns() {
    console.log('add onclick');
}

//5 buy now button remove

const btnHide = document.querySelectorAll('#btn-hide');
for (const btnHides of btnHide) {
    btnHides.onclick = function () {
        btnHides.style.display = 'none';
    }
}

// 6 delete btn
document.querySelector('.form-control').addEventListener('keyup', function (event) {
    const text = event.target.value;
    // console.log(text);
    const activeBtn = document.getElementById('active-btn');
    if (text == 'email') {
        activeBtn.removeAttribute('disabled');
    }
    else {
        activeBtn.setAttribute('disabled', true);
    }

})
//7 image enter

document.getElementById('image').addEventListener('mouseenter', function(){
    // console.log('mouseenter')
    const image = document.getElementById('image');
    image.src = "./images/categories/bag.png";
})

//8 dabolclick

document.getElementById('subscribe').addEventListener('dblclick', function(){
    const bgChange = document.getElementById('subscribe');
    bgChange.style.backgroundColor = 'red';

})






