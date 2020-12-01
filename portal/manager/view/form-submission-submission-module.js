(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-submission-submission-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/form/submission/grid/body/body.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/submission/grid/body/body.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <tbody>\n  <tr *ngFor=\"let row of rows\" [className]=\"tableClass(row)\" (click)=\"onRowSelect($event, row)\">\n    <td *ngFor=\"let rowHeader of header.headers\" [innerHTML]=\"view(row, rowHeader)\"></td>\n  </tr>\n  </tbody>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/submission/grid/submission-grid.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/submission/grid/submission-grid.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #headerTemplate></ng-template>\n<ng-template #bodyTemplate></ng-template>\n<ng-template #footerTemplate></ng-template>\n<div class=\"card card-body bg-light\" *ngIf=\"!offlineService.isOnline\">\n  <table class=\"table mb-0\">\n    <tr>\n      <td class=\"table-success text-center\">Added Offline</td>\n      <td class=\"table-warning text-center\">Changed Offline</td>\n      <td class=\"table-danger text-center\">Deleted Offline</td>\n    </tr>\n  </table>\n</div>\n<div class=\"formio-grid\">\n  <formio-alerts [alerts]=\"alerts\"></formio-alerts>\n  <table class=\"table table-bordered table-striped table-hover\">\n    <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"header.template\"></ng-container>\n    <formio-loader></formio-loader>\n    <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"body.template\"></ng-container>\n    <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"footer.template\"></ng-container>\n  </table>\n</div>\n<button *ngIf=\"!offlineService.isOnline\" class=\"btn btn-light\" type=\"button\" (click)=\"clearOfflineSubmissions()\">\n  <i class=\"fa fa-trash mr-3\"></i> Clear Offline Submissions\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/submission/index/index.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/submission/index/index.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<offline-submission-grid\n  [src]=\"gridSrc\"\n  [query]=\"gridQuery\"\n  [onForm]=\"service.formLoaded\"\n  (rowSelect)=\"onSelect($event)\"\n  (error)=\"service.onError($event)\"\n  (createItem)=\"onCreateItem()\"\n  createText=\"\"\n></offline-submission-grid>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/submission/resource/resource.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/submission/resource/resource.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"downloadUrl\" [href]=\"downloadUrl\" target=\"_blank\" class=\"pull-right\"><img src=\"assets/pdf.png\" style=\"height: 2em;\" /></a>\n<ul class=\"nav nav-tabs mb-2\">\n  <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"!auth.authenticated\" routerLink=\"../../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" *ngIf=\"auth.authenticated\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">View</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!offlineService.isOnline || perms.edit\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\">Edit</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!offlineService.isOnline || perms.delete\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/form/submission/SubmissionResourceConfig.ts":
/*!*************************************************************!*\
  !*** ./src/app/form/submission/SubmissionResourceConfig.ts ***!
  \*************************************************************/
/*! exports provided: SubmissionResourceConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionResourceConfig", function() { return SubmissionResourceConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");




var SubmissionResourceConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionResourceConfig, _super);
    function SubmissionResourceConfig(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    Object.defineProperty(SubmissionResourceConfig.prototype, "name", {
        get: function () {
            return this.config.formName;
        },
        set: function (name) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubmissionResourceConfig.prototype, "form", {
        get: function () {
            return this.config.formPath;
        },
        set: function (form) { },
        enumerable: true,
        configurable: true
    });
    SubmissionResourceConfig.ctorParameters = function () { return [
        { type: _config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] }
    ]; };
    SubmissionResourceConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], SubmissionResourceConfig);
    return SubmissionResourceConfig;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"]));



/***/ }),

/***/ "./src/app/form/submission/SubmissionService.ts":
/*!******************************************************!*\
  !*** ./src/app/form/submission/SubmissionService.ts ***!
  \******************************************************/
