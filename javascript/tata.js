tata_car = () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
    article.setAttribute('class', 'article03');
	article.setAttribute('id','tata');
    article.innerHTML += '<div class="container"><div class="row"><h4>Tata Cars For Sell</h4></div></div>';
    var my_product = [{
        img: 'image/ranould_duster.png',
        Car_name: ' Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/suzuki_car.png',
        Car_name: 'Swift Car',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486108xwawg.png',
        Car_name: 'Honda Civic',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/Blue.png',
        Car_name: 'Tata Tiago',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }]
    my_product.forEach( i => {
        document.querySelector('.article03>.container>.row').innerHTML += `
           <div class="col-md-3">
               <div class="my_products">
                    <img src="${i.img}">
                    <p><b>Name</b> : ${i.Car_name}</p>
                    <p><b>Modal</b> : ${i.Car_modal}</p>
                    <p class="price"><b>Price</b> : ${i.Car_price}</p>
                    <span class="more">${i.more}</span>
               </div>
           </div>
        `;
    });


}
tata_car();