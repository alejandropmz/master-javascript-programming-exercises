function isOldEnoughToVote(age) {
  // your code here
  if (age > 17){
    console.log("Puedes ejercer tu derecho al voto")
    return true;
  }
  else {
    console.log("Aún eres menor de edad para votar")
    return false;
  }
}

console.log(isOldEnoughToVote(12))