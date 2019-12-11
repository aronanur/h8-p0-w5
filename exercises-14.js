function changeVocals (str) {
    let vokalLowerCase = 'aiueo'
    let vokalUpperCase = 'AIUEO'
    let newString = ''

    for(i = 0; i < str.length; i++){
        let temp = ''
        let index = str[i].charCodeAt()
        for(j = 0; j < vokalLowerCase.length; j++){
            if(str[i] === vokalLowerCase[j]){
                temp += String.fromCharCode(index + 1)
            }else if(str[i] === vokalUpperCase[j]){
                temp += String.fromCharCode(index + 1)
            }
        }
        if(temp === ''){
            temp += str[i]
        }

        newString += temp
    }

    return newString
    
}
  
  function reverseWord (str) {
    let reverseWord = ''

    for(i = str.length - 1; i >= 0; i--){
        reverseWord += str[i]
    }

    return reverseWord

  }
  
  function setLowerUpperCase (str) {
    let alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newString = ''

    for(i = 0;i < str.length; i++){
        let temp = ''
        for(j = 0; j < alphabetLowerCase.length; j++){
            if(str[i] === alphabetLowerCase[j]){
                temp += alphabetUpperCase[j]
            }else if(str[i] === alphabetUpperCase[j]){
                temp += alphabetLowerCase[j]
            }
        }
        if(temp === ''){
            temp = ' '
        }

        newString += temp
    }

    return newString

  }
  
  function removeSpaces (str) {
      let newString = ''

      for(i = 0; i < str.length; i++){
          if(str[i] !== ' '){
              newString += str[i]
          }
      }

      return newString

  }
  
  function passwordGenerator (name) {

    if(name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    let gantiVokal = changeVocals(name)
    let balikKata = reverseWord(gantiVokal)
    let lowCaseOrUpCase = setLowerUpperCase(balikKata)
    let removeWhiteSpace = removeSpaces(lowCaseOrUpCase)
    return removeWhiteSpace
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'