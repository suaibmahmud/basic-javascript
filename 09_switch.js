function func(val){
    var ans = "";
    switch(val){
        case 1:
            ans = "fuck";
            break;
        case 2:
            ans = "you";
            break;
        case 3:
            ans = "bitch";
            break;
	default:
            ans = "fuck you bitch";
            break;
    }
    return ans;
}

console.log(func(1));