(function (e) {
  function t(t) {
    for (
      var n, a, i = t[0], s = t[1], l = t[2], u = 0, b = [];
      u < i.length;
      u++
    )
      (a = i[u]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && b.push(o[a][0]),
        (o[a] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    d && d(t);
    while (b.length) b.shift()();
    return r.push.apply(r, l || []), c();
  }
  function c() {
    for (var e, t = 0; t < r.length; t++) {
      for (var c = r[t], n = !0, i = 1; i < c.length; i++) {
        var s = c[i];
        0 !== o[s] && (n = !1);
      }
      n && (r.splice(t--, 1), (e = a((a.s = c[0]))));
    }
    return e;
  }
  var n = {},
    o = { app: 0 },
    r = [];
  function a(t) {
    if (n[t]) return n[t].exports;
    var c = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(c.exports, c, c.exports, a), (c.l = !0), c.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function (e, t, c) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c });
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var c = Object.create(null);
      if (
        (a.r(c),
        Object.defineProperty(c, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            c,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return c;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var l = 0; l < i.length; l++) t(i[l]);
  var d = s;
  r.push([0, "chunk-vendors"]), c();
})({
  0: function (e, t, c) {
    e.exports = c("cd49");
  },
  8808: function (e, t, c) {
    "use strict";
    c("9797");
  },
  "8e5e": function (e, t, c) {
    "use strict";
    c("db9b");
  },
  9797: function (e, t, c) {},
  "9bf0": function (e, t, c) {},
  c97d: function (e, t, c) {
    "use strict";
    c("9bf0");
  },
  cd49: function (e, t, c) {
    "use strict";
    c.r(t);
    c("7dd6");
    var n = c("46bd"),
      o = c.n(n),
      r = (c("e260"), c("e6cf"), c("cca6"), c("a79d"), c("7a23"));
    function a(e, t, c, n, o, a) {
      var i = Object(r["resolveComponent"])("Main");
      return Object(r["openBlock"])(), Object(r["createBlock"])(i);
    }
    var i = Object(r["withScopeId"])("data-v-18a119bc");
    Object(r["pushScopeId"])("data-v-18a119bc");
    var s = Object(r["createVNode"])(
        "div",
        { class: "background" },
        [
          Object(r["createVNode"])("img", {
            src: "https://img14.360buyimg.com/ling/jfs/t1/155357/17/16559/98021/600d2335E6829b9cc/210becd64a408d24.jpg",
          }),
        ],
        -1
      ),
      l = { class: "container" },
      d = Object(r["createVNode"])("h1", null, "Hello.", -1),
      u = Object(r["createVNode"])(
        "p",
        { style: { "font-size": "2em", "font-weight": "500" } },
        " My name is GvGv Li (李肇康). ",
        -1
      ),
      b = Object(r["createVNode"])(
        "p",
        null,
        [
          Object(r["createTextVNode"])(
            " A front-end development engineer living in Shenzhen, graduated in 2020 from South China University of Technology ("
          ),
          Object(r["createVNode"])(
            "a",
            {
              class: "school",
              href: "https://www.scut.edu.cn/new/",
              target: "_blank",
            },
            "华南理工大学"
          ),
          Object(r["createTextVNode"])(
            "), majoring in mathematics. I used to work at JD O2 Team"
          ),
          Object(r["createVNode"])(
            "a",
            { class: "o2team", href: "https://aotu.io/", target: "_blank" },
            "(凹凸实验室)"
          ),
          Object(r["createTextVNode"])(", and now I work for Bytedance ("),
          Object(r["createVNode"])(
            "a",
            {
              class: "bytedance",
              href: "https://www.bytedance.com/zh/",
              target: "_blank",
            },
            "字节跳动"
          ),
          Object(r["createTextVNode"])(") Financial Line. "),
        ],
        -1
      ),
      p = Object(r["createVNode"])(
        "p",
        null,
        " Like drinking and disco. Favorite female star was Yang Chaoyue, while the girl group was Red Velvet. ",
        -1
      ),
      f = {
        class: "extra",
        style: { display: "flex", "align-items": "center" },
      },
      h = Object(r["createTextVNode"])(" Work WeChat: lzk100511130612 "),
      v = Object(r["createVNode"])(
        "img",
        {
          class: "ercode_img",
          src: "https://img30.360buyimg.com/ling/jfs/t1/163371/5/3937/181768/600d1dfbE50aa67e1/a9c7e1a498db978e.jpg",
        },
        null,
        -1
      ),
      j = Object(r["createVNode"])(
        "p",
        { class: "extra" },
        [
          Object(r["createTextVNode"])(" GitHub: "),
          Object(r["createVNode"])(
            "a",
            {
              class: "github",
              target: "_blank",
              href: "https://github.com/XHFkindergarten",
            },
            "XHFkindergarten"
          ),
        ],
        -1
      );
    Object(r["popScopeId"])();
    var O = i(function (e, t, c, n, o, a) {
        var i = Object(r["resolveComponent"])("Wechat"),
          O = Object(r["resolveComponent"])("Menu");
        return (
          Object(r["openBlock"])(),
          Object(r["createBlock"])("div", null, [
            s,
            Object(r["createVNode"])("div", l, [
              d,
              u,
              b,
              p,
              Object(r["createVNode"])("p", f, [
                h,
                Object(r["createVNode"])(
                  i,
                  {
                    class: ["ercode", { active: !e.showImage }],
                    onClick: e.toggleImage,
                  },
                  null,
                  8,
                  ["class", "onClick"]
                ),
              ]),
              Object(r["withDirectives"])(
                Object(r["createVNode"])("div", null, [v], 512),
                [[r["vShow"], e.showImage]]
              ),
              j,
              Object(r["createVNode"])(O),
            ]),
          ])
        );
      }),
      m = {
        t: "1611471433739",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "2936",
        id: "mx_n_1611471433740",
        width: "200",
        height: "200",
      },
      w = Object(r["createVNode"])(
        "path",
        {
          d: "M383.1 474.4H186.5c-49.5 0-89.8-40.3-89.8-89.8V188c0-49.5 40.3-89.8 89.8-89.8h196.6c49.5 0 89.8 40.3 89.8 89.8v196.6c0 49.5-40.3 89.8-89.8 89.8z m0-90.1v45.1-45.1z m-0.4-196.3l-196.2 0.4 0.4 196.2 195.9-0.4V188zM841 474.4H644.4c-49.5 0-89.8-40.3-89.8-89.8V188c0-49.5 40.3-89.8 89.8-89.8H841c49.5 0 89.8 40.3 89.8 89.8v196.6c-0.1 49.5-40.3 89.8-89.8 89.8z m0-90.1v45.1-45.1z m-0.4-196.3l-196.2 0.4 0.4 196.2 195.9-0.4V188zM383.1 928.3H186.5c-49.5 0-89.8-40.3-89.8-89.8V641.9c0-49.5 40.3-89.8 89.8-89.8h196.6c49.5 0 89.8 40.3 89.8 89.8v196.6c0 49.5-40.3 89.8-89.8 89.8z m0-90.2v45.1-45.1z m-0.4-196.2l-196.2 0.4 0.4 196.2 195.9-0.4V641.9zM885.7 642.3h-15.8c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1h15.8c24.9 0 45.1 20.2 45.1 45.1s-20.2 45.1-45.1 45.1zM745.3 642.3H599.6c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1h145.7c24.9 0 45.1 20.2 45.1 45.1s-20.2 45.1-45.1 45.1zM885.7 928.3h-15.8c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1h15.8c24.9 0 45.1 20.2 45.1 45.1s-20.2 45.1-45.1 45.1zM745.3 928.3H599.6c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1h145.7c24.9 0 45.1 20.2 45.1 45.1s-20.2 45.1-45.1 45.1zM615.5 785.3h-15.8c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1h15.8c24.9 0 45.1 20.2 45.1 45.1s-20.2 45.1-45.1 45.1zM885.7 785.3H740c-24.9 0-45.1-20.2-45.1-45.1s20.2-45.1 45.1-45.1h145.7c24.9 0 45.1 20.2 45.1 45.1s-20.2 45.1-45.1 45.1z",
          fill: "#5ac36d",
          "p-id": "2937",
          "data-spm-anchor-id": "a313x.7781069.0.i5",
          class: "",
        },
        null,
        -1
      );
    function V(e, t, c, n, o, a) {
      return Object(r["openBlock"])(), Object(r["createBlock"])("svg", m, [w]);
    }
    var k = { name: "Wechat" };
    k.render = V;
    var y = k,
      N = Object(r["withScopeId"])("data-v-396f0ca9");
    Object(r["pushScopeId"])("data-v-396f0ca9");
    var x = { class: "container" };
    Object(r["popScopeId"])();
    var M = N(function (e, t, c, n, o, a) {
        var i = Object(r["resolveComponent"])("el-button"),
          s = Object(r["resolveComponent"])("el-affix");
        return (
          Object(r["openBlock"])(),
          Object(r["createBlock"])(
            s,
            { position: "bottom", offset: 50 },
            {
              default: N(function () {
                return [
                  Object(r["createVNode"])("div", x, [
                    Object(r["createVNode"])(i, {
                      type: "primary",
                      circle: "",
                      icon: "el-icon-s-comment",
                    }),
                  ]),
                ];
              }),
              _: 1,
            }
          )
        );
      }),
      z = Object(r["defineComponent"])({
        name: "Menu",
        setup: function (e, t) {
          console.warn("props", e), console.warn("context", t);
        },
      });
    c("c97d");
    (z.render = M), (z.__scopeId = "data-v-396f0ca9");
    var _ = z,
      I = Object(r["defineComponent"])({
        name: "Main",
        components: { Wechat: y, Menu: _ },
        setup: function () {
          var e = Object(r["ref"])(!1),
            t = function () {
              e.value = !e.value;
            };
          return { showImage: e, toggleImage: t };
        },
      });
    c("8e5e");
    (I.render = O), (I.__scopeId = "data-v-18a119bc");
    var S = I,
      C = Object(r["defineComponent"])({
        name: "App",
        components: { Main: S },
      });
    c("8808");
    C.render = a;
    var T = C,
      B = c("9483");
    Object(B["a"])("".concat("", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    });
    var H = Object(r["createApp"])(T);
    H.use(o.a), H.mount("#app");
  },
  db9b: function (e, t, c) {},
});
//# sourceMappingURL=app.659334de.js.map
