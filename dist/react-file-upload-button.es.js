(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("*{font-family:sans-serif}.upload-button{border:2px solid lightgrey;border-radius:8px;text-align:left;padding:20px;cursor:pointer;transition:background-color .3s ease}.upload-button.dragging{background-color:#f0f0f0}.upload-content{display:flex;flex-direction:column;align-items:center}.error-message{font-size:12px}.icon{font-size:24px;margin-bottom:0}.upload-text{font-size:16px;font-weight:700;color:red;margin-bottom:4px}.sub-text{font-size:12px;color:gray}.progress-container{width:100%;position:relative}.progress-bar{height:8px;border-radius:4px;transition:width .3s ease}.file-info{font-size:12px;margin-top:4px}.uploaded-file{display:flex;align-items:center;justify-content:space-between}.file-size{font-size:12px;color:gray}.uploaded-file-content{display:flex;align-items:center;justify-content:space-between}.file-icon{margin-right:8px}.file-details{font-size:14px}.delete-btn{background:none;border:none;cursor:pointer;font-size:18px;color:red}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import Me, { useState as H } from "react";
var je = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function dr() {
  if (Ne) return z;
  Ne = 1;
  var O = Me, D = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, $ = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(k, f, d) {
    var p, j = {}, C = null, W = null;
    d !== void 0 && (C = "" + d), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (p in f) P.call(f, p) && !N.hasOwnProperty(p) && (j[p] = f[p]);
    if (k && k.defaultProps) for (p in f = k.defaultProps, f) j[p] === void 0 && (j[p] = f[p]);
    return { $$typeof: D, type: k, key: C, ref: W, props: j, _owner: $.current };
  }
  return z.Fragment = _, z.jsx = A, z.jsxs = A, z;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function vr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Me, D = Symbol.for("react.element"), _ = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), k = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), K = Symbol.iterator, ce = "@@iterator";
    function fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = K && e[K] || e[ce];
      return typeof r == "function" ? r : null;
    }
    var E = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        J("error", e, t);
      }
    }
    function J(e, r, t) {
      {
        var n = E.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var q = !1, G = !1, X = !1, Z = !1, Q = !1, S;
    S = Symbol.for("react.module.reference");
    function ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === P || e === N || Q || e === $ || e === d || e === p || Z || e === W || q || G || X || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === j || e.$$typeof === A || e.$$typeof === k || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === S || e.getModuleId !== void 0));
    }
    function de(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case P:
          return "Fragment";
        case _:
          return "Portal";
        case N:
          return "Profiler";
        case $:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var r = e;
            return re(r) + ".Consumer";
          case A:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return de(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case C: {
            var s = e, c = s._payload, i = s._init;
            try {
              return b(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, L = 0, te, Y, ne, ae, ie, l, y;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function w() {
      {
        if (L === 0) {
          te = console.log, Y = console.info, ne = console.warn, ae = console.error, ie = console.group, l = console.groupCollapsed, y = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: x,
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
        L++;
      }
    }
    function Ve() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: te
            }),
            info: T({}, e, {
              value: Y
            }),
            warn: T({}, e, {
              value: ne
            }),
            error: T({}, e, {
              value: ae
            }),
            group: T({}, e, {
              value: ie
            }),
            groupCollapsed: T({}, e, {
              value: l
            }),
            groupEnd: T({}, e, {
              value: y
            })
          });
        }
        L < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = E.ReactCurrentDispatcher, pe;
    function se(e, r, t) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            pe = n && n[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var ge = !1, oe;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ye();
    }
    function xe(e, r) {
      if (!e || ge)
        return "";
      {
        var t = oe.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ge = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = ve.current, ve.current = null, w();
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
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), h = n.stack.split(`
`), v = a.length - 1, g = h.length - 1; v >= 1 && g >= 0 && a[v] !== h[g]; )
            g--;
          for (; v >= 1 && g >= 0; v--, g--)
            if (a[v] !== h[g]) {
              if (v !== 1 || g !== 1)
                do
                  if (v--, g--, g < 0 || a[v] !== h[g]) {
                    var R = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, R), R;
                  }
                while (v >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ve.current = c, Ve(), Error.prepareStackTrace = s;
      }
      var V = e ? e.displayName || e.name : "", F = V ? se(V) : "";
      return typeof e == "function" && oe.set(e, F), F;
    }
    function Ie(e, r, t) {
      return xe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Be(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case d:
          return se("Suspense");
        case p:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ie(e.render);
          case j:
            return ue(e.type, r, t);
          case C: {
            var n = e, s = n._payload, c = n._init;
            try {
              return ue(c(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, Ee = {}, we = E.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function He(e, r, t, n, s) {
      {
        var c = Function.call.bind(I);
        for (var i in e)
          if (c(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (le(s), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), le(null)), a instanceof Error && !(a.message in Ee) && (Ee[a.message] = !0, le(s), u("Failed %s type: %s", t, a.message), le(null));
          }
      }
    }
    var ze = Array.isArray;
    function he(e) {
      return ze(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Ke(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), ke(e);
    }
    var B = E.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Oe, me;
    me = {};
    function qe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = b(B.current.type);
        me[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(B.current.type), e.ref), me[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Te || (Te = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Oe || (Oe = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, s, c, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
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
        var c, i = {}, a = null, h = null;
        t !== void 0 && (Ce(t), a = "" + t), Ge(r) && (Ce(r.key), a = "" + r.key), qe(r) && (h = r.ref, Xe(r, s));
        for (c in r)
          I.call(r, c) && !Je.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (c in v)
            i[c] === void 0 && (i[c] = v[c]);
        }
        if (a || h) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, g), h && Qe(i, g);
        }
        return er(e, a, h, s, n, B.current, i);
      }
    }
    var ye = E.ReactCurrentOwner, Pe = E.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Se() {
      {
        if (ye.current) {
          var e = b(ye.current.type);
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
    var De = {};
    function nr(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ye.current && (n = " It was passed a child from " + b(e._owner.type) + "."), M(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), M(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (he(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Re(n) && Ae(n, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = fe(e);
          if (typeof s == "function" && s !== e.entries)
            for (var c = s.call(e), i; !(i = c.next()).done; )
              Re(i.value) && Ae(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !be) {
          be = !0;
          var s = b(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            M(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var Fe = {};
    function $e(e, r, t, n, s, c) {
      {
        var i = ee(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = tr();
          h ? a += h : a += Se();
          var v;
          e === null ? v = "null" : he(e) ? v = "array" : e !== void 0 && e.$$typeof === D ? (v = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var g = rr(e, r, t, s, c);
        if (g == null)
          return g;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (he(R)) {
                for (var V = 0; V < R.length; V++)
                  Le(R[V], e);
                Object.freeze && Object.freeze(R);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(R, e);
        }
        if (I.call(r, "key")) {
          var F = b(e), m = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), _e = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[F + _e]) {
            var cr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, F, cr, F), Fe[F + _e] = !0;
          }
        }
        return e === P ? ir(g) : ar(g), g;
      }
    }
    function sr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function or(e, r, t) {
      return $e(e, r, t, !1);
    }
    var ur = or, lr = sr;
    U.Fragment = P, U.jsx = ur, U.jsxs = lr;
  }()), U;
}
process.env.NODE_ENV === "production" ? je.exports = dr() : je.exports = vr();
var o = je.exports;
const gr = ({
  maxSizeMB: O = 10,
  restrictFileSize: D = !1,
  allowedFileTypes: _,
  uploadText: P = /* @__PURE__ */ o.jsx("strong", { style: { color: "red" }, children: "Drag and Drop your file or Click to Upload" }),
  subText: $ = `You can upload up to ${O} MB`,
  uploadStyles: N,
  progressStyles: A,
  errorStyles: k,
  fileIcons: f = {},
  onError: d,
  onFileUpload: p,
  fileTypeNotAllowedText: j = `File type not allowed. Please upload one of the following: ${_ == null ? void 0 : _.join(", ")}`,
  restrictFileSizeText: C = `File size exceeds the allowed limit of ${O} MB. Please select a smaller file.`,
  FileSizeExceededButAllowedText: W = `File size exceeds the allowed limit of ${O} MB. Please select a smaller file.`,
  progressBarInterval: K = 100,
  UploadFileIcon: ce = /* @__PURE__ */ o.jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 2L6.5 7.5H10V15H14V7.5H17.5L12 2Z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 18H6V20H18V18Z" })
  ] })
}) => {
  const [fe, E] = H(!1), [u, J] = H(null), [q, G] = H(0), [X, Z] = H(!1), [Q, S] = H(null), ee = Array.isArray(_) && _.every((l) => typeof l == "string"), de = ee ? _.join(",") : void 0, re = (l) => ee ? _.some((y) => l.name.toLowerCase().endsWith(y.toLowerCase())) : !0, b = (l) => {
    var x;
    const y = (x = l.target.files) == null ? void 0 : x[0];
    y && Y(y);
  }, T = (l) => {
    l.preventDefault(), E(!0);
  }, L = () => E(!1), te = (l) => {
    l.preventDefault(), E(!1);
    const y = l.dataTransfer.files[0];
    y && Y(y);
  }, Y = (l) => {
    const x = l.size / 1048576 > O;
    if (!re(l)) {
      const w = j;
      S(w), d == null || d(w);
      return;
    }
    if (x && D) {
      const w = C;
      S(w), d == null || d(w);
    } else if (x) {
      const w = W;
      S(w), d == null || d(w);
    } else
      S(null), d == null || d(null);
    ne(l);
  }, ne = (l) => {
    J({ name: l.name, size: l.size, type: l.type }), Z(!0), p == null || p(l);
    const y = setInterval(() => {
      G((x) => x >= 100 ? (clearInterval(y), Z(!1), 100) : x + 10);
    }, K);
  }, ae = () => {
    J(null), G(0), S(null), p == null || p(null), d == null || d(null);
  }, ie = (l) => l.includes("pdf") && f.pdf ? f.pdf : l.includes("image") && f.image ? f.image : (l.includes("excel") || l.includes("spreadsheet")) && f.excel ? f.excel : f.default || "📁";
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `upload-button ${fe ? "dragging" : ""}`,
      onDragOver: T,
      onDragLeave: L,
      onDrop: te,
      style: N,
      children: !u || X ? /* @__PURE__ */ o.jsx(o.Fragment, { children: X ? /* @__PURE__ */ o.jsxs("div", { className: "progress-container", style: A, children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "progress-bar",
            style: {
              width: `${q}%`,
              backgroundColor: q > 90 ? "darkgreen" : "orange"
            }
          }
        ),
        /* @__PURE__ */ o.jsxs("p", { className: "file-info", children: [
          u == null ? void 0 : u.name,
          " - ",
          u != null && u.size ? Math.round(u.size / 1024) : 0,
          " KB"
        ] })
      ] }) : /* @__PURE__ */ o.jsxs("label", { className: "upload-content", children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "file",
            onChange: b,
            style: { display: "none" },
            accept: de
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "icon", children: ce }),
        /* @__PURE__ */ o.jsx("div", { className: "upload-text", children: P }),
        /* @__PURE__ */ o.jsx("div", { className: "sub-text", children: $ })
      ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "uploaded-file", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "uploaded-file-content", children: [
          /* @__PURE__ */ o.jsx("div", { className: "file-icon", children: ie(u.type) }),
          /* @__PURE__ */ o.jsxs("div", { className: "file-details", children: [
            /* @__PURE__ */ o.jsx("div", { className: "file-name", children: u.name }),
            /* @__PURE__ */ o.jsxs("div", { className: "file-size", children: [
              Math.round(u.size / 1024),
              " KB"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "error-message", children: Q && /* @__PURE__ */ o.jsx("span", { className: "error-message-text", style: { ...k, color: "red" }, children: Q }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("button", { className: "delete-btn", onClick: ae, children: f.delete ? f.delete : /* @__PURE__ */ o.jsxs(
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
