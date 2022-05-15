const paragraph = document.querySelector("#paragraph");

document.querySelector("#colorInput").addEventListener("input", (e) => {
    paragraph.style.color = e.target.value;
});

document.querySelector("#numberInput").addEventListener("input", (e) => {
    paragraph.style.fontSize = e.target.value + "px";
});

document.querySelector("#fontSelect").addEventListener("input", (e) => {
    paragraph.style.fontFamily = e.target.value;
});
