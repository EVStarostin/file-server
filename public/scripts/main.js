function log(html) {
    document.getElementById('log').innerHTML = html;
}

function upload(formData) {
    var xhr = new XMLHttpRequest();
  
    // обработчик для закачки
    xhr.upload.onprogress = function(event) {
        var progress = Math.round(event.loaded * 100 / event.total);
        log('Progress: ' + progress + '%');
    }
  
    // обработчики успеха и ошибки
    // если status == 200, то это успех, иначе ошибка
    xhr.onload = xhr.onerror = function() {
        if (this.status == 200) {
            log("Success");
        } else {
            log("Error " + this.status);
        }
    };
  
    xhr.open("POST", "upload", true);
    xhr.send(formData);
}

document.forms.upload.onsubmit = function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    upload(formData);
}