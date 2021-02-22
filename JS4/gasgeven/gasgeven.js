var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid: 0,
    
    gasgeven: function(){
        this.snelheid +=5;
        console.log(this.snelheid);
    },
    toet: 0,
    toeteren: function(){
        console.log("toet");
        this.toet+=1;
    },


   
    
}

