(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-submission-submission-module-ngfactory~offline-offline-module-ngfactory"],{

/***/ "./node_modules/angular-formio/grid/index.js":
/*!***************************************************!*\
  !*** ./node_modules/angular-formio/grid/index.js ***!
  \***************************************************/
/*! exports provided: FormioGrid, GridHeaderComponent, GridFooterComponent, GridBodyComponent, FormGridHeaderComponent, FormGridBodyComponent, FormGridFooterComponent, SubmissionGridHeaderComponent, SubmissionGridBodyComponent, SubmissionGridFooterComponent, FormioGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.module */ "./node_modules/angular-formio/grid/grid.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioGrid", function() { return _grid_module__WEBPACK_IMPORTED_MODULE_0__["FormioGrid"]; });

/* harmony import */ var _GridHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridHeaderComponent */ "./node_modules/angular-formio/grid/GridHeaderComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function() { return _GridHeaderComponent__WEBPACK_IMPORTED_MODULE_1__["GridHeaderComponent"]; });

/* harmony import */ var _GridFooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridFooterComponent */ "./node_modules/angular-formio/grid/GridFooterComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridFooterComponent", function() { return _GridFooterComponent__WEBPACK_IMPORTED_MODULE_2__["GridFooterComponent"]; });

/* harmony import */ var _GridBodyComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridBodyComponent */ "./node_modules/angular-formio/grid/GridBodyComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function() { return _GridBodyComponent__WEBPACK_IMPORTED_MODULE_3__["GridBodyComponent"]; });

/* harmony import */ var _form_FormGridHeader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/FormGridHeader.component */ "./node_modules/angular-formio/grid/form/FormGridHeader.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGridHeaderComponent", function() { return _form_FormGridHeader_component__WEBPACK_IMPORTED_MODULE_4__["FormGridHeaderComponent"]; });

/* harmony import */ var _form_FormGridBody_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/FormGridBody.component */ "./node_modules/angular-formio/grid/form/FormGridBody.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGridBodyComponent", function() { return _form_FormGridBody_component__WEBPACK_IMPORTED_MODULE_5__["FormGridBodyComponent"]; });

/* harmony import */ var _form_FormGridFooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/FormGridFooter.component */ "./node_modules/angular-formio/grid/form/FormGridFooter.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGridFooterComponent", function() { return _form_FormGridFooter_component__WEBPACK_IMPORTED_MODULE_6__["FormGridFooterComponent"]; });

/* harmony import */ var _submission_SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submission/SubmissionGridHeader.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridHeader.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionGridHeaderComponent", function() { return _submission_SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_7__["SubmissionGridHeaderComponent"]; });

/* harmony import */ var _submission_SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submission/SubmissionGridBody.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridBody.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionGridBodyComponent", function() { return _submission_SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_8__["SubmissionGridBodyComponent"]; });

/* harmony import */ var _submission_SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submission/SubmissionGridFooter.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridFooter.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionGridFooterComponent", function() { return _submission_SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionGridFooterComponent"]; });

/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid.component */ "./node_modules/angular-formio/grid/grid.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioGridComponent", function() { return _grid_component__WEBPACK_IMPORTED_MODULE_10__["FormioGridComponent"]; });

/**
 * @fileoverview added by tsickle
 * Generated from: grid/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */













/***/ }),

/***/ "./node_modules/angular-formio/resource/create/create.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/angular-formio/resource/create/create.component.js ***!
  \*************************************************************************/
