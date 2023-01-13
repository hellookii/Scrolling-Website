let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Balik Sini :(";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})