module.exports = function mkid(options) {
  options = options || {}
  const minLength = options.minLength || 1
  const maxLength = options.maxLength || 6
  const alphabet = options.alphabet   || 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!&~-+_'
  const cannotBe = options.cannotBe || []
  const cannotStartWith = options.cannotStartWith+'' || ''
  function shuffle(array) {
      var n = array.length, t, i;
      while (n) {
        i = Math.random() * n-- | 0;
        t = array[n];
        array[n] = array[i];
        array[i] = t;
      }
      return array.join('');
    }
  var generateId = () => {
    var id;

    // Shuffle & crop array to number between minLength & maxLength
    id = shuffle(alphabet.split('')).slice(0, Math.floor(Math.random() * maxLength) + minLength);

    if ((cannotStartWith.indexOf(id.charAt(0)) != -1) || (cannotBe.indexOf(id) != -1)) {
      generateId()
    } else {
      return id;
    }
  }

  return generateId()
}