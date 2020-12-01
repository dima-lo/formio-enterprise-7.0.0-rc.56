(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offline-offline-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/edit/edit.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/edit/edit.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body bg-light\">\n  <h3>Offline Information</h3>\n  <ul>\n    <li>Request ID: {{ service.resource?.request?._id }}</li>\n    <li>Method: {{ service.resource?.request?.method }}</li>\n    <li>URL: {{ service.resource?.request?.url }}</li>\n  </ul>\n</div>\n<formio\n  [form]=\"service.form\"\n  [submission]=\"service.resource?.request?.data\"\n  [error]=\"triggerError\"\n  [refresh]=\"service.refresh\"\n  (submit)=\"onSubmit($event)\"\n></formio>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/grid/body/body.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/grid/body/body.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <tbody>\n  <tr *ngFor=\"let row of rows\" (click)=\"onRowSelect($event, row)\">\n    <td>{{ row.created }}</td>\n    <td>{{ getMethod(row.method) }}</td>\n    <td>{{ row.url }}</td>\n  </tr>\n  </tbody>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/grid/footer/footer.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/grid/footer/footer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <tfoot class=\"formio-grid-footer\"></tfoot>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/grid/header/header.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/grid/header/header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <thead>\n  <tr>\n    <th>Created</th>\n    <th>Operation</th>\n    <th>Url</th>\n  </tr>\n  </thead>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/offline.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/offline.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Offline Tasks</h4>\n<formio-grid\n  [src]=\"gridSrc\"\n  [components]=\"gridComps\"\n  [refresh]=\"refreshGrid\"\n  [items]=\"offlineService.offlineSubmissions\"\n  [query]=\"gridQuery\"\n  [onForm]=\"service.formLoaded\"\n  (rowSelect)=\"onSelect($event)\"\n  (error)=\"service.onError($event)\"\n  createText=\"\"\n></formio-grid>\n<button [attr.disabled]=\"offlineService.isOnline ? null : ''\" type=\"button\" class=\"btn btn-warning mr-3\" (click)=\"offlineService.dequeueSubmissions()\">\n  <i [ngClass]=\"{\n    'fa-spin fa-refresh': offlineService.sync,\n    'fa-send': !offlineService.sync\n  }\" class=\"fa mr-1\"></i> Process Tasks\n</button>\n<button type=\"button\" class=\"btn btn-light mr-3\" (click)=\"emptyQueue()\"><i class=\"fa fa-trash mr-2\"></i> Empty Queue</button>\n<button type=\"button\" class=\"btn btn-light\" (click)=\"clearOffline()\"><i class=\"fa fa-trash mr-2\"></i> Clear Offline Data</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/resource/resource.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/resource/resource.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" style=\"margin-bottom: 10px\">\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">View</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\">Edit</a></li>\n  <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/offline/view/view.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/offline/view/view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body bg-light\">\n  <h3>Offline Queue Information</h3>\n  <ul>\n    <li>Created: {{ service.resource?.request?.data?.created }}</li>\n    <li>Request ID: {{ service.resource?.request?._id }}</li>\n    <li>Method: {{ service.resource?.request?.method }}</li>\n    <li>URL: {{ service.resource?.request?.url }}</li>\n  </ul>\n</div>\n<formio\n  *ngIf=\"service.resource.request\"\n  [form]=\"service.form\"\n  [submission]=\"service.resource.request.data\"\n  [refresh]=\"service.refresh\"\n  [hideComponents]=\"config.parents\"\n  [readOnly]=\"true\"\n></formio>\n"

/***/ }),

/***/ "./src/app/offline/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/offline/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: OfflineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineEditComponent", function() { return OfflineEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");



var OfflineEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineEditComponent, _super);
    function OfflineEditComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfflineEditComponent.prototype.onSubmit = function (submission) {
        var _this = this;
        this.service.save(submission)
            .then(function () {
            _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
        })
            .catch(function (err) { return _this.triggerError.emit(err); });
    };
    OfflineEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/edit/edit.component.html")
        })
    ], OfflineEditComponent);
    return OfflineEditComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceEditComponent"]));



