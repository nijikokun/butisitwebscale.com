var input = $('[name="lol"]')
var result = $('.result')
var $button = $('button')

var not = ['php','java','go','golang','ruby','haskell']
var nope = ['nope','not even close', 'no way', 'haha', 'seriously? no.', 'try again later, or never.','ugh','needs to be about 20% more webscale']
var yeps = ['YES','Sure is', 'its over 9000 webscales', 'about 10 webscales', 'totally', 'fersure', 'yep', 'yup']

$button.on('click', function (e) {
  e.preventDefault()

  var value = $.trim(input.val().toLowerCase())

  if (value === '') {
    return result.html('... it could be')
  }

  if (not.indexOf(value) !== -1) {
    result.html(nope[Math.floor(nope.length * Math.random())]).attr('class', 'result no')
  } else {
    result.html(yeps[Math.floor(yeps.length * Math.random())]).attr('class', 'result yes')
  }
})
