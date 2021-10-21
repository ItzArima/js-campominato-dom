const container = document.querySelector(".game-container");

function facile(){
    container.innerHTML = "";
    var blocco = null;
    var bombs = [];
    for(let i=0;i<100;i++){
        document.getElementById("game").style.width = "1000px"
        blocco = document.createElement('div');
        blocco.className = "blocco";
        blocco.id = i;
        container.append(blocco);
        while(i<16){
            var bomb = Math.floor(Math.random()*101);
                       
            while(bombs.includes(bomb)){   
                var bomb = Math.floor(Math.random()*101);       
            }
            bombs.push(bomb);
            i++;
            console.log(i);
            document.getElementById("game").style.width = "1000px"
            blocco = document.createElement('div');
            blocco.className = "blocco";
            blocco.id = i;
            container.append(blocco);
        }
    }
    document.getElementById("genera").addEventListener('click', function(){
        console.log(bombs);
        for(let i1=0;i1<101;i1++){
            if(blocco.id = i1){
                for(let i2=0;i2<16;i2++){
                    if(i1 == bombs[i2]){
                        console.log("ciao");
                        document.getElementById(i1).innerHTML = "bomb"
                    }
                }
            }
        }
    })    

    return bombs; 
}
