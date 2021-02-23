
pics = document.getElementById("pics");
dogPicHolderMaker();
dogPicCreator();

function dogPicHolderMaker(){ 
    for(var i =0; i<9;i++){
        dogPicHolder = document.createElement("div");
        dogPicHolder.id = "dogpicholder" + i;
        dogPicHolder.className = "dogpic";
        pics.appendChild(dogPicHolder);
    }
}
function dogPicCreator(){
    dogPicHolders = document.getElementsByClassName("dogpic");
    for(var i=0; i< dogPicHolders.length;i++){
        favoriet = document.createElement("div");
        favoriet.className ="favoriet";
        favoriet.id = "favoriet_" + (i+1);
        hondjePlaatje = document.createElement("img");
        hondjePlaatje.src = "../hondJS/hond"+(i+1)+".jfif";
        hondjePlaatje.id = (i+1)
        hondjePlaatje.addEventListener("click",function(){ maakFavoriet(this.id)});
        dogPicHolders[i].appendChild(favoriet);
        dogPicHolders[i].appendChild(hondjePlaatje);
    }   
}

function maakFavoriet(id){
    console.log("Maak mij Favoriet!!!! hondje"+ id);
    notSoFavorite = document.getElementsByClassName("favoriet");
    for(var i = 0; i< notSoFavorite.length;i++){
        notSoFavorite[i].style.backgroundImage= "none";
    }
    favoriet = document.getElementById("favoriet_"+ id);
    favoriet.style.backgroundImage = "URL('../hondJS/heart.jpg')"
}
