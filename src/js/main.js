// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'google server with parameters added'
xhr.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyA1mDALQf2z4NA6-wkj513DJxG7FwozOvQ', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  var subsCount = JSON.parse(xhr.responseText).items[0].statistics;
  //console.log(JSON.parse(xhr.responseText).items[0].statistics); // responseText -- текст ответа.
}

// GET https://www.googleapis.com/youtube/v3/channels