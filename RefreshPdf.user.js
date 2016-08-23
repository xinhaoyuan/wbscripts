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
    // pressed alt+g
    if (e.keyCode == 82 && !e.shiftKey && e.ctrlKey && e.altKey && !e.metaKey) {
      var curViewLink = document.getElementById('viewBookmark');
      window.location = curViewLink.href;
      window.location.reload(curViewLink.href);
    }
  }, false);
}) ();
