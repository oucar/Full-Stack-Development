function lastElement(arrayGiven){
    if(arrayGiven.length>0){
        const last = arrayGiven.length-1;
        return arrayGiven[last];
    } else {
        return null;
    }
}