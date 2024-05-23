function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AT-follow-up-follow-up-module"], {
  /***/
  "./src/app/pages/AT/follow-up/follow-up-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/AT/follow-up/follow-up-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: FollowUpPageRoutingModule */

  /***/
  function srcAppPagesATFollowUpFollowUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowUpPageRoutingModule", function () {
      return FollowUpPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _follow_up_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./follow-up.page */
    "./src/app/pages/AT/follow-up/follow-up.page.ts");

    var routes = [{
      path: '',
      component: _follow_up_page__WEBPACK_IMPORTED_MODULE_2__["FollowUpPage"]
    }];

    var FollowUpPageRoutingModule = /*#__PURE__*/_createClass(function FollowUpPageRoutingModule() {
      _classCallCheck(this, FollowUpPageRoutingModule);
    });

    FollowUpPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FollowUpPageRoutingModule
    });
    FollowUpPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FollowUpPageRoutingModule_Factory(t) {
        return new (t || FollowUpPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FollowUpPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowUpPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/AT/follow-up/follow-up.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/AT/follow-up/follow-up.module.ts ***!
    \********************************************************/

  /*! exports provided: FollowUpPageModule */

  /***/
  function srcAppPagesATFollowUpFollowUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowUpPageModule", function () {
      return FollowUpPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./follow-up-routing.module */
    "./src/app/pages/AT/follow-up/follow-up-routing.module.ts");
    /* harmony import */


    var _follow_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./follow-up.page */
    "./src/app/pages/AT/follow-up/follow-up.page.ts");

    var FollowUpPageModule = /*#__PURE__*/_createClass(function FollowUpPageModule() {
      _classCallCheck(this, FollowUpPageModule);
    });

    FollowUpPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FollowUpPageModule
    });
    FollowUpPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FollowUpPageModule_Factory(t) {
        return new (t || FollowUpPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowUpPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FollowUpPageModule, {
        declarations: [_follow_up_page__WEBPACK_IMPORTED_MODULE_5__["FollowUpPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowUpPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowUpPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowUpPageRoutingModule"]],
          declarations: [_follow_up_page__WEBPACK_IMPORTED_MODULE_5__["FollowUpPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/AT/follow-up/follow-up.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/AT/follow-up/follow-up.page.ts ***!
    \******************************************************/

  /*! exports provided: FollowUpPage */

  /***/
  function srcAppPagesATFollowUpFollowUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowUpPage", function () {
      return FollowUpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");

    var _c0 = function _c0(a0) {
      return {
        "item-interactive-disabled": a0
      };
    };

    function FollowUpPage_form_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FollowUpPage_form_11_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r1.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Verificaci\xF3n del seguimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\xBFLa recomendaci\xF3n fue implementada?");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-radio-group", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "S\xCD");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-radio", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "NO");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-radio", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Fecha de implementaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ion-datetime", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\xBFFueron eficaces?");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-radio-group", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "S\xCD");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "ion-radio", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "NO");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "ion-radio", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Causa de la NO implementaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "ion-textarea", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-item", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Nombre de soporte");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "ion-input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.recomendacion.Recomendacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r0.dateNow);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r0.formGroup.controls.eficacia.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r0.formGroup.controls.eficacia.disabled ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r0.formGroup.controls.eficacia.disabled ? true : null);
      }
    }

    var FollowUpPage = /*#__PURE__*/function () {
      function FollowUpPage(cacheService, route, alertController, location) {
        _classCallCheck(this, FollowUpPage);

        this.cacheService = cacheService;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        /**
         * Indica la fecha actual para controlar el maximo
         * de fecha de implementacion
         */

        this.dateNow = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('YYYY-MM-DD');
      }

      _createClass(FollowUpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.establecerRecomendacion();
          this.initForm();
        }
        /**
         * Guarda el formulario de la recomendación actual.
         */

      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var alert, body;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.formGroup.invalid) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 3;
                  return this.alertController.create({
                    header: 'Datos incompletos',
                    mode: 'ios',
                    message: 'Todos los campos son obligatorios.',
                    buttons: ['OK']
                  });

                case 3:
                  alert = _context.sent;
                  alert.present();
                  return _context.abrupt("return");

                case 6:
                  body = this.formGroup.value;
                  this.recomendacion.implementada = body.implementada;
                  this.recomendacion.Fecha_Implementacion = body.fechaImplementacion;
                  this.recomendacion.fueronEficaces = body.eficacia;
                  this.recomendacion.causaNoImplementancion = body.causa;
                  this.recomendacion.InformacionEnvidencia = body.nombreSoporte;
                  this.recomendacion.diligenciado = true;
                  this.location.back();

                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * Establece la recomendación actual.
         */

      }, {
        key: "establecerRecomendacion",
        value: function establecerRecomendacion() {
          var actividades = this.cacheService.activitiesSelectedForExec;
          var idActividad = +this.route.snapshot.params.activityId;
          var actividad = actividades.find(function (a) {
            return a.id === idActividad;
          });
          var recomendaciones = actividad.siniestro.Recomendaciones;
          var idRecomendacion = +this.route.snapshot.params.recomendationId;
          var recomendacion = recomendaciones.find(function (r) {
            return r.Pk_Id_SiniestroRecomendaciones === idRecomendacion;
          });
          this.recomendacion = recomendacion;

          if (!recomendacion.diligenciado) {
            // Como el formulario viene con valores por defecto desde el servicio, debe establecerse una bandera
            // que nos indique si el usuario es el que ha establecido estos valores de la recomendación o corresponden
            // a los por defecto que establece el servicio. Usamos una clave adicional dentro de la recomendación
            // a la que llamamos _diligenciado_ para estos efectos.
            this.clearValues();
          }
        }
        /**
         * Limpia los valores por defecto que vienen desde el servicio para una recomendación vacía.
         */

      }, {
        key: "clearValues",
        value: function clearValues() {
          this.recomendacion.implementada = null;
          this.recomendacion.Fecha_Implementacion = null;
          this.recomendacion.fueronEficaces = null;
          this.recomendacion.causaNoImplementancion = null;
          this.recomendacion.InformacionEnvidencia = null;
        }
        /**
         * Inicializa el formulario de la recomendación.
         */

      }, {
        key: "initForm",
        value: function initForm() {
          var implementadaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.implementada, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
          var fechaImplementacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.Fecha_Implementacion, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
          var eficaciaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.fueronEficaces, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
          var causaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.causaNoImplementancion, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
          var nombreSoporteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.InformacionEnvidencia, []);
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            implementada: implementadaControl,
            fechaImplementacion: fechaImplementacionControl,
            eficacia: eficaciaControl,
            causa: causaControl,
            nombreSoporte: nombreSoporteControl
          });
          this.setupForm();
        }
        /**
         * Establece comportamiento para los campos del formulario en base a sus valores.
         */

      }, {
        key: "setupForm",
        value: function setupForm() {
          var controls = this.formGroup.controls;
          controls.implementada.valueChanges.subscribe(function (v) {
            if (v === false) {
              controls.fechaImplementacion.setValue(null);
              controls.fechaImplementacion.disable();
              controls.nombreSoporte.setValidators([]);
              controls.nombreSoporte.updateValueAndValidity();
              controls.eficacia.setValue(null);
              controls.eficacia.disable();
              controls.causa.enable();
              return;
            }

            controls.fechaImplementacion.enable();
            controls.nombreSoporte.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            controls.nombreSoporte.updateValueAndValidity();
            controls.eficacia.enable();
            controls.causa.setValue(null);
            controls.causa.disable();
          }); // Para forzar la validación de estado previamente establecida

          controls.implementada.setValue(controls.implementada.value);
        }
      }]);

      return FollowUpPage;
    }();

    FollowUpPage.ɵfac = function FollowUpPage_Factory(t) {
      return new (t || FollowUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    FollowUpPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FollowUpPage,
      selectors: [["app-follow-up"]],
      decls: 12,
      vars: 1,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "follow-up-text"], [1, "text-center", "ion-padding"], ["formControlName", "implementada", 1, "implementation-options"], ["lines", "none"], ["slot", "start", 3, "value"], ["lines", "none", 1, "implementation-date"], ["position", "fixed"], ["mode", "ios", "displayFormat", "DD/MM/YYYY", "doneText", "ACEPTAR", "cancelText", "Cancelar", "formControlName", "fechaImplementacion", 3, "max"], ["name", "calendar-outline", "slot", "end"], ["lines", "none", 1, "implemetation-efficiency", 3, "ngClass"], ["formControlName", "eficacia"], ["lines", "none", 1, "implementation-causes"], ["position", "stacked"], ["formControlName", "causa"], ["lines", "none", 1, "attachment-name"], ["formControlName", "nombreSoporte"], [1, "save-button"], ["type", "submit"], ["slot", "icon-only", "name", "arrow-forward-circle-outline"]],
      template: function FollowUpPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Seguimiento a Recomendaciones AT");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FollowUpPage_form_11_Template, 48, 12, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formGroup);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  text-transform: uppercase;\n  color: inherit;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .follow-up-text[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: scroll;\n  border-radius: 0.5rem;\n  border: 1px solid var(--ion-color-tertiary-shade);\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implementation-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implementation-date[_ngcontent-%COMP%]   ion-label[position=fixed][_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: auto;\n  flex: 0 0 auto;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency.item-interactive-disabled[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n  pointer-events: none;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implementation-causes[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border: 1px solid var(--ion-color-tertiary-shade);\n  border-radius: 0.5rem;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  --padding-top: 0.5rem;\n  --padding-bottom: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .attachment-name[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .attachment-name[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  border: 1px solid var(--ion-color-tertiary-shade);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQVQvZm9sbG93LXVwL0M6XFxVc2Vyc1xcZV9hX2FcXERlc2t0b3BcXFByb3llY3Rvc1xcQURBXFxSZXBvc2l0b3Jpb1xcRlVFTlRFU19BUFBcXGFsaXNzdGFfc3VtXFxUcnVuay9zcmNcXGFwcFxccGFnZXNcXEFUXFxmb2xsb3ctdXBcXGZvbGxvdy11cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0FUL2ZvbGxvdy11cC9mb2xsb3ctdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RWO0FES007RUFDRSxZQUFBO0FDSFI7QURZTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ1RSO0FEY007RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtBQ1pSO0FEZU07RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNiUjtBRGtCVTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNoQlo7QUR1QlU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDckJaO0FEeUJRO0VBQ0UsMkJBQUE7RUFBQSxzQkFBQTtBQ3ZCVjtBRDBCUTtFQUNFLGFBQUE7QUN4QlY7QUQwQlU7RUFDRSx1QkFBQTtBQ3hCWjtBRDBCWTtFQUNFLG9CQUFBO0FDeEJkO0FEK0JRO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUM3QlY7QURrQ1E7RUFDRSxtQkFBQTtBQ2hDVjtBRG1DUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQ2pDVjtBRHFDTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNuQ1I7QURxQ1E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNuQ1YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9BVC9mb2xsb3ctdXAvZm9sbG93LXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAmIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmIGlvbi1yb3cge1xuICAgICAgJiBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuXG4gICAgICAgICYgLnRpdHVsbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJiBpb24tY2FyZCB7XG4gICAgJiBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgJiBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgJiAuZm9sbG93LXVwLXRleHQge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgICYgLmltcGxlbWVudGF0aW9uLW9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cblxuICAgICAgJiAuaW1wbGVtZW50YXRpb24tZGF0ZSB7XG4gICAgICAgICYgaW9uLWxhYmVsIHtcbiAgICAgICAgICAmW3Bvc2l0aW9uPSdmaXhlZCddIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiAuaW1wbGVtZXRhdGlvbi1lZmZpY2llbmN5IHtcbiAgICAgICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgJiBpb24taXRlbSB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcblxuICAgICAgICAgICAgJiBpb24tcmFkaW8ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiAuaW1wbGVtZW50YXRpb24tY2F1c2VzIHtcbiAgICAgICAgJiBpb24tdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiAuYXR0YWNobWVudC1uYW1lIHtcbiAgICAgICAgJiBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiAuc2F2ZS1idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgICAmIGlvbi1idXR0b24ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuZm9sbG93LXVwLXRleHQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pbXBsZW1lbnRhdGlvbi1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pbXBsZW1lbnRhdGlvbi1kYXRlIGlvbi1sYWJlbFtwb3NpdGlvbj1maXhlZF0ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW1wbGVtZXRhdGlvbi1lZmZpY2llbmN5Lml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgaW9uLWxhYmVsIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW1wbGVtZXRhdGlvbi1lZmZpY2llbmN5IGlvbi1sYWJlbCB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pbXBsZW1ldGF0aW9uLWVmZmljaWVuY3kgaW9uLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmltcGxlbWV0YXRpb24tZWZmaWNpZW5jeSBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmltcGxlbWV0YXRpb24tZWZmaWNpZW5jeSBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pbXBsZW1lbnRhdGlvbi1jYXVzZXMgaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAtLXBhZGRpbmctdG9wOiAwLjVyZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmF0dGFjaG1lbnQtbmFtZSBpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuYXR0YWNobWVudC1uYW1lIGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5zYXZlLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuc2F2ZS1idXR0b24gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FollowUpPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-follow-up',
          templateUrl: './follow-up.page.html',
          styleUrls: ['./follow-up.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=AT-follow-up-follow-up-module-es5.js.map