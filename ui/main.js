console.log('Loaded!');
var img=document.getElementById("moving");
function moveright(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft;
}
img.onclick = function (){
    var intervel= setIntervel(moveright,100);
};
