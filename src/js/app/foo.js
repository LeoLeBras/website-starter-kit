import ConsoleWrapper from "./core.js";

class Foo extends ConsoleWrapper{
    run(){
    	console.log(this.el);
    }
}

module.exports = Foo;