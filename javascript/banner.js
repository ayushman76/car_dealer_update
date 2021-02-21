banner = () => {
    var body, section;
    body = document.getElementById('main');
    section = document.createElement('section');
    body.appendChild(section);
    section.innerHTML += '<div class="container"><div class="row"></div></div>';

    var banner_jason = [{
        heading: 'New Way To Find A Used Car',
        call: '3683487384',
		para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    }]

    document.querySelector('section>.container>.row').innerHTML += `
	<div class="col-md-6">
	    <div class="my_content">
	        <h2>${banner_jason[0].heading}</h2>
			<p>${banner_jason[0].para}</p>
	         <a href="tel:${banner_jason[0].call}" class="my_btn">Call Your Car Dealer</a>
           </div>
	</div>

	`;
}
banner();