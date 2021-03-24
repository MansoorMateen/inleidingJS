

const plaatjes = document.getElementsByTagName("img");
const arrayOne = [...plaatjes]; 
var nummers = [];
var random = 0;
var klik = [];
var geklik =-1;
var punten =0
var beurt = 0;
var gelijk = false;

while (nummers.length < 18 ){
    random =Math.floor(Math.random()*18 + 1);
    if (nummers.lastIndexOf(random)== -1){
        nummers.push(random);
    }
   
}

 random=0;

/*
const pictureElements = document.querySelectorAll("img");
for (const value of pictureElements){
    value.src = "../hondJS/hond"+Math.round(nummers[random]/2)+".jfif";
  
    value.addEventListener("click", test);
    random++;
}
*/
//console.log(pictureElements);
//HTML-collection (dynamische, API) versus NodeList versus reguliere Array (statisch tezij expliciet aanpassen)
// Rest operator (...) || Spread (...) operator 
   //...[a, b, c] => [a, b, c]
console.log(arrayOne);
for (const plaatje in arrayOne){
   // 
   plaatjes[plaatje].addEventListener('click', function(){
onDogClicked(this.id);
    });
    random++;
   
}

function onDogClicked(e){
    console.log(e);
    if (plaatjes[e-1].src = "../hondJS/heart.jpg"){
    geklik++;
    plaatjes[e-1].src = "../hondJS/hond"+Math.round(nummers[e-1]/2)+".jfif";
    klik[geklik] = plaatjes[e-1];     
    //klik[geklik].src = [plaatjes[e-1]];
    }
   

    
    console.log(geklik);
    console.log(plaatjes[geklik]);
    if (geklik >= 1){
        setTimeout(timerSet,1000);
       }

    function timerSet(){
        if (klik[1].src == klik[0].src){
            
            punten++; 
            window.alert(punten);
            gelijk = true;
            }
    
            else{ 
                klik[1].src ="../hondJS/heart.jpg" ;
                klik[0].src ="../hondJS/heart.jpg" ;
            
        }
            beurt++;
            geklik=-1;
        }
    }


