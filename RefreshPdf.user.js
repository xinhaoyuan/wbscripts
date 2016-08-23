// ==UserScript==
// @name        RefreshPdf
// @namespace   xinhaoyuan@gmail.com
// @description Refresh pdf in current view
// @include     *.pdf*
// @version     1
// @grant       none
// ==/UserScript==
(function () {
  document.addEventListener('keydown', function (e) {
    // pressed ctrl-r
    if (e.keyCode == 82 && e.ctrlKey) {
      var curViewLink = document.getElementById('viewBookmark');
      window.location = curViewLink.href;
      window.location.reload(curViewLink.href);
    }
  }, false);
}) ();
