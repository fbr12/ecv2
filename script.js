let array = [{
    productImg: 'oso.png',
    productName: 'Llave',
    productId: 0,
    productPrice: 2000,
},{
    productImg: 'product.png',
    productName: 'Llave2',
    productId: 1,
    productPrice: 2500,
}]
console.log(typeof(document.getElementsByClassName('featured')))
console.log(typeof(document.createElement('div')))
array.forEach((element)=>{
    const newDiv = document.createElement('div');
    newDiv.className = 'container'
    const fDiv = document.querySelector('.featured');
    fDiv.appendChild(newDiv);
    newDiv.innerHTML = `
    <div class="info">
    <img id="imgf" src="${element.productImg}" alt="">  
    <h3>${element.productName}</h3>
    <p>${element.productId}</p>
  </div>
  <div class="bottom">
    <button class="addCart"></button>
    <div class="prices">
      <p class="listPrice"></p>
      <p class="price">${element.productPrice}</p>
    </div>
  </div>
    `
})
