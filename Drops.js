class Drops{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
		this.y=y;
		this.r=4;
        this.body = Bodies.circle(x, y, 4, options);
        World.add(world, this.body);
      }
      display(){
        var dropPos=this.body.position;	
		push()
		translate(dropPos.x, dropPos.y);
		rotate(this.body.angle)
		fill("blue");
		ellipseMode(RADIUS);
        ellipse(0, 0, 4, 4);
		pop()
      }
      updateDrops(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)})
        }
      }
}