/***/ }),

/***/ "./src/app/offline/grid/body/body.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/offline/grid/body/body.component.ts ***!
  \*****************************************************/
/*! exports provided: OfflineBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineBodyComponent", function() { return OfflineBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");



var OfflineBodyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineBodyComponent, _super);
    function OfflineBodyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfflineBodyComponent.prototype.getMethod = function (method) {
        switch (method) {
            case 'POST':
                return 'Create';
            case 'PUT':
                return 'Update';
            case 'DELETE':
                return 'Delete';
        }
    };
    OfflineBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/grid/body/body.component.html")
        })
    ], OfflineBodyComponent);
    return OfflineBodyComponent;
}(angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__["GridBodyComponent"]));



/***/ }),

/***/ "./src/app/offline/grid/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/offline/grid/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: OfflineFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineFooterComponent", function() { return OfflineFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");



var OfflineFooterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineFooterComponent, _super);
    function OfflineFooterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfflineFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/grid/footer/footer.component.html")
        })
    ], OfflineFooterComponent);
    return OfflineFooterComponent;
}(angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__["GridFooterComponent"]));



/***/ }),

/***/ "./src/app/offline/grid/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/offline/grid/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: OfflineHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineHeaderComponent", function() { return OfflineHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");



var OfflineHeaderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineHeaderComponent, _super);
    function OfflineHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfflineHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/grid/header/header.component.html")
        })
    ], OfflineHeaderComponent);
    return OfflineHeaderComponent;
}(angular_formio_grid__WEBPACK_IMPORTED_MODULE_2__["GridHeaderComponent"]));



/***/ }),

/***/ "./src/app/offline/offline.component.scss":
/*!************************************************!*\
  !*** ./src/app/offline/offline.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmxpbmUvb2ZmbGluZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/offline/offline.component.ts":
/*!**********************************************!*\
  !*** ./src/app/offline/offline.component.ts ***!
  \**********************************************/
/*! exports provided: OfflineIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineIndexComponent", function() { return OfflineIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offline.service */ "./src/app/offline/offline.service.ts");
/* harmony import */ var _grid_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/header/header.component */ "./src/app/offline/grid/header/header.component.ts");
/* harmony import */ var _grid_body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid/body/body.component */ "./src/app/offline/grid/body/body.component.ts");
/* harmony import */ var _grid_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid/footer/footer.component */ "./src/app/offline/grid/footer/footer.component.ts");








var OfflineIndexComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineIndexComponent, _super);
    function OfflineIndexComponent(service, route, router, config, offlineService) {
        var _this = _super.call(this, service, route, router, config) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.config = config;
        _this.offlineService = offlineService;
        _this.refreshGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.gridComps = {
            header: _grid_header_header_component__WEBPACK_IMPORTED_MODULE_5__["OfflineHeaderComponent"],
            body: _grid_body_body_component__WEBPACK_IMPORTED_MODULE_6__["OfflineBodyComponent"],
            footer: _grid_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["OfflineFooterComponent"]
        };
        return _this;
    }
    OfflineIndexComponent.prototype.emptyQueue = function () {
        var _this = this;
        if (window.confirm('This will delete all queued offline tasks. Are you sure?')) {
            this.offlineService.emptyQueue().then(function () { return _this.refreshGrid.emit({}); });
        }
    };
    OfflineIndexComponent.prototype.clearOffline = function () {
        var _this = this;
        if (window.confirm('This will delete all offline data. Are you sure?')) {
            this.offlineService.clearAll().then(function () { return _this.refreshGrid.emit({}); });
        }
    };
    OfflineIndexComponent.ctorParameters = function () { return [
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"] }
    ]; };
    OfflineIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offline',
            template: __webpack_require__(/*! raw-loader!./offline.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/offline.component.html"),
            styles: [__webpack_require__(/*! ./offline.component.scss */ "./src/app/offline/offline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"],
            _offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"]])
    ], OfflineIndexComponent);
    return OfflineIndexComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceIndexComponent"]));



