let image = document.querySelector('img');
let btn = document.querySelector('button');

btn.onclick = function(){
    let pic = image.getAttribute('src');
    if(pic == 'Images/Ours_brun_parcanimalierpyrenees_1.jpg'){
        image.setAttribute('src','Images/98309253.webp');
    }
    else{
        image.setAttribute('src','Images/Ours_brun_parcanimalierpyrenees_1.jpg');
    }
}