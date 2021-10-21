const container = document.querySelector(".game-container");
let counter = 0;
let lose = 0;
function facile(){
    game(0);
    game(100, 1000);
};

function medio(){
    game(0);
    game(81, 900);
}

function difficile (){
    game(0);
    game(49, 700);
}

function game(gamemode,width){
    container.innerHTML = "";
        var blocco = null;
        for(let i=0;i<gamemode;i++){
            document.getElementById("game").style.width = width+"px";
            blocco = document.createElement('div');
            blocco.className = "blocco";
            blocco.id = i;
            container.append(blocco);
            
        }
        document.getElementById("genera").addEventListener('click', function(){
            if(counter == 0){    
                var bombs = [];                                         //array bombe
                igen=0;     
                while(igen<16){
                    var bomb = Math.floor(Math.random()*100);           //crea una bomba
                            
                    while(bombs.includes(bomb)){   
                        var bomb = Math.floor(Math.random()*100);       
                    }
                    bombs.push(bomb);
                    igen++;
                    console.log(igen);
                }
                console.log(bombs);
                for(let i1=0;i1<100;i1++){
                    var seleziona = document.getElementsByClassName("blocco");
                    if(blocco.id = i1){
                        for(let i2=0;i2<16;i2++){
                            if(i1 == bombs[i2]){
                                var conBomba = document.getElementById(i1);
                                conBomba.id="conbomba";  
                                conbombaid = conBomba.id;    
                                conBomba.addEventListener('click',function(){
                                    this.style.backgroundColor = "red";
                                    alert("hai perso")
                                    for(i3=0;i3<16;i3++){
                                        var changeid = document.getElementById("conbomba");
                                        changeid.id = "show";                              
                                    }
                                })                 
                            }
                            else{
                                document.getElementById(i1).addEventListener('click', function(){
                                    this.style.backgroundColor = "green";
                                })
                            }
                        }
                    }
                    else{
                        document.getElementById(i1).addEventListener('click', function(){
                            this.style.backgroundColor = "green";
                        })
                    }
                }
                counter++;
            }  
            else{
                alert("riavvia la pagina")
            }  
        })   
        console.log(lose); 
    }        
    