var obj = {
    value : 'hi',
    printThis : function () {
        console.log(this);
    }
};

var print = obj.printThis;

console.log(print);  //definition of printThis will be logged in console.

obj.printThis();  //obj will be logged here because of this in statement
print();  //it is the free method invocation from window scope so window object will be logged here