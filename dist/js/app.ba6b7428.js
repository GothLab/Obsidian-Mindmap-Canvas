(function (t) {
  function e(e) {
    for (
      var a, s, l = e[0], r = e[1], d = e[2], h = 0, p = [];
      h < l.length;
      h++
    )
      (s = l[h]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && p.push(n[s][0]),
        (n[s] = 0);
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    c && c(e);
    while (p.length) p.shift()();
    return o.push.apply(o, d || []), i();
  }
  function i() {
    for (var t, e = 0; e < o.length; e++) {
      for (var i = o[e], a = !0, s = 1; s < i.length; s++) {
        var r = i[s];
        0 !== n[r] && (a = !1);
      }
      a && (o.splice(e--, 1), (t = l((l.s = i[0]))));
    }
    return t;
  }
  var a = {},
    n = { app: 0 },
    o = [];
  function s(t) {
    return (
      l.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-2d20ec02": "10aa67e3",
        "chunk-2d216b67": "2d06497a",
        "chunk-5397ae43": "e756f28b",
      }[t] +
      ".js"
    );
  }
  function l(e) {
    if (a[e]) return a[e].exports;
    var i = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, l), (i.l = !0), i.exports;
  }
  (l.e = function (t) {
    var e = [],
      i = n[t];
    if (0 !== i)
      if (i) e.push(i[2]);
      else {
        var a = new Promise(function (e, a) {
          i = n[t] = [e, a];
        });
        e.push((i[2] = a));
        var o,
          r = document.createElement("script");
        (r.charset = "utf-8"),
          (r.timeout = 120),
          l.nc && r.setAttribute("nonce", l.nc),
          (r.src = s(t));
        var d = new Error();
        o = function (e) {
          (r.onerror = r.onload = null), clearTimeout(h);
          var i = n[t];
          if (0 !== i) {
            if (i) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src;
              (d.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = a),
                (d.request = o),
                i[1](d);
            }
            n[t] = void 0;
          }
        };
        var h = setTimeout(function () {
          o({ type: "timeout", target: r });
        }, 12e4);
        (r.onerror = r.onload = o), document.head.appendChild(r);
      }
    return Promise.all(e);
  }),
    (l.m = t),
    (l.c = a),
    (l.d = function (t, e, i) {
      l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (l.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (l.t = function (t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (l.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          l.d(
            i,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return i;
    }),
    (l.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return l.d(e, "a", e), e;
    }),
    (l.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (l.p = "dist/"),
    (l.oe = function (t) {
      throw (console.error(t), t);
    });
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var h = 0; h < r.length; h++) e(r[h]);
  var c = d;
  o.push([0, "chunk-vendors"]), i();
})({
  0: function (t, e, i) {
    t.exports = i("56d7");
  },
  "026c": function (t, e, i) {
    "use strict";
    i("5fa1");
  },
  "02e3": function (t, e, i) {
    "use strict";
    i("b9d6");
  },
  "074d": function (t, e, i) {
    t.exports = i.p + "img/brainImpairedPink.511fee22.jpg";
  },
  "074f": function (t, e, i) {
    "use strict";
    i("2704");
  },
  "08be": function (t, e, i) {
    t.exports = i.p + "img/vitalityOrange.5dd9014f.jpg";
  },
  "0930": function (t, e, i) {
    t.exports = i.p + "img/logicalStructure.624920ce.jpg";
  },
  "0d29": function (t, e, i) {},
  "0d2c": function (t, e, i) {
    t.exports = i.p + "img/classicBlue.4b8243c6.jpg";
  },
  1: function (t, e) {},
  1254: function (t, e, i) {
    "use strict";
    i("e1e4");
  },
  "12b2": function (t, e, i) {
    "use strict";
    i("2d93");
  },
  "181c": function (t, e, i) {
    t.exports = i.p + "img/dark.894c1d36.jpg";
  },
  "18c4": function (t, e, i) {
    "use strict";
    i("97cd");
  },
  "1a34": function (t, e, i) {
    t.exports = i.p + "img/earthYellow.c35e546d.jpg";
  },
  2: function (t, e) {},
  2704: function (t, e, i) {},
  "2baf": function (t, e, i) {},
  "2d93": function (t, e, i) {},
  "2f05": function (t, e, i) {},
  3215: function (t, e, i) {
    "use strict";
    i("4584");
  },
  "322b": function (t, e, i) {},
  3556: function (t, e, i) {
    t.exports = i.p + "img/default.1312a3ba.jpg";
  },
  "377e": function (t, e, i) {
    "use strict";
    i("e79c");
  },
  "3a0c": function (t, e, i) {},
  "3b61": function (t, e, i) {
    "use strict";
    i("c111");
  },
  "3c2a": function (t, e, i) {
    "use strict";
    i("0d29");
  },
  "42c9": function (t, e, i) {
    t.exports = i.p + "img/dark2.c49dc11c.jpg";
  },
  "43f9": function (t, e, i) {
    t.exports = i.p + "img/classicGreen.c2ae7bde.jpg";
  },
  "441d": function (t, e, i) {
    "use strict";
    i("81cc");
  },
  4584: function (t, e, i) {},
  4957: function (t, e, i) {
    "use strict";
    i("5150");
  },
  "4cb5": function (t, e, i) {
    "use strict";
    i("736d");
  },
  5150: function (t, e, i) {},
  "56d7": function (t, e, i) {
    "use strict";
    i.r(e);
    var a = i("2b0e"),
      n = function () {
        var t = this,
          e = t._self._c;
        return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
      },
      o = [],
      s = { name: "App", components: {} },
      l = s,
      r = (i("441d"), i("2877")),
      d = Object(r["a"])(l, n, o, !1, null, null, null),
      h = d.exports,
      c = i("8c4f"),
      p = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "container" },
          [t.show ? [e("Toolbar"), e("Edit")] : t._e()],
          2
        );
      },
      m = [],
      u = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "toolbarContainer" },
          [
            e("div", { staticClass: "toolbar" }, [
              e("div", { staticClass: "toolbarBlock" }, [
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.readonly || t.backEnd },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("execCommand", "BACK");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconhoutui-shi" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.undo"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.readonly || t.forwardEnd },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("execCommand", "FORWARD");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconqianjin1" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.redo"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: {
                      disabled:
                        t.activeNodes.length <= 0 ||
                        t.hasRoot ||
                        t.hasGeneralization,
                    },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("execCommand", "INSERT_NODE");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconjiedian" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.insertSiblingNode"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: {
                      disabled:
                        t.activeNodes.length <= 0 || t.hasGeneralization,
                    },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("execCommand", "INSERT_CHILD_NODE");
                      },
                    },
                  },
                  [
                    e("span", {
                      staticClass: "icon iconfont icontianjiazijiedian",
                    }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.insertChildNode"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.activeNodes.length <= 0 },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("execCommand", "REMOVE_NODE");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconshanchu" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.deleteNode"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.activeNodes.length <= 0 },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showNodeImage");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconimage" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.image"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.activeNodes.length <= 0 },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showNodeIcon");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconxiaolian" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.icon"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.activeNodes.length <= 0 },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showNodeLink");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconchaolianjie" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.link"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.activeNodes.length <= 0 },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showNodeNote");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconflow-Mark" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.note"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: { disabled: t.activeNodes.length <= 0 },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showNodeTag");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconbiaoqian" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.tag"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    class: {
                      disabled:
                        t.activeNodes.length <= 0 ||
                        t.hasRoot ||
                        t.hasGeneralization,
                    },
                    on: {
                      click: function (e) {
                        return t.$bus.$emit(
                          "execCommand",
                          "ADD_GENERALIZATION"
                        );
                      },
                    },
                  },
                  [
                    e("span", {
                      staticClass: "icon iconfont icongaikuozonglan",
                    }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.summary"))),
                    ]),
                  ]
                ),
              ]),
              e("div", { staticClass: "toolbarBlock" }, [
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showOutline");
                      },
                    },
                  },
                  [
                    e("span", {
                      staticClass: "icon iconfont iconfuhao-dagangshu",
                    }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.displayOutline"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showBaseStyle");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconyangshi" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.baseStyle"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showTheme");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconjingzi" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.theme"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showStructure");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconjiegou" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.strusture"))),
                    ]),
                  ]
                ),
              ]),
              e("div", { staticClass: "toolbarBlock" }, [
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: { click: t.createNewLocalFile },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconxinjian" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.newFile"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  { staticClass: "toolbarBtn", on: { click: t.openLocalFile } },
                  [
                    e("span", { staticClass: "icon iconfont icondakai" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.openFile"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  { staticClass: "toolbarBtn", on: { click: t.saveLocalFile } },
                  [
                    e("span", { staticClass: "icon iconfont iconlingcunwei" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.saveAs"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showImport");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont icondaoru" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.import"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showExport");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconexport" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.export"))),
                    ]),
                  ]
                ),
                e(
                  "div",
                  {
                    staticClass: "toolbarBtn",
                    on: {
                      click: function (e) {
                        return t.$bus.$emit("showShortcutKey");
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "icon iconfont iconjianpan" }),
                    e("span", { staticClass: "text" }, [
                      t._v(t._s(t.$t("toolbar.shortcutKey"))),
                    ]),
                  ]
                ),
              ]),
            ]),
            e("NodeImage"),
            e("NodeHyperlink"),
            e("NodeIcon"),
            e("NodeNote"),
            e("NodeTag"),
            e("Export"),
            e("Import"),
          ],
          1
        );
      },
      g = [],
      f =
        (i("d9e2"),
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "el-dialog",
            {
              staticClass: "nodeDialog",
              attrs: {
                title: t.$t("nodeImage.title"),
                visible: t.dialogVisible,
                width: "500",
              },
              on: {
                "update:visible": function (e) {
                  t.dialogVisible = e;
                },
              },
            },
            [
              e("ImgUpload", {
                ref: "ImgUpload",
                model: {
                  value: t.img,
                  callback: function (e) {
                    t.img = e;
                  },
                  expression: "img",
                },
              }),
              e(
                "div",
                { staticClass: "imgTitleBox" },
                [
                  e("span", { staticClass: "title" }, [
                    t._v(t._s(t.$t("nodeImage.imgTitle"))),
                  ]),
                  e("el-input", {
                    attrs: { size: "mini" },
                    model: {
                      value: t.imgTitle,
                      callback: function (e) {
                        t.imgTitle = e;
                      },
                      expression: "imgTitle",
                    },
                  }),
                ],
                1
              ),
              e(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer",
                },
                [
                  e("el-button", { on: { click: t.cancel } }, [
                    t._v(t._s(t.$t("dialog.cancel"))),
                  ]),
                  e(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: t.confirm } },
                    [t._v(t._s(t.$t("dialog.confirm")))]
                  ),
                ],
                1
              ),
            ],
            1
          );
        }),
      v = [],
      b = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "imgUploadContainer" }, [
          e("div", { staticClass: "imgUploadPanel" }, [
            t.value
              ? t._e()
              : e("div", { staticClass: "upBtn" }, [
                  e(
                    "label",
                    {
                      staticClass: "imgUploadInputArea",
                      attrs: { for: "imgUploadInput" },
                      on: {
                        dragenter: function (t) {
                          t.stopPropagation(), t.preventDefault();
                        },
                        dragover: function (t) {
                          t.stopPropagation(), t.preventDefault();
                        },
                        drop: function (e) {
                          return (
                            e.stopPropagation(),
                            e.preventDefault(),
                            t.onDrop.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("点击此处选择图片、或拖动图片到此")]
                  ),
                  e("input", {
                    attrs: {
                      type: "file",
                      accept: "image/*",
                      id: "imgUploadInput",
                    },
                    on: { change: t.onImgUploadInputChange },
                  }),
                ]),
            t.value
              ? e("div", { staticClass: "uploadInfoBox" }, [
                  e("div", {
                    staticClass: "previewBox",
                    style: { backgroundImage: `url('${t.value}')` },
                  }),
                  e("span", {
                    staticClass: "delBtn el-icon-close",
                    on: { click: t.deleteImg },
                  }),
                ])
              : t._e(),
          ]),
        ]);
      },
      C = [],
      x = {
        name: "ImgUpload",
        model: { prop: "value", event: "change" },
        props: { value: { type: String, default: "" } },
        data() {
          return { file: null };
        },
        methods: {
          onImgUploadInputChange(t) {
            let e = t.target.files[0];
            this.selectImg(e);
          },
          onDrop(t) {
            let e = t.dataTransfer,
              i = e.files && e.files[0];
            this.selectImg(i);
          },
          selectImg(t) {
            this.file = t;
            let e = new FileReader();
            e.readAsDataURL(t),
              (e.onload = (t) => {
                this.$emit("change", t.target.result);
              });
          },
          getSize() {
            return new Promise((t) => {
              let e = new Image();
              (e.src = this.value),
                (e.onload = () => {
                  t({ width: e.width, height: e.height });
                }),
                (e.onerror = () => {
                  t({ width: 0, height: 0 });
                });
            });
          },
          deleteImg() {
            this.$emit("change", ""), (this.file = null);
          },
        },
      },
      w = x,
      M = (i("ebaf"), Object(r["a"])(w, b, C, !1, null, "72b759f7", null)),
      y = M.exports,
      _ = {
        name: "NodeImage",
        components: { ImgUpload: y },
        data() {
          return {
            dialogVisible: !1,
            img: "",
            imgTitle: "",
            activeNodes: null,
          };
        },
        created() {
          this.$bus.$on("node_active", (...t) => {
            if (((this.activeNodes = t[1]), this.activeNodes.length > 0)) {
              let t = this.activeNodes[0];
              (this.img = t.getData("image")),
                (this.imgTitle = t.getData("imageTitle"));
            } else (this.img = ""), (this.imgTitle = "");
          }),
            this.$bus.$on("showNodeImage", () => {
              this.dialogVisible = !0;
            });
        },
        methods: {
          cancel() {
            this.dialogVisible = !1;
          },
          async confirm() {
            try {
              let { width: t, height: e } =
                await this.$refs.ImgUpload.getSize();
              this.activeNodes.forEach((i) => {
                i.setImage({
                  url: this.img || "none",
                  title: this.imgTitle,
                  width: t,
                  height: e,
                });
              }),
                this.cancel();
            } catch (t) {
              console.log(t);
            }
          },
        },
      },
      N = _,
      D = (i("026c"), Object(r["a"])(N, f, v, !1, null, "eafb3202", null)),
      z = D.exports,
      S = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog",
          {
            staticClass: "nodeDialog",
            attrs: {
              title: t.$t("nodeHyperlink.title"),
              visible: t.dialogVisible,
              width: "500",
            },
            on: {
              "update:visible": function (e) {
                t.dialogVisible = e;
              },
            },
          },
          [
            e(
              "div",
              { staticClass: "item" },
              [
                e("span", { staticClass: "name" }, [
                  t._v(t._s(t.$t("nodeHyperlink.link"))),
                ]),
                e("el-input", {
                  attrs: { size: "mini", placeholder: "http://xxxx.com/" },
                  model: {
                    value: t.link,
                    callback: function (e) {
                      t.link = e;
                    },
                    expression: "link",
                  },
                }),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "item" },
              [
                e("span", { staticClass: "name" }, [
                  t._v(t._s(t.$t("nodeHyperlink.name"))),
                ]),
                e("el-input", {
                  attrs: { size: "mini" },
                  model: {
                    value: t.linkTitle,
                    callback: function (e) {
                      t.linkTitle = e;
                    },
                    expression: "linkTitle",
                  },
                }),
              ],
              1
            ),
            e(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                e("el-button", { on: { click: t.cancel } }, [
                  t._v(t._s(t.$t("dialog.cancel"))),
                ]),
                e(
                  "el-button",
                  { attrs: { type: "primary" }, on: { click: t.confirm } },
                  [t._v(t._s(t.$t("dialog.confirm")))]
                ),
              ],
              1
            ),
          ]
        );
      },
      $ = [],
      F = {
        name: "NodeHyperlink",
        data() {
          return {
            dialogVisible: !1,
            link: "",
            linkTitle: "",
            activeNodes: [],
          };
        },
        created() {
          this.$bus.$on("node_active", (...t) => {
            if (((this.activeNodes = t[1]), this.activeNodes.length > 0)) {
              let t = this.activeNodes[0];
              (this.link = t.getData("hyperlink")),
                (this.linkTitle = t.getData("hyperlinkTitle"));
            } else (this.link = ""), (this.linkTitle = "");
          }),
            this.$bus.$on("showNodeLink", () => {
              this.activeNodes[0].mindMap.keyCommand.pause(),
                this.$bus.$emit("startTextEdit"),
                (this.dialogVisible = !0);
            });
        },
        methods: {
          cancel() {
            (this.dialogVisible = !1),
              this.activeNodes[0].mindMap.keyCommand.recovery(),
              this.$bus.$emit("endTextEdit");
          },
          confirm() {
            this.activeNodes.forEach((t) => {
              t.setHyperlink(this.link, this.linkTitle), this.cancel();
            });
          },
        },
      },
      k = F,
      E = (i("4cb5"), Object(r["a"])(k, S, $, !1, null, "34261ea9", null)),
      L = E.exports,
      T = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog",
          {
            staticClass: "nodeDialog",
            attrs: {
              title: t.$t("nodeIcon.title"),
              visible: t.dialogVisible,
              width: "500",
            },
            on: {
              "update:visible": function (e) {
                t.dialogVisible = e;
              },
            },
          },
          t._l(t.nodeIconList, function (i) {
            return e("div", { key: i.name, staticClass: "item" }, [
              e("div", { staticClass: "title" }, [t._v(t._s(i.name))]),
              e(
                "div",
                { staticClass: "list" },
                t._l(i.list, function (a) {
                  return e("div", {
                    key: a.name,
                    staticClass: "icon",
                    class: {
                      selected: t.iconList.includes(i.type + "_" + a.name),
                    },
                    domProps: { innerHTML: t._s(a.icon) },
                    on: {
                      click: function (e) {
                        return t.setIcon(i.type, a.name);
                      },
                    },
                  });
                }),
                0
              ),
            ]);
          }),
          0
        );
      },
      B = [];
    const A =
        '<svg t="1624174958075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7982" ><path d="M435.484444 251.733333v68.892445L295.822222 320.682667a168.504889 168.504889 0 0 0-2.844444 336.952889h142.506666v68.892444H295.822222a237.397333 237.397333 0 0 1 0-474.794667h139.662222z m248.945778 0a237.397333 237.397333 0 0 1 0 474.851556H544.654222v-69.006222l139.776 0.056889a168.504889 168.504889 0 0 0 2.844445-336.952889H544.597333V251.676444h139.776z m-25.827555 203.946667a34.474667 34.474667 0 0 1 0 68.892444H321.649778a34.474667 34.474667 0 0 1 0-68.892444h336.952889z" p-id="7983"></path></svg>',
      I =
        '<svg t="1624195132675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8792" ><path d="M152.768 985.984 152.768 49.856l434.56 0 66.816 0 234.048 267.392 0 66.816 0 601.92L152.768 985.984 152.768 985.984zM654.144 193.088l0 124.16 108.736 0L654.144 193.088 654.144 193.088zM821.312 384.064l-167.168 0L587.328 384.064 587.328 317.312 587.328 116.736 219.584 116.736 219.584 919.04l601.728 0L821.312 384.064 821.312 384.064zM386.688 517.888 319.808 517.888 319.808 450.944l66.816 0L386.624 517.888 386.688 517.888zM386.688 651.584 319.808 651.584 319.808 584.704l66.816 0L386.624 651.584 386.688 651.584zM386.688 785.344 319.808 785.344l0-66.88 66.816 0L386.624 785.344 386.688 785.344zM721.024 517.888 453.632 517.888 453.632 450.944l267.392 0L721.024 517.888 721.024 517.888zM654.144 651.584 453.632 651.584 453.632 584.704l200.512 0L654.144 651.584 654.144 651.584zM620.672 785.344l-167.04 0 0-66.88 167.04 0L620.672 785.344 620.672 785.344z" p-id="8793"></path></svg>',
      R = [
        {
          name: "优先级图标",
          type: "priority",
          list: [
            {
              name: "1",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#E93B30"></path><path d="M580.309333 256h-75.52c-10.666667 29.824-30.165333 55.765333-58.709333 78.165333-28.416 22.314667-54.869333 37.418667-79.146667 45.397334v84.608a320 320 0 0 0 120.234667-70.698667v352.085333H580.266667V256z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "2",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M511.957333 1024C229.248 1024 0 794.752 0 512S229.248 0 511.957333 0C794.752 0 1024 229.248 1024 512s-229.248 512-512.042667 512z" fill="#FA8D2E"></path><path d="M667.946667 658.602667h-185.301334c4.864-8.533333 11.178667-17.066667 19.072-25.984 7.808-8.874667 26.453333-26.837333 55.936-53.888 29.525333-27.008 49.877333-47.786667 61.226667-62.165334 16.981333-21.717333 29.44-42.453333 37.290667-62.293333 7.808-19.84 11.776-40.746667 11.776-62.677333 0-38.570667-13.738667-70.741333-41.088-96.725334C599.466667 268.928 561.706667 256 513.834667 256c-43.690667 0-80.128 11.136-109.354667 33.578667-29.098667 22.4-46.506667 59.306667-52.010667 110.805333l93.184 9.301333c1.792-27.349333 8.405333-46.890667 19.754667-58.624 11.434667-11.776 26.837333-17.664 46.165333-17.664 19.541333 0 34.858667 5.589333 45.909334 16.768 11.136 11.264 16.682667 27.221333 16.682666 48.042667 0 18.858667-6.4 37.930667-19.242666 57.258667-9.472 14.037333-35.157333 40.533333-77.098667 79.872-52.096 48.554667-87.04 87.509333-104.704 116.821333A226.688 226.688 0 0 0 341.333333 745.429333h326.613334v-86.826666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "3",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#2E66FA"></path><path d="M627.754667 731.733333c-29.354667 25.088-66.901333 37.632-112.725334 37.632-44.928 0-81.792-11.52-110.592-34.773333-33.066667-26.538667-49.877333-64.469333-50.304-114.133333h92.16c0.426667 21.76 7.552 38.314667 21.333334 49.664 12.288 10.88 28.117333 16.341333 47.402666 16.341333 20.309333 0 36.778667-6.101333 49.322667-18.432 12.544-12.330667 18.773333-29.568 18.773333-51.797333 0-21.290667-6.229333-38.186667-18.773333-50.773334-12.544-12.501333-29.866667-18.773333-52.138667-18.773333h-13.525333v-80.042667H512c42.112 0 63.274667-21.034667 63.274667-63.146666 0-20.309333-5.888-36.096-17.706667-47.445334a60.757333 60.757333 0 0 0-43.818667-17.066666c-17.493333 0-32 5.504-43.434666 16.298666-11.562667 10.88-17.792 25.728-18.773334 44.714667H359.68c0.981333-43.946667 16.042667-78.976 45.397333-104.96 29.354667-25.941333 65.706667-39.04 109.226667-39.04 44.928 0 81.792 13.525333 110.592 40.490667 28.8 26.922667 43.306667 61.610667 43.306667 104.149333 0 48.213333-19.413333 82.688-58.154667 103.552 43.52 23.125333 65.28 61.44 65.28 114.858667 0 48.128-15.957333 85.76-47.573333 112.682666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "4",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M600.96 256v309.802667h60.117333v81.536h-60.16v98.218666h-90.154666v-98.218666H311.466667v-81.237334L522.666667 256h78.293333zM510.72 399.104l-112.042667 166.698667h112.042667V399.104z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "5",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M470.912 343.552h175.786667V256H400.256l-47.786667 253.952 75.434667 10.837333c21.205333-23.552 45.269333-35.413333 72.021333-35.413333 21.546667 0 38.997333 7.509333 52.437334 22.4 13.312 15.018667 20.053333 37.418667 20.053333 67.328 0 31.872-6.741333 55.765333-20.181333 71.552-13.397333 15.872-29.866667 23.765333-49.237334 23.765333-17.066667 0-32.085333-6.186667-45.013333-18.432-13.013333-12.373333-20.821333-29.013333-23.466667-50.133333L341.333333 611.498667c5.546667 40.874667 22.485333 73.429333 50.730667 97.621333 28.330667 24.32 64.938667 36.437333 109.866667 36.437333 56.149333 0 100.053333-21.546667 131.754666-64.554666a176.64 176.64 0 0 0 34.816-107.52c0-48.042667-14.378667-87.210667-43.221333-117.333334-28.8-30.208-63.957333-45.312-105.514667-45.312-21.674667 0-42.922667 5.248-63.829333 15.616l14.976-82.901333z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "6",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512 0c282.88 0 512 229.205333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M519.210667 256c36.992 0 67.626667 10.368 91.776 31.189333 24.192 20.821333 39.68 51.029333 46.293333 90.709334l-90.197333 9.984c-2.176-18.56-7.978667-32.298667-17.28-41.173334-9.258667-8.874667-21.418667-13.226667-36.224-13.226666-19.754667 0-36.437333 8.789333-50.048 26.453333-13.696 17.664-22.314667 54.613333-25.856 110.549333 23.296-27.52 52.138667-41.258667 86.656-41.258666 38.997333 0 72.362667 14.805333 100.181333 44.544 27.733333 29.696 41.685333 68.010667 41.685333 114.858666 0 49.877333-14.634667 89.856-43.818666 119.936-29.226667 30.208-66.730667 45.226667-112.554667 45.226667-49.066667 0-89.429333-19.072-121.130667-57.344C357.12 658.218667 341.333333 595.541333 341.333333 508.416c0-89.344 16.469333-153.813333 49.493334-193.194667C423.722667 275.754667 466.56 256 519.168 256z m-9.472 241.834667c-17.962667 0-33.066667 6.997333-45.525334 21.12-12.330667 14.037333-18.56 34.858667-18.56 62.293333 0 30.421333 6.912 53.76 20.906667 70.4 13.952 16.469333 29.866667 24.746667 47.786667 24.746667 17.28 0 31.701333-6.826667 43.178666-20.309334 11.52-13.525333 17.237333-35.669333 17.237334-66.56 0-31.658667-6.186667-54.869333-18.517334-69.546666a58.197333 58.197333 0 0 0-46.506666-22.144z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "7",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.752 0 512S229.248 0 512.042667 0C794.752 0 1024 229.248 1024 512s-229.248 512-511.957333 512z" fill="#6D768D"></path><path d="M673.024 273.066667H354.133333v86.869333h212.224a691.2 691.2 0 0 0-104.746666 187.989333c-26.026667 70.101333-39.978667 138.88-41.429334 206.293334h89.6c-0.298667-42.922667 6.698667-91.776 21.034667-146.474667a654.72 654.72 0 0 1 62.08-154.965333c27.136-48.554667 53.888-85.76 80.128-111.701334V273.066667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "8",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#6D768D"></path><path d="M512.426667 256c46.208 0 82.048 11.861333 107.605333 35.541333 25.6 23.68 38.314667 53.674667 38.314667 89.898667 0 22.613333-5.802667 42.666667-17.578667 60.330667a111.445333 111.445333 0 0 1-49.450667 40.277333c26.965333 10.837333 47.36 26.752 61.312 47.658667 13.994667 20.906667 21.034667 45.013333 21.034667 72.362666 0 45.098667-14.336 81.834667-42.965333 109.952-28.586667 28.245333-66.602667 42.368-114.090667 42.368-44.245333 0-81.066667-11.648-110.464-34.986666-34.645333-27.52-52.010667-65.28-52.010667-113.365334 0-26.368 6.528-50.645333 19.626667-72.746666 13.056-22.144 33.578667-39.210667 61.696-51.242667-24.064-10.154667-41.557333-24.192-52.48-41.941333a109.824 109.824 0 0 1-16.512-58.666667c0-36.224 12.757333-66.218667 37.973333-89.898667 25.386667-23.68 61.354667-35.541333 108.032-35.541333z m1.28 265.429333c-22.784 0-39.722667 7.978667-50.901334 23.893334-11.136 15.786667-16.64 33.066667-16.64 51.498666 0 25.984 6.485333 46.208 19.712 60.714667 13.098667 14.506667 29.525333 21.802667 49.152 21.802667 19.242667 0 35.157333-6.997333 47.786667-20.992 12.629333-13.909333 18.858667-34.048 18.858667-60.416 0-23.082667-6.314667-41.557333-19.2-55.466667a63.274667 63.274667 0 0 0-48.725334-21.034667z m-0.341334-191.488c-17.792 0-32 5.333333-42.581333 16-10.538667 10.666667-15.872 24.746667-15.872 42.325334 0 18.645333 5.248 33.152 15.701333 43.648 10.453333 10.453333 24.362667 15.658667 41.770667 15.658666 17.664 0 31.658667-5.290667 42.24-15.872 10.538667-10.581333 15.872-25.173333 15.872-43.818666 0-17.493333-5.248-31.573333-15.701333-42.154667s-24.277333-15.786667-41.429334-15.786667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "9",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.333333 229.248 0 512 0c282.88 0 512 229.333333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M497.28 256c49.365333 0 89.856 19.157333 121.429333 57.429333 31.701333 38.229333 47.488 101.205333 47.488 188.842667 0 89.173333-16.384 153.386667-49.365333 192.853333-32.853333 39.594667-75.605333 59.264-128.426667 59.264-37.888 0-68.608-10.154667-91.989333-30.506666s-38.4-50.816-45.013333-91.306667l90.112-9.984c2.261333 18.474667 8.021333 32.085333 17.28 41.088 9.173333 8.874667 21.418667 13.312 36.608 13.312 19.2 0 35.541333-8.874667 48.981333-26.752 13.44-17.749333 22.016-54.613333 25.770667-110.549333-23.466667 27.264-52.821333 40.874667-88.064 40.874666-38.314667 0-71.253333-14.72-99.114667-44.330666C355.242667 506.709333 341.333333 468.224 341.333333 420.864c0-49.493333 14.592-89.258667 43.946667-119.466667C414.549333 271.104 451.925333 256 497.237333 256z m-4.352 77.482667c-17.237333 0-31.658667 6.826667-43.008 20.437333-11.477333 13.653333-17.194667 35.84-17.194667 66.816 0 31.402667 6.229333 54.485333 18.645334 69.205333 12.458667 14.72 27.946667 22.101333 46.592 22.101334 18.005333 0 33.066667-7.082667 45.44-21.205334 12.330667-14.208 18.432-35.029333 18.432-62.506666 0-29.994667-6.912-53.376-20.821334-69.973334-13.824-16.597333-29.866667-24.874667-48.085333-24.874666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "10",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M619.946667 273.066667c46.976 0 83.754667 16.042667 110.250666 48.042666 31.573333 37.973333 47.36 100.864 47.36 188.672 0 87.722667-15.829333 150.698667-47.658666 189.056-26.325333 31.616-62.976 47.36-109.952 47.36-47.274667 0-85.418667-17.237333-114.346667-51.968-28.885333-34.602667-43.392-96.426667-43.392-185.386666 0-87.168 15.872-150.016 47.701333-188.416 26.282667-31.488 62.933333-47.36 110.037334-47.36z m-207.488 12.8v452.266666H325.504V411.690667A299.904 299.904 0 0 1 213.333333 476.373333V398.933333c22.656-7.296 47.36-21.12 73.856-41.514666 26.624-20.522667 44.842667-44.288 54.784-71.552h70.485334z m207.488 60.842666c-11.306667 0-21.461333 3.413333-30.336 10.24-8.874667 6.826667-15.786667 19.157333-20.693334 36.864-6.4 22.997333-9.642667 61.653333-9.642666 115.968 0 54.442667 2.944 91.733333 8.661333 112.128 5.802667 20.352 13.098667 33.877333 21.845333 40.618667 8.789333 6.741333 18.858667 10.154667 30.165334 10.154667 11.349333 0 21.376-3.498667 30.250666-10.325334 8.874667-6.826667 15.786667-19.157333 20.693334-36.778666 6.4-22.826667 9.642667-61.354667 9.642666-115.797334 0-54.314667-2.858667-91.648-8.661333-112.042666-5.802667-20.352-13.013333-33.962667-21.76-40.789334a47.616 47.616 0 0 0-30.165333-10.24z" fill="#FFFFFF"></path></svg>',
            },
          ],
        },
        {
          name: "进度图标",
          type: "progress",
          list: [
            {
              name: "1",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144-294.144A414.72 414.72 0 0 1 928 512c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "2",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512h416c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "3",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144 294.144A414.72 414.72 0 0 1 512 928z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "4",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96v832z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "5",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512l-294.144 294.144A414.72 414.72 0 0 1 96 512c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "6",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512H96c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "7",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512L217.856 217.856A414.72 414.72 0 0 1 512 96V512z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "8",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#12BB37"></path><path d="M716.629333 341.333333h-51.328a35.072 35.072 0 0 0-28.330666 14.293334l-171.989334 233.984-77.909333-106.026667a35.2 35.2 0 0 0-28.330667-14.293333H307.413333c-7.082667 0-11.264 7.936-7.082666 13.653333l136.32 185.472a35.2 35.2 0 0 0 56.533333 0l230.4-313.429333a8.533333 8.533333 0 0 0-6.954667-13.653334z" fill="#FFFFFF"></path></svg>',
            },
          ],
        },
        {
          name: "表情图标",
          type: "expression",
          list: [
            {
              name: "1",
              icon: '<svg t="1624457751393" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12255"><path d="M1.097856 1.097642h1021.804717v1021.804716H1.097856z" fill="#F09495" p-id="12256"></path><path d="M1024.000214 1024H0.000214V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.195498v1019.609432z" fill="#FFFFFF" p-id="12257"></path><path d="M234.695985 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12258"></path><path d="M234.695985 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115s28.339115 12.772559 28.339115 28.339115c0.099786 15.666342-12.672773 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617-11.774703-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12259"></path><path d="M776.232528 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12260"></path><path d="M776.232528 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115 15.666342 0 28.339115 12.772559 28.339115 28.339115 0 15.666342-12.772559 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617c-0.099786-14.468914-11.874488-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12261"></path><path d="M512.000214 671.656987c-52.58702 0-105.872539-17.961411-105.872539-52.387449S459.413194 566.882089 512.000214 566.882089s105.872539 17.961411 105.87254 52.387449S564.587234 671.656987 512.000214 671.656987z m0-74.240499c-21.952836 0-43.207172 3.592282-58.2748 9.77899-13.870201 5.68778-17.06334 11.275775-17.06334 12.07406s3.19314 6.386279 17.06334 12.07406c15.067628 6.186708 36.321965 9.77899 58.2748 9.77899s43.207172-3.592282 58.274801-9.77899c13.870201-5.68778 17.06334-11.275775 17.06334-12.07406s-3.19314-6.386279-17.06334-12.07406c-15.067628-6.286494-36.321965-9.77899-58.274801-9.77899z" fill="#040000" p-id="12262"></path></svg>',
            },
            {
              name: "2",
              icon: '<svg t="1624457767572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1048"><path d="M0 0h1024v1024H0z" fill="#E6A6C9" p-id="1049"></path><path d="M315.1 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM738.7 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM293.5 698.8l-14.5-1.3c0.1-0.6 1.5-14.6 15.1-27.9 17.2-16.7 45-24.8 82.7-24 4.9-0.1 10.9-10.5 16.1-19.6 8.4-14.7 19-33.1 37.9-34.3 19.4-1.2 42.2 16.4 71.5 55.4 9.9 5.2 16.5 11.2 21.8 16.1 8.4 7.7 13.1 11.9 25.1 10.8 14.9-1.4 38.9-11.1 77.5-31.4 26.8-28.4 56.4-41.4 83.5-36.6 27.9 4.9 50.6 27.6 67.5 67.5l-13.4 5.7c-14.7-34.5-34.3-54.9-56.7-58.8-22.3-3.9-47.6 7.8-71.2 33.1l-0.8 0.9-1.1 0.6c-85.6 45.1-99.4 38-120.2 19.1-5.5-5-11.2-10.2-20.1-14.7l-1.5-0.8-1-1.4c-32.2-43.2-50.4-51.6-60-51-11.1 0.7-18.8 14-26.2 27-7.6 13.2-15.4 26.9-28.8 26.9h-0.2c-78.4-1.6-83 38.3-83 38.7z" fill="#040000" p-id="1050"></path></svg>',
            },
            {
              name: "3",
              icon: '<svg t="1624457776082" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1204" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#F7E983" p-id="1205"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1206"></path><path d="M329.174412 344.491728a38.118106 10.277919 57.6 1 0 17.355867-11.014369 38.118106 10.277919 57.6 1 0-17.355867 11.014369Z" fill="#040000" p-id="1207"></path><path d="M644.769475 355.956059a11.175989 36.321965 30 1 0 36.321965-62.911488 11.175989 36.321965 30 1 0-36.321965 62.911488Z" fill="#040000" p-id="1208"></path><path d="M569.678445 671.158059c-26.343403 0-51.190021-5.288638-70.049503-14.967843-20.755408-10.577275-32.230754-25.445332-32.230755-41.710388 0-16.265056 11.475346-31.133112 32.230755-41.710387 18.859482-9.579419 43.805886-14.967843 70.049503-14.967843s51.190021 5.288638 70.049503 14.967843c20.755408 10.577275 32.230754 25.445332 32.230754 41.710387 0 16.265056-11.475346 31.133112-32.230754 41.710388-18.859482 9.679205-43.805886 14.967843-70.049503 14.967843z m0-95.095693c-49.693237 0-84.318846 20.356266-84.318846 38.517248s34.625609 38.517248 84.318846 38.517248 84.318846-20.356266 84.318846-38.517248-34.725395-38.517248-84.318846-38.517248z" fill="#040000" p-id="1209"></path></svg>',
            },
            {
              name: "4",
              icon: '<svg t="1624457781889" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#A6D9E2" p-id="1364"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1365"></path><path d="M376.194134 348.950302m-23.44962 0a23.44962 23.44962 0 1 0 46.89924 0 23.44962 23.44962 0 1 0-46.89924 0Z" fill="#040000" p-id="1366"></path><path d="M629.150672 348.950302m-24.647047 0a24.647047 24.647047 0 1 0 49.294095 0 24.647047 24.647047 0 1 0-49.294095 0Z" fill="#040000" p-id="1367"></path><path d="M397.847613 603.503411c13.471058 8.282206 28.738258 14.468914 43.7061 19.458195 29.835899 9.978562 62.266225 14.169558 93.299551 7.483921 21.054765-4.490353 40.213604-14.369129 56.778016-28.039758 6.785422-5.587995-2.893783-15.167414-9.579419-9.579419-46.999026 38.916391-112.258819 31.033327-163.847983 6.086922-4.590138-2.195284-9.080491-4.490353-13.371272-7.184564-7.583707-4.590138-14.468914 7.184564-6.984993 11.774703z" fill="#040000" p-id="1368"></path><path d="M627.753674 534.052621c-31.033327 24.048334-58.474371 68.253362-37.419607 106.970182 10.577275 19.35841 29.835899 32.629897 48.795167 42.708244 7.982849 4.190996 15.067628-7.883064 7.084779-12.07406-25.245761-13.271487-53.485091-35.324108-49.094524-66.557006 2.793997-20.156695 15.766127-37.319821 29.736114-51.190022 3.392711-3.392711 6.984993-6.785422 10.776847-9.77899 2.993569-2.295069 2.394855-7.483921 0-9.878776-2.893783-3.19314-6.885208-2.49464-9.878776-0.199572z" fill="#040000" p-id="1369"></path></svg>',
            },
            {
              name: "5",
              icon: '<svg t="1624457787809" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1523" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#AD6F59" p-id="1524"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1525"></path><path d="M411.829832 330.730879a38.118106 10.277919 57.6 1 0 17.355867-11.014368 38.118106 10.277919 57.6 1 0-17.355867 11.014368Z" fill="#040000" p-id="1526"></path><path d="M480.669675 609.989476c11.774703-25.844475 27.740401-51.788735 44.60417-73.342429 13.770415-17.462483 29.237186-33.92711 47.897096-44.803742 17.262912-10.078347 35.324108-13.67063 54.283376-6.58585 11.974274 4.390567 23.948548 14.468914 33.128825 24.547261 14.369129 15.865913 25.145975 34.625609 34.725394 53.684662 4.290782 8.581563 17.262912 0.997856 12.972131-7.583707-15.167414-30.334828-35.224323-63.763009-66.157864-80.327421-21.054765-11.37556-44.504385-11.475346-66.157864-1.895927-21.054765 9.280062-38.617034 25.644904-53.485091 42.907815-14.468914 16.863769-27.041902 35.324108-38.217891 54.582733-5.887351 10.178133-11.674917 20.555837-16.464627 31.232898-1.696355 3.692068-0.997856 7.982849 2.694212 10.277918 3.19314 1.895927 8.581563 0.898071 10.178133-2.694211z" fill="#040000" p-id="1527"></path><path d="M663.863649 338.091735a14.468914 33.727538 30 1 0 33.727538-58.417811 14.468914 33.727538 30 1 0-33.727538 58.417811Z" fill="#040000" p-id="1528"></path></svg>',
            },
            {
              name: "6",
              icon: '<svg t="1624457794933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1680" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#83CEE3" p-id="1681"></path><path d="M369 375.8m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1682"></path><path d="M369 411.7c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z m0-69.1c-18.3 0-33.2 14.9-33.2 33.2S350.7 409 369 409s33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1683"></path><path d="M672.2 333.6c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.3-7.6-13zM578.2 720.9c-12.5-96.7-33.3-154.7-55.6-155.6-8.8 3.9-22.3 17.5-37.7 60.1-10.8 29.8-18.4 62.2-23 81.6-1.2 5.1-2.1 9.1-2.9 11.8l-9.3-2.4c0.7-2.6 1.6-6.6 2.8-11.6 14.9-63 36-136.8 67.5-148.8l0.8-0.3h0.8c18.2-0.4 33.2 19.5 45.8 60.8 10.2 33.3 16.7 74.6 20.5 103.3l-9.7 1.1z" fill="#040000" p-id="1684"></path></svg>',
            },
            {
              name: "7",
              icon: '<svg t="1624457802025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1838" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#8CC66D" p-id="1839"></path><path d="M375.778679 404.47473a14.5 33.8 30 1 0 33.8-58.543317 14.5 33.8 30 1 0-33.8 58.543317Z" fill="#040000" p-id="1840"></path><path d="M627.220263 374.211388a43.1 11.6 57.6 1 0 19.588408-12.431182 43.1 11.6 57.6 1 0-19.588408 12.431182Z" fill="#040000" p-id="1841"></path><path d="M451.1 548.5c17.6-9.3 63.9-30 105.3-16.2 17 20.3 32.7 98.8 28.8 138.1-27.5 10.2-82.5 10.2-106.1 5.8-8.3-10.5-32.7-81.8-35.3-114.6-0.4-5.5 2.5-10.6 7.3-13.1z" fill="#040000" p-id="1842"></path></svg>',
            },
            {
              name: "8",
              icon: '<svg t="1624457816632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1996" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#5A74B8" p-id="1997"></path><path d="M357.7 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1998"></path><path d="M357.7 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2 33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1999"></path><path d="M676 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="2000"></path><path d="M676 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2c18.3 0 33.2-14.9 33.2-33.2s-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="2001"></path><path d="M347.6 684.1c0.3-0.9 0.6-1.7 0.9-2.6 0.2-0.5 1.4-3.2 0.3-0.8 0.6-1.4 1.3-2.9 2-4.3 3.2-6.3 6-10.7 10.9-15.3 4.3-4 10.8-7.5 17.1-6.1 3.9 0.9 7.9 4.9 11.1 7.2 3.1 2.2 6.3 4.5 9.7 6.2 7.5 3.8 15.3 4.4 23.4 1.9 4.7-1.5 9.2-3.6 13.6-5.9 5-2.6 10.7-5 14.2-9.5 4.5-5.7 6.1-8.5 11.4-14.1 1-1 2-2 3.1-3 0.2-0.2 2.2-1.7 0.6-0.5 0.6-0.4 1.2-0.9 1.8-1.3 1-0.6 2.1-1.3 3.2-1.7-2 0.8 0.2 0 0.6-0.1 2.3-0.7-0.3-0.2 1.2-0.3 2.8-0.1 3.6 0 5.5 1 3.8 1.9 6.6 4.7 9.5 7.8 4.5 5 7.5 11.1 11.7 16.2 1.8 2.2 3.7 4.3 5.4 6.5 8.1 10.3 17.7 22.2 32.2 22 8.8-0.1 16.6-5.2 22.6-11.2 4.2-4.1 7.7-8.9 11-13.7 2.9-4.2 4.6-9.9 6.2-13.5 3.2-7.1 7.2-13.1 13-18.1 4.8-4.2 11.1-6.5 16.7-5.3 10.5 2.4 17.2 12.1 23.1 20.2 4.7 6.5 9.8 13 16 18.2 7.8 6.4 17.1 11.4 27.5 11.1 14.1-0.4 25.5-9.5 34.2-19.9 3-3.6 3.6-8.8 0-12.4-3.1-3.1-9.4-3.7-12.4 0-6.3 7.6-14.7 15.9-24.9 14.7-2.2-0.3-5.3-1.5-7.9-3.1-3.5-2.1-6.1-4.4-9.1-7.5-4.9-5.1-6.8-8.1-10.9-13.8-7.3-10.1-16.1-19.6-28.2-23.7-18.5-6.3-35.7 5.6-46 20.1-2.4 3.3-4.4 6.9-6.1 10.6-1.8 3.9-2.7 8.5-5.2 11.9-3.1 4.4-6.2 8.8-10.2 12.5-3 2.8-5.7 4.4-8.6 5.1-0.4 0.1-1.7 0.1 0.1 0h-2.2c2.1 0.1 0 0-0.5-0.1-0.7-0.2-1.4-0.4-2-0.6 1.8 0.7-1.8-1.1-2.4-1.5l-1.2-0.9c1.5 1.2-0.9-0.9-1.2-1.1-4.7-4.3-8.4-9.5-12.3-14.4-10.9-13.6-20.9-34-41-34.9-14.2-0.6-24.5 10.6-32.4 20.8-1.2 1.6-2.5 3.2-3.7 4.8-1.5 1.9 1.1-1.4-0.4 0.5-0.4 0.5-0.8 1.2-1.3 1.6-1.7 1.4-4.6 2.6-6.6 3.6-2.9 1.6-5.9 3.2-9 4.5-1.6 0.7-3.4 1.2-5.1 1.7-2.2 0.6-0.7 0.5-2.8 0.4-2.8 0-3.9-0.4-6.6-1.9-3.9-2.2-7.5-4.9-11.1-7.5-5.6-4-10-6.9-17-7.5-10.5-0.9-20.3 3.2-28.2 9.9-9.4 8.1-16.4 20.2-20.1 32-3.6 11.2 13.3 15.8 16.8 5.1z" fill="#040000" p-id="2002"></path></svg>',
            },
            {
              name: "9",
              icon: '<svg t="1624457826949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2156" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F0884F" p-id="2157"></path><path d="M287.2 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM598 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM505.9 527.1c3.4 0.7 6.8 1.7 10.2 2.8 6.7 2.2 10.4 3.5 16.6 7.7 1.6 1.1-0.5-0.5 0.6 0.5 0.6 0.5 1.1 1.1 1.7 1.6 1.5 1.4-0.1-0.4 0.5 0.6 0.4 0.6 0.7 1.2 1 1.8-1-2 0.1 0 0 0.5 0.1-2-0.1 0-0.1 0-0.1 0.8 0 0.7 0.1-0.5-0.1 0.4-0.1 0.7-0.3 1.1-0.6 1 0.7-0.9-0.4 1-1.6 2.5-4.6 5.4-8.1 7.8-6.8 4.6-14.4 8.2-22 11.4-7 3-7.4 11.9 0 14.8 7.4 2.8 15 5.3 22.4 8.1 3.1 1.1 4.2 1.5 6.9 2.9 1.1 0.6 2.1 1.2 3.2 1.8 1.2 0.8-0.7-0.5 0.1 0 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.8-1.1-1.2-0.2-0.2 0.8 0.9-0.3-1.4-0.1-0.2 0.1 0.9 0.2-1.9 0-0.9-0.1 0.5-0.8 1.8 0 0.2-0.2 0.5-0.5 1-0.8 1.4-0.3 0.3-0.9 1.3-0.3 0.5-0.5 0.7-1.1 1.3-1.7 1.9-6.9 7.3-15.9 12.8-24.4 18.1-8.3 5.3-0.6 18.5 7.7 13.2 9.9-6.3 20.9-12.8 28.6-21.8 4.8-5.5 8.1-12.9 4.2-19.9-3.4-6-10.5-8.9-16.6-11.4-8.6-3.5-17.5-6.2-26.2-9.5v14.8c14.4-6.1 47.2-18.8 41.2-40.3-3.5-12.9-19.4-18.9-30.8-22.6-3.4-1.1-6.9-2.1-10.5-2.9-9.1-2.2-13.3 12.5-3.6 14.6z" fill="#040000" p-id="2158"></path></svg>',
            },
            {
              name: "10",
              icon: '<svg t="1624457835383" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2312" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F6F180" p-id="2313"></path><path d="M342.9 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2314"></path><path d="M342.9 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.7 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.6-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2315"></path><path d="M702 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2316"></path><path d="M702 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.7-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2317"></path><path d="M358.7 519.9c20 22 45.5 40.4 71.3 54.8 51.2 28.5 111.7 39.9 168 19.5 44.3-16.1 80.7-47.8 110.2-83.9 3-3.7 3.6-8.9 0-12.5-3.1-3.1-9.5-3.7-12.5 0-25.5 31.4-56.2 59.7-93.7 76-27.1 11.7-56.6 15.7-85.8 12.2-24.7-2.9-49.5-11.8-71.5-23.4-18.7-9.8-36.6-22.2-51.1-34.3-7.8-6.5-15.5-13.3-22.4-20.9-7.7-8.5-20.1 4.1-12.5 12.5z" p-id="2318"></path></svg>',
            },
            {
              name: "11",
              icon: '<svg t="1624457841751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2472" ><path d="M48.2 844.9c-68.5-210.6 186-782.1 409.1-795.4 6.3-0.4 12.5 0.2 18.6 1.6C665.1 94.6 985.4 515 987.1 821.3c0.1 20-12.9 37.9-22.4 43.1-162.7 89.8-605.8 179.7-884.4 30.9-15-7.9-24.2-26.1-32.1-50.4z" fill="#F0884F" p-id="2473"></path><path d="M401 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2474"></path><path d="M408.7 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2475"></path><path d="M527.5 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2476"></path><path d="M527.5 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2477"></path><path d="M450.7 517c1.1-8.2 3.2-16.4 6.1-24.1 0.1-0.3 1-2.5 0.5-1.4s0.3-0.7 0.5-1c0.7-1.4 1.4-2.8 2.2-4.1 0.4-0.8 2.8-3.9 1.3-2.1 0.8-1 1.7-1.9 2.6-2.8 1-1-1.5 1 0.1 0 0.5-0.3 1-0.6 1.5-0.8-1.3 0.7-1.2 0.3 0 0.1 1.9-0.3-1.8 0.3 0.1 0 1.2-0.2 1.5 0.3 0-0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.3 0.1-1.3-0.7 0.2 0.1 0.8 0.5 1.6 0.9 2.4 1.4 1.4 1 0-0.1 1.4 1.1 0.9 0.8 1.8 1.7 2.6 2.6 1.8 1.9 3.5 3.9 5 6.1 5.1 7.1 9.3 14.8 13.2 22.6 3.5 6.9 13.7 4.7 15.8-2.1 2.6-8.7 4.8-17.4 7.4-26.1 0.9-3.2 1.9-6.4 3.2-9.4-0.7 1.6 0.8-1.6 1.2-2.2l0.9-1.5c0.7-1.2-1.4 0.7 0.1-0.1 1.7-0.9-1.2 0.3-0.3 0.1 0.8-0.2 1-1.2 0.3-0.3-0.6 0.8 0.6 0-0.5 0.2-2 0.3 2.4 0.5-1.1 0 0.5 0.1 1.2 0.2 1.6 0.4-1.1-0.8-0.8-0.4 0.2 0.2 0.7 0.4 3.4 2.3 2.7 1.8 8.9 7.1 15.9 16.9 22.5 26 2.8 3.8 7.5 5.6 11.8 3.1 3.7-2.2 5.9-8 3.1-11.8-8.2-11.1-16.6-23-27.7-31.4-6.3-4.7-14.5-7.6-21.7-3-6.7 4.2-9.6 12.5-11.9 19.6-3.2 9.9-5.5 20-8.6 29.9 5.3-0.7 10.5-1.4 15.8-2.1-7.8-15.5-24.8-50.1-48-41.7-14.1 5.1-19.7 23-22.9 36.2-0.9 3.8-1.8 7.7-2.3 11.6-0.6 4.6 1.1 9.3 6 10.6 4.2 1 10.2-1.5 10.8-6.1z" fill="#040000" p-id="2478"></path></svg>',
            },
            {
              name: "12",
              icon: '<svg t="1624457847424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2632" ><path d="M485.538528 993.072489a362.00362 481.804818 3.149 1 0 52.933731-962.15464 362.00362 481.804818 3.149 1 0-52.933731 962.15464Z" fill="#AADCF0" p-id="2633"></path><path d="M688.2 334.1c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.4-7.6-13zM375.8 347c13.4 6.8 26.7 14 39.5 21.9 1.8 1.2 3.7 2.3 5.5 3.5 0.9 0.6 1.7 1.2 2.6 1.8 0.9 0.6 1.9 1.4 1.6 1.1 1.1 0.9 2.1 1.9 3.1 2.8 1.2 1 0-0.3 0.1 0 0-0.2-0.8-2.4-0.3-4.1 1.5-5.5 2.3-2.7 0.8-2-0.4 0.2-0.9 0.8-1.3 1.1 1.7-1.4-1.6 1.1-2.3 1.6-3.4 2.3-6.9 4.4-10.4 6.4-14.9 8.6-30.3 16.4-45.6 24.3-8.6 4.4-1 17.4 7.6 13 15-7.7 30.1-15.4 44.8-23.8 6.2-3.6 13.8-7.3 18.7-12.7 7.6-8.3-3.8-16.6-9.9-20.9-8.7-6.1-18-11.3-27.3-16.4-6.5-3.6-13-7.1-19.6-10.4-8.6-4.5-16.3 8.5-7.6 12.8zM412.8 570.9c13.5 7.7 28.5 13.3 43.3 17.9 29.8 9.2 61.7 13.1 92.6 7.3 20.6-3.9 40-12.5 56.6-25.2 2.8-2.2 4.3-5.6 2.3-9-1.6-2.8-6.2-4.5-9-2.3-48.3 36.9-113.3 30-165.6 6.7-4.6-2.1-9.2-4.2-13.7-6.7-7.3-4.2-13.9 7.2-6.5 11.3z" fill="#040000" p-id="2634"></path><path d="M644.6 505.2c-30.1 21.5-60.6 62.5-39.1 99.8 10.7 18.6 30.3 30.9 49.1 40.1 7.8 3.8 14.6-7.9 6.8-11.7-23.6-11.5-53.7-31.4-49.4-60.9 2.8-18.9 15.8-34.6 29.5-47.2 2.5-2.3 5.1-4.6 7.8-6.7 0.5-0.4 0.9-0.7 1.4-1.1-0.4 0.3-1.2 0.9-0.1 0.1l0.9-0.6c6.9-5.1 0.2-16.8-6.9-11.8z" fill="#040000" p-id="2635"></path></svg>',
            },
            {
              name: "13",
              icon: '<svg t="1624457855182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2789" ><path d="M235.1 76.9c75.6-26.5 297.3-90.1 514.2-16.6 16.3 5.5 29.8 17.4 37.1 33 57.5 122.4 127.1 602.1 62.1 785.6a62.58 62.58 0 0 1-32.5 35.8c-109.5 51.8-428.1 136.7-609.3 37.2-14.4-7.9-25-21.3-29.7-37.1-41.9-140.6-37-627.7 19.1-798 6.1-18.7 20.5-33.4 39-39.9z" fill="#F9DABD" p-id="2790"></path><path d="M392.2 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2791"></path><path d="M618.6 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2792"></path><path d="M512 562.6c-36 0-65.3-29.3-65.3-65.3S476 432 512 432s65.3 29.3 65.3 65.3-29.3 65.3-65.3 65.3z m0-122.9c-31.7 0-57.6 25.8-57.6 57.6s25.8 57.6 57.6 57.6c31.7 0 57.6-25.8 57.6-57.6s-25.9-57.6-57.6-57.6z" fill="#040000" p-id="2793"></path></svg>',
            },
            {
              name: "14",
              icon: '<svg t="1624457863444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2947" ><path d="M178.1 971.5c38.1 15.9 98.7 26.6 171.3-12.3 3.7-2 8.4-1.6 11.6 1.1 43.3 35.9 123.3 80.8 236 10.9 3.8-2.4 8.7-2.4 12.6-0.2 41.8 23.9 191.6 58.2 246.6 14.2 4.4-3.5 9.1-6.6 14.5-8.5C1065 909.5 678.2-652 194.3 351c-37.5 77.8-38.4 94.1-71.9 211.3-27.6 96.3-29.1 231.3 1.4 348.1 7.2 27.3 27.3 49.9 54.3 61.1z" fill="#ABAAAA" p-id="2948"></path><path d="M468.9 349H418c-6.1 0-11.1-5-11.1-11.1V336c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.1-5 11.1-11.1 11.1zM643 471.9H390c-6.6 0-12-5.4-12-12s5.4-12 12-12h253c6.6 0 12 5.4 12 12s-5.4 12-12 12zM609 349h-61.2c-6 0-11-4.9-11-11v-2.1c0-6 4.9-11 11-11H609c6 0 11 4.9 11 11v2.1c0 6.1-4.9 11-11 11z" fill="#040000" p-id="2949"></path></svg>',
            },
            {
              name: "15",
              icon: '<svg t="1624457870536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3103" ><path d="M673.1 318.7c3.7-17.5 5.6-35.7 5.6-54.4 0-137.9-105.5-249.7-235.6-249.7S207.4 126.4 207.4 264.3c0 55.4 17.1 106.7 45.9 148.1-55.2 63.3-88.6 145.9-88.6 236.3 0 199.2 162.1 360.6 362.1 360.6 200 0 362.1-161.5 362.1-360.6 0.1-147.3-88.7-274-215.8-330z" fill="#4F8A54" p-id="3104"></path><path d="M392 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3105"></path><path d="M386 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3106"></path><path d="M505.6 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3107"></path><path d="M501.4 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3108"></path><path d="M474.3 364.8h-50.9c-6.1 0-11.1-5-11.1-11.1v-1.9c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.2-5 11.1-11.1 11.1z" fill="#040000" p-id="3109"></path></svg>',
            },
            {
              name: "16",
              icon: '<svg t="1624457876371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3263" ><path d="M246.4 227.6c-166.9 101.1-461.9 344 87 564.1 1.5 0.6 2.9 1.1 4.4 1.6 80.7 27.7 392.8 165.4 641-198.1 40-58.6 38.5-136.2-3.7-193.3C892 289.5 727 201.1 429.1 182.7c-64.1-4-127.8 11.6-182.7 44.9z" fill="#CF92BE" p-id="3264"></path><path d="M617.1 393.4c-17.4 8.8-34.9 18.1-51.2 28.9-6.9 4.6-20.3 12.3-17.4 22.6 1.2 4.3 5.6 7 9 9.5 3.7 2.7 7.6 5 11.5 7.3 18.2 10.8 37.1 20.3 55.9 30 10 5.1 18.9-10 8.8-15.1-16.4-8.4-32.9-16.9-49-26-4.5-2.6-9.1-5.2-13.5-8l-4.5-3c-0.7-0.5-1.3-1-2-1.5 1.6 1.2 0.7 0.4-0.2-0.2-1.3-0.9-0.3-0.9-0.5-0.3 0.2 0.2 0.4 0.5 0.6 0.7 1 1.9 1.3 3.7 0.8 5.7 0.1-0.6 0.7-1.4-0.6 1.3 0.7-1.5-0.1 0-0.2 0.1 0.6-0.6 1.2-1.3 1.9-1.9l1.8-1.5c1.8-1.6-0.6 0.3 1.2-0.9 2-1.5 4.1-2.9 6.2-4.3 10-6.5 20.4-12.4 30.9-18 6.5-3.5 13.1-7 19.7-10.4 9.6-5 0.8-20.1-9.2-15zM323.1 408.5c15.9 8.1 31.7 16.5 46.8 26 2.2 1.4 4.3 2.8 6.5 4.2 1 0.7 1.9 1.3 2.8 2 0.5 0.3 1 0.7 1.4 1.1-1.1-0.9-0.3-0.3 0.3 0.3 1.1 1 2.2 2.2 3.3 3.1 1.4 1.1-1-1.7-0.1-0.1-0.6-1.1-0.9-4.1 0.3-6.7 2.2-4.8 0.7 0.1 0-0.5 0 0-1.1 0.9-1.3 1 2.3-1.9 0 0-0.5 0.4-0.8 0.5-1.5 1.1-2.3 1.6-4 2.7-8.1 5.1-12.3 7.5-17.3 10-35.1 19.1-52.8 28.2-10 5.1-1.2 20.2 8.8 15.1 17.5-9 35-17.9 52-27.7 7.3-4.2 15.9-8.6 21.8-14.7 9.3-9.7-4.3-19.7-11.5-24.7-10.1-7.1-20.9-13.1-31.7-19-7.6-4.2-15.2-8.2-22.9-12.1-9.7-5.2-18.6 9.9-8.6 15zM513 592.1c-12.2 0-24.6-1.4-36.3-4.3-8-2-13.9-8.2-15.4-16.2s1.7-15.8 8.4-20.5c23.2-16.3 60.5-31.9 106.2-13 6.4 2.6 11 8.3 12.3 15.1 1.3 6.7-0.8 13.6-5.7 18.3-13.5 13.1-40.9 20.6-69.5 20.6z m-37.4-32.5c-3.4 2.4-4.9 6.2-4.2 10.2 0.8 4.1 3.6 7.1 7.7 8.1 39.1 9.7 81.2 0.7 96.1-13.7 2.4-2.3 3.4-5.6 2.7-8.9-0.7-3.4-2.9-6.2-6.1-7.5-41.2-17.2-75.1-3.1-96.2 11.8z" fill="#040000" p-id="3265"></path></svg>',
            },
            {
              name: "17",
              icon: '<svg t="1624457881793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3419" ><path d="M1008.6 465.7c0-124.9-95.5-226.2-213.4-226.2-12 0-23.8 1.1-35.2 3.1v-3.1c0-124.9-95.5-226.2-213.4-226.2S333.4 114.6 333.4 239.5c0 2.4 0 4.8 0.1 7.2-17.1-4.7-35-7.2-53.4-7.2-117.8 0-213.4 101.3-213.4 226.2 0 92.1 51.9 171.3 126.3 206.6-13.7 29.9-21.4 63.4-21.4 98.8 0 124.9 95.5 226.2 213.4 226.2 68.8 0 130-34.5 169-88.1 39 53.6 100.2 88.1 169 88.1 117.8 0 213.4-101.3 213.4-226.2 0-41.2-10.4-79.9-28.6-113.1 60.5-39.9 100.8-111.1 100.8-192.3z" fill="#8CC66D" p-id="3420"></path><path d="M437.8 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3421"></path><path d="M649.7 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3422"></path><path d="M527.3 625.9c6.3-14.2 13.1-28.3 17.9-43 6.2-19 8.3-38.6 10.5-58.3l2.1-19.2c0.7-6.2-9-6.1-9.7 0-1.7 16.3-2.8 32.8-5.7 48.9-4.2 23.7-13.8 45-23.5 66.7-2.5 5.6 5.9 10.5 8.4 4.9z" fill="#252525" p-id="3423"></path><path d="M447.7 522.3c20.3-0.1 40.6-0.2 61-0.4l96.6-0.6c7.5 0 14.9-0.1 22.4-0.1 16.6-0.1 16.7-25.9 0-25.8-20.3 0.1-40.6 0.2-61 0.4l-96.6 0.6c-7.5 0-14.9 0.1-22.4 0.1-16.6 0.1-16.7 25.9 0 25.8z" fill="#040000" p-id="3424"></path><path d="M495.4 508.2c-10.3 3.8-9.2 20.9-9.2 29.5 0.1 16 2.1 32.3 6.1 47.8 3.5 13.7 8.7 29.9 20.6 38.7 12.9 9.5 27.6 2.1 37.6-7.9 10.2-10.3 17.8-23 24.7-35.6 11.6-21.3 20.9-43.8 29.7-66.4 3-7.8-9.5-11.1-12.5-3.4-7.4 19.1-15.3 38.1-24.7 56.4-5.9 11.5-12.2 23-20.3 33.1-2.8 3.5-5.8 6.9-9.2 9.8-1.9 1.7-1.4 1.3-3.3 2.5-1.3 0.8-2.6 1.6-3.9 2.2-0.7 0.3 1-0.2-0.8 0.3-0.6 0.2-1.2 0.3-1.8 0.5-1.1 0.3-1.2 0.2-0.5 0.1-0.6 0-1.3 0-1.9 0.1-2.2 0.1 0.6 0.5-1.8-0.2l-1.8-0.6c1.5 0.5 0.2 0.1-0.5-0.3-0.8-0.5-2.9-2.1-1.7-1.1-1-0.9-2-1.7-2.8-2.7-0.4-0.5-0.9-1-1.3-1.5 0.4 0.5 0.1 0.2-0.5-0.7-0.8-1.3-1.7-2.5-2.4-3.9-0.7-1.3-1.4-2.5-2-3.8-0.4-0.8-0.8-1.6-1.1-2.4-0.1-0.2-0.5-1.1 0 0l-0.6-1.5a86.8 86.8 0 0 1-3.3-9.8c-4.4-14.9-6.2-27.9-6.8-42.8-0.3-6.6-0.3-13.1 0.4-19.7 0.2-1.5-0.3 1.5 0.1-0.5l0.3-1.8c0.2-0.9 0.5-1.8 0.7-2.8 0.4-1.9-0.7 1.1 0.3-0.7 0.5-1-1.3 1.2-0.3 0.5-0.3 0.3-1.1 0.8-2 1.1 7.7-2.9 4.3-15.4-3.5-12.5z" fill="#040000" p-id="3425"></path></svg>',
            },
            {
              name: "18",
              icon: '<svg t="1624457899440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3579" ><path d="M75.4 739.8c-78.7-134.4-194-455.7 401.4-579.6 9.8-2 19.2-6.2 29.2-7.5C656.8 133 947.3 205 1000.1 578.4c42.6 223.8 29.7 392.1-822 233.6-43.1-8-80.6-34.4-102.7-72.2z" fill="#F09495" p-id="3580"></path><path d="M704.6 875.4c-129 0-301.8-20.5-526.6-62.3-43.5-8.1-81.2-34.6-103.5-72.7-19.3-32.9-44.8-84.3-57.1-142.5-13.9-65.1-8.8-125.3 15.1-179.2 54.3-122.3 203.7-209.6 444-259.6 4.1-0.9 8.3-2.1 12.3-3.4 5.5-1.7 11.1-3.4 16.9-4.2 29-3.8 75.7-5.9 133.8 5.7 54.5 10.9 105.3 31 150.8 59.9C843.7 251 888.2 296 922.7 351c39.7 63.1 66.1 139.6 78.5 227.3 8.1 42.4 15.2 87.3 12.5 127.9-2.8 42.6-16.4 75.5-41.5 100.7-42.5 42.7-120.3 65-237.8 68.1-9.6 0.2-19.6 0.4-29.8 0.4zM76.3 739.3c22 37.6 59.2 63.7 102.1 71.7 242.5 45.1 424.4 65.3 556.1 61.9 116.9-3.1 194.1-25.2 236.3-67.5 55.4-55.6 44.4-142.5 28.3-226.7C976 415.8 903.4 291.5 789.2 219c-124-78.7-248.1-69.9-283.2-65.3-5.6 0.7-11.2 2.4-16.6 4.1-4.1 1.2-8.3 2.5-12.5 3.4C237.3 211.1 88.5 298 34.5 419.6c-54.6 122.8 2.8 253 41.8 319.7z" fill="#FFFFFF" p-id="3581"></path><path d="M424.1 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3582"></path><path d="M635.9 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3583"></path><path d="M426.2 543.3c17.1 7.9 36.6 26 25.5 46.1-6.9 12.5-19.8 21.2-31.7 28.4-4.5 2.7-0.4 9.8 4.1 7.1 17.4-10.5 41.6-27.6 39-51.1-1.6-14-12.4-24.8-23.5-32.3-3-2-6.1-3.9-9.3-5.4-4.8-2.1-8.9 5-4.1 7.2zM629.5 535.4c-21.8 11.7-40.6 37-25.7 61.3 8.2 13.4 22.2 22.7 35.7 30.3 4.7 2.7 8.9-4.6 4.2-7.2-15.5-8.7-39.9-23.9-36.9-45.2 1.6-11.4 10.7-20.7 19.6-27.2 2.4-1.7 4.8-3.4 7.4-4.8 4.7-2.5 0.4-9.8-4.3-7.2z" fill="#040000" p-id="3584"></path><path d="M457.2 584.6c25.6 25.6 66.7 41 101.8 28.3 18.2-6.6 33.2-19.1 45.5-33.8 4.2-5.1-3-12.4-7.3-7.3-18.5 22-43.3 38.1-73 35-18.6-1.9-36.2-10.8-50.9-22-2.9-2.2-6.1-4.8-8.8-7.5-4.7-4.7-12 2.6-7.3 7.3z" fill="#040000" p-id="3585"></path></svg>',
            },
            {
              name: "19",
              icon: '<svg t="1624457904464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3739" ><path d="M915.9 510.5c8.4-19 13.1-39.8 13.1-61.7 0-90-78.9-162.9-176.2-162.9-3.2 0-6.3 0.1-9.5 0.2v-0.2c0-94.8-116.2-171.6-259.6-171.6S224 191.2 224 286v2c-96.2 0-174.1 72-174.1 160.9 0 38 14.3 73 38.2 100.5-41.8 29.4-68.8 75.9-68.8 128.2 0 88.9 78 160.9 174.1 160.9 17.1 0 33.6-2.3 49.3-6.5 28.9 46.1 88.7 77.7 157.6 77.7 49.4 0 94-16.2 126-42.3 32 26.1 76.6 42.3 126 42.3 77.3 0 143-39.7 166.7-95 3.1 0.2 6.3 0.2 9.5 0.2 97.3 0 176.2-72.9 176.2-162.9 0-60.6-35.7-113.4-88.8-141.5z" fill="#5A74B8" p-id="3740"></path><path d="M357.6 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3741"></path><path d="M357.5 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3742"></path><path d="M531.3 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3743"></path><path d="M531.2 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3744"></path><path d="M426.7 574.6c20.9 29.9 59.7 52.2 96.2 38.6 19.2-7.2 34.7-21.2 47.6-36.9 2.8-3.5 3.4-8.3 0-11.7-2.9-2.9-8.9-3.5-11.7 0-16.5 20.2-40.9 40.9-68.1 35.5-17.3-3.4-31-13.2-42.9-25.9-2-2.2-3.9-4.4-5.8-6.7-1.6-1.9 1.1 1.5-0.4-0.6-0.2-0.2-0.3-0.5-0.5-0.7-6.2-8.7-20.6-0.4-14.4 8.4z" fill="#040000" p-id="3745"></path></svg>',
            },
            {
              name: "20",
              icon: '<svg t="1624457910321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3899" ><path d="M792.8 301.4c-8.2 0-16.2 0.4-24.2 1.3-12.3-81.8-129.2-145.9-271.8-145.9-137.1 0-250.5 59.3-269.9 136.6C105.3 295.5 7.4 391.2 7.4 508.9c0 119.1 100.2 215.6 223.7 215.6 5.3 0 10.6-0.2 15.8-0.5 14.4 80.5 130.4 143.2 271.3 143.2 135.9 0 248.6-58.3 269.4-134.6 1.7 0 3.4 0.1 5.1 0.1 123.6 0 223.7-96.5 223.7-215.6s-100-215.7-223.6-215.7z" fill="#F6CD50" p-id="3900"></path><path d="M435.9 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3901"></path><path d="M588.1 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3902"></path><path d="M435.9 431.5m-27.8 0a27.8 27.8 0 1 0 55.6 0 27.8 27.8 0 1 0-55.6 0Z" fill="#040000" p-id="3903"></path><path d="M601.9 407.4c-5.7 2.9-11.3 5.9-16.9 9-6.8 3.8-15.3 7.8-20.5 13.8-5.6 6.5 1.6 11.1 6.7 14.4 11.2 7.1 23.3 13 35.1 19 5.7 2.9 10.8-5.7 5.1-8.6-10.9-5.6-21.9-11.1-32.4-17.4-2.4-1.4-4.6-3.1-7-4.6 1 0.6-0.4-0.4-0.4-0.4-1.9-0.3-0.5 4.2 0.5 4.1-0.1 0-0.6 0.3 0.3-0.3 0.5-0.3 1-0.9 1.5-1.3 9.7-7.9 21.9-13.5 33.1-19.2 5.7-2.7 0.6-11.4-5.1-8.5zM406.6 547.6c11.5 14.4 27 26.7 42.7 36.3 32.2 19.8 71.2 27.2 107.6 15.4 29.5-9.6 54.6-29.1 75.5-51.6 10.8-11.6-6.6-29.1-17.5-17.5-9.4 10.1-19.5 19.7-30.8 27.7-4.6 3.2-9.3 6.2-14.2 8.9-5 2.8-9.9 5.1-14.1 6.7-4.6 1.7-9.3 3.2-14.1 4.4-2.2 0.5-4.4 1-6.6 1.4-1 0.2-2 0.3-2.9 0.5 2.6-0.4-2.1 0.2-2.5 0.3-4.1 0.4-8.3 0.5-12.5 0.4-2.2-0.1-4.4-0.2-6.6-0.4-1.1-0.1-2.2-0.2-3.2-0.3-1.5-0.2-1.4-0.2 0.1 0l-2.1-0.3c-7.8-1.3-15.4-3.4-22.8-6.2-0.9-0.4-1.8-0.7-2.8-1.1-3.1-1.2 2.3 1.1-0.7-0.3-1.5-0.7-2.9-1.3-4.4-2-3.7-1.8-7.2-3.7-10.8-5.8-5.7-3.4-11.1-7.1-16.4-11.1 3 2.3-1.1-0.9-1.8-1.5-1.1-0.9-2.1-1.7-3.1-2.6-2.1-1.8-4.2-3.7-6.3-5.6-4.4-4.1-8.7-8.4-12.4-13.1-4.2-5.2-13.1-4.3-17.5 0-5 5.1-4 12.2 0.2 17.4z" fill="#040000" p-id="3904"></path></svg>',
            },
          ],
        },
        {
          name: "标记图标",
          type: "sign",
          list: [
            {
              name: "1",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M809.728 429.696a18.901333 18.901333 0 0 0-15.274667-12.885333l-183.466666-26.624-81.92-166.272a18.901333 18.901333 0 0 0-34.005334 0l-81.92 166.272-183.594666 26.624a19.029333 19.029333 0 0 0-10.496 32.298666l132.693333 129.536-31.274667 182.741334a18.816 18.816 0 0 0 27.477334 19.84l164.138666-86.186667 164.096 86.058667a18.773333 18.773333 0 1 0 27.434667-19.84l-31.36-182.741334 132.693333-129.408a18.901333 18.901333 0 0 0 4.778667-19.413333z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "2",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M644.565333 306.901333c32.128 0 65.834667-5.76 101.077334-17.237333a17.066667 17.066667 0 0 1 22.357333 16.213333v328.32c-1.109333 0.768 10.325333 27.093333-99.370667 19.84-109.653333-7.210667-181.76-45.098667-246.869333-45.098666-65.152 0-49.322667 2.688-74.154667 8.405333v168.064a24.746667 24.746667 0 0 1-24.490666 25.258667 22.528 22.528 0 0 1-17.28-7.253334 24.149333 24.149333 0 0 1-7.168-18.005333V281.258667C299.776 280.490667 328.106667 256 421.76 256s164.437333 50.901333 222.805333 50.901333z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "3",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M524.074667 225.408l274.517333 274.517333a17.066667 17.066667 0 0 1 0 24.149334l-274.517333 274.517333a17.066667 17.066667 0 0 1-24.149334 0l-274.517333-274.517333a17.066667 17.066667 0 0 1 0-24.149334l274.517333-274.517333a17.066667 17.066667 0 0 1 24.149334 0z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "4",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M317.866667 300.8h388.266666c9.386667 0 17.066667 7.68 17.066667 17.066667v388.266666a17.066667 17.066667 0 0 1-17.066667 17.066667h-388.266666a17.066667 17.066667 0 0 1-17.066667-17.066667v-388.266666c0-9.386667 7.68-17.066667 17.066667-17.066667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "5",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M498.346667 279.082667L248.789333 701.44a15.829333 15.829333 0 0 0 13.653334 23.893333h499.114666a15.829333 15.829333 0 0 0 13.653334-23.893333l-249.6-422.357333a15.829333 15.829333 0 0 0-27.264 0z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "6",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path><path d="M634.538667 487.808L555.050667 426.24 507.306667 256a201.002667 201.002667 0 0 0-23.594667 20.394667l-0.256-0.256L525.653333 426.666667l-133.290666 59.946666a14.08 14.08 0 0 0-8.021334 15.957334l28.757334 126.378666a14.208 14.208 0 0 0 27.733333-6.229333l-26.24-115.114667 126.037333-56.704 76.416 59.136a14.250667 14.250667 0 0 0 19.968-2.474666 14.08 14.08 0 0 0-2.474666-19.797334z" fill="#6D768D"></path></svg>',
            },
            {
              name: "7",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "8",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M374.656 273.194667c5.973333 4.48 12.117333 9.6 18.346667 15.36 6.272 5.717333 11.904 12.373333 16.896 19.84 2.517333 4.010667 5.504 8.490667 9.002666 13.482666a529.493333 529.493333 0 0 1 20.266667 32.213334h155.221333a169.813333 169.813333 0 0 0 9.770667-15.744c2.474667-4.48 5.248-8.96 8.234667-13.482667a460.842667 460.842667 0 0 1 23.253333-31.829333c4.992-6.229333 12.245333-12.373333 21.76-18.346667a34.261333 34.261333 0 0 0 10.112-9.728 31.274667 31.274667 0 0 0 5.248-11.989333 18.56 18.56 0 0 0-1.536-11.605334 17.664 17.664 0 0 0-10.112-8.618666c-4.48-1.493333-8.362667-2.005333-11.605333-1.493334a46.933333 46.933333 0 0 0-9.770667 2.602667c-3.242667 1.28-6.613333 2.645333-10.112 4.138667a32.426667 32.426667 0 0 1-12.757333 2.261333 26.026667 26.026667 0 0 1-12.373334-2.645333 45.653333 45.653333 0 0 1-8.96-6.357334l-8.661333-7.850666a30.336 30.336 0 0 0-11.989333-6.4c-9.984-3.968-18.005333-4.693333-24.021334-2.218667-5.973333 2.474667-11.946667 6.485333-17.962666 11.946667a88.618667 88.618667 0 0 1-11.989334 10.496 7.338667 7.338667 0 0 1-3.754666 1.493333 46.165333 46.165333 0 0 1-8.277334-5.205333 71.808 71.808 0 0 1-7.125333-4.906667 37.973333 37.973333 0 0 1-6.4-6.357333c-3.968-3.968-9.941333-6.613333-17.92-7.850667a31.061333 31.061333 0 0 0-21.76 4.138667c-8.533333 5.461333-14.506667 10.069333-18.048 13.824a29.354667 29.354667 0 0 1-15.744 7.893333 23.978667 23.978667 0 0 1-13.098667-0.768 987.733333 987.733333 0 0 0-14.634666-4.48 80.725333 80.725333 0 0 0-14.250667-2.986667 16.768 16.768 0 0 0-11.989333 2.986667c-6.997333 5.461333-9.258667 12.074667-6.741334 19.84a34.56 34.56 0 0 0 13.482667 18.346667z" fill="#FFFFFF"></path><path d="M780.757333 545.152a219.306667 219.306667 0 0 0-19.882666-65.536 224.981333 224.981333 0 0 0-33.365334-49.792 430.336 430.336 0 0 0-37.12-37.12c-14.506667-11.946667-27.264-23.296-38.272-34.048a544.512 544.512 0 0 1-27.733333-28.842667 305.28 305.28 0 0 1-22.485333-26.197333h-168.746667c-6.485333 8.490667-13.994667 17.493333-22.485333 26.965333a360.96 360.96 0 0 1-26.24 28.074667c-10.538667 10.24-22.272 21.12-35.285334 32.597333a305.493333 305.493333 0 0 0-41.6 44.16 250.026667 250.026667 0 0 0-49.493333 117.589334 216.106667 216.106667 0 0 0 1.877333 70.4 220.586667 220.586667 0 0 0 75.349334 126.549333c21.248 18.005333 47.146667 32.597333 77.653333 43.818667 30.464 11.264 65.493333 16.853333 104.96 16.853333 38.528 0 72.874667-4.864 103.125333-14.592a265.045333 265.045333 0 0 0 78.378667-39.338667c21.973333-16.469333 39.594667-35.797333 52.864-58.026666 13.226667-22.186667 22.101333-45.824 26.624-70.784 4.992-30.421333 5.632-58.026667 1.877333-82.773334z" fill="#FFFFFF"></path><path d="M593.322667 647.509333a20.48 20.48 0 0 1-11.861334 3.2h-50.133333v14.165334c0 4.266667-1.792 8.362667-5.376 12.373333a15.914667 15.914667 0 0 1-13.952 5.333333 24.917333 24.917333 0 0 1-14.336-3.882666c-3.84-2.602667-5.973333-7.210667-6.4-13.824v-14.165334h-48.725333a17.792 17.792 0 0 1-11.818667-3.882666 10.24 10.24 0 0 1-3.968-9.6c0-4.266667 1.578667-7.68 4.693333-10.24a16.768 16.768 0 0 1 11.093334-3.925334h48.682666v-24.789333h-48.682666a15.573333 15.573333 0 0 1-11.52-4.266667 13.525333 13.525333 0 0 1-4.266667-9.941333 15.36 15.36 0 0 1 4.693333-10.624 14.72 14.72 0 0 1 11.093334-4.949333h48.682666l0.725334-14.890667a1053.568 1053.568 0 0 1-40.832-42.538667l-10.752-9.898666a41.216 41.216 0 0 1-6.442667-11.690667c-1.92-4.992-0.938667-10.069333 2.858667-15.274667a13.653333 13.653333 0 0 1 15.786666-3.84c6.186667 2.090667 11.221333 4.821333 15.018667 8.106667 1.92 2.389333 5.248 5.888 10.026667 10.666667l15.061333 14.848 19.328 19.157333 22.186667-20.565333a987.605333 987.605333 0 0 1 29.397333-25.514667 21.162667 21.162667 0 0 1 14.293333-5.674667c5.290667 0 9.557333 2.133333 12.928 6.4 6.186667 7.082667 3.84 15.36-7.168 24.789334a179.072 179.072 0 0 0-12.885333 12.373333c-5.76 5.973333-11.52 11.733333-17.194667 17.408-6.698667 7.082667-14.08 14.378667-22.186666 21.973333v13.44h46.506666c6.698667 0 11.605333 1.536 14.72 4.608a14.165333 14.165333 0 0 1 4.650667 10.282667c0 4.266667-1.450667 7.936-4.309333 11.008-2.858667 3.029333-7.637333 4.352-14.336 3.84l-46.506667 0.768-0.768 24.064h45.866667c13.354667 0 20.053333 4.992 20.053333 14.933333 0.469333 4.693333-0.853333 8.106667-3.925333 10.24z" fill="#6D768D"></path></svg>',
            },
            {
              name: "9",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M512 213.333333l234.666667 341.333334h-128v213.333333h-213.333334v-213.333333h-128L512 213.333333z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "10",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M533.333333 810.666667L298.666667 469.333333h128V256h213.333333v213.333333h128l-234.666667 341.333334z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "11",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M213.333333 533.333333L554.666667 298.666667v128h213.333333v213.333333h-213.333333v128l-341.333334-234.666667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "12",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M810.666667 533.333333L469.333333 768v-128H256v-213.333333h213.333333V298.666667l341.333334 234.666666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "13",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#6D768D"></path><path d="M571.349333 508.586667l162.389334-162.346667a44.330667 44.330667 0 1 0-62.72-62.72l-162.389334 162.389333-162.517333-162.389333a44.330667 44.330667 0 1 0-62.72 62.72l162.389333 162.389333-162.389333 162.474667a44.330667 44.330667 0 1 0 62.72 62.72l162.389333-162.346667 162.389334 162.389334a44.330667 44.330667 0 1 0 62.72-62.72l-162.261334-162.56z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "14",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C233.386667 0 0 225.877333 0 512s225.877333 512 512 512 512-225.877333 512-512S790.613333 0 512 0z" fill="#6D768D"></path><path d="M726.144 311.210667l-277.333333 305.066666-124.8-124.8c-13.866667-13.866667-41.6-13.866667-55.466667 0-13.866667 13.866667-13.866667 41.6 0 55.466667l159.445333 152.533333c13.866667 13.866667 41.6 13.866667 55.466667 0l305.066667-332.8c13.866667-13.866667 13.866667-41.6 0-55.466666-20.778667-13.866667-48.512-13.866667-62.378667 0z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "15",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M541.952 755.626667a40.618667 40.618667 0 0 1-29.824 12.373333 41.344 41.344 0 0 1-30.122667-12.373333 40.106667 40.106667 0 0 1-12.672-30.122667c0-11.605333 4.096-21.845333 12.672-30.122667a40.405333 40.405333 0 0 1 30.122667-12.714666c11.605333 0 21.546667 4.138667 29.824 12.714666a40.32 40.32 0 0 1 12.714667 30.122667c0 11.861333-4.096 21.76-12.714667 30.122667zM450.986667 241.28A77.866667 77.866667 0 0 1 512.256 213.333333c24.874667 0 45.354667 8.917333 61.354667 27.946667 15.488 18.432 23.722667 41.685333 23.722666 69.674667 0 23.765333-33.152 200.533333-44.672 329.045333h-80.128C463.146667 511.402667 426.666667 334.677333 426.666667 310.954667c0-27.392 8.277333-50.645333 24.32-69.674667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "16",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.794667 0 512 0z" fill="#6D768D"></path><path d="M490.666667 682.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m13.994666-490.752c61.397333 0 112.341333 14.634667 153.002667 43.946666 40.533333 29.269333 60.885333 72.618667 60.885333 130.133334 0 35.242667-12.373333 64.938667-29.952 89.045333-10.282667 14.677333-33.664 33.408-62.890666 56.192l-32.426667 22.357333c-15.701333 12.202667-29.696 26.453333-34.858667 42.666667-1.706667 5.546667-3.072 14.677333-3.968 24.533333-0.426667 4.949333-4.864 15.018667-15.232 15.018667h-83.328c-13.568 0-15.957333-10.581333-15.744-15.786667 1.493333-34.005333 4.608-64.213333 18.474667-80.469333 28.074667-32.896 91.904-73.813333 91.904-73.813333a104.106667 104.106667 0 0 0 23.552-24.021334c10.837333-14.933333 19.797333-31.317333 19.797333-49.237333 0-20.565333-6.016-39.338667-18.090666-56.32-12.032-16.938667-34.090667-25.386667-66.005334-25.386667-31.445333 0-53.76 10.410667-66.901333 31.274667-9.685333 15.445333-15.786667 29.610667-18.346667 45.013333-0.853333 5.461333-4.394667 16.981333-16.042666 16.981334H327.210667c-17.322667 0-21.12-11.221333-20.650667-16.64 6.272-68.138667 32.896-114.688 80-144.597334 32-20.565333 71.381333-30.890667 118.101333-30.890666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "17",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M336.256 410.026667H253.312a40.021333 40.021333 0 0 0-39.850667 43.264l23.296 278.101333c1.706667 20.693333 19.072 36.608 39.850667 36.608h59.648c11.050667 0 20.010667-8.96 20.010667-19.968v-318.037333a19.968 19.968 0 0 0-20.010667-19.968z m434.432 0h-178.944C653.312 182.314667 548.949333 170.666667 548.949333 170.666667c-44.288 0-35.114667 34.986667-38.442666 40.832 0 84.48-68.010667 155.093333-101.034667 184.362666a39.552 39.552 0 0 0-13.226667 29.653334v322.56c0 11.008 8.96 19.925333 20.010667 19.925333h233.728c30.378667 0 58.154667-17.152 71.68-44.373333 18.176-36.736 40.448-90.112 54.656-133.973334 13.781333-42.410667 26.24-94.976 33.578667-131.968a39.850667 39.850667 0 0 0-39.253334-47.658666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "18",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M796.16 413.909333c-31.146667-0.298667-115.626667-0.085333-146.858667-0.085333h-158.464c8.533333-7.68 15.914667-14.506667 23.594667-20.906667 29.781333-24.874667 25.813333-71.082667-14.208-88.874666-22.954667-10.24-44.970667-5.632-64 11.52-34.944 31.274667-69.632 62.677333-104.277333 93.994666a15.488 15.488 0 0 1-11.178667 4.437334c-11.221333-0.085333-26.88-0.128-46.933333-0.170667a17.066667 17.066667 0 0 0-17.109334 17.066667L256 719.701333a17.066667 17.066667 0 0 0 17.066667 17.152l49.578666-0.085333c3.968 0 7.466667 0.768 10.88 2.602667 15.829333 8.832 31.701333 17.493333 47.616 26.24a18.133333 18.133333 0 0 0 9.301334 2.346666h168.405333c6.186667 0 11.946667-0.981333 17.834667-2.56 29.44-7.253333 40.021333-30.293333 38.528-52.565333-0.768-9.728-4.266667-18.346667-9.984-26.24 19.626667-5.76 35.114667-16.213333 42.112-36.096 7.125333-20.394667 1.621333-38.4-12.672-53.333333 28.16-19.754667 34.858667-44.672 18.645333-75.648h140.458667c6.570667 0 13.013333-0.597333 19.370666-2.645334 31.957333-9.813333 48.810667-42.88 35.626667-71.552-10.154667-22.186667-28.629333-33.152-52.608-33.450666z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "19",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M270.506667 413.909333c31.146667-0.298667 115.626667-0.085333 146.858666-0.085333h158.464c-8.533333-7.68-15.914667-14.506667-23.594666-20.906667-29.781333-24.874667-25.813333-71.082667 14.208-88.874666 22.954667-10.24 44.970667-5.632 64 11.52 34.944 31.274667 69.632 62.677333 104.277333 93.994666 3.413333 2.986667 6.528 4.437333 11.178667 4.437334 11.221333-0.085333 26.88-0.128 46.933333-0.170667a17.066667 17.066667 0 0 1 17.109333 17.066667l0.682667 288.853333a17.066667 17.066667 0 0 1-17.066667 17.152l-49.578666-0.085333a22.101333 22.101333 0 0 0-10.88 2.602666c-15.829333 8.832-31.701333 17.493333-47.616 26.24a18.133333 18.133333 0 0 1-9.301334 2.346667h-168.405333a68.693333 68.693333 0 0 1-17.834667-2.56c-29.44-7.253333-40.021333-30.293333-38.528-52.565333 0.768-9.728 4.266667-18.346667 9.984-26.24-19.626667-5.76-35.114667-16.213333-42.112-36.096-7.125333-20.394667-1.621333-38.4 12.672-53.333334-28.16-19.754667-34.858667-44.672-18.645333-75.648H272.853333c-6.570667 0-13.013333-0.597333-19.370666-2.645333-31.957333-9.813333-48.810667-42.88-35.626667-71.552 10.154667-22.186667 28.629333-33.152 52.608-33.450667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "20",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M667.733333 480.128H400v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 213.333333a155.605333 155.605333 0 0 0-155.392 155.434667v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 509.013333v292.010667a28.885333 28.885333 0 0 0 28.885333 28.885333h340.138667a28.885333 28.885333 0 0 0 28.928-28.885333V509.013333a28.885333 28.885333 0 0 0-28.928-28.885333z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "21",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M400.042667 437.461333v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 170.666667a155.605333 155.605333 0 0 0-155.392 155.434666v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 466.346667v292.010666a28.885333 28.885333 0 0 0 28.885333 28.885334h340.138667a28.885333 28.885333 0 0 0 28.928-28.885334V466.346667a28.885333 28.885333 0 0 0-28.928-28.885334H400.042667z" fill="#FFFFFF"></path><path d="M595.242667 437.461333v-111.36a97.706667 97.706667 0 0 0-97.621334-97.621333 97.706667 97.706667 0 0 0-97.578666 97.621333 28.885333 28.885333 0 0 1-57.813334 0A155.605333 155.605333 0 0 1 497.621333 170.666667a155.605333 155.605333 0 0 1 155.434667 155.434666v111.36h14.634667c16 0 28.928 12.928 28.928 28.885334v292.010666a28.885333 28.885333 0 0 1-28.928 28.885334H327.552A28.885333 28.885333 0 0 1 298.666667 758.357333V466.346667c0-15.957333 12.928-28.885333 28.885333-28.885334h267.690667z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "22",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M511.999787 512.000213m-511.999787 0a511.999787 511.999787 0 1 0 1023.999573 0 511.999787 511.999787 0 1 0-1023.999573 0Z" fill="#6D768D"></path><path d="M381.354508 364.586941c0 54.015977 29.013321 103.935957 75.946635 130.986613a152.53327 152.53327 0 0 0 151.935936 0 151.12527 151.12527 0 0 0 75.946636-130.986613A151.594604 151.594604 0 0 0 533.333111 213.333671a151.594604 151.594604 0 0 0-151.89327 151.25327zM660.479725 498.901552a185.258589 185.258589 0 0 1-127.146614 50.346646c-49.066646 0-93.866628-19.199992-127.06128-50.346646C317.141201 544.853533 255.999893 637.440161 255.999893 744.106783c0 13.183995 10.709329 23.850657 23.978657 23.850657h506.709122a23.893323 23.893323 0 0 0 23.978657-23.893323c0-106.538622-61.098641-199.25325-150.186604-245.205232z" fill="#FFFFFF"></path></svg>',
            },
            {
              name: "23",
              icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M445.610667 401.578667a129.322667 129.322667 0 1 0 258.645333 0 129.322667 129.322667 0 0 0-258.645333 0z m237.568 114.901333a157.354667 157.354667 0 0 1-216.362667 0 236.373333 236.373333 0 0 0-127.957333 209.706667c0 11.264 9.130667 20.394667 20.394666 20.394666h431.402667a20.394667 20.394667 0 0 0 20.394667-20.394666 236.373333 236.373333 0 0 0-127.872-209.706667zM409.813333 401.578667c0-40.362667 14.592-77.397333 38.698667-106.112a112.725333 112.725333 0 0 0-29.013333-3.925334 112.64 112.64 0 0 0-112.426667 112.469334 112.64 112.64 0 0 0 144.853333 107.648 164.693333 164.693333 0 0 1-42.112-110.08z m-18.602666 136.704a136.533333 136.533333 0 0 1-65.706667-34.474667 205.44 205.44 0 0 0-111.232 182.4c0 9.813333 7.936 17.706667 17.706667 17.706667H303.36a273.621333 273.621333 0 0 1 87.893333-165.632z" fill="#FFFFFF"></path></svg>',
            },
          ],
        },
      ],
      O = (t) => {
        let e = t.split("_"),
          i = R.find((t) => t.type === e[0]);
        return i.list.find((t) => t.name === e[1]).icon;
      };
    var W = { hyperlink: A, note: I, nodeIconList: R, getNodeIconListIcon: O },
      H = {
        name: "NodeIcon",
        data() {
          return {
            nodeIconList: R,
            dialogVisible: !1,
            iconList: [],
            activeNodes: [],
          };
        },
        created() {
          this.$bus.$on("node_active", (...t) => {
            if (((this.activeNodes = t[1]), this.activeNodes.length > 0)) {
              let t = this.activeNodes[0];
              this.iconList = t.getData("icon") || [];
            } else this.iconList = [];
          }),
            this.$bus.$on("showNodeIcon", () => {
              this.dialogVisible = !0;
            });
        },
        methods: {
          setIcon(t, e) {
            let i = t + "_" + e,
              a = this.iconList.findIndex((t) => t === i);
            if (-1 !== a) this.iconList.splice(a, 1);
            else {
              let e = this.iconList.findIndex((e) => e.split("_")[0] === t);
              -1 !== e ? this.iconList.splice(e, 1, i) : this.iconList.push(i);
            }
            this.activeNodes.forEach((t) => {
              t.setIcon([...this.iconList]);
            });
          },
        },
      },
      P = H,
      Y = (i("f54d"), Object(r["a"])(P, T, B, !1, null, "688286af", null)),
      j = Y.exports,
      X = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog",
          {
            staticClass: "nodeDialog",
            attrs: {
              title: t.$t("nodeNote.title"),
              visible: t.dialogVisible,
              width: "500",
            },
            on: {
              "update:visible": function (e) {
                t.dialogVisible = e;
              },
            },
          },
          [
            e("div", { ref: "noteEditor", staticClass: "noteEditor" }),
            e(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                e("el-button", { on: { click: t.cancel } }, [
                  t._v(t._s(t.$t("dialog.cancel"))),
                ]),
                e(
                  "el-button",
                  { attrs: { type: "primary" }, on: { click: t.confirm } },
                  [t._v(t._s(t.$t("dialog.confirm")))]
                ),
              ],
              1
            ),
          ]
        );
      },
      V = [],
      G = i("5865"),
      Z =
        (i("f513"),
        {
          name: "NodeNote",
          data() {
            return {
              dialogVisible: !1,
              note: "",
              activeNodes: [],
              editor: null,
            };
          },
          created() {
            this.$bus.$on("node_active", (...t) => {
              if (((this.activeNodes = t[1]), this.activeNodes.length > 0)) {
                let t = this.activeNodes[0];
                this.note = t.getData("note");
              } else this.note = "";
            }),
              this.$bus.$on("showNodeNote", () => {
                this.$bus.$emit("startTextEdit"),
                  (this.dialogVisible = !0),
                  this.$nextTick(() => {
                    this.initEditor();
                  });
              });
          },
          methods: {
            initEditor() {
              this.editor ||
                (this.editor = new G["a"]({
                  el: this.$refs.noteEditor,
                  height: "500px",
                  initialEditType: "markdown",
                  previewStyle: "vertical",
                })),
                this.editor.setMarkdown(this.note);
            },
            cancel() {
              (this.dialogVisible = !1), this.$bus.$emit("endTextEdit");
            },
            confirm() {
              (this.note = this.editor.getMarkdown()),
                this.activeNodes.forEach((t) => {
                  t.setNote(this.note);
                }),
                this.cancel();
            },
          },
        }),
      U = Z,
      J = (i("12b2"), Object(r["a"])(U, X, V, !1, null, "77afb096", null)),
      K = J.exports,
      q = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog",
          {
            staticClass: "nodeDialog",
            attrs: {
              title: t.$t("nodeTag.title"),
              visible: t.dialogVisible,
              width: "500",
            },
            on: {
              "update:visible": function (e) {
                t.dialogVisible = e;
              },
            },
          },
          [
            e("el-input", {
              attrs: {
                disabled: t.tagArr.length >= t.max,
                placeholder: t.$t("nodeTag.addTip"),
              },
              nativeOn: {
                keyup: function (e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                    ? null
                    : t.add.apply(null, arguments);
                },
              },
              model: {
                value: t.tag,
                callback: function (e) {
                  t.tag = e;
                },
                expression: "tag",
              },
            }),
            e(
              "div",
              { staticClass: "tagList" },
              t._l(t.tagArr, function (i, a) {
                return e(
                  "div",
                  {
                    key: a,
                    staticClass: "tagItem",
                    style: {
                      backgroundColor: t.tagColorList[a].background,
                      color: t.tagColorList[a].color,
                    },
                  },
                  [
                    t._v(" " + t._s(i) + " "),
                    e(
                      "div",
                      {
                        staticClass: "delBtn",
                        on: {
                          click: function (e) {
                            return t.del(a);
                          },
                        },
                      },
                      [e("span", { staticClass: "iconfont iconshanchu" })]
                    ),
                  ]
                );
              }),
              0
            ),
            e(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                e("el-button", { on: { click: t.cancel } }, [
                  t._v(t._s(t.$t("dialog.cancel"))),
                ]),
                e(
                  "el-button",
                  { attrs: { type: "primary" }, on: { click: t.confirm } },
                  [t._v(t._s(t.$t("dialog.confirm")))]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Q = [];
    const tt = [
        { color: "rgb(77, 65, 0)", background: "rgb(255, 244, 179)" },
        { color: "rgb(0, 50, 77)", background: "rgb(179, 229, 255)" },
        { color: "rgb(77, 0, 73)", background: "rgb(255, 179, 251)" },
        { color: "rgb(57, 77, 0)", background: "rgb(236, 255, 179)" },
        { color: "rgb(0, 77, 47)", background: "rgb(179, 255, 226)" },
      ],
      et = [
        { name: "逻辑结构图", value: "logicalStructure", img: i("0930") },
        { name: "思维导图", value: "mindMap", img: i("9910") },
        { name: "组织结构图", value: "organizationStructure", img: i("6967") },
        { name: "目录组织图", value: "catalogOrganization", img: i("ac18") },
      ],
      it = [
        "logicalStructure",
        "mindMap",
        "catalogOrganization",
        "organizationStructure",
      ],
      at = [
        { name: "默认", value: "default", img: i("3556") },
        { name: "脑图经典", value: "classic", img: i("8617") },
        { name: "小黄人", value: "minions", img: i("f260") },
        { name: "粉红葡萄", value: "pinkGrape", img: i("b2e8") },
        { name: "薄荷", value: "mint", img: i("db73") },
        { name: "金色vip", value: "gold", img: i("6ef5") },
        { name: "活力橙", value: "vitalityOrange", img: i("08be") },
        { name: "绿叶", value: "greenLeaf", img: i("72ed") },
        { name: "暗色2", value: "dark2", img: i("42c9") },
        { name: "天清绿", value: "skyGreen", img: i("7f82") },
        { name: "脑图经典2", value: "classic2", img: i("a3a6") },
        { name: "脑图经典3", value: "classic3", img: i("c0d2") },
        { name: "脑图经典4", value: "classic4", img: i("e911") },
        { name: "经典绿", value: "classicGreen", img: i("43f9") },
        { name: "经典蓝", value: "classicBlue", img: i("0d2c") },
        { name: "天空蓝", value: "blueSky", img: i("b533") },
        { name: "脑残粉", value: "brainImpairedPink", img: i("074d") },
        { name: "暗色", value: "dark", img: i("181c") },
        { name: "泥土黄", value: "earthYellow", img: i("1a34") },
        { name: "清新绿", value: "freshGreen", img: i("7dda") },
        { name: "清新红", value: "freshRed", img: i("ca62") },
        { name: "浪漫紫", value: "romanticPurple", img: i("c612") },
      ];
    var nt = {
        name: "NodeTag",
        data() {
          return {
            dialogVisible: !1,
            tagColorList: tt,
            tagArr: [],
            tag: "",
            activeNodes: [],
            max: 5,
          };
        },
        created() {
          this.$bus.$on("node_active", (...t) => {
            if (((this.activeNodes = t[1]), this.activeNodes.length > 0)) {
              let t = this.activeNodes[0];
              this.tagArr = t.getData("tag") || [];
            } else (this.tagArr = []), (this.tag = "");
          }),
            this.$bus.$on("showNodeTag", () => {
              this.$bus.$emit("startTextEdit"), (this.dialogVisible = !0);
            });
        },
        methods: {
          add() {
            this.tagArr.push(this.tag), (this.tag = "");
          },
          del(t) {
            this.tagArr.splice(t, 1);
          },
          cancel() {
            (this.dialogVisible = !1), this.$bus.$emit("endTextEdit");
          },
          confirm() {
            this.activeNodes.forEach((t) => {
              t.setTag(this.tagArr);
            }),
              this.cancel();
          },
        },
      },
      ot = nt,
      st = (i("a64e"), Object(r["a"])(ot, q, Q, !1, null, "21b3c27c", null)),
      lt = st.exports,
      rt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog",
          {
            staticClass: "nodeDialog",
            attrs: {
              title: t.$t("export.title"),
              visible: t.dialogVisible,
              width: "700px",
            },
            on: {
              "update:visible": function (e) {
                t.dialogVisible = e;
              },
            },
          },
          [
            e(
              "div",
              [
                e(
                  "div",
                  { staticClass: "nameInputBox" },
                  [
                    e("span", { staticClass: "name" }, [
                      t._v(t._s(t.$t("export.filename"))),
                    ]),
                    e("el-input", {
                      staticStyle: { width: "300px" },
                      attrs: { size: "mini" },
                      model: {
                        value: t.fileName,
                        callback: function (e) {
                          t.fileName = e;
                        },
                        expression: "fileName",
                      },
                    }),
                    e(
                      "el-checkbox",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: ["smm", "json"].includes(t.exportType),
                            expression: "['smm', 'json'].includes(exportType)",
                          },
                        ],
                        staticStyle: { "margin-left": "12px" },
                        model: {
                          value: t.widthConfig,
                          callback: function (e) {
                            t.widthConfig = e;
                          },
                          expression: "widthConfig",
                        },
                      },
                      [t._v(t._s(t.$t("export.include")))]
                    ),
                  ],
                  1
                ),
                e(
                  "el-radio-group",
                  {
                    attrs: { size: "mini" },
                    model: {
                      value: t.exportType,
                      callback: function (e) {
                        t.exportType = e;
                      },
                      expression: "exportType",
                    },
                  },
                  [
                    e("el-radio-button", { attrs: { label: "smm" } }, [
                      t._v(t._s(t.$t("export.dedicatedFile")) + "（.smm）"),
                    ]),
                    e("el-radio-button", { attrs: { label: "json" } }, [
                      t._v(t._s(t.$t("export.jsonFile")) + "（.json）"),
                    ]),
                    e("el-radio-button", { attrs: { label: "png" } }, [
                      t._v(t._s(t.$t("export.imageFile")) + "（.png）"),
                    ]),
                    e("el-radio-button", { attrs: { label: "svg" } }, [
                      t._v(t._s(t.$t("export.svgFile")) + "（.svg）"),
                    ]),
                    e("el-radio-button", { attrs: { label: "pdf" } }, [
                      t._v(t._s(t.$t("export.pdfFile")) + "（.pdf）"),
                    ]),
                  ],
                  1
                ),
                e("div", { staticClass: "tip" }, [
                  t._v(t._s(t.$t("export.tips"))),
                ]),
              ],
              1
            ),
            e(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                e("el-button", { on: { click: t.cancel } }, [
                  t._v(t._s(t.$t("dialog.cancel"))),
                ]),
                e(
                  "el-button",
                  { attrs: { type: "primary" }, on: { click: t.confirm } },
                  [t._v(t._s(t.$t("dialog.confirm")))]
                ),
              ],
              1
            ),
          ]
        );
      },
      dt = [],
      ht = {
        name: "Export",
        data() {
          return {
            dialogVisible: !1,
            exportType: "smm",
            fileName: "思维导图",
            widthConfig: !0,
          };
        },
        created() {
          this.$bus.$on("showExport", () => {
            this.dialogVisible = !0;
          });
        },
        methods: {
          cancel() {
            this.dialogVisible = !1;
          },
          confirm() {
            this.$bus.$emit(
              "export",
              this.exportType,
              !0,
              this.fileName,
              this.widthConfig
            ),
              this.$notify.info({
                title: "消息",
                message: "如果没有触发下载，请检查是否被浏览器拦截了",
              }),
              this.cancel();
          },
        },
      },
      ct = ht,
      pt = (i("3215"), Object(r["a"])(ct, rt, dt, !1, null, "5047c674", null)),
      mt = pt.exports,
      ut = function () {
        var t = this,
          e = t._self._c;
        return e(
          "el-dialog",
          {
            staticClass: "nodeDialog",
            attrs: {
              title: t.$t("import.title"),
              visible: t.dialogVisible,
              width: "300px",
            },
            on: {
              "update:visible": function (e) {
                t.dialogVisible = e;
              },
            },
          },
          [
            e(
              "el-upload",
              {
                ref: "upload",
                attrs: {
                  action: "x",
                  "file-list": t.fileList,
                  "auto-upload": !1,
                  multiple: !1,
                  "on-change": t.onChange,
                  limit: 1,
                  "on-exceed": t.onExceed,
                },
              },
              [
                e(
                  "el-button",
                  {
                    attrs: { slot: "trigger", size: "small", type: "primary" },
                    slot: "trigger",
                  },
                  [t._v(t._s(t.$t("import.selectFile")))]
                ),
                e(
                  "div",
                  {
                    staticClass: "el-upload__tip",
                    attrs: { slot: "tip" },
                    slot: "tip",
                  },
                  [t._v(" " + t._s(t.$t("import.supportFile")) + " ")]
                ),
              ],
              1
            ),
            e(
              "span",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                e("el-button", { on: { click: t.cancel } }, [
                  t._v(t._s(t.$t("dialog.cancel"))),
                ]),
                e(
                  "el-button",
                  { attrs: { type: "primary" }, on: { click: t.confirm } },
                  [t._v(t._s(t.$t("dialog.confirm")))]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      gt = [];
    class ft {
      constructor(t = {}) {
        (this.opt = t),
          (this.mindMap = this.opt.mindMap),
          (this.scale = 1),
          (this.sx = 0),
          (this.sy = 0),
          (this.x = 0),
          (this.y = 0),
          (this.firstDrag = !0),
          this.setTransformData(this.mindMap.opt.viewData),
          this.bind();
      }
      bind() {
        this.mindMap.keyCommand.addShortcut("Control+=", () => {
          this.enlarge();
        }),
          this.mindMap.keyCommand.addShortcut("Control+-", () => {
            this.narrow();
          }),
          this.mindMap.keyCommand.addShortcut("Control+Enter", () => {
            this.reset();
          }),
          this.mindMap.svg.on("dblclick", () => {
            this.reset();
          }),
          this.mindMap.event.on("mousedown", () => {
            (this.sx = this.x), (this.sy = this.y);
          }),
          this.mindMap.event.on("drag", (t, e) => {
            t.ctrlKey ||
              (this.firstDrag &&
                ((this.firstDrag = !1),
                this.mindMap.renderer.activeNodeList.length > 0 &&
                  this.mindMap.execCommand("CLEAR_ACTIVE_NODE")),
              (this.x = this.sx + e.mousemoveOffset.x),
              (this.y = this.sy + e.mousemoveOffset.y),
              this.transform());
          }),
          this.mindMap.event.on("mouseup", () => {
            this.firstDrag = !0;
          }),
          this.mindMap.event.on("mousewheel", (t, e) => {
            "down" === e ? this.enlarge() : this.narrow();
          });
      }
      getTransformData() {
        return {
          transform: this.mindMap.draw.transform(),
          state: {
            scale: this.scale,
            x: this.x,
            y: this.y,
            sx: this.sx,
            sy: this.sy,
          },
        };
      }
      setTransformData(t) {
        t &&
          (Object.keys(t.state).forEach((e) => {
            this[e] = t.state[e];
          }),
          this.mindMap.draw.transform({ ...t.transform }),
          this.mindMap.emit("view_data_change", this.getTransformData()),
          this.mindMap.emit("scale", this.scale));
      }
      translateX(t) {
        (this.x += t), this.transform();
      }
      translateXTo(t) {
        (this.x = t), this.transform();
      }
      translateY(t) {
        (this.y += t), this.transform();
      }
      translateYTo(t) {
        (this.y = t), this.transform();
      }
      transform() {
        this.mindMap.draw.transform({
          scale: this.scale,
          translate: [this.x, this.y],
        }),
          this.mindMap.emit("view_data_change", this.getTransformData());
      }
      reset() {
        (this.scale = 1), (this.x = 0), (this.y = 0), this.transform();
      }
      narrow() {
        this.scale - this.mindMap.opt.scaleRatio > 0.1
          ? (this.scale -= this.mindMap.opt.scaleRatio)
          : (this.scale = 0.1),
          this.transform(),
          this.mindMap.emit("scale", this.scale);
      }
      enlarge() {
        (this.scale += this.mindMap.opt.scaleRatio),
          this.transform(),
          this.mindMap.emit("scale", this.scale);
      }
    }
    var vt = ft,
      bt = i("91d2"),
      Ct = i.n(bt);
    class xt extends Ct.a {
      constructor(t = {}) {
        super(),
          (this.opt = t),
          (this.mindMap = t.mindMap),
          (this.isLeftMousedown = !1),
          (this.mousedownPos = { x: 0, y: 0 }),
          (this.mousemovePos = { x: 0, y: 0 }),
          (this.mousemoveOffset = { x: 0, y: 0 }),
          this.bindFn(),
          this.bind();
      }
      bindFn() {
        (this.onDrawClick = this.onDrawClick.bind(this)),
          (this.onMousedown = this.onMousedown.bind(this)),
          (this.onMousemove = this.onMousemove.bind(this)),
          (this.onMouseup = this.onMouseup.bind(this)),
          (this.onMousewheel = this.onMousewheel.bind(this)),
          (this.onContextmenu = this.onContextmenu.bind(this)),
          (this.onSvgMousedown = this.onSvgMousedown.bind(this));
      }
      bind() {
        this.mindMap.svg.on("click", this.onDrawClick),
          this.mindMap.el.addEventListener("mousedown", this.onMousedown),
          this.mindMap.svg.on("mousedown", this.onSvgMousedown),
          window.addEventListener("mousemove", this.onMousemove),
          window.addEventListener("mouseup", this.onMouseup),
          -1 != window.navigator.userAgent.toLowerCase().indexOf("firefox")
            ? this.mindMap.el.addEventListener(
                "DOMMouseScroll",
                this.onMousewheel
              )
            : this.mindMap.el.addEventListener("mousewheel", this.onMousewheel),
          this.mindMap.svg.on("contextmenu", this.onContextmenu);
      }
      unbind() {
        this.mindMap.svg.off("click", this.onDrawClick),
          this.mindMap.el.removeEventListener("mousedown", this.onMousedown),
          window.removeEventListener("mousemove", this.onMousemove),
          window.removeEventListener("mouseup", this.onMouseup),
          this.mindMap.el.removeEventListener("mousewheel", this.onMousewheel),
          this.mindMap.svg.off("contextmenu", this.onContextmenu);
      }
      onDrawClick(t) {
        this.emit("draw_click", t);
      }
      onSvgMousedown(t) {
        this.emit("svg_mousedown", t);
      }
      onMousedown(t) {
        1 === t.which && (this.isLeftMousedown = !0),
          (this.mousedownPos.x = t.clientX),
          (this.mousedownPos.y = t.clientY),
          this.emit("mousedown", t, this);
      }
      onMousemove(t) {
        (this.mousemovePos.x = t.clientX),
          (this.mousemovePos.y = t.clientY),
          (this.mousemoveOffset.x = t.clientX - this.mousedownPos.x),
          (this.mousemoveOffset.y = t.clientY - this.mousedownPos.y),
          this.emit("mousemove", t, this),
          this.isLeftMousedown && this.emit("drag", t, this);
      }
      onMouseup(t) {
        (this.isLeftMousedown = !1), this.emit("mouseup", t, this);
      }
      onMousewheel(t) {
        let e;
        t.stopPropagation(),
          t.preventDefault(),
          (e = (t.wheelDeltaY || t.detail) > 0 ? "up" : "down"),
          this.emit("mousewheel", t, e, this);
      }
      onContextmenu(t) {
        t.preventDefault(), this.emit("contextmenu", t);
      }
    }
    var wt = xt,
      Mt = i("682c"),
      yt = i.n(Mt);
    i("293c"), i("f8ac");
    const _t = ["paddingX", "paddingY"];
    class Nt {
      static setBackgroundStyle(t, e) {
        let { backgroundColor: i, backgroundImage: a, backgroundRepeat: n } = e;
        (t.style.backgroundColor = i),
          a &&
            ((t.style.backgroundImage = `url(${a})`),
            (t.style.backgroundRepeat = n));
      }
      constructor(t, e) {
        (this.ctx = t), (this.themeConfig = e);
      }
      updateThemeConfig(t) {
        this.themeConfig = t;
      }
      merge(t, e, i) {
        let a = this.themeConfig.node;
        if (
          (e || _t.includes(t)
            ? (a = this.themeConfig)
            : this.ctx.isGeneralization
            ? (a = this.themeConfig.generalization)
            : 0 === this.ctx.layerIndex
            ? (a = this.themeConfig.root)
            : 1 === this.ctx.layerIndex && (a = this.themeConfig.second),
          void 0 !== i ? i : this.ctx.nodeData.data.isActive)
        ) {
          if (
            this.ctx.nodeData.data.activeStyle &&
            void 0 !== this.ctx.nodeData.data.activeStyle[t]
          )
            return this.ctx.nodeData.data.activeStyle[t];
          if (a.active && a.active[t]) return a.active[t];
        }
        return void 0 !== this.getSelfStyle(t) ? this.getSelfStyle(t) : a[t];
      }
      getStyle(t, e, i) {
        return this.merge(t, e, i);
      }
      getSelfStyle(t) {
        return this.ctx.nodeData.data[t];
      }
      rect(t) {
        this.shape(t), t.radius(this.merge("borderRadius"));
      }
      shape(t) {
        t.fill({ color: this.merge("fillColor") }).stroke({
          color: this.merge("borderColor"),
          width: this.merge("borderWidth"),
          dasharray: this.merge("borderDasharray"),
        });
      }
      text(t) {
        t.fill({ color: this.merge("color") }).css({
          "font-family": this.merge("fontFamily"),
          "font-size": this.merge("fontSize"),
          "font-weight": this.merge("fontWeight"),
          "font-style": this.merge("fontStyle"),
          "text-decoration": this.merge("textDecoration"),
        });
      }
      domText(t, e = 1) {
        (t.style.fontFamily = this.merge("fontFamily")),
          (t.style.fontSize = this.merge("fontSize") * e + "px"),
          (t.style.fontWeight = this.merge("fontWeight") || "normal");
      }
      tagText(t, e) {
        t.fill({ color: tt[e].color }).css({ "font-size": "12px" });
      }
      tagRect(t, e) {
        t.fill({ color: tt[e].background });
      }
      iconNode(t) {
        t.attr({ fill: this.merge("color") });
      }
      line(t, { width: e, color: i, dasharray: a } = {}) {
        t.stroke({ width: e, color: i, dasharray: a }).fill({ color: "none" });
      }
      generalizationLine(t) {
        t.stroke({
          width: this.merge("generalizationLineWidth", !0),
          color: this.merge("generalizationLineColor", !0),
        }).fill({ color: "none" });
      }
      iconBtn(t, e) {
        t.fill({ color: "#808080" }), e.fill({ color: "#fff" });
      }
    }
    var Dt = Nt;
    class zt {
      constructor(t) {
        this.node = t;
      }
      getShapePadding(t, e, i, a) {
        const n = this.node.getShape(),
          o = 15,
          s = 5,
          l = t + 2 * i,
          r = e + 2 * a,
          d = Math.abs(l - r);
        switch (n) {
          case "roundedRectangle":
            return { paddingX: e > t ? (e - t) / 2 : 0, paddingY: 0 };
          case "diamond":
            return { paddingX: t / 2, paddingY: e / 2 };
          case "parallelogram":
            return { paddingX: i <= 0 ? o : 0, paddingY: 0 };
          case "outerTriangularRectangle":
            return { paddingX: i <= 0 ? o : 0, paddingY: 0 };
          case "innerTriangularRectangle":
            return { paddingX: i <= 0 ? o : 0, paddingY: 0 };
          case "ellipse":
            return { paddingX: i <= 0 ? o : 0, paddingY: a <= 0 ? s : 0 };
          case "circle":
            return { paddingX: r > l ? d / 2 : 0, paddingY: r < l ? d / 2 : 0 };
          default:
            return { paddingX: 0, paddingY: 0 };
        }
      }
      createShape() {
        const t = this.node.getShape();
        let { width: e, height: i } = this.node,
          a = null;
        return (
          "rectangle" === t
            ? (a = this.node.group.rect(e, i))
            : "diamond" === t
            ? (a = this.createDiamond())
            : "parallelogram" === t
            ? (a = this.createParallelogram())
            : "roundedRectangle" === t
            ? (a = this.createRoundedRectangle())
            : "octagonalRectangle" === t
            ? (a = this.createOctagonalRectangle())
            : "outerTriangularRectangle" === t
            ? (a = this.createOuterTriangularRectangle())
            : "innerTriangularRectangle" === t
            ? (a = this.createInnerTriangularRectangle())
            : "ellipse" === t
            ? (a = this.createEllipse())
            : "circle" === t && (a = this.createCircle()),
          a
        );
      }
      createDiamond() {
        let { width: t, height: e } = this.node,
          i = t / 2,
          a = e / 2,
          n = i,
          o = 0,
          s = t,
          l = a,
          r = i,
          d = e,
          h = 0,
          c = a;
        return this.node.group.polygon(
          `\n            ${n}, ${o}\n            ${s}, ${l}\n            ${r}, ${d}\n            ${h}, ${c}\n        `
        );
      }
      createParallelogram() {
        let { paddingX: t } = this.node.getPaddingVale();
        t = t || this.node.shapePadding.paddingX;
        let { width: e, height: i } = this.node;
        return this.node.group.polygon(
          `\n            ${t}, 0\n            ${e}, 0\n            ${
            e - t
          }, ${i}\n            0, ${i}\n        `
        );
      }
      createRoundedRectangle() {
        let { width: t, height: e } = this.node,
          i = e / 2;
        return this.node.group.path(
          `\n            M${i},0\n            L${t - i},0\n            A${
            e / 2
          },${e / 2} 0 0,1 ${
            t - i
          },${e} \n            L${i},${e}\n            A${e / 2},${
            e / 2
          } 0 0,1 ${i},0\n        `
        );
      }
      createOctagonalRectangle() {
        let t = 5,
          { width: e, height: i } = this.node;
        return this.node.group.polygon(
          `\n            0, ${t}\n            ${t}, 0\n            ${
            e - t
          }, 0\n            ${e}, ${t}\n            ${e}, ${
            i - t
          }\n            ${
            e - t
          }, ${i}\n            ${t}, ${i}\n            0, ${i - t}\n        `
        );
      }
      createOuterTriangularRectangle() {
        let { paddingX: t } = this.node.getPaddingVale();
        t = t || this.node.shapePadding.paddingX;
        let { width: e, height: i } = this.node;
        return this.node.group.polygon(
          `\n            ${t}, 0\n            ${e - t}, 0\n            ${e}, ${
            i / 2
          }\n            ${
            e - t
          }, ${i}\n            ${t}, ${i}\n            0, ${i / 2}\n        `
        );
      }
      createInnerTriangularRectangle() {
        let { paddingX: t } = this.node.getPaddingVale();
        t = t || this.node.shapePadding.paddingX;
        let { width: e, height: i } = this.node;
        return this.node.group.polygon(
          `\n            0, 0\n            ${e}, 0\n            ${e - t / 2}, ${
            i / 2
          }\n            ${e}, ${i}\n            0, ${i}\n            ${
            t / 2
          }, ${i / 2}\n        `
        );
      }
      createEllipse() {
        let { width: t, height: e } = this.node,
          i = t / 2,
          a = e / 2;
        return this.node.group.path(
          `\n            M${i},0\n            A${i},${a} 0 0,1 ${i},${e} \n            M${i},${e} \n            A${i},${a} 0 0,1 ${i},0 \n        `
        );
      }
      createCircle() {
        let { width: t, height: e } = this.node,
          i = t / 2,
          a = e / 2;
        return this.node.group.path(
          `\n            M${i},0\n            A${i},${a} 0 0,1 ${i},${e} \n            M${i},${e} \n            A${i},${a} 0 0,1 ${i},0 \n        `
        );
      }
    }
    const St = [
        "rectangle",
        "diamond",
        "parallelogram",
        "roundedRectangle",
        "octagonalRectangle",
        "outerTriangularRectangle",
        "innerTriangularRectangle",
        "ellipse",
        "circle",
      ],
      $t = (t, e, i, a, n, o = 0, s = 0) => {
        let l = !1;
        if (
          (i && (l = i(t, e, n, o, s)),
          !l && t.children && t.children.length > 0)
        ) {
          let e = o + 1;
          t.children.forEach((n, o) => {
            $t(n, t, i, a, !1, e, o);
          });
        }
        a && a(t, e, n, o, s);
      },
      Ft = (t, e) => {
        e(t);
        let i = [t],
          a = !1;
        while (i.length) {
          if (a) break;
          let t = i.shift();
          t.children &&
            t.children.length &&
            t.children.forEach((t) => {
              i.push(t), "stop" === e(t) && (a = !0);
            });
        }
      },
      kt = (t, e, i, a) => {
        let n = t / e,
          o = [];
        if (i && a)
          if (t <= i && e <= a) o = [t, e];
          else {
            let t = i / a;
            o = n > t ? [n * a, a] : [i, i / n];
          }
        else
          i
            ? (o = t <= i ? [t, e] : [i, i / n])
            : a && (o = e <= a ? [t, e] : [n * a, a]);
        return o;
      },
      Et = (t) => {
        t = t.replace(/<br>/gim, "\n");
        let e = document.createElement("div");
        return (e.innerHTML = t), (t = e.textContent), t;
      },
      Lt = (t) => {
        try {
          return JSON.parse(JSON.stringify(t));
        } catch (e) {
          return null;
        }
      },
      Tt = (t, e) => (
        (t.data = Lt(e.data)),
        (t.children = []),
        e.children &&
          e.children.length > 0 &&
          e.children.forEach((e, i) => {
            t.children[i] = Tt({}, e);
          }),
        t
      ),
      Bt = (t, e, i = !1) => (
        (t.data = Lt(e.nodeData ? e.nodeData.data : e.data)),
        i && (t.data.isActive = !1),
        (t.children = []),
        e.children && e.children.length > 0
          ? e.children.forEach((e, a) => {
              t.children[a] = Bt({}, e, i);
            })
          : e.nodeData &&
            e.nodeData.children &&
            e.nodeData.children.length > 0 &&
            e.nodeData.children.forEach((e, a) => {
              t.children[a] = Bt({}, e, i);
            }),
        t
      ),
      At = (t) =>
        new Promise((e, i) => {
          const a = new Image();
          a.setAttribute("crossOrigin", "anonymous"),
            (a.onload = () => {
              try {
                let t = document.createElement("canvas");
                (t.width = a.width), (t.height = a.height);
                let i = t.getContext("2d");
                i.drawImage(a, 0, 0, a.width, a.height), e(t.toDataURL());
              } catch (t) {
                i(t);
              }
            }),
            (a.onerror = (t) => {
              i(t);
            }),
            (a.src = t);
        }),
      It = (t, e) => {
        let i = document.createElement("a");
        (i.href = t), (i.download = e), i.click();
      },
      Rt = (t, e = 300, i) => {
        let a = null;
        return () => {
          a ||
            (a = setTimeout(() => {
              t.call(i), (a = null);
            }, e));
        };
      },
      Ot = (t, e = () => {}) => {
        let i = 0,
          a = t.length;
        if (a <= 0) return e();
        let n = () => {
          i >= a
            ? e()
            : (t[i](),
              setTimeout(() => {
                i++, n();
              }, 0));
        };
        n();
      };
    var Wt = i("8a19");
    const Ht =
        '<svg t="1618141562310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13476" width="200" height="200"><path d="M475.136 327.168v147.968h-147.968v74.24h147.968v147.968h74.24v-147.968h147.968v-74.24h-147.968v-147.968h-74.24z m36.864-222.208c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13477"></path></svg>',
      Pt =
        '<svg t="1618141589243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13611" width="200" height="200"><path d="M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13612"></path><path d="M252.928 474.624h518.144v74.24h-518.144z" p-id="13613"></path></svg>';
    var Yt = { open: Ht, close: Pt };
    class jt {
      constructor(t = {}) {
        (this.nodeData = this.handleData(t.data || {})),
          (this.uid = t.uid),
          (this.mindMap = t.mindMap),
          (this.renderer = t.renderer),
          (this.draw = t.draw || null),
          (this.themeConfig = this.mindMap.themeConfig),
          (this.style = new Dt(this, this.themeConfig)),
          (this.shapeInstance = new zt(this)),
          (this.shapePadding = { paddingX: 0, paddingY: 0 }),
          (this.isRoot = void 0 !== t.isRoot && t.isRoot),
          (this.isGeneralization =
            void 0 !== t.isGeneralization && t.isGeneralization),
          (this.generalizationBelongNode = null),
          (this.layerIndex = void 0 === t.layerIndex ? 0 : t.layerIndex),
          (this.width = t.width || 0),
          (this.height = t.height || 0),
          (this._left = t.left || 0),
          (this._top = t.top || 0),
          (this.customLeft = t.data.data.customLeft || void 0),
          (this.customTop = t.data.data.customTop || void 0),
          (this.isDrag = !1),
          (this.parent = t.parent || null),
          (this.children = t.children || []),
          (this.group = null),
          (this._imgData = null),
          (this._iconData = null),
          (this._textData = null),
          (this._hyperlinkData = null),
          (this._tagData = null),
          (this._noteData = null),
          (this.noteEl = null),
          (this._expandBtn = null),
          (this._lines = []),
          (this._generalizationLine = null),
          (this._generalizationNode = null),
          (this._rectInfo = {
            imgContentWidth: 0,
            imgContentHeight: 0,
            textContentWidth: 0,
            textContentHeight: 0,
          }),
          (this._generalizationNodeWidth = 0),
          (this._generalizationNodeHeight = 0),
          (this.textContentItemMargin = this.mindMap.opt.textContentMargin),
          (this.blockContentMargin = this.mindMap.opt.imgTextMargin),
          (this.expandBtnSize = this.mindMap.opt.expandBtnSize),
          (this.initRender = !0),
          this.getSize();
      }
      get left() {
        return this.customLeft || this._left;
      }
      set left(t) {
        this._left = t;
      }
      get top() {
        return this.customTop || this._top;
      }
      set top(t) {
        this._top = t;
      }
      updateThemeConfig() {
        (this.themeConfig = this.mindMap.themeConfig),
          this.style.updateThemeConfig(this.themeConfig);
      }
      reset() {
        (this.children = []),
          (this.parent = null),
          (this.isRoot = !1),
          (this.layerIndex = 0),
          (this.left = 0),
          (this.top = 0);
      }
      handleData(t) {
        return (
          (t.data.expand = !1 !== t.data.expand),
          (t.data.isActive = !0 === t.data.isActive),
          (t.children = t.children || []),
          t
        );
      }
      hasCustomPosition() {
        return void 0 !== this.customLeft && void 0 !== this.customTop;
      }
      ancestorHasCustomPosition() {
        let t = this;
        while (t) {
          if (t.hasCustomPosition()) return !0;
          t = t.parent;
        }
        return !1;
      }
      addChildren(t) {
        this.children.push(t);
      }
      createNodeData() {
        (this._imgData = this.createImgNode()),
          (this._iconData = this.createIconNode()),
          (this._textData = this.createTextNode()),
          (this._hyperlinkData = this.createHyperlinkNode()),
          (this._tagData = this.createTagNode()),
          (this._noteData = this.createNoteNode()),
          this.createGeneralizationNode();
      }
      removeAllEvent() {
        this._noteData && this._noteData.node.off(["mouseover", "mouseout"]),
          this._expandBtn &&
            this._expandBtn.off(["mouseover", "mouseout", "click"]),
          this.group &&
            this.group.off([
              "click",
              "dblclick",
              "contextmenu",
              "mousedown",
              "mouseup",
            ]);
      }
      removeAllNode() {
        [
          this._imgData,
          this._iconData,
          this._textData,
          this._hyperlinkData,
          this._tagData,
          this._noteData,
        ].forEach((t) => {
          t && t.node && t.node.remove();
        }),
          (this._imgData = null),
          (this._iconData = null),
          (this._textData = null),
          (this._hyperlinkData = null),
          (this._tagData = null),
          (this._noteData = null),
          this._expandBtn &&
            (this._expandBtn.remove(), (this._expandBtn = null)),
          this.group &&
            (this.group.clear(), this.group.remove(), (this.group = null)),
          this.removeGeneralization();
      }
      getSize() {
        this.removeAllNode(), this.createNodeData();
        let { width: t, height: e } = this.getNodeRect(),
          i = this.width !== t || this.height !== e;
        return (this.width = t), (this.height = e), i;
      }
      getNodeRect() {
        let t = 0,
          e = 0,
          i = 0,
          a = 0;
        this._imgData &&
          ((this._rectInfo.imgContentWidth = t = this._imgData.width),
          (this._rectInfo.imgContentHeight = e = this._imgData.height)),
          this._iconData.length > 0 &&
            (i += this._iconData.reduce(
              (t, e) => (
                (a = Math.max(a, e.height)),
                t + (e.width + this.textContentItemMargin)
              ),
              0
            )),
          this._textData &&
            ((i += this._textData.width),
            (a = Math.max(a, this._textData.height))),
          this._hyperlinkData &&
            ((i += this._hyperlinkData.width),
            (a = Math.max(a, this._hyperlinkData.height))),
          this._tagData.length > 0 &&
            (i += this._tagData.reduce(
              (t, e) => (
                (a = Math.max(a, e.height)),
                t + (e.width + this.textContentItemMargin)
              ),
              0
            )),
          this._noteData &&
            ((i += this._noteData.width),
            (a = Math.max(a, this._noteData.height))),
          (this._rectInfo.textContentWidth = i),
          (this._rectInfo.textContentHeight = a);
        let n = e > 0 && a > 0 ? this.blockContentMargin : 0,
          { paddingX: o, paddingY: s } = this.getPaddingVale(),
          l = Math.max(t, i),
          r = e + a,
          { paddingX: d, paddingY: h } = this.shapeInstance.getShapePadding(
            l,
            r,
            o,
            s
          );
        return (
          (this.shapePadding.paddingX = d),
          (this.shapePadding.paddingY = h),
          { width: l + 2 * o + 2 * d, height: r + 2 * s + n + 2 * h }
        );
      }
      createImgNode() {
        let t = this.nodeData.data.image;
        if (!t) return;
        let e = this.getImgShowSize(),
          i = new Wt["d"]().load(t).size(...e);
        return (
          this.nodeData.data.imageTitle &&
            i.attr("title", this.nodeData.data.imageTitle),
          i.on("dblclick", (t) => {
            this.mindMap.emit("node_img_dblclick", this, t);
          }),
          { node: i, width: e[0], height: e[1] }
        );
      }
      getImgShowSize() {
        return kt(
          this.nodeData.data.imageSize.width,
          this.nodeData.data.imageSize.height,
          this.themeConfig.imgMaxWidth,
          this.themeConfig.imgMaxHeight
        );
      }
      createIconNode() {
        let t = this.nodeData.data;
        if (!t.icon || t.icon.length <= 0) return [];
        let e = this.themeConfig.iconSize;
        return t.icon.map((t) => ({
          node: Object(Wt["f"])(W.getNodeIconListIcon(t)).size(e, e),
          width: e,
          height: e,
        }));
      }
      createTextNode() {
        let t = new Wt["c"](),
          e = this.getStyle(
            "fontSize",
            this.isRoot,
            this.nodeData.data.isActive
          ),
          i = this.getStyle(
            "lineHeight",
            this.isRoot,
            this.nodeData.data.isActive
          );
        this.nodeData.data.text.split(/\n/gim).forEach((a, n) => {
          let o = new Wt["g"]().text(a);
          this.style.text(o), o.y(e * i * n), t.add(o);
        });
        let { width: a, height: n } = t.bbox();
        return { node: t, width: a, height: n };
      }
      createHyperlinkNode() {
        let { hyperlink: t, hyperlinkTitle: e } = this.nodeData.data;
        if (!t) return;
        let i = this.themeConfig.iconSize,
          a = new Wt["f"](),
          n = new Wt["a"]().to(t).target("_blank");
        n.node.addEventListener("click", (t) => {
          t.stopPropagation();
        }),
          e && n.attr("title", e),
          n.rect(i, i).fill({ color: "transparent" });
        let o = Object(Wt["f"])(W.hyperlink).size(i, i);
        return (
          this.style.iconNode(o),
          n.add(o),
          a.add(n),
          { node: a, width: i, height: i }
        );
      }
      createTagNode() {
        let t = this.nodeData.data.tag;
        if (!t || t.length <= 0) return [];
        let e = [];
        return (
          t.slice(0, this.mindMap.opt.maxTag).forEach((t, i) => {
            let a = new Wt["c"](),
              n = new Wt["g"]().text(t).x(8).cy(10);
            this.style.tagText(n, i);
            let { width: o } = n.bbox(),
              s = new Wt["e"]().size(o + 16, 20);
            this.style.tagRect(s, i),
              a.add(s).add(n),
              e.push({ node: a, width: o + 16, height: 20 });
          }),
          e
        );
      }
      createNoteNode() {
        if (!this.nodeData.data.note) return null;
        let t = this.themeConfig.iconSize,
          e = new Wt["f"]().attr("cursor", "pointer");
        e.add(new Wt["e"]().size(t, t).fill({ color: "transparent" }));
        let i = Object(Wt["f"])(W.note).size(t, t);
        return (
          this.style.iconNode(i),
          e.add(i),
          this.mindMap.opt.customNoteContentShow ||
            (this.noteEl ||
              ((this.noteEl = document.createElement("div")),
              (this.noteEl.style.cssText =
                "\n                    position: absolute;\n                    padding: 10px;\n                    border-radius: 5px;\n                    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);\n                    display: none;\n                    background-color: #fff;\n                "),
              document.body.appendChild(this.noteEl)),
            (this.noteEl.innerText = this.nodeData.data.note)),
          e.on("mouseover", () => {
            let { left: i, top: a } = e.node.getBoundingClientRect();
            this.mindMap.opt.customNoteContentShow
              ? this.mindMap.opt.customNoteContentShow.show(
                  this.nodeData.data.note,
                  i,
                  a + t
                )
              : ((this.noteEl.style.left = i + "px"),
                (this.noteEl.style.top = a + t + "px"),
                (this.noteEl.style.display = "block"));
          }),
          e.on("mouseout", () => {
            this.mindMap.opt.customNoteContentShow
              ? this.mindMap.opt.customNoteContentShow.hide()
              : (this.noteEl.style.display = "none");
          }),
          { node: e, width: t, height: t }
        );
      }
      getShape() {
        return this.style.getStyle("shape", !1, !1);
      }
      layout() {
        let { width: t, textContentItemMargin: e } = this,
          { paddingY: i } = this.getPaddingVale();
        (i += this.shapePadding.paddingY),
          (this.group = new Wt["c"]()),
          this.isGeneralization &&
            this.generalizationBelongNode &&
            this.group.addClass(
              "generalization_" + this.generalizationBelongNode.uid
            ),
          this.draw.add(this.group),
          this.update(!0);
        const a = this.getShape();
        this.style["rectangle" === a ? "rect" : "shape"](
          this.shapeInstance.createShape()
        );
        let n = 0;
        this._imgData &&
          ((n = this._imgData.height),
          this.group.add(this._imgData.node),
          this._imgData.node.cx(t / 2).y(i));
        let o = new Wt["c"](),
          s = 0,
          l = new Wt["c"]();
        if (this._iconData && this._iconData.length > 0) {
          let t = 0;
          this._iconData.forEach((i) => {
            i.node
              .x(s + t)
              .y((this._rectInfo.textContentHeight - i.height) / 2),
              l.add(i.node),
              (t += i.width + e);
          }),
            o.add(l),
            (s += t);
        }
        this._textData &&
          (this._textData.node.x(s).y(0),
          o.add(this._textData.node),
          (s += this._textData.width + e)),
          this._hyperlinkData &&
            (this._hyperlinkData.node
              .x(s)
              .y(
                (this._rectInfo.textContentHeight -
                  this._hyperlinkData.height) /
                  2
              ),
            o.add(this._hyperlinkData.node),
            (s += this._hyperlinkData.width + e));
        let r = new Wt["c"]();
        if (this._tagData && this._tagData.length > 0) {
          let t = 0;
          this._tagData.forEach((i) => {
            i.node
              .x(s + t)
              .y((this._rectInfo.textContentHeight - i.height) / 2),
              r.add(i.node),
              (t += i.width + e);
          }),
            o.add(r),
            (s += t);
        }
        this._noteData &&
          (this._noteData.node
            .x(s)
            .y((this._rectInfo.textContentHeight - this._noteData.height) / 2),
          o.add(this._noteData.node),
          (s += this._noteData.width)),
          o.translate(
            t / 2 - o.bbox().width / 2,
            n +
              i +
              (n > 0 && this._rectInfo.textContentHeight > 0
                ? this.blockContentMargin
                : 0)
          ),
          this.group.add(o),
          this.group.on("click", (t) => {
            this.mindMap.emit("node_click", this, t), this.active(t);
          }),
          this.group.on("mousedown", (t) => {
            t.stopPropagation(), this.mindMap.emit("node_mousedown", this, t);
          }),
          this.group.on("mouseup", (t) => {
            t.stopPropagation(), this.mindMap.emit("node_mouseup", this, t);
          }),
          this.group.on("dblclick", (t) => {
            this.mindMap.opt.readonly ||
              (t.stopPropagation(),
              this.mindMap.emit("node_dblclick", this, t));
          }),
          this.group.on("contextmenu", (t) => {
            this.mindMap.opt.readonly ||
              this.isGeneralization ||
              (t.stopPropagation(),
              t.preventDefault(),
              this.nodeData.data.isActive && this.renderer.clearActive(),
              this.active(t),
              this.mindMap.emit("node_contextmenu", t, this));
          });
      }
      active(t) {
        this.mindMap.opt.readonly ||
          (t && t.stopPropagation(),
          this.nodeData.data.isActive ||
            (this.mindMap.emit(
              "before_node_active",
              this,
              this.renderer.activeNodeList
            ),
            this.renderer.clearActive(),
            this.mindMap.execCommand("SET_NODE_ACTIVE", this, !0),
            this.renderer.addActiveNode(this),
            this.mindMap.emit(
              "node_active",
              this,
              this.renderer.activeNodeList
            )));
      }
      renderNode() {
        this.renderLine(),
          this.removeAllEvent(),
          this.removeAllNode(),
          this.createNodeData(),
          this.layout();
      }
      update(t = !1) {
        if (!this.group) return;
        this._expandBtn && this.nodeData.children.length <= 0
          ? this.removeExpandBtn()
          : !this._expandBtn && this.nodeData.children.length > 0
          ? this.renderExpandBtn()
          : this.updateExpandBtnPos(),
          this.renderGeneralization();
        let e = this.group.transform();
        t
          ? this.group.translate(
              this.left - e.translateX,
              this.top - e.translateY
            )
          : this.group
              .animate(300)
              .translate(this.left - e.translateX, this.top - e.translateY);
      }
      render(t = () => {}) {
        if (
          (this.initRender
            ? ((this.initRender = !1), this.renderNode())
            : (this.renderLine(), this.update()),
          this.children &&
            this.children.length &&
            !1 !== this.nodeData.data.expand)
        ) {
          let e = 0;
          Ot(
            this.children.map((i) => () => {
              i.render(() => {
                e++, e >= this.children.length && t();
              });
            })
          );
        } else t();
        this.nodeData.inserting &&
          (delete this.nodeData.inserting,
          this.active(),
          this.mindMap.emit("node_dblclick", this));
      }
      remove() {
        (this.initRender = !0),
          this.removeAllEvent(),
          this.removeAllNode(),
          this.removeLine(),
          this.children &&
            this.children.length &&
            Ot(
              this.children.map((t) => () => {
                t.remove();
              })
            );
      }
      hide() {
        if ((this.group.hide(), this.hideGeneralization(), this.parent)) {
          let t = this.parent.children.indexOf(this);
          this.parent._lines[t].hide();
        }
        this.children &&
          this.children.length &&
          Ot(
            this.children.map((t) => () => {
              t.hide();
            })
          );
      }
      show() {
        if (this.group) {
          if ((this.group.show(), this.showGeneralization(), this.parent)) {
            let t = this.parent.children.indexOf(this);
            this.parent._lines[t] && this.parent._lines[t].show();
          }
          this.children &&
            this.children.length &&
            Ot(
              this.children.map((t) => () => {
                t.show();
              })
            );
        }
      }
      renderLine(t = !1) {
        if (!1 === this.nodeData.data.expand) return;
        let e = this.nodeData.children.length;
        e > this._lines.length
          ? new Array(e - this._lines.length).fill(0).forEach(() => {
              this._lines.push(this.draw.path());
            })
          : e < this._lines.length &&
            (this._lines.slice(e).forEach((t) => {
              t.remove();
            }),
            (this._lines = this._lines.slice(0, e))),
          this.renderer.layout.renderLine(
            this,
            this._lines,
            (t, e) => {
              this.styleLine(t, e);
            },
            this.style.getStyle("lineStyle", !0)
          ),
          t &&
            this.children &&
            this.children.length > 0 &&
            this.children.forEach((e) => {
              e.renderLine(t);
            });
      }
      styleLine(t, e) {
        let i =
            e.getSelfInhertStyle("lineWidth") || e.getStyle("lineWidth", !0),
          a = e.getSelfInhertStyle("lineColor") || e.getStyle("lineColor", !0),
          n =
            e.getSelfInhertStyle("lineDasharray") ||
            e.getStyle("lineDasharray", !0);
        this.style.line(t, { width: i, color: a, dasharray: n });
      }
      removeLine() {
        this._lines.forEach((t) => {
          t.remove();
        }),
          (this._lines = []);
      }
      checkHasGeneralization() {
        return !!this.nodeData.data.generalization;
      }
      createGeneralizationNode() {
        !this.isGeneralization &&
          this.checkHasGeneralization() &&
          (this._generalizationLine ||
            (this._generalizationLine = this.draw.path()),
          this._generalizationNode ||
            ((this._generalizationNode = new jt({
              data: { data: this.nodeData.data.generalization },
              uid: this.mindMap.uid++,
              renderer: this.renderer,
              mindMap: this.mindMap,
              draw: this.draw,
              isGeneralization: !0,
            })),
            (this._generalizationNodeWidth = this._generalizationNode.width),
            (this._generalizationNodeHeight = this._generalizationNode.height),
            (this._generalizationNode.generalizationBelongNode = this),
            this.nodeData.data.generalization.isActive &&
              this.renderer.addActiveNode(this._generalizationNode)));
      }
      updateGeneralization() {
        this.removeGeneralization(), this.createGeneralizationNode();
      }
      renderGeneralization() {
        if (!this.isGeneralization)
          return this.checkHasGeneralization()
            ? void (!1 !== this.nodeData.data.expand
                ? (this.createGeneralizationNode(),
                  this.renderer.layout.renderGeneralization(
                    this,
                    this._generalizationLine,
                    this._generalizationNode
                  ),
                  this.style.generalizationLine(this._generalizationLine),
                  this._generalizationNode.render())
                : this.removeGeneralization())
            : (this.removeGeneralization(),
              (this._generalizationNodeWidth = 0),
              void (this._generalizationNodeHeight = 0));
      }
      removeGeneralization() {
        this._generalizationLine &&
          (this._generalizationLine.remove(),
          (this._generalizationLine = null)),
          this._generalizationNode &&
            (this.renderer.removeActiveNode(this._generalizationNode),
            this._generalizationNode.remove(),
            (this._generalizationNode = null)),
          this.generalizationBelongNode &&
            this.draw
              .find(".generalization_" + this.generalizationBelongNode.uid)
              .remove();
      }
      hideGeneralization() {
        this._generalizationLine && this._generalizationLine.hide(),
          this._generalizationNode && this._generalizationNode.hide();
      }
      showGeneralization() {
        this._generalizationLine && this._generalizationLine.show(),
          this._generalizationNode && this._generalizationNode.show();
      }
      updateExpandBtnNode() {
        let t;
        this._expandBtn && this._expandBtn.clear(),
          (t = !1 === this.nodeData.data.expand ? Yt.open : Yt.close);
        let e = Object(Wt["f"])(t).size(this.expandBtnSize, this.expandBtnSize),
          i = new Wt["b"]().size(this.expandBtnSize);
        e.x(0).y(-this.expandBtnSize / 2),
          i.x(0).y(-this.expandBtnSize / 2),
          this.style.iconBtn(e, i),
          this._expandBtn && this._expandBtn.add(i).add(e);
      }
      updateExpandBtnPos() {
        this._expandBtn &&
          this.renderer.layout.renderExpandBtn(this, this._expandBtn);
      }
      renderExpandBtn() {
        !this.nodeData.children ||
          this.nodeData.children.length <= 0 ||
          this.isRoot ||
          ((this._expandBtn = new Wt["c"]()),
          this.updateExpandBtnNode(),
          this._expandBtn.on("mouseover", (t) => {
            t.stopPropagation(), this._expandBtn.css({ cursor: "pointer" });
          }),
          this._expandBtn.on("mouseout", (t) => {
            t.stopPropagation(), this._expandBtn.css({ cursor: "auto" });
          }),
          this._expandBtn.on("click", (t) => {
            t.stopPropagation(),
              this.mindMap.execCommand(
                "SET_NODE_EXPAND",
                this,
                !this.nodeData.data.expand
              ),
              this.mindMap.emit("expand_btn_click", this);
          }),
          this.group.add(this._expandBtn),
          this.updateExpandBtnPos());
      }
      removeExpandBtn() {
        this._expandBtn &&
          (this._expandBtn.off(["mouseover", "mouseout", "click"]),
          this._expandBtn.clear(),
          this._expandBtn.remove(),
          (this._expandBtn = null));
      }
      isParent(t) {
        if (this === t) return !1;
        let e = t.parent;
        while (e) {
          if (this === e) return !0;
          e = e.parent;
        }
        return !1;
      }
      isBrother(t) {
        return (
          !(!this.parent || this === t) &&
          this.parent.children.find((e) => e === t)
        );
      }
      getPaddingVale() {
        return {
          paddingX: this.getStyle("paddingX", !0, this.nodeData.data.isActive),
          paddingY: this.getStyle("paddingY", !0, this.nodeData.data.isActive),
        };
      }
      getStyle(t, e, i) {
        let a = this.style.merge(t, e, i);
        return void 0 === a ? "" : a;
      }
      getSelfStyle(t) {
        return this.style.getSelfStyle(t);
      }
      getParentSelfStyle(t) {
        return this.parent
          ? this.parent.getSelfStyle(t) || this.parent.getParentSelfStyle(t)
          : null;
      }
      getSelfInhertStyle(t) {
        return this.getSelfStyle(t) || this.getParentSelfStyle(t);
      }
      setStyle(t, e, i) {
        this.mindMap.execCommand("SET_NODE_STYLE", this, t, e, i);
      }
      getData(t) {
        return t ? this.nodeData.data[t] || "" : this.nodeData.data;
      }
      setData(t = {}) {
        this.mindMap.execCommand("SET_NODE_DATA", this, t);
      }
      setText(t) {
        this.mindMap.execCommand("SET_NODE_TEXT", this, t);
      }
      setImage(t) {
        this.mindMap.execCommand("SET_NODE_IMAGE", this, t);
      }
      setIcon(t) {
        this.mindMap.execCommand("SET_NODE_ICON", this, t);
      }
      setHyperlink(t, e) {
        this.mindMap.execCommand("SET_NODE_HYPERLINK", this, t, e);
      }
      setNote(t) {
        this.mindMap.execCommand("SET_NODE_NOTE", this, t);
      }
      setTag(t) {
        this.mindMap.execCommand("SET_NODE_TAG", this, t);
      }
      setShape(t) {
        this.mindMap.execCommand("SET_NODE_SHAPE", this, t);
      }
    }
    var Xt = jt;
    class Vt {
      constructor(t) {
        (this.renderer = t),
          (this.mindMap = t.mindMap),
          (this.draw = this.mindMap.draw),
          (this.root = null);
      }
      doLayout() {
        throw new Error("【computed】方法为必要方法，需要子类进行重写！");
      }
      renderLine() {
        throw new Error("【renderLine】方法为必要方法，需要子类进行重写！");
      }
      renderExpandBtn() {
        throw new Error(
          "【renderExpandBtn】方法为必要方法，需要子类进行重写！"
        );
      }
      renderGeneralization() {}
      createNode(t, e, i, a) {
        let n = null;
        return (
          t && t._node && !this.renderer.reRender
            ? ((n = t._node), n.reset(), (n.layerIndex = a))
            : ((n = new Xt({
                data: t,
                uid: this.mindMap.uid++,
                renderer: this.renderer,
                mindMap: this.mindMap,
                draw: this.draw,
                layerIndex: a,
              })),
              n.getSize(),
              (t._node = n),
              t.data.isActive && this.renderer.addActiveNode(n)),
          i
            ? ((n.isRoot = !0), (this.root = n))
            : ((n.parent = e._node), e._node.addChildren(n)),
          n
        );
      }
      setNodeCenter(t) {
        (t.left = (this.mindMap.width - t.width) / 2),
          (t.top = (this.mindMap.height - t.height) / 2);
      }
      updateChildren(t, e, i) {
        t.forEach((t) => {
          (t[e] += i),
            t.children &&
              t.children.length &&
              !t.hasCustomPosition() &&
              this.updateChildren(t.children, e, i);
        });
      }
      quadraticCurvePath(t, e, i, a) {
        let n = t + 0.2 * (i - t),
          o = e + 0.8 * (a - e);
        return `M ${t},${e} Q ${n},${o} ${i},${a}`;
      }
      cubicBezierPath(t, e, i, a) {
        let n = t + (i - t) / 2,
          o = e,
          s = n,
          l = a;
        return `M ${t},${e} C ${n},${o} ${s},${l} ${i},${a}`;
      }
      getMarginX(t) {
        return 1 === t
          ? this.mindMap.themeConfig.second.marginX
          : this.mindMap.themeConfig.node.marginX;
      }
      getMarginY(t) {
        return 1 === t
          ? this.mindMap.themeConfig.second.marginY
          : this.mindMap.themeConfig.node.marginY;
      }
      getNodeWidthWithGeneralization(t) {
        return Math.max(
          t.width,
          t.checkHasGeneralization() ? t._generalizationNodeWidth : 0
        );
      }
      getNodeHeightWithGeneralization(t) {
        return Math.max(
          t.height,
          t.checkHasGeneralization() ? t._generalizationNodeHeight : 0
        );
      }
      getNodeBoundaries(t, e) {
        let { generalizationLineMargin: i, generalizationNodeMargin: a } =
            this.mindMap.themeConfig,
          n = (t) => {
            let i = 1 / 0,
              o = -1 / 0,
              s = 1 / 0,
              l = -1 / 0;
            t.children &&
              t.children.length > 0 &&
              t.children.forEach((t) => {
                let { left: r, right: d, top: h, bottom: c } = n(t),
                  p =
                    t.checkHasGeneralization() && t.nodeData.data.expand
                      ? t._generalizationNodeWidth + a
                      : 0,
                  m =
                    t.checkHasGeneralization() && t.nodeData.data.expand
                      ? t._generalizationNodeHeight + a
                      : 0;
                r - ("h" === e ? p : 0) < i && (i = r - ("h" === e ? p : 0)),
                  d + ("h" === e ? p : 0) > o && (o = d + ("h" === e ? p : 0)),
                  h < s && (s = h),
                  c + ("v" === e ? m : 0) > l && (l = c + ("v" === e ? m : 0));
              });
            let r = {
              left: t.left,
              right: t.left + t.width,
              top: t.top,
              bottom: t.top + t.height,
            };
            return {
              left: r.left < i ? r.left : i,
              right: r.right > o ? r.right : o,
              top: r.top < s ? r.top : s,
              bottom: r.bottom > l ? r.bottom : l,
            };
          },
          { left: o, right: s, top: l, bottom: r } = n(t);
        return {
          left: o,
          right: s,
          top: l,
          bottom: r,
          generalizationLineMargin: i,
          generalizationNodeMargin: a,
        };
      }
    }
    var Gt = Vt;
    class Zt extends Gt {
      constructor(t = {}) {
        super(t);
      }
      doLayout(t) {
        let e = [
          () => {
            this.computedBaseValue();
          },
          () => {
            this.computedTopValue();
          },
          () => {
            this.adjustTopValue();
          },
          () => {
            t(this.root);
          },
        ];
        Ot(e);
      }
      computedBaseValue() {
        $t(
          this.renderer.renderTree,
          null,
          (t, e, i, a) => {
            let n = this.createNode(t, e, i, a);
            if (
              (i
                ? this.setNodeCenter(n)
                : (n.left = e._node.left + e._node.width + this.getMarginX(a)),
              !t.data.expand)
            )
              return !0;
          },
          (t, e, i, a) => {
            let n = !1 === t.data.expand ? 0 : t._node.children.length;
            t._node.childrenAreaHeight = n
              ? t._node.children.reduce((t, e) => t + e.height, 0) +
                (n + 1) * this.getMarginY(a + 1)
              : 0;
          },
          !0,
          0
        );
      }
      computedTopValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (t.nodeData.data.expand && t.children && t.children.length) {
              let e = this.getMarginY(a + 1),
                i = t.top + t.height / 2 - t.childrenAreaHeight / 2,
                n = i + e;
              t.children.forEach((t) => {
                (t.top = n), (n += t.height + e);
              });
            }
          },
          null,
          !0
        );
      }
      adjustTopValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (!t.nodeData.data.expand) return;
            let n =
              t.childrenAreaHeight - 2 * this.getMarginY(a + 1) - t.height;
            n > 0 && this.updateBrothers(t, n / 2);
          },
          null,
          !0
        );
      }
      updateBrothers(t, e) {
        if (t.parent) {
          let i = t.parent.children,
            a = i.findIndex((e) => e === t);
          i.forEach((i, n) => {
            if (i === t || i.hasCustomPosition()) return;
            let o = 0;
            n < a ? (o = -e) : n > a && (o = e),
              (i.top += o),
              i.children &&
                i.children.length &&
                this.updateChildren(i.children, "top", o);
          }),
            this.updateBrothers(t.parent, e);
        }
      }
      renderLine(t, e, i, a) {
        "curve" === a
          ? this.renderLineCurve(t, e, i)
          : "direct" === a
          ? this.renderLineDirect(t, e, i)
          : this.renderLineStraight(t, e, i);
      }
      renderLineStraight(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t,
          r = this.getMarginX(t.layerIndex + 1),
          d = 0.6 * (r - l);
        t.children.forEach((r, h) => {
          let c = 0 === t.layerIndex ? a + o : a + o + l,
            p = n + s / 2,
            m = r.left,
            u = r.top + r.height / 2,
            g = `M ${c},${p} L ${c + d},${p} L ${c + d},${u} L ${m},${u}`;
          e[h].plot(g), i && i(e[h], r);
        });
      }
      renderLineDirect(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t;
        t.children.forEach((r, d) => {
          let h = 0 === t.layerIndex ? a + o / 2 : a + o + l,
            c = n + s / 2,
            p = r.left,
            m = r.top + r.height / 2,
            u = `M ${h},${c} L ${p},${m}`;
          e[d].plot(u), i && i(e[d], r);
        });
      }
      renderLineCurve(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t;
        t.children.forEach((r, d) => {
          let h = 0 === t.layerIndex ? a + o / 2 : a + o + l,
            c = n + s / 2,
            p = r.left,
            m = r.top + r.height / 2,
            u = "";
          (u = t.isRoot
            ? this.quadraticCurvePath(h, c, p, m)
            : this.cubicBezierPath(h, c, p, m)),
            e[d].plot(u),
            i && i(e[d], r);
        });
      }
      renderExpandBtn(t, e) {
        let { width: i, height: a } = t,
          { translateX: n, translateY: o } = e.transform();
        e.translate(i - n, a / 2 - o);
      }
      renderGeneralization(t, e, i) {
        let {
            top: a,
            bottom: n,
            right: o,
            generalizationLineMargin: s,
            generalizationNodeMargin: l,
          } = this.getNodeBoundaries(t, "h"),
          r = o + s,
          d = a,
          h = o + s,
          c = n,
          p = r + 20,
          m = d + (c - d) / 2,
          u = `M ${r},${d} Q ${p},${m} ${h},${c}`;
        e.plot(u), (i.left = o + l), (i.top = a + (n - a - i.height) / 2);
      }
    }
    var Ut = Zt;
    class Jt extends Gt {
      constructor(t = {}) {
        super(t);
      }
      doLayout(t) {
        let e = [
          () => {
            this.computedBaseValue();
          },
          () => {
            this.computedTopValue();
          },
          () => {
            this.adjustTopValue();
          },
          () => {
            t(this.root);
          },
        ];
        Ot(e);
      }
      computedBaseValue() {
        $t(
          this.renderer.renderTree,
          null,
          (t, e, i, a, n) => {
            let o = this.createNode(t, e, i, a);
            if (
              (i
                ? this.setNodeCenter(o)
                : (e._node.dir
                    ? (o.dir = e._node.dir)
                    : (o.dir = n % 2 === 0 ? "right" : "left"),
                  (o.left =
                    "right" === o.dir
                      ? e._node.left + e._node.width + this.getMarginX(a)
                      : e._node.left - this.getMarginX(a) - o.width)),
              !t.data.expand)
            )
              return !0;
          },
          (t, e, i, a) => {
            if (!t.data.expand)
              return (
                (t._node.leftChildrenAreaHeight = 0),
                void (t._node.rightChildrenAreaHeight = 0)
              );
            let n = 0,
              o = 0,
              s = 0,
              l = 0;
            t._node.children.forEach((t) => {
              "left" === t.dir
                ? (n++, (s += t.height))
                : (o++, (l += t.height));
            }),
              (t._node.leftChildrenAreaHeight =
                s + (n + 1) * this.getMarginY(a + 1)),
              (t._node.rightChildrenAreaHeight =
                l + (o + 1) * this.getMarginY(a + 1));
          },
          !0,
          0
        );
      }
      computedTopValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (t.nodeData.data.expand && t.children && t.children.length) {
              let e = this.getMarginY(a + 1),
                i = t.top + t.height / 2 + e,
                n = i - t.leftChildrenAreaHeight / 2,
                o = i - t.rightChildrenAreaHeight / 2;
              t.children.forEach((t) => {
                "left" === t.dir
                  ? ((t.top = n), (n += t.height + e))
                  : ((t.top = o), (o += t.height + e));
              });
            }
          },
          null,
          !0
        );
      }
      adjustTopValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (!t.nodeData.data.expand) return;
            let n = 2 * this.getMarginY(a + 1) + t.height,
              o = t.leftChildrenAreaHeight - n,
              s = t.rightChildrenAreaHeight - n;
            (o > 0 || s > 0) && this.updateBrothers(t, o / 2, s / 2);
          },
          null,
          !0
        );
      }
      updateBrothers(t, e, i) {
        if (t.parent) {
          let a = t.parent.children.filter((e) => e.dir === t.dir),
            n = a.findIndex((e) => e === t);
          a.forEach((t, a) => {
            if (t.hasCustomPosition()) return;
            let o = 0,
              s = "left" === t.dir ? e : i;
            a < n ? (o = -s) : a > n && (o = s),
              (t.top += o),
              t.children &&
                t.children.length &&
                this.updateChildren(t.children, "top", o);
          }),
            this.updateBrothers(t.parent, e, i);
        }
      }
      renderLine(t, e, i, a) {
        "curve" === a
          ? this.renderLineCurve(t, e, i)
          : "direct" === a
          ? this.renderLineDirect(t, e, i)
          : this.renderLineStraight(t, e, i);
      }
      renderLineStraight(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t,
          r = this.getMarginX(t.layerIndex + 1),
          d = 0.6 * (r - l);
        t.children.forEach((r, h) => {
          let c = 0,
            p = 0;
          "left" === r.dir
            ? ((p = -d), (c = 0 === t.layerIndex ? a : a - l))
            : ((p = d), (c = 0 === t.layerIndex ? a + o : a + o + l));
          let m = n + s / 2,
            u = "left" === r.dir ? r.left + r.width : r.left,
            g = r.top + r.height / 2,
            f = `M ${c},${m} L ${c + p},${m} L ${c + p},${g} L ${u},${g}`;
          e[h].plot(f), i && i(e[h], r);
        });
      }
      renderLineDirect(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t;
        t.children.forEach((r, d) => {
          let h =
              0 === t.layerIndex
                ? a + o / 2
                : "left" === r.dir
                ? a - l
                : a + o + l,
            c = n + s / 2,
            p = "left" === r.dir ? r.left + r.width : r.left,
            m = r.top + r.height / 2,
            u = `M ${h},${c} L ${p},${m}`;
          e[d].plot(u), i && i(e[d], r);
        });
      }
      renderLineCurve(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t;
        t.children.forEach((r, d) => {
          let h =
              0 === t.layerIndex
                ? a + o / 2
                : "left" === r.dir
                ? a - l
                : a + o + 20,
            c = n + s / 2,
            p = "left" === r.dir ? r.left + r.width : r.left,
            m = r.top + r.height / 2,
            u = "";
          (u = t.isRoot
            ? this.quadraticCurvePath(h, c, p, m)
            : this.cubicBezierPath(h, c, p, m)),
            e[d].plot(u),
            i && i(e[d], r);
        });
      }
      renderExpandBtn(t, e) {
        let { width: i, height: a, expandBtnSize: n } = t,
          { translateX: o, translateY: s } = e.transform(),
          l = ("left" === t.dir ? 0 - n : i) - o,
          r = a / 2 - s;
        e.translate(l, r);
      }
      renderGeneralization(t, e, i) {
        let a = "left" === t.dir,
          {
            top: n,
            bottom: o,
            left: s,
            right: l,
            generalizationLineMargin: r,
            generalizationNodeMargin: d,
          } = this.getNodeBoundaries(t, "h", a),
          h = a ? s - r : l + r,
          c = h,
          p = n,
          m = h,
          u = o,
          g = c + (a ? -20 : 20),
          f = p + (u - p) / 2,
          v = `M ${c},${p} Q ${g},${f} ${m},${u}`;
        e.plot(v),
          (i.left = h + (a ? -d : d) - (a ? i.width : 0)),
          (i.top = n + (o - n - i.height) / 2);
      }
    }
    var Kt = Jt;
    class qt extends Gt {
      constructor(t = {}) {
        super(t);
      }
      doLayout(t) {
        let e = [
          () => {
            this.computedBaseValue();
          },
          () => {
            this.computedLeftTopValue();
          },
          () => {
            this.adjustLeftTopValue();
          },
          () => {
            t(this.root);
          },
        ];
        Ot(e);
      }
      computedBaseValue() {
        $t(
          this.renderer.renderTree,
          null,
          (t, e, i, a) => {
            let n = this.createNode(t, e, i, a);
            if (
              (i
                ? this.setNodeCenter(n)
                : e._node.isRoot &&
                  (n.top = e._node.top + e._node.height + this.getMarginX(a)),
              !t.data.expand)
            )
              return !0;
          },
          (t, e, i, a) => {
            if (i) {
              let e = !1 === t.data.expand ? 0 : t._node.children.length;
              t._node.childrenAreaWidth = e
                ? t._node.children.reduce((t, e) => t + e.width, 0) +
                  (e + 1) * this.getMarginX(a + 1)
                : 0;
            }
          },
          !0,
          0
        );
      }
      computedLeftTopValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (t.nodeData.data.expand && t.children && t.children.length) {
              let e = this.getMarginX(a + 1),
                n = this.getMarginY(a + 1);
              if (i) {
                let i = t.left + t.width / 2 - t.childrenAreaWidth / 2,
                  a = i + e;
                t.children.forEach((t) => {
                  (t.left = a), (a += t.width + e);
                });
              } else {
                let e = t.top + t.height + n + t.expandBtnSize;
                t.children.forEach((i) => {
                  (i.left = t.left + 0.5 * t.width),
                    (i.top = e),
                    (e += i.height + n + t.expandBtnSize);
                });
              }
            }
          },
          null,
          !0
        );
      }
      adjustLeftTopValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (!t.nodeData.data.expand) return;
            if (e && e.isRoot) {
              let e = this.getNodeAreaWidth(t),
                i = e - t.width;
              i > 0 && this.updateBrothersLeft(t, i / 2);
            }
            let n = t.children.length;
            if (e && !e.isRoot && n > 0) {
              let e = this.getMarginY(a + 1),
                i =
                  t.children.reduce((t, e) => t + e.height, 0) +
                  (n + 1) * e +
                  n * t.expandBtnSize;
              this.updateBrothersTop(t, i);
            }
          },
          null,
          !0
        );
      }
      getNodeAreaWidth(t) {
        let e = [],
          i = (t, a) => {
            t.children.length
              ? ((a += t.width / 2),
                t.children.forEach((t) => {
                  i(t, a);
                }))
              : ((a += t.width), e.push(a));
          };
        return i(t, 0), Math.max(...e);
      }
      updateBrothersLeft(t, e) {
        if (t.parent) {
          let i = t.parent.children,
            a = i.findIndex((e) => e === t);
          if ((0 === a || a === i.length - 1) && i.length > 1) {
            let i = 0 === a ? -e : e;
            (t.left += i),
              t.children &&
                t.children.length &&
                !t.hasCustomPosition() &&
                this.updateChildren(t.children, "left", i);
          }
          i.forEach((t, i) => {
            if (t.hasCustomPosition()) return;
            let n = 0;
            i < a ? (n = -e) : i > a && (n = e),
              (t.left += n),
              t.children &&
                t.children.length &&
                this.updateChildren(t.children, "left", n);
          }),
            this.updateBrothersLeft(t.parent, e);
        }
      }
      updateBrothersTop(t, e) {
        if (t.parent && !t.parent.isRoot) {
          let i = t.parent.children,
            a = i.findIndex((e) => e === t);
          i.forEach((t, i) => {
            if (t.hasCustomPosition()) return;
            let n = 0;
            i > a && (n = e),
              (t.top += n),
              t.children &&
                t.children.length &&
                this.updateChildren(t.children, "top", n);
          }),
            this.updateBrothersTop(t.parent, e);
        }
      }
      renderLine(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s, expandBtnSize: l } = t,
          r = t.children.length,
          d = this.getMarginX(t.layerIndex + 1);
        if (t.isRoot) {
          let l = a + o / 2,
            h = n + s,
            c = 0.7 * d,
            p = 1 / 0,
            m = -1 / 0;
          t.children.forEach((t, a) => {
            let n = t.left + t.width / 2,
              o = t.top;
            n < p && (p = n), n > m && (m = n);
            let s = `M ${n},${h + c} L ${n},${h + c > o ? o + t.height : o}`;
            e[a].plot(s), i && i(e[a], t);
          }),
            (p = Math.min(p, l)),
            (m = Math.max(m, l));
          let u = this.draw.path();
          if (
            (t.style.line(u),
            u.plot(`M ${l},${h} L ${l},${h + c}`),
            t._lines.push(u),
            i && i(u, t),
            r > 0)
          ) {
            let e = this.draw.path();
            t.style.line(e),
              e.plot(`M ${p},${h + c} L ${m},${h + c}`),
              t._lines.push(e),
              i && i(e, t);
          }
        } else {
          let a = n + s,
            o = -1 / 0,
            d = t.left + 0.3 * t.width;
          if (
            (t.children.forEach((s, l) => {
              let r = s.top + s.height / 2;
              r > o && (o = r);
              let h = "",
                c = s.left,
                p = s.left + s.width < d,
                m = !1;
              p
                ? (c = s.left + s.width)
                : s.left < d &&
                  s.left + s.width > d &&
                  ((m = !0), (r = s.top), (o = r)),
                r > n && r < a
                  ? (h = `M ${p ? t.left : t.left + t.width},${r} L ${c},${r}`)
                  : r < a
                  ? (m && ((r = s.top + s.height), (c = d)),
                    (h = `M ${d},${n} L ${d},${r} L ${c},${r}`))
                  : (m && (c = d), (h = `M ${d},${r} L ${c},${r}`)),
                e[l].plot(h),
                i && i(e[l], s);
            }),
            r > 0)
          ) {
            let e = this.draw.path();
            (l = r > 0 ? l : 0),
              t.style.line(e),
              o < a + l
                ? e.hide()
                : (e.plot(`M ${d},${a + l} L ${d},${o}`), e.show()),
              t._lines.push(e),
              i && i(e, t);
          }
        }
      }
      renderExpandBtn(t, e) {
        let { width: i, height: a, expandBtnSize: n, isRoot: o } = t;
        if (!o) {
          let { translateX: t, translateY: o } = e.transform();
          e.translate(0.3 * i - n / 2 - t, a + n / 2 - o);
        }
      }
      renderGeneralization(t, e, i) {
        let {
            top: a,
            bottom: n,
            right: o,
            generalizationLineMargin: s,
            generalizationNodeMargin: l,
          } = this.getNodeBoundaries(t, "h"),
          r = o + s,
          d = a,
          h = o + s,
          c = n,
          p = r + 20,
          m = d + (c - d) / 2,
          u = `M ${r},${d} Q ${p},${m} ${h},${c}`;
        e.plot(u), (i.left = o + l), (i.top = a + (n - a - i.height) / 2);
      }
    }
    var Qt = qt;
    class te extends Gt {
      constructor(t = {}) {
        super(t);
      }
      doLayout(t) {
        let e = [
          () => {
            this.computedBaseValue();
          },
          () => {
            this.computedLeftValue();
          },
          () => {
            this.adjustLeftValue();
          },
          () => {
            t(this.root);
          },
        ];
        Ot(e);
      }
      computedBaseValue() {
        $t(
          this.renderer.renderTree,
          null,
          (t, e, i, a) => {
            let n = this.createNode(t, e, i, a);
            if (
              (i
                ? this.setNodeCenter(n)
                : (n.top = e._node.top + e._node.height + this.getMarginX(a)),
              !t.data.expand)
            )
              return !0;
          },
          (t, e, i, a) => {
            let n = !1 === t.data.expand ? 0 : t._node.children.length;
            t._node.childrenAreaWidth = n
              ? t._node.children.reduce((t, e) => t + e.width, 0) +
                (n + 1) * this.getMarginY(a + 1)
              : 0;
          },
          !0,
          0
        );
      }
      computedLeftValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (t.nodeData.data.expand && t.children && t.children.length) {
              let e = this.getMarginY(a + 1),
                i = t.left + t.width / 2 - t.childrenAreaWidth / 2,
                n = i + e;
              t.children.forEach((t) => {
                (t.left = n), (n += t.width + e);
              });
            }
          },
          null,
          !0
        );
      }
      adjustLeftValue() {
        $t(
          this.root,
          null,
          (t, e, i, a) => {
            if (!t.nodeData.data.expand) return;
            let n = t.childrenAreaWidth - 2 * this.getMarginY(a + 1) - t.width;
            n > 0 && this.updateBrothers(t, n / 2);
          },
          null,
          !0
        );
      }
      updateBrothers(t, e) {
        if (t.parent) {
          let i = t.parent.children,
            a = i.findIndex((e) => e === t);
          i.forEach((t, i) => {
            if (t.hasCustomPosition()) return;
            let n = 0;
            i < a ? (n = -e) : i > a && (n = e),
              (t.left += n),
              t.children &&
                t.children.length &&
                this.updateChildren(t.children, "left", n);
          }),
            this.updateBrothers(t.parent, e);
        }
      }
      renderLine(t, e, i, a) {
        "direct" === a
          ? this.renderLineDirect(t, e, i)
          : this.renderLineStraight(t, e, i);
      }
      renderLineDirect(t, e, i) {
        if (t.children.length <= 0) return [];
        let { left: a, top: n, width: o, height: s } = t,
          l = a + o / 2,
          r = n + s;
        t.children.forEach((t, a) => {
          let n = t.left + t.width / 2,
            o = t.top,
            s = `M ${l},${r} L ${n},${o}`;
          e[a].plot(s), i && i(e[a], t);
        });
      }
      renderLineStraight(t, e, i) {
        if (t.children.length <= 0) return [];
        let {
            left: a,
            top: n,
            width: o,
            height: s,
            expandBtnSize: l,
            isRoot: r,
          } = t,
          d = a + o / 2,
          h = n + s,
          c = this.getMarginX(t.layerIndex + 1),
          p = 0.7 * c,
          m = 1 / 0,
          u = -1 / 0,
          g = t.children.length;
        t.children.forEach((t, a) => {
          let n = t.left + t.width / 2,
            o = h + p > t.top ? t.top + t.height : t.top;
          n < m && (m = n), n > u && (u = n);
          let s = `M ${n},${h + p} L ${n},${o}`;
          e[a].plot(s), i && i(e[a], t);
        }),
          (m = Math.min(d, m)),
          (u = Math.max(d, u));
        let f = this.draw.path();
        if (
          (t.style.line(f),
          (l = g > 0 && !r ? l : 0),
          f.plot(`M ${d},${h + l} L ${d},${h + p}`),
          t._lines.push(f),
          i && i(f, t),
          g > 0)
        ) {
          let e = this.draw.path();
          t.style.line(e),
            e.plot(`M ${m},${h + p} L ${u},${h + p}`),
            t._lines.push(e),
            i && i(e, t);
        }
      }
      renderExpandBtn(t, e) {
        let { width: i, height: a, expandBtnSize: n } = t,
          { translateX: o, translateY: s } = e.transform();
        e.translate(i / 2 - n / 2 - o, a + n / 2 - s);
      }
      renderGeneralization(t, e, i) {
        let {
            bottom: a,
            left: n,
            right: o,
            generalizationLineMargin: s,
            generalizationNodeMargin: l,
          } = this.getNodeBoundaries(t, "v"),
          r = n,
          d = a + s,
          h = o,
          c = a + s,
          p = r + (h - r) / 2,
          m = d + 20,
          u = `M ${r},${d} Q ${p},${m} ${h},${c}`;
        e.plot(u), (i.top = a + l), (i.left = n + (o - n - i.width) / 2);
      }
    }
    var ee = te;
    class ie {
      constructor(t) {
        (this.renderer = t),
          (this.mindMap = t.mindMap),
          (this.textEditNode = null),
          (this.showTextEdit = !1),
          this.bindEvent();
      }
      bindEvent() {
        (this.show = this.show.bind(this)),
          this.mindMap.on("node_dblclick", this.show),
          this.mindMap.on("draw_click", () => {
            this.hideEditTextBox();
          }),
          this.mindMap.on("expand_btn_click", () => {
            this.hideEditTextBox();
          }),
          this.mindMap.on("before_node_active", () => {
            this.hideEditTextBox();
          }),
          this.mindMap.keyCommand.addShortcut("F2", () => {
            this.renderer.activeNodeList.length <= 0 ||
              this.show(this.renderer.activeNodeList[0]);
          });
      }
      registerTmpShortcut() {
        this.mindMap.keyCommand.addShortcut("Enter", () => {
          this.hideEditTextBox();
        });
      }
      show(t) {
        this.showEditTextBox(t, t._textData.node.node.getBoundingClientRect());
      }
      showEditTextBox(t, e) {
        this.mindMap.emit("before_show_text_edit"),
          this.registerTmpShortcut(),
          this.textEditNode ||
            ((this.textEditNode = document.createElement("div")),
            (this.textEditNode.style.cssText =
              "position:fixed;box-sizing: border-box;background-color:#fff;box-shadow: 0 0 20px rgba(0,0,0,.5);padding: 3px 5px;margin-left: -5px;margin-top: -3px;outline: none;"),
            this.textEditNode.setAttribute("contenteditable", !0),
            document.body.appendChild(this.textEditNode)),
          t.style.domText(this.textEditNode, this.mindMap.view.scale),
          (this.textEditNode.innerHTML = t.nodeData.data.text
            .split(/\n/gim)
            .join("<br>")),
          (this.textEditNode.style.minWidth = e.width + 10 + "px"),
          (this.textEditNode.style.minHeight = e.height + 6 + "px"),
          (this.textEditNode.style.left = e.left + "px"),
          (this.textEditNode.style.top = e.top + "px"),
          (this.textEditNode.style.display = "block"),
          (this.showTextEdit = !0),
          this.selectNodeText();
      }
      selectNodeText() {
        let t = window.getSelection(),
          e = document.createRange();
        e.selectNodeContents(this.textEditNode),
          t.removeAllRanges(),
          t.addRange(e);
      }
      hideEditTextBox() {
        this.showTextEdit &&
          (this.renderer.activeNodeList.forEach((t) => {
            let e = Et(this.textEditNode.innerHTML);
            this.mindMap.execCommand("SET_NODE_TEXT", t, e),
              t.isGeneralization &&
                t.generalizationBelongNode.updateGeneralization(),
              this.mindMap.render();
          }),
          this.mindMap.emit(
            "hide_text_edit",
            this.textEditNode,
            this.renderer.activeNodeList
          ),
          (this.textEditNode.style.display = "none"),
          (this.textEditNode.innerHTML = ""),
          (this.textEditNode.style.fontFamily = "inherit"),
          (this.textEditNode.style.fontSize = "inherit"),
          (this.textEditNode.style.fontWeight = "normal"),
          (this.showTextEdit = !1));
      }
    }
    var ae = {
      paddingX: 15,
      paddingY: 5,
      imgMaxWidth: 100,
      imgMaxHeight: 100,
      iconSize: 20,
      lineWidth: 1,
      lineColor: "#549688",
      lineDasharray: "none",
      lineStyle: "straight",
      generalizationLineWidth: 1,
      generalizationLineColor: "#549688",
      generalizationLineMargin: 0,
      generalizationNodeMargin: 20,
      backgroundColor: "#fafafa",
      backgroundImage: "none",
      backgroundRepeat: "no-repeat",
      root: {
        shape: "rectangle",
        fillColor: "#549688",
        fontFamily: "微软雅黑, Microsoft YaHei",
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 1.5,
        borderColor: "transparent",
        borderWidth: 0,
        borderDasharray: "none",
        borderRadius: 5,
        textDecoration: "none",
        active: {
          borderColor: "rgb(57, 80, 96)",
          borderWidth: 3,
          borderDasharray: "none",
        },
      },
      second: {
        shape: "rectangle",
        marginX: 100,
        marginY: 40,
        fillColor: "#fff",
        fontFamily: "微软雅黑, Microsoft YaHei",
        color: "#565656",
        fontSize: 16,
        fontWeight: "noraml",
        fontStyle: "normal",
        lineHeight: 1.5,
        borderColor: "#549688",
        borderWidth: 1,
        borderDasharray: "none",
        borderRadius: 5,
        textDecoration: "none",
        active: {
          borderColor: "rgb(57, 80, 96)",
          borderWidth: 3,
          borderDasharray: "none",
        },
      },
      node: {
        shape: "rectangle",
        marginX: 50,
        marginY: 0,
        fillColor: "transparent",
        fontFamily: "微软雅黑, Microsoft YaHei",
        color: "#6a6d6c",
        fontSize: 14,
        fontWeight: "noraml",
        fontStyle: "normal",
        lineHeight: 1.5,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        borderDasharray: "none",
        textDecoration: "none",
        active: {
          borderColor: "rgb(57, 80, 96)",
          borderWidth: 3,
          borderDasharray: "none",
        },
      },
      generalization: {
        shape: "rectangle",
        marginX: 100,
        marginY: 40,
        fillColor: "#fff",
        fontFamily: "微软雅黑, Microsoft YaHei",
        color: "#565656",
        fontSize: 16,
        fontWeight: "noraml",
        fontStyle: "normal",
        lineHeight: 1.5,
        borderColor: "#549688",
        borderWidth: 1,
        borderDasharray: "none",
        borderRadius: 5,
        textDecoration: "none",
        active: {
          borderColor: "rgb(57, 80, 96)",
          borderWidth: 3,
          borderDasharray: "none",
        },
      },
    };
    const ne = [
        "fillColor",
        "color",
        "fontWeight",
        "fontStyle",
        "borderColor",
        "borderWidth",
        "borderDasharray",
        "borderRadius",
        "textDecoration",
      ],
      oe = ["lineColor", "lineDasharray", "lineWidth"],
      se = {
        logicalStructure: Ut,
        mindMap: Kt,
        catalogOrganization: Qt,
        organizationStructure: ee,
      };
    class le {
      constructor(t = {}) {
        (this.opt = t),
          (this.mindMap = t.mindMap),
          (this.themeConfig = this.mindMap.themeConfig),
          (this.draw = this.mindMap.draw),
          (this.renderTree = yt()({}, this.mindMap.opt.data || {})),
          (this.reRender = !1),
          (this.activeNodeList = []),
          (this.root = null),
          (this.textEdit = new ie(this)),
          this.setLayout(),
          this.bindEvent(),
          this.registerCommands(),
          this.registerShortcutKeys();
      }
      setLayout() {
        this.layout = new (
          se[this.mindMap.opt.layout]
            ? se[this.mindMap.opt.layout]
            : se.logicalStructure
        )(this);
      }
      bindEvent() {
        this.mindMap.on("draw_click", () => {
          this.activeNodeList.length > 0 &&
            this.mindMap.execCommand("CLEAR_ACTIVE_NODE");
        });
      }
      registerCommands() {
        (this.selectAll = this.selectAll.bind(this)),
          this.mindMap.command.add("SELECT_ALL", this.selectAll),
          (this.back = this.back.bind(this)),
          this.mindMap.command.add("BACK", this.back),
          (this.forward = this.forward.bind(this)),
          this.mindMap.command.add("FORWARD", this.forward),
          (this.insertNode = this.insertNode.bind(this)),
          this.mindMap.command.add("INSERT_NODE", this.insertNode),
          (this.insertChildNode = this.insertChildNode.bind(this)),
          this.mindMap.command.add("INSERT_CHILD_NODE", this.insertChildNode),
          (this.upNode = this.upNode.bind(this)),
          this.mindMap.command.add("UP_NODE", this.upNode),
          (this.downNode = this.downNode.bind(this)),
          this.mindMap.command.add("DOWN_NODE", this.downNode),
          (this.insertAfter = this.insertAfter.bind(this)),
          this.mindMap.command.add("INSERT_AFTER", this.insertAfter),
          (this.insertBefore = this.insertBefore.bind(this)),
          this.mindMap.command.add("INSERT_BEFORE", this.insertBefore),
          (this.moveNodeTo = this.moveNodeTo.bind(this)),
          this.mindMap.command.add("MOVE_NODE_TO", this.moveNodeTo),
          (this.removeNode = this.removeNode.bind(this)),
          this.mindMap.command.add("REMOVE_NODE", this.removeNode),
          (this.pasteNode = this.pasteNode.bind(this)),
          this.mindMap.command.add("PASTE_NODE", this.pasteNode),
          (this.cutNode = this.cutNode.bind(this)),
          this.mindMap.command.add("CUT_NODE", this.cutNode),
          (this.setNodeStyle = this.setNodeStyle.bind(this)),
          this.mindMap.command.add("SET_NODE_STYLE", this.setNodeStyle),
          (this.setNodeActive = this.setNodeActive.bind(this)),
          this.mindMap.command.add("SET_NODE_ACTIVE", this.setNodeActive),
          (this.clearAllActive = this.clearAllActive.bind(this)),
          this.mindMap.command.add("CLEAR_ACTIVE_NODE", this.clearAllActive),
          (this.setNodeExpand = this.setNodeExpand.bind(this)),
          this.mindMap.command.add("SET_NODE_EXPAND", this.setNodeExpand),
          (this.expandAllNode = this.expandAllNode.bind(this)),
          this.mindMap.command.add("EXPAND_ALL", this.expandAllNode),
          (this.unexpandAllNode = this.unexpandAllNode.bind(this)),
          this.mindMap.command.add("UNEXPAND_ALL", this.unexpandAllNode),
          (this.expandToLevel = this.expandToLevel.bind(this)),
          this.mindMap.command.add("UNEXPAND_TO_LEVEL", this.expandToLevel),
          (this.setNodeData = this.setNodeData.bind(this)),
          this.mindMap.command.add("SET_NODE_DATA", this.setNodeData),
          (this.setNodeText = this.setNodeText.bind(this)),
          this.mindMap.command.add("SET_NODE_TEXT", this.setNodeText),
          (this.setNodeImage = this.setNodeImage.bind(this)),
          this.mindMap.command.add("SET_NODE_IMAGE", this.setNodeImage),
          (this.setNodeIcon = this.setNodeIcon.bind(this)),
          this.mindMap.command.add("SET_NODE_ICON", this.setNodeIcon),
          (this.setNodeHyperlink = this.setNodeHyperlink.bind(this)),
          this.mindMap.command.add("SET_NODE_HYPERLINK", this.setNodeHyperlink),
          (this.setNodeNote = this.setNodeNote.bind(this)),
          this.mindMap.command.add("SET_NODE_NOTE", this.setNodeNote),
          (this.setNodeTag = this.setNodeTag.bind(this)),
          this.mindMap.command.add("SET_NODE_TAG", this.setNodeTag),
          (this.addGeneralization = this.addGeneralization.bind(this)),
          this.mindMap.command.add(
            "ADD_GENERALIZATION",
            this.addGeneralization
          ),
          (this.removeGeneralization = this.removeGeneralization.bind(this)),
          this.mindMap.command.add(
            "REMOVE_GENERALIZATION",
            this.removeGeneralization
          ),
          (this.setNodeCustomPosition = this.setNodeCustomPosition.bind(this)),
          this.mindMap.command.add(
            "SET_NODE_CUSTOM_POSITION",
            this.setNodeCustomPosition
          ),
          (this.resetLayout = this.resetLayout.bind(this)),
          this.mindMap.command.add("RESET_LAYOUT", this.resetLayout),
          (this.setNodeShape = this.setNodeShape.bind(this)),
          this.mindMap.command.add("SET_NODE_SHAPE", this.setNodeShape);
      }
      registerShortcutKeys() {
        this.mindMap.keyCommand.addShortcut("Tab", () => {
          this.mindMap.execCommand("INSERT_CHILD_NODE");
        }),
          (this.insertNodeWrap = () => {
            this.textEdit.showTextEdit ||
              this.mindMap.execCommand("INSERT_NODE");
          }),
          this.mindMap.keyCommand.addShortcut("Enter", this.insertNodeWrap),
          this.mindMap.keyCommand.addShortcut(
            "Control+s",
            this.addGeneralization
          ),
          (this.toggleActiveExpand = this.toggleActiveExpand.bind(this)),
          this.mindMap.keyCommand.addShortcut("/", this.toggleActiveExpand),
          (this.removeNodeWrap = () => {
            this.mindMap.execCommand("REMOVE_NODE");
          }),
          this.mindMap.keyCommand.addShortcut(
            "Del|Backspace",
            this.removeNodeWrap
          ),
          this.mindMap.on("before_show_text_edit", () => {
            this.startTextEdit();
          }),
          this.mindMap.on("hide_text_edit", () => {
            this.endTextEdit();
          }),
          this.mindMap.keyCommand.addShortcut("Control+a", () => {
            this.mindMap.execCommand("SELECT_ALL");
          }),
          this.mindMap.keyCommand.addShortcut("Control+l", this.resetLayout),
          this.mindMap.keyCommand.addShortcut("Control+Up", this.upNode),
          this.mindMap.keyCommand.addShortcut("Control+Down", this.downNode);
      }
      startTextEdit() {
        this.mindMap.keyCommand.save();
      }
      endTextEdit() {
        this.mindMap.keyCommand.restore();
      }
      render() {
        this.reRender && this.clearActive(),
          this.layout.doLayout((t) => {
            (this.root = t),
              this.root.render(() => {
                this.mindMap.emit("node_tree_render_end");
              });
          }),
          this.mindMap.emit("node_active", null, this.activeNodeList);
      }
      clearActive() {
        this.activeNodeList.forEach((t) => {
          this.setNodeActive(t, !1);
        }),
          (this.activeNodeList = []);
      }
      clearAllActive() {
        this.activeNodeList.length <= 0 ||
          (this.clearActive(), this.mindMap.emit("node_active", null, []));
      }
      addActiveNode(t) {
        let e = this.findActiveNodeIndex(t);
        -1 === e && this.activeNodeList.push(t);
      }
      removeActiveNode(t) {
        let e = this.findActiveNodeIndex(t);
        -1 !== e && this.activeNodeList.splice(e, 1);
      }
      findActiveNodeIndex(t) {
        return this.activeNodeList.findIndex((e) => e === t);
      }
      getNodeIndex(t) {
        return t.parent ? t.parent.children.findIndex((e) => e === t) : 0;
      }
      selectAll() {
        $t(
          this.root,
          null,
          (t) => {
            t.nodeData.data.isActive ||
              ((t.nodeData.data.isActive = !0),
              this.addActiveNode(t),
              setTimeout(() => {
                t.renderNode();
              }, 0));
          },
          null,
          !0,
          0,
          0
        );
      }
      back(t) {
        this.clearAllActive();
        let e = this.mindMap.command.back(t);
        e && ((this.renderTree = e), this.mindMap.reRender());
      }
      forward(t) {
        this.clearAllActive();
        let e = this.mindMap.command.forward(t);
        e && ((this.renderTree = e), this.mindMap.reRender());
      }
      insertNode() {
        if (this.activeNodeList.length <= 0) return;
        let t = this.activeNodeList[0];
        if (t.isRoot) this.insertChildNode();
        else {
          let e = 1 === t.layerIndex ? "Theme" : "Node";
          1 === t.layerIndex && (t.parent.initRender = !0);
          let i = this.getNodeIndex(t);
          t.parent.nodeData.children.splice(i + 1, 0, {
            inserting: !0,
            data: { text: e, expand: !0 },
            children: [],
          }),
            this.mindMap.render();
        }
      }
      insertChildNode() {
        this.activeNodeList.length <= 0 ||
          (this.activeNodeList.forEach((t) => {
            t.nodeData.children || (t.nodeData.children = []);
            let e = t.isRoot ? "Theme" : "Node";
            t.nodeData.children.push({
              inserting: !0,
              data: { text: e, expand: !0 },
              children: [],
            }),
              (t.nodeData.data.expand = !0),
              t.isRoot && (t.initRender = !0);
          }),
          this.mindMap.render());
      }
      upNode() {
        if (this.activeNodeList.length <= 0) return;
        let t = this.activeNodeList[0];
        if (t.isRoot) return;
        let e = t.parent,
          i = e.children,
          a = i.findIndex((e) => e === t);
        if (-1 === a || 0 === a) return;
        let n = a - 1;
        i.splice(a, 1),
          i.splice(n, 0, t),
          e.nodeData.children.splice(a, 1),
          e.nodeData.children.splice(n, 0, t.nodeData),
          this.mindMap.render();
      }
      downNode() {
        if (this.activeNodeList.length <= 0) return;
        let t = this.activeNodeList[0];
        if (t.isRoot) return;
        let e = t.parent,
          i = e.children,
          a = i.findIndex((e) => e === t);
        if (-1 === a || a === i.length - 1) return;
        let n = a + 1;
        i.splice(a, 1),
          i.splice(n, 0, t),
          e.nodeData.children.splice(a, 1),
          e.nodeData.children.splice(n, 0, t.nodeData),
          this.mindMap.render();
      }
      insertBefore(t, e) {
        if (t.isRoot) return;
        let i = t.parent,
          a = i.children,
          n = a.findIndex((e) => e === t);
        if (-1 === n) return;
        let o = a.findIndex((t) => t === e);
        -1 !== o &&
          (n < o && (o -= 1),
          a.splice(n, 1),
          a.splice(o, 0, t),
          i.nodeData.children.splice(n, 1),
          i.nodeData.children.splice(o, 0, t.nodeData),
          this.mindMap.render());
      }
      insertAfter(t, e) {
        if (t.isRoot) return;
        let i = t.parent,
          a = i.children,
          n = a.findIndex((e) => e === t);
        if (-1 === n) return;
        let o = a.findIndex((t) => t === e);
        -1 !== o &&
          (n < o || (o += 1),
          a.splice(n, 1),
          a.splice(o, 0, t),
          i.nodeData.children.splice(n, 1),
          i.nodeData.children.splice(o, 0, t.nodeData),
          this.mindMap.render());
      }
      removeNode() {
        if (!(this.activeNodeList.length <= 0)) {
          for (let t = 0; t < this.activeNodeList.length; t++) {
            let e = this.activeNodeList[t];
            if (e.isGeneralization)
              this.setNodeData(e.generalizationBelongNode, {
                generalization: null,
              }),
                e.generalizationBelongNode.update(),
                this.removeActiveNode(e),
                t--;
            else {
              if (e.isRoot) {
                e.children.forEach((t) => {
                  t.remove();
                }),
                  (e.children = []),
                  (e.nodeData.children = []);
                break;
              }
              this.removeActiveNode(e), this.removeOneNode(e), t--;
            }
          }
          this.mindMap.emit("node_active", null, []), this.mindMap.render();
        }
      }
      removeOneNode(t) {
        let e = this.getNodeIndex(t);
        t.remove(),
          t.parent.children.splice(e, 1),
          t.parent.nodeData.children.splice(e, 1);
      }
      copyNode() {
        if (!(this.activeNodeList.length <= 0))
          return Bt({}, this.activeNodeList[0], !0);
      }
      cutNode(t) {
        if (this.activeNodeList.length <= 0) return;
        let e = this.activeNodeList[0];
        if (e.isRoot) return null;
        let i = Bt({}, e, !0);
        this.removeActiveNode(e),
          this.removeOneNode(e),
          this.mindMap.emit("node_active", null, this.activeNodeList),
          this.mindMap.render(),
          t && "function" === typeof t && t(i);
      }
      moveNodeTo(t, e) {
        if (t.isRoot) return;
        let i = Bt({}, t);
        this.removeActiveNode(t),
          this.removeOneNode(t),
          this.mindMap.emit("node_active", null, this.activeNodeList),
          e.nodeData.children.push(i),
          this.mindMap.render();
      }
      pasteNode(t) {
        this.activeNodeList.length <= 0 ||
          (this.activeNodeList.forEach((e) => {
            e.nodeData.children.push(Lt(t));
          }),
          this.mindMap.render());
      }
      setNodeStyle(t, e, i, a) {
        let n = {};
        (n = a
          ? { activeStyle: { ...(t.nodeData.data.activeStyle || {}), [e]: i } }
          : { [e]: i }),
          this.setNodeDataRender(t, n),
          oe.includes(e) && (t.parent || t).renderLine(!0);
      }
      setNodeActive(t, e) {
        this.setNodeData(t, { isActive: e }), t.renderNode();
      }
      setNodeExpand(t, e) {
        this.setNodeData(t, { expand: e }),
          e
            ? (t.children.forEach((t) => {
                t.render();
              }),
              t.renderLine(),
              t.updateExpandBtnNode())
            : (t.children.forEach((t) => {
                t.remove();
              }),
              t.removeLine(),
              t.updateExpandBtnNode()),
          this.mindMap.render();
      }
      expandAllNode() {
        $t(
          this.renderTree,
          null,
          (t) => {
            t.data.expand || (t.data.expand = !0);
          },
          null,
          !0,
          0,
          0
        ),
          this.mindMap.reRender();
      }
      unexpandAllNode() {
        $t(
          this.renderTree,
          null,
          (t, e, i) => {
            (t._node = null), i || (t.data.expand = !1);
          },
          null,
          !0,
          0,
          0
        ),
          this.mindMap.reRender();
      }
      expandToLevel(t) {
        $t(
          this.renderTree,
          null,
          (e, i, a, n) => {
            (e._node = null), (e.data.expand = n < t);
          },
          null,
          !0,
          0,
          0
        ),
          this.mindMap.reRender();
      }
      toggleActiveExpand() {
        this.activeNodeList.forEach((t) => {
          t.nodeData.children.length <= 0 || this.toggleNodeExpand(t);
        });
      }
      toggleNodeExpand(t) {
        this.mindMap.execCommand("SET_NODE_EXPAND", t, !t.nodeData.data.expand);
      }
      setNodeText(t, e) {
        this.setNodeDataRender(t, { text: e });
      }
      setNodeImage(t, { url: e, title: i, width: a, height: n }) {
        this.setNodeDataRender(t, {
          image: e,
          imageTitle: i || "",
          imageSize: { width: a, height: n },
        });
      }
      setNodeIcon(t, e) {
        this.setNodeDataRender(t, { icon: e });
      }
      setNodeHyperlink(t, e, i = "") {
        this.setNodeDataRender(t, { hyperlink: e, hyperlinkTitle: i });
      }
      setNodeNote(t, e) {
        this.setNodeDataRender(t, { note: e });
      }
      setNodeTag(t, e) {
        this.setNodeDataRender(t, { tag: e });
      }
      addGeneralization(t) {
        this.activeNodeList.length <= 0 ||
          (this.activeNodeList.forEach((e) => {
            e.nodeData.data.generalization ||
              e.isRoot ||
              (this.setNodeData(e, { generalization: t || { text: "概要" } }),
              e.update());
          }),
          this.mindMap.render());
      }
      removeGeneralization() {
        this.activeNodeList.length <= 0 ||
          (this.activeNodeList.forEach((t) => {
            t.nodeData.data.generalization &&
              (this.setNodeData(t, { generalization: null }), t.update());
          }),
          this.mindMap.render());
      }
      setNodeCustomPosition(t, e, i) {
        let a = [t] || !1;
        a.forEach((t) => {
          this.setNodeData(t, { customLeft: e, customTop: i });
        });
      }
      resetLayout() {
        $t(
          this.root,
          null,
          (t) => {
            (t.customLeft = void 0),
              (t.customTop = void 0),
              this.setNodeData(t, { customLeft: void 0, customTop: void 0 }),
              this.mindMap.render();
          },
          null,
          !0,
          0,
          0
        );
      }
      setNodeShape(t, e) {
        if (!e || !St.includes(e)) return;
        let i = [t] || !1;
        i.forEach((t) => {
          this.setNodeStyle(t, "shape", e);
        });
      }
      setNodeData(t, e) {
        Object.keys(e).forEach((i) => {
          t.nodeData.data[i] = e[i];
        });
      }
      setNodeDataRender(t, e) {
        this.setNodeData(t, e);
        let i = t.getSize();
        t.renderNode(),
          i &&
            (t.isGeneralization &&
              t.generalizationBelongNode.updateGeneralization(),
            this.mindMap.render());
      }
    }
    var re = le,
      de = yt()(ae, {
        lineColor: "#333",
        backgroundColor: "#d1f6ec",
        generalizationLineWidth: 1,
        generalizationLineColor: "#333",
        root: { fillColor: "#1fb27d" },
        second: {
          fillColor: "#fff",
          color: "#565656",
          borderColor: "transparent",
          borderWidth: 0,
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#333",
          color: "#333",
          active: {
            borderColor: "rgb(57, 80, 96)",
            borderWidth: 3,
            borderDasharray: "none",
          },
        },
      }),
      he = yt()(ae, {
        lineColor: "rgb(115, 161, 191)",
        backgroundColor: "rgb(251, 251, 251)",
        generalizationLineWidth: 1,
        generalizationLineColor: "#333",
        root: {
          fillColor: "rgb(115, 161, 191)",
          active: { borderColor: "rgb(57, 80, 96)" },
        },
        second: {
          fillColor: "rgb(238, 243, 246)",
          color: "#333",
          borderColor: "rgb(115, 161, 191)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(57, 80, 96)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(57, 80, 96)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#333",
          color: "#333",
          active: { borderColor: "rgb(57, 80, 96)" },
        },
      }),
      ce = yt()(ae, {
        lineColor: "rgb(191, 115, 148)",
        backgroundColor: "rgb(251, 251, 251)",
        generalizationLineWidth: 1,
        generalizationLineColor: "#333",
        root: {
          fillColor: "rgb(191, 115, 148)",
          active: { borderColor: "rgb(96, 57, 74)" },
        },
        second: {
          fillColor: "rgb(246, 238, 242)",
          color: "#333",
          borderColor: "rgb(191, 115, 148)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(96, 57, 74)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(96, 57, 74)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#333",
          color: "#333",
          active: { borderColor: "rgb(96, 57, 74)" },
        },
      }),
      pe = yt()(ae, {
        lineColor: "rgb(123, 115, 191)",
        backgroundColor: "rgb(251, 251, 251)",
        generalizationLineWidth: 1,
        generalizationLineColor: "#333",
        root: {
          fillColor: "rgb(123, 115, 191)",
          active: { borderColor: "rgb(61, 57, 96)" },
        },
        second: {
          fillColor: "rgb(239, 238, 246)",
          color: "#333",
          borderColor: "rgb(123, 115, 191)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(61, 57, 96)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(61, 57, 96)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#333",
          color: "#333",
          active: { borderColor: "rgb(61, 57, 96)" },
        },
      }),
      me = yt()(ae, {
        lineColor: "rgb(191, 115, 115)",
        backgroundColor: "rgb(251, 251, 251)",
        generalizationLineWidth: 1,
        generalizationLineColor: "#333",
        root: {
          fillColor: "rgb(191, 115, 115)",
          active: { borderColor: "rgb(96, 57, 57)" },
        },
        second: {
          fillColor: "rgb(246, 238, 238)",
          color: "#333",
          borderColor: "rgb(191, 115, 115)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(96, 57, 57)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(96, 57, 57)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#333",
          color: "#333",
          active: { borderColor: "rgb(96, 57, 57)" },
        },
      }),
      ue = yt()(ae, {
        lineColor: "rgb(191, 147, 115)",
        backgroundColor: "rgb(251, 251, 251)",
        generalizationLineWidth: 1,
        generalizationLineColor: "#333",
        root: {
          fillColor: "rgb(191, 147, 115)",
          active: { borderColor: "rgb(96, 73, 57)" },
        },
        second: {
          fillColor: "rgb(246, 242, 238)",
          color: "#333",
          borderColor: "rgb(191, 147, 115)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(96, 73, 57)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(96, 73, 57)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#333",
          color: "#333",
          active: { borderColor: "rgb(96, 73, 57)" },
        },
      }),
      ge = yt()(ae, {
        lineColor: "#fff",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "#fff",
        backgroundColor: "rgb(58, 65, 68)",
        backgroundImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=",
        backgroundRepeat: "repeat",
        root: {
          fillColor: "rgb(233, 223, 152)",
          color: "#333",
          fontSize: 24,
          borderRadius: 21,
          active: { fillColor: "rgb(254, 219, 0)", borderColor: "transparent" },
        },
        second: {
          fillColor: "rgb(164, 197, 192)",
          borderColor: "transparent",
          color: "#333",
          fontSize: 16,
          borderRadius: 10,
          active: { fillColor: "rgb(254, 219, 0)", borderColor: "transparent" },
        },
        node: {
          fontSize: 12,
          color: "#fff",
          fontWeight: "bold",
          active: { fillColor: "rgb(254, 219, 0)", borderColor: "transparent" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "transparent",
          color: "#333",
          active: { fillColor: "rgb(254, 219, 0)", borderColor: "transparent" },
        },
      }),
      fe = yt()(ae, {
        lineColor: "rgb(51, 51, 51)",
        lineWidth: 2,
        generalizationLineWidth: 3,
        generalizationLineColor: "rgb(51, 51, 51)",
        backgroundColor: "#fff",
        root: {
          fillColor: "rgb(18, 187, 55)",
          color: "#fff",
          fontSize: 24,
          borderRadius: 10,
          active: { borderColor: "rgb(51, 51, 51)" },
        },
        second: {
          fillColor: "rgb(241, 242, 241)",
          borderColor: "transparent",
          color: "#1a1a1a",
          fontSize: 18,
          borderRadius: 10,
          active: { borderColor: "rgb(51, 51, 51)" },
        },
        node: {
          fontSize: 14,
          color: "#1a1a1a",
          active: { borderColor: "rgb(51, 51, 51)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "rgb(51, 51, 51)",
          borderWidth: 2,
          color: "#1a1a1a",
          active: { borderColor: "rgb(18, 187, 55)" },
        },
      }),
      ve = yt()(ae, {
        lineColor: "rgb(94, 202, 110)",
        lineWidth: 2,
        generalizationLineWidth: 3,
        generalizationLineColor: "#1a1a1a",
        backgroundColor: "rgb(241, 241, 241)",
        root: {
          fillColor: "rgb(255, 245, 214)",
          color: "#1a1a1a",
          fontSize: 24,
          borderRadius: 10,
          borderColor: "rgb(249, 199, 84)",
          borderWidth: 1,
          active: { borderColor: "rgb(94, 202, 110)" },
        },
        second: {
          fillColor: "rgb(255, 245, 214)",
          borderColor: "rgb(249, 199, 84)",
          borderWidth: 1,
          color: "#1a1a1a",
          fontSize: 18,
          borderRadius: 10,
          active: { borderColor: "rgb(94, 202, 110)" },
        },
        node: {
          fontSize: 14,
          color: "#1a1a1a",
          active: { borderColor: "rgb(94, 202, 110)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "#1a1a1a",
          color: "#1a1a1a",
          borderWidth: 2,
          active: { borderColor: "rgb(94, 202, 110)" },
        },
      }),
      be = yt()(ae, {
        lineColor: "rgb(30, 53, 86)",
        lineWidth: 2,
        generalizationLineWidth: 2,
        generalizationLineColor: "rgb(56, 123, 233)",
        backgroundColor: "rgb(241, 241, 241)",
        root: {
          fillColor: "rgb(30, 53, 86)",
          color: "#fff",
          fontSize: 24,
          borderRadius: 10,
          borderColor: "rgb(189, 197, 201)",
          borderWidth: 2,
          active: { borderColor: "rgb(169, 218, 218)" },
        },
        second: {
          fillColor: "rgb(169, 218, 218)",
          borderColor: "rgb(30, 53, 86)",
          borderWidth: 2,
          color: "#fff",
          fontSize: 18,
          borderRadius: 10,
          active: { borderColor: "rgb(56, 123, 233)" },
        },
        node: {
          fontSize: 14,
          color: "rgb(30, 53, 86)",
          borderColor: "rgb(30, 53, 86)",
          borderWidth: 1,
          marginY: 20,
          active: { borderColor: "rgb(169, 218, 218)" },
        },
        generalization: {
          fillColor: "rgb(56, 123, 233)",
          borderColor: "rgb(56, 123, 233)",
          color: "#fff",
          borderWidth: 0,
          active: { borderColor: "rgb(169, 218, 218)" },
        },
      }),
      Ce = yt()(ae, {
        lineColor: "rgb(17, 68, 23)",
        lineWidth: 2,
        generalizationLineWidth: 2,
        generalizationLineColor: "#fff",
        backgroundColor: "rgb(15, 16, 17)",
        root: {
          fillColor: "rgb(28, 178, 43)",
          color: "#fff",
          fontSize: 24,
          borderRadius: 10,
          active: { borderColor: "rgb(17, 68, 23)" },
        },
        second: {
          fillColor: "rgb(55, 56, 58)",
          color: "rgb(147,148,149)",
          fontSize: 18,
          borderRadius: 10,
          borderWidth: 0,
          active: { borderColor: "rgb(17, 68, 23)" },
        },
        node: {
          fontSize: 14,
          color: "rgb(147, 148, 149)",
          active: { borderColor: "rgb(17, 68, 23)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "transparent",
          color: "#333",
          active: { borderColor: "rgb(17, 68, 23)" },
        },
      }),
      xe = yt()(ae, {
        lineColor: "rgb(123, 199, 120)",
        backgroundColor: "rgb(236, 245, 231)",
        generalizationLineWidth: 2,
        generalizationLineColor: "rgb(123, 199, 120)",
        root: {
          fillColor: "rgb(253, 244, 217)",
          color: "#222",
          active: { borderColor: "rgb(94, 199, 248)" },
        },
        second: {
          fillColor: "rgb(253, 244, 217)",
          color: "#222",
          borderColor: "rgb(242, 200, 104)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(94, 199, 248)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(94, 199, 248)" },
        },
        generalization: {
          fillColor: "rgb(123, 199, 120)",
          borderColor: "transparent",
          borderWidth: 2,
          color: "#fff",
          active: { borderColor: "rgb(94, 199, 248)" },
        },
      }),
      we = yt()(ae, {
        lineColor: "rgb(51, 51, 51)",
        lineWidth: 2,
        generalizationLineWidth: 2,
        generalizationLineColor: "rgb(51, 51, 51)",
        backgroundColor: "rgb(239, 248, 250)",
        root: {
          fillColor: "rgb(255, 255, 255)",
          color: "#222",
          active: { borderColor: "rgb(94, 199, 248)" },
        },
        second: {
          fillColor: "rgb(255, 255, 255)",
          color: "#222",
          borderColor: "rgb(255, 255, 255)",
          borderWidth: 1,
          fontSize: 14,
          active: { borderColor: "rgb(94, 199, 248)" },
        },
        node: {
          fontSize: 12,
          color: "#333",
          active: { borderColor: "rgb(94, 199, 248)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "rgb(51, 51, 51)",
          color: "#333",
          active: { borderColor: "rgb(94, 199, 248)" },
        },
      }),
      Me = yt()(ae, {
        lineColor: "rgb(51, 51, 51)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "#222",
        backgroundColor: "rgb(248, 215, 49)",
        root: {
          fillColor: "rgb(55, 165, 255)",
          borderColor: "rgb(51, 51, 51)",
          borderWidth: 3,
          active: { borderColor: "rgb(255, 160, 36)" },
        },
        second: {
          fillColor: "rgb(255, 160, 36)",
          color: "#222",
          borderColor: "rgb(51, 51, 51)",
          borderWidth: 3,
          fontSize: 14,
          active: { borderColor: "rgb(55, 165, 255)" },
        },
        node: {
          fontSize: 12,
          color: "#222",
          active: { borderColor: "rgb(55, 165, 255)" },
        },
        generalization: {
          borderColor: "#222",
          borderWidth: 3,
          color: "#222",
          active: { borderColor: "rgb(55, 165, 255)" },
        },
      }),
      ye = yt()(ae, {
        lineColor: "rgb(166, 101, 106)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "#fff",
        backgroundColor: "rgb(255, 208, 211)",
        root: {
          fillColor: "rgb(139, 109, 225)",
          borderColor: "",
          borderWidth: 0,
          active: { borderColor: "rgb(243, 104, 138)", borderWidth: 2 },
        },
        second: {
          fillColor: "rgb(243, 104, 138)",
          color: "#fff",
          borderColor: "",
          borderWidth: 0,
          fontSize: 14,
          active: { borderColor: "rgb(139, 109, 225)", borderWidth: 2 },
        },
        node: {
          fontSize: 12,
          color: "#222",
          active: { borderColor: "rgb(139, 109, 225)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "transparent",
          color: "#222",
          active: { borderColor: "rgb(139, 109, 225)", borderWidth: 2 },
        },
      }),
      _e = yt()(ae, {
        lineColor: "rgb(104, 204, 202)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "rgb(90, 206, 241)",
        backgroundColor: "rgb(239, 255, 255)",
        root: {
          fillColor: "rgb(0, 192, 184)",
          borderColor: "",
          borderWidth: 0,
          active: { borderColor: "rgb(255, 160, 36)", borderWidth: 3 },
        },
        second: {
          fillColor: "#fff",
          color: "#222",
          borderColor: "rgb(184, 235, 233)",
          borderWidth: 2,
          fontSize: 14,
          active: { borderColor: "rgb(0, 192, 184)" },
        },
        node: {
          fontSize: 12,
          color: "#222",
          active: { borderColor: "rgb(0, 192, 184)" },
        },
        generalization: {
          fillColor: "rgb(90, 206, 241)",
          borderColor: "transparent",
          color: "#fff",
          active: { borderColor: "rgb(0, 192, 184)" },
        },
      }),
      Ne = yt()(ae, {
        lineColor: "rgb(51, 56, 62)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "rgb(127, 93, 64)",
        backgroundColor: "#fff",
        root: {
          fillColor: "rgb(51, 56, 62)",
          color: "rgb(247, 208, 160)",
          borderColor: "",
          borderWidth: 0,
          active: { borderColor: "rgb(247, 208, 160)", borderWidth: 3 },
        },
        second: {
          fillColor: "rgb(239, 209, 176)",
          color: "rgb(81, 58, 42)",
          borderColor: "",
          borderWidth: 0,
          fontSize: 14,
          active: { borderColor: "rgb(51, 56, 62)", borderWidth: 2 },
        },
        node: {
          fontSize: 12,
          color: "#222",
          active: { borderColor: "rgb(0, 192, 184)" },
        },
        generalization: {
          fillColor: "rgb(127, 93, 64)",
          borderColor: "transparent",
          color: "rgb(255, 214, 175)",
          active: { borderColor: "rgb(51, 56, 62)" },
        },
      }),
      De = yt()(ae, {
        lineColor: "rgb(254, 146, 0)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "rgb(255, 222, 69)",
        backgroundColor: "rgb(255, 246, 243)",
        root: {
          fillColor: "rgb(255, 112, 52)",
          color: "#fff",
          borderColor: "",
          borderWidth: 0,
          active: { borderColor: "rgb(51, 51, 51)", borderWidth: 3 },
        },
        second: {
          fillColor: "#fff",
          color: "rgb(51, 51, 51)",
          borderColor: "",
          borderWidth: 0,
          fontSize: 14,
          active: { borderColor: "rgb(255, 112, 52)", borderWidth: 2 },
        },
        node: {
          fontSize: 12,
          color: "#222",
          active: { borderColor: "rgb(255, 112, 52)" },
        },
        generalization: {
          fillColor: "rgb(255, 222, 69)",
          borderColor: "transparent",
          color: "rgb(51, 51, 51)",
          active: { borderColor: "rgb(255, 112, 52)" },
        },
      }),
      ze = yt()(ae, {
        lineColor: "rgb(40, 193, 84)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "rgb(251, 158, 0)",
        backgroundColor: "rgb(238, 255, 243)",
        root: {
          fillColor: "rgb(25, 193, 73)",
          color: "#fff",
          borderColor: "",
          borderWidth: 0,
          active: { borderColor: "#222", borderWidth: 3 },
        },
        second: {
          fillColor: "#fff",
          color: "rgb(69, 149, 96)",
          borderColor: "",
          borderWidth: 0,
          fontSize: 14,
          active: { borderColor: "rgb(25, 193, 73)", borderWidth: 2 },
        },
        node: {
          fontSize: 12,
          color: "#222",
          active: { borderColor: "rgb(25, 193, 73)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "rgb(251, 158, 0)",
          borderWidth: 2,
          color: "rgb(51, 51, 51)",
          active: { borderColor: "rgb(25, 193, 73)" },
        },
      }),
      Se = yt()(ae, {
        lineColor: "rgb(75, 81, 78)",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "rgb(255, 119, 34)",
        backgroundColor: "rgb(27, 31, 34)",
        root: {
          fillColor: "rgb(36, 179, 96)",
          color: "#fff",
          borderColor: "",
          borderWidth: 0,
          active: { borderColor: "rgb(254, 199, 13)", borderWidth: 3 },
        },
        second: {
          fillColor: "rgb(254, 199, 13)",
          color: "rgb(0, 0, 0)",
          borderColor: "",
          borderWidth: 0,
          fontSize: 14,
          active: { borderColor: "rgb(36, 179, 96)", borderWidth: 2 },
        },
        node: {
          fontSize: 12,
          color: "rgb(204, 204, 204)",
          active: { borderColor: "rgb(254, 199, 13)" },
        },
        generalization: {
          fillColor: "transparent",
          borderColor: "rgb(255, 119, 34)",
          borderWidth: 2,
          color: "rgb(204, 204, 204)",
          active: { borderColor: "rgb(254, 199, 13)" },
        },
      }),
      $e = yt()(ae, {
        lineColor: "#fff",
        lineWidth: 3,
        generalizationLineWidth: 3,
        generalizationLineColor: "#fff",
        backgroundColor: "rgb(80, 156, 170)",
        root: {
          fillColor: "#fff",
          borderColor: "",
          borderWidth: 0,
          color: "rgb(65, 89, 158)",
          active: { borderColor: "rgb(251, 227, 188)", borderWidth: 3 },
        },
        second: {
          fillColor: "rgb(251, 227, 188)",
          color: "rgb(65, 89, 158)",
          borderColor: "",
          borderWidth: 0,
          fontSize: 14,
          active: { borderColor: "#fff", borderWidth: 2 },
        },
        node: {
          fontSize: 12,
          color: "rgb(65, 89, 158)",
          active: { borderColor: "rgb(251, 227, 188)" },
        },
        generalization: {
          fillColor: "#fff",
          borderColor: "transparent",
          color: "rgb(65, 89, 158)",
          active: { borderColor: "rgb(251, 227, 188)" },
        },
      }),
      Fe = {
        default: ae,
        freshGreen: de,
        blueSky: he,
        brainImpairedPink: ce,
        romanticPurple: pe,
        freshRed: me,
        earthYellow: ue,
        classic: ge,
        classic2: fe,
        classic3: ve,
        classic4: be,
        dark: Ce,
        classicGreen: xe,
        classicBlue: we,
        minions: Me,
        pinkGrape: ye,
        mint: _e,
        gold: Ne,
        vitalityOrange: De,
        greenLeaf: ze,
        dark2: Se,
        skyGreen: $e,
      };
    const ke = {
      Backspace: 8,
      Tab: 9,
      Enter: 13,
      Shift: 16,
      Control: 17,
      Alt: 18,
      CapsLock: 20,
      Esc: 27,
      Spacebar: 32,
      PageUp: 33,
      PageDown: 34,
      End: 35,
      Home: 36,
      Insert: 45,
      Left: 37,
      Up: 38,
      Right: 39,
      Down: 40,
      Del: 46,
      NumLock: 144,
      Cmd: 91,
      CmdFF: 224,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "`": 192,
      "=": 187,
      "-": 189,
      "/": 191,
      ".": 190,
    };
    for (let wo = 0; wo <= 9; wo++) ke[wo] = wo + 48;
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((t, e) => {
      ke[t] = e + 65;
    });
    const Ee = ke;
    class Le {
      constructor(t) {
        (this.opt = t),
          (this.mindMap = t.mindMap),
          (this.shortcutMap = {}),
          (this.shortcutMapCache = {}),
          (this.isPause = !1),
          this.bindEvent();
      }
      pause() {
        this.isPause = !0;
      }
      recovery() {
        this.isPause = !1;
      }
      save() {
        (this.shortcutMapCache = this.shortcutMap), (this.shortcutMap = {});
      }
      restore() {
        (this.shortcutMap = this.shortcutMapCache),
          (this.shortcutMapCache = {});
      }
      bindEvent() {
        window.addEventListener("keydown", (t) => {
          this.isPause ||
            Object.keys(this.shortcutMap).forEach((e) => {
              this.checkKey(t, e) &&
                (t.stopPropagation(),
                t.preventDefault(),
                this.shortcutMap[e].forEach((t) => {
                  t();
                }));
            });
        });
      }
      checkKey(t, e) {
        let i = this.getOriginEventCodeArr(t),
          a = this.getKeyCodeArr(e);
        if (i.length !== a.length) return !1;
        for (let n = 0; n < i.length; n++) {
          let t = a.findIndex((t) => t === i[n]);
          if (-1 === t) return !1;
          a.splice(t, 1);
        }
        return !0;
      }
      getOriginEventCodeArr(t) {
        let e = [];
        return (
          (t.ctrlKey || t.metaKey) && e.push(Ee["Control"]),
          t.altKey && e.push(Ee["Alt"]),
          t.shiftKey && e.push(Ee["Shift"]),
          e.includes(t.keyCode) || e.push(t.keyCode),
          e
        );
      }
      getKeyCodeArr(t) {
        let e = t.split(/\s*\+\s*/),
          i = [];
        return (
          e.forEach((t) => {
            i.push(Ee[t]);
          }),
          i
        );
      }
      addShortcut(t, e) {
        t.split(/\s*\|\s*/).forEach((t) => {
          this.shortcutMap[t]
            ? this.shortcutMap[t].push(e)
            : (this.shortcutMap[t] = [e]);
        });
      }
      removeShortcut(t, e) {
        t.split(/\s*\|\s*/).forEach((t) => {
          if (this.shortcutMap[t])
            if (e) {
              let i = this.shortcutMap[t].findIndex((t) => t === e);
              -1 !== i && this.shortcutMap[t].splice(i, 1);
            } else (this.shortcutMap[t] = []), delete this.shortcutMap[t];
        });
      }
      getShortcutFn(t) {
        let e = [];
        return (
          t.split(/\s*\|\s*/).forEach((t) => {
            e = this.shortcutMap[t] || [];
          }),
          e
        );
      }
    }
    class Te {
      constructor(t = {}) {
        (this.opt = t),
          (this.mindMap = t.mindMap),
          (this.commands = {}),
          (this.history = []),
          (this.activeHistoryIndex = 0),
          this.registerShortcutKeys();
      }
      clearHistory() {
        (this.history = []),
          (this.activeHistoryIndex = 0),
          this.mindMap.emit("back_forward", 0, 0);
      }
      registerShortcutKeys() {
        this.mindMap.keyCommand.addShortcut("Control+z", () => {
          this.mindMap.execCommand("BACK");
        }),
          this.mindMap.keyCommand.addShortcut("Control+y", () => {
            this.mindMap.execCommand("FORWARD");
          });
      }
      exec(t, ...e) {
        if (this.commands[t]) {
          if (
            (this.commands[t].forEach((t) => {
              t(...e);
            }),
            "BACK" === t || "FORWARD" === t)
          )
            return;
          this.addHistory();
        }
      }
      add(t, e) {
        this.commands[t] ? this.commands[t].push(e) : (this.commands[t] = [e]);
      }
      remove(t, e) {
        if (this.commands[t])
          if (e) {
            let i = this.commands[t].find((t) => t === e);
            -1 !== i && this.commands[t].splice(i, 1);
          } else (this.commands[t] = []), delete this.commands[t];
      }
      addHistory() {
        let t = this.getCopyData();
        this.history.push(Lt(t)),
          (this.activeHistoryIndex = this.history.length - 1),
          this.mindMap.emit("data_change", t),
          this.mindMap.emit(
            "back_forward",
            this.activeHistoryIndex,
            this.history.length
          );
      }
      back(t = 1) {
        if (this.activeHistoryIndex - t >= 0)
          return (
            (this.activeHistoryIndex -= t),
            this.mindMap.emit(
              "back_forward",
              this.activeHistoryIndex,
              this.history.length
            ),
            Lt(this.history[this.activeHistoryIndex])
          );
      }
      forward(t = 1) {
        let e = this.history.length;
        if (this.activeHistoryIndex + t <= e - 1)
          return (
            (this.activeHistoryIndex += t),
            this.mindMap.emit("back_forward", this.activeHistoryIndex),
            Lt(this.history[this.activeHistoryIndex])
          );
      }
      getCopyData() {
        return Tt({}, this.mindMap.renderer.renderTree);
      }
    }
    var Be = Te;
    const Ae = function (t, e) {
      let i = !1,
        a = null,
        n = () => {
          (i = !1), e ? t.call(e) : t();
        };
      if ("undefined" !== typeof MutationObserver) {
        let t = 1,
          e = new MutationObserver(n),
          i = document.createTextNode(t);
        e.observe(i, { characterData: !0 }),
          (a = function () {
            (t = (t + 1) % 2), (i.data = t);
          });
      } else a = setTimeout;
      return function () {
        i || ((i = !0), a(n, 0));
      };
    };
    class Ie {
      constructor() {
        (this.has = {}),
          (this.queue = []),
          (this.nextTick = Ae(this.flush, this));
      }
      push(t, e) {
        this.has[t] ||
          ((this.has[t] = !0),
          this.queue.push({ name: t, fn: e }),
          this.nextTick());
      }
      flush() {
        let t = this.queue.slice(0);
        (this.queue = []),
          t.forEach(({ name: t, fn: e }) => {
            (this.has[t] = !1), e();
          });
      }
    }
    var Re = Ie,
      Oe = i("77ee");
    const We = window.URL || window.webkitURL || window;
    class He {
      constructor(t) {
        (this.mindMap = t.mindMap),
          (this.exportPadding = this.mindMap.opt.exportPadding);
      }
      async export(t, e = !0, i = "思维导图", ...a) {
        if (this[t]) {
          let n = await this[t](i, ...a);
          return e && "pdf" !== t && It(n, i + "." + t), n;
        }
        return null;
      }
      async getSvgData() {
        let { svg: t, svgHTML: e } = this.mindMap.miniMap.getMiniMap(),
          i = t.find("image"),
          a = i.map(async (t) => {
            let e = t.attr("href") || t.attr("xlink:href"),
              i = await At(e);
            t.attr("href", i);
          });
        return await Promise.all(a), { node: t, str: e };
      }
      svgToPng(t) {
        return new Promise((e, i) => {
          const a = new Image();
          a.setAttribute("crossOrigin", "anonymous"),
            (a.onload = async () => {
              try {
                let t = document.createElement("canvas");
                (t.width = a.width + 2 * this.exportPadding),
                  (t.height = a.height + 2 * this.exportPadding);
                let i = t.getContext("2d");
                await this.drawBackgroundToCanvas(i, t.width, t.height),
                  i.drawImage(
                    a,
                    0,
                    0,
                    a.width,
                    a.height,
                    this.exportPadding,
                    this.exportPadding,
                    a.width,
                    a.height
                  ),
                  e(t.toDataURL());
              } catch (t) {
                i(t);
              }
            }),
            (a.onerror = (t) => {
              i(t);
            }),
            (a.src = t);
        });
      }
      drawBackgroundToCanvas(t, e, i) {
        return new Promise((a, n) => {
          let {
            backgroundColor: o = "#fff",
            backgroundImage: s,
            backgroundRepeat: l = "repeat",
          } = this.mindMap.themeConfig;
          if (
            (t.save(),
            t.rect(0, 0, e, i),
            (t.fillStyle = o),
            t.fill(),
            t.restore(),
            s && "none" !== s)
          ) {
            t.save();
            let o = new Image();
            (o.src = s),
              (o.onload = () => {
                let n = t.createPattern(o, l);
                t.rect(0, 0, e, i),
                  (t.fillStyle = n),
                  t.fill(),
                  t.restore(),
                  a();
              }),
              (o.onerror = (t) => {
                n(t);
              });
          } else a();
        });
      }
      async png() {
        let { str: t } = await this.getSvgData(),
          e = new Blob([t], { type: "image/svg+xml" }),
          i = We.createObjectURL(e),
          a = await this.svgToPng(i);
        return We.revokeObjectURL(i), a;
      }
      async pdf(t) {
        let e = await this.png(),
          i = new Oe["a"]("", "pt", "a4"),
          a = 595,
          n = 841,
          o = a / n,
          s = new Image();
        (s.onload = () => {
          let l,
            r,
            d = s.width,
            h = s.height,
            c = d / h;
          d <= a && h <= n
            ? ((l = d), (r = h))
            : o > c
            ? ((l = c * n), (r = n))
            : ((l = a), (r = a / c)),
            i.addImage(e, "PNG", (a - l) / 2, (n - r) / 2, l, r),
            i.save(t);
        }),
          (s.src = e);
      }
      drawBackgroundToSvg(t) {
        return new Promise(async (e) => {
          let {
            backgroundColor: i = "#fff",
            backgroundImage: a,
            backgroundRepeat: n = "repeat",
          } = this.mindMap.themeConfig;
          if ((t.css("background-color", i), a && "none" !== a)) {
            let i = await At(a);
            t.css("background-image", `url(${i})`),
              t.css("background-repeat", n),
              e();
          } else e();
        });
      }
      async svg(t) {
        let { node: e } = await this.getSvgData();
        e.first().before(Object(Wt["f"])(`<title>${t}</title>`)),
          await this.drawBackgroundToSvg(e);
        let i = e.svg(),
          a = new Blob([i], { type: "image/svg+xml" });
        return We.createObjectURL(a);
      }
      json(t, e = !0) {
        let i = this.mindMap.getData(e),
          a = JSON.stringify(i),
          n = new Blob([a]);
        return We.createObjectURL(n);
      }
      smm(t, e) {
        return this.json(t, e);
      }
    }
    var Pe = He;
    class Ye {
      constructor({ mindMap: t }) {
        (this.mindMap = t),
          (this.rect = null),
          (this.isMousedown = !1),
          (this.mouseDownX = 0),
          (this.mouseDownY = 0),
          (this.mouseMoveX = 0),
          (this.mouseMoveY = 0),
          this.bindEvent();
      }
      bindEvent() {
        (this.checkInNodes = Rt(this.checkInNodes, 500, this)),
          this.mindMap.on("mousedown", (t) => {
            if (this.mindMap.opt.readonly) return;
            if (!t.ctrlKey && 3 !== t.which) return;
            this.isMousedown = !0;
            let { x: e, y: i } = this.mindMap.toPos(t.clientX, t.clientY);
            (this.mouseDownX = e), (this.mouseDownY = i), this.createRect(e, i);
          }),
          this.mindMap.on("mousemove", (t) => {
            if (this.mindMap.opt.readonly) return;
            if (!this.isMousedown) return;
            let { x: e, y: i } = this.mindMap.toPos(t.clientX, t.clientY);
            (this.mouseMoveX = e),
              (this.mouseMoveY = i),
              (Math.abs(e - this.mouseDownX) <= 10 &&
                Math.abs(i - this.mouseDownY) <= 10) ||
                (clearTimeout(this.autoMoveTimer), this.onMove(e, i));
          }),
          this.mindMap.on("mouseup", () => {
            this.mindMap.opt.readonly ||
              (this.isMousedown &&
                (this.mindMap.emit(
                  "node_active",
                  null,
                  this.mindMap.renderer.activeNodeList
                ),
                clearTimeout(this.autoMoveTimer),
                (this.isMousedown = !1),
                this.rect && this.rect.remove(),
                (this.rect = null)));
          });
      }
      onMove(t, e) {
        this.rect.plot([
          [this.mouseDownX, this.mouseDownY],
          [this.mouseMoveX, this.mouseDownY],
          [this.mouseMoveX, this.mouseMoveY],
          [this.mouseDownX, this.mouseMoveY],
        ]),
          this.checkInNodes();
        let i = this.mindMap.opt.selectTranslateStep,
          a = this.mindMap.opt.selectTranslateLimit,
          n = 0;
        t <= this.mindMap.elRect.left + a &&
          ((this.mouseDownX += i), this.mindMap.view.translateX(i), n++),
          t >= this.mindMap.elRect.right - a &&
            ((this.mouseDownX -= i), this.mindMap.view.translateX(-i), n++),
          e <= this.mindMap.elRect.top + a &&
            ((this.mouseDownY += i), this.mindMap.view.translateY(i), n++),
          e >= this.mindMap.elRect.bottom - a &&
            ((this.mouseDownY -= i), this.mindMap.view.translateY(-i), n++),
          n > 0 && this.startAutoMove(t, e);
      }
      startAutoMove(t, e) {
        this.autoMoveTimer = setTimeout(() => {
          this.onMove(t, e);
        }, 20);
      }
      createRect(t, e) {
        this.rect = this.mindMap.svg
          .polygon()
          .stroke({ color: "#0984e3" })
          .fill({ color: "rgba(9,132,227,0.3)" })
          .plot([[t, e]]);
      }
      checkInNodes() {
        let {
            scaleX: t,
            scaleY: e,
            translateX: i,
            translateY: a,
          } = this.mindMap.draw.transform(),
          n = Math.min(this.mouseDownX, this.mouseMoveX),
          o = Math.min(this.mouseDownY, this.mouseMoveY),
          s = Math.max(this.mouseDownX, this.mouseMoveX),
          l = Math.max(this.mouseDownY, this.mouseMoveY);
        Ft(this.mindMap.renderer.root, (r) => {
          let { left: d, top: h, width: c, height: p } = r,
            m = (d + c) * t + i,
            u = (h + p) * e + a;
          (d = d * t + i),
            (h = h * e + a),
            d >= n && m <= s && h >= o && u <= l
              ? this.mindMap.batchExecution.push("activeNode" + r.uid, () => {
                  r.nodeData.data.isActive ||
                    (this.mindMap.renderer.setNodeActive(r, !0),
                    this.mindMap.renderer.addActiveNode(r));
                })
              : r.nodeData.data.isActive &&
                this.mindMap.batchExecution.push("activeNode" + r.uid, () => {
                  r.nodeData.data.isActive &&
                    (this.mindMap.renderer.setNodeActive(r, !1),
                    this.mindMap.renderer.removeActiveNode(r));
                });
        });
      }
    }
    var je = Ye;
    class Xe extends Gt {
      constructor({ mindMap: t }) {
        super(t.renderer), (this.mindMap = t), this.reset(), this.bindEvent();
      }
      reset() {
        (this.node = null),
          (this.overlapNode = null),
          (this.prevNode = null),
          (this.nextNode = null),
          (this.drawTransform = null),
          (this.clone = null),
          (this.line = null),
          (this.placeholder = null),
          (this.offsetX = 0),
          (this.offsetY = 0),
          (this.cloneNodeLeft = 0),
          (this.cloneNodeTop = 0),
          (this.isMousedown = !1),
          (this.mouseDownX = 0),
          (this.mouseDownY = 0),
          (this.mouseMoveX = 0),
          (this.mouseMoveY = 0);
      }
      bindEvent() {
        (this.checkOverlapNode = Rt(this.checkOverlapNode, 300, this)),
          this.mindMap.on("node_mousedown", (t, e) => {
            if (this.mindMap.opt.readonly || t.isGeneralization) return;
            if (1 !== e.which || t.isRoot) return;
            e.preventDefault(),
              (this.drawTransform = this.mindMap.draw.transform());
            let {
              scaleX: i,
              scaleY: a,
              translateX: n,
              translateY: o,
            } = this.drawTransform;
            (this.offsetX = e.clientX - (t.left * i + n)),
              (this.offsetY = e.clientY - (t.top * a + o)),
              (this.node = t),
              (this.isMousedown = !0);
            let { x: s, y: l } = this.mindMap.toPos(e.clientX, e.clientY);
            (this.mouseDownX = s), (this.mouseDownY = l);
          }),
          this.mindMap.on("mousemove", (t) => {
            if (this.mindMap.opt.readonly) return;
            if (!this.isMousedown) return;
            t.preventDefault();
            let { x: e, y: i } = this.mindMap.toPos(t.clientX, t.clientY);
            (this.mouseMoveX = e),
              (this.mouseMoveY = i),
              (Math.abs(e - this.mouseDownX) <= 10 &&
                Math.abs(i - this.mouseDownY) <= 10 &&
                !this.node.isDrag) ||
                (this.mindMap.renderer.clearAllActive(), this.onMove(e, i));
          }),
          (this.onMouseup = this.onMouseup.bind(this)),
          this.mindMap.on("node_mouseup", this.onMouseup),
          this.mindMap.on("mouseup", this.onMouseup);
      }
      onMouseup(t) {
        if (!this.isMousedown) return;
        this.isMousedown = !1;
        let e = this.node.isDrag;
        if (
          ((this.node.isDrag = !1),
          this.node.show(),
          this.removeCloneNode(),
          this.overlapNode)
        )
          this.mindMap.renderer.setNodeActive(this.overlapNode, !1),
            this.mindMap.execCommand(
              "MOVE_NODE_TO",
              this.node,
              this.overlapNode
            );
        else if (this.prevNode)
          this.mindMap.renderer.setNodeActive(this.prevNode, !1),
            this.mindMap.execCommand("INSERT_AFTER", this.node, this.prevNode);
        else if (this.nextNode)
          this.mindMap.renderer.setNodeActive(this.nextNode, !1),
            this.mindMap.execCommand("INSERT_BEFORE", this.node, this.nextNode);
        else if (e) {
          let { x: e, y: i } = this.mindMap.toPos(
              t.clientX - this.offsetX,
              t.clientY - this.offsetY
            ),
            {
              scaleX: a,
              scaleY: n,
              translateX: o,
              translateY: s,
            } = this.drawTransform;
          (e = (e - o) / a),
            (i = (i - s) / n),
            (this.node.left = e),
            (this.node.top = i),
            (this.node.customLeft = e),
            (this.node.customTop = i),
            this.mindMap.execCommand(
              "SET_NODE_CUSTOM_POSITION",
              this.node,
              e,
              i
            ),
            this.mindMap.render();
        }
        this.reset();
      }
      createCloneNode() {
        this.clone ||
          ((this.clone = this.node.group.clone()),
          this.clone.opacity(0.5),
          this.clone.css("z-index", 99999),
          (this.node.isDrag = !0),
          this.node.hide(),
          (this.line = this.draw.path()),
          this.line.opacity(0.5),
          this.node.styleLine(this.line, this.node),
          (this.placeholder = this.draw
            .rect()
            .fill({ color: this.node.style.merge("lineColor", !0) })),
          this.mindMap.draw.add(this.clone));
      }
      removeCloneNode() {
        this.clone &&
          (this.clone.remove(), this.line.remove(), this.placeholder.remove());
      }
      onMove(t, e) {
        if (!this.isMousedown) return;
        this.createCloneNode();
        let {
          scaleX: i,
          scaleY: a,
          translateX: n,
          translateY: o,
        } = this.drawTransform;
        (this.cloneNodeLeft = t - this.offsetX),
          (this.cloneNodeTop = e - this.offsetY),
          (t = (this.cloneNodeLeft - n) / i),
          (e = (this.cloneNodeTop - o) / a);
        let s = this.clone.transform();
        this.clone.translate(t - s.translateX, e - s.translateY);
        let l = this.node.parent;
        this.line.plot(
          this.quadraticCurvePath(
            l.left + l.width / 2,
            l.top + l.height / 2,
            t + this.node.width / 2,
            e + this.node.height / 2
          )
        ),
          this.checkOverlapNode();
      }
      checkOverlapNode() {
        if (!this.drawTransform) return;
        let {
            scaleX: t,
            scaleY: e,
            translateX: i,
            translateY: a,
          } = this.drawTransform,
          n = this.cloneNodeLeft + this.node.width * t,
          o = this.cloneNodeTop + this.node.height * t;
        (this.overlapNode = null),
          (this.prevNode = null),
          (this.nextNode = null),
          this.placeholder.size(0, 0),
          Ft(this.mindMap.renderer.root, (s) => {
            if (
              (s.nodeData.data.isActive &&
                this.mindMap.renderer.setNodeActive(s, !1),
              s === this.node || this.node.isParent(s))
            )
              return;
            if (this.overlapNode || (this.prevNode && this.nextNode)) return;
            let { left: l, top: r, width: d, height: h } = s,
              c = l,
              p = r,
              m = r + h,
              u = (l + d) * t + i,
              g = (r + h) * e + a;
            (l = l * t + i),
              (r = r * e + a),
              this.overlapNode ||
                (l <= n &&
                  u >= this.cloneNodeLeft &&
                  r <= o &&
                  g >= this.cloneNodeTop &&
                  (this.overlapNode = s)),
              this.prevNode ||
                this.nextNode ||
                !this.node.isBrother(s) ||
                (l <= n &&
                  u >= this.cloneNodeLeft &&
                  (this.cloneNodeTop > g && this.cloneNodeTop <= g + 10
                    ? ((this.prevNode = s),
                      this.placeholder.size(s.width, 10).move(c, m))
                    : o < r &&
                      o >= r - 10 &&
                      ((this.nextNode = s),
                      this.placeholder.size(s.width, 10).move(c, p - 10))));
          }),
          this.overlapNode &&
            this.mindMap.renderer.setNodeActive(this.overlapNode, !0);
      }
    }
    var Ve = Xe;
    class Ge {
      constructor(t) {
        (this.mindMap = t.mindMap),
          (this.isMousedown = !1),
          (this.mousedownPos = { x: 0, y: 0 }),
          (this.startViewPos = { x: 0, y: 0 });
      }
      getMiniMap() {
        const t = this.mindMap.svg,
          e = this.mindMap.draw,
          i = t.width(),
          a = t.height(),
          n = e.transform(),
          o = this.mindMap.el.getBoundingClientRect();
        e.scale(1 / n.scaleX, 1 / n.scaleY);
        const s = e.rbox();
        t.size(s.width, s.height), e.translate(-s.x + o.left, -s.y + o.top);
        const l = t.clone();
        return (
          t.size(i, a),
          e.transform(n),
          {
            svg: l,
            svgHTML: l.svg(),
            rect: { ...s, ratio: s.width / s.height },
            origWidth: i,
            origHeight: a,
            scaleX: n.scaleX,
            scaleY: n.scaleY,
          }
        );
      }
      calculationMiniMap(t, e) {
        let {
            svgHTML: i,
            rect: a,
            origWidth: n,
            origHeight: o,
            scaleX: s,
            scaleY: l,
          } = this.getMiniMap(),
          r = t / e,
          d = 0,
          h = 0;
        r > a.ratio
          ? ((h = e), (d = a.ratio * h))
          : ((d = t), (h = d / a.ratio));
        let c = d / a.width,
          p = (t - d) / 2,
          m = (e - h) / 2,
          u = a.x - (a.width * s - a.width) / 2,
          g = a.x2 + (a.width * s - a.width) / 2,
          f = a.y - (a.height * l - a.height) / 2,
          v = a.y2 + (a.height * l - a.height) / 2,
          b = a.width * s,
          C = a.height * l,
          x = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
          (x.left = Math.max(0, (-u / b) * d) + p + "px"),
          (x.right = Math.max(0, ((g - n) / b) * d) + p + "px"),
          (x.top = Math.max(0, (-f / C) * h) + m + "px"),
          (x.bottom = Math.max(0, ((v - o) / C) * h) + m + "px"),
          {
            svgHTML: i,
            viewBoxStyle: x,
            miniMapBoxScale: c,
            miniMapBoxLeft: p,
            miniMapBoxTop: m,
          }
        );
      }
      onMousedown(t) {
        (this.isMousedown = !0),
          (this.mousedownPos = { x: t.clientX, y: t.clientY });
        let e = this.mindMap.view.getTransformData();
        this.startViewPos = { x: e.state.x, y: e.state.y };
      }
      onMousemove(t, e = 5) {
        if (!this.isMousedown) return;
        let i = t.clientX - this.mousedownPos.x,
          a = t.clientY - this.mousedownPos.y;
        this.mindMap.view.translateXTo(i * e + this.startViewPos.x),
          this.mindMap.view.translateYTo(a * e + this.startViewPos.y);
      }
      onMouseup() {
        this.isMousedown = !1;
      }
    }
    var Ze = Ge,
      Ue = i("5e89"),
      Je = i.n(Ue),
      Ke = i("b7ba"),
      qe = i.n(Ke);
    const Qe = (t) =>
        new Promise((e, i) => {
          Je.a.loadAsync(t).then(
            async (t) => {
              try {
                let a = "";
                if (t.files["content.json"]) {
                  let e = await t.files["content.json"].async("string");
                  a = ti(e);
                } else if (t.files["content.xml"]) {
                  let e = await t.files["content.xml"].async("string"),
                    i = qe.a.xml2json(e);
                  a = ei(i);
                }
                a ? e(a) : i(new Error("解析失败"));
              } catch (a) {
                i(a);
              }
            },
            (t) => {
              i(t);
            }
          );
        }),
      ti = (t) => {
        let e = JSON.parse(t)[0],
          i = e.rootTopic,
          a = {},
          n = (t, e) => {
            (e.data = { text: t.title }),
              t.notes &&
                (e.data.note = (t.notes.realHTML || t.notes.plain).content),
              t.href &&
                /^https?:\/\//.test(t.href) &&
                (e.data.hyperlink = t.href),
              t.labels && t.labels.length > 0 && (e.data.tag = t.labels),
              (e.children = []),
              t.children &&
                t.children.attached &&
                t.children.attached.length > 0 &&
                t.children.attached.forEach((t) => {
                  let i = {};
                  e.children.push(i), n(t, i);
                });
          };
        return n(i, a), a;
      },
      ei = (t) => {
        let e = JSON.parse(t),
          i = e.elements,
          a = null,
          n = (t) => {
            for (let e = 0; e < t.length; e++)
              if (!a && "topic" === t[e].name) return void (a = t[e]);
            t.forEach((t) => {
              n(t.elements);
            });
          };
        n(i);
        let o = {},
          s = (t, e) => t.find((t) => t.name === e),
          l = (t, e) => {
            let i = t.elements;
            e.data = { text: s(i, "title").elements[0].text };
            try {
              let t = s(i, "notes");
              t && (e.data.note = t.elements[0].elements[0].elements[0].text);
            } catch (n) {
              console.log(n);
            }
            try {
              t.attributes &&
                t.attributes["xlink:href"] &&
                /^https?:\/\//.test(t.attributes["xlink:href"]) &&
                (e.data.hyperlink = t.attributes["xlink:href"]);
            } catch (n) {
              console.log(n);
            }
            try {
              let t = s(i, "labels");
              t && (e.data.tag = t.elements.map((t) => t.elements[0].text));
            } catch (n) {
              console.log(n);
            }
            e.children = [];
            let a = s(i, "children");
            a &&
              a.elements &&
              a.elements.length > 0 &&
              a.elements.forEach((t) => {
                if ("topics" === t.name)
                  t.elements.forEach((t) => {
                    let i = {};
                    e.children.push(i), l(t, i);
                  });
                else {
                  let i = {};
                  e.children.push(i), l(t, i);
                }
              });
          };
        return l(a, o), o;
      };
    var ii = { parseXmindFile: Qe, transformXmind: ti, transformOldXmind: ei };
    const ai = {
      readonly: !1,
      layout: "logicalStructure",
      theme: "default",
      themeConfig: {},
      scaleRatio: 0.1,
      maxTag: 5,
      exportPadding: 20,
      expandBtnSize: 20,
      imgTextMargin: 5,
      textContentMargin: 2,
      selectTranslateStep: 3,
      selectTranslateLimit: 20,
      customNoteContentShow: null,
    };
    class ni {
      constructor(t = {}) {
        (this.opt = this.handleOpt(yt()(ai, t))),
          (this.el = this.opt.el),
          (this.elRect = this.el.getBoundingClientRect()),
          (this.width = this.elRect.width),
          (this.height = this.elRect.height),
          (this.svg = Object(Wt["f"])()
            .addTo(this.el)
            .size(this.width, this.height)),
          (this.draw = this.svg.group()),
          (this.uid = 0),
          this.initTheme(),
          (this.event = new wt({ mindMap: this })),
          (this.keyCommand = new Le({ mindMap: this })),
          (this.command = new Be({ mindMap: this })),
          (this.renderer = new re({ mindMap: this })),
          (this.view = new vt({ mindMap: this, draw: this.draw })),
          (this.miniMap = new Ze({ mindMap: this })),
          (this.doExport = new Pe({ mindMap: this })),
          (this.select = new je({ mindMap: this })),
          (this.drag = new Ve({ mindMap: this })),
          (this.batchExecution = new Re()),
          this.reRender(),
          setTimeout(() => {
            this.command.addHistory();
          }, 0);
      }
      handleOpt(t) {
        return (
          it.includes(t.layout) || (t.layout = "logicalStructure"),
          (t.theme = t.theme && Fe[t.theme] ? t.theme : "default"),
          t
        );
      }
      render() {
        this.batchExecution.push("render", () => {
          this.initTheme(),
            (this.renderer.reRender = !1),
            this.renderer.render();
        });
      }
      reRender() {
        this.batchExecution.push("render", () => {
          this.draw.clear(),
            this.initTheme(),
            (this.renderer.reRender = !0),
            this.renderer.render();
        });
      }
      resize() {
        (this.elRect = this.el.getBoundingClientRect()),
          (this.width = this.elRect.width),
          (this.height = this.elRect.height),
          this.svg.size(this.width, this.height);
      }
      on(t, e) {
        this.event.on(t, e);
      }
      emit(t, ...e) {
        this.event.emit(t, ...e);
      }
      off(t, e) {
        this.event.off(t, e);
      }
      initTheme() {
        (this.themeConfig = yt()(Fe[this.opt.theme], this.opt.themeConfig)),
          Dt.setBackgroundStyle(this.el, this.themeConfig);
      }
      setTheme(t) {
        this.renderer.clearAllActive(), (this.opt.theme = t), this.reRender();
      }
      getTheme() {
        return this.opt.theme;
      }
      setThemeConfig(t) {
        (this.opt.themeConfig = t), this.reRender();
      }
      getCustomThemeConfig() {
        return this.opt.themeConfig;
      }
      getThemeConfig(t) {
        return void 0 === t ? this.themeConfig : this.themeConfig[t];
      }
      getLayout() {
        return this.opt.layout;
      }
      setLayout(t) {
        it.includes(t) || (t = "logicalStructure"),
          (this.opt.layout = t),
          this.renderer.setLayout(),
          this.render();
      }
      execCommand(...t) {
        this.command.exec(...t);
      }
      setData(t) {
        this.execCommand("CLEAR_ACTIVE_NODE"),
          this.command.clearHistory(),
          (this.renderer.renderTree = t),
          this.reRender();
      }
      setFullData(t) {
        t.root && this.setData(t.root),
          t.layout && this.setLayout(t.layout),
          t.theme &&
            (t.theme.template && this.setTheme(t.theme.template),
            t.theme.config && this.setThemeConfig(t.theme.config)),
          t.view && this.view.setTransformData(t.view);
      }
      getData(t) {
        let e = this.command.getCopyData(),
          i = {};
        return (
          (i = t
            ? {
                layout: this.getLayout(),
                root: e,
                theme: {
                  template: this.getTheme(),
                  config: this.getCustomThemeConfig(),
                },
                view: this.view.getTransformData(),
              }
            : e),
          Lt(i)
        );
      }
      async export(...t) {
        let e = await this.doExport.export(...t);
        return e;
      }
      toPos(t, e) {
        return { x: t - this.elRect.left, y: e - this.elRect.top };
      }
      setMode(t) {
        ["readonly", "edit"].includes(t) &&
          ((this.opt.readonly = "readonly" === t),
          this.opt.readonly && this.renderer.clearAllActive(),
          this.emit("mode_change", t));
      }
    }
    ni.xmind = ii;
    var oi = ni;
    const si = () =>
        document.documentElement.requestFullScreen
          ? "onfullscreenchange"
          : document.documentElement.webkitRequestFullScreen
          ? "onwebkitfullscreenchange"
          : document.documentElement.mozRequestFullScreen
          ? "onmozfullscreenchange"
          : document.documentElement.msRequestFullscreen
          ? "onmsfullscreenchange"
          : void 0,
      li = si(),
      ri = (t) => {
        t.requestFullScreen
          ? t.requestFullScreen()
          : t.webkitRequestFullScreen
          ? t.webkitRequestFullScreen()
          : t.mozRequestFullScreen && t.mozRequestFullScreen();
      },
      di = (t) =>
        new Promise((e) => {
          const i = new FileReader();
          (i.onload = () => {
            e(i.result);
          }),
            i.readAsArrayBuffer(t);
        });
    var hi = i("25ca"),
      ci = {
        name: "Import",
        data() {
          return { dialogVisible: !1, fileList: [] };
        },
        watch: {
          dialogVisible(t, e) {
            !t && e && (this.fileList = []);
          },
        },
        created() {
          this.$bus.$on("showImport", () => {
            this.dialogVisible = !0;
          });
        },
        methods: {
          onChange(t) {
            let e = /\.(smm|xmind|json|xlsx)$/;
            e.test(t.name)
              ? this.fileList.push(t)
              : (this.$message.error("请选择.smm、.json、.xmind、.xlsx文件"),
                (this.fileList = []));
          },
          onExceed() {
            this.$message.error("最多只能选择一个文件");
          },
          cancel() {
            this.dialogVisible = !1;
          },
          confirm() {
            if (this.fileList.length <= 0)
              return this.$message.error("请选择要导入的文件");
            this.$store.commit("setIsHandleLocalFile", !1);
            let t = this.fileList[0];
            /\.(smm|json)$/.test(t.name)
              ? this.handleSmm(t)
              : /\.xmind$/.test(t.name)
              ? this.handleXmind(t)
              : /\.xlsx$/.test(t.name) && this.handleExcel(t),
              this.cancel();
          },
          handleSmm(t) {
            let e = new FileReader();
            e.readAsText(t.raw),
              (e.onload = (t) => {
                try {
                  let e = JSON.parse(t.target.result);
                  if ("object" !== typeof e) throw new Error("文件内容有误");
                  this.$bus.$emit("setData", e),
                    this.$message.success("导入成功");
                } catch (e) {
                  console.log(e), this.$message.error("文件解析失败");
                }
              });
          },
          async handleXmind(t) {
            try {
              let e = await oi.xmind.parseXmindFile(t.raw);
              this.$bus.$emit("setData", e), this.$message.success("导入成功");
            } catch (e) {
              console.log(e), this.$message.error("文件解析失败");
            }
          },
          async handleExcel(t) {
            try {
              const e = Object(hi["a"])(await di(t.raw)),
                i = hi["b"].sheet_to_json(e.Sheets[e.SheetNames[0]], {
                  header: 1,
                });
              if (i.length <= 0) return;
              let a = 0;
              i.forEach((t) => {
                t.length > a && (a = t.length);
              });
              let n = [],
                o = (t) => {
                  n[t] || (n[t] = []);
                  for (let e = 0; e < i.length; e++)
                    if (i[e][t]) {
                      let a = {
                        data: { text: i[e][t] },
                        children: [],
                        _row: e,
                      };
                      n[t].push(a);
                    }
                  t < a - 1 && o(t + 1);
                };
              o(0);
              let s = (t, e) => {
                for (let i = t.length - 1; i >= 0; i--)
                  if (e >= t[i]._row) return t[i];
              };
              for (let t = 1; t < n.length; t++) {
                let e = n[t];
                for (let i = 0; i < e.length; i++) {
                  let a = e[i],
                    o = s(n[t - 1], a._row);
                  o && o.children.push(a);
                }
              }
              this.$bus.$emit("setData", n[0][0]),
                this.$message.success("导入成功");
            } catch (e) {
              console.log(e), this.$message.error("文件解析失败");
            }
          },
        },
      },
      pi = ci,
      mi = (i("074f"), Object(r["a"])(pi, ut, gt, !1, null, "fbc1b2ec", null)),
      ui = mi.exports,
      gi = i("2f62"),
      fi = i("5c96"),
      vi = i.n(fi);
    const bi = () => ({
        image: "/enJFNMHnedQTYTESGfDkctCp2.jpeg",
        imageTitle: "图片名称",
        imageSize: { width: 1e3, height: 563 },
        icon: ["priority_1"],
        tag: ["标签1", "标签2"],
        hyperlink: "http://lxqnsys.com/",
        hyperlinkTitle: "理想青年实验室",
        note: "理想青年实验室\n一个有意思的角落",
      }),
      Ci =
        (bi(),
        bi(),
        {
          root: {
            data: { text: "根节点" },
            children: [
              {
                data: { text: "二级节点", generalization: { text: "概要" } },
                children: [
                  { data: { text: "分支主题" }, children: [] },
                  { data: { text: "分支主题" }, children: [] },
                ],
              },
            ],
          },
        });
    var xi = {
      ...Ci,
      theme: { template: "classic4", config: {} },
      layout: "logicalStructure",
    };
    const wi = "SIMPLE_MIND_MAP_DATA",
      Mi = "SIMPLE_MIND_MAP_LANG",
      yi = (t, e) => (
        (t.data = Lt(e.data)),
        (t.children = []),
        e.children &&
          e.children.length > 0 &&
          e.children.forEach((e, i) => {
            t.children[i] = yi({}, e);
          }),
        t
      ),
      _i = () => {
        let t = localStorage.getItem(wi);
        if (null === t) return Lt(xi);
        try {
          return JSON.parse(t);
        } catch (e) {
          return Lt(xi);
        }
      },
      Ni = (t) => {
        try {
          let e = _i();
          (e.root = yi({}, t)),
            a["default"].prototype.$bus.$emit("write_local_file", e);
          let i = JSON.stringify(e);
          localStorage.setItem(wi, i);
        } catch (e) {
          console.log(e);
        }
      },
      Di = (t) => {
        try {
          let e = _i();
          (e = { ...e, ...t }),
            a["default"].prototype.$bus.$emit("write_local_file", e);
          let i = JSON.stringify(e);
          localStorage.setItem(wi, i);
        } catch (e) {
          console.log(e);
        }
      },
      zi = (t) => {
        localStorage.setItem(Mi, t);
      },
      Si = () => {
        let t = localStorage.getItem(Mi);
        return t || (zi("zh"), "zh");
      };
    let $i = null;
    var Fi = {
        name: "Toolbar",
        components: {
          NodeImage: z,
          NodeHyperlink: L,
          NodeIcon: j,
          NodeNote: K,
          NodeTag: lt,
          Export: mt,
          Import: ui,
        },
        data() {
          return {
            activeNodes: [],
            backEnd: !1,
            forwardEnd: !0,
            readonly: !1,
            isFullDataFile: !1,
            timer: null,
          };
        },
        computed: {
          ...Object(gi["c"])(["isHandleLocalFile"]),
          hasRoot() {
            return -1 !== this.activeNodes.findIndex((t) => t.isRoot);
          },
          hasGeneralization() {
            return -1 !== this.activeNodes.findIndex((t) => t.isGeneralization);
          },
        },
        watch: {
          isHandleLocalFile(t) {
            t || fi["Notification"].closeAll();
          },
        },
        created() {
          this.$bus.$on("mode_change", (t) => {
            this.readonly = "readonly" === t;
          }),
            this.$bus.$on("node_active", (...t) => {
              this.activeNodes = t[1];
            }),
            this.$bus.$on("back_forward", (t, e) => {
              (this.backEnd = t <= 0), (this.forwardEnd = t >= e - 1);
            }),
            this.$bus.$on("write_local_file", (t) => {
              clearTimeout(this.timer),
                (this.timer = setTimeout(() => {
                  this.writeLocalFile(t);
                }, 1e3));
            });
        },
        methods: {
          async openLocalFile() {
            try {
              let [t] = await window.showOpenFilePicker({
                types: [
                  { description: "", accept: { "application/json": [".smm"] } },
                ],
                excludeAcceptAllOption: !0,
                multiple: !1,
              });
              if (!t) return;
              if ((($i = t), "directory" === $i.kind))
                return void this.$message.warning("请选择文件");
              this.readFile();
            } catch (t) {
              if ((console.log(t), t.toString().includes("aborted"))) return;
              this.$message.warning(
                "你的浏览器可能不支持，建议使用最新版本的Chrome浏览器"
              );
            }
          },
          async readFile() {
            let t = await $i.getFile(),
              e = new FileReader();
            (e.onload = async () => {
              this.$store.commit("setIsHandleLocalFile", !0),
                this.setData(e.result),
                fi["Notification"].closeAll(),
                Object(fi["Notification"])({
                  title: "提示",
                  message: `当前正在编辑你本机的【${t.name}】文件`,
                  duration: 0,
                  showClose: !1,
                });
            }),
              e.readAsText(t);
          },
          setData(t) {
            try {
              let e = JSON.parse(t);
              if ("object" !== typeof e) throw new Error("文件内容有误");
              e.root
                ? (this.isFullDataFile = !0)
                : ((this.isFullDataFile = !1), (e = { ...xi, root: e })),
                this.$bus.$emit("setData", e);
            } catch (e) {
              console.log(e), this.$message.error("文件打开失败");
            }
          },
          async writeLocalFile(t) {
            if (!$i || !this.isHandleLocalFile) return;
            this.isFullDataFile || (t = t.root);
            let e = JSON.stringify(t);
            const i = await $i.createWritable();
            await i.write(e), await i.close();
          },
          async createNewLocalFile() {
            await this.createLocalFile(xi);
          },
          async saveLocalFile() {
            let t = _i();
            await this.createLocalFile(t);
          },
          async createLocalFile(t) {
            try {
              let e = await window.showSaveFilePicker({
                types: [
                  { description: "", accept: { "application/json": [".smm"] } },
                ],
                suggestedName: "思维导图",
              });
              if (!e) return;
              const i = this.$loading({
                lock: !0,
                text: "正在创建文件",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)",
              });
              ($i = e),
                this.$store.commit("setIsHandleLocalFile", !0),
                (this.isFullDataFile = !0),
                await this.writeLocalFile(t),
                await this.readFile(),
                i.close();
            } catch (e) {
              if ((console.log(e), e.toString().includes("aborted"))) return;
              this.$message.warning(
                "你的浏览器可能不支持，建议使用最新版本的Chrome浏览器"
              );
            }
          },
        },
      },
      ki = Fi,
      Ei = (i("9965"), Object(r["a"])(ki, u, g, !1, null, "013ec8ac", null)),
      Li = Ei.exports,
      Ti = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "editContainer" },
          [
            e("div", {
              ref: "mindMapContainer",
              staticClass: "mindMapContainer",
            }),
            e("Count"),
            e("Navigator", { attrs: { mindMap: t.mindMap } }),
            e("NavigatorToolbar", { attrs: { mindMap: t.mindMap } }),
            e("Outline"),
            e("Style"),
            e("BaseStyle", {
              attrs: { data: t.mindMapData, mindMap: t.mindMap },
            }),
            e("Theme", { attrs: { mindMap: t.mindMap } }),
            e("Structure", { attrs: { mindMap: t.mindMap } }),
            e("ShortcutKey"),
            t.mindMap
              ? e("Contextmenu", { attrs: { mindMap: t.mindMap } })
              : t._e(),
            e("NodeNoteContentShow"),
            t.mindMap
              ? e("NodeImgPreview", { attrs: { mindMap: t.mindMap } })
              : t._e(),
          ],
          1
        );
      },
      Bi = [],
      Ai = function () {
        var t = this,
          e = t._self._c;
        return e(
          "Sidebar",
          { ref: "sidebar", attrs: { title: t.$t("outline.title") } },
          [
            e("el-tree", {
              attrs: {
                data: t.data,
                props: t.defaultProps,
                "default-expand-all": "",
              },
            }),
          ],
          1
        );
      },
      Ii = [],
      Ri = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "sidebarContainer",
            class: { show: t.show },
            style: { zIndex: t.zIndex },
            on: {
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            e("span", {
              staticClass: "closeBtn el-icon-close",
              on: {
                click: function (e) {
                  t.show = !1;
                },
              },
            }),
            t.title
              ? e("div", { staticClass: "sidebarHeader" }, [
                  t._v(" " + t._s(t.title) + " "),
                ])
              : t._e(),
            e("div", { staticClass: "sidebarContent" }, [t._t("default")], 2),
          ]
        );
      },
      Oi = [];
    const Wi = [
        { name: "宋体", value: "宋体, SimSun, Songti SC" },
        { name: "微软雅黑", value: "微软雅黑, Microsoft YaHei" },
        { name: "楷体", value: "楷体, 楷体_GB2312, SimKai, STKaiti" },
        { name: "黑体", value: "黑体, SimHei, Heiti SC" },
        { name: "隶书", value: "隶书, SimLi" },
        { name: "Andale Mono", value: "andale mono" },
        { name: "Arial", value: "arial, helvetica, sans-serif" },
        { name: "arialBlack", value: "arial black, avant garde" },
        { name: "Comic Sans Ms", value: "comic sans ms" },
        { name: "Impact", value: "impact, chicago" },
        { name: "Times New Roman", value: "times new roman" },
        { name: "Sans-Serif", value: "sans-serif" },
        { name: "serif", value: "serif" },
      ],
      Hi = [10, 12, 16, 18, 24, 32, 48],
      Pi = [1, 1.5, 2, 2.5, 3],
      Yi = [
        "#4D4D4D",
        "#999999",
        "#FFFFFF",
        "#F44E3B",
        "#FE9200",
        "#FCDC00",
        "#DBDF00",
        "#A4DD00",
        "#68CCCA",
        "#73D8FF",
        "#AEA1FF",
        "#FDA1FF",
        "#333333",
        "#808080",
        "#cccccc",
        "#D33115",
        "#E27300",
        "#FCC400",
        "#B0BC00",
        "#68BC00",
        "#16A5A5",
        "#009CE0",
        "#7B64FF",
        "#FA28FF",
        "#000000",
        "#666666",
        "#B3B3B3",
        "#9F0500",
        "#C45100",
        "#FB9E00",
        "#808900",
        "#194D33",
        "#0C797D",
        "#0062B1",
        "#653294",
        "#AB149E",
      ],
      ji = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Xi = [
        { name: "实线", value: "none" },
        { name: "虚线1", value: "5,5" },
        { name: "虚线2", value: "10,10" },
        { name: "虚线3", value: "20,10,5,5,5,10" },
        { name: "虚线4", value: "5, 5, 1, 5" },
        { name: "虚线5", value: "15, 10, 5, 10, 15" },
        { name: "虚线6", value: "1, 5" },
      ],
      Vi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Gi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Zi = [
        { name: "直线", value: "straight" },
        { name: "曲线", value: "curve" },
        { name: "直连", value: "direct" },
      ],
      Ui = [
        { name: "不重复", value: "no-repeat" },
        { name: "重复", value: "repeat" },
        { name: "水平方向重复", value: "repeat-x" },
        { name: "垂直方向重复", value: "repeat-y" },
      ],
      Ji = { sidebarZIndex: 1 },
      Ki = [
        {
          type: "节点操作",
          list: [
            {
              icon: "icontianjiazijiedian",
              name: "插入下级节点",
              value: "Tab",
            },
            { icon: "iconjiedian", name: "插入同级节点", value: "Enter" },
            { icon: "iconshangyi", name: "上移节点", value: "Ctrl + ↑" },
            { icon: "iconxiayi", name: "下移节点", value: "Ctrl + ↓" },
            { icon: "icongaikuozonglan", name: "插入概要", value: "Ctrl + S" },
            { icon: "iconzhankai", name: "展开/收起节点", value: "/" },
            {
              icon: "iconshanchu",
              name: "删除节点",
              value: "Delete | Backspace",
            },
            { icon: "iconfuzhi", name: "复制节点", value: "Ctrl + C" },
            { icon: "iconjianqie", name: "剪切节点", value: "Ctrl + X" },
            { icon: "iconniantie", name: "粘贴节点", value: "Ctrl + V" },
            { icon: "iconbianji", name: "编辑节点", value: "F2" },
            { icon: "iconhuanhang", name: "文本换行", value: "Shift + Enter" },
            { icon: "iconhoutui-shi", name: "回退", value: "Ctrl + Z" },
            { icon: "iconqianjin1", name: "前进", value: "Ctrl + Y" },
            { icon: "iconquanxuan", name: "全选", value: "Ctrl + A" },
            { icon: "iconquanxuan", name: "多选", value: "右键 / Ctrl + 左键" },
            { icon: "iconzhengli", name: "一键整理布局", value: "Ctrl + L" },
          ],
        },
        {
          type: "画布操作",
          list: [
            { icon: "iconfangda", name: "放大", value: "Ctrl + +" },
            { icon: "iconsuoxiao", name: "缩小", value: "Ctrl + -" },
            { icon: "icondingwei", name: "恢复默认", value: "Ctrl + Enter" },
          ],
        },
      ],
      qi = [
        { name: "矩形", value: "rectangle" },
        { name: "菱形", value: "diamond" },
        { name: "平行四边形", value: "parallelogram" },
        { name: "圆角矩形", value: "roundedRectangle" },
        { name: "八角矩形", value: "octagonalRectangle" },
        { name: "外三角矩形", value: "outerTriangularRectangle" },
        { name: "内三角矩形", value: "innerTriangularRectangle" },
        { name: "椭圆", value: "ellipse" },
        { name: "圆", value: "circle" },
      ],
      Qi = [
        { value: "zh", name: "简体中文" },
        { value: "en", name: "English" },
      ],
      ta = [
        { name: "Song Ti", value: "宋体, SimSun, Songti SC" },
        { name: "Microsoft Yahei", value: "微软雅黑, Microsoft YaHei" },
        { name: "Italics", value: "楷体, 楷体_GB2312, SimKai, STKaiti" },
        { name: "Boldface", value: "黑体, SimHei, Heiti SC" },
        { name: "Official script", value: "隶书, SimLi" },
        { name: "Andale Mono", value: "andale mono" },
        { name: "Arial", value: "arial, helvetica, sans-serif" },
        { name: "arialBlack", value: "arial black, avant garde" },
        { name: "Comic Sans Ms", value: "comic sans ms" },
        { name: "Impact", value: "impact, chicago" },
        { name: "Times New Roman", value: "times new roman" },
        { name: "Sans-Serif", value: "sans-serif" },
        { name: "serif", value: "serif" },
      ],
      ea = [
        { name: "Solid", value: "none" },
        { name: "Dotted1", value: "5,5" },
        { name: "Dotted2", value: "10,10" },
        { name: "Dotted3", value: "20,10,5,5,5,10" },
        { name: "Dotted4", value: "5, 5, 1, 5" },
        { name: "Dotted5", value: "15, 10, 5, 10, 15" },
        { name: "Dotted6", value: "1, 5" },
      ],
      ia = [
        { name: "Straight", value: "straight" },
        { name: "Curve", value: "curve" },
        { name: "Direct", value: "direct" },
      ],
      aa = [
        { name: "No repeat", value: "no-repeat" },
        { name: "Repeat", value: "repeat" },
        { name: "Repeat-x", value: "repeat-x" },
        { name: "Repeat-y", value: "repeat-y" },
      ],
      na = [
        {
          type: "Node operation",
          list: [
            {
              icon: "icontianjiazijiedian",
              name: "Inert child node",
              value: "Tab",
            },
            {
              icon: "iconjiedian",
              name: "Insert sibling node",
              value: "Enter",
            },
            { icon: "iconshangyi", name: "Move up node", value: "Ctrl + ↑" },
            { icon: "iconxiayi", name: "Move down node", value: "Ctrl + ↓" },
            {
              icon: "icongaikuozonglan",
              name: "Insert summary",
              value: "Ctrl + S",
            },
            { icon: "iconzhankai", name: "Expand/UnExpand node", value: "/" },
            {
              icon: "iconshanchu",
              name: "Delete node",
              value: "Delete | Backspace",
            },
            { icon: "iconfuzhi", name: "Copy node", value: "Ctrl + C" },
            { icon: "iconjianqie", name: "Cut node", value: "Ctrl + X" },
            { icon: "iconniantie", name: "Paste node", value: "Ctrl + V" },
            { icon: "iconbianji", name: "Edit node", value: "F2" },
            { icon: "iconhuanhang", name: "Text Wrap", value: "Shift + Enter" },
            { icon: "iconhoutui-shi", name: "Undo", value: "Ctrl + Z" },
            { icon: "iconqianjin1", name: "Redo", value: "Ctrl + Y" },
            { icon: "iconquanxuan", name: "Select All", value: "Ctrl + A" },
            {
              icon: "iconquanxuan",
              name: "Multiple choice",
              value: "Right click / Ctrl + Left click",
            },
            { icon: "iconzhengli", name: "Arrange layout", value: "Ctrl + L" },
          ],
        },
        {
          type: "Canvas operation",
          list: [
            { icon: "iconfangda", name: "Zoom in", value: "Ctrl + +" },
            { icon: "iconsuoxiao", name: "Zoom out", value: "Ctrl + -" },
            { icon: "icondingwei", name: "Reset", value: "Ctrl + Enter" },
          ],
        },
      ],
      oa = [
        { name: "Rectangle", value: "rectangle" },
        { name: "Diamond", value: "diamond" },
        { name: "Parallelogram", value: "parallelogram" },
        { name: "Rounded rectangle", value: "roundedRectangle" },
        { name: "Octagonal rectangle", value: "octagonalRectangle" },
        {
          name: "Outer triangular rectangle",
          value: "outerTriangularRectangle",
        },
        {
          name: "Inner triangular rectangle",
          value: "innerTriangularRectangle",
        },
        { name: "Ellipse", value: "ellipse" },
        { name: "Circle", value: "circle" },
      ],
      sa = { zh: Wi, en: ta },
      la = { zh: Xi, en: ea },
      ra = { zh: Zi, en: ia },
      da = { zh: Ui, en: aa },
      ha = { zh: Ki, en: na },
      ca = { zh: qi, en: oa };
    var pa = {
        name: "Sidebar",
        props: { title: { type: String, default: "" } },
        data() {
          return { show: !1, zIndex: 0 };
        },
        watch: {
          show(t, e) {
            t && !e && (this.zIndex = Ji.sidebarZIndex++);
          },
        },
      },
      ma = pa,
      ua = (i("eae4"), Object(r["a"])(ma, Ri, Oi, !1, null, "20ab4f00", null)),
      ga = ua.exports,
      fa = {
        name: "Outline",
        components: { Sidebar: ga },
        data() {
          return {
            data: [],
            defaultProps: {
              label(t) {
                return t.data.text;
              },
            },
          };
        },
        created() {
          this.$bus.$on("data_change", (t) => {
            this.data = [t];
          }),
            this.$bus.$on("showOutline", () => {
              (this.$refs.sidebar.show = !1),
                this.$nextTick(() => {
                  this.$refs.sidebar.show = !0;
                });
            });
        },
      },
      va = fa,
      ba = Object(r["a"])(va, Ai, Ii, !1, null, "5613737f", null),
      Ca = ba.exports,
      xa = function () {
        var t = this,
          e = t._self._c;
        return e(
          "Sidebar",
          { ref: "sidebar", attrs: { title: t.$t("style.title") } },
          [
            e(
              "div",
              { staticClass: "styleBox" },
              [
                e(
                  "el-tabs",
                  {
                    staticClass: "tab",
                    on: { "tab-click": t.handleTabClick },
                    model: {
                      value: t.activeTab,
                      callback: function (e) {
                        t.activeTab = e;
                      },
                      expression: "activeTab",
                    },
                  },
                  [
                    e("el-tab-pane", {
                      attrs: { label: t.$t("style.normal"), name: "normal" },
                    }),
                    e("el-tab-pane", {
                      attrs: { label: t.$t("style.active"), name: "active" },
                    }),
                  ],
                  1
                ),
                t.activeNodes.length > 0
                  ? e("div", { staticClass: "sidebarContent" }, [
                      e("div", { staticClass: "title noTop" }, [
                        t._v(t._s(t.$t("style.text"))),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.fontFamily"))),
                            ]),
                            e(
                              "el-select",
                              {
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("fontFamily"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("fontFamily");
                                  },
                                },
                                model: {
                                  value: t.style.fontFamily,
                                  callback: function (e) {
                                    t.$set(t.style, "fontFamily", e);
                                  },
                                  expression: "style.fontFamily",
                                },
                              },
                              t._l(t.fontFamilyList, function (t) {
                                return e("el-option", {
                                  key: t.value,
                                  style: { fontFamily: t.value },
                                  attrs: { label: t.name, value: t.value },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.fontSize"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("fontSize"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("fontSize");
                                  },
                                },
                                model: {
                                  value: t.style.fontSize,
                                  callback: function (e) {
                                    t.$set(t.style, "fontSize", e);
                                  },
                                  expression: "style.fontSize",
                                },
                              },
                              t._l(t.fontSizeList, function (t) {
                                return e("el-option", {
                                  key: t,
                                  attrs: { label: t, value: t },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.lineHeight"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("lineHeight"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("lineHeight");
                                  },
                                },
                                model: {
                                  value: t.style.lineHeight,
                                  callback: function (e) {
                                    t.$set(t.style, "lineHeight", e);
                                  },
                                  expression: "style.lineHeight",
                                },
                              },
                              t._l(t.lineHeightList, function (t) {
                                return e("el-option", {
                                  key: t,
                                  attrs: { label: t, value: t },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e(
                        "div",
                        { staticClass: "row" },
                        [
                          e(
                            "div",
                            { staticClass: "btnGroup" },
                            [
                              e(
                                "el-tooltip",
                                {
                                  attrs: {
                                    content: t.$t("style.color"),
                                    placement: "bottom",
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "popover",
                                          rawName: "v-popover:popover",
                                          arg: "popover",
                                        },
                                      ],
                                      staticClass: "styleBtn",
                                      class: {
                                        disabled: t.checkDisabled("color"),
                                      },
                                    },
                                    [
                                      t._v(" A "),
                                      e("span", {
                                        staticClass: "colorShow",
                                        style: {
                                          backgroundColor:
                                            t.style.color || "#eee",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              e(
                                "el-tooltip",
                                {
                                  attrs: {
                                    content: t.$t("style.addFontWeight"),
                                    placement: "bottom",
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "styleBtn",
                                      class: {
                                        actived: "bold" === t.style.fontWeight,
                                        disabled: t.checkDisabled("fontWeight"),
                                      },
                                      on: { click: t.toggleFontWeight },
                                    },
                                    [t._v(" B ")]
                                  ),
                                ]
                              ),
                              e(
                                "el-tooltip",
                                {
                                  attrs: {
                                    content: t.$t("style.italic"),
                                    placement: "bottom",
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "styleBtn i",
                                      class: {
                                        actived: "italic" === t.style.fontStyle,
                                        disabled: t.checkDisabled("fontStyle"),
                                      },
                                      on: { click: t.toggleFontStyle },
                                    },
                                    [t._v(" I ")]
                                  ),
                                ]
                              ),
                              e(
                                "el-tooltip",
                                {
                                  attrs: {
                                    content: t.$t("style.textDecoration"),
                                    placement: "bottom",
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "popover",
                                          rawName: "v-popover:popover2",
                                          arg: "popover2",
                                        },
                                      ],
                                      staticClass: "styleBtn u",
                                      class: {
                                        disabled:
                                          t.checkDisabled("textDecoration"),
                                      },
                                      style: {
                                        textDecoration:
                                          t.style.textDecoration || "none",
                                      },
                                    },
                                    [t._v(" U ")]
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          e(
                            "el-popover",
                            {
                              ref: "popover",
                              attrs: {
                                placement: "bottom",
                                trigger: "click",
                                disabled: t.checkDisabled("color"),
                              },
                            },
                            [
                              e("Color", {
                                attrs: { color: t.style.color },
                                on: { change: t.changeFontColor },
                              }),
                            ],
                            1
                          ),
                          e(
                            "el-popover",
                            {
                              ref: "popover2",
                              attrs: {
                                placement: "bottom",
                                trigger: "click",
                                disabled: t.checkDisabled("textDecoration"),
                              },
                            },
                            [
                              e(
                                "el-radio-group",
                                {
                                  attrs: { size: "mini" },
                                  on: {
                                    change: function (e) {
                                      return t.update("textDecoration");
                                    },
                                  },
                                  model: {
                                    value: t.style.textDecoration,
                                    callback: function (e) {
                                      t.$set(t.style, "textDecoration", e);
                                    },
                                    expression: "style.textDecoration",
                                  },
                                },
                                [
                                  e(
                                    "el-radio-button",
                                    { attrs: { label: "underline" } },
                                    [t._v(t._s(t.$t("style.underline")))]
                                  ),
                                  e(
                                    "el-radio-button",
                                    { attrs: { label: "line-through" } },
                                    [t._v(t._s(t.$t("style.lineThrough")))]
                                  ),
                                  e(
                                    "el-radio-button",
                                    { attrs: { label: "overline" } },
                                    [t._v(t._s(t.$t("style.overline")))]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      e("div", { staticClass: "title" }, [
                        t._v(t._s(t.$t("style.border"))),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.color"))),
                            ]),
                            e("span", {
                              directives: [
                                {
                                  name: "popover",
                                  rawName: "v-popover:popover3",
                                  arg: "popover3",
                                },
                              ],
                              staticClass: "block",
                              class: {
                                disabled: t.checkDisabled("borderColor"),
                              },
                              style: {
                                width: "80px",
                                backgroundColor: t.style.borderColor,
                              },
                            }),
                            e(
                              "el-popover",
                              {
                                ref: "popover3",
                                attrs: {
                                  placement: "bottom",
                                  trigger: "click",
                                  disabled: t.checkDisabled("borderColor"),
                                },
                              },
                              [
                                e("Color", {
                                  attrs: { color: t.style.borderColor },
                                  on: { change: t.changeBorderColor },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.style"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("borderDasharray"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("borderDasharray");
                                  },
                                },
                                model: {
                                  value: t.style.borderDasharray,
                                  callback: function (e) {
                                    t.$set(t.style, "borderDasharray", e);
                                  },
                                  expression: "style.borderDasharray",
                                },
                              },
                              t._l(t.borderDasharrayList, function (t) {
                                return e("el-option", {
                                  key: t.value,
                                  attrs: { label: t.name, value: t.value },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.width"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("borderWidth"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("borderWidth");
                                  },
                                },
                                model: {
                                  value: t.style.borderWidth,
                                  callback: function (e) {
                                    t.$set(t.style, "borderWidth", e);
                                  },
                                  expression: "style.borderWidth",
                                },
                              },
                              t._l(t.borderWidthList, function (t) {
                                return e("el-option", {
                                  key: t,
                                  attrs: { label: t, value: t },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.borderRadius"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("borderRadius"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("borderRadius");
                                  },
                                },
                                model: {
                                  value: t.style.borderRadius,
                                  callback: function (e) {
                                    t.$set(t.style, "borderRadius", e);
                                  },
                                  expression: "style.borderRadius",
                                },
                              },
                              t._l(t.borderRadiusList, function (t) {
                                return e("el-option", {
                                  key: t,
                                  attrs: { label: t, value: t },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "title" }, [
                        t._v(t._s(t.$t("style.background"))),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.color"))),
                            ]),
                            e("span", {
                              directives: [
                                {
                                  name: "popover",
                                  rawName: "v-popover:popover4",
                                  arg: "popover4",
                                },
                              ],
                              staticClass: "block",
                              class: { disabled: t.checkDisabled("fillColor") },
                              style: { backgroundColor: t.style.fillColor },
                            }),
                            e(
                              "el-popover",
                              {
                                ref: "popover4",
                                attrs: {
                                  placement: "bottom",
                                  trigger: "click",
                                  disabled: t.checkDisabled("fillColor"),
                                },
                              },
                              [
                                e("Color", {
                                  attrs: { color: t.style.fillColor },
                                  on: { change: t.changeFillColor },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "title" }, [
                        t._v(t._s(t.$t("style.shape"))),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.shape"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "120px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("shape"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("shape");
                                  },
                                },
                                model: {
                                  value: t.style.shape,
                                  callback: function (e) {
                                    t.$set(t.style, "shape", e);
                                  },
                                  expression: "style.shape",
                                },
                              },
                              t._l(t.shapeList, function (t) {
                                return e("el-option", {
                                  key: t.value,
                                  attrs: { label: t.name, value: t.value },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "title" }, [
                        t._v(t._s(t.$t("style.line"))),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.color"))),
                            ]),
                            e("span", {
                              directives: [
                                {
                                  name: "popover",
                                  rawName: "v-popover:popover5",
                                  arg: "popover5",
                                },
                              ],
                              staticClass: "block",
                              class: { disabled: t.checkDisabled("lineColor") },
                              style: {
                                width: "80px",
                                backgroundColor: t.style.lineColor,
                              },
                            }),
                            e(
                              "el-popover",
                              {
                                ref: "popover5",
                                attrs: {
                                  placement: "bottom",
                                  trigger: "click",
                                  disabled: t.checkDisabled("lineColor"),
                                },
                              },
                              [
                                e("Color", {
                                  attrs: { color: t.style.lineColor },
                                  on: { change: t.changeLineColor },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.style"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("lineDasharray"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("lineDasharray");
                                  },
                                },
                                model: {
                                  value: t.style.lineDasharray,
                                  callback: function (e) {
                                    t.$set(t.style, "lineDasharray", e);
                                  },
                                  expression: "style.lineDasharray",
                                },
                              },
                              t._l(t.borderDasharrayList, function (t) {
                                return e("el-option", {
                                  key: t.value,
                                  attrs: { label: t.name, value: t.value },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.width"))),
                            ]),
                            e(
                              "el-select",
                              {
                                staticStyle: { width: "80px" },
                                attrs: {
                                  size: "mini",
                                  placeholder: "",
                                  disabled: t.checkDisabled("lineWidth"),
                                },
                                on: {
                                  change: function (e) {
                                    return t.update("lineWidth");
                                  },
                                },
                                model: {
                                  value: t.style.lineWidth,
                                  callback: function (e) {
                                    t.$set(t.style, "lineWidth", e);
                                  },
                                  expression: "style.lineWidth",
                                },
                              },
                              t._l(t.borderWidthList, function (t) {
                                return e("el-option", {
                                  key: t,
                                  attrs: { label: t, value: t },
                                });
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "title noTop" }, [
                        t._v(t._s(t.$t("style.nodePadding"))),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.horizontal"))),
                            ]),
                            e("el-slider", {
                              staticStyle: { width: "200px" },
                              attrs: { disabled: t.checkDisabled("paddingX") },
                              on: {
                                change: function (e) {
                                  return t.update("paddingX");
                                },
                              },
                              model: {
                                value: t.style.paddingX,
                                callback: function (e) {
                                  t.$set(t.style, "paddingX", e);
                                },
                                expression: "style.paddingX",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      e("div", { staticClass: "row" }, [
                        e(
                          "div",
                          { staticClass: "rowItem" },
                          [
                            e("span", { staticClass: "name" }, [
                              t._v(t._s(t.$t("style.vertical"))),
                            ]),
                            e("el-slider", {
                              staticStyle: { width: "200px" },
                              attrs: { disabled: t.checkDisabled("paddingY") },
                              on: {
                                change: function (e) {
                                  return t.update("paddingY");
                                },
                              },
                              model: {
                                value: t.style.paddingY,
                                callback: function (e) {
                                  t.$set(t.style, "paddingY", e);
                                },
                                expression: "style.paddingY",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ])
                  : t._e(),
              ],
              1
            ),
          ]
        );
      },
      wa = [],
      Ma = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          e(
            "div",
            { staticClass: "colorList" },
            t._l(t.colorList, function (i) {
              return e("span", {
                key: i,
                staticClass: "colorItem",
                style: { backgroundColor: i },
                on: {
                  click: function (e) {
                    return t.clickColorItem(i);
                  },
                },
              });
            }),
            0
          ),
          e(
            "div",
            { staticClass: "moreColor" },
            [
              e("span", [t._v(t._s(t.$t("color.moreColor")))]),
              e("el-color-picker", {
                attrs: { size: "mini" },
                on: { change: t.changeColor },
                model: {
                  value: t.selectColor,
                  callback: function (e) {
                    t.selectColor = e;
                  },
                  expression: "selectColor",
                },
              }),
            ],
            1
          ),
        ]);
      },
      ya = [],
      _a = {
        name: "Color",
        props: { color: { type: String, default: "" } },
        data() {
          return { colorList: Yi, selectColor: "" };
        },
        watch: {
          color() {
            this.selectColor = this.color;
          },
        },
        created() {
          this.selectColor = this.color;
        },
        methods: {
          clickColorItem(t) {
            this.$emit("change", t);
          },
          changeColor() {
            this.$emit("change", this.selectColor);
          },
        },
      },
      Na = _a,
      Da = (i("02e3"), Object(r["a"])(Na, Ma, ya, !1, null, "3f3112fa", null)),
      za = Da.exports,
      Sa = {
        name: "Style",
        components: { Sidebar: ga, Color: za },
        data() {
          return {
            supportActiveStyle: ne,
            fontSizeList: Hi,
            borderWidthList: ji,
            borderRadiusList: Vi,
            lineHeightList: Pi,
            activeNodes: [],
            activeTab: "normal",
            style: {
              shape: "",
              paddingX: 0,
              paddingY: 0,
              color: "",
              fontFamily: "",
              fontSize: "",
              lineHeight: "",
              textDecoration: "",
              fontWeight: "",
              fontStyle: "",
              borderWidth: "",
              borderColor: "",
              fillColor: "",
              borderDasharray: "",
              borderRadius: "",
              lineColor: "",
              lineDasharray: "",
              lineWidth: "",
            },
          };
        },
        computed: {
          fontFamilyList() {
            return sa[this.$i18n.locale] || sa.zh;
          },
          borderDasharrayList() {
            return la[this.$i18n.locale] || la.zh;
          },
          shapeList() {
            return ca[this.$i18n.locale] || ca.zh;
          },
        },
        created() {
          this.$bus.$on("node_active", (...t) => {
            this.$refs.sidebar && (this.$refs.sidebar.show = !1),
              this.$nextTick(() => {
                (this.activeTab = "normal"),
                  (this.activeNodes = t[1]),
                  this.$refs.sidebar &&
                    (this.$refs.sidebar.show = this.activeNodes.length > 0),
                  this.initNodeStyle();
              });
          });
        },
        methods: {
          handleTabClick() {
            this.initNodeStyle();
          },
          checkDisabled(t) {
            return (
              "active" === this.activeTab &&
              !this.supportActiveStyle.includes(t)
            );
          },
          initNodeStyle() {
            this.activeNodes.length <= 0
              ? (this.activeTab = "normal")
              : [
                  "shape",
                  "paddingX",
                  "paddingY",
                  "color",
                  "fontFamily",
                  "fontSize",
                  "lineHeight",
                  "textDecoration",
                  "fontWeight",
                  "fontStyle",
                  "borderWidth",
                  "borderColor",
                  "fillColor",
                  "borderDasharray",
                  "borderRadius",
                  "lineColor",
                  "lineDasharray",
                  "lineWidth",
                ].forEach((t) => {
                  this.style[t] = this.activeNodes[0].getStyle(
                    t,
                    !1,
                    "active" === this.activeTab
                  );
                });
          },
          update(t) {
            this.activeNodes.forEach((e) => {
              e.setStyle(t, this.style[t], "active" === this.activeTab);
            });
          },
          toggleFontWeight() {
            "bold" === this.style.fontWeight
              ? (this.style.fontWeight = "normal")
              : (this.style.fontWeight = "bold"),
              this.update("fontWeight");
          },
          toggleFontStyle() {
            "italic" === this.style.fontStyle
              ? (this.style.fontStyle = "normal")
              : (this.style.fontStyle = "italic"),
              this.update("fontStyle");
          },
          changeFontColor(t) {
            (this.style.color = t), this.update("color");
          },
          changeBorderColor(t) {
            (this.style.borderColor = t), this.update("borderColor");
          },
          changeLineColor(t) {
            (this.style.lineColor = t), this.update("lineColor");
          },
          changeFillColor(t) {
            (this.style.fillColor = t), this.update("fillColor");
          },
        },
      },
      $a = Sa,
      Fa = (i("4957"), Object(r["a"])($a, xa, wa, !1, null, "db1d7530", null)),
      ka = Fa.exports,
      Ea = function () {
        var t = this,
          e = t._self._c;
        return e(
          "Sidebar",
          { ref: "sidebar", attrs: { title: t.$t("baseStyle.title") } },
          [
            t.data
              ? e("div", { staticClass: "sidebarContent" }, [
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.background"))),
                  ]),
                  e(
                    "div",
                    { staticClass: "row" },
                    [
                      e(
                        "el-tabs",
                        {
                          staticClass: "tab",
                          model: {
                            value: t.activeTab,
                            callback: function (e) {
                              t.activeTab = e;
                            },
                            expression: "activeTab",
                          },
                        },
                        [
                          e(
                            "el-tab-pane",
                            {
                              attrs: {
                                label: t.$t("baseStyle.color"),
                                name: "color",
                              },
                            },
                            [
                              e("Color", {
                                attrs: { color: t.style.backgroundColor },
                                on: {
                                  change: (e) => {
                                    t.update("backgroundColor", e);
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                          e(
                            "el-tab-pane",
                            {
                              attrs: {
                                label: t.$t("baseStyle.image"),
                                name: "image",
                              },
                            },
                            [
                              e("ImgUpload", {
                                staticClass: "imgUpload",
                                on: {
                                  change: (e) => {
                                    t.update("backgroundImage", e);
                                  },
                                },
                                model: {
                                  value: t.style.backgroundImage,
                                  callback: function (e) {
                                    t.$set(t.style, "backgroundImage", e);
                                  },
                                  expression: "style.backgroundImage",
                                },
                              }),
                              e(
                                "div",
                                { staticClass: "rowItem" },
                                [
                                  e("span", { staticClass: "name" }, [
                                    t._v(t._s(t.$t("baseStyle.imageRepeat"))),
                                  ]),
                                  e(
                                    "el-select",
                                    {
                                      staticStyle: { width: "120px" },
                                      attrs: { size: "mini", placeholder: "" },
                                      on: {
                                        change: (e) => {
                                          t.update("backgroundRepeat", e);
                                        },
                                      },
                                      model: {
                                        value: t.style.backgroundRepeat,
                                        callback: function (e) {
                                          t.$set(
                                            t.style,
                                            "backgroundRepeat",
                                            e
                                          );
                                        },
                                        expression: "style.backgroundRepeat",
                                      },
                                    },
                                    t._l(t.backgroundRepeatList, function (t) {
                                      return e("el-option", {
                                        key: t.value,
                                        attrs: {
                                          label: t.name,
                                          value: t.value,
                                        },
                                      });
                                    }),
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.line"))),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.color"))),
                        ]),
                        e("span", {
                          directives: [
                            {
                              name: "popover",
                              rawName: "v-popover:popover",
                              arg: "popover",
                            },
                          ],
                          staticClass: "block",
                          style: { backgroundColor: t.style.lineColor },
                        }),
                        e(
                          "el-popover",
                          {
                            ref: "popover",
                            attrs: { placement: "bottom", trigger: "click" },
                          },
                          [
                            e("Color", {
                              attrs: { color: t.style.lineColor },
                              on: {
                                change: (e) => {
                                  t.update("lineColor", e);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.width"))),
                        ]),
                        e(
                          "el-select",
                          {
                            staticStyle: { width: "80px" },
                            attrs: { size: "mini", placeholder: "" },
                            on: {
                              change: (e) => {
                                t.update("lineWidth", e);
                              },
                            },
                            model: {
                              value: t.style.lineWidth,
                              callback: function (e) {
                                t.$set(t.style, "lineWidth", e);
                              },
                              expression: "style.lineWidth",
                            },
                          },
                          t._l(t.lineWidthList, function (t) {
                            return e("el-option", {
                              key: t,
                              attrs: { label: t, value: t },
                            });
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.style"))),
                        ]),
                        e(
                          "el-select",
                          {
                            staticStyle: { width: "80px" },
                            attrs: { size: "mini", placeholder: "" },
                            on: {
                              change: (e) => {
                                t.update("lineStyle", e);
                              },
                            },
                            model: {
                              value: t.style.lineStyle,
                              callback: function (e) {
                                t.$set(t.style, "lineStyle", e);
                              },
                              expression: "style.lineStyle",
                            },
                          },
                          t._l(t.lineStyleList, function (t) {
                            return e("el-option", {
                              key: t.value,
                              attrs: { label: t.name, value: t.value },
                            });
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.lineOfOutline"))),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.color"))),
                        ]),
                        e("span", {
                          directives: [
                            {
                              name: "popover",
                              rawName: "v-popover:popover2",
                              arg: "popover2",
                            },
                          ],
                          staticClass: "block",
                          style: {
                            backgroundColor: t.style.generalizationLineColor,
                          },
                        }),
                        e(
                          "el-popover",
                          {
                            ref: "popover2",
                            attrs: { placement: "bottom", trigger: "click" },
                          },
                          [
                            e("Color", {
                              attrs: { color: t.style.generalizationLineColor },
                              on: {
                                change: (e) => {
                                  t.update("generalizationLineColor", e);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.width"))),
                        ]),
                        e(
                          "el-select",
                          {
                            staticStyle: { width: "80px" },
                            attrs: { size: "mini", placeholder: "" },
                            on: {
                              change: (e) => {
                                t.update("generalizationLineWidth", e);
                              },
                            },
                            model: {
                              value: t.style.generalizationLineWidth,
                              callback: function (e) {
                                t.$set(t.style, "generalizationLineWidth", e);
                              },
                              expression: "style.generalizationLineWidth",
                            },
                          },
                          t._l(t.lineWidthList, function (t) {
                            return e("el-option", {
                              key: t,
                              attrs: { label: t, value: t },
                            });
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.nodePadding"))),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.horizontal"))),
                        ]),
                        e("el-slider", {
                          staticStyle: { width: "200px" },
                          on: {
                            change: (e) => {
                              t.update("paddingX", e);
                            },
                          },
                          model: {
                            value: t.style.paddingX,
                            callback: function (e) {
                              t.$set(t.style, "paddingX", e);
                            },
                            expression: "style.paddingX",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.vertical"))),
                        ]),
                        e("el-slider", {
                          staticStyle: { width: "200px" },
                          on: {
                            change: (e) => {
                              t.update("paddingY", e);
                            },
                          },
                          model: {
                            value: t.style.paddingY,
                            callback: function (e) {
                              t.$set(t.style, "paddingY", e);
                            },
                            expression: "style.paddingY",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.image"))),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.maximumWidth"))),
                        ]),
                        e("el-slider", {
                          staticStyle: { width: "140px" },
                          attrs: { min: 10, max: 300 },
                          on: {
                            change: (e) => {
                              t.update("imgMaxWidth", e);
                            },
                          },
                          model: {
                            value: t.style.imgMaxWidth,
                            callback: function (e) {
                              t.$set(t.style, "imgMaxWidth", e);
                            },
                            expression: "style.imgMaxWidth",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.maximumHeight"))),
                        ]),
                        e("el-slider", {
                          staticStyle: { width: "140px" },
                          attrs: { min: 10, max: 300 },
                          on: {
                            change: (e) => {
                              t.update("imgMaxHeight", e);
                            },
                          },
                          model: {
                            value: t.style.imgMaxHeight,
                            callback: function (e) {
                              t.$set(t.style, "imgMaxHeight", e);
                            },
                            expression: "style.imgMaxHeight",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.icon"))),
                  ]),
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "rowItem" },
                      [
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.$t("baseStyle.size"))),
                        ]),
                        e("el-slider", {
                          staticStyle: { width: "200px" },
                          attrs: { min: 12, max: 50 },
                          on: {
                            change: (e) => {
                              t.update("iconSize", e);
                            },
                          },
                          model: {
                            value: t.style.iconSize,
                            callback: function (e) {
                              t.$set(t.style, "iconSize", e);
                            },
                            expression: "style.iconSize",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  e("div", { staticClass: "title noTop" }, [
                    t._v(t._s(t.$t("baseStyle.nodeMargin"))),
                  ]),
                  e(
                    "div",
                    { staticClass: "row column" },
                    [
                      e(
                        "el-tabs",
                        {
                          staticClass: "tab",
                          on: { "tab-click": t.initMarginStyle },
                          model: {
                            value: t.marginActiveTab,
                            callback: function (e) {
                              t.marginActiveTab = e;
                            },
                            expression: "marginActiveTab",
                          },
                        },
                        [
                          e("el-tab-pane", {
                            attrs: {
                              label: t.$t("baseStyle.level2Node"),
                              name: "second",
                            },
                          }),
                          e("el-tab-pane", {
                            attrs: {
                              label: t.$t("baseStyle.belowLevel2Node"),
                              name: "node",
                            },
                          }),
                        ],
                        1
                      ),
                      e(
                        "div",
                        { staticClass: "rowItem" },
                        [
                          e("span", { staticClass: "name" }, [
                            t._v(t._s(t.$t("baseStyle.horizontal"))),
                          ]),
                          e("el-slider", {
                            staticStyle: { width: "200px" },
                            attrs: { max: 200 },
                            on: {
                              change: (e) => {
                                t.updateMargin("marginX", e);
                              },
                            },
                            model: {
                              value: t.style.marginX,
                              callback: function (e) {
                                t.$set(t.style, "marginX", e);
                              },
                              expression: "style.marginX",
                            },
                          }),
                        ],
                        1
                      ),
                      e(
                        "div",
                        { staticClass: "rowItem" },
                        [
                          e("span", { staticClass: "name" }, [
                            t._v(t._s(t.$t("baseStyle.vertical"))),
                          ]),
                          e("el-slider", {
                            staticStyle: { width: "200px" },
                            attrs: { max: 200 },
                            on: {
                              change: (e) => {
                                t.updateMargin("marginY", e);
                              },
                            },
                            model: {
                              value: t.style.marginY,
                              callback: function (e) {
                                t.$set(t.style, "marginY", e);
                              },
                              expression: "style.marginY",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ])
              : t._e(),
          ]
        );
      },
      La = [],
      Ta = {
        name: "BaseStyle",
        components: { Sidebar: ga, Color: za, ImgUpload: y },
        props: {
          data: { type: [Object, null], default: null },
          mindMap: { type: Object },
        },
        data() {
          return {
            lineWidthList: Gi,
            activeTab: "color",
            marginActiveTab: "second",
            style: {
              backgroundColor: "",
              lineColor: "",
              lineWidth: "",
              lineStyle: "",
              generalizationLineWidth: "",
              generalizationLineColor: "",
              paddingX: 0,
              paddingY: 0,
              imgMaxWidth: 0,
              imgMaxHeight: 0,
              iconSize: 0,
              backgroundImage: "",
              backgroundRepeat: "no-repeat",
              marginX: 0,
              marginY: 0,
            },
          };
        },
        computed: {
          lineStyleList() {
            return ra[this.$i18n.locale] || ra.zh;
          },
          backgroundRepeatList() {
            return da[this.$i18n.locale] || da.zh;
          },
        },
        created() {
          this.$bus.$on("showBaseStyle", () => {
            (this.$refs.sidebar.show = !1),
              this.$nextTick(() => {
                (this.$refs.sidebar.show = !0), this.initStyle();
              });
          });
        },
        methods: {
          initStyle() {
            [
              "backgroundColor",
              "lineWidth",
              "lineStyle",
              "lineColor",
              "generalizationLineWidth",
              "generalizationLineColor",
              "paddingX",
              "paddingY",
              "imgMaxWidth",
              "imgMaxHeight",
              "iconSize",
              "backgroundImage",
              "backgroundRepeat",
            ].forEach((t) => {
              (this.style[t] = this.mindMap.getThemeConfig(t)),
                "backgroundImage" === t &&
                  "none" === this.style[t] &&
                  (this.style[t] = "");
            }),
              this.initMarginStyle();
          },
          initMarginStyle() {
            ["marginX", "marginY"].forEach((t) => {
              this.style[t] =
                this.mindMap.getThemeConfig()[this.marginActiveTab][t];
            });
          },
          update(t, e) {
            (this.style[t] = "backgroundImage" === t && "none" === e ? "" : e),
              (this.data.theme.config[t] = e),
              this.mindMap.setThemeConfig(this.data.theme.config),
              Di({
                theme: {
                  template: this.mindMap.getTheme(),
                  config: this.data.theme.config,
                },
              });
          },
          updateMargin(t, e) {
            (this.style[t] = e),
              this.data.theme.config[this.marginActiveTab] ||
                (this.data.theme.config[this.marginActiveTab] = {}),
              (this.data.theme.config[this.marginActiveTab][t] = e),
              this.mindMap.setThemeConfig(this.data.theme.config);
          },
        },
      },
      Ba = Ta,
      Aa = (i("fb0f"), Object(r["a"])(Ba, Ea, La, !1, null, "1c7686fa", null)),
      Ia = Aa.exports,
      Ra = function () {
        var t = this,
          e = t._self._c;
        return e(
          "Sidebar",
          { ref: "sidebar", attrs: { title: t.$t("style.title") } },
          [
            e(
              "div",
              { staticClass: "themeList" },
              t._l(t.themeList, function (i) {
                return e(
                  "div",
                  {
                    key: i.value,
                    staticClass: "themeItem",
                    class: { active: i.value === t.theme },
                    on: {
                      click: function (e) {
                        return t.useTheme(i);
                      },
                    },
                  },
                  [
                    e("div", { staticClass: "imgBox" }, [
                      e("img", { attrs: { src: i.img, alt: "" } }),
                    ]),
                    e("div", { staticClass: "name" }, [t._v(t._s(i.name))]),
                  ]
                );
              }),
              0
            ),
          ]
        );
      },
      Oa = [],
      Wa = {
        name: "Theme",
        components: { Sidebar: ga },
        props: { mindMap: { type: Object } },
        data() {
          return { themeList: at, theme: "" };
        },
        created() {
          this.$bus.$on("showTheme", () => {
            (this.$refs.sidebar.show = !1),
              this.$nextTick(() => {
                (this.theme = this.mindMap.getTheme()),
                  (this.$refs.sidebar.show = !0);
              });
          });
        },
        methods: {
          useTheme(t) {
            (this.theme = t.value),
              this.mindMap.setTheme(t.value),
              Di({
                theme: {
                  template: t.value,
                  config: this.mindMap.getCustomThemeConfig(),
                },
              });
          },
        },
      },
      Ha = Wa,
      Pa = (i("377e"), Object(r["a"])(Ha, Ra, Oa, !1, null, "6ebd017a", null)),
      Ya = Pa.exports,
      ja = function () {
        var t = this,
          e = t._self._c;
        return e(
          "Sidebar",
          { ref: "sidebar", attrs: { title: t.$t("strusture.title") } },
          [
            e(
              "div",
              { staticClass: "layoutList" },
              t._l(t.layoutList, function (i) {
                return e(
                  "div",
                  {
                    key: i.value,
                    staticClass: "layoutItem",
                    class: { active: i.value === t.layout },
                    on: {
                      click: function (e) {
                        return t.useLayout(i);
                      },
                    },
                  },
                  [
                    e("div", { staticClass: "imgBox" }, [
                      e("img", { attrs: { src: i.img, alt: "" } }),
                    ]),
                    e("div", { staticClass: "name" }, [t._v(t._s(i.name))]),
                  ]
                );
              }),
              0
            ),
          ]
        );
      },
      Xa = [],
      Va = {
        name: "Structure",
        components: { Sidebar: ga },
        props: { mindMap: { type: Object } },
        data() {
          return { layoutList: et, layout: "" };
        },
        created() {
          this.$bus.$on("showStructure", () => {
            (this.$refs.sidebar.show = !1),
              this.$nextTick(() => {
                (this.layout = this.mindMap.getLayout()),
                  (this.$refs.sidebar.show = !0);
              });
          });
        },
        methods: {
          useLayout(t) {
            (this.layout = t.value),
              this.mindMap.setLayout(t.value),
              Di({ layout: t.value });
          },
        },
      },
      Ga = Va,
      Za = (i("649d"), Object(r["a"])(Ga, ja, Xa, !1, null, "1f7d1fa4", null)),
      Ua = Za.exports,
      Ja = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "countContainer" }, [
          e("div", { staticClass: "item" }, [
            e("span", { staticClass: "name" }, [
              t._v(t._s(t.$t("count.words"))),
            ]),
            e("span", { staticClass: "value" }, [t._v(t._s(t.words))]),
          ]),
          e("div", { staticClass: "item" }, [
            e("span", { staticClass: "name" }, [
              t._v(t._s(t.$t("count.nodes"))),
            ]),
            e("span", { staticClass: "value" }, [t._v(t._s(t.num))]),
          ]),
        ]);
      },
      Ka = [],
      qa = {
        name: "Count",
        props: {},
        data() {
          return { words: 0, num: 0 };
        },
        created() {
          this.$bus.$on("data_change", (t) => {
            (this.words = 0), (this.num = 0), this.walk(t);
          });
        },
        methods: {
          walk(t) {
            this.num++,
              (this.words += (String(t.data.text) || "").length),
              t.children &&
                t.children.length > 0 &&
                t.children.forEach((t) => {
                  this.walk(t);
                });
          },
        },
      },
      Qa = qa,
      tn = (i("18c4"), Object(r["a"])(Qa, Ja, Ka, !1, null, "6b5bac23", null)),
      en = tn.exports,
      an = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "navigatorContainer" }, [
          e(
            "div",
            { staticClass: "item" },
            [
              e(
                "el-select",
                {
                  staticStyle: { width: "100px" },
                  attrs: { size: "small" },
                  on: { change: t.onLangChange },
                  model: {
                    value: t.lang,
                    callback: function (e) {
                      t.lang = e;
                    },
                    expression: "lang",
                  },
                },
                t._l(t.langList, function (t) {
                  return e("el-option", {
                    key: t.value,
                    attrs: { label: t.name, value: t.value },
                  });
                }),
                1
              ),
            ],
            1
          ),
          e(
            "div",
            { staticClass: "item" },
            [
              e(
                "el-checkbox",
                {
                  on: { change: t.toggleMiniMap },
                  model: {
                    value: t.openMiniMap,
                    callback: function (e) {
                      t.openMiniMap = e;
                    },
                    expression: "openMiniMap",
                  },
                },
                [t._v(t._s(t.$t("navigatorToolbar.openMiniMap")))]
              ),
            ],
            1
          ),
          e(
            "div",
            { staticClass: "item" },
            [
              e("el-switch", {
                attrs: {
                  "active-text": t.$t("navigatorToolbar.readonly"),
                  "inactive-text": t.$t("navigatorToolbar.edit"),
                },
                on: { change: t.readonlyChange },
                model: {
                  value: t.isReadonly,
                  callback: function (e) {
                    t.isReadonly = e;
                  },
                  expression: "isReadonly",
                },
              }),
            ],
            1
          ),
          e(
            "div",
            { staticClass: "item" },
            [e("Scale", { attrs: { mindMap: t.mindMap } })],
            1
          ),
          e(
            "div",
            { staticClass: "item" },
            [e("Fullscreen", { attrs: { mindMap: t.mindMap } })],
            1
          ),
        ]);
      },
      nn = [],
      on = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "scaleContainer" },
          [
            e(
              "el-tooltip",
              {
                staticClass: "item",
                attrs: {
                  effect: "dark",
                  content: t.$t("scale.zoomOut"),
                  placement: "top",
                },
              },
              [
                e("div", {
                  staticClass: "btn el-icon-minus",
                  on: { click: t.narrow },
                }),
              ]
            ),
            e("div", { staticClass: "scaleInfo" }, [
              t._v(t._s(t.scaleNum) + "%"),
            ]),
            e(
              "el-tooltip",
              {
                staticClass: "item",
                attrs: {
                  effect: "dark",
                  content: t.$t("scale.zoomIn"),
                  placement: "top",
                },
              },
              [
                e("div", {
                  staticClass: "btn el-icon-plus",
                  on: { click: t.enlarge },
                }),
              ]
            ),
          ],
          1
        );
      },
      sn = [],
      ln = {
        name: "Scale",
        props: { mindMap: { type: Object } },
        data() {
          return { scaleNum: 100 };
        },
        watch: {
          mindMap(t, e) {
            t &&
              !e &&
              (this.mindMap.on("scale", (t) => {
                this.scaleNum = this.toPer(t);
              }),
              (this.scaleNum = this.toPer(this.mindMap.view.scale)));
          },
        },
        methods: {
          toPer(t) {
            return (100 * t).toFixed(0);
          },
          narrow() {
            this.mindMap.view.narrow();
          },
          enlarge() {
            this.mindMap.view.enlarge();
          },
        },
      },
      rn = ln,
      dn = (i("5b00"), Object(r["a"])(rn, on, sn, !1, null, "748ba0ea", null)),
      hn = dn.exports,
      cn = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "fullscreenContainer" },
          [
            e(
              "el-tooltip",
              {
                staticClass: "item",
                attrs: {
                  effect: "dark",
                  content: t.$t("fullscreen.fullscreen"),
                  placement: "top",
                },
              },
              [
                e("div", {
                  staticClass: "btn iconfont iconquanping",
                  on: { click: t.toFullscreen },
                }),
              ]
            ),
          ],
          1
        );
      },
      pn = [],
      mn = {
        name: "Fullscreen",
        props: { mindMap: { type: Object } },
        data() {
          return {};
        },
        created() {
          document[li] = () => {
            setTimeout(() => {
              this.mindMap.resize();
            }, 1e3);
          };
        },
        methods: {
          toFullscreen() {
            ri(this.mindMap.el);
          },
        },
      },
      un = mn,
      gn = (i("1254"), Object(r["a"])(un, cn, pn, !1, null, "9170e144", null)),
      fn = gn.exports,
      vn = i("a925"),
      bn = {
        baseStyle: {
          title: "BaseStyle",
          background: "Background",
          color: "Color",
          image: "Image",
          imageRepeat: "Image repeat",
          line: "Line",
          width: "Width",
          style: "Style",
          lineOfOutline: "Line of outline",
          nodePadding: "Node padding",
          nodeMargin: "Node margin",
          horizontal: "Horizontal",
          vertical: "Vertical",
          maximumWidth: "Max width",
          maximumHeight: "Max height",
          icon: "Icon",
          size: "Size",
          level2Node: "Level2 node",
          belowLevel2Node: "Below level2 node",
        },
        color: { moreColor: "More color" },
        contextmenu: {
          insertSiblingNode: "Insert sibling node",
          insertChildNode: "Insert child node",
          insertSummary: "Insert summary",
          moveUpNode: "Move up node",
          moveDownNode: "Move down node",
          deleteNode: "Delete node",
          copyNode: "Copy node",
          cutNode: "Cut node",
          pasteNode: "Paste node",
          backCenter: "Back center",
          expandAll: "Expand all",
          unExpandAll: "Un expand all",
          expandTo: "Expand to",
          arrangeLayout: "Arrange layout",
          level1: "Level1",
          level2: "Level2",
          level3: "Level3",
          level4: "Level4",
          level5: "Level5",
          level6: "Level6",
        },
        count: { words: "Words", nodes: "Nodes" },
        dialog: { cancel: "Cancel", confirm: "Confirm" },
        export: {
          title: "Export",
          filename: "Filename",
          include: "Is include config like theme and structure",
          dedicatedFile: "Dedicated file",
          jsonFile: "json file",
          imageFile: "Image file",
          svgFile: "svg file",
          pdfFile: "pdf file",
          tips: "tips：.smm and .json file can be import",
        },
        fullscreen: { fullscreen: "Fullscreen" },
        import: {
          title: "Import",
          selectFile: "Select file",
          supportFile: "Support .smm、.json、.xmind、.xlsx file",
        },
        navigatorToolbar: {
          openMiniMap: "Minimap",
          readonly: "Preview",
          edit: "Edit",
        },
        nodeHyperlink: { title: "Link", link: "Href", name: "Name" },
        nodeIcon: { title: "Icon" },
        nodeImage: { title: "Image", imgTitle: "Title" },
        nodeNote: { title: "Note" },
        nodeTag: { title: "Tag", addTip: "Press Enter to add" },
        outline: { title: "Outline" },
        scale: { zoomIn: "Zoom in", zoomOut: "Zoom out" },
        shortcutKey: { title: "Shortcut key" },
        strusture: { title: "Strusture" },
        style: {
          title: "Node style",
          normal: "Normal",
          active: "Active",
          text: "Text",
          fontFamily: "Font family",
          fontSize: "Font size",
          lineHeight: "Line height",
          color: "color",
          addFontWeight: "add font weight",
          italic: "Italic",
          textDecoration: "Text decoration",
          underline: "Underline",
          lineThrough: "Line through",
          overline: "Overline",
          border: "Border",
          style: "Style",
          width: "Width",
          borderRadius: "Border radius",
          background: "Background",
          shape: "Shape",
          line: "Line",
          nodePadding: "Node padding",
          horizontal: "Horizontal",
          vertical: "Vertical",
        },
        theme: { title: "Theme" },
        toolbar: {
          undo: "Undo",
          redo: "Redo",
          insertSiblingNode: "Insert sibling node",
          insertChildNode: "Insert child node",
          deleteNode: "Delete node",
          image: "Image",
          icon: "Icon",
          link: "Link",
          note: "Note",
          tag: "Tag",
          summary: "Summary",
          displayOutline: "Display outline",
          baseStyle: "Base style",
          theme: "Theme",
          strusture: "Strusture",
          newFile: "New file",
          openFile: "Open file",
          saveAs: "Save as",
          import: "Import",
          export: "Export",
          shortcutKey: "Shortcut key",
        },
      },
      Cn = {
        baseStyle: {
          title: "基础样式",
          background: "背景",
          color: "颜色",
          image: "图片",
          imageRepeat: "图片重复",
          line: "连线",
          width: "粗细",
          style: "风格",
          lineOfOutline: "概要的连线",
          nodePadding: "节点内边距",
          nodeMargin: "节点外边距",
          horizontal: "水平",
          vertical: "垂直",
          maximumWidth: "显示的最大宽度",
          maximumHeight: "显示的最大高度",
          icon: "图标",
          size: "大小",
          level2Node: "二级节点",
          belowLevel2Node: "三级及以下节点",
        },
        color: { moreColor: "更多颜色" },
        contextmenu: {
          insertSiblingNode: "插入同级节点",
          insertChildNode: "插入子级节点",
          insertSummary: "插入概要",
          moveUpNode: "上移节点",
          moveDownNode: "下移节点",
          deleteNode: "删除节点",
          copyNode: "复制节点",
          cutNode: "剪切节点",
          pasteNode: "粘贴节点",
          backCenter: "回到中心",
          expandAll: "展开所有",
          unExpandAll: "收起所有",
          expandTo: "展开到",
          arrangeLayout: "一键整理布局",
          level1: "一级主题",
          level2: "二级主题",
          level3: "三级主题",
          level4: "四级主题",
          level5: "五级主题",
          level6: "六级主题",
        },
        count: { words: "字数", nodes: "节点" },
        dialog: { cancel: "取 消", confirm: "确 定" },
        export: {
          title: "导出",
          filename: "导出文件名称",
          include: "是否包含主题、结构等配置数据",
          dedicatedFile: "专有文件",
          jsonFile: "json文件",
          imageFile: "图片文件",
          svgFile: "svg文件",
          pdfFile: "pdf文件",
          tips: "tips：.smm和.json文件可用于导入",
        },
        fullscreen: { fullscreen: "全屏" },
        import: {
          title: "导入",
          selectFile: "选取文件",
          supportFile: "支持.smm、.json、.xmind、.xlsx文件",
        },
        navigatorToolbar: {
          openMiniMap: "开启小地图",
          readonly: "只读模式",
          edit: "编辑模式",
        },
        nodeHyperlink: { title: "超链接", link: "链接", name: "名称" },
        nodeIcon: { title: "图标" },
        nodeImage: { title: "图片", imgTitle: "图片标题" },
        nodeNote: { title: "备注" },
        nodeTag: { title: "标签", addTip: "请按回车键添加" },
        outline: { title: "大纲" },
        scale: { zoomIn: "放大", zoomOut: "缩小" },
        shortcutKey: { title: "快捷键" },
        strusture: { title: "结构" },
        style: {
          title: "节点样式",
          normal: "常态",
          active: "选中状态",
          text: "文字",
          fontFamily: "字体",
          fontSize: "字号",
          lineHeight: "行高",
          color: "颜色",
          addFontWeight: "加粗",
          italic: "斜体",
          textDecoration: "划线",
          underline: "下划线",
          lineThrough: "中划线",
          overline: "上划线",
          border: "边框",
          style: "样式",
          width: "宽度",
          borderRadius: "圆角",
          background: "背景",
          shape: "形状",
          line: "线条",
          nodePadding: "节点内边距",
          horizontal: "水平",
          vertical: "垂直",
        },
        theme: { title: "主题" },
        toolbar: {
          undo: "回退",
          redo: "前进",
          insertSiblingNode: "插入同级节点",
          insertChildNode: "插入子节点",
          deleteNode: "删除节点",
          image: "图片",
          icon: "图标",
          link: "超链接",
          note: "备注",
          tag: "标签",
          summary: "概要",
          displayOutline: "显示大纲",
          baseStyle: "基础样式",
          theme: "主题",
          strusture: "结构",
          newFile: "新建",
          openFile: "打开",
          saveAs: "另存为",
          import: "导入",
          export: "导出",
          shortcutKey: "快捷键",
        },
      },
      xn = { zh: Cn, en: bn };
    a["default"].use(vn["a"]);
    const wn = new vn["a"]({ locale: Si(), messages: xn });
    var Mn = wn,
      yn = {
        name: "NavigatorToolbar",
        components: { Scale: hn, Fullscreen: fn },
        props: { mindMap: { type: Object } },
        data() {
          return { langList: Qi, lang: Si(), isReadonly: !1, openMiniMap: !1 };
        },
        mounted() {
          this.toggleMiniMap(this.openMiniMap);
        },
        methods: {
          readonlyChange(t) {
            this.mindMap.setMode(t ? "readonly" : "edit");
          },
          toggleMiniMap(t) {
            this.$bus.$emit("toggle_mini_map", t);
          },
          onLangChange(t) {
            (Mn.locale = t), zi(t);
          },
        },
      },
      _n = yn,
      Nn = (i("3b61"), Object(r["a"])(_n, an, nn, !1, null, "2078be47", null)),
      Dn = Nn.exports,
      zn = function () {
        var t = this,
          e = t._self._c;
        return e(
          "Sidebar",
          { ref: "sidebar", attrs: { title: t.$t("shortcutKey.title") } },
          [
            e(
              "div",
              { staticClass: "box" },
              t._l(t.shortcutKeyList, function (i) {
                return e(
                  "div",
                  { key: i.type },
                  [
                    e("div", { staticClass: "title" }, [t._v(t._s(i.type))]),
                    t._l(i.list, function (i) {
                      return e("div", { key: i.value, staticClass: "list" }, [
                        e("div", { staticClass: "item" }, [
                          i.icon
                            ? e("span", {
                                staticClass: "icon iconfont",
                                class: [i.icon],
                              })
                            : t._e(),
                          e("span", { staticClass: "name" }, [
                            t._v(t._s(i.name)),
                          ]),
                          e("div", { staticClass: "value" }, [
                            t._v(t._s(i.value)),
                          ]),
                        ]),
                      ]);
                    }),
                  ],
                  2
                );
              }),
              0
            ),
          ]
        );
      },
      Sn = [],
      $n = {
        name: "ShortcutKey",
        components: { Sidebar: ga },
        data() {
          return {};
        },
        computed: {
          shortcutKeyList() {
            return ha[this.$i18n.locale] || ha.zh;
          },
        },
        created() {
          this.$bus.$on("showShortcutKey", () => {
            (this.$refs.sidebar.show = !1),
              this.$nextTick(() => {
                this.$refs.sidebar.show = !0;
              });
          });
        },
      },
      Fn = $n,
      kn = (i("3c2a"), Object(r["a"])(Fn, zn, Sn, !1, null, "3cb2fe21", null)),
      En = kn.exports,
      Ln = function () {
        var t = this,
          e = t._self._c;
        return t.isShow
          ? e(
              "div",
              {
                staticClass: "contextmenuContainer listBox",
                style: { left: t.left + "px", top: t.top + "px" },
              },
              [
                "node" === t.type
                  ? [
                      e(
                        "div",
                        {
                          staticClass: "item",
                          class: { disabled: t.insertNodeBtnDisabled },
                          on: {
                            click: function (e) {
                              return t.exec(
                                "INSERT_NODE",
                                t.insertNodeBtnDisabled
                              );
                            },
                          },
                        },
                        [
                          t._v(
                            " " +
                              t._s(t.$t("contextmenu.insertSiblingNode")) +
                              " "
                          ),
                          e("span", { staticClass: "desc" }, [t._v("Enter")]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("INSERT_CHILD_NODE");
                            },
                          },
                        },
                        [
                          t._v(
                            " " +
                              t._s(t.$t("contextmenu.insertChildNode")) +
                              " "
                          ),
                          e("span", { staticClass: "desc" }, [t._v("Tab")]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          class: { disabled: t.insertNodeBtnDisabled },
                          on: {
                            click: function (e) {
                              return t.exec("ADD_GENERALIZATION");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("contextmenu.insertSummary")) + " "
                          ),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + S"),
                          ]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          class: { disabled: t.upNodeBtnDisabled },
                          on: {
                            click: function (e) {
                              return t.exec("UP_NODE");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("contextmenu.moveUpNode")) + " "
                          ),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + ↑"),
                          ]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          class: { disabled: t.downNodeBtnDisabled },
                          on: {
                            click: function (e) {
                              return t.exec("DOWN_NODE");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("contextmenu.moveDownNode")) + " "
                          ),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + ↓"),
                          ]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item danger",
                          on: {
                            click: function (e) {
                              return t.exec("REMOVE_NODE");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("contextmenu.deleteNode")) + " "
                          ),
                          e("span", { staticClass: "desc" }, [t._v("Delete")]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("COPY_NODE");
                            },
                          },
                        },
                        [
                          t._v(" " + t._s(t.$t("contextmenu.copyNode")) + " "),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + C"),
                          ]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("CUT_NODE");
                            },
                          },
                        },
                        [
                          t._v(" " + t._s(t.$t("contextmenu.cutNode")) + " "),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + X"),
                          ]),
                        ]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          class: { disabled: null === t.copyData },
                          on: {
                            click: function (e) {
                              return t.exec("PASTE_NODE");
                            },
                          },
                        },
                        [
                          t._v(" " + t._s(t.$t("contextmenu.pasteNode")) + " "),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + V"),
                          ]),
                        ]
                      ),
                    ]
                  : t._e(),
                "svg" === t.type
                  ? [
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("RETURN_CENTER");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("contextmenu.backCenter")) + " ")]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("EXPAND_ALL");
                            },
                          },
                        },
                        [t._v(" " + t._s(t.$t("contextmenu.expandAll")) + " ")]
                      ),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("UNEXPAND_ALL");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("contextmenu.unExpandAll")) + " "
                          ),
                        ]
                      ),
                      e("div", { staticClass: "item" }, [
                        t._v(" " + t._s(t.$t("contextmenu.expandTo")) + " "),
                        e(
                          "div",
                          { staticClass: "subItems listBox" },
                          t._l(t.expandList, function (i, a) {
                            return e(
                              "div",
                              {
                                key: i,
                                staticClass: "item",
                                on: {
                                  click: function (e) {
                                    return t.exec(
                                      "UNEXPAND_TO_LEVEL",
                                      !1,
                                      a + 1
                                    );
                                  },
                                },
                              },
                              [t._v(" " + t._s(i) + " ")]
                            );
                          }),
                          0
                        ),
                      ]),
                      e(
                        "div",
                        {
                          staticClass: "item",
                          on: {
                            click: function (e) {
                              return t.exec("RESET_LAYOUT");
                            },
                          },
                        },
                        [
                          t._v(
                            " " + t._s(t.$t("contextmenu.arrangeLayout")) + " "
                          ),
                          e("span", { staticClass: "desc" }, [
                            t._v("Ctrl + L"),
                          ]),
                        ]
                      ),
                    ]
                  : t._e(),
              ],
              2
            )
          : t._e();
      },
      Tn = [],
      Bn = {
        name: "Contextmenu",
        props: { mindMap: { type: Object } },
        data() {
          return {
            isShow: !1,
            left: 0,
            top: 0,
            node: null,
            copyData: null,
            type: "",
            isMousedown: !1,
            mosuedownX: 0,
            mosuedownY: 0,
          };
        },
        computed: {
          expandList() {
            return [
              this.$t("contextmenu.level1"),
              this.$t("contextmenu.level2"),
              this.$t("contextmenu.level3"),
              this.$t("contextmenu.level4"),
              this.$t("contextmenu.level5"),
              this.$t("contextmenu.level6"),
            ];
          },
          insertNodeBtnDisabled() {
            return !this.node || this.node.isRoot;
          },
          upNodeBtnDisabled() {
            if (!this.node || this.node.isRoot) return !0;
            let t =
              0 === this.node.parent.children.findIndex((t) => t === this.node);
            return t;
          },
          downNodeBtnDisabled() {
            if (!this.node || this.node.isRoot) return !0;
            let t = this.node.parent.children,
              e = t.findIndex((t) => t === this.node) === t.length - 1;
            return e;
          },
        },
        created() {
          this.$bus.$on("node_contextmenu", this.show),
            this.$bus.$on("node_click", this.hide),
            this.$bus.$on("draw_click", this.hide),
            this.$bus.$on("expand_btn_click", this.hide),
            this.$bus.$on("svg_mousedown", this.onMousedown),
            this.$bus.$on("mouseup", this.onMouseup),
            this.mindMap.keyCommand.addShortcut("Control+c", this.copy),
            this.mindMap.keyCommand.addShortcut("Control+v", this.paste),
            this.mindMap.keyCommand.addShortcut("Control+x", this.cut);
        },
        beforeDestroy() {
          this.$bus.$off("node_contextmenu", this.show),
            this.$bus.$off("node_click", this.hide),
            this.$bus.$off("draw_click", this.hide),
            this.$bus.$off("expand_btn_click", this.hide),
            this.$bus.$on("svg_mousedown", this.onMousedown),
            this.$bus.$on("mouseup", this.onMouseup),
            this.mindMap.keyCommand.removeShortcut("Control+c", this.copy),
            this.mindMap.keyCommand.removeShortcut("Control+v", this.paste),
            this.mindMap.keyCommand.removeShortcut("Control+x", this.cut);
        },
        methods: {
          show(t, e) {
            (this.type = "node"),
              (this.left = t.clientX + 10),
              (this.top = t.clientY + 10),
              (this.isShow = !0),
              (this.node = e);
          },
          onMousedown(t) {
            3 === t.which &&
              ((this.mosuedownX = t.clientX),
              (this.mosuedownY = t.clientY),
              (this.isMousedown = !0));
          },
          onMouseup(t) {
            this.isMousedown &&
              ((this.isMousedown = !1),
              Math.abs(this.mosuedownX - t.clientX) > 3 ||
              Math.abs(this.mosuedownY - t.clientY) > 3
                ? this.hide()
                : this.show2(t));
          },
          show2(t) {
            (this.type = "svg"),
              (this.left = t.clientX + 10),
              (this.top = t.clientY + 10),
              (this.isShow = !0);
          },
          hide() {
            (this.isShow = !1),
              (this.left = 0),
              (this.top = 0),
              (this.type = "");
          },
          exec(t, e, ...i) {
            if (!e) {
              switch (t) {
                case "COPY_NODE":
                  this.copyData = this.mindMap.renderer.copyNode();
                  break;
                case "CUT_NODE":
                  this.$bus.$emit("execCommand", t, (t) => {
                    this.copyData = t;
                  });
                  break;
                case "PASTE_NODE":
                  this.$bus.$emit("execCommand", t, this.copyData);
                  break;
                case "RETURN_CENTER":
                  this.mindMap.view.reset();
                  break;
                default:
                  this.$bus.$emit("execCommand", t, ...i);
                  break;
              }
              this.hide();
            }
          },
          copy() {
            this.exec("COPY_NODE");
          },
          paste() {
            this.exec("PASTE_NODE");
          },
          cut() {
            this.exec("CUT_NODE");
          },
        },
      },
      An = Bn,
      In = (i("dbe8"), Object(r["a"])(An, Ln, Tn, !1, null, "986258a8", null)),
      Rn = In.exports,
      On = function () {
        var t = this,
          e = t._self._c;
        return e("div", {
          ref: "noteContentViewer",
          staticClass: "noteContentViewer",
          style: {
            left: this.left + "px",
            top: this.top + "px",
            visibility: t.show ? "visible" : "hidden",
          },
        });
      },
      Wn = [],
      Hn = i("f059"),
      Pn = i.n(Hn),
      Yn =
        (i("fe5f"),
        {
          name: "NodeNoteContentShow",
          data() {
            return { editor: null, show: !1, left: 0, top: 0 };
          },
          created() {
            this.$bus.$on("showNoteContent", (t, e, i) => {
              this.editor.setMarkdown(t),
                (this.left = e),
                (this.top = i),
                (this.show = !0);
            }),
              this.$bus.$on("hideNoteContent", () => {
                this.show = !1;
              });
          },
          mounted() {
            this.initEditor();
          },
          methods: {
            initEditor() {
              this.editor ||
                (this.editor = new Pn.a({ el: this.$refs.noteContentViewer }));
            },
          },
        }),
      jn = Yn,
      Xn = (i("79ac"), Object(r["a"])(jn, On, Wn, !1, null, "702de559", null)),
      Vn = Xn.exports,
      Gn = function () {
        var t = this,
          e = t._self._c;
        return t.showMiniMap
          ? e(
              "div",
              {
                ref: "navigatorBox",
                staticClass: "navigatorBox",
                on: {
                  mousedown: t.onMousedown,
                  mousemove: t.onMousemove,
                  mouseup: t.onMouseup,
                },
              },
              [
                e("div", {
                  ref: "svgBox",
                  staticClass: "svgBox",
                  style: {
                    transform: `scale(${t.svgBoxScale})`,
                    left: t.svgBoxLeft + "px",
                    top: t.svgBoxTop + "px",
                  },
                }),
                e("div", { staticClass: "windowBox", style: t.viewBoxStyle }),
              ]
            )
          : t._e();
      },
      Zn = [],
      Un = {
        props: { mindMap: { type: Object } },
        data() {
          return {
            showMiniMap: !1,
            timer: null,
            boxWidth: 0,
            boxHeight: 0,
            svgBoxScale: 1,
            svgBoxLeft: 0,
            svgBoxTop: 0,
            viewBoxStyle: { left: 0, top: 0, bottom: 0, right: 0 },
          };
        },
        mounted() {
          this.$bus.$on("toggle_mini_map", this.toggle_mini_map),
            this.$bus.$on("data_change", this.data_change),
            this.$bus.$on("view_data_change", this.data_change),
            this.$bus.$on("node_tree_render_end", this.data_change);
        },
        destroyed() {
          this.$bus.$off("toggle_mini_map", this.toggle_mini_map),
            this.$bus.$off("data_change", this.data_change),
            this.$bus.$off("view_data_change", this.data_change),
            this.$bus.$off("node_tree_render_end", this.data_change);
        },
        methods: {
          toggle_mini_map(t) {
            (this.showMiniMap = t),
              this.$nextTick(() => {
                this.$refs.navigatorBox && this.init(),
                  this.$refs.svgBox && this.drawMiniMap();
              });
          },
          data_change() {
            this.showMiniMap &&
              (clearTimeout(this.timer),
              (this.timer = setTimeout(() => {
                this.drawMiniMap();
              }, 500)));
          },
          init() {
            let { width: t, height: e } =
              this.$refs.navigatorBox.getBoundingClientRect();
            (this.boxWidth = t), (this.boxHeight = e);
          },
          drawMiniMap() {
            let {
              svgHTML: t,
              viewBoxStyle: e,
              miniMapBoxScale: i,
              miniMapBoxLeft: a,
              miniMapBoxTop: n,
            } = this.mindMap.miniMap.calculationMiniMap(
              this.boxWidth,
              this.boxHeight
            );
            (this.$refs.svgBox.innerHTML = t),
              (this.viewBoxStyle = e),
              (this.svgBoxScale = i),
              (this.svgBoxLeft = a),
              (this.svgBoxTop = n);
          },
          onMousedown(t) {
            this.mindMap.miniMap.onMousedown(t);
          },
          onMousemove(t) {
            this.mindMap.miniMap.onMousemove(t);
          },
          onMouseup(t) {
            this.mindMap.miniMap.onMouseup(t);
          },
        },
      },
      Jn = Un,
      Kn = (i("8d13"), Object(r["a"])(Jn, Gn, Zn, !1, null, "5eacd143", null)),
      qn = Kn.exports,
      Qn = function () {
        var t = this,
          e = t._self._c;
        return e(
          "viewer",
          { attrs: { images: t.images } },
          t._l(t.images, function (t) {
            return e("img", { key: t, attrs: { src: t } });
          }),
          0
        );
      },
      to = [],
      eo = {
        props: {
          mindMap: {
            type: Object,
            default() {
              return null;
            },
          },
        },
        data() {
          return { images: [] };
        },
        mounted() {
          this.mindMap.on("node_img_dblclick", this.onNodeTmgDblclick);
        },
        beforeDestroy() {
          this.mindMap.off("node_img_dblclick", this.onNodeTmgDblclick);
        },
        methods: {
          onNodeTmgDblclick(t, e) {
            e.stopPropagation(),
              e.preventDefault(),
              (this.images = [t.nodeData.data.image]),
              this.$viewerApi({ images: this.images });
          },
        },
      },
      io = eo,
      ao = Object(r["a"])(io, Qn, to, !1, null, null, null),
      no = ao.exports,
      oo = {
        name: "Edit",
        components: {
          Outline: Ca,
          Style: ka,
          BaseStyle: Ia,
          Theme: Ya,
          Structure: Ua,
          Count: en,
          NavigatorToolbar: Dn,
          ShortcutKey: En,
          Contextmenu: Rn,
          NodeNoteContentShow: Vn,
          Navigator: qn,
          NodeImgPreview: no,
        },
        data() {
          return {
            mindMap: null,
            mindMapData: null,
            prevImg: "",
            openTest: !1,
          };
        },
        mounted() {
          this.getData(),
            this.init(),
            this.$bus.$on("execCommand", this.execCommand),
            this.$bus.$on("export", this.export),
            this.$bus.$on("setData", this.setData),
            this.$bus.$on("startTextEdit", () => {
              this.mindMap.renderer.startTextEdit();
            }),
            this.$bus.$on("endTextEdit", () => {
              this.mindMap.renderer.endTextEdit();
            }),
            this.openTest &&
              setTimeout(() => {
                this.test();
              }, 5e3);
        },
        methods: {
          test() {
            let t = {
              data: { text: "根节点", expand: !0, isActive: !1 },
              children: [],
            };
            setTimeout(() => {
              (t.data.text = "理想青年实验室"),
                this.mindMap.setData(JSON.parse(JSON.stringify(t))),
                setTimeout(() => {
                  t.children.push({
                    data: { text: "网站", expand: !0, isActive: !1 },
                    children: [],
                  }),
                    this.mindMap.setData(JSON.parse(JSON.stringify(t))),
                    setTimeout(() => {
                      t.children.push({
                        data: { text: "博客", expand: !0, isActive: !1 },
                        children: [],
                      }),
                        this.mindMap.setData(JSON.parse(JSON.stringify(t))),
                        setTimeout(() => {
                          let t = {
                            transform: {
                              scaleX: 1,
                              scaleY: 1,
                              shear: 0,
                              rotate: 0,
                              translateX: 179,
                              translateY: 0,
                              originX: 0,
                              originY: 0,
                              a: 1,
                              b: 0,
                              c: 0,
                              d: 1,
                              e: 179,
                              f: 0,
                            },
                            state: { scale: 1, x: 179, y: 0, sx: 0, sy: 0 },
                          };
                          this.mindMap.view.setTransformData(t),
                            setTimeout(() => {
                              let t = {
                                transform: {
                                  scaleX: 1.6000000000000005,
                                  scaleY: 1.6000000000000005,
                                  shear: 0,
                                  rotate: 0,
                                  translateX: -373.3000000000004,
                                  translateY: -281.10000000000025,
                                  originX: 0,
                                  originY: 0,
                                  a: 1.6000000000000005,
                                  b: 0,
                                  c: 0,
                                  d: 1.6000000000000005,
                                  e: -373.3000000000004,
                                  f: -281.10000000000025,
                                },
                                state: {
                                  scale: 1.6000000000000005,
                                  x: 179,
                                  y: 0,
                                  sx: 0,
                                  sy: 0,
                                },
                              };
                              this.mindMap.view.setTransformData(t);
                            }, 1e3);
                        }, 1e3);
                    }, 1e3);
                }, 1e3);
            }, 1e3);
          },
          getData() {
            let t = _i();
            this.mindMapData = t;
          },
          bindSaveEvent() {
            this.openTest ||
              (this.$bus.$on("data_change", (t) => {
                Ni(t);
              }),
              this.$bus.$on("view_data_change", (t) => {
                Di({ view: t });
              }));
          },
          manualSave() {
            if (this.openTest) return;
            let t = this.mindMap.getData(!0);
            Di(t);
          },
          init() {
            let { root: t, layout: e, theme: i, view: a } = this.mindMapData;
            (this.mindMap = new oi({
              el: this.$refs.mindMapContainer,
              data: t,
              layout: e,
              theme: i.template,
              themeConfig: i.config,
              viewData: a,
              customNoteContentShow: {
                show: (t, e, i) => {
                  this.$bus.$emit("showNoteContent", t, e, i);
                },
                hide: () => {
                  this.$bus.$emit("hideNoteContent");
                },
              },
            })),
              this.mindMap.keyCommand.addShortcut("Control+s", () => {
                this.manualSave();
              }),
              [
                "node_active",
                "data_change",
                "view_data_change",
                "back_forward",
                "node_contextmenu",
                "node_click",
                "draw_click",
                "expand_btn_click",
                "svg_mousedown",
                "mouseup",
                "mode_change",
                "node_tree_render_end",
              ].forEach((t) => {
                this.mindMap.on(t, (...e) => {
                  this.$bus.$emit(t, ...e);
                });
              }),
              this.bindSaveEvent();
          },
          setData(t) {
            t.root ? this.mindMap.setFullData(t) : this.mindMap.setData(t),
              this.manualSave();
          },
          reRender() {
            this.mindMap.reRender();
          },
          execCommand(...t) {
            this.mindMap.execCommand(...t);
          },
          async export(...t) {
            try {
              this.mindMap.export(...t);
            } catch (e) {
              console.log(e);
            }
          },
        },
      },
      so = oo,
      lo = (i("5a24"), Object(r["a"])(so, Ti, Bi, !1, null, "ac27a028", null)),
      ro = lo.exports,
      ho = {
        name: "Index",
        components: { Toolbar: Li, Edit: ro },
        data() {
          return { show: !1 };
        },
        async created() {
          const t = this.$loading({ lock: !0, text: "正在加载，请稍后..." });
          await this.getUserMindMapData(), (this.show = !0), t.close();
        },
        methods: { ...Object(gi["b"])(["getUserMindMapData"]) },
      },
      co = ho,
      po = (i("5df8"), Object(r["a"])(co, p, m, !1, null, "e2204dfa", null)),
      mo = po.exports;
    a["default"].use(c["a"]);
    const uo = [{ path: "/", name: "Edit", component: mo }],
      go = new c["a"]({ routes: uo });
    var fo = go;
    a["default"].use(gi["a"]);
    const vo = new gi["a"].Store({
      state: { mindMapData: null, isHandleLocalFile: !1 },
      mutations: {
        setMindMapData(t, e) {
          t.mindMapData = e;
        },
        setIsHandleLocalFile(t, e) {
          t.isHandleLocalFile = e;
        },
      },
      actions: {
        getUserMindMapData(t) {
          try {
            let { data: e } = { data: { data: { mindMapData: xi } } };
            t.commit("setMindMapData", e.data);
          } catch (e) {
            console.log(e);
          }
        },
      },
    });
    var bo = vo,
      Co = (i("0fae"), i("9c65"), i("0808"), i("6944")),
      xo = i.n(Co);
    (a["default"].config.productionTip = !1),
      (a["default"].prototype.$bus = new a["default"]()),
      a["default"].use(vi.a),
      a["default"].use(xo.a),
      new a["default"]({
        render: (t) => t(h),
        router: fo,
        store: bo,
        i18n: Mn,
      }).$mount("#app");
  },
  5863: function (t, e, i) {},
  "5a24": function (t, e, i) {
    "use strict";
    i("d16c");
  },
  "5b00": function (t, e, i) {
    "use strict";
    i("2f05");
  },
  "5df8": function (t, e, i) {
    "use strict";
    i("322b");
  },
  "5fa1": function (t, e, i) {},
  "649d": function (t, e, i) {
    "use strict";
    i("9a9a");
  },
  6967: function (t, e, i) {
    t.exports = i.p + "img/organizationStructure.8064f4da.jpg";
  },
  "6ef5": function (t, e, i) {
    t.exports = i.p + "img/gold.3093b3c8.jpg";
  },
  "72ed": function (t, e, i) {
    t.exports = i.p + "img/greenLeaf.6789e8fc.jpg";
  },
  "736d": function (t, e, i) {},
  "79ac": function (t, e, i) {
    "use strict";
    i("c7d9");
  },
  "7bd6": function (t, e, i) {},
  "7dda": function (t, e, i) {
    t.exports = i.p + "img/freshGreen.0e344e3e.jpg";
  },
  "7f82": function (t, e, i) {
    t.exports = i.p + "img/skyGreen.4cfa829a.jpg";
  },
  "81cc": function (t, e, i) {},
  8481: function (t, e, i) {},
  8617: function (t, e, i) {
    t.exports = i.p + "img/classic.733f273c.jpg";
  },
  "8d13": function (t, e, i) {
    "use strict";
    i("e2cd");
  },
  "97cd": function (t, e, i) {},
  9910: function (t, e, i) {
    t.exports = i.p + "img/mindMap.223b38aa.jpg";
  },
  9965: function (t, e, i) {
    "use strict";
    i("2baf");
  },
  "9a9a": function (t, e, i) {},
  "9c65": function (t, e, i) {},
  a3a6: function (t, e, i) {
    t.exports = i.p + "img/classic2.cdfe2a8d.jpg";
  },
  a64e: function (t, e, i) {
    "use strict";
    i("5863");
  },
  ac18: function (t, e, i) {
    t.exports = i.p + "img/catalogOrganization.380bb277.jpg";
  },
  b2e8: function (t, e, i) {
    t.exports = i.p + "img/pinkGrape.32c2587b.jpg";
  },
  b533: function (t, e, i) {
    t.exports = i.p + "img/blueSky.3c7f8ccb.jpg";
  },
  b9d6: function (t, e, i) {},
  c0d2: function (t, e, i) {
    t.exports = i.p + "img/classic3.19d6c347.jpg";
  },
  c111: function (t, e, i) {},
  c170: function (t, e, i) {},
  c612: function (t, e, i) {
    t.exports = i.p + "img/romanticPurple.7607e58a.jpg";
  },
  c7d9: function (t, e, i) {},
  ca62: function (t, e, i) {
    t.exports = i.p + "img/freshRed.1c5bde77.jpg";
  },
  d16c: function (t, e, i) {},
  d9c3: function (t, e, i) {},
  db73: function (t, e, i) {
    t.exports = i.p + "img/mint.7933f60a.jpg";
  },
  dbe8: function (t, e, i) {
    "use strict";
    i("7bd6");
  },
  e1e4: function (t, e, i) {},
  e2cd: function (t, e, i) {},
  e79c: function (t, e, i) {},
  e911: function (t, e, i) {
    t.exports = i.p + "img/classic4.087902fc.jpg";
  },
  eae4: function (t, e, i) {
    "use strict";
    i("3a0c");
  },
  ebaf: function (t, e, i) {
    "use strict";
    i("c170");
  },
  f260: function (t, e, i) {
    t.exports = i.p + "img/minions.c2a93f9e.jpg";
  },
  f54d: function (t, e, i) {
    "use strict";
    i("d9c3");
  },
  fb0f: function (t, e, i) {
    "use strict";
    i("8481");
  },
});
