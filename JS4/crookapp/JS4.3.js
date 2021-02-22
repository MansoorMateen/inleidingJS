
   let plaatjes = [1,2,3,4,5];
   let tellerOog = 0;
   let tellerNeus = 0;
   let tellerMond = 0;
   let Oog = document.getElementById("oog");
   let Neus = document.getElementById("neus");
   let Mond = document.getElementById("mond");

   Oog.style.backgroundImage = "URL('Crookimg/crookOgen1.jpg')"
   Oog.addEventListener("click", function(){
       getOog();
       Oog.style.backgroundImage = "URL('Crookimg/crookOgen"+tellerOog+".jpg')"
   });
   function getOog(){
       if(tellerOog > plaatjes.length - 1){
           tellerOog = 1;
       }
       else{tellerOog++}
       
       console.log(tellerOog)
   }
   Neus.style.backgroundImage = "URL('Crookimg/crookNeus1.jpg')"
   Neus.addEventListener("click", function(){
       getNeus();
       Neus.style.backgroundImage = "URL('Crookimg/crookNeus"+tellerNeus+".jpg')"
   });
   function getNeus(){
       if(tellerNeus > plaatjes.length - 1){
           tellerNeus = 1;
       }
       else{tellerNeus++}
       
       console.log(tellerNeus)
   }
   Mond.style.backgroundImage = "URL('Crookimg/crookMond1.jpg')"
   Mond.addEventListener("click", function(){
       getMond();
       Mond.style.backgroundImage = "URL('Crookimg/crookMond"+tellerMond+".jpg')"
   });
   function getMond(){
       if(tellerMond > plaatjes.length - 1){
           tellerMond = 1;
       }
       else{tellerMond++}
       
       console.log(tellerMond)
   }