/*! exports provided: FormioResourceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceCreateComponent", function() { return FormioResourceCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/create/create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var FormioResourceCreateComponent = /** @class */ (function () {
    function FormioResourceCreateComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FormioResourceCreateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.setContext(this.route);
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioResourceCreateComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        this.service
            .save(submission)
            .then((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['../', _this.service.resource._id, 'view'], {
                relativeTo: _this.route
            });
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError.emit(err); }));
    };
    FormioResourceCreateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    styles: [".back-button { font-size: 0.8em; } "],
                    template: "<h3 *ngIf=\"service.form\" style=\"margin-top:0;\"> <a routerLink=\"../\" class=\"back-button\"> <i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i> </a> | New {{ service.form.title }} </h3> <formio [form]=\"service.form\" [submission]=\"service.resource\" [refresh]=\"service.refresh\" [error]=\"onError\" [success]=\"onSuccess\" (submit)=\"onSubmit($event)\" ></formio> "
                },] },
    ];
    /** @nocollapse */
    FormioResourceCreateComponent.ctorParameters = function () { return [
        { type: _resource_service__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _resource_config__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"] }
    ]; };
    return FormioResourceCreateComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/create/create.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-formio/resource/create/create.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_FormioResourceCreateComponent, View_FormioResourceCreateComponent_0, View_FormioResourceCreateComponent_Host_0, FormioResourceCreateComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormioResourceCreateComponent", function() { return RenderType_FormioResourceCreateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormioResourceCreateComponent_0", function() { return View_FormioResourceCreateComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormioResourceCreateComponent_Host_0", function() { return View_FormioResourceCreateComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceCreateComponentNgFactory", function() { return FormioResourceCreateComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_formio_formio_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/formio/formio.component.ngfactory */ "./node_modules/angular-formio/components/formio/formio.component.ngfactory.js");
/* harmony import */ var _components_formio_formio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/formio/formio.component */ "./node_modules/angular-formio/components/formio/formio.component.js");
/* harmony import */ var _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/loader/formio.loader */ "./node_modules/angular-formio/components/loader/formio.loader.js");
/* harmony import */ var _formio_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../formio.config */ "./node_modules/angular-formio/formio.config.js");
/* harmony import */ var _custom_component_custom_tags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom-component/custom-tags.service */ "./node_modules/angular-formio/custom-component/custom-tags.service.js");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create.component */ "./node_modules/angular-formio/resource/create/create.component.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_FormioResourceCreateComponent = [".back-button[_ngcontent-%COMP%] { font-size: 0.8em; }"];
var RenderType_FormioResourceCreateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_FormioResourceCreateComponent, data: {} });

