function getPage(id){
    window.location.href = `${id}.html`
}
function highlight(id) {
    console.log(`${id}`);
    document.getElementById(id).style.opacity = "80%";
}
function unHighlight(id) {
    document.getElementById(id).style.opacity = "100%";
}