/*! exports provided: SubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionService", function() { return SubmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");





var SubmissionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionService, _super);
    function SubmissionService(appConfig, config, loader, resourcesService) {
        var _this = _super.call(this, appConfig, config, loader, resourcesService) || this;
        _this.appConfig = appConfig;
        _this.config = config;
        _this.loader = loader;
        _this.resourcesService = resourcesService;
        _this.onResource = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    SubmissionService.prototype.setContext = function (route) {
        var _this = this;
        if (this.appConfig.currentForm) {
            _super.prototype.init.call(this);
            return _super.prototype.setContext.call(this, route);
        }
        route.params.subscribe(function (params) {
            _this.appConfig.loadForm(true).then(function () {
                _super.prototype.init.call(_this);
                _super.prototype.setContext.call(_this, route);
            });
        });
    };
    SubmissionService.prototype.save = function (resource) {
        var _this = this;
        return _super.prototype.save.call(this, this.appConfig.submitAlter(resource)).then(function (submission) {
            _this.appConfig.parent.send({ formSubmission: submission });
        });
    };
    SubmissionService.prototype.loadResource = function (route) {
        var _this = this;
        this.resourceLoaded = new Promise(function (resolve) {
            route.params.subscribe(function (params) {
                _this.appConfig.loadForm(true).then(function () {
                    _super.prototype.init.call(_this);
                    _super.prototype.loadResource.call(_this, route).then(function (resource) {
                        _this.onResource.emit(resource);
                        resolve(resource);
                    });
                });
            });
        });
    };
    SubmissionService.prototype.init = function () { };
    SubmissionService.ctorParameters = function () { return [
        { type: _config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"] },
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"] },
        { type: angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"] },
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResources"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    SubmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"],
            angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResources"]])
    ], SubmissionService);
    return SubmissionService;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceService"]));



/***/ }),

/***/ "./src/app/form/submission/grid/body/body.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/form/submission/grid/body/body.component.ts ***!
  \*************************************************************/
/*! exports provided: OfflineSubmissionGridBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineSubmissionGridBodyComponent", function() { return OfflineSubmissionGridBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _offline_offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../offline/offline.service */ "./src/app/offline/offline.service.ts");




var OfflineSubmissionGridBodyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineSubmissionGridBodyComponent, _super);
    function OfflineSubmissionGridBodyComponent(offlineService) {
        var _this = _super.call(this) || this;
        _this.offlineService = offlineService;
        return _this;
    }
    OfflineSubmissionGridBodyComponent.prototype.tableClass = function (row) {
        if (this.offlineService.offlineOps.hasOwnProperty(row._id)) {
            switch (this.offlineService.offlineOps[row._id]) {
                case 'POST':
                    return 'table-success';
                case 'PUT':
                    return 'table-warning';
                case 'DELETE':
                    return 'table-danger';
            }
        }
        return '';
    };
    OfflineSubmissionGridBodyComponent.ctorParameters = function () { return [
        { type: _offline_offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"] }
    ]; };
    OfflineSubmissionGridBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/submission/grid/body/body.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_offline_offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"]])
    ], OfflineSubmissionGridBodyComponent);
    return OfflineSubmissionGridBodyComponent;
}(angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__["SubmissionGridBodyComponent"]));



/***/ }),

/***/ "./src/app/form/submission/grid/submission-grid.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/form/submission/grid/submission-grid.component.ts ***!
  \*******************************************************************/
/*! exports provided: OfflineSubmissionGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineSubmissionGridComponent", function() { return OfflineSubmissionGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/body.component */ "./src/app/form/submission/grid/body/body.component.ts");
/* harmony import */ var _offline_offline_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../offline/offline.service */ "./src/app/offline/offline.service.ts");






var OfflineSubmissionGridComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineSubmissionGridComponent, _super);
    function OfflineSubmissionGridComponent(loader, alerts, _resolver, _ref, offlineService) {
        var _this = _super.call(this, loader, alerts, _resolver, _ref) || this;
        _this.loader = loader;
        _this.alerts = alerts;
        _this._resolver = _resolver;
        _this._ref = _ref;
        _this.offlineService = offlineService;
        _this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.offlineService.onlineChange.subscribe(function (online) {
            _this._ref.detectChanges();
            _this.refresh.emit({});
        });
        _this.components = {
            header: angular_formio_grid__WEBPACK_IMPORTED_MODULE_3__["SubmissionGridHeaderComponent"],
            body: _body_body_component__WEBPACK_IMPORTED_MODULE_4__["OfflineSubmissionGridBodyComponent"],
            footer: angular_formio_grid__WEBPACK_IMPORTED_MODULE_3__["SubmissionGridFooterComponent"]
        };
        return _this;
    }
    OfflineSubmissionGridComponent.prototype.clearOfflineSubmissions = function () {
        var _this = this;
        if (window.confirm('This will clear the offline submission cache. Are you sure?')) {
            this.offlineService.clearOfflineSubmissions().then(function () { return _this.refresh.emit({}); });
        }
    };
    OfflineSubmissionGridComponent.ctorParameters = function () { return [
        { type: angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"] },
        { type: angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioAlerts"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _offline_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"] }
    ]; };
    OfflineSubmissionGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'offline-submission-grid',
            template: __webpack_require__(/*! raw-loader!./submission-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/submission/grid/submission-grid.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"],
            angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioAlerts"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _offline_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"]])
    ], OfflineSubmissionGridComponent);
    return OfflineSubmissionGridComponent;
}(angular_formio_grid__WEBPACK_IMPORTED_MODULE_3__["FormioGridComponent"]));



/***/ }),

