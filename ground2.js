class Ground2{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push()
      rotate(120)
      rectMode(CENTER);
      fill("white");
    rect(pos.x, pos.y, this.w,this.h);
    

    pop()
    }
  };