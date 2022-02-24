
function rev(str) {
  let myRev = str.split("").reverse().join("");
  if(str === myRev){
    return true
  }else{
      return false
  }
 
  }
console.log(rev("maadam"));
