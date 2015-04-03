[].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
  if ($.trim(inputEl.value.trim()) !== '') {
    input.parentNode.classList.add('input--filled')
  }

  inputEl.addEventListener('focus', onInputFocus);
  inputEl.addEventListener('blur', onInputBlur);
});

function onInputFocus (ev) {
  ev.target.parentNode.classList.add('input--filled')
}

function onInputBlur (ev) {
  if ($.trim(ev.target.value.trim()) === '') {
    ev.target.parentNode.classList.remove('input--filled')
  }
}

function Algo (s) {
  this.z = s || 0;
  this.m = 13;
  this.u = 11;
  this.c = 7;
  this.x = this.z;
}

Algo.prototype.next = function () {
  return (this.x = (this.u * this.x + this.c) % this.m);
};

var input = $('[name="lol"]')
var result = $('.result')
var subject = $('.subject')
var loader = $('.loader-inner')
var enter = $('.press-enter')
var sample = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/

var store = []
var not = ['php','java','go','golang','ruby','haskell','mongo','mongodb']
var nope = ['nope','not even close', 'no way', 'needs more webscale', 'seriously? no.', 'so close', 'try again later, or never.','ugh','needs to be about 20% more webscale','no','one day']
var yeps = ['YES','Sure is', 'its over 9000 webscales', 'about 10 webscales', 'totally', 'fersure', 'yep', 'yup']

function check (value) {
  if (store[value]) {
    return store[value]
  }

  var values = value.split(' ')
  var algo = new Algo(Date.now())

  if (sample.test(value)) {
    store[value] = !!(algo.next() % 2)
  } else {
    for (var i = 0; i < values.length; i++) {
      if (not.indexOf(values[i]) !== -1) {
        store[value] = true
      }
    }
  }

  return store[value]
}

function evaluate () {
  var value = $.trim(input.val().toLowerCase())

  if (value === '') {
    subject.html('If there was a subject...')
    return result.html('... it could be')
  }

  subject.empty().text(value).append('<span> is</span>')

  if (check(value)) {
    result.html(nope[Math.floor(nope.length * Math.random())]).attr('class', 'result no')
  } else {
    result.html(yeps[Math.floor(yeps.length * Math.random())]).attr('class', 'result yes')
  }

  loader.css('opacity', 0)
  enter.css('opacity', 1)
}

input.bind('keypress', function (e) {
  if (e.keyCode === 13) {
    enter.css('opacity', 0)
    loader.css('opacity', 1)

    setTimeout(evaluate, 1000)
  }
})
