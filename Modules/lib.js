function echo(msg){
    console.log(msg); 
}
let name="I am Teresa";
//export default echo;

function add(n1,n2){
    console.log(n1+n2);
}
//輸出物件，用物件包裝兩個函式
export default {
    echo:echo, //物件的方法名稱：方法對應的資料
    add:add
}