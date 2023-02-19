const basket = JSON.parse(localStorage.getItem('basket'))
console.log(basket)

let basketToHTML = ''
basket.forEach(function (value) {
  basketToHTML += `
<div>
${value.title} -    ${value.price}
</div>
`
})

document.getElementById('basket').innerHTML = basketToHTML

function makeOrder() {
  alert('You make order')
}
