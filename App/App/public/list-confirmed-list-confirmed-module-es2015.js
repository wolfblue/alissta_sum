(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-confirmed-list-confirmed-module"],{

/***/ "./src/app/pages/companies/list-confirmed/list-confirmed-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/companies/list-confirmed/list-confirmed-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ListConfirmedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListConfirmedPageRoutingModule", function() { return ListConfirmedPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_confirmed_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-confirmed.page */ "./src/app/pages/companies/list-confirmed/list-confirmed.page.ts");





const routes = [
    {
        path: '',
        component: _list_confirmed_page__WEBPACK_IMPORTED_MODULE_2__["ListConfirmedPage"],
    },
];
class ListConfirmedPageRoutingModule {
}
ListConfirmedPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListConfirmedPageRoutingModule });
ListConfirmedPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListConfirmedPageRoutingModule_Factory(t) { return new (t || ListConfirmedPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListConfirmedPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListConfirmedPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/list-confirmed/list-confirmed.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/companies/list-confirmed/list-confirmed.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListConfirmedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListConfirmedPageModule", function() { return ListConfirmedPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _list_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-confirmed-routing.module */ "./src/app/pages/companies/list-confirmed/list-confirmed-routing.module.ts");
/* harmony import */ var _list_confirmed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-confirmed.page */ "./src/app/pages/companies/list-confirmed/list-confirmed.page.ts");








class ListConfirmedPageModule {
}
ListConfirmedPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ListConfirmedPageModule });
ListConfirmedPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ListConfirmedPageModule_Factory(t) { return new (t || ListConfirmedPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _list_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListConfirmedPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListConfirmedPageModule, { declarations: [_list_confirmed_page__WEBPACK_IMPORTED_MODULE_6__["ListConfirmedPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _list_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListConfirmedPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListConfirmedPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _list_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListConfirmedPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]],
                declarations: [_list_confirmed_page__WEBPACK_IMPORTED_MODULE_6__["ListConfirmedPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/list-confirmed/list-confirmed.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/companies/list-confirmed/list-confirmed.page.ts ***!
  \***********************************************************************/
/*! exports provided: ListConfirmedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListConfirmedPage", function() { return ListConfirmedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/filterCompanies.pipe */ "./src/app/pipes/filterCompanies.pipe.ts");











function ListConfirmedPage_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { company: a0 }; };
function ListConfirmedPage_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListConfirmedPage_ng_container_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, c_r6));
} }
const _c1 = function () { return ["strRazonSocial", "strNumeroDcto", "stringObservaciones"]; };
function ListConfirmedPage_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListConfirmedPage_ng_container_8_ng_container_1_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "filterCompanies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r0.companies, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1), ctx_r0.term));
} }
function ListConfirmedPage_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No tiene empresas para enviar.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListConfirmedPage_ng_template_11_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Departamento Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Municipio Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "C\u00F3digo/A.E. Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sector Econ\u00F3mico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Celular Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Tel\u00E9fono Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Correo Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "C\u00F3digo Postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "TD/No. Identificaci\u00F3n Representante Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Nombre Representante Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ion-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const company_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().company;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.eDSedesActualizadas.Nombre_Departamento_Sede, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.eDSedesActualizadas.Nombre_Municipio_Sede, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", company_r8.strCodigoActividadEconomica, " - ", company_r8.strActividadEconomicaNombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.strDescripcionSectorEconomico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.strCelular, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.strTelefono, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.strCorreoElectronico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.eDSedesActualizadas.strCodigoPostal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", company_r8.strSiglaRepresentanteLegal, " - ", company_r8.strNumeroDcto_Representant_Legal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.strNombre_Representant_Legal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", company_r8.strObservaciones);
} }
function ListConfirmedPage_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListConfirmedPage_ng_template_11_Template_ion_icon_click_8_listener() { const company_r8 = ctx.company; return company_r8.__showDetails = !company_r8.__showDetails; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Direcci\u00F3n Empresa Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Indicador de zona");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListConfirmedPage_ng_template_11_ng_container_20_Template, 56, 13, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListConfirmedPage_ng_template_11_Template_ion_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const company_r8 = ctx.company; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.edit(company_r8.Pk_Id_AS_004_Empresas_AMigrar); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListConfirmedPage_ng_template_11_Template_ion_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const company_r8 = ctx.company; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.send(company_r8.Pk_Id_AS_004_Empresas_AMigrar); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Enviar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r8 = ctx.company;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r8.strRazonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", company_r8.str_Sigla_Documento, ": ", company_r8.strNumeroDcto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", company_r8.__showDetails ? "chevron-up-outline" : "chevron-down-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.eDSedesActualizadas.strDireccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r8.eDSedesActualizadas.srtIndicadorZona, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", company_r8.__showDetails);
} }
/**
 * Componente para la vista de listado de empresas confirmadas.
 */
