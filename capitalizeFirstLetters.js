function capitalizeFirstLetters(text) {
    if (text.length > 0) {
      let Array = text.split(' ')
      let newArray = Array.map(word => {
        return word[0].toUpperCase() + word.slice(1)
      })
      return newArray.join(' ')
    } else {
      return '';
    }
  }
  
  module.exports = capitalizeFirstLetters;