function View_FormioResourceCreateComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "h3", [["style", "margin-top:0;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "a", [["class", "back-button"], ["routerLink", "../"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-chevron-left glyphicon glyphicon-chevron-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" | New ", " "]))], function (_ck, _v) { var currVal_2 = "../"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _co.service.form.title; _ck(_v, 4, 0, currVal_3); }); }
function View_FormioResourceCreateComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_FormioResourceCreateComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "formio", [], null, [[null, "submit"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_co.onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _components_formio_formio_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormioComponent_0"], _components_formio_formio_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 770048, null, 0, _components_formio_formio_component__WEBPACK_IMPORTED_MODULE_4__["FormioComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_5__["FormioLoader"], [2, _formio_config__WEBPACK_IMPORTED_MODULE_6__["FormioAppConfig"]], [2, _custom_component_custom_tags_service__WEBPACK_IMPORTED_MODULE_7__["CustomTagsService"]]], { form: [0, "form"], submission: [1, "submission"], refresh: [2, "refresh"], error: [3, "error"], success: [4, "success"] }, { submit: "submit" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.service.form; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.service.form; var currVal_2 = _co.service.resource; var currVal_3 = _co.service.refresh; var currVal_4 = _co.onError; var currVal_5 = _co.onSuccess; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_FormioResourceCreateComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_FormioResourceCreateComponent_0, RenderType_FormioResourceCreateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _create_component__WEBPACK_IMPORTED_MODULE_8__["FormioResourceCreateComponent"], [_resource_service__WEBPACK_IMPORTED_MODULE_9__["FormioResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _resource_config__WEBPACK_IMPORTED_MODULE_10__["FormioResourceConfig"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormioResourceCreateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _create_component__WEBPACK_IMPORTED_MODULE_8__["FormioResourceCreateComponent"], View_FormioResourceCreateComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./node_modules/angular-formio/resource/delete/delete.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/angular-formio/resource/delete/delete.component.js ***!
  \*************************************************************************/
/*! exports provided: FormioResourceDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceDeleteComponent", function() { return FormioResourceDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/delete/delete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var FormioResourceDeleteComponent = /** @class */ (function () {
    function FormioResourceDeleteComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    /**
     * @return {?}
     */
    FormioResourceDeleteComponent.prototype.onDelete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.remove().then((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        }));
    };
    /**
     * @return {?}
     */
    FormioResourceDeleteComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    };
    FormioResourceDeleteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<h3>Are you sure you wish to delete this record?</h3> <div class=\"btn-toolbar\"> <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger\" style=\"margin-right: 10px;\">Yes</button> <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-danger\">No</button> </div> "
                },] },
    ];
    /** @nocollapse */
    FormioResourceDeleteComponent.ctorParameters = function () { return [
        { type: _resource_service__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    return FormioResourceDeleteComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/delete/delete.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-formio/resource/delete/delete.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_FormioResourceDeleteComponent, View_FormioResourceDeleteComponent_0, View_FormioResourceDeleteComponent_Host_0, FormioResourceDeleteComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormioResourceDeleteComponent", function() { return RenderType_FormioResourceDeleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormioResourceDeleteComponent_0", function() { return View_FormioResourceDeleteComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormioResourceDeleteComponent_Host_0", function() { return View_FormioResourceDeleteComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceDeleteComponentNgFactory", function() { return FormioResourceDeleteComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.component */ "./node_modules/angular-formio/resource/delete/delete.component.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_FormioResourceDeleteComponent = [];
var RenderType_FormioResourceDeleteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_FormioResourceDeleteComponent, data: {} });

function View_FormioResourceDeleteComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Are you sure you wish to delete this record?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "div", [["class", "btn-toolbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["style", "margin-right: 10px;"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDelete() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Yes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No"]))], null, null); }
function View_FormioResourceDeleteComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_FormioResourceDeleteComponent_0, RenderType_FormioResourceDeleteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _delete_component__WEBPACK_IMPORTED_MODULE_1__["FormioResourceDeleteComponent"], [_resource_service__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], null, null); }
var FormioResourceDeleteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _delete_component__WEBPACK_IMPORTED_MODULE_1__["FormioResourceDeleteComponent"], View_FormioResourceDeleteComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./node_modules/angular-formio/resource/edit/edit.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-formio/resource/edit/edit.component.js ***!
  \*********************************************************************/
/*! exports provided: FormioResourceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceEditComponent", function() { return FormioResourceEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/edit/edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var FormioResourceEditComponent = /** @class */ (function () {
    function FormioResourceEditComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.triggerError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioResourceEditComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        /** @type {?} */
        var edit = this.service.resource;
        edit.data = submission.data;
        this.service.save(edit)
            .then((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.triggerError.emit(err); }));
    };
    FormioResourceEditComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio [form]=\"service.form\" [submission]=\"service.resource\" [error]=\"triggerError\" [refresh]=\"service.refresh\" (submit)=\"onSubmit($event)\" ></formio> "
                },] },
    ];
    /** @nocollapse */
    FormioResourceEditComponent.ctorParameters = function () { return [
        { type: _resource_service__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _resource_config__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"] }
    ]; };
    return FormioResourceEditComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/angular-formio/resource/index.js ***!
  \*******************************************************/
/*! exports provided: FormioResourceConfig, FormioResources, FormioResourceService, FormioResourceComponent, FormioResourceViewComponent, FormioResourceEditComponent, FormioResourceDeleteComponent, FormioResourceCreateComponent, FormioResourceIndexComponent, FormioResourceRoutes, FormioResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceConfig", function() { return _resource_config__WEBPACK_IMPORTED_MODULE_0__["FormioResourceConfig"]; });

/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.service */ "./node_modules/angular-formio/resource/resources.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResources", function() { return _resources_service__WEBPACK_IMPORTED_MODULE_1__["FormioResources"]; });

