
class ConsoleWrapper{
    constructor(value, debug = false){
        this.el = value;
        this.value = 'di';
    }
    speak(){
        debugger;
        console.log(this.el);
    }
}

module.exports = ConsoleWrapper;