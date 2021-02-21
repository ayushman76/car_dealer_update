(function(){
	var body,nav;
	body = document.getElementById('main');
	nav = document.createElement('nav');
	body.appendChild(nav);
    nav.innerHTML+='<div class="container"><div class="row"><div class="navigation"><ul class="navbar-nav nav"></ul></div></div></div>';
    var nav_jason = [{menu01:'Home',menu02:'Cars',menu03:'Bikes',menu04:'Truck',menu05:'About',menu06:'Contact  Us'},{link01:'#index',link02:'#car',link03:'#bike',link04:'#truck',link05:'#about',link06:'#contact'}];
	
		document.querySelector('nav>.container>.row>.navigation>ul').innerHTML+=`
	   <li><a href="${nav_jason[1].link01}">${nav_jason[0].menu01}</a></li>
	   <li><a href="${nav_jason[1].link02}">${nav_jason[0].menu02}</a></li>
	   <li><a href="${nav_jason[1].link03}">${nav_jason[0].menu03}</a></li>
	   <li><a href="${nav_jason[1].link04}">${nav_jason[0].menu04}</a></li>
	   <li><a href="${nav_jason[1].link05}">${nav_jason[0].menu05}</a></li>
	   <li><a href="${nav_jason[1].link06}">${nav_jason[0].menu06}</a></li>
	   `;
})();