function cariPelaku(str) {

    //pake regex
    let character = /abc/g
    let result = str.match(character)

    return result.length

    //belajar ga pake regex
    // let character = 'abc'
    // let foundCharacter = []

    // for(i = 0; i < str.length; i++){
    //     let temp = ''
    //     for(j = i; j < character.length + i; j++){
    //         temp += str[j]
    //     }
    //     if(temp === character){
    //         foundCharacter.push(temp)
    //     }
    // }

    // return foundCharacter.length

}
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2