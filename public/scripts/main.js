var fieldset = document.querySelector('.upload__fieldset');
var file = document.querySelector('.upload__file');

function log(html) {
    document.getElementById('log').innerHTML = html;
}

function drawGradient(percent) { 
    fieldset.style.background = 'linear-gradient(to right, green, lightgreen ' + percent + '%, #fff ' + percent + '%)';
}

function upload(formData) {
    var xhr = new XMLHttpRequest();
  
    // обработчик для закачки
    xhr.upload.onprogress = function(event) {
        var progress = Math.round(event.loaded * 100 / event.total);
        log('Завершено: ' + progress + '%');
        drawGradient(progress);
    }
  
    // обработчики успеха и ошибки
    // если status == 200, то это успех, иначе ошибка
    xhr.onload = xhr.onerror = function() {
        if (this.status == 200) {
            log('Выполнено');
        } else {
            log('Ошибка ' + this.status);
        }
    };
  
    xhr.open('POST', 'upload', true);
    xhr.send(formData);

    file.addEventListener('click', function(e) {
        log('');
        fieldset.style.background = '';
    });
}

document.forms.upload.onsubmit = function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    upload(formData);
}