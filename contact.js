(function () {
  var u = 'kadaouiwissale32';
  var d = 'gmail' + '.' + 'com';
  var email = u + '@' + d;
  var link = document.getElementById('contact-email-link');
  var display = document.getElementById('contact-email-display');
  if (link) link.href = 'mailto:' + email;
  if (display) display.textContent = email;
}());
