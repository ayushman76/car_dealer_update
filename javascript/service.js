service = () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
    article.innerHTML += '<div class="container"><div class="row"><h2>What We do </h2></div></div>';

    var service_jason = [{
        img: 'image/car_repairing.png',
        text: 'Car Repairing',
    }, {
        img: 'image/car_dealer.png',
        text: 'Car Dealer',
    }, {
        img: 'image/bike_repairing.png',
        text: 'Bike Repairing',
    }, {
        img: 'image/truck_transports.png',
        text: 'Transport'
    }]
    service_jason.forEach(i => {
        document.querySelector('article>.container>.row').innerHTML += `
            <div class="col-md-3">
                <div class="my_service text-center">
                    <img src="${i.img}">
                    <p>${i.text}</p>
                </div>
            </div>
        `;
    });



}
service();