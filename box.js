class Box{

    constructor(x,y){
        this.body = B.rectangle(x,y,50,50)
        W.add(wo, this.body)
    }


    display(){

        rectMode(CENTER)
        rect(this.body.position.x , this.body.position.y, 50,50)
    }





}

