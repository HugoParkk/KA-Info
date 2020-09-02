var socket = io() //socket.io를 불러오는 부분 

//구글 지도 api를 각월마다 다르게 하기위해 각월마다 함수를 만드는 부분 
function init() {
    var Y_point = 36.613766;              //Y좌표
    var X_point = 127.805476;             //X좌표
    var markerTitle = "기본 지도 창";     //정보
    var contentString = `<div id="mapStr"><h2>기본 지도 창</h2><p>기본 지도 창<br> 기본 지도 창 입니다</p></div>`;    //내용

    var zoomLevel = 7;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);

    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init1() {
    var Y_point = 37.720402;              //Y좌표
    var X_point = 126.413825;             //X좌표
    var markerTitle = "강화도 빙어축제";     //정보
    var contentString = `<div id="mapStr"><h2>강화도 빙어축제</h2><p>강화도 빙어축제<br> 강화도 빙어축제입니다</p></div>`;    //내용

    var zoomLevel = 10;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init2() {
    var Y_point = 37.176662;              //Y좌표
    var X_point = 127.441972;             //X좌표
    var markerTitle = "민주화운동기념공원";     //정보
    var contentString = `<div id="mapStr"><h2>민주화운동기념공원</h2><p>민주화운동기념공원<br> 민주화운동기념일에 관련된 기념공원입니다</p></div>`;    //내용

    var zoomLevel = 16;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init3() {
    var Y_point = 37.574122;              //Y좌표
    var X_point = 126.979864;             //X좌표
    var markerTitle = "서울지방국세청";     //정보
    var contentString = `<div id="mapStr"><h2>서울지방국세청</h2><p>서울지방국세청<br> 서울지방국세청입니다</p></div>`;    //내용

    var zoomLevel = 19;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init4() {
    var Y_point = 37.438411;              //Y좌표
    var X_point = 127.005738;             //X좌표
    var markerTitle = "국립과천과학관";     //정보
    var contentString = `<div id="mapStr"><h2>국립과천과학관</h2><p>국립과천과학관<br> 국립과천과학관입니다</p></div>`;    //내용

    var zoomLevel = 16;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init5() {
    var Y_point = 37.434168;              //Y좌표
    var X_point = 127.020116;             //X좌표
    var markerTitle = "서울랜드";     //정보
    var contentString = `<div id="mapStr"><h2>서울랜드</h2><p>서울랜드<br> 서울랜드입니다</p></div>`;    //내용

    var zoomLevel = 15;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init6() {
    var Y_point = 35.110214;              //Y좌표
    var X_point = 129.028030;             //X좌표
    var markerTitle = "부산민주공원";     //정보
    var contentString = `<div id="mapStr"><h2>부산민주공원</h2><p>부산민주공원<br> 6.10민주항쟁기념일을 기리는 부산민주공원입니다</p></div>`;    //내용

    var zoomLevel = 17;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init7() {
    var Y_point = 37.438411;              //Y좌표
    var X_point = 127.005738;             //X좌표
    var markerTitle = "국립과천과학관";     //정보
    var contentString = `<div id="mapStr"><h2>국립과천과학관</h2><p>국립과천과학관<br> 국립과천과학관입니다</p></div>`;    //내용

    var zoomLevel = 16;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init8() {
    var Y_point = 37.294419;              //Y좌표
    var X_point = 127.202663;             //X좌표
    var markerTitle = "에버랜드 썸머워터펀";     //정보
    var contentString = `<div id="mapStr"><h2>에버랜드 썸머워터펀</h2><p>에버랜드 썸머워터펀<br> 에버랜드 썸머워터펀입니다</p></div>`;    //내용

    var zoomLevel = 6;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init9() {
    var Y_point = 35.201010;              //Y좌표
    var X_point = 126.549841;             //X좌표
    var markerTitle = "영광 불갑산상사화축제";     //정보
    var contentString = `<div id="mapStr"><h2>영광 불갑산상사화축제</h2><p>영광 불갑산상사화축제<br> 영광 불갑산상사화축제입니다</p></div>`;    //내용

    var zoomLevel = 6;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init10() {
    var Y_point = 37.536802;              //Y좌표
    var X_point = 126.977097;             //X좌표
    var markerTitle = "전쟁기념관";     //정보
    var contentString = `<div id="mapStr"><h2>전쟁기념관</h2><p>전쟁기념관<br> 국군의날을 기념하는 전쟁기념관입니다</p></div>`;    //내용

    var zoomLevel = 16;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init11() {
    var Y_point = 35.140727;              //Y좌표
    var X_point = 126.865182;             //X좌표
    var markerTitle = "광주학생독립운동기념관";     //정보
    var contentString = `<div id="mapStr"><h2>광주학생독립운동기념관</h2><p>광주학생독립운동기념관<br> 광주학생독립운동을 기념하는 기념관입니다</p></div>`;    //내용

    var zoomLevel = 16;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

}
function init12() {
    var Y_point = 36.421242;              //Y좌표
    var X_point = 127.374828;             //X좌표
    var markerTitle = "한국원자력연구원";     //정보
    var contentString = `<div id="mapStr"><h2>한국원자력연구원</h2><p>한국원자력원구원<br> 한국원자력연구원입니다</p></div>`;    //내용

    var zoomLevel = 14;//확대level

    var markerMaxWidth = 350;                 //말풍선


    var ll = new google.maps.LatLng(Y_point, X_point);
    var mOptions = {
        zoom: zoomLevel, center: ll, mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mOptions);

    var marker = new google.maps.Marker({
        position: ll, map: map, title: markerTitle
    });

    var infow = new google.maps.InfoWindow({
        content: contentString, maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () { infow.open(map, marker) });

} //구글 지도 부분 끝

init()  //기본 지도 함수 호출

var datefuc = //현재 연도와 날짜를 구하는 함수
    function () {
        var date = new Date()

        var searchYear = date.getFullYear()

        var searchMonth = date.getMonth() + 1
        searchMonth = (searchMonth < 10) ? `0${searchMonth}` : searchMonth

        socket.emit('pushSearch', { //socket으로 날짜 데이터를 보냄
            searchYear,
            searchMonth
        })
    }


var searchfuc = //검색창에 넣은걸 날짜로 변환하여 검색하는 함수
    function () {
        var m_search = $("#searchbox").val();
        var searchAnswer = m_search + ""
        var searchYear = searchAnswer.substring(0, 4)
        var searchMonth = searchAnswer.substring(4, 6)


        if (searchAnswer == "") {
            alert("검색어를 입력하십시오.")
        } else {
            socket.emit('pushSearch', {
                searchYear,
                searchMonth
            })




        }
    }

socket.on('apiSuccess', function (data) { //검색창에 넣은 값을 socket으로 보냄

    console.log(data) //받은 데이터를 콘솔에 표시

    var api_data1 = data[0].items.item

    if (api_data1 == undefined) {
        $("#contents1").html(``)
        alert(`입력하신 년도와 월에는 기념일이 없습니다.`);
        $("#contents1").append(`<li id="AnnInfo">입력하신 년도와 월에는 기념일이 없습니다.</li>`)
    }
    if (api_data1.length != undefined) {

        $("#contents1").html(``)
        for (var i = 0; i < api_data1.length; i++) {
            var htmlDate1 = api_data1[i].locdate + ""
            htmlDate1 = htmlDate1.substring(6, 8)
            if (api_data1 == "") {
                $("#contents1").append(`<li id="AnnInfo">${i + 1}. ${JSON.parse(data[1])}년 ${data[2]}월에는 기념일이 없습니다.</li>`)
            } else {
                $("#contents1").append(`<li id="AnnInfo" class="AnnInfo${i}">${data[1]}년 ${data[2]}월에는 ${htmlDate1}일에 ${data[0].items.item[i].dateName}이 있습니다.</li>`)
                if (data[2] == "01") {
                    init1()
                } else if (data[2] == "02") {
                    init2()
                } else if (data[2] == "03") {
                    init3()
                } else if (data[2] == "04") {
                    init4()
                } else if (data[2] == "05") {
                    init5()
                } else if (data[2] == "06") {
                    init6()
                } else if (data[2] == "07") {
                    init7()
                } else if (data[2] == "08") {
                    init8()
                } else if (data[2] == "09") {
                    init9()
                } else if (data[2] == "10") {
                    init10()
                } else if (data[2] == "11") {
                    init11()
                } else if (data[2] == "12") {
                    init12()
                } else {
                    init()
                }
            }
        }

    } else {
        console.log(data[2])
        $("#contents1").html(``)
        var htmlDate2 = api_data1.locdate + ""
        htmlDate2 = htmlDate2.substring(6, 8)
        if (api_data1 == "") {
            $("#contents1").append(`<li id="AnnInfo">${data[1]}년 ${data[2]}월에는 기념일이 없습니다.</li>`)
        } else {
            $("#contents1").append(`<style>#contents1{padding-top: 20vh;}</style>`)
            $("#contents1").append(`<li id="AnnInfo" class="AnnInfo${i}">${data[1]}년 ${data[2]}월에는 ${htmlDate2}일에 ${data[0].items.item.dateName}이 있습니다.</li>`)
            if (data[2] == "01") {
                init1()
            } else if (data[2] == "02") {
                init2()
            } else if (data[2] == "03") {
                init3()
            } else if (data[2] == "04") {
                init4()
            } else if (data[2] == "05") {
                init5()
            } else if (data[2] == "06") {
                init6()
            } else if (data[2] == "07") {
                init7()
            } else if (data[2] == "08") {
                init8()
            } else if (data[2] == "09") {
                init9()
            } else if (data[2] == "10") {
                init10()
            } else if (data[2] == "11") {
                init11()
            } else if (data[2] == "12") {
                init12()
            } else {
                init()
            }

        }
    }
})

init()

$("#button1").click(function () {
    window.open("https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EA%B8%B0%EB%85%90%EC%9D%BC");
    // window.location.href="https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EA%B8%B0%EB%85%90%EC%9D%BC";

})

$("#button2").click(datefuc);

$("#searchbox").keydown(function (key) {
    if (key.keyCode == 13) {
        searchfuc()
    }
});

$("#button3").click(searchfuc);
