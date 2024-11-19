(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".upload-button{font-family:sans-serif}.upload-button{border:2px solid lightgrey;border-radius:8px;text-align:left;padding:20px;cursor:pointer;transition:background-color .3s ease}.upload-button.dragging{background-color:#f0f0f0}.upload-content{display:flex;flex-direction:column;align-items:center}.error-message{font-size:12px}.icon{font-size:24px;margin-bottom:0}.upload-text{font-size:16px;font-weight:700;color:red;margin-bottom:4px}.sub-text{font-size:12px;color:gray}.progress-container{width:100%;position:relative}.progress-bar{height:8px;border-radius:4px;transition:width .3s ease}.file-info{font-size:12px;margin-top:4px}.uploaded-file{display:flex;align-items:center;justify-content:space-between}.file-size{font-size:12px;color:gray}.uploaded-file-content{display:flex;align-items:center;justify-content:space-between}.file-icon{margin-right:8px}.file-details{font-size:14px}.delete-btn{background:none;border:none;cursor:pointer;font-size:18px;color:red}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import Ve, { useState as J } from "react";
var xe = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function dr() {
  if ($e) return q;
  $e = 1;
  var T = Ve, D = Symbol.for("react.element"), x = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, W = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(w, c, f) {
    var p, E = {}, k = null, M = null;
    f !== void 0 && (k = "" + f), c.key !== void 0 && (k = "" + c.key), c.ref !== void 0 && (M = c.ref);
    for (p in c) P.call(c, p) && !$.hasOwnProperty(p) && (E[p] = c[p]);
    if (w && w.defaultProps) for (p in c = w.defaultProps, c) E[p] === void 0 && (E[p] = c[p]);
    return { $$typeof: D, type: w, key: k, ref: M, props: E, _owner: W.current };
  }
  return q.Fragment = x, q.jsx = A, q.jsxs = A, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function vr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var T = Ve, D = Symbol.for("react.element"), x = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), w = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), X = Symbol.iterator, ve = "@@iterator";
    function pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[ve];
      return typeof r == "function" ? r : null;
    }
    var S = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var d = !1, Z = !1, Q = !1, ee = !1, re = !1, U;
    U = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === P || e === $ || re || e === W || e === f || e === p || ee || e === M || d || Z || Q || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === E || e.$$typeof === A || e.$$typeof === w || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === U || e.getModuleId !== void 0));
    }
    function L(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function B(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case P:
          return "Fragment";
        case x:
          return "Portal";
        case $:
          return "Profiler";
        case W:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return B(r) + ".Consumer";
          case A:
            var t = e;
            return B(t._context) + ".Provider";
          case c:
            return L(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case k: {
            var s = e, l = s._payload, i = s._init;
            try {
              return R(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, F = 0, ne, ae, ie, H, se, oe, ue;
    function u() {
    }
    u.__reactDisabledLog = !0;
    function _() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, ie = console.warn, H = console.error, se = console.group, oe = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function O() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ne
            }),
            info: C({}, e, {
              value: ae
            }),
            warn: C({}, e, {
              value: ie
            }),
            error: C({}, e, {
              value: H
            }),
            group: C({}, e, {
              value: se
            }),
            groupCollapsed: C({}, e, {
              value: oe
            }),
            groupEnd: C({}, e, {
              value: ue
            })
          });
        }
        F < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = S.ReactCurrentDispatcher, ge;
    function le(e, r, t) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ge = n && n[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var he = !1, ce;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Ye();
    }
    function Ee(e, r) {
      if (!e || he)
        return "";
      {
        var t = ce.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      he = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = m.current, m.current = null, _();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), y = n.stack.split(`
`), v = a.length - 1, g = y.length - 1; v >= 1 && g >= 0 && a[v] !== y[g]; )
            g--;
          for (; v >= 1 && g >= 0; v--, g--)
            if (a[v] !== y[g]) {
              if (v !== 1 || g !== 1)
                do
                  if (v--, g--, g < 0 || a[v] !== y[g]) {
                    var j = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, j), j;
                  }
                while (v >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        he = !1, m.current = l, O(), Error.prepareStackTrace = s;
      }
      var Y = e ? e.displayName || e.name : "", N = Y ? le(Y) : "";
      return typeof e == "function" && ce.set(e, N), N;
    }
    function Ie(e, r, t) {
      return Ee(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function fe(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Ue(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case f:
          return le("Suspense");
        case p:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ie(e.render);
          case E:
            return fe(e.type, r, t);
          case k: {
            var n = e, s = n._payload, l = n._init;
            try {
              return fe(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, we = {}, ke = S.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var r = e._owner, t = fe(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, s) {
      {
        var l = Function.call.bind(z);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (de(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), de(null)), a instanceof Error && !(a.message in we) && (we[a.message] = !0, de(s), h("Failed %s type: %s", t, a.message), de(null));
          }
      }
    }
    var He = Array.isArray;
    function me(e) {
      return He(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Ce(e);
    }
    var K = S.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe, ye;
    ye = {};
    function qe(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && K.current && r && K.current.stateNode !== r) {
        var t = R(K.current.type);
        ye[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(K.current.type), e.ref), ye[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Te || (Te = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, s, l, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, s) {
      {
        var l, i = {}, a = null, y = null;
        t !== void 0 && (Oe(t), a = "" + t), Ge(r) && (Oe(r.key), a = "" + r.key), qe(r) && (y = r.ref, Xe(r, s));
        for (l in r)
          z.call(r, l) && !Je.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (l in v)
            i[l] === void 0 && (i[l] = v[l]);
        }
        if (a || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, g), y && Qe(i, g);
        }
        return er(e, a, y, s, n, K.current, i);
      }
    }
    var be = S.ReactCurrentOwner, Se = S.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = fe(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function De() {
      {
        if (be.current) {
          var e = R(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Ae = {};
    function nr(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ae[t])
          return;
        Ae[t] = !0;
        var n = "";
        e && e._owner && e._owner !== be.current && (n = " It was passed a child from " + R(e._owner.type) + "."), V(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), V(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            _e(n) && Le(n, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = pe(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), i; !(i = l.next()).done; )
              _e(i.value) && Le(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Re) {
          Re = !0;
          var s = R(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            V(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var Ne = {};
    function We(e, r, t, n, s, l) {
      {
        var i = te(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr();
          y ? a += y : a += De();
          var v;
          e === null ? v = "null" : me(e) ? v = "array" : e !== void 0 && e.$$typeof === D ? (v = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var g = rr(e, r, t, s, l);
        if (g == null)
          return g;
        if (i) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (me(j)) {
                for (var Y = 0; Y < j.length; Y++)
                  Fe(j[Y], e);
                Object.freeze && Object.freeze(j);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(j, e);
        }
        if (z.call(r, "key")) {
          var N = R(e), b = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), je = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[N + je]) {
            var cr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, N, cr, N), Ne[N + je] = !0;
          }
        }
        return e === P ? ir(g) : ar(g), g;
      }
    }
    function sr(e, r, t) {
      return We(e, r, t, !0);
    }
    function or(e, r, t) {
      return We(e, r, t, !1);
    }
    var ur = or, lr = sr;
    G.Fragment = P, G.jsx = ur, G.jsxs = lr;
  }()), G;
}
process.env.NODE_ENV === "production" ? xe.exports = dr() : xe.exports = vr();
var o = xe.exports;
const gr = ({
  maxSizeMB: T = 10,
  restrictFileSize: D = !1,
  allowedFileTypes: x,
  uploadText: P = /* @__PURE__ */ o.jsx("strong", { style: { color: "red" }, children: "Drag and Drop your file or Click to Upload" }),
  subText: W = `You can upload up to ${T} MB`,
  uploadStyles: $,
  progressStyles: A,
  errorStyles: w,
  fileIcons: c = {},
  onError: f,
  onFileUpload: p,
  fileTypeNotAllowedText: E = `File type not allowed. Please upload one of the following: ${x == null ? void 0 : x.join(", ")}`,
  restrictFileSizeText: k = `File size exceeds the allowed limit of ${T} MB. Please select a smaller file.`,
  FileSizeExceededButAllowedText: M = `File size exceeds the allowed limit of ${T} MB. Please select a smaller file.`,
  progressBarInterval: X = 100,
  UploadFileIcon: ve = /* @__PURE__ */ o.jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 2L6.5 7.5H10V15H14V7.5H17.5L12 2Z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 18H6V20H18V18Z" })
  ] }),
  showPreview: pe = !1,
  showFileIcon: S = !0
}) => {
  const [h, I] = J(!1), [d, Z] = J(null), [Q, ee] = J(0), [re, U] = J(!1), [te, L] = J(null), B = Array.isArray(x) && x.every((u) => typeof u == "string"), R = B ? x.join(",") : void 0, C = (u) => B ? x.some((_) => u.name.toLowerCase().endsWith(_.toLowerCase())) : !0, F = (u) => {
    var O;
    const _ = (O = u.target.files) == null ? void 0 : O[0];
    _ && H(_);
  }, ne = (u) => {
    u.preventDefault(), I(!0);
  }, ae = () => I(!1), ie = (u) => {
    u.preventDefault(), I(!1);
    const _ = u.dataTransfer.files[0];
    _ && !d && H(_);
  }, H = (u) => {
    const O = u.size / 1048576 > T;
    if (!C(u)) {
      const m = E;
      L(m), f == null || f(m);
      return;
    }
    if (O && D) {
      const m = k;
      L(m), f == null || f(m);
    } else if (O) {
      const m = M;
      L(m), f == null || f(m);
    } else
      L(null), f == null || f(null);
    se(u);
  }, se = (u) => {
    const _ = URL.createObjectURL(u);
    Z({ name: u.name, size: u.size, type: u.type, url: _ }), U(!0), p == null || p(u);
    const O = setInterval(() => {
      ee((m) => m >= 100 ? (clearInterval(O), U(!1), 100) : m + 10);
    }, X);
  }, oe = () => {
    d != null && d.url && URL.revokeObjectURL(d.url), Z(null), ee(0), L(null), p == null || p(null), f == null || f(null);
  }, ue = (u) => u.includes("pdf") && c.pdf ? c.pdf : u.includes("image") && c.image ? c.image : (u.includes("excel") || u.includes("spreadsheet")) && c.excel ? c.excel : c.default || "📁";
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `upload-button ${h ? "dragging" : ""}`,
      onDragOver: ne,
      onDragLeave: ae,
      onDrop: ie,
      style: $,
      children: !d || re ? /* @__PURE__ */ o.jsx(o.Fragment, { children: re ? /* @__PURE__ */ o.jsxs("div", { className: "progress-container", style: A, children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "progress-bar",
            style: {
              width: `${Q}%`,
              backgroundColor: Q > 90 ? "darkgreen" : "orange"
            }
          }
        ),
        /* @__PURE__ */ o.jsxs("p", { className: "file-info", children: [
          d == null ? void 0 : d.name,
          " - ",
          d != null && d.size ? Math.round(d.size / 1024) : 0,
          " KB"
        ] })
      ] }) : /* @__PURE__ */ o.jsxs("label", { className: "upload-content", children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "file",
            onChange: F,
            style: { display: "none" },
            accept: R
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "icon", children: ve }),
        /* @__PURE__ */ o.jsx("div", { className: "upload-text", children: P }),
        /* @__PURE__ */ o.jsx("div", { className: "sub-text", children: W })
      ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "uploaded-file", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "uploaded-file-content", children: [
          S && /* @__PURE__ */ o.jsx("div", { className: "file-icon", children: ue(d.type) }),
          pe && d.url && d.type.startsWith("image") && /* @__PURE__ */ o.jsx("img", { src: d.url, alt: d.name, className: "file-preview", style: { width: "40px", height: "40px", marginRight: "10px" } }),
          /* @__PURE__ */ o.jsxs("div", { className: "file-details", children: [
            /* @__PURE__ */ o.jsx("div", { className: "file-name", children: d.name }),
            /* @__PURE__ */ o.jsxs("div", { className: "file-size", children: [
              Math.round(d.size / 1024),
              " KB"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "error-message", children: te && /* @__PURE__ */ o.jsx("span", { className: "error-message-text", style: { ...w, color: "red" }, children: te }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("button", { className: "delete-btn", onClick: oe, children: c.delete ? c.delete : /* @__PURE__ */ o.jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ o.jsx(
                "path",
                {
                  d: "M9 3H15",
                  stroke: "black",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "path",
                {
                  d: "M10 3V2C10 1.44772 10.4477 1 11 1H13C13.5523 1 14 1.44772 14 2V3H10Z",
                  stroke: "black",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "path",
                {
                  d: "M4 6H20",
                  stroke: "black",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "path",
                {
                  d: "M5 6L6 19C6.05 19.61 6.58 20 7.2 20H16.8C17.42 20 17.95 19.61 18 19L19 6H5Z",
                  stroke: "black",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            ]
          }
        ) })
      ] })
    }
  );
};
export {
  gr as default
};
