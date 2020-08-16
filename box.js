class Box{
    constructor(x, y, width, height, angle) {
      
        var options={
          isStatic: false,
         restitution:1,
           friction:0,     
           density:0.8 
               
        
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        console.log(this.body.speed);
  if(this.body .speed <3){

  
  
  }

}


}

      

