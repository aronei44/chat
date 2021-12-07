"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Index_js"],{

/***/ "./resources/js/Pages/Index.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./resources/js/Pages/Layout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Left = function Left(_ref) {
  var message = _ref.message,
      date = _ref.date,
      clock = _ref.clock;
  clock = clock.split(':');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "row ms-3 mt-1 me-3 scroll",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "col-md-8 card left",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: message
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "col-md-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: "small",
        children: [date, " ", clock[0], ":", clock[1]]
      })
    })]
  });
};

var Right = function Right(_ref2) {
  var message = _ref2.message,
      date = _ref2.date,
      clock = _ref2.clock;
  clock = clock.split(':');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "row me-3 mt-1 ms-3 scroll",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "col-md-3 second",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: "small",
        children: [date, " ", clock[0], ":", clock[1]]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "col-md-8 card right first",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: message
      })
    })]
  });
};

function Index(_ref3) {
  var user = _ref3.user,
      room = _ref3.room,
      auth = _ref3.auth;
  var navHeight = "120";
  var sideHeight = window.innerHeight - navHeight;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      messages = _useState4[0],
      setMessages = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      users = _useState8[0],
      setUsers = _useState8[1];

  var searchUser = function searchUser() {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('/search', {
      name: search
    }).then(function (data) {
      return setUsers(data.data.data);
    });
  };

  var send = function send() {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/send/".concat(room.id), {
      body: message
    }).then(function (data) {
      return setMessages(data.data.data);
    });
  };

  Echo.channel('Notification').listen('.message', function (e) {
    if (e.room.id === room.id) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("/messages/".concat(room.id)).then(function (data) {
        return setMessages(data.data.data.messages);
      });
    }
  });

  if (user !== undefined) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("/messages/".concat(room.id)).then(function (data) {
        return setMessages(data.data.data.messages);
      });
      return function () {
        setMessages([]);
      };
    }, []);
    setTimeout(function () {
      var elem = document.querySelectorAll('.scroll');
      var len = elem.length - 1;

      if (len > 0) {
        elem[len].scrollIntoView();
      }
    }, 1);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      auth: auth,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
        title: user.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
        className: "navbar navbar-light bg-light",
        style: {
          height: navHeight
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "navbar-brand mb-0 h1",
            children: user.name
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "card",
        style: {
          height: sideHeight,
          maxHeight: sideHeight,
          overflow: "auto"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "list-group",
          id: "scroll",
          children: messages.map(function (data, index) {
            if (data.from === user.id) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Left, {
                message: data.body,
                date: data.date,
                clock: data.clock
              }, index);
            } else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Right, {
                message: data.body,
                date: data.date,
                clock: data.clock
              }, index);
            }
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "d-flex mx-2 mt-2 mb-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          className: "form-control me-2",
          type: "text",
          placeholder: "Tulis Pesan Anda",
          "aria-label": "Search",
          value: message,
          onChange: function onChange(e) {
            return setMessage(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "btn btn-outline-success",
          type: "button",
          onClick: function onClick() {
            send();
            setMessage('');
          },
          children: "Kirim"
        })]
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      auth: auth,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
        title: "Welcome"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-center mt-5 mb-5",
          children: "Selamat Datang Di Aplikasi Chat"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "bg-light container",
          style: {
            padding: '20px',
            borderRadius: "20px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "d-flex mx-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              className: "form-control me-2",
              type: "search",
              placeholder: "Mulai Cari Teman Chat Anda (username only)",
              "aria-label": "Search",
              value: search,
              onChange: function onChange(e) {
                return setSearch(e.target.value);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "btn btn-success",
              type: "button",
              onClick: function onClick() {
                return searchUser();
              },
              children: "Cari"
            })]
          }), users.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "list-group mt-3 mb-3",
            style: {
              height: sideHeight - 200,
              overflow: 'auto'
            },
            children: users.map(function (user, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                href: "/chat/" + user.email,
                className: "list-group-item list-group-item-action mx-auto",
                style: {
                  width: "80%"
                },
                children: [user.name, " - ", user.email]
              });
            })
          }) : '']
        })]
      })]
    });
  }
}

/***/ }),

/***/ "./resources/js/Pages/Layout.js":
/*!**************************************!*\
  !*** ./resources/js/Pages/Layout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Layout(_ref) {
  var children = _ref.children,
      auth = _ref.auth;
  var csrf = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.csrf;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var navHeight = "120";
  var sideHeight = window.innerHeight - navHeight;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios.get('/user').then(function (data) {
      return setUsers(data.data.data);
    });
    return function () {
      setUsers([]);
    };
  }, []);
  Echo.channel('Notification').listen('.message', function (e) {
    if (e.room.user1_id === auth.id || e.room.user2_id) {
      axios.get('/user').then(function (data) {
        return setUsers(data.data.data);
      });
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "col-3  bg-light",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
          className: "navbar navbar-light bg-light",
          style: {
            height: navHeight
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "container-fluid",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/",
              className: "navbar-brand mb-0 h1",
              children: "Chat"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              className: "btn btn-danger",
              onClick: function onClick() {
                _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post('/logout', {
                  csrf: csrf
                });
                window.location.href = "/login";
              },
              children: "Logout"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "d-flex mx-2 mt-2 mb-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            className: "form-control me-2",
            type: "search",
            placeholder: "Cari Chat",
            "aria-label": "Search"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn btn-outline-success",
            type: "submit",
            children: "Cari"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "card",
          style: {
            height: sideHeight,
            maxHeight: sideHeight,
            overflow: "auto"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "list-group",
            children: users.map(function (data, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/chat/" + data.user.email,
                className: "list-group-item list-group-item-action",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "d-flex w-100 justify-content-between",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                    className: "mb-1",
                    children: data.user.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "d-flex w-100 justify-content-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
                    className: "text-muted",
                    children: data.message.body
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
                    className: "text-muted",
                    children: data.message.clock
                  })]
                })]
              }, index);
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "col-9",
        children: children
      })]
    })
  });
}

/***/ })

}]);