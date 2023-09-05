/*
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
})*/
async function loadJSON() {
    try {
      const response = await fetch('archivo.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
      throw error;
    }
  }
  
  async function main() {
    try {
      const datos = await loadJSON();
      datos.forEach(element => {
        if(element.discount==0){
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
            `}
        else if(discount!=0){
            const newDiv = document.createElement('div');
            newDiv.className = 'container-onsale'
            const fDiv = document.querySelector('.featured');
            fDiv.appendChild(newDiv);
            newDiv.innerHTML = `
            <div class="info-onsale">
            <img id="imgf" src="${element.productImg}" alt="">  
            <h3>${element.productName}</h3>
            <p>${element.productId}</p>
          </div>
          <div class="bottom-onsale">
            <button class="addCart"></button>
            <div class="prices-onsale">
              <p class="listPrice"></p>
              <p class="price">${element.productPrice}</p>
            </div>
          </div>
            `
        }
      });;
    } catch (error) {
      console.error('Error en la función principal:', error);
    }
  }
  
  main();