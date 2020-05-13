(function () {

    // react-native에 통신을 요청한다.   
     $('#locationSend').on('click', function() {

        // "getMovieList"는 react-native에서 받는 메서드 이름입니다.
        window.webViewBridge.locationSend('sendLocation', function(res) {
            $('#result').html(JSON.stringify(res))
        }, function(err) {
            console.error(err)
        })
    })

}());
