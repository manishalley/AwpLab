let a=153
function armstrong(n){
    let sum=0
    let num=n
    while(num>0){
        let digit=num%10
        sum+=digit*digit*digit
        num=Math.floor(num/10)
    }
    return sum==n
}
if(armstrong(a)){
    console.log("true")
}
else{
    console.log("false")
}