/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceService", function() { return _resource_service__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"]; });

/* harmony import */ var _resource_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.component */ "./node_modules/angular-formio/resource/resource.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceComponent", function() { return _resource_component__WEBPACK_IMPORTED_MODULE_3__["FormioResourceComponent"]; });

/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./node_modules/angular-formio/resource/view/view.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceViewComponent", function() { return _view_view_component__WEBPACK_IMPORTED_MODULE_4__["FormioResourceViewComponent"]; });

/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./node_modules/angular-formio/resource/edit/edit.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceEditComponent", function() { return _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["FormioResourceEditComponent"]; });

/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete/delete.component */ "./node_modules/angular-formio/resource/delete/delete.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceDeleteComponent", function() { return _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["FormioResourceDeleteComponent"]; });

/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create.component */ "./node_modules/angular-formio/resource/create/create.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceCreateComponent", function() { return _create_create_component__WEBPACK_IMPORTED_MODULE_7__["FormioResourceCreateComponent"]; });

/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./node_modules/angular-formio/resource/index/index.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceIndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_8__["FormioResourceIndexComponent"]; });

/* harmony import */ var _resource_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resource.routes */ "./node_modules/angular-formio/resource/resource.routes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResourceRoutes", function() { return _resource_routes__WEBPACK_IMPORTED_MODULE_9__["FormioResourceRoutes"]; });

/* harmony import */ var _resource_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource.module */ "./node_modules/angular-formio/resource/resource.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioResource", function() { return _resource_module__WEBPACK_IMPORTED_MODULE_10__["FormioResource"]; });

/**
 * @fileoverview added by tsickle
 * Generated from: resource/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */













/***/ }),

/***/ "./node_modules/angular-formio/resource/index/index.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular-formio/resource/index/index.component.js ***!
  \***********************************************************************/
