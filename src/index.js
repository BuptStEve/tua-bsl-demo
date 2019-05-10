import './styles.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import { lock, unlock } from 'tua-body-scroll-lock'

var $ = document.querySelector.bind(document)
var $modalOne = $('#modalOne')
var $modalTwo = $('#modalTwo')
var $targetOne = $('#targetOne')
var $targetTwo = $('#targetTwo')

var someText = ''
for (var i = 0; i < 50; i++) {
  someText += `<p>${i}</p>`
}
$('#list').innerHTML = someText
$targetOne.innerHTML = someText
$targetTwo.innerHTML = someText

$('#btn').onclick = function() {
  $modalOne.style.display = 'block'
  lock($targetOne)
}
$('#modalBtn').onclick = function() {
  $modalTwo.style.display = 'block'
  lock($targetTwo)
}

$modalOne.onclick = function(event) {
  if (event.target.id === 'targetOne') return
  if (event.target.id === 'modalBtn') return

  $modalOne.style.display = 'none'
  unlock($targetOne)
}
$modalTwo.onclick = function(event) {
  if (event.target.id === 'targetTwo') return

  $modalTwo.style.display = 'none'
  unlock($targetTwo)
}