/***/ }),

/***/ "./src/app/offline/offline.config.ts":
/*!*******************************************!*\
  !*** ./src/app/offline/offline.config.ts ***!
  \*******************************************/
/*! exports provided: OfflineConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineConfig", function() { return OfflineConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




var OfflineConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineConfig, _super);
    function OfflineConfig(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    Object.defineProperty(OfflineConfig.prototype, "name", {
        get: function () {
            return this.config.formName;
        },
        set: function (name) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfflineConfig.prototype, "form", {
        get: function () {
            return this.config.formPath;
        },
        set: function (form) { },
        enumerable: true,
        configurable: true
    });
    OfflineConfig.ctorParameters = function () { return [
        { type: _config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] }
    ]; };
    OfflineConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], OfflineConfig);
    return OfflineConfig;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"]));



/***/ }),

/***/ "./src/app/offline/offline.module.ts":
/*!*******************************************!*\
  !*** ./src/app/offline/offline.module.ts ***!
  \*******************************************/
/*! exports provided: OfflineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineModule", function() { return OfflineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _offline_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offline.resource.service */ "./src/app/offline/offline.resource.service.ts");
/* harmony import */ var _offline_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offline.config */ "./src/app/offline/offline.config.ts");
/* harmony import */ var _offline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offline.component */ "./src/app/offline/offline.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/offline/resource/resource.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/view.component */ "./src/app/offline/view/view.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/offline/edit/edit.component.ts");
/* harmony import */ var _grid_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grid/header/header.component */ "./src/app/offline/grid/header/header.component.ts");
/* harmony import */ var _grid_body_body_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid/body/body.component */ "./src/app/offline/grid/body/body.component.ts");
/* harmony import */ var _grid_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid/footer/footer.component */ "./src/app/offline/grid/footer/footer.component.ts");
















var OfflineModule = /** @class */ (function () {
    function OfflineModule() {
    }
    OfflineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _offline_component__WEBPACK_IMPORTED_MODULE_9__["OfflineIndexComponent"],
                _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__["OfflineResourceComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_11__["OfflineViewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["OfflineEditComponent"],
                _grid_header_header_component__WEBPACK_IMPORTED_MODULE_13__["OfflineHeaderComponent"],
                _grid_body_body_component__WEBPACK_IMPORTED_MODULE_14__["OfflineBodyComponent"],
                _grid_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["OfflineFooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angular_formio__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_5__["FormioGrid"],
                angular_formio_resource__WEBPACK_IMPORTED_MODULE_6__["FormioResource"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(angular_formio_resource__WEBPACK_IMPORTED_MODULE_6__["FormioResourceRoutes"])({
                    index: _offline_component__WEBPACK_IMPORTED_MODULE_9__["OfflineIndexComponent"],
                    resource: _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__["OfflineResourceComponent"],
                    view: _view_view_component__WEBPACK_IMPORTED_MODULE_11__["OfflineViewComponent"],
                    edit: _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["OfflineEditComponent"]
                }))
            ],
            providers: [
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_6__["FormioResourceService"],
                    useClass: _offline_resource_service__WEBPACK_IMPORTED_MODULE_7__["OfflineResourceService"]
                },
                {
                    provide: angular_formio_resource__WEBPACK_IMPORTED_MODULE_6__["FormioResourceConfig"],
                    useClass: _offline_config__WEBPACK_IMPORTED_MODULE_8__["OfflineConfig"]
                }
            ],
            entryComponents: [
                _grid_header_header_component__WEBPACK_IMPORTED_MODULE_13__["OfflineHeaderComponent"],
                _grid_body_body_component__WEBPACK_IMPORTED_MODULE_14__["OfflineBodyComponent"],
                _grid_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["OfflineFooterComponent"]
            ]
        })
    ], OfflineModule);
    return OfflineModule;
}());



/***/ }),

/***/ "./src/app/offline/offline.resource.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/offline/offline.resource.service.ts ***!
  \*****************************************************/
