class Triangle{

    constructor(x1,y2,x2,y2,x3,y3){
    
        var options = {
    
        isStatic:true
    
        }
        this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3, options);
        this.x1 = x1
        this.y1 = y1 
        this.x2 = x2 
        this.y2 = y2 
        this.x3 = x3 
        this.y3 = y3 

        
        World.add(world, this.body);
    
    
    }
    
    display(){
        
        rectMode(CENTER)
        fill("pink")
        rect(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3)
        
        }
        
        
        
        
        
        }
        
        
        
    
    
    
    
    