/*! exports provided: FormioResourceIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceIndexComponent", function() { return FormioResourceIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @fileoverview added by tsickle
 * Generated from: resource/index/index.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





var FormioResourceIndexComponent = /** @class */ (function () {
    function FormioResourceIndexComponent(service, route, router, config, cdr) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.cdr = cdr;
    }
    /**
     * @return {?}
     */
    FormioResourceIndexComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.gridQuery = {};
        this.service.setContext(this.route);
        this.service.formLoaded.then((/**
         * @return {?}
         */
        function () {
            if (_this.service &&
                _this.config.parents &&
                _this.config.parents.length) {
                _this.service.loadParents().then((/**
                 * @param {?} parents
                 * @return {?}
                 */
                function (parents) {
                    Object(lodash__WEBPACK_IMPORTED_MODULE_4__["each"])(parents, (/**
                     * @param {?} parent
                     * @return {?}
                     */
                    function (parent) {
                        if (parent && parent.filter) {
                            _this.gridQuery['data.' + parent.name + '._id'] =
                                parent.resource._id;
                        }
                    }));
                    // Set the source to load the grid.
                    _this.gridSrc = _this.service.formUrl;
                    _this.createText = "New " + _this.service.form.title;
                }));
            }
            else if (_this.service.formUrl) {
                _this.gridSrc = _this.service.formUrl;
                _this.createText = "New " + _this.service.form.title;
            }
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    FormioResourceIndexComponent.prototype.onSelect = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    };
    /**
     * @return {?}
     */
    FormioResourceIndexComponent.prototype.onCreateItem = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    FormioResourceIndexComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio-alerts [alerts]=\"service.alerts\"></formio-alerts> <formio-grid [src]=\"gridSrc\" [query]=\"gridQuery\" [onForm]=\"service.formLoaded\" (rowSelect)=\"onSelect($event)\" (error)=\"service.onError($event)\" (createItem)=\"onCreateItem()\" [createText]=\"createText\" ></formio-grid> "
                },] },
    ];
    /** @nocollapse */
    FormioResourceIndexComponent.ctorParameters = function () { return [
        { type: _resource_service__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _resource_config__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    return FormioResourceIndexComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/resource.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/resource/resource.component.js ***!
  \********************************************************************/
/*! exports provided: FormioResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceComponent", function() { return FormioResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./node_modules/angular-formio/auth/auth.service.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var FormioResourceComponent = /** @class */ (function () {
    function FormioResourceComponent(service, route, auth, changeDetectorRef, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.auth = auth;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.perms = { delete: false, edit: false };
        // subscribe to the router events, so that we could re-load the submission if navigation happens from one submission to another
        this.navigationSubscription = this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.init();
            }
        }));
    }
    /**
     * @return {?}
     */
    FormioResourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    FormioResourceComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.loadResource(this.route);
        this.service.formLoaded.then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            _this.auth.ready.then((/**
             * @return {?}
             */
            function () {
                _this.service.resourceLoaded.then((/**
                 * @param {?} resource
                 * @return {?}
                 */
                function (resource) {
                    _this.service.formFormio.userPermissions(_this.auth.user, form, resource).then((/**
                     * @param {?} perms
                     * @return {?}
                     */
                    function (perms) {
                        _this.perms.delete = perms.delete;
                        _this.perms.edit = perms.edit;
                        _this.changeDetectorRef.detectChanges();
                    }));
                }));
            }));
        }));
    };
    /**
     * @return {?}
     */
    FormioResourceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    FormioResourceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ul class=\"nav nav-tabs\" style=\"margin-bottom: 10px\"> <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li> <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">View</a></li> <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"perms.edit\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\">Edit</a></li> <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"perms.delete\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li> </ul> <router-outlet></router-outlet> "
                },] },
    ];
    /** @nocollapse */
    FormioResourceComponent.ctorParameters = function () { return [
        { type: _resource_service__WEBPACK_IMPORTED_MODULE_3__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["FormioAuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    return FormioResourceComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/resource.config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-formio/resource/resource.config.js ***!
  \*****************************************************************/
/*! exports provided: FormioResourceRouteConfig, FormioResourceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceRouteConfig", function() { return FormioResourceRouteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceConfig", function() { return FormioResourceConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */
function FormioResourceRouteConfig() { }
if (false) {}
var FormioResourceConfig = /** @class */ (function () {
    function FormioResourceConfig() {
        this.name = '';
        this.form = '';
        this.parents = [];
    }
    FormioResourceConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return FormioResourceConfig;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/resource.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-formio/resource/resource.module.js ***!
  \*****************************************************************/
/*! exports provided: FormioResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResource", function() { return FormioResource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _formio_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formio.module */ "./node_modules/angular-formio/formio.module.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/* harmony import */ var _grid_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grid/grid.module */ "./node_modules/angular-formio/grid/grid.module.js");
/* harmony import */ var _resource_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource.component */ "./node_modules/angular-formio/resource/resource.component.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./node_modules/angular-formio/resource/view/view.component.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./node_modules/angular-formio/resource/edit/edit.component.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete/delete.component */ "./node_modules/angular-formio/resource/delete/delete.component.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create/create.component */ "./node_modules/angular-formio/resource/create/create.component.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ "./node_modules/angular-formio/resource/index/index.component.js");
/* harmony import */ var _resource_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resource.routes */ "./node_modules/angular-formio/resource/resource.routes.js");
/* harmony import */ var _formio_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formio.utils */ "./node_modules/angular-formio/formio.utils.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */














var FormioResource = /** @class */ (function () {
    function FormioResource() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FormioResource.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object(_formio_utils__WEBPACK_IMPORTED_MODULE_13__["extendRouter"])(FormioResource, config, _resource_routes__WEBPACK_IMPORTED_MODULE_12__["FormioResourceRoutes"]);
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    FormioResource.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object(_formio_utils__WEBPACK_IMPORTED_MODULE_13__["extendRouter"])(FormioResource, config, _resource_routes__WEBPACK_IMPORTED_MODULE_12__["FormioResourceRoutes"]);
    };
    FormioResource.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _formio_module__WEBPACK_IMPORTED_MODULE_3__["FormioModule"],
                        _grid_grid_module__WEBPACK_IMPORTED_MODULE_5__["FormioGrid"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                    ],
                    declarations: [
                        _resource_component__WEBPACK_IMPORTED_MODULE_6__["FormioResourceComponent"],
                        _create_create_component__WEBPACK_IMPORTED_MODULE_10__["FormioResourceCreateComponent"],
                        _index_index_component__WEBPACK_IMPORTED_MODULE_11__["FormioResourceIndexComponent"],
                        _view_view_component__WEBPACK_IMPORTED_MODULE_7__["FormioResourceViewComponent"],
                        _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["FormioResourceEditComponent"],
                        _delete_delete_component__WEBPACK_IMPORTED_MODULE_9__["FormioResourceDeleteComponent"]
                    ],
                    providers: [
                        _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_4__["FormioAlerts"]
                    ]
                },] },
    ];
    return FormioResource;
}());



