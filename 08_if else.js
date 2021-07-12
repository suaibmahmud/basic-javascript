function func(val){
    if(val<0){
        return "negative"
    }
    else if(val==0){
        return "zero"   
    }
    else if(val>0){
        return "positive"
    }
}

console.log(func(69));