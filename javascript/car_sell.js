car = () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
    article.setAttribute('class', 'article01');
    article.innerHTML += '<div class="container"><div class="row"><h3>Featured Cars For Sell</h3></div></div>';
    var my_product = [{
        img: 'image/ranould_duster.png',
        Car_name: ' Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+',
		eve:" my_click(event, 'renault_car') ",

    }, {
        img: 'image/suzuki_car.png',
        Car_name: 'Swift Car',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+',
		eve:" my_click(event, 'suzuki_car')",

    }, {
        img: 'image/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486108xwawg.png',
        Car_name: 'Honda Civic',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+',
		eve:" my_click(event, 'honda_car')",

    }, {
        img: 'image/Blue.png',
        Car_name: 'Tata Tiago',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+',
	    eve:" my_click(event, 'tata_car')",

    }]
    my_product.forEach( i => {
        document.querySelector('.article01>.container>.row').innerHTML += `
           <div class="col-md-3">
               <div class="my_products ">
                    <img src="${i.img}">
                    <p><b>Name</b> : ${i.Car_name}</p>
                    <p><b>Modal</b> : ${i.Car_modal}</p>
                    <p class="price"><b>Price</b> : ${i.Car_price}</p>
                    <span class="more tablinks" onclick="${i.eve}">${i.more}</span>
               </div>
           </div>
        `;
    });


}
car();

function my_click(evt, color_name) {
			
		  var i, tabcontent, tablinks;
		  tabcontent = document.getElementsByClassName("tabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		  }
		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		 }
		  document.getElementById(color_name).style.display = "block";
		  document.getElementById(color_name).style.transform = " rotate3d(1, 1, 1, 360deg)";
			  evt.currentTarget.className += " active";
     }
	 
	   function myclose() {
		 
            var btn = document.getElementsByClassName('mycar_data');

            for (var i = 0; i < btn.length; i++) {
                btn[i].style.display = "none";

            }

        }
