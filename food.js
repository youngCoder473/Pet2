class Food{
    constructor(){
        this.foodStock = 0
        this.lastFed =0
        this.image = loadImage("images/Milk.png");
    }
    getFoodStock(){
        database.ref("food").on("value",function(data){
            foodStock = data.val();
           // this.foodStock = foodStock;
            console.log(foodStock);
        });
        this.foodStock = foodStock
    }
    updateFoodStock(foodie){
        database.ref("/").update({
            food:foodie
        })
    }
    deductFood(){
        if(foodStock>0){
        foodStock = foodStock - 1
        database.ref("/").update({
            food:foodStock, lastFed:hour()
        });
        this.foodStock = foodStock
    }
    }

    addFood(){
        foodStock = foodStock + 1
        console.log(this.foodStock);
        database.ref("/").update({
            food:foodStock
        });
        this.foodStock = foodStock
    }

    display(){
      var x = 80;
      var y = 100;

      imageMode(CENTER);
      image(this.image,500,220,70,70);
      if(this.foodStock!=0){
        for(var i = 0; i<this.foodStock;i++){
            if(i%10==0){
                x = 80
                y = y+50
            }
            image(this.image,x,y,50,50)
            x = x+30;
        }
      }
    }
}