list = () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
    article.setAttribute('class', 'article02');
    article.innerHTML += '<div class="container"><div class="row"></div></div>';
    var my_list = [{
		list01:'<a href="#tata"><img src="image/tata.png"></a>',
		list02:'<a href="#renault"><img src="image/renault.png"></a>',
		list03:'<a href="#honda"><img src="image/honda.png"></a>',
		list04:'<a href="#suzuki"><img src="image/suzuki.png"></a>'
    }]
    my_list .forEach( i => {
        document.querySelector('.article02>.container>.row').innerHTML += `
           <div class="col-md-12">
               <div class="my_list">
                      <ul class="pad-10">
							<li>${my_list[0].list01}</li>
							<li>${my_list[0].list02}</li>
							<li>${my_list[0].list03}</li>
							<li>${my_list[0].list04}</li>
							
					  </ul>
               </div>
           </div>
        `;
    });


}
list();