function toggleContent(section) {
  var aboutContent = document.getElementById('About-info');
  var contactContent = document.getElementById('contact-info');
  var Content = document.getElementById('shoes-info');
  var homecontent = document.getElementById('home-info');
  var commentcontent = document.getElementById('comment-info');
  var watchcontent = document.getElementById('watch-info');
  var perfumecontent = document.getElementById('perfume-info');

  // Hide all content sections
  aboutContent.style.display = 'none';
  contactContent.style.display = 'none';
  Content.style.display = 'none';
  homecontent.style.display = 'none';
  commentcontent.style.display = 'none';
  watchcontent.style.display = 'none';
  perfumecontent.style.display = 'none';

  // Show the selected section
  if (section === 'about') {
    aboutContent.style.display = 'block';
  } else if (section === 'contact') {
    contactContent.style.display = 'block';
  } else if (section === 'shoes') {
    Content.style.display = 'block';
  } else if (section === 'home') {
    homecontent.style.display = 'block';
  } else if (section === 'comment') {
    commentcontent.style.display = 'block';
  } else if (section === 'watch') {
    watchcontent.style.display = 'block';
  } else if (section === 'perfume') {
    perfumecontent.style.display = 'block';
  }
}

function displayContactInfo(contactEmail, phoneNumber, whatsappNumber) {
  var contactDialog = event.target.nextElementSibling;

  // Toggle visibility
  if (contactDialog.style.display === 'none') {
    contactDialog.style.display = 'block';
  } else {
    contactDialog.style.display = 'none';
    return; // Exit the function if hiding the contact information
  }

  contactDialog.innerHTML = ''; // Clear previous content

  var emailLink = document.createElement('a');
  emailLink.href = 'mailto:' + contactEmail;
  emailLink.innerText = 'Email: ' + contactEmail;
  contactDialog.appendChild(emailLink);

  if (phoneNumber) {
    contactDialog.appendChild(document.createElement('br'));
    var phoneSpan = document.createElement('span');
    phoneSpan.innerText = 'Phone: ' + phoneNumber;
    contactDialog.appendChild(phoneSpan);
  }

  if (whatsappNumber) {
    contactDialog.appendChild(document.createElement('br'));
    var whatsappSpan = document.createElement('span');
    whatsappSpan.innerText = 'WhatsApp: ' + whatsappNumber;
    contactDialog.appendChild(whatsappSpan);
  }
}
