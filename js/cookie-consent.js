var adamsCookieConsent = {
  getCookie: function(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    return parts.length != 2 ?
      undefined : parts.pop().split(';').shift();
  },
  
  setCookie: function(name, value, expiryDays, domain, path) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + (expiryDays || 365));
  
    var cookie = [
      name + '=' + value,
      'expires=' + exdate.toUTCString(),
      'path=' + (path || '/')
    ];
  
    if (domain) {
      cookie.push('domain=' + domain);
    }
    document.cookie = cookie.join(';');
  }
};

(function() {
  document.addEventListener("DOMContentLoaded", function() {
    if (adamsCookieConsent.getCookie('taltosCookieConsent')) {
      document.querySelector('.cookie-consent').style.display = 'none';
    }
    document.querySelector('.cookie-consent-ok').addEventListener("click", function () {
      document.querySelector('.cookie-consent').style.display = 'none';
      adamsCookieConsent.setCookie('taltosCookieConsent', 'accepted', 365, 'taltosjogsi.hu', '/');
    });
  });
})();