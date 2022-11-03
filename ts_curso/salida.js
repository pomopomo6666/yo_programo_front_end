console.log('hola chango');
//types
var mystring = "hello world";
mystring = 22 + "";
var mynumero = 22;
var mybool = true;
var myvariable = "holass";
//string
var stringarray = ["hola", "22", ""];
//tuple
var strnumtuple;
strnumtuple = ["hola", 23];
//void undefined, null
//let myvoid : void =undefined;
//let mynull: null=null; 
//let myundefined: undefined=undefined; 
document.write(mystring);
//funtions
function sumaralgunnumero(n1, n2) {
    return n1 + n2;
}
function getname(firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    return firstname + "" + lastname;
}
//void funtion
function myvoidfuntion() {
    return;
}
function showtodo(todo) {
    console.log(todo.title + "-" + todo.text);
}
showtodo({
    title: 'lola',
    text: 'loren'
});
//clases
var user = /** @class */ (function () {
    function user(name) {
        this.name = name;
    }
    user.prototype.register = function () {
        console.log(this.name + "a sido registrado!");
    };
    return user;
}());
var john = new user("john");
