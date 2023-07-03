fetch('/member/editproffile').then((response) => response).then((data) => alert(data.url.match(/\autologin\/.+/g)));
