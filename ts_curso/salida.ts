console.log('hola chango');
//types
var mystring="hello world";
mystring=22+"";
var mynumero:number=22;
var mybool:boolean=true;
var myvariable: any="holass";
//string
var stringarray: string[]=["hola","22", ""]
//tuple
var strnumtuple:[string,number];
strnumtuple=["hola",23];
//void undefined, null
//let myvoid : void =undefined;
//let mynull: null=null; 
//let myundefined: undefined=undefined; 
document.write(mystring);
//funtions
function sumaralgunnumero(n1:number,n2:number):number
{
return n1+n2;
}
function getname(firstname:string,lastname?:string):string{
   if(lastname == undefined)
   {
    return firstname;
   }
   return firstname+""+lastname;
}
//void funtion
function myvoidfuntion():void{
    return;
}
//interfaces
interface Itodo{
    title:string;
    text:string;
}
function showtodo(todo:Itodo){
    console.log(todo.title + "-"+todo.text);

}
showtodo({
    title:'lola',
    text:'loren'
})
//clases
class user{
    name:string;
    email:string;
    age:number;
    constructor(name){
        this.name=name;
    }
    register(){
        console.log(this.name + "a sido registrado!");
    }
}
var john =new user("john");

