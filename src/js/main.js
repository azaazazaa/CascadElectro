document.addEventListener('click', function(event) {
  var e=document.getElementById('dropdown');
  var a=document.getElementById('burger');
  if (!e.contains(event.target) && (!a.contains(event.target))) {
    e.style.display='none';
  }
});

document.getElementById('burger').onclick = () => {
  document.getElementById('dropdown')
}
document.getElementById('burger').addEventListener('click', function (e) {
  console.log('work')
  var div = document.getElementById('dropdown')
  div.style.display = div.style.display === 'none' ? 'block' : 'none'
})

let elements = document.querySelectorAll('.close')
for (let elem of elements) {
  elem.addEventListener('click', function (e) {
    console.log('workElem')
    var div = document.getElementById('dropdown')
    div.style.display = 'none';
  })
}