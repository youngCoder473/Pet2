class GameState{
    constructor(){

    }
    getGameState(){
        dataBase.ref("gameState").on(value,function(data){
            gamestate = data.val()
          });
    }
    currentTime(){
    currentTime = hour()/12
    }
    updateGameState(state){
        database.ref("/").update({
            gameState:state
        });
    }
    changeGameState(){
        if(currentTime == lastFed+1){
            gamestate = "playing"
            updateGameState();
        }
        if(currentTime == lastFed>=2 && currentTime == lastFed<=4){
            gamestate = "bathing"
            updateGameState();
        }
        else{
            gamestate = "sadDog"
            updateGameState();
        }
        console.log("sup")
    }
    display(){
        
    }
}
