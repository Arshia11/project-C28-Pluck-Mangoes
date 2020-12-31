class Sling{
	constructor(body, anchor)
	{
		
		var options = { bodyA:body,			 
			pointB : anchor, 
			stiffness : 0.01, 
			length : 1
			
		}
		
		this.bodyA = body
		this.pointB = anchor
		this.sling = Constraint.create(options)
		World.add(myWorld,this.sling)
	}

	attach(body){
		this.sling.bodyA = body;
	}

	fly()
	{
		this.sling.bodyA = null;
	}

	display()
	{
		if(this.sling.bodyA)
		{
			var pointA = this.bodyA.position;
			var pointB = this.pointB

			strokeWeight(2);		
			line(pointA.x, pointA.y, pointB.x, pointB.y);
		}
	}
}