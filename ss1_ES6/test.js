let arr = ['JS','PHP','JAVA','abc',['a','b']]

function abc(...arr){
    for (let i = 0; i < arr.length; i ++){
        console.log(arr[i]);
        console.log("-");
    }
}
abc(...arr);

