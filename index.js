// Your code here

class Polygon{
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length

    }

    get perimeter(){
        return this.array.reduce((sum,side) => sum + side, 0)

    }

}


class Triangle extends Polygon{
    
    
    get isValid(){
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]

        if(a + b > c && a+c >b && c+b>a){
            return true
          }
          else {
            return false
          }
     }
}

class Square extends Polygon{

    get isValid(){
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        let d = this.array[3]

        if(a === b && a === c && a === d){
            return true
          }
         if(b === a && b === c && b === d){
            return true
        }
        if(c === a && c === b && c === d){
            return true
        }
        if(d === a && d === b && d === c){
            return true
        }
        return false


    }

    get area(){
        return this.array[0] * this.array[1]
    }
    

}