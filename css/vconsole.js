!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.VConsole = t())
    : (e.VConsole = t());
})(this, function () {
  return (function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var a = (o[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports;
    }
    var o = {};
    return (t.m = e), (t.c = o), (t.p = ""), t(0);
  })([
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = o(1),
        i = n(a),
        r = o(17),
        l = n(r);
      (i["default"].VConsolePlugin = l["default"]),
        (t["default"] = i["default"]),
        (e.exports = t["default"]);
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        l = o(2),
        c = a(l),
        s = o(3),
        d = n(s),
        u = o(4),
        v = a(u);
      o(6);
      var f = o(10),
        p = a(f),
        h = o(11),
        b = a(h),
        g = o(12),
        m = a(g),
        y = o(13),
        _ = a(y),
        w = o(14),
        x = a(w),
        k = o(15),
        C = a(k),
        T = o(23),
        O = a(T),
        E = o(25),
        S = a(E),
        L = o(29),
        j = a(L),
        N = o(36),
        P = a(N),
        M = "#__vconsole",
        A = (function () {
          function e(t) {
            if ((i(this, e), v["default"].one(M)))
              return void console.debug("vConsole is already exists.");
            var o = this;
            if (
              ((this.version = c["default"].version),
              (this.$dom = null),
              (this.isInited = !1),
              (this.option = {
                defaultPlugins: ["system", "network", "element", "storage"],
              }),
              (this.activedTab = ""),
              (this.tabList = []),
              (this.pluginList = {}),
              (this.switchPos = {
                x: 10,
                y: 10,
                startX: 0,
                startY: 0,
                endX: 0,
                endY: 0,
              }),
              (this.tool = d),
              (this.$ = v["default"]),
              d.isObject(t))
            )
              for (var n in t) this.option[n] = t[n];
            this._addBuiltInPlugins();
            var a = function () {
              o.isInited ||
                (o._render(), o._mockTap(), o._bindEvent(), o._autoRun());
            };
            void 0 !== document
              ? "complete" == document.readyState
                ? a()
                : v["default"].bind(window, "load", a)
              : !(function () {
                  var e = void 0,
                    t = function o() {
                      document && "complete" == document.readyState
                        ? (e && clearTimeout(e), a())
                        : (e = setTimeout(o, 1));
                    };
                  e = setTimeout(t, 1);
                })();
          }
          return (
            r(e, [
              {
                key: "_addBuiltInPlugins",
                value: function () {
                  this.addPlugin(new C["default"]("default", "Log"));
                  var e = this.option.defaultPlugins,
                    t = {
                      system: { proto: O["default"], name: "System" },
                      network: { proto: S["default"], name: "Network" },
                      element: { proto: j["default"], name: "Element" },
                      storage: { proto: P["default"], name: "Storage" },
                    };
                  if (e && d.isArray(e))
                    for (var o = 0; o < e.length; o++) {
                      var n = t[e[o]];
                      n
                        ? this.addPlugin(new n.proto(e[o], n.name))
                        : console.debug(
                            "Unrecognized default plugin ID:",
                            e[o]
                          );
                    }
                },
              },
              {
                key: "_render",
                value: function () {
                  if (!v["default"].one(M)) {
                    var e = document.createElement("div");
                    (e.innerHTML = p["default"]),
                      document.documentElement.insertAdjacentElement(
                        "beforeend",
                        e.children[0]
                      );
                  }
                  this.$dom = v["default"].one(M);
                  var t = v["default"].one(".vc-switch", this.$dom),
                    o = 1 * d.getStorage("switch_x"),
                    n = 1 * d.getStorage("switch_y");
                  (o || n) &&
                    (o + t.offsetWidth > document.documentElement.offsetWidth &&
                      (o =
                        document.documentElement.offsetWidth - t.offsetWidth),
                    n + t.offsetHeight >
                      document.documentElement.offsetHeight &&
                      (n =
                        document.documentElement.offsetHeight - t.offsetHeight),
                    0 > o && (o = 0),
                    0 > n && (n = 0),
                    (this.switchPos.x = o),
                    (this.switchPos.y = n),
                    (v["default"].one(".vc-switch").style.right = o + "px"),
                    (v["default"].one(".vc-switch").style.bottom = n + "px"));
                  var a = window.devicePixelRatio || 1,
                    i = document.querySelector('[name="viewport"]');
                  if (i && i.content) {
                    var r = i.content.match(/initial\-scale\=\d+(\.\d+)?/),
                      l = r ? parseFloat(r[0].split("=")[1]) : 1;
                    1 > l && (this.$dom.style.fontSize = 13 * a + "px");
                  }
                  v["default"].one(".vc-mask", this.$dom).style.display =
                    "none";
                },
              },
              {
                key: "_mockTap",
                value: function () {
                  var e = 700,
                    t = 10,
                    o = void 0,
                    n = void 0,
                    a = void 0,
                    i = !1,
                    r = null;
                  this.$dom.addEventListener(
                    "touchstart",
                    function (e) {
                      if (void 0 === o) {
                        var t = e.targetTouches[0];
                        (n = t.pageX),
                          (a = t.pageY),
                          (o = e.timeStamp),
                          (r =
                            e.target.nodeType === Node.TEXT_NODE
                              ? e.target.parentNode
                              : e.target);
                      }
                    },
                    !1
                  ),
                    this.$dom.addEventListener("touchmove", function (e) {
                      var o = e.changedTouches[0];
                      (Math.abs(o.pageX - n) > t ||
                        Math.abs(o.pageY - a) > t) &&
                        (i = !0);
                    }),
                    this.$dom.addEventListener(
                      "touchend",
                      function (t) {
                        if (i === !1 && t.timeStamp - o < e && null != r) {
                          var n = r.tagName.toLowerCase(),
                            a = !1;
                          switch (n) {
                            case "textarea":
                              a = !0;
                              break;
                            case "input":
                              switch (r.type) {
                                case "button":
                                case "checkbox":
                                case "file":
                                case "image":
                                case "radio":
                                case "submit":
                                  a = !1;
                                  break;
                                default:
                                  a = !r.disabled && !r.readOnly;
                              }
                          }
                          a ? r.focus() : t.preventDefault();
                          var l = t.changedTouches[0],
                            c = document.createEvent("MouseEvents");
                          c.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            window,
                            1,
                            l.screenX,
                            l.screenY,
                            l.clientX,
                            l.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            (c.forwardedTouchEvent = !0),
                            c.initEvent("click", !0, !0),
                            r.dispatchEvent(c);
                        }
                        (o = void 0), (i = !1), (r = null);
                      },
                      !1
                    );
                },
              },
              {
                key: "_bindEvent",
                value: function () {
                  var e = this,
                    t = v["default"].one(".vc-switch", e.$dom);
                  v["default"].bind(t, "touchstart", function (t) {
                    (e.switchPos.startX = t.touches[0].pageX),
                      (e.switchPos.startY = t.touches[0].pageY);
                  }),
                    v["default"].bind(t, "touchend", function (t) {
                      (e.switchPos.x = e.switchPos.endX),
                        (e.switchPos.y = e.switchPos.endY),
                        (e.switchPos.startX = 0),
                        (e.switchPos.startY = 0),
                        (e.switchPos.endX = 0),
                        (e.switchPos.endY = 0),
                        d.setStorage("switch_x", e.switchPos.x),
                        d.setStorage("switch_y", e.switchPos.y);
                    }),
                    v["default"].bind(t, "touchmove", function (o) {
                      if (o.touches.length > 0) {
                        var n = o.touches[0].pageX - e.switchPos.startX,
                          a = o.touches[0].pageY - e.switchPos.startY,
                          i = e.switchPos.x - n,
                          r = e.switchPos.y - a;
                        i + t.offsetWidth >
                          document.documentElement.offsetWidth &&
                          (i =
                            document.documentElement.offsetWidth -
                            t.offsetWidth),
                          r + t.offsetHeight >
                            document.documentElement.offsetHeight &&
                            (r =
                              document.documentElement.offsetHeight -
                              t.offsetHeight),
                          0 > i && (i = 0),
                          0 > r && (r = 0),
                          (t.style.right = i + "px"),
                          (t.style.bottom = r + "px"),
                          (e.switchPos.endX = i),
                          (e.switchPos.endY = r),
                          o.preventDefault();
                      }
                    }),
                    v["default"].bind(
                      v["default"].one(".vc-switch", e.$dom),
                      "click",
                      function () {
                        e.show();
                      }
                    ),
                    v["default"].bind(
                      v["default"].one(".vc-hide", e.$dom),
                      "click",
                      function () {
                        e.hide();
                      }
                    ),
                    v["default"].bind(
                      v["default"].one(".vc-mask", e.$dom),
                      "click",
                      function (t) {
                        return t.target != v["default"].one(".vc-mask")
                          ? !1
                          : void e.hide();
                      }
                    ),
                    v["default"].delegate(
                      v["default"].one(".vc-tabbar", e.$dom),
                      "click",
                      ".vc-tab",
                      function (t) {
                        var o = this.dataset.tab;
                        o != e.activedTab && e.showTab(o);
                      }
                    ),
                    v["default"].bind(
                      v["default"].one(".vc-panel", e.$dom),
                      "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
                      function (t) {
                        return t.target != v["default"].one(".vc-panel")
                          ? !1
                          : void (
                              v["default"].hasClass(e.$dom, "vc-toggle") ||
                              (t.target.style.display = "none")
                            );
                      }
                    );
                  var o = v["default"].one(".vc-content", e.$dom),
                    n = !1;
                  v["default"].bind(o, "touchstart", function (e) {
                    var t = o.scrollTop,
                      a = o.scrollHeight,
                      i = t + o.offsetHeight;
                    0 === t
                      ? ((o.scrollTop = 1),
                        0 === o.scrollTop &&
                          (v["default"].hasClass(e.target, "vc-cmd-input") ||
                            (n = !0)))
                      : i === a &&
                        ((o.scrollTop = t - 1),
                        o.scrollTop === t &&
                          (v["default"].hasClass(e.target, "vc-cmd-input") ||
                            (n = !0)));
                  }),
                    v["default"].bind(o, "touchmove", function (e) {
                      n && e.preventDefault();
                    }),
                    v["default"].bind(o, "touchend", function (e) {
                      n = !1;
                    });
                },
              },
              {
                key: "_autoRun",
                value: function () {
                  this.isInited = !0;
                  for (var e in this.pluginList)
                    this._initPlugin(this.pluginList[e]);
                  this.tabList.length > 0 && this.showTab(this.tabList[0]);
                },
              },
              {
                key: "_initPlugin",
                value: function (e) {
                  var t = this;
                  (e.vConsole = this),
                    e.trigger("init"),
                    e.trigger("renderTab", function (o) {
                      t.tabList.push(e.id);
                      var n = v["default"].render(b["default"], {
                        id: e.id,
                        name: e.name,
                      });
                      v["default"]
                        .one(".vc-tabbar", t.$dom)
                        .insertAdjacentElement("beforeend", n);
                      var a = v["default"].render(m["default"], { id: e.id });
                      o &&
                        (d.isString(o)
                          ? (a.innerHTML += o)
                          : d.isFunction(o.appendTo)
                          ? o.appendTo(a)
                          : d.isElement(o) &&
                            a.insertAdjacentElement("beforeend", o)),
                        v["default"]
                          .one(".vc-content", t.$dom)
                          .insertAdjacentElement("beforeend", a);
                    }),
                    e.trigger("addTopBar", function (o) {
                      if (o)
                        for (
                          var n = v["default"].one(".vc-topbar", t.$dom),
                            a = function (t) {
                              var a = o[t],
                                i = v["default"].render(_["default"], {
                                  name: a.name || "Undefined",
                                  className: a.className || "",
                                  pluginID: e.id,
                                });
                              if (a.data)
                                for (var r in a.data) i.dataset[r] = a.data[r];
                              d.isFunction(a.onClick) &&
                                v["default"].bind(i, "click", function (t) {
                                  var o = a.onClick.call(i);
                                  o === !1 ||
                                    (v["default"].removeClass(
                                      v["default"].all(".vc-topbar-" + e.id),
                                      "vc-actived"
                                    ),
                                    v["default"].addClass(i, "vc-actived"));
                                }),
                                n.insertAdjacentElement("beforeend", i);
                            },
                            i = 0;
                          i < o.length;
                          i++
                        )
                          a(i);
                    }),
                    e.trigger("addTool", function (o) {
                      if (o)
                        for (
                          var n = v["default"].one(".vc-tool-last", t.$dom),
                            a = function (t) {
                              var a = o[t],
                                i = v["default"].render(x["default"], {
                                  name: a.name || "Undefined",
                                  pluginID: e.id,
                                });
                              1 == a.global &&
                                v["default"].addClass(i, "vc-global-tool"),
                                d.isFunction(a.onClick) &&
                                  v["default"].bind(i, "click", function (e) {
                                    a.onClick.call(i);
                                  }),
                                n.parentNode.insertBefore(i, n);
                            },
                            i = 0;
                          i < o.length;
                          i++
                        )
                          a(i);
                    }),
                    e.trigger("ready");
                },
              },
              {
                key: "_triggerPluginsEvent",
                value: function (e) {
                  for (var t in this.pluginList) this.pluginList[t].trigger(e);
                },
              },
              {
                key: "_triggerPluginEvent",
                value: function (e, t) {
                  var o = this.pluginList[e];
                  o && o.trigger(t);
                },
              },
              {
                key: "addPlugin",
                value: function (e) {
                  return void 0 !== this.pluginList[e.id]
                    ? (console.debug(
                        "Plugin " + e.id + " has already been added."
                      ),
                      !1)
                    : ((this.pluginList[e.id] = e),
                      this.isInited &&
                        (this._initPlugin(e),
                        1 == this.tabList.length &&
                          this.showTab(this.tabList[0])),
                      !0);
                },
              },
              {
                key: "removePlugin",
                value: function (e) {
                  e = (e + "").toLowerCase();
                  var t = this.pluginList[e];
                  if (void 0 === t)
                    return (
                      console.debug("Plugin " + e + " does not exist."), !1
                    );
                  if ((t.trigger("remove"), this.isInited)) {
                    var o = v["default"].one("#__vc_tab_" + e);
                    o && o.parentNode.removeChild(o);
                    for (
                      var n = v["default"].all(".vc-topbar-" + e, this.$dom),
                        a = 0;
                      a < n.length;
                      a++
                    )
                      n[a].parentNode.removeChild(n[a]);
                    var i = v["default"].one("#__vc_log_" + e);
                    i && i.parentNode.removeChild(i);
                    for (
                      var r = v["default"].all(".vc-tool-" + e, this.$dom),
                        l = 0;
                      l < r.length;
                      l++
                    )
                      r[l].parentNode.removeChild(r[l]);
                  }
                  var c = this.tabList.indexOf(e);
                  c > -1 && this.tabList.splice(c, 1);
                  try {
                    delete this.pluginList[e];
                  } catch (s) {
                    this.pluginList[e] = void 0;
                  }
                  return (
                    this.activedTab == e &&
                      this.tabList.length > 0 &&
                      this.showTab(this.tabList[0]),
                    !0
                  );
                },
              },
              {
                key: "show",
                value: function () {
                  if (this.isInited) {
                    var e = this,
                      t = v["default"].one(".vc-panel", this.$dom);
                    (t.style.display = "block"),
                      setTimeout(function () {
                        v["default"].addClass(e.$dom, "vc-toggle"),
                          e._triggerPluginsEvent("showConsole");
                        var t = v["default"].one(".vc-mask", e.$dom);
                        t.style.display = "block";
                      }, 10);
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  if (this.isInited) {
                    v["default"].removeClass(this.$dom, "vc-toggle"),
                      this._triggerPluginsEvent("hideConsole");
                    var e = v["default"].one(".vc-mask", this.$dom),
                      t = v["default"].one(".vc-panel", this.$dom);
                    v["default"].bind(e, "transitionend", function (o) {
                      (e.style.display = "none"), (t.style.display = "none");
                    });
                  }
                },
              },
              {
                key: "showTab",
                value: function (e) {
                  if (this.isInited) {
                    var t = v["default"].one("#__vc_log_" + e);
                    v["default"].removeClass(
                      v["default"].all(".vc-tab", this.$dom),
                      "vc-actived"
                    ),
                      v["default"].addClass(
                        v["default"].one("#__vc_tab_" + e),
                        "vc-actived"
                      ),
                      v["default"].removeClass(
                        v["default"].all(".vc-logbox", this.$dom),
                        "vc-actived"
                      ),
                      v["default"].addClass(t, "vc-actived");
                    var o = v["default"].all(".vc-topbar-" + e, this.$dom);
                    v["default"].removeClass(
                      v["default"].all(".vc-toptab", this.$dom),
                      "vc-toggle"
                    ),
                      v["default"].addClass(o, "vc-toggle"),
                      o.length > 0
                        ? v["default"].addClass(
                            v["default"].one(".vc-content", this.$dom),
                            "vc-has-topbar"
                          )
                        : v["default"].removeClass(
                            v["default"].one(".vc-content", this.$dom),
                            "vc-has-topbar"
                          ),
                      v["default"].removeClass(
                        v["default"].all(".vc-tool", this.$dom),
                        "vc-toggle"
                      ),
                      v["default"].addClass(
                        v["default"].all(".vc-tool-" + e, this.$dom),
                        "vc-toggle"
                      ),
                      this._triggerPluginEvent(this.activedTab, "hide"),
                      (this.activedTab = e),
                      this._triggerPluginEvent(this.activedTab, "show");
                  }
                },
              },
              {
                key: "setOption",
                value: function (e, t) {
                  if (d.isString(e))
                    (this.option[e] = t),
                      this._triggerPluginsEvent("updateOption");
                  else if (d.isObject(e)) {
                    for (var o in e) this.option[o] = e[o];
                    this._triggerPluginsEvent("updateOption");
                  } else
                    console.debug(
                      "The first parameter of vConsole.setOption() must be a string or an object."
                    );
                },
              },
              {
                key: "destroy",
                value: function () {
                  if (this.isInited) {
                    for (
                      var e = Object.keys(this.pluginList), t = e.length - 1;
                      t >= 0;
                      t--
                    )
                      this.removePlugin(e[t]);
                    this.$dom.parentNode.removeChild(this.$dom);
                  }
                },
              },
            ]),
            e
          );
        })();
      (t["default"] = A), (e.exports = t["default"]);
    },
    function (e, t) {
      e.exports = {
        name: "vconsole",
        version: "3.0.0",
        description:
          "A lightweight, extendable front-end developer tool for mobile web page.",
        homepage: "https://github.com/Tencent/vConsole",
        main: "dist/vconsole.min.js",
        scripts: { test: "mocha", dist: "webpack" },
        keywords: ["console", "debug", "mobile"],
        repository: {
          type: "git",
          url: "git+https://github.com/Tencent/vConsole.git",
        },
        dependencies: {},
        devDependencies: {
          "babel-core": "^6.7.7",
          "babel-loader": "^6.2.4",
          "babel-plugin-add-module-exports": "^0.1.4",
          "babel-preset-es2015": "^6.6.0",
          "babel-preset-stage-3": "^6.5.0",
          chai: "^3.5.0",
          "css-loader": "^0.23.1",
          "extract-text-webpack-plugin": "^1.0.1",
          "html-loader": "^0.4.3",
          jsdom: "^9.2.1",
          "json-loader": "^0.5.4",
          less: "^2.5.3",
          "less-loader": "^2.2.3",
          mocha: "^2.5.3",
          "style-loader": "^0.13.1",
          webpack: "~1.12.11",
        },
        author: "Tencent",
        license: "MIT",
      };
    },
    function (e, t) {
      "use strict";
      function o(e) {
        var t = e > 0 ? new Date(e) : new Date(),
          o = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
          n = t.getMonth() < 9 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
          a = t.getFullYear(),
          i = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
          r = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
          l = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(),
          c =
            t.getMilliseconds() < 10
              ? "0" + t.getMilliseconds()
              : t.getMilliseconds();
        return (
          100 > c && (c = "0" + c),
          {
            time: +t,
            year: a,
            month: n,
            day: o,
            hour: i,
            minute: r,
            second: l,
            millisecond: c,
          }
        );
      }
      function n(e) {
        return "[object Number]" == Object.prototype.toString.call(e);
      }
      function a(e) {
        return "[object String]" == Object.prototype.toString.call(e);
      }
      function i(e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      }
      function r(e) {
        return "[object Boolean]" == Object.prototype.toString.call(e);
      }
      function l(e) {
        return "[object Undefined]" == Object.prototype.toString.call(e);
      }
      function c(e) {
        return "[object Null]" == Object.prototype.toString.call(e);
      }
      function s(e) {
        return "[object Symbol]" == Object.prototype.toString.call(e);
      }
      function d(e) {
        return !(
          "[object Object]" != Object.prototype.toString.call(e) &&
          (n(e) || a(e) || r(e) || i(e) || c(e) || u(e) || l(e) || s(e))
        );
      }
      function u(e) {
        return "[object Function]" == Object.prototype.toString.call(e);
      }
      function v(e) {
        return "object" ===
          ("undefined" == typeof HTMLElement ? "undefined" : w(HTMLElement))
          ? e instanceof HTMLElement
          : e &&
              "object" === ("undefined" == typeof e ? "undefined" : w(e)) &&
              null !== e &&
              1 === e.nodeType &&
              "string" == typeof e.nodeName;
      }
      function f(e) {
        var t = Object.prototype.toString.call(e);
        return (
          "[object global]" == t ||
          "[object Window]" == t ||
          "[object DOMWindow]" == t
        );
      }
      function p(e) {
        var t = Object.prototype.hasOwnProperty;
        if (
          !e ||
          "object" !== ("undefined" == typeof e ? "undefined" : w(e)) ||
          e.nodeType ||
          f(e)
        )
          return !1;
        try {
          if (
            e.constructor &&
            !t.call(e, "constructor") &&
            !t.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (o) {
          return !1;
        }
        var n = void 0;
        for (n in e);
        return void 0 === n || t.call(e, n);
      }
      function h(e) {
        return document
          .createElement("a")
          .appendChild(document.createTextNode(e)).parentNode.innerHTML;
      }
      function b(e) {
        var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? "	"
              : arguments[1],
          o =
            arguments.length <= 2 || void 0 === arguments[2]
              ? "CIRCULAR_DEPENDECY_OBJECT"
              : arguments[2],
          n = [],
          a = JSON.stringify(
            e,
            function (e, t) {
              if (
                "object" === ("undefined" == typeof t ? "undefined" : w(t)) &&
                null !== t
              ) {
                if (~n.indexOf(t)) return o;
                n.push(t);
              }
              return t;
            },
            t
          );
        return (n = null), a;
      }
      function g(e) {
        if (!d(e) && !i(e)) return [];
        var t = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          o = [];
        for (var n in e) t.indexOf(n) < 0 && o.push(n);
        return (o = o.sort());
      }
      function m(e) {
        return Object.prototype.toString
          .call(e)
          .replace("[object ", "")
          .replace("]", "");
      }
      function y(e, t) {
        window.localStorage &&
          ((e = "vConsole_" + e), localStorage.setItem(e, t));
      }
      function _(e) {
        return window.localStorage
          ? ((e = "vConsole_" + e), localStorage.getItem(e))
          : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var w =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol
                ? "symbol"
                : typeof e;
            };
      (t.getDate = o),
        (t.isNumber = n),
        (t.isString = a),
        (t.isArray = i),
        (t.isBoolean = r),
        (t.isUndefined = l),
        (t.isNull = c),
        (t.isSymbol = s),
        (t.isObject = d),
        (t.isFunction = u),
        (t.isElement = v),
        (t.isWindow = f),
        (t.isPlainObject = p),
        (t.htmlEncode = h),
        (t.JSONStringify = b),
        (t.getObjAllKeys = g),
        (t.getObjName = m),
        (t.setStorage = y),
        (t.getStorage = _);
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = o(3),
        i = o(5),
        r = n(i),
        l = {};
      (l.one = function (e, t) {
        return t ? t.querySelector(e) : document.querySelector(e);
      }),
        (l.all = function (e, t) {
          var o = void 0,
            n = [];
          return (
            (o = t ? t.querySelectorAll(e) : document.querySelectorAll(e)),
            o && o.length > 0 && (n = Array.prototype.slice.call(o)),
            n
          );
        }),
        (l.addClass = function (e, t) {
          if (e) {
            (0, a.isArray)(e) || (e = [e]);
            for (var o = 0; o < e.length; o++) {
              var n = e[o].className || "",
                i = n.split(" ");
              i.indexOf(t) > -1 || (i.push(t), (e[o].className = i.join(" ")));
            }
          }
        }),
        (l.removeClass = function (e, t) {
          if (e) {
            (0, a.isArray)(e) || (e = [e]);
            for (var o = 0; o < e.length; o++) {
              for (var n = e[o].className.split(" "), i = 0; i < n.length; i++)
                n[i] == t && (n[i] = "");
              e[o].className = n.join(" ").trim();
            }
          }
        }),
        (l.hasClass = function (e, t) {
          if (!e) return !1;
          for (var o = e.className.split(" "), n = 0; n < o.length; n++)
            if (o[n] == t) return !0;
          return !1;
        }),
        (l.bind = function (e, t, o, n) {
          if (e) {
            void 0 === n && (n = !1), (0, a.isArray)(e) || (e = [e]);
            for (var i = 0; i < e.length; i++) e[i].addEventListener(t, o, n);
          }
        }),
        (l.delegate = function (e, t, o, n) {
          e &&
            e.addEventListener(
              t,
              function (t) {
                var a = l.all(o, e);
                if (a)
                  e: for (var i = 0; i < a.length; i++)
                    for (var r = t.target; r; ) {
                      if (r == a[i]) {
                        n.call(r, t);
                        break e;
                      }
                      if (((r = r.parentNode), r == e)) break;
                    }
              },
              !1
            );
        }),
        (l.render = r["default"]),
        (t["default"] = l),
        (e.exports = t["default"]);
    },
    function (e, t) {
      "use strict";
      function o(e, t, o) {
        var n = /\{\{([^\}]+)\}\}/g,
          a = "",
          i = "",
          r = 0,
          l = [],
          c = function (e, t) {
            "" !== e &&
              (a += t
                ? e.match(/^ ?else/g)
                  ? "} " + e + " {\n"
                  : e.match(/\/(if|for|switch)/g)
                  ? "}\n"
                  : e.match(/^ ?if|for|switch/g)
                  ? e + " {\n"
                  : e.match(/^ ?(break|continue) ?$/g)
                  ? e + ";\n"
                  : e.match(/^ ?(case|default)/g)
                  ? e + ":\n"
                  : "arr.push(" + e + ");\n"
                : 'arr.push("' + e.replace(/"/g, '\\"') + '");\n');
          };
        for (
          window.__mito_data = t,
            window.__mito_code = "",
            window.__mito_result = "",
            e = e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, "$1{{"),
            e = e.replace(/^\n/, "").replace(/\n/g, "\\\n"),
            i = "(function(){\n",
            a = "var arr = [];\n";
          (l = n.exec(e));

        )
          c(e.slice(r, l.index), !1), c(l[1], !0), (r = l.index + l[0].length);
        c(e.substr(r, e.length - r), !1),
          (a += '__mito_result = arr.join("");'),
          (a = "with (__mito_data) {\n" + a + "\n}"),
          (i += a),
          (i += "})();");
        var s = document.getElementsByTagName("script"),
          d = "";
        s.length > 0 && (d = s[0].getAttribute("nonce") || "");
        var u = document.createElement("SCRIPT");
        (u.innerHTML = i),
          u.setAttribute("nonce", d),
          document.documentElement.appendChild(u);
        var v = __mito_result;
        if ((document.documentElement.removeChild(u), !o)) {
          var f = document.createElement("DIV");
          (f.innerHTML = v), (v = f.children[0]);
        }
        return v;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = o),
        (e.exports = t["default"]);
    },
    function (e, t, o) {
      var n = o(7);
      "string" == typeof n && (n = [[e.id, n, ""]]);
      o(9)(n, {});
      n.locals && (e.exports = n.locals);
    },
    function (e, t, o) {
      (t = e.exports = o(8)()),
        t.push([
          e.id,
          '#__vconsole{color:#000;font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#__vconsole .vc-max-height{max-height:19.23076923em}#__vconsole .vc-max-height-line{max-height:3.38461538em}#__vconsole .vc-min-height{min-height:3.07692308em}#__vconsole dd,#__vconsole dl,#__vconsole pre{margin:0}#__vconsole .vc-switch{display:block;position:fixed;right:.76923077em;bottom:.76923077em;color:#fff;background-color:#04be02;line-height:1;font-size:1.07692308em;padding:.61538462em 1.23076923em;z-index:10000;border-radius:.30769231em;box-shadow:0 0 .61538462em rgba(0,0,0,.4)}#__vconsole .vc-mask{top:0;background:transparent;z-index:10001;transition:background .3s;-webkit-tap-highlight-color:transparent;overflow-y:scroll}#__vconsole .vc-mask,#__vconsole .vc-panel{display:none;position:fixed;left:0;right:0;bottom:0}#__vconsole .vc-panel{min-height:85%;z-index:10002;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}#__vconsole .vc-tabbar{border-bottom:1px solid #d9d9d9;overflow-x:auto;height:3em;width:auto;white-space:nowrap}#__vconsole .vc-tabbar .vc-tab{display:inline-block;line-height:3em;padding:0 1.15384615em;border-right:1px solid #d9d9d9;text-decoration:none;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-tabbar .vc-tab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-tabbar .vc-tab.vc-actived{background-color:#fff}#__vconsole .vc-content{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:absolute;top:3.07692308em;left:0;right:0;bottom:3.07692308em;-webkit-overflow-scrolling:touch}#__vconsole .vc-content.vc-has-topbar{top:5.46153846em}#__vconsole .vc-topbar{background-color:#fbf9fe;display:flex;display:-webkit-box;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;width:100%}#__vconsole .vc-topbar .vc-toptab{display:none;flex:1;-webkit-box-flex:1;line-height:2.30769231em;padding:0 1.15384615em;border-bottom:1px solid #d9d9d9;text-decoration:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-topbar .vc-toptab.vc-toggle{display:block}#__vconsole .vc-topbar .vc-toptab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid #3e82f7}#__vconsole .vc-logbox{display:none;position:relative;min-height:100%}#__vconsole .vc-logbox i{font-style:normal}#__vconsole .vc-logbox .vc-log{padding-bottom:3em;-webkit-tap-highlight-color:transparent}#__vconsole .vc-logbox .vc-log:empty:before{content:"Empty";color:#999;position:absolute;top:45%;left:0;right:0;bottom:0;font-size:1.15384615em;text-align:center}#__vconsole .vc-logbox .vc-item{margin:0;padding:.46153846em .61538462em;overflow:hidden;line-height:1.3;border-bottom:1px solid #eee;word-break:break-word}#__vconsole .vc-logbox .vc-item-info{color:#6a5acd}#__vconsole .vc-logbox .vc-item-debug{color:#daa520}#__vconsole .vc-logbox .vc-item-warn{color:orange;border-color:#ffb930;background-color:#fffacd}#__vconsole .vc-logbox .vc-item-error{color:#dc143c;border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item{display:none}#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error,#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn{display:block}#__vconsole .vc-logbox .vc-item .vc-item-content{margin-right:4.61538462em;display:block}#__vconsole .vc-logbox .vc-item .vc-item-meta{color:#888;float:right;width:4.61538462em;text-align:right}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-content{margin-right:0}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-meta{display:none}#__vconsole .vc-logbox .vc-item .vc-item-code{display:block;white-space:pre-wrap;overflow:auto;position:relative}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output{padding-left:.92307692em}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\203A";position:absolute;top:-.23076923em;left:0;font-size:1.23076923em;color:#6a5acd}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\2039"}#__vconsole .vc-logbox .vc-item .vc-fold{display:block;overflow:auto;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer{display:block;font-style:italic;padding-left:.76923077em;position:relative}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before{content:"";position:absolute;top:.30769231em;left:.15384615em;width:0;height:0;border:.30769231em solid transparent;border-left-color:#000}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before{top:.46153846em;left:0;border-top-color:#000;border-left-color:transparent}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner{display:none;margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle{display:block}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key{margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key{margin-left:0}#__vconsole .vc-logbox .vc-code-key{color:#905}#__vconsole .vc-logbox .vc-code-private-key{color:#d391b5}#__vconsole .vc-logbox .vc-code-function{color:#905;font-style:italic}#__vconsole .vc-logbox .vc-code-boolean,#__vconsole .vc-logbox .vc-code-number{color:#0086b3}#__vconsole .vc-logbox .vc-code-string{color:#183691}#__vconsole .vc-logbox .vc-code-null,#__vconsole .vc-logbox .vc-code-undefined{color:#666}#__vconsole .vc-logbox .vc-cmd{position:absolute;height:3.07692308em;left:0;right:0;bottom:0;border-top:1px solid #d9d9d9;display:block!important}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap{display:block;height:2.15384615em;margin-right:3.07692308em;padding:.46153846em .61538462em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:.92307692em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder{line-height:2.15384615em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn{position:absolute;top:0;right:0;bottom:0;width:3.07692308em;border:none;background-color:#efeff4;outline:none;-webkit-touch-callout:none;font-size:1em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-logbox .vc-group .vc-group-preview{-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-group .vc-group-preview:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-group .vc-group-detail{display:none;padding:0 0 .76923077em 1.53846154em;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail{display:block;background-color:#fbf9fe}#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row{background-color:#fff}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview{background-color:#fbf9fe}#__vconsole .vc-logbox .vc-table .vc-table-row{display:flex;display:-webkit-flex;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;overflow:hidden;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border{border-left:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-col{flex:1;-webkit-box-flex:1;padding:.23076923em .30769231em;border-left:1px solid #eee;overflow:auto;white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-table .vc-table-col:first-child{border:none}#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col{padding:0 .30769231em;font-size:.92307692em}#__vconsole .vc-logbox .vc-table .vc-table-col-2{flex:2;-webkit-box-flex:2}#__vconsole .vc-logbox .vc-table .vc-table-col-3{flex:3;-webkit-box-flex:3}#__vconsole .vc-logbox .vc-table .vc-table-col-4{flex:4;-webkit-box-flex:4}#__vconsole .vc-logbox .vc-table .vc-table-col-5{flex:5;-webkit-box-flex:5}#__vconsole .vc-logbox .vc-table .vc-table-col-6{flex:6;-webkit-box-flex:6}#__vconsole .vc-logbox .vc-table .vc-table-row-error{border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col{color:#dc143c;border-color:#f4a0ab}#__vconsole .vc-logbox .vc-table .vc-table-col-title{font-weight:700}#__vconsole .vc-logbox.vc-actived{display:block}#__vconsole .vc-toolbar{border-top:1px solid #d9d9d9;line-height:3em;position:absolute;left:0;right:0;bottom:0;display:flex;display:-webkit-box;flex-direction:row;-webkit-box-direction:row}#__vconsole .vc-toolbar .vc-tool{display:none;text-decoration:none;color:#000;width:50%;flex:1;-webkit-box-flex:1;text-align:center;position:relative;-webkit-touch-callout:none}#__vconsole .vc-toolbar .vc-tool.vc-global-tool,#__vconsole .vc-toolbar .vc-tool.vc-toggle{display:block}#__vconsole .vc-toolbar .vc-tool:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-toolbar .vc-tool:after{content:" ";position:absolute;top:.53846154em;bottom:.53846154em;right:0;border-left:1px solid #d9d9d9}#__vconsole .vc-toolbar .vc-tool-last:after{border:none}#__vconsole.vc-toggle .vc-switch{display:none}#__vconsole.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}#__vconsole.vc-toggle .vc-panel{-webkit-transform:translate(0);transform:translate(0)}',
          "",
        ]);
    },
    function (e, t) {
      "use strict";
      e.exports = function () {
        var e = [];
        return (
          (e.toString = function () {
            for (var e = [], t = 0; t < this.length; t++) {
              var o = this[t];
              o[2] ? e.push("@media " + o[2] + "{" + o[1] + "}") : e.push(o[1]);
            }
            return e.join("");
          }),
          (e.i = function (t, o) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var n = {}, a = 0; a < this.length; a++) {
              var i = this[a][0];
              "number" == typeof i && (n[i] = !0);
            }
            for (a = 0; a < t.length; a++) {
              var r = t[a];
              ("number" == typeof r[0] && n[r[0]]) ||
                (o && !r[2]
                  ? (r[2] = o)
                  : o && (r[2] = "(" + r[2] + ") and (" + o + ")"),
                e.push(r));
            }
          }),
          e
        );
      };
    },
    function (e, t, o) {
      function n(e, t) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o],
            a = f[n.id];
          if (a) {
            a.refs++;
            for (var i = 0; i < a.parts.length; i++) a.parts[i](n.parts[i]);
            for (; i < n.parts.length; i++) a.parts.push(s(n.parts[i], t));
          } else {
            for (var r = [], i = 0; i < n.parts.length; i++)
              r.push(s(n.parts[i], t));
            f[n.id] = { id: n.id, refs: 1, parts: r };
          }
        }
      }
      function a(e) {
        for (var t = [], o = {}, n = 0; n < e.length; n++) {
          var a = e[n],
            i = a[0],
            r = a[1],
            l = a[2],
            c = a[3],
            s = { css: r, media: l, sourceMap: c };
          o[i] ? o[i].parts.push(s) : t.push((o[i] = { id: i, parts: [s] }));
        }
        return t;
      }
      function i(e, t) {
        var o = b(),
          n = y[y.length - 1];
        if ("top" === e.insertAt)
          n
            ? n.nextSibling
              ? o.insertBefore(t, n.nextSibling)
              : o.appendChild(t)
            : o.insertBefore(t, o.firstChild),
            y.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          o.appendChild(t);
        }
      }
      function r(e) {
        e.parentNode.removeChild(e);
        var t = y.indexOf(e);
        t >= 0 && y.splice(t, 1);
      }
      function l(e) {
        var t = document.createElement("style");
        return (t.type = "text/css"), i(e, t), t;
      }
      function c(e) {
        var t = document.createElement("link");
        return (t.rel = "stylesheet"), i(e, t), t;
      }
      function s(e, t) {
        var o, n, a;
        if (t.singleton) {
          var i = m++;
          (o = g || (g = l(t))),
            (n = d.bind(null, o, i, !1)),
            (a = d.bind(null, o, i, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((o = c(t)),
              (n = v.bind(null, o)),
              (a = function () {
                r(o), o.href && URL.revokeObjectURL(o.href);
              }))
            : ((o = l(t)),
              (n = u.bind(null, o)),
              (a = function () {
                r(o);
              }));
        return (
          n(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              n((e = t));
            } else a();
          }
        );
      }
      function d(e, t, o, n) {
        var a = o ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, a);
        else {
          var i = document.createTextNode(a),
            r = e.childNodes;
          r[t] && e.removeChild(r[t]),
            r.length ? e.insertBefore(i, r[t]) : e.appendChild(i);
        }
      }
      function u(e, t) {
        var o = t.css,
          n = t.media;
        if ((n && e.setAttribute("media", n), e.styleSheet))
          e.styleSheet.cssText = o;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(o));
        }
      }
      function v(e, t) {
        var o = t.css,
          n = t.sourceMap;
        n &&
          (o +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
            " */");
        var a = new Blob([o], { type: "text/css" }),
          i = e.href;
        (e.href = URL.createObjectURL(a)), i && URL.revokeObjectURL(i);
      }
      var f = {},
        p = function (e) {
          var t;
          return function () {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
          };
        },
        h = p(function () {
          return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
        }),
        b = p(function () {
          return document.head || document.getElementsByTagName("head")[0];
        }),
        g = null,
        m = 0,
        y = [];
      e.exports = function (e, t) {
        (t = t || {}),
          "undefined" == typeof t.singleton && (t.singleton = h()),
          "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var o = a(e);
        return (
          n(o, t),
          function (e) {
            for (var i = [], r = 0; r < o.length; r++) {
              var l = o[r],
                c = f[l.id];
              c.refs--, i.push(c);
            }
            if (e) {
              var s = a(e);
              n(s, t);
            }
            for (var r = 0; r < i.length; r++) {
              var c = i[r];
              if (0 === c.refs) {
                for (var d = 0; d < c.parts.length; d++) c.parts[d]();
                delete f[c.id];
              }
            }
          }
        );
      };
      var _ = (function () {
        var e = [];
        return function (t, o) {
          return (e[t] = o), e.filter(Boolean).join("\n");
        };
      })();
    },
    function (e, t) {
      e.exports =
        '<div id="__vconsole" class="">\n  <div class="vc-switch">vConsole</div>\n  <div class="vc-mask">\n  </div>\n  <div class="vc-panel">\n    <div class="vc-tabbar">\n    </div>\n    <div class="vc-topbar">\n    </div>\n    <div class="vc-content">\n    </div>\n    <div class="vc-toolbar">\n      <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a>\n    </div>\n  </div>\n</div>';
    },
    function (e, t) {
      e.exports =
        '<a class="vc-tab" data-tab="{{id}}" id="__vc_tab_{{id}}">{{name}}</a>';
    },
    function (e, t) {
      e.exports = '<div class="vc-logbox" id="__vc_log_{{id}}">\n  \n</div>';
    },
    function (e, t) {
      e.exports =
        '<a class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>';
    },
    function (e, t) {
      e.exports = '<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>';
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        s = function w(e, t, o) {
          null === e && (e = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(e, t);
          if (void 0 === n) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : w(a, t, o);
          }
          if ("value" in n) return n.value;
          var i = n.get;
          if (void 0 !== i) return i.call(o);
        },
        d = o(4),
        u = a(d),
        v = o(3),
        f = n(v),
        p = o(16),
        h = a(p),
        b = o(21),
        g = a(b),
        m = o(22),
        y = a(m),
        _ = (function (e) {
          function t() {
            var e;
            i(this, t);
            for (var o = arguments.length, n = Array(o), a = 0; o > a; a++)
              n[a] = arguments[a];
            var l = r(
              this,
              (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))
            );
            return (l.tplTabbox = g["default"]), (l.windowOnError = null), l;
          }
          return (
            l(t, e),
            c(t, [
              {
                key: "onReady",
                value: function () {
                  var e = this;
                  s(Object.getPrototypeOf(t.prototype), "onReady", this).call(
                    this
                  ),
                    u["default"].bind(
                      u["default"].one(".vc-cmd", this.$tabbox),
                      "submit",
                      function (t) {
                        t.preventDefault();
                        var o = u["default"].one(".vc-cmd-input", t.target),
                          n = o.value;
                        (o.value = ""), "" !== n && e.evalCommand(n);
                      }
                    );
                  var o = "";
                  (o += "if (!!window) {"),
                    (o += "window.__vConsole_cmd_result = undefined;"),
                    (o += "window.__vConsole_cmd_error = false;"),
                    (o += "}");
                  var n = document.getElementsByTagName("script"),
                    a = "";
                  n.length > 0 && (a = n[0].getAttribute("nonce") || "");
                  var i = document.createElement("SCRIPT");
                  (i.innerHTML = o),
                    i.setAttribute("nonce", a),
                    document.documentElement.appendChild(i),
                    document.documentElement.removeChild(i);
                },
              },
              {
                key: "mockConsole",
                value: function () {
                  s(
                    Object.getPrototypeOf(t.prototype),
                    "mockConsole",
                    this
                  ).call(this);
                  var e = this;
                  f.isFunction(window.onerror) &&
                    (this.windowOnError = window.onerror),
                    (window.onerror = function (t, o, n, a, i) {
                      var r = t;
                      o && (r += "\n" + o.replace(location.origin, "")),
                        (n || a) && (r += ":" + n + ":" + a),
                        e.printLog({
                          logType: "error",
                          logs: [r],
                          noOrigin: !0,
                        }),
                        f.isFunction(e.windowOnError) &&
                          e.windowOnError.call(window, t, o, n, a, i);
                    });
                },
              },
              {
                key: "evalCommand",
                value: function (e) {
                  this.printLog({
                    logType: "log",
                    content: u["default"].render(y["default"], {
                      content: e,
                      type: "input",
                    }),
                    noMeta: !0,
                    style: "",
                  });
                  var t = "";
                  (t += "try {\n"),
                    (t += "window.__vConsole_cmd_result = (function() {\n"),
                    (t += "return " + e + ";\n"),
                    (t += "})();\n"),
                    (t += "window.__vConsole_cmd_error = false;\n"),
                    (t += "} catch (e) {\n"),
                    (t += "window.__vConsole_cmd_result = e.message;\n"),
                    (t += "window.__vConsole_cmd_error = true;\n"),
                    (t += "}");
                  var o = document.getElementsByTagName("script"),
                    n = "";
                  o.length > 0 && (n = o[0].getAttribute("nonce") || "");
                  var a = document.createElement("SCRIPT");
                  (a.innerHTML = t),
                    a.setAttribute("nonce", n),
                    document.documentElement.appendChild(a);
                  var i = window.__vConsole_cmd_result,
                    r = window.__vConsole_cmd_error;
                  if ((document.documentElement.removeChild(a), 0 == r)) {
                    var l = void 0;
                    f.isArray(i) || f.isObject(i)
                      ? (l = this.getFoldedLine(i))
                      : (f.isNull(i)
                          ? (i = "null")
                          : f.isUndefined(i)
                          ? (i = "undefined")
                          : f.isFunction(i)
                          ? (i = "function()")
                          : f.isString(i) && (i = '"' + i + '"'),
                        (l = u["default"].render(y["default"], {
                          content: i,
                          type: "output",
                        }))),
                      this.printLog({
                        logType: "log",
                        content: l,
                        noMeta: !0,
                        style: "",
                      });
                  } else
                    this.printLog({
                      logType: "error",
                      logs: [i],
                      noMeta: !0,
                      style: "",
                    });
                },
              },
            ]),
            t
          );
        })(h["default"]);
      (t["default"] = _), (e.exports = t["default"]);
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol
                  ? "symbol"
                  : typeof e;
              },
        s = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        d = o(3),
        u = a(d),
        v = o(4),
        f = n(v),
        p = o(17),
        h = n(p),
        b = o(18),
        g = n(b),
        m = o(19),
        y = n(m),
        _ = o(20),
        w = n(_),
        x = 1e3,
        k = (function (e) {
          function t() {
            var e;
            i(this, t);
            for (var o = arguments.length, n = Array(o), a = 0; o > a; a++)
              n[a] = arguments[a];
            var l = r(
              this,
              (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))
            );
            return (
              (l.tplTabbox = ""),
              (l.allowUnformattedLog = !0),
              (l.isReady = !1),
              (l.isShow = !1),
              (l.$tabbox = null),
              (l.console = {}),
              (l.logList = []),
              (l.isInBottom = !0),
              (l.maxLogNumber = x),
              (l.logNumber = 0),
              l.mockConsole(),
              l
            );
          }
          return (
            l(t, e),
            s(t, [
              {
                key: "onInit",
                value: function () {
                  (this.$tabbox = f["default"].render(this.tplTabbox, {})),
                    this.updateMaxLogNumber();
                },
              },
              {
                key: "onRenderTab",
                value: function (e) {
                  e(this.$tabbox);
                },
              },
              {
                key: "onAddTopBar",
                value: function (e) {
                  for (
                    var t = this,
                      o = ["All", "Log", "Info", "Warn", "Error"],
                      n = [],
                      a = 0;
                    a < o.length;
                    a++
                  )
                    n.push({
                      name: o[a],
                      data: { type: o[a].toLowerCase() },
                      className: "",
                      onClick: function () {
                        return f["default"].hasClass(this, "vc-actived")
                          ? !1
                          : void t.showLogType(this.dataset.type || "all");
                      },
                    });
                  (n[0].className = "vc-actived"), e(n);
                },
              },
              {
                key: "onAddTool",
                value: function (e) {
                  var t = this,
                    o = [
                      {
                        name: "Clear",
                        global: !1,
                        onClick: function () {
                          t.clearLog();
                        },
                      },
                    ];
                  e(o);
                },
              },
              {
                key: "onReady",
                value: function () {
                  var e = this;
                  e.isReady = !0;
                  var t = f["default"].all(".vc-subtab", e.$tabbox);
                  f["default"].bind(t, "click", function (o) {
                    if (
                      (o.preventDefault(),
                      f["default"].hasClass(this, "vc-actived"))
                    )
                      return !1;
                    f["default"].removeClass(t, "vc-actived"),
                      f["default"].addClass(this, "vc-actived");
                    var n = this.dataset.type,
                      a = f["default"].one(".vc-log", e.$tabbox);
                    f["default"].removeClass(a, "vc-log-partly-log"),
                      f["default"].removeClass(a, "vc-log-partly-info"),
                      f["default"].removeClass(a, "vc-log-partly-warn"),
                      f["default"].removeClass(a, "vc-log-partly-error"),
                      "all" == n
                        ? f["default"].removeClass(a, "vc-log-partly")
                        : (f["default"].addClass(a, "vc-log-partly"),
                          f["default"].addClass(a, "vc-log-partly-" + n));
                  });
                  var o = f["default"].one(".vc-content");
                  f["default"].bind(o, "scroll", function (t) {
                    e.isShow &&
                      (o.scrollTop + o.offsetHeight >= o.scrollHeight
                        ? (e.isInBottom = !0)
                        : (e.isInBottom = !1));
                  });
                  for (var n = 0; n < e.logList.length; n++)
                    e.printLog(e.logList[n]);
                  e.logList = [];
                },
              },
              {
                key: "onRemove",
                value: function () {
                  (window.console.log = this.console.log),
                    (window.console.info = this.console.info),
                    (window.console.warn = this.console.warn),
                    (window.console.debug = this.console.debug),
                    (window.console.error = this.console.error),
                    (this.console = {});
                },
              },
              {
                key: "onShow",
                value: function () {
                  (this.isShow = !0),
                    1 == this.isInBottom && this.scrollToBottom();
                },
              },
              {
                key: "onHide",
                value: function () {
                  this.isShow = !1;
                },
              },
              {
                key: "onShowConsole",
                value: function () {
                  1 == this.isInBottom && this.scrollToBottom();
                },
              },
              {
                key: "onUpdateOption",
                value: function () {
                  this.vConsole.option.maxLogNumber != this.maxLogNumber &&
                    (this.updateMaxLogNumber(), this.limitMaxLogs());
                },
              },
              {
                key: "updateMaxLogNumber",
                value: function () {
                  (this.maxLogNumber = this.vConsole.option.maxLogNumber || x),
                    (this.maxLogNumber = Math.max(1, this.maxLogNumber));
                },
              },
              {
                key: "limitMaxLogs",
                value: function () {
                  if (this.isReady)
                    for (; this.logNumber > this.maxLogNumber; ) {
                      var e = f["default"].one(".vc-item", this.$tabbox);
                      if (!e) break;
                      e.parentNode.removeChild(e), this.logNumber--;
                    }
                },
              },
              {
                key: "showLogType",
                value: function (e) {
                  var t = f["default"].one(".vc-log", this.$tabbox);
                  f["default"].removeClass(t, "vc-log-partly-log"),
                    f["default"].removeClass(t, "vc-log-partly-info"),
                    f["default"].removeClass(t, "vc-log-partly-warn"),
                    f["default"].removeClass(t, "vc-log-partly-error"),
                    "all" == e
                      ? f["default"].removeClass(t, "vc-log-partly")
                      : (f["default"].addClass(t, "vc-log-partly"),
                        f["default"].addClass(t, "vc-log-partly-" + e));
                },
              },
              {
                key: "scrollToBottom",
                value: function () {
                  var e = f["default"].one(".vc-content");
                  e && (e.scrollTop = e.scrollHeight - e.offsetHeight);
                },
              },
              {
                key: "mockConsole",
                value: function () {
                  var e = this,
                    t = this,
                    o = ["log", "info", "warn", "debug", "error"];
                  window.console
                    ? o.map(function (e) {
                        t.console[e] = window.console[e];
                      })
                    : (window.console = {}),
                    o.map(function (t) {
                      window.console[t] = function () {
                        for (
                          var o = arguments.length, n = Array(o), a = 0;
                          o > a;
                          a++
                        )
                          n[a] = arguments[a];
                        e.printLog({ logType: t, logs: n });
                      };
                    });
                },
              },
              {
                key: "clearLog",
                value: function () {
                  f["default"].one(".vc-log", this.$tabbox).innerHTML = "";
                },
              },
              {
                key: "printOriginLog",
                value: function (e) {
                  "function" == typeof this.console[e.logType] &&
                    this.console[e.logType].apply(window.console, e.logs);
                },
              },
              {
                key: "printLog",
                value: function (e) {
                  var t = e.logs || [];
                  if (t.length || e.content) {
                    t = [].slice.call(t || []);
                    var o = !0,
                      n = /^\[(\w+)\]$/i,
                      a = "";
                    if (u.isString(t[0])) {
                      var i = t[0].match(n);
                      null !== i && i.length > 0 && (a = i[1].toLowerCase());
                    }
                    if (
                      (a
                        ? (o = a == this.id)
                        : 0 == this.allowUnformattedLog && (o = !1),
                      !o)
                    )
                      return void (e.noOrigin || this.printOriginLog(e));
                    if ((e.date || (e.date = +new Date()), !this.isReady))
                      return void this.logList.push(e);
                    if (
                      (u.isString(t[0]) &&
                        ((t[0] = t[0].replace(n, "")),
                        "" === t[0] && t.shift()),
                      !e.meta)
                    ) {
                      var r = u.getDate(e.date);
                      e.meta = r.hour + ":" + r.minute + ":" + r.second;
                    }
                    for (
                      var l = f["default"].render(g["default"], {
                          logType: e.logType,
                          noMeta: !!e.noMeta,
                          meta: e.meta,
                          style: e.style || "",
                        }),
                        s = f["default"].one(".vc-item-content", l),
                        d = 0;
                      d < t.length;
                      d++
                    ) {
                      var v = void 0;
                      try {
                        if ("" === t[d]) continue;
                        v = u.isFunction(t[d])
                          ? "<span> " + t[d].toString() + "</span>"
                          : u.isObject(t[d]) || u.isArray(t[d])
                          ? this.getFoldedLine(t[d])
                          : "<span> " +
                            u.htmlEncode(t[d]).replace(/\n/g, "<br/>") +
                            "</span>";
                      } catch (p) {
                        v = "<span> [" + c(t[d]) + "]</span>";
                      }
                      v &&
                        ("string" == typeof v
                          ? s.insertAdjacentHTML("beforeend", v)
                          : s.insertAdjacentElement("beforeend", v));
                    }
                    u.isObject(e.content) &&
                      s.insertAdjacentElement("beforeend", e.content),
                      f["default"]
                        .one(".vc-log", this.$tabbox)
                        .insertAdjacentElement("beforeend", l),
                      this.logNumber++,
                      this.limitMaxLogs(),
                      this.isInBottom && this.scrollToBottom(),
                      e.noOrigin || this.printOriginLog(e);
                  }
                },
              },
              {
                key: "getFoldedLine",
                value: function (e, t) {
                  var o = this;
                  if (!t) {
                    var n = u.JSONStringify(e),
                      a = n.substr(0, 26);
                    (t = u.getObjName(e)),
                      n.length > 26 && (a += "..."),
                      (t += " " + a);
                  }
                  var i = f["default"].render(y["default"], {
                    outer: t,
                    lineType: "obj",
                  });
                  return (
                    f["default"].bind(
                      f["default"].one(".vc-fold-outer", i),
                      "click",
                      function (t) {
                        t.preventDefault(),
                          t.stopPropagation(),
                          f["default"].hasClass(i, "vc-toggle")
                            ? (f["default"].removeClass(i, "vc-toggle"),
                              f["default"].removeClass(
                                f["default"].one(".vc-fold-inner", i),
                                "vc-toggle"
                              ),
                              f["default"].removeClass(
                                f["default"].one(".vc-fold-outer", i),
                                "vc-toggle"
                              ))
                            : (f["default"].addClass(i, "vc-toggle"),
                              f["default"].addClass(
                                f["default"].one(".vc-fold-inner", i),
                                "vc-toggle"
                              ),
                              f["default"].addClass(
                                f["default"].one(".vc-fold-outer", i),
                                "vc-toggle"
                              ));
                        var n = f["default"].one(".vc-fold-inner", i);
                        if (0 == n.children.length && e) {
                          for (
                            var a = u.getObjAllKeys(e), r = 0;
                            r < a.length;
                            r++
                          ) {
                            var l = e[a[r]],
                              c = "undefined",
                              s = "";
                            u.isString(l)
                              ? ((c = "string"), (l = '"' + l + '"'))
                              : u.isNumber(l)
                              ? (c = "number")
                              : u.isBoolean(l)
                              ? (c = "boolean")
                              : u.isNull(l)
                              ? ((c = "null"), (l = "null"))
                              : u.isUndefined(l)
                              ? ((c = "undefined"), (l = "undefined"))
                              : u.isFunction(l)
                              ? ((c = "function"), (l = "function()"))
                              : u.isSymbol(l) && (c = "symbol");
                            var d = void 0;
                            if (u.isArray(l)) {
                              var v = u.getObjName(l) + "[" + l.length + "]";
                              d = o.getFoldedLine(
                                l,
                                f["default"].render(
                                  w["default"],
                                  {
                                    key: a[r],
                                    keyType: s,
                                    value: v,
                                    valueType: "array",
                                  },
                                  !0
                                )
                              );
                            } else if (u.isObject(l)) {
                              var p = u.getObjName(l);
                              d = o.getFoldedLine(
                                l,
                                f["default"].render(
                                  w["default"],
                                  {
                                    key: u.htmlEncode(a[r]),
                                    keyType: s,
                                    value: p,
                                    valueType: "object",
                                  },
                                  !0
                                )
                              );
                            } else {
                              e.hasOwnProperty &&
                                !e.hasOwnProperty(a[r]) &&
                                (s = "private");
                              var h = {
                                lineType: "kv",
                                key: u.htmlEncode(a[r]),
                                keyType: s,
                                value: u.htmlEncode(l),
                                valueType: c,
                              };
                              d = f["default"].render(y["default"], h);
                            }
                            n.insertAdjacentElement("beforeend", d);
                          }
                          if (u.isObject(e)) {
                            var b = e.__proto__,
                              g = void 0;
                            (g = u.isObject(b)
                              ? o.getFoldedLine(
                                  b,
                                  f["default"].render(
                                    w["default"],
                                    {
                                      key: "__proto__",
                                      keyType: "private",
                                      value: u.getObjName(b),
                                      valueType: "object",
                                    },
                                    !0
                                  )
                                )
                              : f["default"].render(w["default"], {
                                  key: "__proto__",
                                  keyType: "private",
                                  value: "null",
                                  valueType: "null",
                                })),
                              n.insertAdjacentElement("beforeend", g);
                          }
                        }
                        return !1;
                      }
                    ),
                    i
                  );
                },
              },
            ]),
            t
          );
        })(h["default"]);
      (t["default"] = k), (e.exports = t["default"]);
    },
    function (e, t) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        a = (function () {
          function e(t) {
            var n =
              arguments.length <= 1 || void 0 === arguments[1]
                ? "newPlugin"
                : arguments[1];
            o(this, e), (this.id = t), (this.name = n), (this.eventList = {});
          }
          return (
            n(e, [
              {
                key: "on",
                value: function (e, t) {
                  return (this.eventList[e] = t), this;
                },
              },
              {
                key: "trigger",
                value: function (e, t) {
                  if ("function" == typeof this.eventList[e])
                    this.eventList[e].call(this, t);
                  else {
                    var o = "on" + e.charAt(0).toUpperCase() + e.slice(1);
                    "function" == typeof this[o] && this[o].call(this, t);
                  }
                  return this;
                },
              },
              {
                key: "id",
                get: function () {
                  return this._id;
                },
                set: function (e) {
                  if (!e) throw "Plugin ID cannot be empty";
                  this._id = e.toLowerCase();
                },
              },
              {
                key: "name",
                get: function () {
                  return this._name;
                },
                set: function (e) {
                  if (!e) throw "Plugin name cannot be empty";
                  this._name = e;
                },
              },
              {
                key: "vConsole",
                get: function () {
                  return this._vConsole || void 0;
                },
                set: function (e) {
                  if (!e) throw "vConsole cannot be empty";
                  this._vConsole = e;
                },
              },
            ]),
            e
          );
        })();
      (t["default"] = a), (e.exports = t["default"]);
    },
    function (e, t) {
      e.exports =
        '<div class="vc-item vc-item-{{logType}} {{if (!noMeta)}}vc-item-nometa{{/if}} {{style}}">\n	<span class="vc-item-meta">{{if (!noMeta)}}{{meta}}{{/if}}</span>\n	<div class="vc-item-content"></div>\n</div>';
    },
    function (e, t) {
      e.exports =
        '<div class="vc-fold">\n  {{if (lineType == \'obj\')}}\n    <i class="vc-fold-outer">{{outer}}</i>\n    <div class="vc-fold-inner"></div>\n  {{else if (lineType == \'value\')}}\n    <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{else if (lineType == \'kv\')}}\n    <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{/if}}\n</div>';
    },
    function (e, t) {
      e.exports =
        '<span>\n  <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n</span>';
    },
    function (e, t) {
      e.exports =
        '<div>\n  <div class="vc-log"></div>\n  <form class="vc-cmd">\n    <button class="vc-cmd-btn" type="submit">OK</button>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="command..."></textarea>\n    </div>\n  </form>\n</div>';
    },
    function (e, t) {
      e.exports =
        '<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>';
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        s = function b(e, t, o) {
          null === e && (e = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(e, t);
          if (void 0 === n) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : b(a, t, o);
          }
          if ("value" in n) return n.value;
          var i = n.get;
          if (void 0 !== i) return i.call(o);
        },
        d = o(3),
        u = (a(d), o(16)),
        v = n(u),
        f = o(24),
        p = n(f),
        h = (function (e) {
          function t() {
            var e;
            i(this, t);
            for (var o = arguments.length, n = Array(o), a = 0; o > a; a++)
              n[a] = arguments[a];
            var l = r(
              this,
              (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))
            );
            return (
              (l.tplTabbox = p["default"]), (l.allowUnformattedLog = !1), l
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: "onInit",
                value: function () {
                  s(Object.getPrototypeOf(t.prototype), "onInit", this).call(
                    this
                  ),
                    this.printSystemInfo();
                },
              },
              {
                key: "printSystemInfo",
                value: function () {
                  var e = navigator.userAgent,
                    t = "",
                    o = e.match(/(ipod).*\s([\d_]+)/i),
                    n = e.match(/(ipad).*\s([\d_]+)/i),
                    a = e.match(/(iphone)\sos\s([\d_]+)/i),
                    i = e.match(/(android)\s([\d\.]+)/i);
                  (t = "Unknown"),
                    i
                      ? (t = "Android " + i[2])
                      : a
                      ? (t = "iPhone, iOS " + a[2].replace(/_/g, "."))
                      : n
                      ? (t = "iPad, iOS " + n[2].replace(/_/g, "."))
                      : o && (t = "iPod, iOS " + o[2].replace(/_/g, "."));
                  var r = t,
                    l = e.match(/MicroMessenger\/([\d\.]+)/i);
                  (t = "Unknown"),
                    l && l[1]
                      ? ((t = l[1]),
                        (r += ", WeChat " + t),
                        console.info("[system]", "System:", r))
                      : console.info("[system]", "System:", r),
                    (t = "Unknown"),
                    (t =
                      "https:" == location.protocol
                        ? "HTTPS"
                        : "http:" == location.protocol
                        ? "HTTP"
                        : location.protocol.replace(":", "")),
                    (r = t);
                  var c = e.toLowerCase().match(/ nettype\/([^ ]+)/g);
                  (t = "Unknown"),
                    c && c[0]
                      ? ((c = c[0].split("/")),
                        (t = c[1]),
                        (r += ", " + t),
                        console.info("[system]", "Network:", r))
                      : console.info("[system]", "Protocol:", r),
                    console.info("[system]", "UA:", e),
                    setTimeout(function () {
                      var e =
                        window.performance ||
                        window.msPerformance ||
                        window.webkitPerformance;
                      if (e && e.timing) {
                        var t = e.timing;
                        t.navigationStart &&
                          console.info(
                            "[system]",
                            "navigationStart:",
                            t.navigationStart
                          ),
                          t.navigationStart &&
                            t.domainLookupStart &&
                            console.info(
                              "[system]",
                              "navigation:",
                              t.domainLookupStart - t.navigationStart + "ms"
                            ),
                          t.domainLookupEnd &&
                            t.domainLookupStart &&
                            console.info(
                              "[system]",
                              "dns:",
                              t.domainLookupEnd - t.domainLookupStart + "ms"
                            ),
                          t.connectEnd &&
                            t.connectStart &&
                            (t.connectEnd && t.secureConnectionStart
                              ? console.info(
                                  "[system]",
                                  "tcp (ssl):",
                                  t.connectEnd -
                                    t.connectStart +
                                    "ms (" +
                                    (t.connectEnd - t.secureConnectionStart) +
                                    "ms)"
                                )
                              : console.info(
                                  "[system]",
                                  "tcp:",
                                  t.connectEnd - t.connectStart + "ms"
                                )),
                          t.responseStart &&
                            t.requestStart &&
                            console.info(
                              "[system]",
                              "request:",
                              t.responseStart - t.requestStart + "ms"
                            ),
                          t.responseEnd &&
                            t.responseStart &&
                            console.info(
                              "[system]",
                              "response:",
                              t.responseEnd - t.responseStart + "ms"
                            ),
                          t.domComplete &&
                            t.domLoading &&
                            (t.domContentLoadedEventStart && t.domLoading
                              ? console.info(
                                  "[system]",
                                  "domComplete (domLoaded):",
                                  t.domComplete -
                                    t.domLoading +
                                    "ms (" +
                                    (t.domContentLoadedEventStart -
                                      t.domLoading) +
                                    "ms)"
                                )
                              : console.info(
                                  "[system]",
                                  "domComplete:",
                                  t.domComplete - t.domLoading + "ms"
                                )),
                          t.loadEventEnd &&
                            t.loadEventStart &&
                            console.info(
                              "[system]",
                              "loadEvent:",
                              t.loadEventEnd - t.loadEventStart + "ms"
                            ),
                          t.navigationStart &&
                            t.loadEventEnd &&
                            console.info(
                              "[system]",
                              "total (DOM):",
                              t.loadEventEnd -
                                t.navigationStart +
                                "ms (" +
                                (t.domComplete - t.navigationStart) +
                                "ms)"
                            );
                      }
                    }, 0);
                },
              },
            ]),
            t
          );
        })(v["default"]);
      (t["default"] = h), (e.exports = t["default"]);
    },
    function (e, t) {
      e.exports = '<div>\n  <div class="vc-log"></div>\n</div>';
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        s = o(4),
        d = a(s),
        u = o(3),
        v = n(u),
        f = o(17),
        p = a(f),
        h = o(26),
        b = a(h),
        g = o(27),
        m = a(g),
        y = o(28),
        _ = a(y),
        w = (function (e) {
          function t() {
            var e;
            i(this, t);
            for (var o = arguments.length, n = Array(o), a = 0; o > a; a++)
              n[a] = arguments[a];
            var l = r(
              this,
              (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))
            );
            return (
              (l.$tabbox = d["default"].render(b["default"], {})),
              (l.$header = null),
              (l.reqList = {}),
              (l.domList = {}),
              (l.isReady = !1),
              (l.isShow = !1),
              (l.isInBottom = !0),
              (l._open = void 0),
              (l._send = void 0),
              l.mockAjax(),
              l
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: "onRenderTab",
                value: function (e) {
                  e(this.$tabbox);
                },
              },
              {
                key: "onAddTool",
                value: function (e) {
                  var t = this,
                    o = [
                      {
                        name: "Clear",
                        global: !1,
                        onClick: function (e) {
                          t.clearLog();
                        },
                      },
                    ];
                  e(o);
                },
              },
              {
                key: "onReady",
                value: function () {
                  var e = this;
                  (e.isReady = !0),
                    this.renderHeader(),
                    d["default"].delegate(
                      d["default"].one(".vc-log", this.$tabbox),
                      "click",
                      ".vc-group-preview",
                      function (t) {
                        var o = this.dataset.reqid,
                          n = this.parentNode;
                        d["default"].hasClass(n, "vc-actived")
                          ? (d["default"].removeClass(n, "vc-actived"),
                            e.updateRequest(o, { actived: !1 }))
                          : (d["default"].addClass(n, "vc-actived"),
                            e.updateRequest(o, { actived: !0 })),
                          t.preventDefault();
                      }
                    );
                  var t = d["default"].one(".vc-content");
                  d["default"].bind(t, "scroll", function (o) {
                    e.isShow &&
                      (t.scrollTop + t.offsetHeight >= t.scrollHeight
                        ? (e.isInBottom = !0)
                        : (e.isInBottom = !1));
                  });
                  for (var o in e.reqList) e.updateRequest(o, {});
                },
              },
              {
                key: "onRemove",
                value: function () {
                  window.XMLHttpRequest &&
                    ((window.XMLHttpRequest.prototype.open = this._open),
                    (window.XMLHttpRequest.prototype.send = this._send),
                    (this._open = void 0),
                    (this._send = void 0));
                },
              },
              {
                key: "onShow",
                value: function () {
                  (this.isShow = !0),
                    1 == this.isInBottom && this.scrollToBottom();
                },
              },
              {
                key: "onHide",
                value: function () {
                  this.isShow = !1;
                },
              },
              {
                key: "onShowConsole",
                value: function () {
                  1 == this.isInBottom && this.scrollToBottom();
                },
              },
              {
                key: "scrollToBottom",
                value: function () {
                  var e = d["default"].one(".vc-content");
                  e.scrollTop = e.scrollHeight - e.offsetHeight;
                },
              },
              {
                key: "clearLog",
                value: function () {
                  this.reqList = {};
                  for (var e in this.domList)
                    this.domList[e].remove(), (this.domList[e] = void 0);
                  (this.domList = {}), this.renderHeader();
                },
              },
              {
                key: "renderHeader",
                value: function () {
                  var e = Object.keys(this.reqList).length,
                    t = d["default"].render(m["default"], { count: e }),
                    o = d["default"].one(".vc-log", this.$tabbox);
                  this.$header
                    ? this.$header.parentNode.replaceChild(t, this.$header)
                    : o.parentNode.insertBefore(t, o),
                    (this.$header = t);
                },
              },
              {
                key: "updateRequest",
                value: function (e, t) {
                  var o = Object.keys(this.reqList).length,
                    n = this.reqList[e] || {};
                  for (var a in t) n[a] = t[a];
                  if (((this.reqList[e] = n), this.isReady)) {
                    var i = {
                      id: e,
                      url: n.url,
                      status: n.status,
                      method: n.method || "-",
                      costTime: n.costTime > 0 ? n.costTime + "ms" : "-",
                      header: n.header || null,
                      getData: n.getData || null,
                      postData: n.postData || null,
                      response: null,
                      actived: !!n.actived,
                    };
                    switch (n.responseType) {
                      case "":
                      case "text":
                        if (v.isString(n.response))
                          try {
                            (i.response = JSON.parse(n.response)),
                              (i.response = JSON.stringify(
                                i.response,
                                null,
                                1
                              )),
                              (i.response = v.htmlEncode(i.response));
                          } catch (r) {
                            i.response = v.htmlEncode(n.response);
                          }
                        else
                          "undefined" != typeof n.response &&
                            (i.response = Object.prototype.toString.call(
                              n.response
                            ));
                        break;
                      case "json":
                        "undefined" != typeof n.response &&
                          (i.response = JSON.stringify(n.response, null, 1));
                        break;
                      case "blob":
                      case "document":
                      case "arraybuffer":
                      default:
                        "undefined" != typeof n.response &&
                          (i.response = Object.prototype.toString.call(
                            n.response
                          ));
                    }
                    0 == n.readyState || 1 == n.readyState
                      ? (i.status = "Pending")
                      : 2 == n.readyState || 3 == n.readyState
                      ? (i.status = "Loading")
                      : 4 == n.readyState || (i.status = "Unknown");
                    var l = d["default"].render(_["default"], i),
                      c = this.domList[e];
                    n.status >= 400 &&
                      d["default"].addClass(
                        d["default"].one(".vc-group-preview", l),
                        "vc-table-row-error"
                      ),
                      c
                        ? c.parentNode.replaceChild(l, c)
                        : d["default"]
                            .one(".vc-log", this.$tabbox)
                            .insertAdjacentElement("beforeend", l),
                      (this.domList[e] = l);
                    var s = Object.keys(this.reqList).length;
                    s != o && this.renderHeader(),
                      this.isInBottom && this.scrollToBottom();
                  }
                },
              },
              {
                key: "mockAjax",
                value: function () {
                  var e = window.XMLHttpRequest;
                  if (e) {
                    var t = this,
                      o = window.XMLHttpRequest.prototype.open,
                      n = window.XMLHttpRequest.prototype.send;
                    (t._open = o),
                      (t._send = n),
                      (window.XMLHttpRequest.prototype.open = function () {
                        var e = this,
                          n = [].slice.call(arguments),
                          a = n[0],
                          i = n[1],
                          r = t.getUniqueID(),
                          l = null;
                        (e._requestID = r), (e._method = a), (e._url = i);
                        var c = e.onreadystatechange || function () {},
                          s = function () {
                            var o = t.reqList[r] || {};
                            if (
                              ((o.readyState = e.readyState),
                              (o.status = e.status),
                              (o.responseType = e.responseType),
                              0 == e.readyState)
                            )
                              o.startTime || (o.startTime = +new Date());
                            else if (1 == e.readyState)
                              o.startTime || (o.startTime = +new Date());
                            else if (2 == e.readyState) {
                              o.header = {};
                              for (
                                var n = e.getAllResponseHeaders() || "",
                                  a = n.split("\n"),
                                  i = 0;
                                i < a.length;
                                i++
                              ) {
                                var s = a[i];
                                if (s) {
                                  var d = s.split(": "),
                                    u = d[0],
                                    v = d.slice(1).join(": ");
                                  o.header[u] = v;
                                }
                              }
                            } else
                              3 == e.readyState ||
                                (4 == e.readyState
                                  ? (clearInterval(l),
                                    (o.endTime = +new Date()),
                                    (o.costTime =
                                      o.endTime - (o.startTime || o.endTime)),
                                    (o.response = e.response))
                                  : clearInterval(l));
                            return (
                              e._noVConsole || t.updateRequest(r, o),
                              c.apply(e, arguments)
                            );
                          };
                        e.onreadystatechange = s;
                        var d = -1;
                        return (
                          (l = setInterval(function () {
                            d != e.readyState &&
                              ((d = e.readyState), s.call(e));
                          }, 10)),
                          o.apply(e, n)
                        );
                      }),
                      (window.XMLHttpRequest.prototype.send = function () {
                        var e = this,
                          o = [].slice.call(arguments),
                          a = o[0],
                          i = t.reqList[e._requestID] || {};
                        i.method = e._method.toUpperCase();
                        var r = e._url.split("?");
                        if (((i.url = r.shift()), r.length > 0)) {
                          (i.getData = {}),
                            (r = r.join("?")),
                            (r = r.split("&"));
                          var l = !0,
                            c = !1,
                            s = void 0;
                          try {
                            for (
                              var d, u = r[Symbol.iterator]();
                              !(l = (d = u.next()).done);
                              l = !0
                            ) {
                              var f = d.value;
                              (f = f.split("=")), (i.getData[f[0]] = f[1]);
                            }
                          } catch (p) {
                            (c = !0), (s = p);
                          } finally {
                            try {
                              !l && u["return"] && u["return"]();
                            } finally {
                              if (c) throw s;
                            }
                          }
                        }
                        if ("POST" == i.method)
                          if (v.isString(a)) {
                            var h = a.split("&");
                            i.postData = {};
                            var b = !0,
                              g = !1,
                              m = void 0;
                            try {
                              for (
                                var y, _ = h[Symbol.iterator]();
                                !(b = (y = _.next()).done);
                                b = !0
                              ) {
                                var w = y.value;
                                (w = w.split("=")), (i.postData[w[0]] = w[1]);
                              }
                            } catch (p) {
                              (g = !0), (m = p);
                            } finally {
                              try {
                                !b && _["return"] && _["return"]();
                              } finally {
                                if (g) throw m;
                              }
                            }
                          } else v.isPlainObject(a) && (i.postData = a);
                        return (
                          e._noVConsole || t.updateRequest(e._requestID, i),
                          n.apply(e, o)
                        );
                      });
                  }
                },
              },
              {
                key: "getUniqueID",
                value: function () {
                  var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (e) {
                      var t = (16 * Math.random()) | 0,
                        o = "x" == e ? t : (3 & t) | 8;
                      return o.toString(16);
                    }
                  );
                  return e;
                },
              },
            ]),
            t
          );
        })(p["default"]);
      (t["default"] = w), (e.exports = t["default"]);
    },
    function (e, t) {
      e.exports =
        '<div class="vc-table">\n  <div class="vc-log"></div>\n</div>';
    },
    function (e, t) {
      e.exports =
        '<dl class="vc-table-row">\n  <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\n  <dd class="vc-table-col">Method</dd>\n  <dd class="vc-table-col">Status</dd>\n  <dd class="vc-table-col">Time</dd>\n</dl>';
    },
    function (e, t) {
      e.exports =
        '<div class="vc-group {{actived ? \'vc-actived\' : \'\'}}">\n  <dl class="vc-table-row vc-group-preview" data-reqid="{{id}}">\n    <dd class="vc-table-col vc-table-col-4">{{url}}</dd>\n    <dd class="vc-table-col">{{method}}</dd>\n    <dd class="vc-table-col">{{status}}</dd>\n    <dd class="vc-table-col">{{costTime}}</dd>\n  </dl>\n  <div class="vc-group-detail">\n    {{if (header !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Headers</dt>\n      </dl>\n      {{for (var key in header)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (getData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Query String Parameters</dt>\n      </dl>\n      {{for (var key in getData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{getData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (postData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Form Data</dt>\n      </dl>\n      {{for (var key in postData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{postData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Response</dt>\n      </dl>\n      <div class="vc-table-row vc-left-border vc-small">\n        <pre class="vc-table-col vc-max-height vc-min-height">{{response || \'\'}}</pre>\n      </div>\n    </div>\n  </div>\n</div>';
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function () {
        function e(e, t) {
          for (var o = 0; o < t.length; o++) {
            var n = t[o];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, o, n) {
          return o && e(t.prototype, o), n && e(t, n), t;
        };
      })();
      o(30);
      var s = o(17),
        d = a(s),
        u = o(32),
        v = a(u),
        f = o(33),
        p = a(f),
        h = o(3),
        b = (n(h), o(4)),
        g = a(b),
        m = (function (e) {
          function t() {
            var e;
            i(this, t);
            for (var o = arguments.length, n = Array(o), a = 0; o > a; a++)
              n[a] = arguments[a];
            var l = r(
                this,
                (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))
              ),
              c = l;
            (c.isInited = !1),
              (c.node = {}),
              (c.$tabbox = g["default"].render(v["default"], {})),
              (c.nodes = []),
              (c.activedElem = {});
            var s =
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver;
            return (
              (c.observer = new s(function (e) {
                for (var t = 0; t < e.length; t++) {
                  var o = e[t];
                  c._isInVConsole(o.target) || c.onMutation(o);
                }
              })),
              l
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: "onRenderTab",
                value: function (e) {
                  e(this.$tabbox);
                },
              },
              {
                key: "onAddTool",
                value: function (e) {
                  var t = this,
                    o = [
                      {
                        name: "Expend",
                        global: !1,
                        onClick: function (e) {
                          if (t.activedElem)
                            if (
                              g["default"].hasClass(t.activedElem, "vc-toggle")
                            )
                              for (
                                var o = 0;
                                o < t.activedElem.childNodes.length;
                                o++
                              ) {
                                var n = t.activedElem.childNodes[o];
                                if (
                                  g["default"].hasClass(n, "vcelm-l") &&
                                  !g["default"].hasClass(n, "vcelm-noc") &&
                                  !g["default"].hasClass(n, "vc-toggle")
                                ) {
                                  g["default"].one(".vcelm-node", n).click();
                                  break;
                                }
                              }
                            else
                              g["default"]
                                .one(".vcelm-node", t.activedElem)
                                .click();
                        },
                      },
                      {
                        name: "Collapse",
                        global: !1,
                        onClick: function (e) {
                          t.activedElem &&
                            (g["default"].hasClass(t.activedElem, "vc-toggle")
                              ? g["default"]
                                  .one(".vcelm-node", t.activedElem)
                                  .click()
                              : t.activedElem.parentNode &&
                                g["default"].hasClass(
                                  t.activedElem.parentNode,
                                  "vcelm-l"
                                ) &&
                                g["default"]
                                  .one(".vcelm-node", t.activedElem.parentNode)
                                  .click());
                        },
                      },
                    ];
                  e(o);
                },
              },
              {
                key: "onShow",
                value: function () {
                  if (!this.isInited) {
                    (this.isInited = !0),
                      (this.node = this.getNode(document.documentElement));
                    var e = this.renderView(
                        this.node,
                        g["default"].one(".vc-log", this.$tabbox)
                      ),
                      t = g["default"].one(".vcelm-node", e);
                    t && t.click();
                    var o = {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    };
                    this.observer.observe(document.documentElement, o);
                  }
                },
              },
              {
                key: "onRemove",
                value: function () {
                  this.observer.disconnect();
                },
              },
              {
                key: "onMutation",
                value: function (e) {
                  switch (e.type) {
                    case "childList":
                      e.removedNodes.length > 0 && this.onChildRemove(e),
                        e.addedNodes.length > 0 && this.onChildAdd(e);
                      break;
                    case "attributes":
                      this.onAttributesChange(e);
                      break;
                    case "characterData":
                      this.onCharacterDataChange(e);
                  }
                },
              },
              {
                key: "onChildRemove",
                value: function (e) {
                  var t = e.target,
                    o = t.__vconsole_node;
                  if (o) {
                    for (var n = 0; n < e.removedNodes.length; n++) {
                      var a = e.removedNodes[n],
                        i = a.__vconsole_node;
                      i && i.view && i.view.parentNode.removeChild(i.view);
                    }
                    this.getNode(t);
                  }
                },
              },
              {
                key: "onChildAdd",
                value: function (e) {
                  var t = e.target,
                    o = t.__vconsole_node;
                  if (o) {
                    this.getNode(t),
                      o.view && g["default"].removeClass(o.view, "vcelm-noc");
                    for (var n = 0; n < e.addedNodes.length; n++) {
                      var a = e.addedNodes[n],
                        i = a.__vconsole_node;
                      if (i)
                        if (null !== e.nextSibling) {
                          var r = e.nextSibling.__vconsole_node;
                          r.view && this.renderView(i, r.view, "insertBefore");
                        } else
                          o.view &&
                            (o.view.lastChild
                              ? this.renderView(
                                  i,
                                  o.view.lastChild,
                                  "insertBefore"
                                )
                              : this.renderView(i, o.view));
                    }
                  }
                },
              },
              {
                key: "onAttributesChange",
                value: function (e) {
                  var t = e.target.__vconsole_node;
                  t &&
                    ((t = this.getNode(e.target)),
                    t.view && this.renderView(t, t.view, !0));
                },
              },
              {
                key: "onCharacterDataChange",
                value: function (e) {
                  var t = e.target.__vconsole_node;
                  t &&
                    ((t = this.getNode(e.target)),
                    t.view && this.renderView(t, t.view, !0));
                },
              },
              {
                key: "renderView",
                value: function (e, t, o) {
                  var n = this,
                    a = new p["default"](e).get();
                  switch (
                    ((e.view = a),
                    g["default"].delegate(
                      a,
                      "click",
                      ".vcelm-node",
                      function (t) {
                        t.stopPropagation();
                        var o = this.parentNode;
                        if (!g["default"].hasClass(o, "vcelm-noc")) {
                          (n.activedElem = o),
                            g["default"].hasClass(o, "vc-toggle")
                              ? g["default"].removeClass(o, "vc-toggle")
                              : g["default"].addClass(o, "vc-toggle");
                          for (var a = -1, i = 0; i < o.children.length; i++) {
                            var r = o.children[i];
                            g["default"].hasClass(r, "vcelm-l") &&
                              (a++,
                              r.children.length > 0 ||
                                (e.childNodes[a]
                                  ? n.renderView(e.childNodes[a], r, "replace")
                                  : (r.style.display = "none")));
                          }
                        }
                      }
                    ),
                    o)
                  ) {
                    case "replace":
                      t.parentNode.replaceChild(a, t);
                      break;
                    case "insertBefore":
                      t.parentNode.insertBefore(a, t);
                      break;
                    default:
                      t.appendChild(a);
                  }
                  return a;
                },
              },
              {
                key: "getNode",
                value: function (e) {
                  if (!this._isIgnoredElement(e)) {
                    var t = e.__vconsole_node || {};
                    if (
                      ((t.nodeType = e.nodeType),
                      (t.nodeName = e.nodeName),
                      (t.tagName = e.tagName || ""),
                      (t.textContent = ""),
                      (t.nodeType != e.TEXT_NODE &&
                        t.nodeType != e.DOCUMENT_TYPE_NODE) ||
                        (t.textContent = e.textContent),
                      (t.id = e.id || ""),
                      (t.className = e.className || ""),
                      (t.attributes = []),
                      e.hasAttributes && e.hasAttributes())
                    )
                      for (var o = 0; o < e.attributes.length; o++)
                        t.attributes.push({
                          name: e.attributes[o].name,
                          value: e.attributes[o].value || "",
                        });
                    if (((t.childNodes = []), e.childNodes.length > 0))
                      for (var n = 0; n < e.childNodes.length; n++) {
                        var a = this.getNode(e.childNodes[n]);
                        a && t.childNodes.push(a);
                      }
                    return (e.__vconsole_node = t), t;
                  }
                },
              },
              {
                key: "_isIgnoredElement",
                value: function (e) {
                  return (
                    e.nodeType == e.TEXT_NODE &&
                    "" ==
                      e.textContent.replace(
                        /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g,
                        ""
                      )
                  );
                },
              },
              {
                key: "_isInVConsole",
                value: function (e) {
                  for (var t = e; void 0 != t; ) {
                    if ("__vconsole" == t.id) return !0;
                    t = t.parentNode || void 0;
                  }
                  return !1;
                },
              },
            ]),
            t
          );
        })(d["default"]);
      (t["default"] = m), (e.exports = t["default"]);
    },
    function (e, t, o) {
      var n = o(31);
      "string" == typeof n && (n = [[e.id, n, ""]]);
      o(9)(n, {});
      n.locals && (e.exports = n.locals);
    },
    function (e, t, o) {
      (t = e.exports = o(8)()),
        t.push([
          e.id,
          '.vcelm-node{color:#183691}.vcelm-k{color:#0086b3}.vcelm-v{color:#905}.vcelm-l{padding-left:8px;position:relative;word-wrap:break-word;line-height:1}.vcelm-l.vc-toggle>.vcelm-node{display:block}.vcelm-l .vcelm-node:active{background-color:rgba(0,0,0,.15)}.vcelm-l.vcelm-noc .vcelm-node:active{background-color:transparent}.vcelm-t{white-space:pre-wrap;word-wrap:break-word}.vcelm-l .vcelm-l{display:none}.vcelm-l.vc-toggle>.vcelm-l{margin-left:4px;display:block}.vcelm-l:before{content:"";display:block;position:absolute;top:6px;left:3px;width:0;height:0;border:3px solid transparent;border-left-color:#000}.vcelm-l.vc-toggle:before{display:block;top:6px;left:0;border-top-color:#000;border-left-color:transparent}.vcelm-l.vcelm-noc:before{display:none}',
          "",
        ]);
    },
    function (e, t) {
      e.exports = '<div>\n  <div class="vc-log"></div>\n</div>';
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e) {
        var t = ["br", "hr", "img", "input", "link", "meta"];
        return (e = e ? e.toLowerCase() : ""), t.indexOf(e) > -1;
      }
      function l(e) {
        return document.createTextNode(e);
      }
      function c(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        d = o(34),
        u = a(d),
        v = o(35),
        f = a(v),
        p = o(3),
        h = (n(p), o(4)),
        b = a(h),
        g = (function () {
          function e(t) {
            i(this, e), (this.node = t), (this.view = this._create(this.node));
          }
          return (
            s(e, [
              {
                key: "get",
                value: function () {
                  return this.view;
                },
              },
              {
                key: "_create",
                value: function (e, t) {
                  var o = document.createElement("DIV");
                  switch ((b["default"].addClass(o, "vcelm-l"), e.nodeType)) {
                    case o.ELEMENT_NODE:
                      this._createElementNode(e, o);
                      break;
                    case o.TEXT_NODE:
                      this._createTextNode(e, o);
                      break;
                    case o.COMMENT_NODE:
                    case o.DOCUMENT_NODE:
                    case o.DOCUMENT_TYPE_NODE:
                    case o.DOCUMENT_FRAGMENT_NODE:
                  }
                  return o;
                },
              },
              {
                key: "_createTextNode",
                value: function (e, t) {
                  b["default"].addClass(t, "vcelm-t vcelm-noc"),
                    e.textContent && t.appendChild(l(c(e.textContent)));
                },
              },
              {
                key: "_createElementNode",
                value: function (e, t) {
                  var o = r(e.tagName),
                    n = o;
                  0 == e.childNodes.length && (n = !0);
                  var a = b["default"].render(u["default"], { node: e }),
                    i = b["default"].render(f["default"], { node: e });
                  if (n)
                    b["default"].addClass(t, "vcelm-noc"),
                      t.appendChild(a),
                      o || t.appendChild(i);
                  else {
                    t.appendChild(a);
                    for (var l = 0; l < e.childNodes.length; l++) {
                      var c = document.createElement("DIV");
                      b["default"].addClass(c, "vcelm-l"), t.appendChild(c);
                    }
                    o || t.appendChild(i);
                  }
                },
              },
            ]),
            e
          );
        })();
      (t["default"] = g), (e.exports = t["default"]);
    },
    function (e, t) {
      e.exports =
        '<span class="vcelm-node">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\n  <i class="vcelm-k">\n    {{for (var i = 0; i < node.attributes.length; i++)}}\n      {{if (node.attributes[i].value !== \'\')}}\n        {{node.attributes[i].name}}="<i class="vcelm-v">{{node.attributes[i].value}}</i>"{{else}}\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>';
    },
    function (e, t) {
      e.exports =
        '<span class="vcelm-node">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>';
    },
    function (e, t, o) {
      "use strict";
      function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return (t["default"] = e), t;
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        s = o(17),
        d = a(s),
        u = o(37),
        v = a(u),
        f = o(38),
        p = a(f),
        h = o(3),
        b = n(h),
        g = o(4),
        m = a(g),
        y = (function (e) {
          function t() {
            var e;
            i(this, t);
            for (var o = arguments.length, n = Array(o), a = 0; o > a; a++)
              n[a] = arguments[a];
            var l = r(
              this,
              (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))
            );
            return (
              (l.$tabbox = m["default"].render(v["default"], {})),
              (l.currentType = ""),
              (l.typeNameMap = {
                cookies: "Cookies",
                localstorage: "LocalStorage",
              }),
              l
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: "onRenderTab",
                value: function (e) {
                  e(this.$tabbox);
                },
              },
              {
                key: "onAddTopBar",
                value: function (e) {
                  for (
                    var t = this,
                      o = ["Cookies", "LocalStorage"],
                      n = [],
                      a = 0;
                    a < o.length;
                    a++
                  )
                    n.push({
                      name: o[a],
                      data: { type: o[a].toLowerCase() },
                      className: "",
                      onClick: function () {
                        return m["default"].hasClass(this, "vc-actived")
                          ? !1
                          : ((t.currentType = this.dataset.type),
                            void t.renderStorage());
                      },
                    });
                  (n[0].className = "vc-actived"), e(n);
                },
              },
              {
                key: "onAddTool",
                value: function (e) {
                  var t = this,
                    o = [
                      {
                        name: "Refresh",
                        global: !1,
                        onClick: function (e) {
                          t.renderStorage();
                        },
                      },
                      {
                        name: "Clear",
                        global: !1,
                        onClick: function (e) {
                          t.clearLog();
                        },
                      },
                    ];
                  e(o);
                },
              },
              { key: "onReady", value: function () {} },
              {
                key: "onShow",
                value: function () {
                  "" == this.currentType &&
                    ((this.currentType = "cookies"), this.renderStorage());
                },
              },
              {
                key: "clearLog",
                value: function () {
                  if (this.currentType && window.confirm) {
                    var e = window.confirm(
                      "Remove all " + this.typeNameMap[this.currentType] + "?"
                    );
                    if (!e) return !1;
                  }
                  switch (this.currentType) {
                    case "cookies":
                      this.clearCookieList();
                      break;
                    case "localstorage":
                      this.clearLocalStorageList();
                      break;
                    default:
                      return !1;
                  }
                  this.renderStorage();
                },
              },
              {
                key: "renderStorage",
                value: function () {
                  var e = [];
                  switch (this.currentType) {
                    case "cookies":
                      e = this.getCookieList();
                      break;
                    case "localstorage":
                      e = this.getLocalStorageList();
                      break;
                    default:
                      return !1;
                  }
                  var t = m["default"].one(".vc-log", this.$tabbox);
                  if (0 == e.length) t.innerHTML = "";
                  else {
                    for (var o = 0; o < e.length; o++)
                      (e[o].name = b.htmlEncode(e[o].name)),
                        (e[o].value = b.htmlEncode(e[o].value));
                    t.innerHTML = m["default"].render(
                      p["default"],
                      { list: e },
                      !0
                    );
                  }
                },
              },
              {
                key: "getCookieList",
                value: function () {
                  if (!document.cookie || !navigator.cookieEnabled) return [];
                  for (
                    var e = [], t = document.cookie.split(";"), o = 0;
                    o < t.length;
                    o++
                  ) {
                    var n = t[o].split("="),
                      a = n[0].replace(/^ /, ""),
                      i = n[1];
                    e.push({
                      name: decodeURIComponent(a),
                      value: decodeURIComponent(i),
                    });
                  }
                  return e;
                },
              },
              {
                key: "getLocalStorageList",
                value: function () {
                  if (!window.localStorage) return [];
                  try {
                    for (var e = [], t = 0; t < localStorage.length; t++) {
                      var o = localStorage.key(t),
                        n = localStorage.getItem(o);
                      e.push({ name: o, value: n });
                    }
                    return e;
                  } catch (a) {
                    return [];
                  }
                },
              },
              {
                key: "clearCookieList",
                value: function () {
                  if (document.cookie && navigator.cookieEnabled) {
                    for (var e = this.getCookieList(), t = 0; t < e.length; t++)
                      document.cookie =
                        e[t].name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    this.renderStorage();
                  }
                },
              },
              {
                key: "clearLocalStorageList",
                value: function () {
                  if (window.localStorage)
                    try {
                      localStorage.clear(), this.renderStorage();
                    } catch (e) {
                      alert("localStorage.clear() fail.");
                    }
                },
              },
            ]),
            t
          );
        })(d["default"]);
      (t["default"] = y), (e.exports = t["default"]);
    },
    function (e, t) {
      e.exports =
        '<div class="vc-table">\n  <div class="vc-log"></div>\n</div>';
    },
    function (e, t) {
      e.exports =
        '<div>\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">Name</dd>\n    <dd class="vc-table-col vc-table-col-2">Value</dd>\n  </dl>\n  {{for (var i = 0; i < list.length; i++)}}\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">{{list[i].name}}</dd>\n    <dd class="vc-table-col vc-table-col-2">{{list[i].value}}</dd>\n  </dl>\n  {{/for}}\n</div>';
    },
  ]);
});
