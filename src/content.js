!function () {
  var _0x5175ca = function () {
    var _0x22c30b = true;
    return function (_0x7102bf, _0x5c5a46) {
      var _0x1ecc36 = _0x22c30b ? function () {
        if (_0x5c5a46) {
          var _0x46c328 = _0x5c5a46.apply(_0x7102bf, arguments);
          _0x5c5a46 = null;
          return _0x46c328;
        }
      } : function () {};
      _0x22c30b = false;
      return _0x1ecc36;
    };
  }();
  var _0xe40810 = _0x5175ca(this, function () {
    var _0x32baef = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    var _0x391fc2 = _0x32baef.console = _0x32baef.console || {};
    var _0x1f7b88 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0x3a7110 = 0x0; _0x3a7110 < _0x1f7b88.length; _0x3a7110++) {
      var _0x389d58 = _0x5175ca.constructor.prototype.bind(_0x5175ca);
      var _0x898ac8 = _0x1f7b88[_0x3a7110];
      var _0x28841e = _0x391fc2[_0x898ac8] || _0x389d58;
      _0x389d58.__proto__ = _0x5175ca.bind(_0x5175ca);
      _0x389d58.toString = _0x28841e.toString.bind(_0x28841e);
      _0x391fc2[_0x898ac8] = _0x389d58;
    }
  });
  _0xe40810();
  'use strict';
  const _0x3e59ea = window.location.search;
  const _0x2fad01 = new URLSearchParams(_0x3e59ea);
  document.querySelector("body").setAttribute("data-extension", "active");
  if (_0x2fad01.get("access") && _0x2fad01.get("access") !== '' && _0x2fad01.get("request") && _0x2fad01.get("request") !== '') {
    let _0x59d00a = new URL(window.location.href).hostname;
    if (_0x59d00a !== "member.bdtoolspoint.com") {
      window.location.href = "https://toolszonebd.com";
    }
    if (document.querySelector("textarea.user_data") && document.querySelector("textarea.user_data").value !== '') {
      var _0x3fb257 = document.querySelector("textarea.user_data");
      var _0x102aef = atob(atob(atob(_0x3fb257.value)));
      _0x102aef = JSON.parse(_0x102aef);
      _0x102aef.d = _0x59d00a;
      var _0x14c580 = _0x3fb257.getAttribute("data-url") ? _0x3fb257.getAttribute("data-url") : '';
      if (_0x59d00a == "member.bdtoolspoint.com") {
        document.getElementById("status").value = "accessed";
        chrome.runtime.sendMessage({
          "type": _0x102aef.type,
          "data": JSON.stringify(_0x102aef),
          "redirect": _0x14c580
        });
      }
    }
  }
}();
