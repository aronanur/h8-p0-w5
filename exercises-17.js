function kaliTerusRekursif(angka) {

  let tempNumber = 1
  let numToString = String(angka)

  for(i = 0; i < numToString.length; i++){
    tempNumber *= Number(numToString[i])
  }

  console.log(tempNumber)

  //base case  
  if(String(tempNumber).length === 1){
    return tempNumber
  }
    
  //recursive case
  return kaliTerusRekursif(tempNumber)

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6