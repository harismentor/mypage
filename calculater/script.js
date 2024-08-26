function buttonclick(val){
    console.log(val);
    document.getElementById("screen").value+=val;
}
function clearScreendata(){
    document.getElementById("screen").value="";
}

function equalclick(){
    var text =  document.getElementById("screen").value;
    var result = eval(text);
    console.log(result);
    document.getElementById("screen").value=result;

}