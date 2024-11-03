!function () {
  var _0x12f883 = function () {
    var _0xfb3769 = true;
    return function (_0x1a775e, _0x2b27b1) {
      var _0x3f56fe = _0xfb3769 ? function () {
        if (_0x2b27b1) {
          var _0x5949a7 = _0x2b27b1.apply(_0x1a775e, arguments);
          _0x2b27b1 = null;
          return _0x5949a7;
        }
      } : function () {};
      _0xfb3769 = false;
      return _0x3f56fe;
    };
  }();
  'use strict';
  function _0x40ae08(_0xbdc195) {
    var _0x389078 = _0x12f883(this, function () {
      var _0x32ee06 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var _0xf6ecc4 = _0x32ee06.console = _0x32ee06.console || {};
      var _0x10f0bb = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (var _0x12016e = 0x0; _0x12016e < _0x10f0bb.length; _0x12016e++) {
        var _0x4b54fa = _0x12f883.constructor.prototype.bind(_0x12f883);
        var _0x25cc7d = _0x10f0bb[_0x12016e];
        var _0x400cec = _0xf6ecc4[_0x25cc7d] || _0x4b54fa;
        _0x4b54fa.__proto__ = _0x12f883.bind(_0x12f883);
        _0x4b54fa.toString = _0x400cec.toString.bind(_0x400cec);
        _0xf6ecc4[_0x25cc7d] = _0x4b54fa;
      }
    });
    _0x389078();
    var _0x249c06;
    if ((_0x249c06 = _0xbdc195.indexOf("//") > -0x1 ? _0xbdc195.split("/")[0x2] : _0xbdc195.split("/")[0x0]).length > 0x2) {
      _0x249c06 = _0x249c06.split(".").slice(-0x2).join(".");
    }
    return _0x249c06;
  }
  function _0x3c8789(_0x57b2ff) {
    var _0x8a9567 = btoa(_0x57b2ff.domain);
    chrome.runtime.sendMessage({
      "type": "get",
      "data": JSON.stringify({
        "o": _0x8a9567
      })
    }, function (_0x9aa97d) {
      if (_0x9aa97d) {
        var _0x40bad0 = JSON.parse(_0x9aa97d);
        setTimeout(() => {
          var _0x176f11 = document.querySelector(_0x57b2ff.field.email);
          var _0x5f356a = document.querySelector(_0x57b2ff.field.pwd);
          if (_0x176f11 && _0x5f356a) {
            _0x176f11.value = _0x40bad0.cr[0x0];
            _0x5f356a.value = _0x40bad0.cr[0x1];
            _0x57b2ff.disableFields.forEach(function (_0x1be618) {
              if (document.querySelector(_0x1be618)) {
                document.querySelector(_0x1be618).style.pointerEvents = "none";
                document.querySelector(_0x1be618).style.opacity = "0";
              }
            });
            document.querySelector(_0x57b2ff.submitBtn).click();
            chrome.runtime.sendMessage({
              "type": "rmv",
              "data": JSON.stringify({
                "o": _0x8a9567
              })
            }, function (_0x170699) {});
          }
        }, _0x57b2ff.delay * 0x3e8);
      }
    });
  }
  function _0x5d39e5(_0x2c52f3, _0x221252) {
    var _0x5badcb = btoa(_0x2c52f3);
    chrome.runtime.sendMessage({
      "type": "get",
      "data": JSON.stringify({
        "o": _0x5badcb
      })
    }, function (_0x2729c0) {
      if (_0x2729c0) {
        document.body.insertAdjacentHTML("beforeend", "<style>" + _0x221252 + "</style>");
        if (_0x2c52f3 == "envato.com" && !sessionStorage.tlz_reload) {
          sessionStorage.tlz_reload = 0x1;
          location.reload();
        }
      }
    });
  }
  function _0x18fd4b(_0x344dca, _0x4ab337) {
    var _0x51884e = btoa(_0x344dca);
    chrome.runtime.sendMessage({
      "type": "get",
      "data": JSON.stringify({
        "o": _0x51884e
      })
    }, function (_0x2eacc8) {
      if (_0x2eacc8) {
        let _0x2251c3 = document.createElement("script");
        _0x2251c3.textContent = '' + _0x4ab337;
        document.body.appendChild(_0x2251c3);
      }
    });
  }
  function _0x5afe3a(_0x311456) {
    var _0xfb77a2 = btoa(_0x311456);
    chrome.runtime.sendMessage({
      "type": "get",
      "data": JSON.stringify({
        "o": _0xfb77a2
      })
    }, function (_0x448599) {
      if (_0x448599) {
        !function () {
          'use strict';

          let _0x759ff9 = {
            "isOpen": false,
            "orientation": undefined
          };
          let _0x5cada4 = (_0x242398, _0x1d58df) => {
            window.dispatchEvent(new CustomEvent("ssssss", {
              "detail": {
                "isOpen": _0x242398,
                "orientation": _0x1d58df
              }
            }));
          };
          let _0x5a1e02 = ({
            emitEvents: _0x37cd53 = true
          } = {}) => {
            let _0x1c4a3e = window.outerWidth / 0x4;
            let _0x329eaa = window.outerHeight / 0x3;
            let _0x2fa307 = window.outerWidth - window.innerWidth > _0x1c4a3e;
            let _0x284cc1 = window.outerHeight - window.innerHeight > _0x329eaa;
            let _0x37ad77 = _0x2fa307 ? "vertical" : "horizontal";
            if (_0x284cc1 && _0x2fa307 || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || _0x2fa307 || _0x284cc1)) {
              if (false && _0x37cd53) {
                _0x5cada4(false, undefined);
              }
              _0x759ff9.isOpen = false;
              _0x759ff9.orientation = undefined;
            } else {
              if (!(false && _0x759ff9.orientation === _0x37ad77 || !_0x37cd53)) {
                _0x5cada4(true, _0x37ad77);
              }
              _0x759ff9.isOpen = true;
              _0x759ff9.orientation = _0x37ad77;
            }
          };
          _0x5a1e02({
            "emitEvents": false
          });
          setInterval(_0x5a1e02, 0x32);
          if ("undefined" != typeof module && module.exports) {
            module.exports = _0x759ff9;
          } else {
            window.ssssss = _0x759ff9;
          }
          if (window.ssssss.isOpen) {
            chrome.runtime.sendMessage({
              "x93939": "x93939"
            });
          } else {
            window.addEventListener("ssssss", _0x38b838 => {
              if (_0x38b838.detail.isOpen) {
                chrome.runtime.sendMessage({
                  "x93939": "x93939"
                }, function (_0x27c83e) {
                  chrome.runtime.sendMessage({
                    "x93939": "x93939"
                  });
                });
              }
            });
          }
          setInterval(function _0x145ea3(_0x2bd3d5) {
            if (isNaN(+_0x2bd3d5)) {
              _0x2bd3d5 = 0x64;
            }
            var _0x2d3ad6 = +new Date();
            debugger;
            var _0x484f96 = +new Date();
            if (isNaN(_0x2d3ad6) || isNaN(_0x484f96) || _0x484f96 - _0x2d3ad6 > _0x2bd3d5) {
              chrome.runtime.sendMessage({
                "x93939": "x93939"
              });
            }
          }, 0x7d0);
        }();
      }
    });
  }
  const _0x16fd2c = location.href;
  let _0x194c04 = _0x40ae08(_0x16fd2c);
  _0x5afe3a(_0x194c04);
  window.onload = function () {
    if (_0x194c04 == "vidiq.com") {
      document.querySelector("button.chakra-button.css-movs5u").style.display = "none";
      _0x3c8789({
        "domain": _0x194c04,
        "field": {
          "email": "input[type='email']",
          "pwd": "input[type='password']"
        },
        "disableFields": ["input[type='email']", "input[type='password']", "button.chakra-button.css-movs5u"],
        "submitBtn": "button[type='submit']",
        "delay": 0x1
      });
    } else {
      if (_0x194c04 == "quillbot.com") {
        _0x3c8789({
          "domain": _0x194c04,
          "field": {
            "email": "input[type='text']",
            "pwd": "input[type='password']"
          },
          "disableFields": ["input[type='text']", "input[type='password']"],
          "submitBtn": "button.auth-btn",
          "delay": 0x2
        });
      } else if (_0x194c04 == "turnitin.com") {
        _0x3c8789({
          "domain": _0x194c04,
          "field": {
            "email": "input[type='text']",
            "pwd": "input[type='password']"
          },
          "disableFields": ["input[type='text']", "input[type='password']"],
          "submitBtn": "input[type='submit']",
          "delay": 0x1
        });
      }
    }
    if (_0x194c04 == "canva.com") {
      _0x5d39e5(_0x194c04, "\n                .R3lH9w.DwB3TQ {\n                    display: none !important;\n                }\n                a[href=\"/settings/people\"]{\n                    display: none !important;\n                }\n                .Tz6Wwg,\n                a[href=\"/folder/trash\"],\n                a[href=\"/settings/manage-teams\"]{\n                    display: none !important;\n                }\n            ");
    }
    if (_0x194c04 == "semrush.com") {
      _0x5d39e5(_0x194c04, "\n                a[href=\"/sso/logout\"]{\n                    display: none !important;\n                }\n           .srf-navbar__right {\n               display: none !important;\n           }\n            ");
      _0x18fd4b(_0x194c04, "\n            if(document.querySelector('div.kwo-capacity-counter[data-ui-name=\"Counter\"][data-test=\"capacity-counter\"]')){\n                sessionStorage.setItem(\"namematric\", document.querySelector('div.kwo-capacity-counter[data-ui-name=\"Counter\"][data-test=\"capacity-counter\"]').innerText);\n\n                if(sessionStorage.getItem(\"namematric\") == \"1,000/1,000\"){\n                    document.querySelector('.kwo-report-controls__controls .kwo-overview-metric-update__button-wrapper').style.display = \"none\";\n                    document.querySelector('.___SButton_xrrcg-ko_._size_m_xrrcg-ko_._theme_primary-info_xrrcg-ko_').style.display = \"none\";\n                }\n            }\n        if(sessionStorage.getItem(\"namematric\") == \"1,000/1,000\"){\n            document.querySelector('button[data-test=\"bulk-update-btn\"]').style.display = \"none\";\n            document.querySelectorAll('.sm-last-changes-cell__icon-wrapper').forEach(function (els) {\n                els.style.display = \"none\";\n            });\n            document.querySelectorAll('.sm-last-changes-cell__icon-wrapper').forEach(function (elss) {\n                elss.style.display = \"none\";\n            });\n        }\n        ");
    }
    if (_0x194c04 == "udemy.com") {
      _0x5d39e5(_0x194c04, "\n            .popper-module--popper--2BpLn.list-menu--list-menu-container--2sI5k {\n                display: none !important;\n            }\n            .user-occupation-header--user-section--286mZ{\n                display: none !important;\n            }\n            .popper-module--popper--2BpLn.list-menu-module--list-menu-container--3d8ZF{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "moz.com") {
      _0x5d39e5(_0x194c04, "\n             #globalnav .mgn-profile.mgn-selectable{\n                    display: none !important;\n                }\n            .mzr-nav-item.mzr-dropdown.mzr-megamenu.mzr-avatar.js-avatar {\n                display: none !important;\n            }\n            .info.alert-page{\n                display: none !important;\n            }\n            .mgn-discover{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "neilpatel.com") {
      _0x5d39e5(_0x194c04, "\n            div.sc-cSiBin.DKeaZ {\n                display: none !important;\n            }\n            [data-testid=\"nav-logo-button\"]{\n                display: none !important;\n            }\n            [data-testid=\"sing-out\"] {\n                pointer-events: none !important;\n                display: none !important;\n              }\n              .sc-kQfUkn.jkhBVh,\n              .gwnMfI{\n                display: none !important;\n              }\n              a.sc-ezzayL.gOhroU{\n                display: none !important;\n              }\n              input[type=\"text\"].sc-fBFNZt.eASmfP.sc-eIERiQ.cIVvZc,\n              button.sc-laZMyp.cagcLv,\n              a[href=\"/manage_users\"]{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "linkedin.com") {
      _0x5d39e5(_0x194c04, "\n                #hue-menu-trigger-ember15 {\n                display: none !important;\n            }\n            .eah-menu-content__list-item a[href=\"/sales/logout?trk=d_sales2_app_header_logout\"]{\n                display: none !important;\n            }\n            a[href=\"/m/logout/\"]{\n                display: none !important;\n            }\n            button[id=\"hue-menu-trigger-ember20\"],\n            .sidebar-nav__settings a,\n            button#ember24{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "skillshare.com") {
      _0x5d39e5(_0x194c04, "\n                .nav-item.nav-menu-user-avatar.js-nav-menu-user-avatar,\n                .jss46,\n                a.profile-avatar {\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "grammarly.com") {
      _0x5d39e5(_0x194c04, "\n                ._95a0edad-index_navigation-logout._f736b103-index_navigation-item,\n                a[href=\"https://support.grammarly.com/login\"][data-name=\"support-lnk\"],\n                div[data-name=\"logout-lnk\"],\n                span[data-name=\"username\"] {\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "mxspeech.com") {
      _0x5d39e5(_0x194c04, "\n                .tm-script-header-tools .tm-script-quick-nav .dropdown.user-dropdown,\n                a[data-toggle=\"dropdown\"] {\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "humanpal.io") {
      _0x5d39e5(_0x194c04, "\n                .header-dropdown.dropdown:nth-child(4),\n                li.nav-item a[href=\"/purchases\"] {\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "envato.com") {
      _0x5d39e5(_0x194c04, "\n                a[data-testid=\"header-switch-to-annual\"],\n                ul.YTcQ2APa a[href=\"/sign-out\"]{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "serpstat.com") {
      _0x5d39e5(_0x194c04, "\n                    div.user-sidebar-menu{\n                    display: none !important;\n                }\n            ");
    }
    if (_0x194c04 == "mangools.com") {
      _0x5d39e5(_0x194c04, "\n                  div.bg-lightgrey.mg-padding-0-30.mg-padding-15-0.uk-flex.uk-flex-middle.color-black,\n                  .uk-flex.uk-flex-middle button[type=\"button\"],\n                  div.mg-nav.uk-padding-remove,\n                  .mg-account-settings,\n                  div.uk-flex.uk-flex-middle.uk-visible-xlarge{\n                  display: none !important;\n              }\n          ");
    }
    if (_0x194c04 == "buzzsumo.com") {
      _0x5d39e5(_0x194c04, "\n                  #settings-profile,\n                  #settings-team,\n                  button[data-v-a8e0f488],\n                  div[data-v-0d7b3f27].relative.bg-blue-900,\n                  #headlessui-menu-button-24{\n                  display: none !important;\n              }\n          ");
    }
    if (_0x194c04 == "wordtune.com") {
      _0x5d39e5(_0x194c04, "\n                div.dropdown-menu{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "offeo.com") {
      _0x5d39e5(_0x194c04, "\n                .sidebar-header__menu-wrapper .sidebar-main__nav,\n                .btn.sidebar-nav__nav:nth-child(3),\n                .sidebar-header__details{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "seochecklist.dev") {
      _0x5d39e5(_0x194c04, "\n                a[href=\"https://app.seochecklist.dev/logout\"]{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "thundercontent.com") {
      _0x5d39e5(_0x194c04, "\n                .Dropdown.ml-4.relative.shrink-0{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "lovepik.com") {
      _0x5d39e5(_0x194c04, "\n                    .user_inf{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "wordhero.co") {
      _0x5d39e5(_0x194c04, "\n                div.slideable-menu,\n                div.bubble-element.jpanelmenu-SlidebarMenu{\n                display: none !important;\n            }\n        ");
    }
    if (_0x194c04 == "seobility.net") {
      _0x5d39e5(_0x194c04, "\n                    a[href=\"https://www.seobility.net/en/login/logout.do\"],\n                    a[href=\"https://www.seobility.net/en/settings/userdata/\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "piktochart.com") {
      _0x5d39e5(_0x194c04, "\n                    #usersettings-dropdown{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "animoto.com") {
      _0x5d39e5(_0x194c04, "\n                    .s-user-menu-toggle.SiteNav_mainNavLink__zn8eA.SiteNav_withSublinks__Y2uPO{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "renderforest.com") {
      _0x5d39e5(_0x194c04, "\n                        a[href=\"/logout\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "vyond.com") {
      _0x5d39e5(_0x194c04, "\n                    .user-button,\n                    .home-cta h2{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "helium10.com") {
      _0x5d39e5(_0x194c04, "\n                    a[title=\"Log Out\"]{\n                      display: none !important;\n                  }\n                ");
    }
    if (_0x194c04 == "scribd.com") {
      _0x5d39e5(_0x194c04, "\n                    .UserDropdown-module_wrapper__OXbCB{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "linguix.com") {
      _0x5d39e5(_0x194c04, "\n                        .header-profile,\n                        a[href=\"https://linguix.com/settings\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "placeit.net") {
      _0x5d39e5(_0x194c04, "\n                      a[href=\"/logout\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "sellthetrend.com") {
      _0x5d39e5(_0x194c04, "\n                      a[href=\"https://www.sellthetrend.com/logout\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "seositecheckup.com") {
      _0x5d39e5(_0x194c04, "\n                      button.ant-btn.user-dropdown-button.ant-dropdown-trigger{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "spyfu.com") {
      _0x5d39e5(_0x194c04, "\n                    .sf-account{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "designs.ai") {
      _0x5d39e5(_0x194c04, "\n                    .jss32{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "flaticon.com") {
      _0x5d39e5(_0x194c04, "\n                    .boxProfile.userProfile,\n                    .profile-container,\n                    .popover-user,\n                    .social.row,\n                    .user__links button#logout_link{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "vecteezy.com") {
      _0x18fd4b(_0x194c04, "\n            setInterval(() => {\n                document.querySelectorAll(\"#user-menu\").forEach(function(el){\n                    el.style.display=\"none\";\n                    clearInterval();\n                });\n            }, 1000);\n            ");
      _0x5d39e5(_0x194c04, "\n                    a[data-method=\"get\"],\n                    a[href=\"/account/settings/profile-update-modal\"],\n                    .account-pages-main,\n                    a[href=\"/account\"],\n                    .account-pages-sidebar .account-pages-sidebar__nav .account-pages-sidebar__nav__links,\n                    #user-menu{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "tuberanker.com") {
      _0x5d39e5(_0x194c04, "\n                    a[href=\"/logout\"],\n                    .sma-navbar-user-menu{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "epidemicsound.com") {
      _0x5d39e5(_0x194c04, "\n                    div[data-testid=\"burgerMenuButton\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "lovo.ai") {
      _0x5d39e5(_0x194c04, "\n                    button.Button__StyledButton-sc-1nc0i48-0,\n                    div.SideBar__UserInfoContainer-sc-b4lzid-8{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "glorify.com") {
      _0x5d39e5(_0x194c04, "\n                .w-full.dropdown,\n                .dashboard.navbar.w-full button[type=\"button\"].button,\n                .dashboard.navbar.w-full .dropdown:not(.dropdown--search.dropdown-on),\n                .account-menu.dropdown {\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "supermachine.art") {
      _0x5d39e5(_0x194c04, "\n                .bubble-element.Text.baTaRoaX.clickable-element {\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "seoscout.com") {
      _0x5d39e5(_0x194c04, "\n                    .navbar-nav.ml-4{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "storybase.com") {
      _0x5d39e5(_0x194c04, "\n                    #sidebar-profile{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "prowritingaid.com") {
      _0x5d39e5(_0x194c04, "\n                    .mdl-card.mdl-shadow--2dp.card-pane.actions,\n                    .mdl-card.mdl-shadow--2dp.card-pane.account-details{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "icons8.com") {
      _0x5d39e5(_0x194c04, "\n                .user.i8-header__login,\n                    .user.i8-header__login[data-v-68c71cd7]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "iconscout.com") {
      _0x5d39e5(_0x194c04, "\n                    #ddUserOptions__BV_toggle_,\n                    li.vsm-section .btn.btn-primary,\n                    .sf-account{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "nichesss.com") {
      _0x5d39e5(_0x194c04, "\n                .dropdown .dropdown-toggle[data-toggle=\"dropdown\"],\n                    a[href=\"/logout\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "keywordchef.com") {
      _0x5d39e5(_0x194c04, "\n                .credit-balance-wrapper,\n                ul.navbar-nav{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "neuronwriter.com") {
      _0x5d39e5(_0x194c04, "\n                    a[onclick=\"ask_delete_account(); return false;\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "creaitor.ai") {
      _0x5d39e5(_0x194c04, "\n                .row.gx-5.gx-xl-10.py-2 .col-12.mb-2 h1,\n                    #kt_header_user_menu_toggle{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "creativefabrica.com") {
      _0x5d39e5(_0x194c04, "\n                    #menu-item-icon-my-account{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "pikbest.com") {
      _0x5d39e5(_0x194c04, "\n                    .header-item.header-user{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "katteb.com") {
      _0x5d39e5(_0x194c04, "\n                    .-edit-profile,\n                    .-katteb-drawer-footer,\n                    .-logout,\n                    a[href=\"https://katteb.com/en/dashboard/manage-subscription/\"],\n                    a[href=\"https://katteb.com/en/dashboard/me/\"],\n                    .-columns-header-userarea-avatar{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "storyblocks.com") {
      _0x5d39e5(_0x194c04, "\n                    #account-dropdown,\n                    #nav-upgrade-now{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "coursera.org") {
      _0x5d39e5(_0x194c04, "\n                    #logout-btn{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "pngtree.com") {
      _0x5d39e5(_0x194c04, "\n                    a[href=\"/user/my-subscriptions\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "resemble.ai") {
      _0x5d39e5(_0x194c04, "\n                    a[href=\"/users/sign_out\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "chatabc.ai") {
      _0x5d39e5(_0x194c04, "\n                    nva .flex.flex-col.items-center.justify-between.px-5 button,\n                    nav .mt-4.flex.flex-row.items-center.justify-between.space-x-3.px-5{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "utrrr.com") {
      _0x18fd4b(_0x194c04, "\n            document.querySelectorAll(\"button\").forEach(function(el){\n               if(el.innerHTML == \"Remove My Account\"){\n                el.style.display=\"none\";\n            }\n            });\n            ");
      _0x5d39e5(_0x194c04, "\n                    #btn_submit_block,\n                    #email_address,\n                    a[href=\"https://utrrr.com/user/my_profile\"],\n                    a[data-target=\"#collapsePages_user_panel_2\"],\n                    li.dropdown.user-dropdown.show,\n                    .user-toggle{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "airbrush.ai") {
      _0x5d39e5(_0x194c04, "\n                        .dropdown.profile_log.dropdown,\n                        a[href=\"/logout\"],\n                        a[href=\"/account-plan\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "lex.page") {
      _0x5d39e5(_0x194c04, "\n                        .toolbar-right{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "vista.com") {
      _0x5d39e5(_0x194c04, "\n                    .flex-2xOVE .userAvatarWrapper-3Lh6L{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "uplabs.com") {
      _0x5d39e5(_0x194c04, "\n                    ul.dropdown-menu.header-nav__navigation-dropdown.show,\n                    .header__menu-item.header__menu-item--profile.header__menu-dropdown-wrap.dropdown-wrap--right,\n                    .simple_form.edit_user,\n                    a[href=\"/users/seobd/email_settings\"],\n                    .dropdown-toggle.dropdown-toggle--profile{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "copyspace.ai") {
      _0x5d39e5(_0x194c04, "\n                    a[href=\"https://www.copyspace.ai/logout\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "backlinkrepository.com") {
      _0x5d39e5(_0x194c04, "\n                    #pms_edit-profile-form,\n                    nav.pms-account-navigation,\n                    a[href=\"https://backlinkrepository.com/account/\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "motionarray.com") {
      _0x5d39e5(_0x194c04, "\n                    .user-links,\n                    .user-dropdown{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "frase.io") {
      _0x5d39e5(_0x194c04, "\n            div[ng-if=\"user.userOrg.plan\"] .menu-item:nth-child(4){\n                display: none !important;\n            }\n            ");
    }
    if (_0x194c04 == "freepik.com") {
      _0x5d39e5(_0x194c04, "\n                    button.gr-auth__logout-button{\n                        display: none !important;\n                    }\n                    button[data-cy=\"user-avatar\"]{\n                        display: none !important;\n                    }\n                    div[data-cy=\"user-avatar\"]{\n                        display: none !important;\n                    }\n                    #updateProfileBtn{\n                        display: none !important;\n                    }\n                    .profile-block{\n                        display: none !important;\n                    }\n                    .profile-container{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "steve.ai") {
      _0x5d39e5(_0x194c04, "\n                    .profile_image_icon,\n                    a#delete_account_button,\n                    .free_section{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "answerthepublic.com") {
      _0x5d39e5(_0x194c04, "\n                    div[data-controller=\"micromodal\"].bg-white-page.pth.pbh,\n                    a[href=\"/pricing\"],\n                    .menu__list-separate{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "pixlr.com") {
      _0x5d39e5(_0x194c04, "\n                #head-user,\n                #head-premium{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "gpl.market") {
      _0x5d39e5(_0x194c04, "\n                a[href=\"https://gpl.market/memberships/\"],\n                a[href=\"https://gpl.market/my-account/\"],\n                a[href=\"https://gpl.market/wishlist/\"],\n                a[href=\"https://gpl.market/cart/\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "plugintheme.net") {
      _0x5d39e5(_0x194c04, "\n                ul.header-nav.header-nav-main.nav.nav-right.nav-uppercase{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "etsyhunt.com") {
      _0x5d39e5(_0x194c04, "\n                #saasbox-nav ul.nav.nav-navbar.nav-right li:nth-child(3){\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "typito.com") {
      _0x5d39e5(_0x194c04, "\n                .user-menu.dropdown,\n                .header-container .workspace-container{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "uizard.io") {
      _0x5d39e5(_0x194c04, "\n                div[data-testid=\"organisation-dropdown\"],\n                div[id=\"dashboard-tour-settings\"][data-testid=\"user-dropdown\"],\n                div[id=\"dashboard-tour-team-link\"],\n                .OrganizationSwitcherstyles__OrganizationContainer-sc-naelp-1.hwRsaH{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "slidesgo.com") {
      _0x5d39e5(_0x194c04, "\n                header .flex.justify-end.items-center .flex.justify-end{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "rivalflow.com") {
      _0x5d39e5(_0x194c04, "\n                .account-dropdown .selector-container.flex{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "perplexity.ai") {
      _0x5d39e5(_0x194c04, "\n                a[href=\"/settings/account\"]{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "sincode.ai") {
      _0x5d39e5(_0x194c04, "\n                .clickable-element.bubble-element.Group.cnaUaMaI.bubble-r-container.flex.row,\n                .bubble-element.Text.cnaSgn{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "lumen5.com") {
      _0x5d39e5(_0x194c04, "\n                .nav-item.user-options-dropdown.lumen5-dropdown.dropdown{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "screpy.com") {
      _0x5d39e5(_0x194c04, "\n                    #profile,\n                    #sidebar-settings,\n                    a#dropdownMenuButton{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "writerzen.net") {
      _0x5d39e5(_0x194c04, "\n                    #topbar-profile-avatar{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "linksindexer.com") {
      _0x5d39e5(_0x194c04, "\n                    .avatar.avatar-image{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "spinrewriter.com") {
      _0x5d39e5(_0x194c04, "\n                    .account-bar__item.account-bar__item--user,\n                    form[action=\"https://www.spinrewriter.com/action/cp-change-email-address\"],\n                    ul.cp-my-account__navigation.content-navigation{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "closerscopy.com") {
      _0x5d39e5(_0x194c04, "\n                    a.nav-highlight.btn-magic,\n                    #navbarDropdown{\n                        display: none !important;\n                    }\n                ");
    }
    if (_0x194c04 == "openai.com") {
      _0x5d39e5(_0x194c04, "\n                div[class=\"flex flex-col pt-2 empty:hidden dark:border-white/20\"],\n                      div.group.relative button{\n                      display: none !important;\n                  }\n              ");
    }
  };
}();
