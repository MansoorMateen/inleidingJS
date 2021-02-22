
   var plaatjes = [1,2,3,4,5,6,7,8,9];
   var teller = 0;
   var slideholder = document.getElementById("slideholder");
   slideholder.style.backgroundImage = "URL('../../hondJS/hond1.jfif')"
   slideholder.addEventListener("click", function(){
       getHond();
       slideholder.style.backgroundImage = "URL('../../hondJS/hond"+teller+".jfif')"
   });
   function getHond(){
       if(teller > plaatjes.length - 1){
           teller = 1;
       }
       else{teller++}
       
       console.log(teller)
   }