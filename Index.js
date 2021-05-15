var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var ajax = new XMLHttpRequest();
ajax.open("GET", "https://lamp.ms.wits.ac.za/home/s2127079/index.php", true);
ajax.send();
ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
};