var input = $('[name="lol"]')
var result = $('.result')
var $button = $('button')

var not = ['php','java','go','golang','ruby','haskell','mongo','mongodb']
var nope = ['nope','not even close', 'no way', 'haha', 'seriously? no.', 'try again later, or never.','ugh','needs to be about 20% more webscale','no','one day']
var yeps = ['YES','Sure is', 'its over 9000 webscales', 'about 10 webscales', 'totally', 'fersure', 'yep', 'yup']

function check (value) {
  var values = value.split(' ')

  for (var i = 0; i < values.length; i++) {
    if (not.indexOf(values[i]) !== -1) {
      return true
    }
  }

  return false
}

$button.on('click', function (e) {
  e.preventDefault()

  var value = $.trim(input.val().toLowerCase())

  if (value === '') {
    return result.html('... it could be')
  }

  if (check(value)) {
    result.html(nope[Math.floor(nope.length * Math.random())]).attr('class', 'result no')
  } else {
    result.html(yeps[Math.floor(yeps.length * Math.random())]).attr('class', 'result yes')
  }
})
