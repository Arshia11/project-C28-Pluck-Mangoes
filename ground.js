 class Ground {
	constructor(x,y,w,h){
	var options={
	isStatic:true
	
	}
	this.body=Bodies.rectangle(x,y,w,h,options);
	World.add(myWorld,this.body);
	this.width=w;
	this.height=h;
	
	
	}
	
	display(){
	var pos=this.body.position;
	fill ("green")
	rectMode(CENTER)
	rect(pos.x,pos.y,this.width,this.height)
	
	}
	
	
	}