/***/ }),

/***/ "./node_modules/angular-formio/resource/resource.routes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-formio/resource/resource.routes.js ***!
  \*****************************************************************/
/*! exports provided: FormioResourceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceRoutes", function() { return FormioResourceRoutes; });
/* harmony import */ var _resource_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource.component */ "./node_modules/angular-formio/resource/resource.component.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/view.component */ "./node_modules/angular-formio/resource/view/view.component.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./node_modules/angular-formio/resource/edit/edit.component.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete/delete.component */ "./node_modules/angular-formio/resource/delete/delete.component.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./node_modules/angular-formio/resource/create/create.component.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./node_modules/angular-formio/resource/index/index.component.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.routes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/**
 * @param {?=} config
 * @return {?}
 */
function FormioResourceRoutes(config) {
    return [
        {
            path: '',
            component: config && config.index ? config.index : _index_index_component__WEBPACK_IMPORTED_MODULE_5__["FormioResourceIndexComponent"]
        },
        {
            path: 'new',
            component: config && config.create ? config.create : _create_create_component__WEBPACK_IMPORTED_MODULE_4__["FormioResourceCreateComponent"]
        },
        {
            path: ':id',
            component: config && config.resource ? config.resource : _resource_component__WEBPACK_IMPORTED_MODULE_0__["FormioResourceComponent"],
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: config && config.view ? config.view : _view_view_component__WEBPACK_IMPORTED_MODULE_1__["FormioResourceViewComponent"]
                },
                {
                    path: 'edit',
                    component: config && config.edit ? config.edit : _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["FormioResourceEditComponent"]
                },
                {
                    path: 'delete',
                    component: config && config.delete ? config.delete : _delete_delete_component__WEBPACK_IMPORTED_MODULE_3__["FormioResourceDeleteComponent"]
                }
            ]
        }
    ];
}


/***/ }),

/***/ "./node_modules/angular-formio/resource/resource.service.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular-formio/resource/resource.service.js ***!
  \******************************************************************/
