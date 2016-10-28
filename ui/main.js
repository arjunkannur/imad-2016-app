console.log('Loaded!');
var im=document.getElementById("move");
var marginLeft=0;
function moveright(){
    marginLeft = marginLeft+1;
    img.style.marginLeft=marginLeft;
}
im.onclick = function (){
    var interval= setInterval(moveright,50);
};
