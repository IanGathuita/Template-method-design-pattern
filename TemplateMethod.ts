/*The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these
steps into methods, and put a series of calls to these methods inside a single “template method.” The steps
may either be abstract , or have some default implementation. To use the algorithm, the client is supposed
to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed
(but not the template method itself).*/

abstract class HouseTemplate{
    buildHouse():void{
        this.buildFoundation();
        this.buildPillars();
        this.buildWalls();
        this.buildWindows();
    }

    buildFoundation():void{
        console.log('Building foundation');
    };
    abstract buildPillars():void;
    abstract buildWalls():void;
    buildWindows():void{
        console.log('building windows');
    };
}

class ConcreteHouse extends HouseTemplate{
    buildPillars(): void {
        console.log("Building concrete pillars");
    }
    buildWalls(): void {
        console.log("Building concrete walls.");
    }
}

class WoodenHouse extends HouseTemplate{
    buildPillars(): void {
        console.log("Building wooden pillars");
    }
    buildWalls(): void {
        console.log("Building wooden walls.");
    }
}

//client
let template:HouseTemplate = new ConcreteHouse();
console.log('Building a concrete house');
template.buildHouse();

template = new WoodenHouse();
console.log('Building a wooden house');
template.buildHouse();