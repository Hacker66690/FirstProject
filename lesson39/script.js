const items = [
  {
    title: 'Iphone',
    price: 1500,
  },
  {
    title: 'Samsung',
    price: 1900,
  },
  {
    title: 'Locia',
    price: 1200,
  },
  {
    title: 'Matarona',
    price: 1950,
  },
  {
    title: 'LG',
    price: 1000,
  },
]

let basket = []

let itemsToHTML = ''
items.forEach(function (value, index) {
  itemsToHTML += `
    <div class="item">
    <h3>${value.title}</h3>
    <p>${value.price}</p>
    <button onclick='addToBasket(${index})'>add to basket</button>
    </div>
    `
})
document.getElementById('container').innerHTML = itemsToHTML

function addToBasket(index) {
  const isItemInBasket = basket.some(function (item) {
    return items[index].title == item.title
  })
  if (!isItemInBasket) {
    basket.push(items[index])
    alert('added to Basket')
    localStorage.setItem('basket', JSON.stringify(basket))
  }
}
