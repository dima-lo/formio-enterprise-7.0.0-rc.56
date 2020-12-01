(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth/auth.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth/auth.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-primary panel panel-default\">\n  <div class=\"card-header panel-heading\">Login to your account</div>\n  <div class=\"card-body panel-body\" *ngIf=\"showLogin\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"card-body panel-body\" *ngIf=\"!showLogin\">\n    <div class=\"loader\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: authRoutes, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRoutes", function() { return authRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var angular_formio_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-formio/auth */ "./node_modules/angular-formio/auth/index.js");






var authRoutes = Object(angular_formio_auth__WEBPACK_IMPORTED_MODULE_5__["FormioAuthRoutes"])({
    auth: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
});
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angular_formio_auth__WEBPACK_IMPORTED_MODULE_5__["FormioAuth"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth/auth.component.scss":
/*!***********************************************!*\
  !*** ./src/app/auth/auth/auth.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth/auth.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_formio_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-formio/auth */ "./node_modules/angular-formio/auth/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");




var Formio = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js").Formio;
var AuthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthComponent, _super);
    function AuthComponent(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.showLogin = true;
        return _this;
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (window.APP_SSO || this.config.query.sso || this.config.query.saml) {
            // Trigger an SSO login.
            this.showLogin = false;
            Formio.authUrl = window.SSO_PROJECT;
            Formio.ssoInit(window.APP_SSO || this.config.query.sso || 'saml', {
                forceAuth: true
            });
        }
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], AuthComponent);
    return AuthComponent;
}(angular_formio_auth__WEBPACK_IMPORTED_MODULE_2__["FormioAuthComponent"]));



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map