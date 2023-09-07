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
// async function loadJSON() {
//     try {
//       const response = await fetch('data.json');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error al cargar el archivo JSON:', error);
//       throw error;
//     }
//   }
  // async function main() {
  //   try {
  //     const datos = await loadJSON();
  //     datos.forEach(element => {
  //       function descuento(){
  //         const precio=(element.price-(element.price*element.discount)/100).toFixed(2);
  //         return precio;
  //       }
  //         if(element.discount==0){
  //             const newDiv = document.createElement('div');
  //             newDiv.className = 'container'
  //             const fDiv = document.querySelector('.featured');
  //             fDiv.appendChild(newDiv);
  //             newDiv.innerHTML = `
  //             <div class="info">
  //             <img id="imgf" src="${element.img}" alt="">  
  //             <h3>${element.name}</h3>
  //             <p>${element.id}</p>
  //         </div>
  //         <div class="bottom">
  //             <button class="addCart"></button>
  //             <div class="prices">
  //             <p class="listPrice"></p>
  //             <p class="price">${element.price}</p>
  //             </div>
  //         </div>
  //             `}
  //         else if(element.discount != 0){
  //             const precio = descuento();
  //             const newDiv = document.createElement('div');
  //             newDiv.className = 'container-onsale'
  //             const fDiv = document.querySelector('.featured-onsale');
  //             fDiv.appendChild(newDiv);
  //             newDiv.innerHTML = `
  //             <div class="info-onsale">
  //               <img src="${element.img}" alt="${element.name}">
  //               <svg xmlns="http://www.w3.org/2000/svg" width="101" height="102" viewBox="0 0 101 102" fill="none">
  //           <path d="M43.8356 53.4503L47.715 53.524L45.9068 46.6443L43.8356 53.4503Z" fill="#941B0C"/>
  //           <path d="M95.4068 46.6657L84.004 34.8229C81.5008 32.2231 76.7125 30.1323 73.1037 30.0637L25.4015 29.1513C23.3627 29.1119 21.4271 29.8729 19.9502 31.2939C18.4732 32.7149 17.6388 34.6196 17.5998 36.6572L17.0664 64.5157C17.0274 66.5533 17.7887 68.4889 19.2098 69.9649C20.6314 71.4413 22.5368 72.2754 24.5756 72.3147L72.2778 73.2264C75.8866 73.2957 80.7514 71.3895 83.3522 68.8873L95.2005 57.4882C98.242 54.5613 98.3345 49.7064 95.4068 46.6657ZM82.0391 53.9897C81.4913 53.9789 80.959 53.7464 80.5789 53.3516C80.1984 52.9564 79.9871 52.4166 79.9976 51.8694C80.0069 51.3211 80.2399 50.7894 80.6352 50.409C81.0301 50.0291 81.5698 49.8175 82.1187 49.8287C82.666 49.8392 83.1973 50.0713 83.5778 50.4664C83.9579 50.8612 84.1703 51.4015 84.1602 51.949C84.1493 52.4965 83.9176 53.0279 83.5226 53.4079C83.1273 53.7882 82.5864 54.0002 82.0391 53.9897Z" fill="#941B0C"/>
  //           <text x="25" y="58" class="forSaleText">${element.discount}%</text>
  //           </svg>
  //               <h3>${element.name}</h3>
  //               <p>${element.id}</p>
  //             </div>
  //             <div class="bottom-onsale">
  //               <button class="addCart-onsale"></button>
  //               <div class="prices-onsale">
  //                 <p class="listPrice">$${element.price}</p>
  //                 <p class="price">$${precio}</p>
  //               </div>
  //             </div>
  //             `
  //       }
  //     });;
  //   } catch (error) {
  //     console.error('Error en la función principal:', error);
  //   }
  // }  

