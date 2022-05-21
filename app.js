
    window.onload = function() {
     
      };      
      let ranks  = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
      let suits = ["diamond", "heart", "spade", "clover" ]
      let symbols = ["♦", "♥", "♠", "♣"]
      let rojo = ["diamond", "heart"]

        function random_item(items)
        {        
        return items[Math.floor(Math.random()*items.length)];
           
        }
        let numeros =  random_item(ranks)
        let  pintas = random_item(suits)
        let  simbolos = random_item(symbols)

          let color = rojo.includes(pintas) ? "red": "black";
               
        // esto es solo para testear
       console.log(pintas)
       console.log(color)
       console.log(numeros)       
       console.log(simbolos)

       document.querySelector(".colortop").style.color = color
       document.querySelector(".colorbottom").style.color = color
       document.querySelector(".colortop").innerHTML = simbolos
       document.querySelector(".colorbottom").innerHTML = simbolos
       document.querySelector(".number").innerHTML = numeros

       if(document.querySelector(".colortop").innerHTML == symbols[0] || document.querySelector(".colortop").innerHTML == symbols[1] ){
        document.querySelector(".colortop").style.color = "red"
       }
       else{
        document.querySelector(".colortop").style.color = "black"
       }
       if(document.querySelector(".colorbottom").innerHTML == symbols[0] || document.querySelector(".colorbottom").innerHTML == symbols[1] ){
        document.querySelector(".colorbottom").style.color = "red"
       }
       else{
        document.querySelector(".colorbottom").style.color = "black"
       }