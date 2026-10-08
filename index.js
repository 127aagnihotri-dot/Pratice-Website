function clicked(){
    document.title=document.querySelector("input").value;
}
function button1(){
    let increment = document.getElementById("Button1").innerText;
    increment = JSON.parse(increment);
    increment++;
    localStorage.setItem("Button1", increment);

    document.getElementById("Button1").innerText=increment;
}
function button2(){
    let increment1 = JSON.parse(document.getElementById("Button2").innerText);
    sessionStorage.setItem("Button2", increment1);
    increment1++;
    document.getElementById("Button2").innerText=increment1;
}
function unloading(){
    const savedButton1 = localStorage.getItem("Button1");
    if (savedButton1) {
        document.getElementById("Button1").innerText = localStorage.getItem("Button1");
    }

    const savedButton2 = sessionStorage.getItem("Button2");
    if (savedButton2) {
        document.getElementById("Button2").innerText = sessionStorage.getItem("Button2");
    }
}