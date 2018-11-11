'use strict';

var HttpClient = function HttpClient() {

	this.get = function (aUrl, aCallback) {

		var anHttpRequest = new XMLHttpRequest();

		anHttpRequest.onreadystatechange = function () {
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
		};

		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	};
};

var client = new HttpClient();

var idChannel = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
var part = 'statistics,brandingSettings';
var nameChannel = document.querySelector('#name-channel');
var descriptionChannel = document.querySelector('#description-channel');
var imageChannel = document.querySelector('#image-channel');
var countChannel = document.querySelector('#count');

var showStat = function showStat() {
	client.get('https://www.googleapis.com/youtube/v3/channels?part=' + part + '&id=&{idChannel}&key=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyA1mDALQf2z4NA6-wkj513DJxG7FwozOvQ',
	// using `` here, not '' 
	function (response) {

		var info = JSONparse(response).items[0];
		console.log(info);
		//console.log(JSON.parse(response).items[0].statistics.subscriberCount);
		nameChannel.innerText = info.brandingSettings.channel.title;
		description.Channel.innerText = info.brandingSettings.channel.description;
		imageChannel.src = info.brandingSettings.image.bannerImageUrl;
		countChannel.innerText = info.statistics.subscriberCount;
	});
};

showStat();

// // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'google server with parameters added'
// xhr.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyA1mDALQf2z4NA6-wkj513DJxG7FwozOvQ', false);

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {

//   // вывести результат
//   var subsCount = JSON.parse(xhr.responseText).items[0].statistics;
//   //console.log(JSON.parse(xhr.responseText).items[0].statistics); // responseText -- текст ответа.

//   document.querySelector('#count').innerText = subsCount;
// }

// // GET https://www.googleapis.com/youtube/v3/channels