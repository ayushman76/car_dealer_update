  var footer = function() {

            //Get Body Tag
            body = document.getElementById('body'); //Golbel Variable
            //Create Header Tag
            var footer = document.createElement('footer');
            body.appendChild(footer);
            footer.innerHTML += '<div class="container"><div class="row"></div></div>';
            //Create Jason API For footer
            var footer_jason = [{
                menu00: 'Cars',
                menu001: 'Tata Cars',
                menu002: 'Renault Duster',
                menu003: 'Honda Cars',
                menu004: 'Suzuki Cars',
                menu004: 'Used Cars'
            }, {
                menu01: 'Home',
                menu02: 'About',
                menu03: 'Service',
                menu04: 'Cars',
                menu05: 'category',
                menu06: 'contact Us'

            }, {
                menu07: '<i class="fa fa-facebook-square" style="font-size:24px"></i>',
                menu08: '<i class="fa fa-instagram" style="font-size:24px"></i>',
                menu09: '<i class="fa fa-whatsapp" style="font-size:24px"></i>',
                menu10: '<i class="fa fa-phone" style="font-size:24px"></i>&nbsp;&nbsp; 836286283',
                menu11: '<i class="fa fa-envelope" style="font-size:24px"></i>&nbsp;&nbsp; indiaflower@gmail.com',
                menu12: 'Bilaspur'

            }];

            document.querySelector('footer>.container>.row').innerHTML += `
			      <div class="col-md-4">
				      <div class="my_footer">
					      <ul class="nav">
						      <li><a href="#">${footer_jason[0].menu00}</a></li>
							   <li><a href="#">${footer_jason[0].menu001}</a></li>
							    <li><a href="#">${footer_jason[0].menu002}</a></li> 
								<li><a href="#">${footer_jason[0].menu003}</a></li> 
								<li><a href="#">${footer_jason[0].menu004}</a></li>
						  </ul>
					  </div>
				  </div>
				  <div class="col-md-4">
				      <div class="my_footer">
					       <ul class="nav">
							<li><a href="#">${footer_jason[1].menu01}</a></li>
							<li><a href="#">${footer_jason[1].menu02}</a></li>
							<li><a href="#">${footer_jason[1].menu03}</a></li> 
							<li><a href="#">${footer_jason[1].menu03}</a></li> 
							<li><a href="#">${footer_jason[1].menu04}</a></li>
						  </ul>
					  </div>
				  </div>
				  <div class="col-md-4">
				      <div class="my_footer">
					       <ul class="nav navbar-nav">
								<li><a href="#">${footer_jason[2].menu07}</a></li>
								<li><a href="#">${footer_jason[2].menu08}</a></li>
								<li><a href="#">${footer_jason[2].menu09}</a></li> 
							</ul>
							
							
						<div class="col-md-12">
						 <ul class="nav">
							
							   <li><a href="#">${footer_jason[2].menu10}</a></li> 
							    <li><a href="#">${footer_jason[2].menu11}</a></li>
							</ul>
						</div>
					  </div>
				  </div>
				  
			   `;


        }
        footer();