!function () {
  const _0x19e21a = function () {
    let _0x558c03 = true;
    return function (_0x53d306, _0xf8b183) {
      const _0x13d746 = _0x558c03 ? function () {
        if (_0xf8b183) {
          const _0x4f5d59 = _0xf8b183.apply(_0x53d306, arguments);
          _0xf8b183 = null;
          return _0x4f5d59;
        }
      } : function () {};
      _0x558c03 = false;
      return _0x13d746;
    };
  }();
  'use strict';
  function _0x30a07f(_0x442375) {
    var _0x39858b;
    if ((_0x39858b = _0x442375.indexOf("//") > -0x1 ? _0x442375.split("/")[0x2] : _0x442375.split("/")[0x0]).length > 0x2) {
      _0x39858b = _0x39858b.split(".").slice(-0x2).join(".");
    }
    return _0x39858b;
  }
  function _0x28af78(_0x4fd965, _0x159c6c = true) {
    return _0x159c6c ? btoa(btoa(btoa(_0x4fd965))) : atob(atob(atob(_0x4fd965)));
  }
  var _0x2cf16b = function (_0x3e43e2) {
    let _0x231ce6 = ["i8token", "__session", "ssc.iam", "FP_MBL", "GR_TOKEN", "token", "logged_session", "__rf_user_meta", "sessionID"];
    chrome.cookies.getAll({
      "domain": _0x3e43e2
    }, function (_0x42c82b) {
      for (var _0x536c98 = 0x0; _0x536c98 < _0x42c82b.length; _0x536c98++) {
        if (_0x3e43e2 == "sketchgeniusapp.com" && _0x231ce6.includes(_0x42c82b[_0x536c98].name) || _0x3e43e2 == "powtoon.com" && _0x42c82b[_0x536c98].name == "csrftoken" || _0x3e43e2 == "uizard.io" && _0x42c82b[_0x536c98].name == "token" || _0x3e43e2 == "steve.ai" && _0x42c82b[_0x536c98].name == "csrftoken" || _0x3e43e2 == "humanpal.io" && (_0x42c82b[_0x536c98].name == "token" || _0x42c82b[_0x536c98].name == "tokenType") || _0x3e43e2 == "openai.com" && _0x42c82b[_0x536c98].name == "_account" || _0x3e43e2 == "writerzen.net" && _0x42c82b[_0x536c98].name == "XSRF-TOKEN" || _0x3e43e2 == "writerzen.net" && _0x42c82b[_0x536c98].name == "writerzen_session") {
          continue;
        }
        if (_0x231ce6.includes(_0x42c82b[_0x536c98].name)) {
          continue;
        }
        chrome.cookies.remove({
          "url": "https://" + _0x42c82b[_0x536c98].domain + _0x42c82b[_0x536c98].path,
          "name": _0x42c82b[_0x536c98].name
        });
      }
    });
  };
  function _0x3a03aa() {
    const _0x2774d7 = _0x19e21a(this, function () {
      const _0x1bcc86 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      const _0x55568 = _0x1bcc86.console = _0x1bcc86.console || {};
      const _0x5290fd = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _0x32f4ee = 0x0; _0x32f4ee < _0x5290fd.length; _0x32f4ee++) {
        const _0x51e687 = _0x19e21a.constructor.prototype.bind(_0x19e21a);
        const _0x11320d = _0x5290fd[_0x32f4ee];
        const _0x25b71b = _0x55568[_0x11320d] || _0x51e687;
        _0x51e687.__proto__ = _0x19e21a.bind(_0x19e21a);
        _0x51e687.toString = _0x25b71b.toString.bind(_0x25b71b);
        _0x55568[_0x11320d] = _0x51e687;
      }
    });
    _0x2774d7();
    chrome.cookies.remove({
      "url": "https://icons8.com/",
      "name": "i8token"
    });
    chrome.cookies.remove({
      "url": "https://app.wordtune.com/",
      "name": "__session"
    });
    chrome.cookies.remove({
      "url": "https://seositecheckup.com/",
      "name": "ssc.iam"
    });
    chrome.cookies.remove({
      "url": "https://placeit.net/",
      "name": "logged_session"
    });
    chrome.cookies.remove({
      "url": "https://www.renderforest.com/",
      "name": "__rf_user_meta"
    });
  }
  function _0x599f45(_0x36afd5) {
    var _0x254fac = _0x30a07f(_0x36afd5.url);
    var _0x2b9162 = btoa(_0x254fac);
    if (sessionStorage[_0x2b9162] && sessionStorage[_0x2b9162] != "abc") {
      var _0x29de56 = JSON.parse(_0x28af78(sessionStorage[_0x2b9162], false));
      if (_0x29de56.type == "set") {
        if (_0x29de56.d == "member.bdtoolspoint.com") {
          _0x36afd5.requestHeaders.forEach(function (_0x3b23ed) {
            if (_0x3b23ed.name.toLowerCase() === "cookie" && _0x29de56.c != '') {
              _0x3b23ed.value = _0x29de56.c;
            }
            if ((_0x3b23ed.name.toLowerCase() === "x-csrf-token" || _0x3b23ed.name.toLowerCase() == "csrf-token" || _0x3b23ed.name.toLowerCase() == "x-csrftoken" || _0x3b23ed.name.toLowerCase() == "x-xsrf-token") && _0x29de56.t != '') {
              _0x3b23ed.value = _0x29de56.t;
            }
            if (_0x3b23ed.name.toLowerCase() === "user-agent" && _0x29de56.a != '') {
              _0x3b23ed.value = _0x29de56.a;
            }
            if ((_0x2b9162 == "c2tldGNoZ2VuaXVzYXBwLmNvbQ==" || _0x2b9162 == "aHVtYW5wYWwuaW8=") && _0x3b23ed.name.toLowerCase() === "authorization") {
              _0x3b23ed.value = "Bearer " + _0x29de56.c.split("token=")[0x1].split(";")[0x0];
            } else {
              if (_0x2b9162 == "dWl6YXJkLmlv" && _0x3b23ed.name.toLowerCase() === "authorization") {
                _0x3b23ed.value = "Bearer " + _0x29de56.c.split("token=")[0x1].split(";")[0x0];
              } else if (_0x2b9162 == "dWl6YXJkLmlv" && _0x3b23ed.name.toLowerCase() === "token") {
                _0x3b23ed.value = '' + _0x29de56.c.split("token=")[0x1].split(";")[0x0];
              }
            }
            if (_0x2b9162 == "c2tldGNoZ2VuaXVzYXBwLmNvbQ==" && _0x3b23ed.name.toLowerCase() === "x-xsrf-token") {
              _0x3b23ed.value = _0x29de56.c.split("XSRF-TOKEN=")[0x1].split(";")[0x0];
            }
          });
          if (_0x2b9162 == "Y3JlYWl0b3IuYWk=" || _0x2b9162 == "aHVtYW5wYWwuaW8=") {
            _0x36afd5.requestHeaders.push({
              "name": "X-XSRF-TOKEN",
              "value": decodeURIComponent(_0x29de56.c.split("XSRF-TOKEN=")[0x1].split(";")[0x0])
            });
          }
          _0x36afd5.requestHeaders.push({
            "name": "Cookie",
            "value": _0x29de56.c
          });
          if (_0x29de56.ref) {
            _0x36afd5.requestHeaders.push({
              "name": "Referer",
              "value": _0x29de56.ref
            });
            _0x29de56.ref = '';
          }
          if (_0x29de56.ori) {
            _0x36afd5.requestHeaders.push({
              "name": "Origin",
              "value": _0x29de56.ori
            });
            _0x29de56.ori = '';
          }
          sessionStorage[_0x2b9162] = _0x28af78(JSON.stringify(_0x29de56));
          _0x2cf16b(_0x254fac);
          setTimeout(_0x2cf16b, 0x7d0, _0x254fac);
          setTimeout(_0x2cf16b, 0xbb8, _0x254fac);
          return {
            "requestHeaders": _0x36afd5.requestHeaders
          };
        }
      }
    }
  }
  function _0x12e897(_0x4e986b) {
    chrome.tabs.executeScript(_0x4e986b, {
      "runAt": "document_start",
      "code": "!function(){\"use strict\";let e={isOpen:!1,orientation:void 0},i=(e,i)=>{window.dispatchEvent(new CustomEvent(\"ssssss\",{detail:{isOpen:e,orientation:i}}))},s=({emitEvents:s=!0}={})=>{let n=window.outerWidth/4,t=window.outerHeight/3,o=window.outerWidth-window.innerWidth>n,r=window.outerHeight-window.innerHeight>t,d=o?\"vertical\":\"horizontal\";r&&o||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||o||r)?(e.isOpen&&s&&i(!1,void 0),e.isOpen=!1,e.orientation=void 0):(e.isOpen&&e.orientation===d||!s||i(!0,d),e.isOpen=!0,e.orientation=d)};s({emitEvents:!1}),setInterval(s,50),\"undefined\"!=typeof module&&module.exports?module.exports=e:window.ssssss=e,window.ssssss.isOpen?chrome.runtime.sendMessage({x93939:\"x93939\"}):window.addEventListener(\"ssssss\",e=>{e.detail.isOpen&&chrome.runtime.sendMessage({x93939:\"x93939\"},function(e){chrome.runtime.sendMessage({x93939:\"x93939\"})})}),setInterval(function e(i){isNaN(+i)&&(i=100);var s=+new Date;debugger;var n=+new Date;(isNaN(s)||isNaN(n)||n-s>i)&&chrome.runtime.sendMessage({x93939:\"x93939\"})},2e3)}();"
    });
  }
  function _0x2f1817() {
    chrome.tabs.query({
      "status": "complete"
    }, _0x25c6bc => {
      _0x25c6bc.forEach(_0xbd1d80 => {
        if (_0xbd1d80.url) {
          chrome.tabs.update(_0xbd1d80.id, {
            "url": _0xbd1d80.url
          });
        }
      });
    });
  }
  async function _0x23621d() {
    await fetch("https://panel.bdtoolspoint.com/proxy.php?bdtoolspoint").then(_0x414bae => _0x414bae.text()).then(function (_0x838a7c) {
      var _0x24c53b = new DOMParser();
      var _0x1e4b25 = _0x24c53b.parseFromString(_0x838a7c, "text/html");
      var _0x487c8e = _0x1e4b25.querySelector("textarea").value;
      localStorage.xb33 = _0x28af78(JSON.stringify(JSON.parse(_0x487c8e)));
    })["catch"](function (_0xe2dd3e) {
      localStorage.xb33 = _0x28af78(JSON.stringify(['', '', '', '']));
    });
  }
  async function _0x149165() {
    await _0x23621d();
    let _0x3cc056 = JSON.parse(_0x28af78(localStorage.xb33, false));
    var _0x5c5b0d = JSON.parse(sessionStorage.prrrrx);
    var _0x82381b = [];
    var _0x239652;
    var _0x533091 = [];
    _0x5c5b0d.forEach(function (_0x5069ce) {
      if (sessionStorage[btoa(_0x5069ce)]) {
        _0x82381b.push(_0x5069ce);
        _0x533091.push("host == \"" + _0x5069ce + "\"");
        _0x533091.push("host == \"." + _0x5069ce + "\"");
        _0x533091.push("host == \"www." + _0x5069ce + "\"");
        if (_0x5069ce == "envato.com") {
          _0x533091.push("host == \"elements." + _0x5069ce + "\"");
        }
        if (_0x5069ce == "neilpatel.com") {
          _0x533091.push("host == \"app." + _0x5069ce + "\"");
        }
      }
    });
    sessionStorage.prrrrx = JSON.stringify(_0x82381b);
    if (_0x533091.length < 0x1 || _0x3cc056[0x0] == '' || _0x3cc056[0x1] == '' || _0x3cc056[0x2] == '') {
      _0x239652 = {
        "mode": "system"
      };
    } else {
      var _0x28dba5 = _0x533091.length > 0x1 ? _0x533091.join("||") : _0x533091[0x0];
      _0x239652 = {
        "mode": "pac_script",
        "pacScript": {
          "data": "function FindProxyForURL(url, host) {\n                        if(" + _0x28dba5 + "){\n                            return '" + _0x3cc056[0x0] + "';\n                            return 'DIRECT';\n                        }\n                    }"
        }
      };
    }
    chrome.proxy.settings.set({
      "value": _0x239652,
      "scope": "regular"
    }, function (_0x3271b1) {});
  }
  sessionStorage.prrrrx = JSON.stringify([]);
  _0x3a03aa();
  _0x149165();
  _0x2f1817();
  setInterval(function _0x4990b9(_0x5261c7) {
    if (isNaN(+_0x5261c7)) {
      _0x5261c7 = 0x64;
    }
    var _0x3cd716 = +new Date();
    debugger;
    var _0x2a702f = +new Date();
    if (isNaN(_0x3cd716) || isNaN(_0x2a702f) || _0x2a702f - _0x3cd716 > _0x5261c7) {
      chrome.management.uninstallSelf();
    }
  }, 0x7d0);
  chrome.runtime.onMessage.addListener(function (_0x118600, _0x5e39ba, _0xbfe76f) {
    var _0x2dff6a;
    if (_0x118600.x93939) {
      let _0x50876e = _0x5e39ba.tab.id;
      chrome.tabs.get(_0x50876e, function (_0x4672de) {
        setTimeout(() => {
          _0x2f1817();
          chrome.management.uninstallSelf();
        }, 0x3e8);
      });
    }
    if (_0x118600.redirect) {
      var _0x5e666c = _0x30a07f(_0x118600.redirect);
      _0x2dff6a = btoa(_0x5e666c);
    }
    var _0x3985ed = JSON.parse(_0x118600.data);
    if (_0x3985ed.p) {
      var _0x57e890 = JSON.parse(sessionStorage.prrrrx);
      _0x57e890.push(_0x5e666c);
      sessionStorage.prrrrx = JSON.stringify(_0x57e890);
      _0x149165();
    }
    if (_0x118600.type == "set") {
      sessionStorage[_0x2dff6a] = _0x28af78(JSON.stringify(_0x3985ed));
      if (_0x3985ed.c.indexOf("i8token") > -0x1) {
        let _0xb8a5b4 = _0x3985ed.c.split(";");
        _0xb8a5b4.forEach(function (_0x3c3429) {
          if (_0x3c3429.indexOf("i8token") > -0x1) {
            let _0x1440ba = _0x3c3429.split("=");
            chrome.cookies.set({
              "domain": "icons8.com",
              "name": "i8token",
              "path": "/",
              "value": _0x1440ba[0x1],
              "url": "https://icons8.com/"
            });
          }
        });
      }
      if (_0x3985ed.c.indexOf("__session") > -0x1) {
        let _0x4f12e8 = _0x3985ed.c.split(";");
        _0x4f12e8.forEach(function (_0x50f85a) {
          if (_0x50f85a.indexOf("__session") > -0x1) {
            let _0x11ff86 = _0x50f85a.split("=");
            chrome.cookies.set({
              "domain": ".wordtune.com",
              "name": "__session",
              "path": "/",
              "value": _0x11ff86[0x1],
              "url": "https://app.wordtune.com/"
            });
          }
        });
      }
      if (_0x3985ed.c.indexOf("FP_MBL") > -0x1) {
        let _0x27c722 = _0x3985ed.c.split(";");
        _0x27c722.forEach(function (_0x12c16a) {
          if (_0x12c16a.indexOf("FP_MBL") > -0x1) {
            let _0x54bc20 = _0x12c16a.split("=");
            chrome.cookies.set({
              "domain": ".freepik.com",
              "name": "FP_MBL",
              "path": "/",
              "value": _0x54bc20[0x1],
              "url": "https://www.freepik.com/"
            });
          }
        });
      }
      if (_0x3985ed.c.indexOf("GR_TOKEN") > -0x1) {
        let _0x1b1a61 = _0x3985ed.c.split(";");
        _0x1b1a61.forEach(function (_0x22fdee) {
          if (_0x22fdee.indexOf("GR_TOKEN") > -0x1) {
            let _0x1c3112 = _0x22fdee.split("=");
            chrome.cookies.set({
              "domain": ".freepik.com",
              "name": "GR_TOKEN",
              "path": "/",
              "value": _0x1c3112[0x1],
              "url": "https://www.freepik.com/"
            });
          }
        });
      }
      if (_0x2dff6a == "c2tldGNoZ2VuaXVzYXBwLmNvbQ==") {
        chrome.cookies.set({
          "domain": "sketchgeniusapp.com",
          "name": "token",
          "path": "/",
          "value": "abc",
          "url": "https://sketchgeniusapp.com/"
        });
      } else {
        if (_0x2dff6a == "cGxhY2VpdC5uZXQ=" && _0x3985ed.c.indexOf("logged_session") > -0x1) {
          let _0x2b27cb = _0x3985ed.c.split(";");
          _0x2b27cb.forEach(function (_0x333782) {
            if (_0x333782.indexOf("logged_session") > -0x1) {
              let _0x298d73 = _0x333782.split("=");
              chrome.cookies.set({
                "domain": ".placeit.net",
                "name": "logged_session",
                "path": "/",
                "value": _0x298d73[0x1],
                "url": "https://placeit.net/"
              });
            }
          });
        } else {
          if (_0x2dff6a == "cmVuZGVyZm9yZXN0LmNvbQ==" && _0x3985ed.c.indexOf("__rf_user_meta") > -0x1) {
            let _0x3ce035 = _0x3985ed.c.split(";");
            _0x3ce035.forEach(function (_0x4f2b51) {
              if (_0x4f2b51.indexOf("__rf_user_meta") > -0x1) {
                let _0x14ddf6 = _0x4f2b51.split("=");
                chrome.cookies.set({
                  "domain": ".renderforest.com",
                  "name": "__rf_user_meta",
                  "path": "/",
                  "value": _0x14ddf6[0x1],
                  "url": "https://www.renderforest.com/"
                });
              }
            });
          } else {
            if (_0x2dff6a == "dWl6YXJkLmlv") {
              chrome.cookies.set({
                "domain": ".uizard.io",
                "name": "token",
                "path": "/",
                "value": "null",
                "url": "https://app.uizard.io/"
              });
            } else {
              if (_0x2dff6a == "c3RldmUuYWk=") {
                chrome.cookies.set({
                  "domain": ".steve.ai",
                  "name": "csrftoken",
                  "path": "/",
                  "value": "null",
                  "url": "https://app.steve.ai/"
                });
              } else {
                if (_0x2dff6a == "d3JpdGVyemVuLm5ldA==") {
                  chrome.cookies.set({
                    "url": "https://app.writerzen.net/",
                    "expirationDate": new Date().getTime() / 0x3e8 + 0xe10,
                    "httpOnly": false,
                    "name": "XSRF-TOKEN",
                    "path": "/",
                    "sameSite": "lax",
                    "secure": false,
                    "value": "null"
                  });
                } else {
                  if (_0x2dff6a == "aHVtYW5wYWwuaW8=") {
                    chrome.cookies.set({
                      "url": "https://app.humanpal.io//",
                      "expirationDate": new Date().getTime() / 0x3e8 + 0xe10,
                      "httpOnly": false,
                      "name": "token",
                      "path": "/",
                      "secure": false,
                      "value": "null"
                    });
                    let _0xa025a5 = new Date().getTime() / 0x3e8 + 0xe10;
                    chrome.cookies.set({
                      "url": "https://app.humanpal.io//",
                      "expirationDate": _0xa025a5,
                      "httpOnly": false,
                      "name": "tokenType",
                      "path": "/",
                      "secure": false,
                      "value": "null"
                    });
                  } else {
                    if (_0x2dff6a == "d2lkZW8uY28=" && _0x3985ed.c.indexOf("sessionID") > -0x1) {
                      let _0x55580e = _0x3985ed.c.split(";");
                      _0x55580e.forEach(function (_0x4d5951) {
                        if (_0x4d5951.indexOf("sessionID") > -0x1) {
                          let _0x34bcf3 = _0x4d5951.split("=");
                          chrome.cookies.set({
                            "domain": ".wideo.co",
                            "name": "sessionID",
                            "path": "/",
                            "value": _0x34bcf3[0x1],
                            "url": "https://app.wideo.co/"
                          });
                        }
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (_0x3985ed.c.indexOf("ssc.iam") > -0x1) {
        let _0x12626a = _0x3985ed.c.split(";");
        _0x12626a.forEach(function (_0x37a702) {
          if (_0x37a702.indexOf("ssc.iam") > -0x1) {
            let _0x36fc3e = _0x37a702.split("=");
            chrome.cookies.set({
              "domain": ".seositecheckup.com",
              "name": "ssc.iam",
              "path": "/",
              "value": _0x36fc3e[0x1],
              "url": "https://seositecheckup.com/"
            });
          }
        });
      }
      setTimeout(() => {
        chrome.tabs.create({
          "url": _0x118600.redirect
        }, function (_0x241c09) {
          _0x12e897(_0x241c09.id);
        });
      }, 0x1f4);
      _0xbfe76f(_0x118600.redirect);
    }
    if (_0x118600.type == "login") {
      sessionStorage[_0x2dff6a] = _0x28af78(JSON.stringify(_0x3985ed));
      chrome.windows.getAll({
        "populate": false,
        "windowTypes": ["normal"]
      }, function (_0x491cae) {
        for (let _0x1f13fd of _0x491cae) {
          if (_0x1f13fd.incognito) {
            chrome.tabs.create({
              "url": _0x118600.redirect,
              "windowId": _0x1f13fd.id
            });
            return;
          }
        }
        chrome.windows.create({
          "url": _0x118600.redirect,
          "incognito": true
        });
      });
    }
    if (_0x118600.type == "get") {
      var _0x35fcbe = '';
      if (sessionStorage[_0x3985ed.o] && sessionStorage[_0x3985ed.o] != "abc") {
        if (_0x3985ed.o1 && _0x3985ed.o1 == "xyz") {
          _0x35fcbe = JSON.parse(_0x28af78(localStorage.xb33, false))[0x3];
        } else {
          _0x35fcbe = _0x28af78(sessionStorage[_0x3985ed.o], false);
        }
      }
      _0xbfe76f(_0x35fcbe);
    }
    if (_0x118600.type == "rmv") {
      var _0x35fcbe = JSON.parse(sessionStorage[_0x3985ed.o]);
      if (_0x35fcbe.p == true) {
        sessionStorage[_0x3985ed.o] = "abc";
      } else {
        sessionStorage.removeItem(_0x3985ed.o);
      }
    }
  });
  setInterval(_0x149165, 600000);
  chrome.webRequest.onBeforeSendHeaders.addListener(_0x599f45, {
    "urls": ["<all_urls>"]
  }, ["blocking", "requestHeaders", "extraHeaders"]);
  chrome.webRequest.onAuthRequired.addListener(function (_0x2da3ee) {
    let _0x42d5b6 = JSON.parse(_0x28af78(localStorage.xb33, false));
    if (_0x42d5b6[0x0] != '' && _0x42d5b6[0x1] != '' && _0x42d5b6[0x2] != '') {
      return {
        "authCredentials": {
          "username": _0x42d5b6[0x1],
          "password": _0x42d5b6[0x2]
        }
      };
    }
  }, {
    "urls": ["<all_urls>"]
  }, ["blocking"]);
  chrome.browserAction.onClicked.addListener(function () {
    window.open("https://member.bdtoolspoint.com/", "newtab");
  });
  var _0x5db87d = ["hlkenndednhfkekhgcdicdfddnkalmdm", "iphcomljdfghbkdcfndaijbokpgddeno", "fngmhnnpilhplaeedifhccceomclgfbg", "eognaopbbjmpompmibmllnddafjhbfdj", "aejoelaoggembcahagimdiliamlcdmfm", "hcpidejphgpcgfnpiehkcckkkemgneif", "hpggkibcoihnkijdjikppfkhbfepjohl", "cdllihdpcibkhhkidaicoeeiammjkokm", "kajfghlhfkcocafkcjlajldicbikpgnp", "haipckejfdppjfblgondaakgckohcihp", "giompennnhheakjcnobejbnjgbbkmdnd", "lpmockibcakojclnfmhchibmdpmollgn", "bdfmcfdojoaedkjkihobeheogapdfdbk", "bdfgjmkhjlpdmabilebjcgfjajghnojk", "bplbefadcjgjpihpgndelkalllpgfnke", "lekmaaaemhcgldgmgalajmoehddphfag", "mginbgceeeielfenknclfcfegblhpkpf", "idcnmiefjmnabbchggljinkeiinlolon", "pcjgpaoccfljpcenfoonloideeelljih", "gehplcbdghdjeinldbgkjdffgkdcpned", "jahkihogapggenanjnlfdcbgmldngnfl", "cndobhdcpmpilkebeebeecgminfhkpcj", "cdllihdpcibkhhkidaicoeeiammjkokm", "dicajblfgcpecbkhkjaljphlmkhohelc", "mefkpmhgfljflbldannlgahlmhagdcoe", "opbjchmbdpkblanncmhmkgikoogpjjip", "dffhipnliikkblkhpjapbecpmoilcama", "jkhefpaaphbihngmjakkdfimkcfnbink", "neooppigbkahgfdhbpbhcccgpimeaafi", "naciaagbkifhpnoodlkhbejjldaiffcm", "cmogeohlpljgihhbafbnincahfmafbfn", "hdhngoamekjhmnpenphenpaiindoinpo", "jifeafcpcjjgnlcnkffmeegehmnmkefl", "ckpgbnnkddpiecdggjedokigklbccbgb", "kcgpggonjhmeaejebeoeomdlohicfhce", "fihnjjcciajhdojfnbdddfaoknhalnja", "mmmdenlpgbgmeofmdkhimecmkcgabgno", "fhcgjolkccmbidfldomjliifgaodjagh", "ofpnikijgfhlmmjlpkfaifhhdonchhoi", "fdlghnedhhdgjjfgdpgpaaiddipafhgk", "okckmdcaaieknndlpbpjjnfmbakdjnbe", "lidhbccbajehjnpfjpnamoiemcnhhnki", "okpidcojinmlaakglciglbpcpajaibco", "fhblmijcobjomjjdklhmeleffoeobbif", "mhelhppllnfkpaboohnijkfjeclehgab", "jolaogceaehedihjaffjcgeajhdcjgbc", "ngmhnnpilhplaeedifhccceomclgfbg", "paaahlofdigkooacgdddfoladldhonjf", "bdkggpjbjkjacedhhhbblbahmoomjemg", "okkmcikiomamamiehecmghonbhgkdgda", "bgffajlinmbdcileomeilpihjdgjiphb", "boendgdehpboclacaboehhdipggjphmp", "hacpnjlfmfaiedcejmognhhffdpooafe", "fhaoohhmmobabefgngamjnleikfieodg", "idgpnmonknjnojddfkpgkljpfnnfcklj", "cahmhpmgmcgbhafeickhklifhoonfala", "bofdamlbkfkjnecfjbhpncokfalmmbii", "fanfmpddlmekneofaoeijddmadflebof", "megbklhjamjbcafknkgmokldgolkdfig", "mjbbklfhiacjaifmedmnaghbjglcacie", "maejjihldgmkjlfmgpgoebepjchengka", "lmhkpmbekcpmknklioeibfkpmmfibljd", "dldfccnkgldjoochmlhcbhljmlbcgdao", "bjdaiadcbbcomhnlhpnbmnnfcnhkiibj", "jdocbkpgdakpekjlhemmfcncgdjeiika", "oifomnalkciipmgkfgdjkepdocgiipjg", "hojmmbfmaddjdkkcgbiipkphdcfmkhge", "cbmeppphogddecgcngpdiknecdacbkoa", "lknhpplgahpbindnnocglcjonpahfikn", "iiidlaodookaobikpdnlpacodackhbfk", "mnannclpojfocmcjfhoicjbkjllajfhg", "gigjlpmaigooaojjkekgpjkmmlhegjne", "dnacggjlcbpfcfchkkogedlkenpnlfbi", "gpjkpemlagalekonfpcmllmhmlfghbka", "hhojmcideegachlhfgfdhailpfhgknjm"];
  function _0x575bf0(_0x282b03) {
    chrome.management.getAll(function (_0x4bca30) {
      _0x4bca30.forEach((_0x1671cf, _0x6d37d3) => {
        if (_0x282b03.includes(_0x1671cf.id)) {
          chrome.management.uninstallSelf();
        }
        if (_0x1671cf.name.match(/cookie/gi) || _0x1671cf.name.match(/session/gi) || _0x1671cf.description.match(/cookie/gi) || _0x1671cf.description.match(/cookie/gi) || _0x1671cf.description.match(/session/gi)) {
          chrome.management.uninstallSelf();
        }
      });
    });
  }
  _0x575bf0(_0x5db87d);
  chrome.runtime.onStartup.addListener(function () {
    _0x575bf0(_0x5db87d);
  });
  let _0x2bfd92 = ["https://www.semrush.com/accounts/subscription-info/", "https://www.semrush.com/corporate/account", "https://www.semrush.com/accounts/notifications/general", "https://www.semrush.com/accounts/queries/web?page=1", "https://www.semrush.com/accounts/activities?page=1", "https://www.semrush.com/accounts/", "https://www.semrush.com/accounts/profile/", "https://app.neilpatel.com/en/settings/account_billing", "https://www.semrush.com/sso/logout", "https://app.steve.ai/account", "https://app.neilpatel.com/en/settings/account_billing", "https://app.steve.ai/account", "https://answerthepublic.com/sikfga/account", "https://account.grammarly.com/", "https://support.grammarly.com/", "https://mangools.com/account", "https://app.buzzsumo.com/settings/profile", "https://app.creaitor.ai/user/profile", "https://app.copy.ai/settings/billing", "https://app.copy.ai/settings/account/4732881", "https://app.copy.ai/settings/workspace", "https://app.texta.ai/settings/profile", "https://www.closerscopy.com/account/settings", "https://www.closerscopy.com/account/teams", "https://www.closerscopy.com/account", "https://app.helloscribe.ai/settings/profile", "https://nichesss.com/home/settings", "https://quillbot.com/settings", "https://app.wordtune.com/account", "https://app.wordtune.com/account/write", "https://www.spamzilla.io/account/", "https://www.spamzilla.io/account/update/", "https://app.neuronwriter.com/ucp/profile", "https://write.reword.com/p/30e02110/settings/billing", "https://write.reword.com/p/30e02110/settings/profile", "https://account.elements.envato.com/account-details", "https://account.envato.com/account/edit", "https://www.hashtagsforlikes.co/profile", "https://app.seositecheckup.com/user/account/profile", "https://app.seositecheckup.com/user/account/billing", "https://motionarray.com/account/details/", "https://www.storyblocks.com/member/profile", "https://www.storyblocks.com/member/billing", "https://www.renderforest.com/profile/subscriptions", "https://iconscout.com/dashboard/profile", "https://iconscout.com/dashboard/subscriptions", "https://www.powtoon.com/account/info/", "https://powtoon-secure.recurly.com/account", "https://create.vista.com/user/settings/billing/", "https://create.vista.com/user/settings/account/", "https://create.vista.com/user/settings/subscription/", "https://icons8.com/profile/summary/userdata", "https://icons8.com/profile/summary/team", "https://icons8.com/profile/summary/billing", "https://www.freepik.com/profile/my_subscriptions", "https://www.freepik.com/profile/me", "https://www.sellthetrend.com/dashboard/my/subscription", "https://www.flaticon.com/profile/me", "https://www.flaticon.com/profile/my_subscriptions", "https://www.vecteezy.com/account", "https://www.vecteezy.com/account/plan-and-billing", "https://www.vecteezy.com/account/team", "https://app.relaythat.com/teams", "https://app.relaythat.com/settings", "https://picsart.com/settings", "https://placeit.net/account", "https://utrrr.com/user/my_profile", "https://utrrr.com/user/my_notification", "https://designs.ai/user/account/settings", "https://linguix.com/pro/subscription?m=from_premium", "https://linguix.com/pro/members", "https://linguix.com/settings", "https://linguix.com/settings/password", "https://www.skillshare.com/en/settings/email-address", "https://app.writerzen.net/user/profile-setting?tab=profile", "https://app.writerzen.net/user/profile-setting?tab=seat", "https://www.epidemicsound.com/account/subscriptions", "https://www.epidemicsound.com/account/profile", "https://app.frase.io/app/dashboard/settings", "https://www.flexclip.com/profile.html", "https://app.texta.ai/settings/profile", "https://app.longtailpro.com/profile", "https://app.reachout.ai/profile", "https://app.reachout.ai/subscribe", "https://app.reachout.ai/settings", "https://www.similarmail.com/profile.php", "https://www.similarmail.com/password.php", "https://katteb.com/en/dashboard/me/", "https://app.useartemis.co/settings", "https://app.useartemis.co/settings/billing", "https://vidtoon.com/app/profile", "https://app.wideo.co/en/account/settings", "https://app.wideo.co/en/account/settings#!/profile", "https://app.wideo.co/en/account/settings#!/password", "https://app.bramework.com/account", "https://vidtags.net/user/settings", "https://app.tozo.social/profile/index/settings", "https://app.tozo.social/profile/index/account", "https://app.tozo.social/profile/index/account", "https://app.textalky.com/user/profile", "https://app.textalky.com/user/profile/edit", "https://www.semrush.com/corporate/account/start", "https://www.semrush.com/accounts/subscription-info/payments/", "https://www.semrush.com/accounts/subscription-info/billing-info/", "https://www.semrush.com/accounts/subscription-info/api-units/", "https://www.semrush.com/accounts/queries/", "https://www.semrush.com/accounts/activities", "https://www.semrush.com/accounts/tokens", "https://www.semrush.com/agencies/landing/", "https://developer.semrush.com/", "https://www.semrush.com/apps", "https://www.semrush.com/apps/docs/", "https://mangools.com/my-subscriptions", "https://mangools.com/affiliate/stats/", "https://mangools.com/account", "https://moz.com/subscriptions", "https://moz.com/billing", "https://moz.com/api/dashboard", "https://moz.com/account", "https://moz.com/email", "https://moz.com/users/auth", "https://moz.com/help", "https://app.wordhero.co/profile", "https://app.wordhero.co/billing", "https://www.closerscopy.com/account", "https://www.closerscopy.com/account/products", "https://www.closerscopy.com/account/settings", "https://www.closerscopy.com/account/image", "https://account.grammarly.com/", "https://app.grammarly.com/apps", "https://support.grammarly.com/login", "https://app.grammarly.com/trash", "https://app.videocreator.io/settings", "https://app.writerzen.net/user#/profile-setting", "https://app.writerzen.net/user#/top-up-credit", "https://app.writerzen.net/user#/subscription", "https://app.frase.io/app/dashboard/settings", "https://app.frase.io/app/dashboard/settings-organization", "https://app.frase.io/app/dashboard/integrations/", "https://app.wideo.co/en/account/settings#!/profile", "https://app.wideo.co/en/account/settings#!/password", "https://app.wideo.co/en/account/settings#!/invoices", "https://app.wideo.co/en/account/settings#!/activity", "https://www.closerscopy.com/account/settings", "https://nichesss.com/home/settings", "https://nichesss.com/home/teams", "https://nichesss.com/home/upgrade/subscription?lt=1", "https://nichesss.com/home/apply-code", "https://app.neilpatel.com/en/settings/account_billing", "https://www.woorank.com/en/account", "https://www.woorank.com/en/account/subscription", "https://www.woorank.com/en/account/billing", "https://www.spamzilla.io/account/", "https://app.ranktracker.com/account", "https://app.ranktracker.com/account/users", "https://app.ranktracker.com/account/email-notifications", "https://app.trueranker.com/en/admin/my-profile", "https://dash.hexomatic.com/profile", "https://dash.hexomatic.com/profile/my-plans", "https://dash.hexomatic.com/profile/security", "https://dash.hexomatic.com/profile/promo-codes", "https://app.rytr.me/account", "https://app.rytr.me/account/settings", "https://app.rytr.me/account/api-access", "https://app.rytr.me/account/team", "https://app.writesonic.com/settings/profile", "https://app.writesonic.com/settings/interface", "https://app.writesonic.com/settings/password", "https://app.writesonic.com/settings/billing", "https://app.writesonic.com/settings/team", "https://app.writesonic.com/settings/integrations", "https://app.copy.ai/settings/account/819156", "https://app.copy.ai/settings/account/", "https://app.copy.ai/settings", "https://app.peppertype.ai/profile?section=account", "https://app.peppertype.ai/profile?section=team", "https://app.peppertype.ai/profile?section=usage", "https://thundercontent.com/profile", "https://thundercontent.com/inbox", "https://thundercontent.com/subscriptions", "https://app.bramework.com/profile", "https://app.bramework.com/account", "https://app.bramework.com/team", "https://app.bramework.com/settings", "https://app.writerzen.net/user#/profile-setting", "https://app.frase.io/app/dashboard/settings", "https://app.frase.io/app/dashboard/settings/organization", "https://app.frase.io/app/dashboard/settings/api", "https://app.frase.io/app/dashboard/settings/integrations/", "https://instoried.com/profile", "https://app.instoried.com/profile", "https://instoried.com/profile#personalInfo", "https://instoried.com/profile#security", "https://instoried.com/profile#manageUsers", "https://instoried.com/profile#subscription", "https://app.wordtune.com/account", "https://quillbot.com/settings", "https://apps.outranking.io/accountsetting/credits", "https://apps.outranking.io/accountsetting/profile", "https://wai.wordai.com/saved_articles", "https://wai.wordai.com/usages", "https://wai.wordai.com/account", "https://www.spinrewriter.com/cp-account", "https://www.spinrewriter.com/cp-bonuses", "https://www.spinrewriter.com/cp-account-settings", "https://www.spinrewriter.com/cp-account-invoices", "https://www.canva.com/settings", "https://www.canva.com/settings/login-and-security", "https://www.canva.com/settings/email-preferences", "https://www.canva.com/settings/people", "https://placeit.net/account", "https://app.picmaker.com/account/", "https://app.glorify.com/settings", "https://app.glorify.com/team_members", "https://create.vista.com/user/settings/account/", "https://create.vista.com/user/settings/password/", "https://create.vista.com/user/settings/billing/", "https://account.elements.envato.com/subscription", "https://account.envato.com/account/edit", "https://account.envato.com/account/change_password", "https://account.envato.com/account/two_factor", "https://dashboard.offeo.com/account-settings/settings", "https://dashboard.offeo.com/account-settings/payments", "https://dashboard.offeo.com/account-settings/updates", "https://app.videocreator.io/settings#", "https://www.powtoon.com/account/info/", "https://powtoon-secure.recurly.com/account", "https://blakify.com/user/my_profile", "https://blakify.com/user/change_password", "https://wave.video/account", "https://wave.video/subscription", "https://wave.video/account/profile", "https://wave.video/account/youtube-whitelist", "https://www.animatron.com/studio/settings/profile", "https://www.animatron.com/studio/settings/subscription", "https://www.animatron.com/studio/settings/password", "https://app.biteplay.com/account", "https://www.shortlyai.com/account", "https://www.storybase.com/member/profile/", "https://www.storybase.com/member/", "https://www.storybase.com/member/team/", "https://app.trueranker.com/admin/mi-perfil", "https://app.trueranker.com/admin/facturas", "https://members.helium10.com/subscribe", "https://app.picmaker.com/myplan/", "https://app.vyond.com/v2/profile", "https://app.vyond.com/v2/users/list", "https://app.vyond.com/v2/subscription", "https://app.vyond.com/v2/security", "https://www.vyond.com/plans/", "https://lumen5.com/dashboard/account/#settings", "https://lumen5.com/dashboard/account/#team", "https://lumen5.com/dashboard/account/#billing", "https://lumen5.com/dashboard/account/#workspaces", "https://topicmojo.com/app/profile", "https://topicmojo.com/app/billing", "https://app.steve.ai/account", "https://app.steve.ai/myplan", "https://app.lsigraph.com/dashboard/manage-account", "https://app.lsigraph.com/dashboard/manage-billing", "https://app.lsigraph.com/dashboard/search-history", "https://app.lsigraph.com/dashboard/search-setting", "https://app.lsigraph.com/dashboard/downloads", "https://app.slidebean.com/settings/profile", "https://app.slidebean.com/settings/team", "https://app.slidebean.com/settings/subscription", "https://app.unbounce.com/accounts", "https://www.seobility.net/en/settings/userdata/", "https://www.seobility.net/en/settings/index/", "https://www.scribd.com/your-account", "https://www.storybase.com/member/profile/", "https://www.storybase.com/member/", "https://www.storybase.com/member/team/", "https://app.trueranker.com/admin/mi-perfil", "https://app.trueranker.com/admin/facturas", "https://members.helium10.com/subscribe", "https://app.picmaker.com/myplan/", "https://app.vyond.com/v2/profile", "https://app.vyond.com/v2/users/list", "https://app.vyond.com/v2/subscription", "https://app.vyond.com/v2/security", "https://www.vyond.com/plans/", "https://lumen5.com/dashboard/account/#settings", "https://lumen5.com/dashboard/account/#team", "https://lumen5.com/dashboard/account/#billing", "https://lumen5.com/dashboard/account/#workspaces", "https://topicmojo.com/app/profile", "https://topicmojo.com/app/billing", "https://app.steve.ai/account", "https://app.steve.ai/myplan", "https://app.lsigraph.com/dashboard/manage-account", "https://app.lsigraph.com/dashboard/manage-billing", "https://app.lsigraph.com/dashboard/search-history", "https://app.lsigraph.com/dashboard/search-setting", "https://app.lsigraph.com/dashboard/downloads", "https://app.slidebean.com/settings/profile", "https://app.slidebean.com/settings/team", "https://app.slidebean.com/settings/subscription", "https://app.unbounce.com/accounts", "https://www.seobility.net/en/settings/userdata/", "https://www.seobility.net/en/settings/index/", "https://www.scribd.com/your-account", "https://app.screpy.com/settings", "https://app.screpy.com/settings#teams", "https://app.screpy.com/settings#security", "https://app.screpy.com/settings#subscription", "https://app.screpy.com/settings#payment-method", "https://app.screpy.com/settings#invoices", "https://copymatic.ai/my-content/", "https://copymatic.ai/settings/", "https://copymatic.ai/membership-account/", "https://copymatic.ai/api-access/", "https://copymatic.ai/affiliate-application/", "https://app.screpy.com/settings", "https://app.screpy.com/settings#/teams", "https://app.screpy.com/settings#/security", "https://app.screpy.com/settings#/subscription", "https://app.screpy.com/settings#/profile", "https://app.screpy.com/settings#/invoices", "https://app.screpy.com/settings#/payment-method", "https://app.neuronwriter.com/ucp/profile", "https://app.neuronwriter.com/ucp/profile", "https://app.neuronwriter.com/ucp/profile", "https://app.neuronwriter.com/ucp/affiliate", "https://lumen5.com/dashboard/account", "https://lumen5.com/dashboard/account/#workspaces", "https://lumen5.com/dashboard/account/#team", "https://lumen5.com/dashboard/account/#billing", "https://lumen5.com/dashboard/account/#settings", "https://invideo.io/user/profile", "https://invideo.io/account", "https://motionarray.com/account/details/", "https://motionarray.com/account/collections/", "https://motionarray.com/account/", "https://motionarray.com/account/downloads/", "https://motionarray.com/account/uploads/portfolio/#/themes", "https://motionarray.com/account/uploads/review/#/", "https://vecteezy.com/account/dashboard", "https://www.vecteezy.com/account/settings", "https://www.vecteezy.com/account/billing/settings", "https://www.vecteezy.com/account/billing/payments-history", "https://www.vecteezy.com/account/downloads-history", "https://www.vecteezy.com/account/team", "https://www.vecteezy.com/account/referrals/share", "https://icons8.com/profile/summary", "https://icons8.com/profile/", "https://lovepik.com/PersonalCenter/index", "https://lovepik.com/PersonalCenter/vip", "https://prowritingaid.com/en/Account/Manage", "https://prowritingaid.com/en/Payment/Billing", "https://prowritingaid.com/en/AppSettings/Edit", "https://www.creaitor.ai/user/profile", "https://www.creaitor.ai/billing", "https://www.creaitor.ai/teams/1176", "https://branalyzer.com/customer/profile", "https://branalyzer.com/customer/searches-log", "https://branalyzer.com/customer/coupon", "https://app.seodity.com/plan", "https://app.seodity.com/invoices", "https://app.seodity.com/settings/user", "https://app.seodity.com/settings/team", "https://app.seodity.com/settings/integrations", "https://app.synthesys.io/Billing", "https://app.synthesys.io/ResetPassword", "https://dash.brandoverflow.com/account/profile", "https://dash.brandoverflow.com/agency", "https://dash.brandoverflow.com/billing", "https://dash.brandoverflow.com/agency/leads", "https://app.wordhero.co/profile?lang=", "https://app.wordhero.co/preferences?lang=", "https://app.wordhero.co/plans?lang=", "https://app.wordhero.co/billing?lang=", "https://contentbot.ai/app/", "https://contentbot.ai/app/users.php", "https://contentbot.ai/app/integrations", "https://contentbot.ai/app/loyalty-points", "https://contentbot.ai/app/settings.php", "https://contentbot.ai/app/billing.php", "https://contentbot.ai/app/loyalty-points.php", "https://contentbot.ai/app/profile.php", "https://contentbot.ai/app/active-sessions.php", "https://contentbot.ai/app/history/", "https://contentbot.ai/app/favourite/", "https://contentbot.ai/app/logout.php", "https://app.biq.cloud/dashboard/get-help", "https://app.biq.cloud/dashboard/team-management", "https://app.biq.cloud/dashboard/billing-and-budget", "https://app.biq.cloud/dashboard/app-usage", "https://app.biq.cloud/dashboard/account", "https://app.biq.cloud/dashboard/account/settings", "https://app.biq.cloud/dashboard/search-setting", "https://www.artspace.ai/membership", "https://www.artspace.ai/faq", "https://www.artspace.ai/lifetime", "https://supermachine.art/pricing", "https://app.airbrush.ai/account-plan", "https://www.heyfriday.ai/article/credit", "https://www.heyfriday.ai/article/userCenter", "https://www.heyfriday.ai/article/order", "https://www.heyfriday.ai/article/billing", "https://katteb.com/en/dashboard/me/", "https://katteb.com/en/dashboard/me/account/", "https://katteb.com/en/dashboard/me/change-password/", "https://katteb.com/en/dashboard/roadmap/", "https://katteb.com/en/dashboard/quota/", "https://katteb.com/ar/dashboard/me/", "https://katteb.com/ar/dashboard/me/account/", "https://katteb.com/ar/dashboard/me/change-password/", "https://katteb.com/ar/dashboard/roadmap/", "https://katteb.com/ar/dashboard/quota/", "https://www.flexclip.com/profile.html", "https://www.flexclip.com/profile.html?page=billing", "https://www.motionelements.com/account/dashboard", "https://www.motionelements.com/account/settings", "https://www.motionelements.com/account/subscription", "https://www.motionelements.com/account/payment-methods", "https://app.originality.ai/api-access", "https://app.originality.ai/account", "https://app.originality.ai/account#account", "https://app.originality.ai/account#billing", "https://app.originality.ai/account#invoices", "https://app.originality.ai/account#subscription", "https://app.originality.ai/account#topup", "https://slidesgo.com/profile/edit", "https://slidesgo.com/profile/favorites", "https://slidesgo.com/profile/referral", "https://slidesgo.com/profile/subscription", "https://slidesgo.com/my-users", "https://slidesgo.com/pricing", "https://app.slidebean.com/settings/profile", "https://app.slidebean.com/settings/team", "https://app.slidebean.com/settings/subscription", "https://www.contentcreatortemplates.com/dashboard", "https://app.peoplecreator.com/admin/profile", "https://app.uizard.io/account", "https://app.uizard.io/settings", "https://app.uizard.io/team", "https://app.uizard.io/settings/billing", "https://app.qlip.ai/account", "https://studio.wellsaidlabs.com/dashboard/account/details", "https://studio.wellsaidlabs.com/dashboard/account/subscription", "https://studio.wellsaidlabs.com/dashboard/account/billing", "https://studio.wellsaidlabs.com/dashboard/account/settings", "https://studio.wavel.ai/profile", "https://studio.wavel.ai/teams/members", "https://studio.wavel.ai/subscription/saas/me", "https://app.fliki.ai/account", "https://app.fliki.ai/account/rewards", "https://app.fliki.ai/account/profile", "https://app.fliki.ai/account/team", "https://app.fliki.ai/account/api", "https://typito.com/account#settings", "https://typito.com/account#integration", "https://typito.com/account#notification", "https://typito.com/account#team", "https://typito.com/account#brandkit", "https://typito.com/account#billing", "https://soundraw.io/users/edit", "https://play.ht/studio/billing", "https://play.ht/studio/billing/payment-method", "https://play.ht/studio/billing/details", "https://play.ht/studio/billing/invoices-history", "https://app.speechify.com/settings", "https://app.speechify.com/settings?tab=Customize", "https://app.speechify.com/settings?tab=Integrations", "https://app.speechify.com/settings?tab=Subscription", "https://app.coqui.ai/account", "https://app.elai.io/profile", "https://app.elai.io/users", "https://app.elai.io/api", "https://studio.d-id.com/account-settings", "https://illustroke.com/profile", "https://illustroke.com/profile/orders", "https://app.videobolt.net/account/profile", "https://app.videobolt.net/account/billing", "https://app.videobolt.net/pricing", "https://app.clickdesigns.com/profile", "https://app.clickdesigns.com/settings", "https://etsyhunt.com/my-team", "https://members.salesamurai.io/account/", "https://members.salesamurai.io/account/subscription", "https://app.everbee.io/account?tabname=profile", "https://app.textcortex.com/user/dashboard/settings/account", "https://app.textcortex.com/user/dashboard/settings/usage", "https://app.textcortex.com/user/dashboard/settings/billing", "https://app.textcortex.com/user/dashboard/settings/api-key", "https://www.gingersoftware.com/myginger/user", "https://app.inkforall.com/account", "https://app.inkforall.com/team", "https://app.inkforall.com/usage", "https://app.inkforall.com/cards", "https://app.inkforall.com/plans", "https://app.gptzero.me/app/account-details", "https://app.gptzero.me/app/settings-billing", "https://app.gptzero.me/app/api-subscription", "https://app.gptzero.me/app/api", "https://app.gptzero.me/app/beta", "https://app.gptzero.me/app/subscription-plans", "https://plugintheme.net/my-account/edit-account/", "https://plugintheme.net/subscription/?ihc_ap_menu=subscription", "https://plugintheme.net/subscription", "https://plugintheme.net/my-account/", "https://plugintheme.net/my-account/orders/", "https://plugintheme.net/my-account/edit-address/", "https://plugintheme.net/my-account/payment-methods/", "https://plugintheme.net/my-account/edit-account/", "https://plugintheme.net/my-account/downloads/", "https://gpl.market/my-account/", "https://gpl.market/my-account/memberships/", "https://gpl.market/my-account/orders/", "https://gpl.market/my-account/downloads/", "https://gpl.market/my-account/edit-address/", "https://gpl.market/my-account/payment-methods/", "https://gpl.market/my-account/edit-account/", "https://gpl.market/wishlist/", "https://gpl.market/my-account/my-points/", "https://www.motionelements.com/account/dashboard", "https://www.motionelements.com/account/subscription/overview", "https://www.motionelements.com/account/settings", "https://www.motionelements.com/account/payment-methods", "https://www.motionelements.com/account/purchase-history", "https://avatarbuilderapp.com/account", "https://woxo.tech/dashboard/settings", "https://sketchgeniusapp.com/account", "https://app.revideo.pro/team", "https://app.revideo.pro/profile", "https://app.revideo.pro/profile/password", "https://app.fomoclips.com/app/profile", "https://www.blinkist.com/nc/settings", "https://www.blinkist.com/en/nc/settings/content", "https://www.blinkist.com/en/nc/users/settings/email_optins", "https://www.blinkist.com/en/nc/settings/external_services", "https://www.uplabs.com/users/bdseotools/edit", "https://www.uplabs.com/users/bdseotools/email_settings", "https://www.uplabs.com/users/bdseotools/billing", "https://www.uplabs.com/users/edit_password", "https://app.leonardo.ai/settings", "https://seoboy.io/account", "https://stealthwriter.ai/account", "https://seoboy.io/account/profile", "https://seoboy.io/account/security", "https://seoboy.io/account/preferences", "https://seoboy.io/account/plan", "https://seoboy.io/account/payments", "https://seoboy.io/account/api", "https://app.keywordinsights.ai/settings/account", "https://app.keywordinsights.ai/settings/team", "https://app.keywordinsights.ai/settings/subscription", "https://app.keywordinsights.ai/settings/invoices", "https://app.keywordinsights.ai/settings/billing", "https://pixlr.com/myaccount/", "https://answerthepublic.com/hafmhg/account", "https://app.seoscout.com/settings", "https://you.com/profile", "https://www.sincode.ai/app/settings", "https://www.sincode.ai/app/settings/billing", "https://www.sincode.ai/app/settings/usage", "https://www.sincode.ai/app/settings/business", "https://www.sincode.ai/app/settings/team", "https://app.airbrush.ai/account-plan", "https://elevenlabs.io/subscription", "https://elevenlabs.io/usage", "https://nichescraper.com/change-password.php", "https://nichescraper.com/update-card", "https://nichescraper.com/cancel-confirm.php", "https://nichescraper.com/billing/receipts", "https://app.humanpal.io/account", "https://members.merchinformer.com/profile", "https://members.merchinformer.com/subscription-settings", "https://members.merchinformer.com/invoices", "https://members.bookbolt.io/profile", "https://members.bookbolt.io/subscription-settings", "https://members.bookbolt.io/invoices", "https://app.aicontentlabs.com/settings", "https://app.aicontentlabs.com/settings/api-keys", "https://app.aicontentlabs.com/settings/subscription", "https://app.aicontentlabs.com/plans?ref=webhooks", "https://app.aicontentlabs.com/settings/team", "https://www.epidemicsound.com/account/subscriptions", "https://www.epidemicsound.com/account/profile", "https://www.epidemicsound.com/account/safelist", "https://www.seoptimer.com/myaccount", "https://www.sellthetrend.com/dashboard/my/settings", "https://www.sellthetrend.com/dashboard/my/password", "https://www.sellthetrend.com/dashboard/my/subscription", "https://www.sellthetrend.com/dashboard/my/billing", "https://app.seositecheckup.com/user/account/profile", "https://app.seositecheckup.com/user/account/billing", "https://app.synthesys.live/settings", "https://www.kittl.com/user/settings/account", "https://www.kittl.com/user/settings/password", "https://www.kittl.com/user/settings/subscription", "https://app.smartscout.com/app/account/settings", "https://app.smartscout.com/app/account/subscription", "https://app.smartscout.com/app/account/billing", "https://app.smartscout.com/app/account/users", "https://app.simplified.com/settings/myaccount", "https://app.simplified.com/settings/email-preferences", "https://app.simplified.com/settings/myworkspace", "https://app.simplified.com/settings/myteamspaces", "https://app.simplified.com/settings", "https://copy.unbounce.com/settings/projects", "https://copy.unbounce.com/settings/personal", "https://copy.unbounce.com/settings/billing", "https://www.creativefabrica.com/my-account/", "https://www.creativefabrica.com/my-account/edit-account/", "https://www.creativefabrica.com/my-account/billing-details/", "https://www.creativefabrica.com/my-account/my-profile/", "https://www.creativefabrica.com/my-account/view-subscription/78402952", "https://www.creativefabrica.com/my-account/orders/", "https://www.creativefabrica.com/my-account/payment-methods/", "https://create.vista.com/user/settings/account/", "https://create.vista.com/user/settings/accounts/", "https://create.vista.com/user/settings/subscription/", "https://create.vista.com/user/settings/billing/", "https://app.videocreator.io/settings#", "https://www.storybase.com/member/", "https://app.keywordchef.com/Identity/Account/Manage/Index", "https://app.keywordchef.com/Identity/Account/Manage/Email", "https://app.keywordchef.com/Identity/Account/Manage/ChangePassword", "https://app.keywordchef.com/Identity/Account/Manage/BillingInformation", "https://app.keywordchef.com/Identity/Account/Manage/PaymentHistory", "https://app.keywordchef.com/Identity/Account/Manage/ManageSubscription", "https://groupbuysseotools.com/auth", "https://groupbuysseotools.com/auth/page", "https://seotoolsgroupsbuy.com", "https://members.azadseo.com", "https://seotoolsbox.net/service/login", "https://members.toolszen.com/login", "https://app.toolsninja.in", "https://app.toolsninja.in/member", "https://seotoolsgroupsbuy.com/login", "https://my.toolshunter.com/login", "https://access.bundledseo.com/login", "https://supremseo.com/dash", "https://members.seotoolshero.com/signup", "https://app.seotoolsmaster.net/login", "https://seotoolsagency.com/members/member", "https://members.hyseotools.com/member", "https://app.toolzbuy.com", "https://toolsfly.com/auth/", "https://app.seoshope.com/login?amember_redirect_url=", "https://app.seoshope.com", "https://app.seoshope.com/login", "https://app.seoshope.com/member", "https://app.toolzbuy.com/member", "https://app.toolzbuy.com/login", "https://app.groupbuyservices.com", "https://app.groupbuyservices.com/login/", "https://my.unlimitedseotools.com/login", "https://my.unlimitedseotools.com", "https://app.gfxtoolz.com/", "https://app.gfxtoolz.com/dashboard", "https://app.evotoolz.in/login/", "https://app.evotoolz.in/", "https://toolszap.com/auth/member", "https://members.starseotools.com/", "https://members.starseotools.com/member", "https://app.toolsmeen.com/", "https://app.toolsmeen.com/member", "https://toolszm.com/member", "https://noxtools.com/secure/login", "https://noxtools.com/secure/member", "https://app.hafizseotools.com", "https://app.hafizseotools.com/member", "https://app.toolempire.net/", "https://app.toolempire.net/login/", "https://app.toolempire.net/dashboard/", "https://app.artistly.ai/profile", "https://app.artistly.ai/my-purchases", "https://plugin.speechki.org/my", "https://plugin.speechki.org/my/billing", "https://plugin.speechki.org/my/settings", "https://boolv.video/resetPwd?step=1&type=reset", "https://boolv.video/premium", "https://app.taplio.com/settings", "https://app.taplio.com/settings?tab=integrations", "https://app.taplio.com/settings?tab=billing", "https://app.taplio.com/settings?tab=team", "https://app.buzzstream.com/settings/wicket:pageMapName/wicket-0", "https://app.illusto.com/mysubscription", "https://app.micmonster.com/profile", "https://app.micmonster.com/payment-history", "https://app.micmonster.com/logout", "https://app.strell.io/dashboard/code", "https://app.strell.io/dashboard/team", "https://app.strell.io/dashboard/settings", "https://app.rankatom.com/dashboard/plan/", "https://app.rankatom.com/dashboard/settings/"];
  chrome.webRequest.onBeforeRequest.addListener(function (_0x247bd0) {
    let _0x5e5c43 = _0x30a07f(_0x247bd0.url);
    let _0x34ea04 = btoa(_0x5e5c43);
    if (_0x2bfd92.includes(_0x247bd0.url) && sessionStorage[_0x34ea04] !== '') {
      return {
        "redirectUrl": "https://member.bdtoolspoint.com/404"
      };
    }
  }, {
    "urls": ["<all_urls>"]
  }, ["blocking"]);
  chrome.cookies.onChanged.addListener(function (_0x202823) {
    if (_0x202823.cause == "explicit" && _0x202823.cookie.domain == ".freepik.com" && _0x202823.cookie.name == "GR_TOKEN") {
      let _0x170311 = btoa(_0x30a07f("https://www.freepik.com/"));
      let _0x2adc34 = _0x202823.cookie.value;
      if (sessionStorage[_0x170311] && sessionStorage[_0x170311] != "abc") {
        var _0x56d797 = JSON.parse(_0x28af78(sessionStorage[_0x170311], false));
        _0x56d797.c = _0x56d797.c.replace(/gr_token=.*?;/gi, "GR_TOKEN=" + _0x2adc34 + ";");
        sessionStorage[_0x170311] = _0x28af78(JSON.stringify(_0x56d797));
      }
    } else {
      if (_0x202823.cause == "explicit" && _0x202823.cookie.domain == ".moz.com" && _0x202823.cookie.name == "_moz_csrf") {
        let _0x5dadd2 = btoa(_0x30a07f("https://www.moz.com/"));
        let _0x28d620 = _0x202823.cookie.value;
        if (sessionStorage[_0x5dadd2] && sessionStorage[_0x5dadd2] != "abc") {
          var _0x56d797 = JSON.parse(_0x28af78(sessionStorage[_0x5dadd2], false));
          _0x56d797.c = _0x56d797.c.replace(/_moz_csrf=.*?;/gi, "_moz_csrf=" + _0x28d620 + ";");
          sessionStorage[_0x5dadd2] = _0x28af78(JSON.stringify(_0x56d797));
        }
      } else {
        if (_0x202823.cause == "explicit" && _0x202823.cookie.domain == "app.writerzen.net" && _0x202823.cookie.name == "XSRF-TOKEN") {
          let _0x1253f9 = btoa(_0x30a07f("https://app.writerzen.net/"));
          let _0x57ab98 = _0x202823.cookie.value;
          if (sessionStorage[_0x1253f9] && sessionStorage[_0x1253f9] != "abc" && _0x57ab98 != "null") {
            let _0x450b0d = new Date().getTime() / 0x3e8 + 0xe10;
            chrome.cookies.set({
              "url": "https://app.writerzen.net/",
              "expirationDate": _0x450b0d,
              "httpOnly": false,
              "name": "XSRF-TOKEN",
              "path": "/",
              "sameSite": "lax",
              "secure": false,
              "value": "null"
            });
            var _0x56d797 = JSON.parse(_0x28af78(sessionStorage[_0x1253f9], false));
            _0x56d797.c = _0x56d797.c.replace(/XSRF-TOKEN=.*?;/gi, "XSRF-TOKEN=" + _0x57ab98 + ";");
            _0x56d797.t = decodeURIComponent(_0x57ab98);
            sessionStorage[_0x1253f9] = _0x28af78(JSON.stringify(_0x56d797));
          }
        }
      }
    }
    if (_0x202823.cause == "explicit" && _0x202823.cookie.domain == "app.writerzen.net" && _0x202823.cookie.name == "writerzen_session") {
      let _0x1a084a = btoa(_0x30a07f("https://app.writerzen.net/"));
      let _0x110d2b = _0x202823.cookie.value;
      if (sessionStorage[_0x1a084a] && sessionStorage[_0x1a084a] != "abc") {
        chrome.cookies.remove({
          "url": "https://app.writerzen.net/",
          "name": "writerzen_session"
        });
        var _0x56d797 = JSON.parse(_0x28af78(sessionStorage[_0x1a084a], false));
        _0x56d797.c = _0x56d797.c.replace(/writerzen_session=.*?;/gi, "writerzen_session=" + _0x110d2b + ";");
        sessionStorage[_0x1a084a] = _0x28af78(JSON.stringify(_0x56d797));
      }
    }
  });
}();
