let add=function(n1,n2){
    console.log(n1+n2);
};

let multiply=function(n1,n2){
    console.log(n1*n2);
};

let math={
    add:add,multiply:multiply
};

export default math; //預設:所有功能包裝在一起
export {add,multiply}; //非預設:個別分開的功能


/*
//預設的輸出
let x = "Hello"; 
//export default x; 

//非預設的輸出
let data=[5,6,7];
let obj={x:10,y:2};
//export{data,obj};

export{x as default,data,obj}; //整合語法
*/