/*! exports provided: FormioResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceService", function() { return FormioResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.service */ "./node_modules/angular-formio/resource/resources.service.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/* harmony import */ var _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loader/formio.loader */ "./node_modules/angular-formio/components/loader/formio.loader.js");
/* harmony import */ var _formio_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formio.config */ "./node_modules/angular-formio/formio.config.js");
/* harmony import */ var native_promise_only__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! native-promise-only */ "./node_modules/native-promise-only/lib/npo.src.js");
/* harmony import */ var native_promise_only__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(native_promise_only__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formiojs */ "./node_modules/formiojs/index.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */









var FormioResourceService = /** @class */ (function () {
    function FormioResourceService(appConfig, config, loader, resourcesService, appRef) {
        var _this = this;
        this.appConfig = appConfig;
        this.config = config;
        this.loader = loader;
        this.resourcesService = resourcesService;
        this.appRef = appRef;
        this.initialized = false;
        this.alerts = new _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_3__["FormioAlerts"]();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formLoaded = new native_promise_only__WEBPACK_IMPORTED_MODULE_6___default.a((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.formResolve = resolve;
            _this.formReject = reject;
        }));
        this.init();
    }
    /**
     * @return {?}
     */
    FormioResourceService.prototype.initialize = /**
     * @return {?}
     */
    function () {
        console.warn('FormioResourceService.initialize() has been deprecated.');
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        if (this.appConfig && this.appConfig.appUrl) {
            formiojs__WEBPACK_IMPORTED_MODULE_7__["Formio"].setBaseUrl(this.appConfig.apiUrl);
            formiojs__WEBPACK_IMPORTED_MODULE_7__["Formio"].setProjectUrl(this.appConfig.appUrl);
            formiojs__WEBPACK_IMPORTED_MODULE_7__["Formio"].formOnly = this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        // Create the form url and load the resources.
        this.formUrl = this.appConfig.appUrl + '/' + this.config.form;
        this.resource = { data: {} };
        // Add this resource service to the list of all resources in context.
        if (this.resourcesService) {
            this.resources = this.resourcesService.resources;
            this.resources[this.config.name] = this;
        }
        return this.loadForm();
    };
    /**
     * @param {?} error
     * @return {?}
     */
    FormioResourceService.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.alerts.setAlert({
            type: 'danger',
            message: error.message || error
        });
        if (this.resourcesService) {
            this.resourcesService.error.emit(error);
        }
        throw error;
    };
    /**
     * @param {?} err
     * @return {?}
     */
    FormioResourceService.prototype.onFormError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.formReject(err);
        this.onError(err);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    FormioResourceService.prototype.setContext = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        this.resourceId = route.snapshot.params['id'];
        this.resource = { data: {} };
        this.resourceUrl = this.appConfig.appUrl + '/' + this.config.form;
        if (this.resourceId) {
            this.resourceUrl += '/submission/' + this.resourceId;
        }
        this.formio = new formiojs__WEBPACK_IMPORTED_MODULE_7__["Formio"](this.resourceUrl);
        if (this.resourcesService) {
            this.resources[this.config.name] = this;
        }
        this.loadParents();
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.loadForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formFormio = new formiojs__WEBPACK_IMPORTED_MODULE_7__["Formio"](this.formUrl);
        this.loader.setLoading(true);
        this.formLoading = this.formFormio
            .loadForm()
            .then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            _this.form = form;
            _this.formResolve(form);
            _this.loader.setLoading(false);
            _this.loadParents();
            _this.appRef.tick();
            return form;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onFormError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onFormError(err); }));
        return this.formLoading;
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.loadParents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.config.parents || !this.config.parents.length) {
            return native_promise_only__WEBPACK_IMPORTED_MODULE_6___default.a.resolve([]);
        }
        if (!this.resourcesService) {
            console.warn('You must provide the FormioResources within your application to use nested resources.');
            return native_promise_only__WEBPACK_IMPORTED_MODULE_6___default.a.resolve([]);
        }
        return this.formLoading.then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            // Iterate through the list of parents.
            /** @type {?} */
            var _parentsLoaded = [];
            _this.config.parents.forEach((/**
             * @param {?} parent
             * @return {?}
             */
            function (parent) {
                /** @type {?} */
                var resourceName = parent.resource || parent;
                /** @type {?} */
                var resourceField = parent.field || parent;
                /** @type {?} */
                var filterResource = parent.hasOwnProperty('filter') ? parent.filter : true;
                if (_this.resources.hasOwnProperty(resourceName) && _this.resources[resourceName].resourceLoaded) {
                    _parentsLoaded.push(_this.resources[resourceName].resourceLoaded.then((/**
                     * @param {?} resource
                     * @return {?}
                     */
                    function (resource) {
                        /** @type {?} */
                        var parentPath = '';
                        formiojs__WEBPACK_IMPORTED_MODULE_7__["Utils"].eachComponent(form.components, (/**
                         * @param {?} component
                         * @param {?} path
                         * @return {?}
                         */
                        function (component, path) {
                            if (component.key === resourceField) {
                                component.hidden = true;
                                component.clearOnHide = false;
                                lodash__WEBPACK_IMPORTED_MODULE_8___default.a.set(_this.resource.data, path, resource);
                                parentPath = path;
                                return true;
                            }
                        }));
                        return {
                            name: parentPath,
                            filter: filterResource,
                            resource: resource
                        };
                    })));
                }
            }));
            // When all the parents have loaded, emit that to the onParents emitter.
            return native_promise_only__WEBPACK_IMPORTED_MODULE_6___default.a.all(_parentsLoaded).then((/**
             * @param {?} parents
             * @return {?}
             */
            function (parents) {
                _this.refresh.emit({
                    form: form,
                    submission: _this.resource
                });
                return parents;
            }));
        }));
    };
    /**
     * @param {?} err
     * @return {?}
     */
    FormioResourceService.prototype.onSubmissionError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.onError(err);
    };
    /**
     * @param {?} route
     * @return {?}
     */
    FormioResourceService.prototype.loadResource = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        var _this = this;
        this.setContext(route);
        this.loader.setLoading(true);
        this.resourceLoading = this.resourceLoaded = this.formio
            .loadSubmission(null, { ignoreCache: true })
            .then((/**
         * @param {?} resource
         * @return {?}
         */
        function (resource) {
            _this.resource = resource;
            _this.loader.setLoading(false);
            _this.refresh.emit({
                property: 'submission',
                value: _this.resource
            });
            return resource;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onSubmissionError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onSubmissionError(err); }));
        return this.resourceLoading;
    };
    /**
     * @param {?} resource
     * @return {?}
     */
    FormioResourceService.prototype.save = /**
     * @param {?} resource
     * @return {?}
     */
    function (resource) {
        var _this = this;
        /** @type {?} */
        var formio = resource._id ? this.formio : this.formFormio;
        return formio
            .saveSubmission(resource)
            .then((/**
         * @param {?} saved
         * @return {?}
         */
        function (saved) {
            _this.resource = saved;
            return saved;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }));
    };
    /**
     * @return {?}
     */
    FormioResourceService.prototype.remove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.formio
            .deleteSubmission()
            .then((/**
         * @return {?}
         */
        function () {
            _this.resource = null;
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError(err); }));
    };
    FormioResourceService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FormioResourceService.ctorParameters = function () { return [
        { type: _formio_config__WEBPACK_IMPORTED_MODULE_5__["FormioAppConfig"] },
        { type: _resource_config__WEBPACK_IMPORTED_MODULE_1__["FormioResourceConfig"] },
        { type: _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_4__["FormioLoader"] },
        { type: _resources_service__WEBPACK_IMPORTED_MODULE_2__["FormioResources"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
    ]; };
    return FormioResourceService;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/resource/view/view.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-formio/resource/view/view.component.js ***!
  \*********************************************************************/
/*! exports provided: FormioResourceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioResourceViewComponent", function() { return FormioResourceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource.service */ "./node_modules/angular-formio/resource/resource.service.js");
/* harmony import */ var _resource_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource.config */ "./node_modules/angular-formio/resource/resource.config.js");
/**
 * @fileoverview added by tsickle
 * Generated from: resource/view/view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var FormioResourceViewComponent = /** @class */ (function () {
    function FormioResourceViewComponent(service, config) {
        this.service = service;
        this.config = config;
    }
    FormioResourceViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio [form]=\"service.form\" [submission]=\"service.resource\" [refresh]=\"service.refresh\" [hideComponents]=\"config.parents\" [readOnly]=\"true\" ></formio> "
                },] },
    ];
    /** @nocollapse */
    FormioResourceViewComponent.ctorParameters = function () { return [
        { type: _resource_service__WEBPACK_IMPORTED_MODULE_1__["FormioResourceService"] },
        { type: _resource_config__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"] }
    ]; };
    return FormioResourceViewComponent;
}());

if (false) {}


/***/ })

}]);
//# sourceMappingURL=default~form-submission-submission-module-ngfactory~offline-offline-module-ngfactory.js.map