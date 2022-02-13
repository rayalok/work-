let btn=document.querySelectorAll('.alok-btn');
let acc_text=document.querySelectorAll('.alok-body');
let arr=document.querySelectorAll('.arrow');
function khalok(btn_num) {
    arr[btn_num].classList.toggle('up');
    acc_text[btn_num].classList.toggle('acc-show');
    btn[btn-num].classList.toggle('active');
}
