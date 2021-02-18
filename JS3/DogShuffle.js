document.getElementById("shuffle").style.textAlign="center";
var plaatjes = document.getElementsByTagName("img");
var nummers = []
var random = 0;
while (nummers.length < 9 ){
    random =Math.floor(Math.random()*9 + 1);
    if (nummers.lastIndexOf(random)== -1){
        nummers.push(random);
    }
   
}
random=0;
for (var plaatje in plaatjes){
   plaatjes[plaatje].src = "../hondJS/hond"+nummers[random]+".jfif";
   random++;
}