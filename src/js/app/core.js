class ConsoleWrapper{
    constructor(value, debug = false){
        this.el = value;
    }
    speak(){
        debugger;
        console.log(this.el);
    }
}

module.exports = ConsoleWrapper;