class ListConfirmedPage {
    constructor(companiesService, alertService, ngZone) {
        this.companiesService = companiesService;
        this.alertService = alertService;
        this.ngZone = ngZone;
    }
    ionViewWillEnter() {
        this.retrieveCompanies();
    }
    /**
     * Permite la edición de la empresa indicada.
     *
     * @param id Identificador de empresa.
     */
    edit(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const company = yield this.companiesService.prepareCompany(id);
            delete company.__confirmed;
            yield this.companiesService.saveChanges();
            this.retrieveCompanies();
        });
    }
    /**
     * Envía los datos al servidor para su procesamiento.
     *
     * @param id Identificador de empresa.
     */
    send(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onError = () => {
                this.ngZone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const alert = yield this.alertService.showAlert('Error', 'Ha ocurrido un error en el servidor y no se pudieron guardar los datos. Intente más tarde.');
                    yield alert.present();
                    this.companiesService.discardChanges();
                }));
            };
            const loading = yield this.alertService.showLoading();
            yield this.companiesService.prepareCompany(id);
            this.companiesService
                .save()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.alertService.hideLoading(loading)))
                .subscribe({
                next: r => {
                    this.ngZone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const result = r.split(';')[0];
                        if (result !== 'true') {
                            onError();
                            return;
                        }
                        const alert = yield this.alertService.showAlert('Empresa actualizada', 'Los datos se han registrado exitosamente.');
                        yield alert.present();
                        yield this.retrieveCompanies();
                    }));
                },
                error: onError,
            });
        });
    }
    /**
     * Establece las empresas confirmadas que se encuentren en el almacén de datos.
     */
    retrieveCompanies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const companies = yield this.companiesService.updatedCompanies;
            this.companies = companies.filter(c => c.__confirmed);
        });
    }
}
ListConfirmedPage.ɵfac = function ListConfirmedPage_Factory(t) { return new (t || ListConfirmedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
ListConfirmedPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListConfirmedPage, selectors: [["app-list-confirmed"]], decls: 13, vars: 2, consts: [[1, "ion-no-border"], ["size", "2"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], ["animated", "", "color", "primary", "placeholder", "Buscar", 3, "ionChange"], [1, "ion-padding"], [4, "ngIf", "ngIfElse"], ["noCompaniesTmp", ""], ["companyTmp", ""], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-companies-wrapper"], [1, "message", "ion-padding"], ["src", "../../../assets/icon/icono_observaciones.svg"], [1, "ion-no-margin"], [1, "header-wrapper"], [1, "title"], ["lines", "none"], [3, "click"], [1, "field"], [4, "ngIf"], ["fill", "clear", "slot", "start", 3, "click"], ["fill", "clear", "slot", "end", 3, "click"], ["rows", "1", "readonly", "true", 3, "value"]], template: function ListConfirmedPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-searchbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function ListConfirmedPage_Template_ion_searchbar_ionChange_6_listener($event) { return ctx.term = $event.detail.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListConfirmedPage_ng_container_8_Template, 3, 6, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListConfirmedPage_ng_template_9_Template, 5, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListConfirmedPage_ng_template_11_Template, 26, 7, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companies == null ? null : ctx.companies.length)("ngIfElse", _r1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"]], pipes: [_pipes_filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterCompaniesPipe"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  position: relative;\n}\nion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n  white-space: normal;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-size: 1.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --background: inherit;\n  --color: inherit;\n  --min-height: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  white-space: normal;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  --background: var(--ion-color-light-shade);\n  --color: var(--ion-color-light-contrast);\n  --padding-start: 0.7rem;\n  --padding-end: 0.7rem;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #344b56;\n  border-radius: 2rem;\n  height: 80%;\n  position: relative;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2xpc3QtY29uZmlybWVkL0M6XFxVc2Vyc1xcZV9hX2FcXERlc2t0b3BcXFByb3llY3Rvc1xcQURBXFxSZXBvc2l0b3Jpb1xcRlVFTlRFU19BUFBcXGFsaXNzdGFfc3VtXFxUcnVuay9zcmNcXGFwcFxccGFnZXNcXGNvbXBhbmllc1xcbGlzdC1jb25maXJtZWRcXGxpc3QtY29uZmlybWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2xpc3QtY29uZmlybWVkL2xpc3QtY29uZmlybWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQU47QURHSTtFQUNFLHFCQUFBO0FDRE47QURPRTtFQUNFLG1CQUFBO0FDSko7QURPTTtFQUNFLGFBQUE7QUNMUjtBRE9RO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDTFY7QURPVTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNMWjtBRFNRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDUFY7QURZSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDVk47QURZTTtFQUNFLG1CQUFBO0FDVlI7QURhTTtFQUNFLG9CQUFBO0FDWFI7QURjTTtFQUNFLGtCQUFBO0FDWlI7QURlTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2JSO0FEZVE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDYlY7QURnQlE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDZFY7QURvQkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbEJKO0FEb0JJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNsQk47QURvQk07RUFDRSxVQUFBO0FDbEJSO0FEcUJNO0VBQ0UsaUJBQUE7QUNuQlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvbGlzdC1jb25maXJtZWQvbGlzdC1jb25maXJtZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICYgaW9uLWNvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJiBpb24tYmFjay1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgJiBpb24tc2VhcmNoYmFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAmIGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuXG4gICAgJiBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgJiAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICYgLnRpdGxlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAmIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24taWNvbiB7XG4gICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgICAtLWJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAtLWNvbG9yOiBpbmhlcml0O1xuICAgICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAmIGlvbi1jaGVja2JveCB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuXG4gICAgICAmIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgICYgLmZpZWxkIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24tdGV4dGFyZWEge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjdyZW07XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogMC43cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAubm8tY29tcGFuaWVzLXdyYXBwZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDRiNTY7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmIC5tZXNzYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYgaW1nIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIH1cblxuICAgICAgJiBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWhlYWRlciBpb24tY29sIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLWNvbCBpb24tc2VhcmNoYmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnRpdGxlIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5oZWFkZXItd3JhcHBlciBpb24taWNvbiB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAtLWJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIC0tY29sb3I6IGluaGVyaXQ7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIGlvbi1jaGVja2JveCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5maWVsZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmZpZWxkIGg0IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5maWVsZCBpb24tdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gIC0tcGFkZGluZy1zdGFydDogMC43cmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjdyZW07XG59XG5pb24tY29udGVudCAubm8tY29tcGFuaWVzLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0YjU2O1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBoZWlnaHQ6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLm5vLWNvbXBhbmllcy13cmFwcGVyIC5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLm5vLWNvbXBhbmllcy13cmFwcGVyIC5tZXNzYWdlIGltZyB7XG4gIHdpZHRoOiA2NSU7XG59XG5pb24tY29udGVudCAubm8tY29tcGFuaWVzLXdyYXBwZXIgLm1lc3NhZ2UgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListConfirmedPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list-confirmed',
                templateUrl: './list-confirmed.page.html',
                styleUrls: ['./list-confirmed.page.scss'],
            }]
    }], function () { return [{ type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"] }, { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=list-confirmed-list-confirmed-module-es2015.js.map