/*! exports provided: OfflineResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineResourceService", function() { return OfflineResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offline.service */ "./src/app/offline/offline.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






var OfflineResourceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineResourceService, _super);
    function OfflineResourceService(appConfig, config, loader, resourcesService, offlineService) {
        var _this = _super.call(this, appConfig, config, loader, resourcesService) || this;
        _this.appConfig = appConfig;
        _this.config = config;
        _this.loader = loader;
        _this.resourcesService = resourcesService;
        _this.offlineService = offlineService;
        return _this;
    }
    OfflineResourceService.prototype.loadResource = function (route) {
        var _this = this;
        this.setContext(route);
        this.loader.loading = true;
        this.resourceLoading = this.resourceLoaded = new Promise(function (resolve, reject) {
            route.params.subscribe(function (params) {
                _this.offlineService.offlinePlugin.ready.then(function () {
                    var submissionQueue = _this.offlineService.offlinePlugin.getSubmissionQueueSubmission(params.form, params.id);
                    if (submissionQueue) {
                        _this.resource = submissionQueue;
                        _this.loader.loading = false;
                        _this.refresh.emit({
                            property: 'submission',
                            value: _this.resource
                        });
                        resolve(submissionQueue);
                    }
                    else {
                        _this.onSubmissionError('Submission not found');
                        reject('Submission not found');
                    }
                });
            });
        });
        return this.resourceLoading;
    };
    OfflineResourceService.prototype.save = function (submission) {
        var _this = this;
        return this.offlineService.offlinePlugin.ready.then(function () {
            return _this.offlineService.offlinePlugin.updateSubmissionQueueSubmission(submission);
        });
    };
    OfflineResourceService.prototype.remove = function () {
        var _this = this;
        return this.offlineService.offlinePlugin.ready.then(function () {
            return _this.offlineService.offlinePlugin.removeSubmissionQueueSubmission(_this.resource.request);
        });
    };
    OfflineResourceService.ctorParameters = function () { return [
        { type: _config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] },
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"] },
        { type: angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"] },
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResources"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"] }
    ]; };
    OfflineResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceConfig"],
            angular_formio__WEBPACK_IMPORTED_MODULE_2__["FormioLoader"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResources"],
            _offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"]])
    ], OfflineResourceService);
    return OfflineResourceService;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_3__["FormioResourceService"]));



/***/ }),

/***/ "./src/app/offline/resource/resource.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/offline/resource/resource.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmxpbmUvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/offline/resource/resource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/offline/resource/resource.component.ts ***!
  \********************************************************/
/*! exports provided: OfflineResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineResourceComponent", function() { return OfflineResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");



var OfflineResourceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineResourceComponent, _super);
    function OfflineResourceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfflineResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! raw-loader!./resource.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.scss */ "./src/app/offline/resource/resource.component.scss")]
        })
    ], OfflineResourceComponent);
    return OfflineResourceComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceComponent"]));



/***/ }),

/***/ "./src/app/offline/view/view.component.ts":
/*!************************************************!*\
  !*** ./src/app/offline/view/view.component.ts ***!
  \************************************************/
/*! exports provided: OfflineViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineViewComponent", function() { return OfflineViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/resource */ "./node_modules/angular-formio/resource/index.js");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offline.service */ "./src/app/offline/offline.service.ts");




var OfflineViewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OfflineViewComponent, _super);
    function OfflineViewComponent(service, config, offlineService) {
        var _this = _super.call(this, service, config) || this;
        _this.service = service;
        _this.config = config;
        _this.offlineService = offlineService;
        return _this;
    }
    OfflineViewComponent.ctorParameters = function () { return [
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"] },
        { type: angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"] }
    ]; };
    OfflineViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/offline/view/view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceService"],
            angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceConfig"],
            _offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"]])
    ], OfflineViewComponent);
    return OfflineViewComponent;
}(angular_formio_resource__WEBPACK_IMPORTED_MODULE_2__["FormioResourceViewComponent"]));



/***/ })

}]);
//# sourceMappingURL=offline-offline-module.js.map