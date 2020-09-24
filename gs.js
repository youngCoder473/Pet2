class GameState{
    constructor(){

    }
    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
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
       
       if(currentTime == lastFed){
           gameState = "happyDog"
           this.updateGameState(gameState);
       }
        if(currentTime == lastFed+1){
            gameState = "playing"
            this.updateGameState(gameState);
        }
        if(currentTime == lastFed>=2 && currentTime == lastFed<=4){
            gameState = "bathing"
            this.updateGameState(gameState);
        }
        else{
            gameState = "sadDog"
            this.updateGameState(gameState);
        }
        console.log("sup");
       console.log(gameState);
    }
    display(){
        
    }
}
