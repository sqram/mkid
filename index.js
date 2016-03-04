module.exports = function mkid() {
  options = options || {}
  const minLength = options.minLength || 1
  const maxLength = options.maxLength || 6
  const alphabet = options.alphabet   || 'uvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!&~-+_'
  const forbiddenChars = options.forbiddenChars || []
  const forbiddenFirstChars = options.forbiddenFirstChars+'' || ''

  //var chars = '☉♩☹☀☍☮☿♎♡♥♬⚋⚉abcdefghijklmnopqrst'

  var generateId = () => {
    var id;

    // Sorta random... :)
    var shuffled = alphabet.split('').sort( () => 0.5-Math.random()).join('')

    // Crop array to number between minLength & maxLength
    id = shuffled.slice(0, Math.floor(Math.random() * maxLength) + minLength)

    if ((forbiddenFirstChars.indexOf(id.charAt(0)) != -1) || (forbiddenChars.indexOf(id) != -1)) {
      generateId()
    } else {
      return id
    }
  }

  return generateId()
}