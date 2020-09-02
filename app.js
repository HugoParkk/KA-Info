const express = require('express');//express 모듈 추가
const request = require('request');//request 모듈 추가



const app = express();
const port = 8080;
const path = require('path');
const http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use('/css', express.static('./css'));
app.use('/js', express.static('./js'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'))
});

http.listen(8080, function () {
    console.log('8080번 포트에서 웹서버 실행중');
});

io.on('connection', function (socket) {
    socket.on('pushSearch', function (reqdata) {
        
        var url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getAnniversaryInfo';
        var queryParams = '?' + encodeURIComponent('ServiceKey') + '=sd5MjLmHMkxewkmi6ycojnifRbgsYSBMJAMog7%2FmzHNQmQ0bf2jM5uAFwg9Wrm8TUmvCdB2WnWCKHF6D%2BbVCdA%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /* */
        // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(``); /* */
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /* */
        queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(reqdata.searchYear); /* */
        queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(reqdata.searchMonth); /* */
        queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

        request({
            url: url + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            body = JSON.parse(body).response.body
            console.log('-----api Start-----')
            console.log('Status ---', response.statusCode);
            console.log('Headers ---', JSON.stringify(response.headers));
            console.log('Reponse received ---', body);
            console.log('-----api end-----')
            socket.emit('apiSuccess', [body, reqdata.searchYear, reqdata.searchMonth]); //apiSuccess는 이벤트 이름, apiData는 api 결과
        });
    })
})



/* NodeJs 샘플 코드 */

// var url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getAnniversaryInfo';
// var queryParams = '?' + encodeURIComponent('ServiceKey') + '=sd5MjLmHMkxewkmi6ycojnifRbgsYSBMJAMog7%2FmzHNQmQ0bf2jM5uAFwg9Wrm8TUmvCdB2WnWCKHF6D%2BbVCdA%3D%3D'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /* */
// // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(``); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /* */
// queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2020'); /* */
// queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('05'); /* */
// queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */

// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     console.log('-----api Start-----')
//     console.log('Status ---', response.statusCode);
//     console.log('Headers ---', JSON.stringify(response.headers));
//     console.log('Reponse received ---', body);
//     console.log('-----api end-----')
// });