/***/ "./src/app/form/submission/index/index.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/form/submission/index/index.component.ts ***!
  \**********************************************************/
/*! exports provided: SubmissionIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionIndexComponent", function() { return SubmissionIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");



var SubmissionIndexComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionIndexComponent, _super);
    function SubmissionIndexComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmissionIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/submission/index/index.component.html")
        })
    ], SubmissionIndexComponent);
    return SubmissionIndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/form/submission/resource/resource.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/form/submission/resource/resource.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vc3VibWlzc2lvbi9yZXNvdXJjZS9yZXNvdXJjZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/form/submission/resource/resource.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/form/submission/resource/resource.component.ts ***!
  \****************************************************************/
/*! exports provided: SubmissionResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionResourceComponent", function() { return SubmissionResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio/auth */ "./node_modules/angular-formio/auth/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _offline_offline_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../offline/offline.service */ "./src/app/offline/offline.service.ts");






var SubmissionResourceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionResourceComponent, _super);
    function SubmissionResourceComponent(service, route, auth, offlineService) {
        var _this = _super.call(this, service, route, auth) || this;
        _this.service = service;
        _this.route = route;
        _this.auth = auth;
        _this.offlineService = offlineService;
        return _this;
    }
    SubmissionResourceComponent.prototype.getDownloadPDF = function () {
        var _this = this;
        this.service.onResource.subscribe(function () {
            _this.service.formio.getDownloadUrl().then(function (url) {
                _this.downloadUrl = url;
            });
        });
    };
    SubmissionResourceComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.getDownloadPDF();
    };
    SubmissionResourceComponent.ctorParameters = function () { return [
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: angular_formio_auth__WEBPACK_IMPORTED_MODULE_3__["FormioAuthService"] },
        { type: _offline_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"] }
    ]; };
    SubmissionResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! raw-loader!./resource.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/submission/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.scss */ "./src/app/form/submission/resource/resource.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angular_formio_auth__WEBPACK_IMPORTED_MODULE_3__["FormioAuthService"],
            _offline_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"]])
    ], SubmissionResourceComponent);
    return SubmissionResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_4__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/form/submission/submission.module.ts":
/*!******************************************************!*\
  !*** ./src/app/form/submission/submission.module.ts ***!
  \******************************************************/
/*! exports provided: SubmissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionModule", function() { return SubmissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var _SubmissionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubmissionService */ "./src/app/form/submission/SubmissionService.ts");
/* harmony import */ var _SubmissionResourceConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubmissionResourceConfig */ "./src/app/form/submission/SubmissionResourceConfig.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/form/submission/index/index.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/form/submission/resource/resource.component.ts");
/* harmony import */ var _grid_submission_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grid/submission-grid.component */ "./src/app/form/submission/grid/submission-grid.component.ts");
/* harmony import */ var _grid_body_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grid/body/body.component */ "./src/app/form/submission/grid/body/body.component.ts");













var SubmissionModule = /** @class */ (function () {
    function SubmissionModule() {
    }
    SubmissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionIndexComponent"],
                _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__["SubmissionResourceComponent"],
                _grid_submission_grid_component__WEBPACK_IMPORTED_MODULE_11__["OfflineSubmissionGridComponent"],
                _grid_body_body_component__WEBPACK_IMPORTED_MODULE_12__["OfflineSubmissionGridBodyComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_6__["FormioGrid"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceRoutes"])({
                    index: _index_index_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionIndexComponent"],
                    resource: _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__["SubmissionResourceComponent"]
                }))
            ],
            providers: [
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceService"],
                    useClass: _SubmissionService__WEBPACK_IMPORTED_MODULE_7__["SubmissionService"]
                },
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_5__["FormioResourceConfig"],
                    useClass: _SubmissionResourceConfig__WEBPACK_IMPORTED_MODULE_8__["SubmissionResourceConfig"]
                }
            ],
            entryComponents: [
                _grid_body_body_component__WEBPACK_IMPORTED_MODULE_12__["OfflineSubmissionGridBodyComponent"]
            ]
        })
    ], SubmissionModule);
    return SubmissionModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-submission-submission-module.js.map