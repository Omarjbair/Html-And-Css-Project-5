let slid_bar = document.getElementById("slide_bar");
let slide_bar_btn = document.getElementById("slide_bar_btn");
let header = document.getElementById('header');
let i = 1;

slide_bar_btn.onclick = function () {
    if (i % 2 != 0) {
        slid_bar.style.transition = "0.5s";
        slid_bar.style.opacity = "1";
        i++;
    } else {
        slid_bar.style.transition = "0.5s";
        slid_bar.style.opacity = "0";
        i++;
    }
}



