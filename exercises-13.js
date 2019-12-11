function sorting(arrNumber) {
    for(i = 0; i < arrNumber.length; i++){
      let temp = ''
      for(j = 0; j < arrNumber.length; j++){
        if(arrNumber[j] > arrNumber[j + 1]){
          temp = arrNumber[j]
          arrNumber[j] = arrNumber[j + 1]
          arrNumber[j + 1] = temp
        }
      }
    }

    return arrNumber

}
  
  function getTotal(arrNumber) {
    
    let groupNumber = []

    for(i = 0; i < arrNumber.length; i++){
      var unique = true
      for(j = 0; j < groupNumber.length; j++){
        if(arrNumber[i] === groupNumber[j][0]){
          groupNumber[j][1]++
          unique = false
        }
      }
      if(unique){
        groupNumber.push([arrNumber[i], 1])
      }
    }

    let largestNumber = 0
    let freq = 0

    for(i = 0; i < groupNumber.length; i++){
      if(groupNumber[i][0] > largestNumber){
        largestNumber = groupNumber[i][0]
        freq = groupNumber[i][1]
      }
    }

      return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${freq} kali`

  }
  
  function mostFrequentLargestNumbers(arrNumber) {

    if(arrNumber.length === 0){
      return ''
    }

    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''