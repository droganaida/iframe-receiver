
$(document).ready(function(){

    // ждем загрузки фрейма с сателлита
    $('#moonframe').on('load', function(){
        // отсылаем сообщение на сателлит
        // this.contentWindow.postMessage('hello', 'http://localhost:3001');
        this.contentWindow.postMessage({task: 'dataheight'}, 'http://localhost:3001');
    });

    // вешаем обработчик на сообщение от сателлита
    window.addEventListener('message', function (e) {

        // проверяем точно ли это наш сателлит шлет привет
        if ( e.origin === 'http://localhost:3001' ) {

            var task = e.data['task'];

            // проверяем что за задачу поставил сателлит
            switch ( task ) {
                case 'dataheight' :
                    console.log('Я Земля. Сообщение с Луны: ' + JSON.stringify(e.data));

                    // получаем высоту фрейма на сателлите и задаем ее контенту на базе
                    var frameHeight = e.data['val'];
                    $('#moonframe').height(frameHeight);
                    break;
                default:
                    alert(e.data['val']);
                    break;
            }
        }
    }, false);

});