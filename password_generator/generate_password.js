function generatePassword(options) {
  //1. 定義可用變數
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  //假的需求條件，實際應由req.body取得
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   symbols: 'on',
  //   excludeCharacters: '40'
  // }

  //2. 創建Array，依條件將所有可用符號放入
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  //3. 移除不需要的東西
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
  }

  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  //4. 產生密碼
  let password = ''
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }

  //5. 回傳密碼
  return password
}

//隨機重陣列中取出一個文字
function sample(collection) {
  return collection[Math.floor(Math.random() * collection.length)]
}

module.exports = generatePassword