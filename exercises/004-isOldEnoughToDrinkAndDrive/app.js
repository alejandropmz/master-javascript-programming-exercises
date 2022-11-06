function isOldEnoughToDrinkAndDrive(age) {
  
  if (age > 21){
    console.log("A tus "+age+" años tienes la edad suficiente para ingerir alcohol y manejar al mismo tiempo")
    return false;
  }
  else if (age > 15 && age < 21){
    console.log("Aunque tienes "+age+" años, y puedes manejar, aún te faltan "+(21-age)+" años para poder ingerir alcohol")
    return false;
  }
  else {
    console.log("Con apenas "+age+" no puedes ni manejar ni ingerir alcohol")
    return false;
  }
}

console.log(isOldEnoughToDrinkAndDrive(15))

