header = () =>{
	var body,header;
	body = document.getElementById('main');
	header = document.createElement('header');
	
	body.appendChild(header);
	header.innerHTML+='<div class="container"><div class="row"></div></div>';
	
	var header_jason = [{logo:'image/logo.png',},{phone01:'8392730237',phone02:'8392730237',email:'cardealer@gmail.com',add:' Waraseoni'}]
	document.querySelector('header>.container>.row').innerHTML +=`
	   <div class="col-md-4">
	        <div class="my_logo">
			      <img src="${header_jason[0].logo}" class="logo">
			</div>
	   </div>
	   <!--//col-md-4-->
	    <div class="menu" onclick="my_menu()">
	        <div class="first"></div> 
	        <div class="sec"></div>
	           
	     </div>
	    <div class="col-md-6">
	        <div class="widgets">
			      <ul class="navbar-nav nav">
				       <li><a href="#">${header_jason[1].phone01}</a></li>
					   <li><a href="#">${header_jason[1].phone02}</a></li>
					   <li><a href="#">${header_jason[1].email}</a></li>
					   <li><a href="#">${header_jason[1].add}</a></li>
				  </ul>
			</div>
	   </div>
	   <!--//col-md-6-->
	  
	`;
	
}
header();