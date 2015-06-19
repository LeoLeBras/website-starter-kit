import ConsoleWrapper from "./app/core.js";
var Console = new ConsoleWrapper('Hello');
Console.speak('Hello !');

import Foo from "./app/foo.js";
var Bar = new Foo();
Bar.run();