/*async function getData(){;
  const apiResponse = await fetch("https://64f659ae2b07270f705e6753.mockapi.io/api/products")
  const jsonData = await apiResponse.json();
  console.log(apiResponse.status);

  return jsonData;
}
async function main() {
  try {
    const datos = await getData();
    datos.forEach(element => {
      function descuento(element){
        const precio = element.price;
        const precioPrevio = element.previousPrice;
        const descuento=((precio/precioPrevio)*100);
        return descuento;
      }});} catch (error) {
        console.error("Error obteniendo Data", error)
      
*/
/*        if(!!element.onSale && element.featured){
            const discount = descuento(element);
            const newDiv = document.createElement('div');
            newDiv.className = 'container'
            const fDiv = document.querySelector('.featured');
            fDiv.appendChild(newDiv);
            newDiv.innerHTML = `
            <div class="info">
            <img id="imgf" src="${element.image}" alt="">  
            <h3>${element.title}</h3>
            <p>${element.id}</p>
        </div>
        <div class="bottom">
            <button class="addCart"></button>
            <div class="prices">
            <p class="listPrice"></p>
            <p class="price">${element.price}</p>
            </div>
        </div>
            `
        }
        else if(element.onSale && !!element.featured){
            const precio = descuento();
            const newDiv = document.createElement('div');
            newDiv.className = 'container-onsale'
            const fDiv = document.querySelector('.featured-onsale');
            fDiv.appendChild(newDiv);
            newDiv.innerHTML = `
            <div class="info-onsale">
              <img src="${element.image}" alt="${element.title}">
              <svg xmlns="http://www.w3.org/2000/svg" width="101" height="102" viewBox="0 0 101 102" fill="none">
          <path d="M43.8356 53.4503L47.715 53.524L45.9068 46.6443L43.8356 53.4503Z" fill="#941B0C"/>
          <path d="M95.4068 46.6657L84.004 34.8229C81.5008 32.2231 76.7125 30.1323 73.1037 30.0637L25.4015 29.1513C23.3627 29.1119 21.4271 29.8729 19.9502 31.2939C18.4732 32.7149 17.6388 34.6196 17.5998 36.6572L17.0664 64.5157C17.0274 66.5533 17.7887 68.4889 19.2098 69.9649C20.6314 71.4413 22.5368 72.2754 24.5756 72.3147L72.2778 73.2264C75.8866 73.2957 80.7514 71.3895 83.3522 68.8873L95.2005 57.4882C98.242 54.5613 98.3345 49.7064 95.4068 46.6657ZM82.0391 53.9897C81.4913 53.9789 80.959 53.7464 80.5789 53.3516C80.1984 52.9564 79.9871 52.4166 79.9976 51.8694C80.0069 51.3211 80.2399 50.7894 80.6352 50.409C81.0301 50.0291 81.5698 49.8175 82.1187 49.8287C82.666 49.8392 83.1973 50.0713 83.5778 50.4664C83.9579 50.8612 84.1703 51.4015 84.1602 51.949C84.1493 52.4965 83.9176 53.0279 83.5226 53.4079C83.1273 53.7882 82.5864 54.0002 82.0391 53.9897Z" fill="#941B0C"/>
          <text x="25" y="58" class="forSaleText">${discount}%</text>
          </svg>
              <h3>${element.title}</h3>
              <p>${element.id}</p>
            </div>
            <div class="bottom-onsale">
              <button class="addCart-onsale"></button>
              <div class="prices-onsale">
                <p class="listPrice">$${element.previousPrice}</p>
                <p class="price">$${element.price}</p>
              </div>
            </div>
            `
        }
    });;
  } catch (error) {
    console.error('Error en la función principal:', error);
  }
}
*/
function descuento(object){
  const precio = object.price;
  const precioPrevio = object.previousPrice;
  const descuento=Math.ceil(100-((precioPrevio/precio)*100));
    return descuento;
}

function createFeaturedProduct(object){
  const discount = descuento(object);
  const newDiv = document.createElement('div');
  newDiv.className = 'container'
  const fDiv = document.querySelector('.featured');
  fDiv.appendChild(newDiv);
  newDiv.innerHTML = `
    <div class="info">
      <img id="imgf" src="${object.image}" alt="">  
      <h3>${object.title}</h3>
      <p>${object.id}</p>
    </div>
    <div class="bottom">
        <button class="addCart"></button>
        <div class="prices">
        <p class="listPrice"></p>
        <p class="price">${object.price}</p>
        </div>
    </div>`
}
function createOnSaleProduct(object){
  const discount = descuento(object);
  const newDiv = document.createElement('div');
  newDiv.className = 'container-onsale'
  const fDiv = document.querySelector('.featured-onsale');
  fDiv.appendChild(newDiv);
  newDiv.innerHTML = `
    <div class="info-onsale">
      <img src="${object.image}" alt="${object.title}">
      <svg xmlns="http://www.w3.org/2000/svg" width="101" height="102" viewBox="0 0 101 102" fill="none">
        <path d="M43.8356 53.4503L47.715 53.524L45.9068 46.6443L43.8356 53.4503Z" fill="#941B0C"/>
        <path d="M95.4068 46.6657L84.004 34.8229C81.5008 32.2231 76.7125 30.1323 73.1037 30.0637L25.4015 29.1513C23.3627 29.1119 21.4271 29.8729 19.9502 31.2939C18.4732 32.7149 17.6388 34.6196 17.5998 36.6572L17.0664 64.5157C17.0274 66.5533 17.7887 68.4889 19.2098 69.9649C20.6314 71.4413 22.5368 72.2754 24.5756 72.3147L72.2778 73.2264C75.8866 73.2957 80.7514 71.3895 83.3522 68.8873L95.2005 57.4882C98.242 54.5613 98.3345 49.7064 95.4068 46.6657ZM82.0391 53.9897C81.4913 53.9789 80.959 53.7464 80.5789 53.3516C80.1984 52.9564 79.9871 52.4166 79.9976 51.8694C80.0069 51.3211 80.2399 50.7894 80.6352 50.409C81.0301 50.0291 81.5698 49.8175 82.1187 49.8287C82.666 49.8392 83.1973 50.0713 83.5778 50.4664C83.9579 50.8612 84.1703 51.4015 84.1602 51.949C84.1493 52.4965 83.9176 53.0279 83.5226 53.4079C83.1273 53.7882 82.5864 54.0002 82.0391 53.9897Z" fill="#941B0C"/>
        <text x="25" y="58" class="forSaleText">${discount}%</text>
      </svg>
        <h3>${object.title}</h3>
        <p>${object.id}</p>
    </div>
    <div class="bottom-onsale">
      <button class="addCart-onsale"></button>
      <div class="prices-onsale">
        <p class="listPrice">$${object.price}</p>
        <p class="price">$${object.previousPrice}</p>
      </div>
    </div>`
}
async function getData(){;
  const apiResponse = await fetch("https://64f659ae2b07270f705e6753.mockapi.io/api/products")
  const jsonData = await apiResponse.json();
  console.log(apiResponse.status);

  return jsonData;
}
async function main() {
  try {
    const datos = await getData();
    datos.forEach(element => {
      if(element.onSale!=true && element.featured){
        createFeaturedProduct(element);
      }
      else if(element.featured!=true && element.onSale){
        createOnSaleProduct(element);
      }
    });
  } catch (error) {
    console.error("Error obteniendo Data", error)  
  }}
main();