dragElement(document.getElementById('box'));
let g = 0, pal = -1; 
var loader = document.getElementById('loader');
var  p = document.getElementById('point')  
var c = correctans;
var a = answer;  
var pointsEarned = document.getElementById('points-earned');
 
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + 'header')) {
        document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

}


answerButtonElement.addEventListener('click', ({target}) =>{
    var h; 
    pal += 1;  
    h = target.closest('button')
    
    if (h) {
           answer.push(h.innerText)
    } else{
        a[pal] = "";
        c[pal] = "something else";   
    }  
    // console.log(quiz); 
    console.log(pal); 
    console.log(a[pal]);  
     console.log(c[pal]);     
     console.log(loader.width);          

    

    if(c[pal] == a[pal]){    
          g += 1;  
          pointsEarned.innerText =  (g / shuffleQ.length) *100+"%"; 
          loader.style.width =  (g / shuffleQ.length) *100+"%";     
          p.innerText = "points: "+g; 

          if ((g / shuffleQ.length) *100 > 79){
            loader.style.backgroundColor = "var(--green)"; 
          } 
          if ((g / shuffleQ.length) *100 < 39){
            loader.style.backgroundColor = "var(--red)";  
          }  
    }
})
        