function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16){
    console.log("A tus "+age+" años, eres legal para conducir")
    return true;
  }
  else {
    console.log(age+" años no es edad legal para conducir")
    return false
  }
}

console.log(isOldEnoughToDrive(23))