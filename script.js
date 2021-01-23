const rightBoobs = document.querySelector('#right-boobs');
const status = document.querySelector('#status');
rightBoobs.onclick = () => {
    rightBoobs.style.top = '-50px';
    setTimeout(() => {
        rightBoobs.style.top = '-10px';
    },1000);
} 

rightBoobs.onmouseover = () => {
    rightBoobs.style.width = '150px';
    status.innerText = "Chạm tay vào vếu";
}

rightBoobs.onmouseleave = () => {
    rightBoobs.style.width ='120px'; 
    status.innerText = "Bỏ tay ra vếu";

}