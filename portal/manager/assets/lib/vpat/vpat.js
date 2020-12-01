/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Formio"));
	else if(typeof define === 'function' && define.amd)
		define(["Formio"], factory);
	else if(typeof exports === 'object')
		exports["vpat"] = factory(require("Formio"));
	else
		root["vpat"] = factory(root["Formio"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_formiojs__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/Webform.js":
/*!************************!*\
  !*** ./lib/Webform.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Tooltip_1 = __importDefault(__webpack_require__(/*! ./components/tooltip/Tooltip */ \"./lib/components/tooltip/Tooltip.js\"));\nvar Webform = formiojs_1.Displays.displays.webform;\nvar setAlert = Webform.prototype.setAlert;\nWebform.prototype.setAlert = function (type, message, classes) {\n    var _this = this;\n    var usaClasses = classes || \"usa-alert usa-alert--\" + (type === 'danger' ? 'error' : type) + \" usa-alert--no-icon\";\n    var HOTKEY_ID = \"hotkey-i-\" + this.form._id;\n    var handleHotkeyID = function (ariaName, element, isTooltipExists) {\n        isTooltipExists\n            ? _this.setDescribingAttribute(ariaName, element, [HOTKEY_ID])\n            : _this.clearDescribingAttribute(ariaName, element, [HOTKEY_ID]);\n    };\n    setAlert.call(this, type, message, { classes: usaClasses, tooltipRender: false });\n    var tooltipTitle = this.t('errorListHotkey');\n    if (this.refs && this.refs.errorTooltip) {\n        this.errorTooltip = new Tooltip_1.default(this.refs.errorTooltip, {\n            id: this.component.id,\n            position: 'right',\n            title: tooltipTitle,\n        });\n    }\n    if (this.alert && this.errorTooltip) {\n        var params = {\n            class: 'usa-sr-only',\n            id: HOTKEY_ID,\n        };\n        var hiddenSpan = this.ce('span', params);\n        this.setContent(hiddenSpan, tooltipTitle);\n        this.appendTo(hiddenSpan, this.alert);\n    }\n    this.everyComponent(function (comp) {\n        if (comp && comp.refs) {\n            var _a = comp.refs, input = _a.input, selectContainer = _a.selectContainer, fieldset = _a.fieldset, openModal = _a.openModal;\n            var modalEdit = comp.component.modalEdit;\n            if (modalEdit && openModal) {\n                handleHotkeyID('aria-describedby', openModal, !!_this.errorTooltip);\n            }\n            else if (fieldset) {\n                if (_this.isIE() && comp.type === 'radio') {\n                    handleHotkeyID('aria-labelledby', fieldset, !!_this.errorTooltip);\n                }\n                else {\n                    handleHotkeyID('aria-describedby', fieldset, !!_this.errorTooltip);\n                }\n            }\n            else if (input && input.length && !modalEdit) {\n                input.forEach(function (element) {\n                    if (comp.type === 'datetime') {\n                        handleHotkeyID('aria-describedby', element.nextSibling, !!_this.errorTooltip);\n                    }\n                    else if (comp.type === 'textarea') {\n                        handleHotkeyID('aria-labelledby', element, !!_this.errorTooltip);\n                    }\n                    else {\n                        handleHotkeyID('aria-describedby', element, !!_this.errorTooltip);\n                    }\n                });\n            }\n            else if (selectContainer) {\n                handleHotkeyID('aria-describedby', selectContainer, !!_this.errorTooltip);\n            }\n        }\n    });\n};\nvar showErrors = Webform.prototype.showErrors;\nWebform.prototype.showErrors = function (error, triggerEvent, onChange, messageClass) {\n    var _this = this;\n    showErrors.call(this, error, triggerEvent, true, 'usa-sr-only');\n    var errorRefs = this.refs.errorRef;\n    var hiddenMessageHandler = function (id) {\n        _this.hiddenMessageRemovalByID([id]);\n        _this.removeEventListener('blur', hiddenMessageHandler);\n    };\n    if (triggerEvent) {\n        if (errorRefs && errorRefs.length) {\n            var element_1 = errorRefs[0];\n            var id_1 = 'errorListMsg';\n            this.ready.then(function () {\n                _this.addHiddenMessageBeforeChild(element_1, element_1.firstChild, _this.t('error'), { id: id_1 });\n                if (!onChange) {\n                    element_1.focus();\n                }\n                _this.addEventListener(element_1, 'blur', hiddenMessageHandler.bind(_this, id_1));\n            });\n        }\n    }\n};\nexports.default = Webform;\n\n\n//# sourceURL=webpack://vpat/./lib/Webform.js?");

/***/ }),

/***/ "./lib/Wizard.js":
/*!***********************!*\
  !*** ./lib/Wizard.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Wizard = formiojs_1.Displays.displays.wizard;\nvar attach = Wizard.prototype.attach;\nvar setPage = Wizard.prototype.setPage;\nvar cancel = Wizard.prototype.cancel;\nWizard.prototype.setPage = function (num) {\n    var _this = this;\n    var rest = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        rest[_i - 1] = arguments[_i];\n    }\n    var previousPage = this.page;\n    return setPage.call.apply(setPage, __spreadArrays([this, num], rest)).then(function () {\n        if (typeof num !== 'number') {\n            return num;\n        }\n        if (previousPage !== num) {\n            _this.refs[_this.wizardKey + \"-progressbar\"].focus();\n        }\n        return num;\n    });\n};\nWizard.prototype.cancel = function (noconfirm) {\n    var _this = this;\n    var rest = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        rest[_i - 1] = arguments[_i];\n    }\n    return cancel.call.apply(cancel, __spreadArrays([this, noconfirm], rest)).then(function (num) {\n        var cancelButton = _this.refs[_this.wizardKey + \"-cancel\"];\n        cancelButton.removeAttribute('disabled');\n        _this.setLoading(cancelButton, false);\n        if (num === 0) {\n            _this.refs[_this.wizardKey + \"-progressbar\"].focus();\n        }\n        else {\n            cancelButton.focus();\n        }\n    });\n};\nWizard.prototype.attach = function (element) {\n    var _a;\n    this.loadRefs(element, (_a = {},\n        _a[this.wizardKey + \"-progressbar\"] = 'single',\n        _a));\n    var superAttach = attach.call(this, element);\n    return superAttach;\n};\nexports.default = Wizard;\n\n\n//# sourceURL=webpack://vpat/./lib/Wizard.js?");

/***/ }),

/***/ "./lib/builders/index.js":
/*!*******************************!*\
  !*** ./lib/builders/index.js ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {};\n\n\n//# sourceURL=webpack://vpat/./lib/builders/index.js?");

/***/ }),

/***/ "./lib/components/address/Address.js":
/*!*******************************************!*\
  !*** ./lib/components/address/Address.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Address = formiojs_1.Components.components.address;\nvar AddressComponent = /** @class */ (function (_super) {\n    __extends(AddressComponent, _super);\n    function AddressComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(AddressComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return AddressComponent;\n}(Address));\nexports.default = AddressComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/address/Address.js?");

/***/ }),

/***/ "./lib/components/button/Button.form.js":
/*!**********************************************!*\
  !*** ./lib/components/button/Button.form.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Button_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Button.edit.display */ \"./lib/components/button/editForm/Button.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Button_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                ignore: true,\n            },\n            {\n                key: 'validation',\n                ignore: true,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/button/Button.form.js?");

/***/ }),

/***/ "./lib/components/button/Button.js":
/*!*****************************************!*\
  !*** ./lib/components/button/Button.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Button_form_1 = __importDefault(__webpack_require__(/*! ./Button.form */ \"./lib/components/button/Button.form.js\"));\nvar Button = formiojs_1.Components.components.button;\nvar ButtonComponent = /** @class */ (function (_super) {\n    __extends(ButtonComponent, _super);\n    function ButtonComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(ButtonComponent.prototype, \"inputInfo\", {\n        get: function () {\n            var info = _super.prototype.elementInfo.call(this);\n            info.type = 'button';\n            info.attr.type = (['submit', 'saveState'].includes(this.component.action)) ? 'submit' : 'button';\n            info.attr.class = this.component.theme === 'primary'\n                ? 'usa-button'\n                : \"usa-button usa-button--\" + this.component.theme;\n            if (this.component.customClass) {\n                info.attr.class += \"\" + this.component.customClass;\n            }\n            info.content = this.t(this.component.label);\n            return info;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    ButtonComponent.editForm = Button_form_1.default;\n    return ButtonComponent;\n}(Button));\nexports.default = ButtonComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/button/Button.js?");

/***/ }),

/***/ "./lib/components/button/editForm/Button.edit.display.js":
/*!***************************************************************!*\
  !*** ./lib/components/button/editForm/Button.edit.display.js ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'tooltip',\n        ignore: true,\n    },\n    {\n        type: 'select',\n        key: 'action',\n        label: 'Action',\n        input: true,\n        dataSrc: 'values',\n        weight: 110,\n        tooltip: 'This is the action to be performed by this button.',\n        data: {\n            values: [\n                { label: 'Submit', value: 'submit' },\n                { label: 'Save in state', value: 'saveState' },\n                { label: 'Event', value: 'event' },\n                { label: 'Custom', value: 'custom' },\n                { label: 'Reset', value: 'reset' },\n                { label: 'OAuth', value: 'oauth' },\n                { label: 'POST to URL', value: 'url' },\n            ],\n        },\n    },\n    {\n        type: 'textfield',\n        label: 'Save in state',\n        key: 'state',\n        weight: 112,\n        tooltip: 'The state you wish to save the submission under when this button is pressed. Example \"draft\" would save the submission in Draft Mode.',\n        placeholder: 'submitted',\n        input: true,\n        conditional: {\n            json: { '===': [{ var: 'data.action' }, 'saveState'] },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        inputType: 'checkbox',\n        key: 'showValidations',\n        label: 'Show Validations',\n        weight: 115,\n        tooltip: 'When the button is pressed, show any validation errors on the form.',\n        conditional: {\n            json: { '!==': [{ var: 'data.action' }, 'submit'] },\n        },\n    },\n    {\n        type: 'textfield',\n        label: 'Button Event',\n        key: 'event',\n        input: true,\n        weight: 120,\n        tooltip: 'The event to fire when the button is clicked.',\n        conditional: {\n            json: { '===': [{ var: 'data.action' }, 'event'] },\n        },\n    },\n    {\n        type: 'textfield',\n        inputType: 'url',\n        key: 'url',\n        input: true,\n        weight: 120,\n        label: 'Button URL',\n        tooltip: 'The URL where the submission will be sent.',\n        placeholder: 'https://example.form.io',\n        conditional: {\n            json: { '===': [{ var: 'data.action' }, 'url'] },\n        },\n    },\n    {\n        type: 'datagrid',\n        key: 'headers',\n        input: true,\n        weight: 130,\n        label: 'Headers',\n        addAnother: 'Add Header',\n        tooltip: 'Headers Properties and Values for your request',\n        components: [\n            {\n                key: 'header',\n                label: 'Header',\n                input: true,\n                type: 'textfield',\n            },\n            {\n                key: 'value',\n                label: 'Value',\n                input: true,\n                type: 'textfield',\n            },\n        ],\n        conditional: {\n            json: { '===': [{ var: 'data.action' }, 'url'] },\n        },\n    },\n    {\n        type: 'textarea',\n        key: 'custom',\n        label: 'Button Custom Logic',\n        tooltip: 'The custom logic to evaluate when the button is clicked.',\n        rows: 5,\n        editor: 'ace',\n        input: true,\n        weight: 120,\n        placeholder: \"data['mykey'] = data['anotherKey'];\",\n        conditional: {\n            json: { '===': [{ var: 'data.action' }, 'custom'] },\n        },\n    },\n    {\n        type: 'select',\n        key: 'theme',\n        label: 'Theme',\n        input: true,\n        tooltip: 'The color theme of this button.',\n        dataSrc: 'values',\n        weight: 140,\n        data: {\n            values: [\n                { label: 'Default', value: 'primary' },\n                { label: 'Secondary', value: 'secondary' },\n                { label: 'Accent Cool', value: 'accent-cool' },\n                { label: 'Base', value: 'base' },\n                { label: 'Outline', value: 'outline' },\n            ],\n        },\n    },\n    {\n        type: 'checkbox',\n        key: 'disableOnInvalid',\n        label: 'Disable on Form Invalid',\n        tooltip: 'This will disable this field if the form is invalid.',\n        input: true,\n        weight: 620,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/button/editForm/Button.edit.display.js?");

/***/ }),

/***/ "./lib/components/checkbox/Checkbox.form.js":
/*!**************************************************!*\
  !*** ./lib/components/checkbox/Checkbox.form.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Checkbox_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Checkbox.edit.data */ \"./lib/components/checkbox/editForm/Checkbox.edit.data.js\"));\nvar Checkbox_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Checkbox.edit.display */ \"./lib/components/checkbox/editForm/Checkbox.edit.display.js\"));\nvar Checkbox_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Checkbox.edit.validation */ \"./lib/components/checkbox/editForm/Checkbox.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Checkbox_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: Checkbox_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Checkbox_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/checkbox/Checkbox.form.js?");

/***/ }),

/***/ "./lib/components/checkbox/Checkbox.js":
/*!*********************************************!*\
  !*** ./lib/components/checkbox/Checkbox.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Checkbox_form_1 = __importDefault(__webpack_require__(/*! ./Checkbox.form */ \"./lib/components/checkbox/Checkbox.form.js\"));\nvar Checkbox = formiojs_1.Components.components.checkbox;\nvar CheckboxComponent = /** @class */ (function (_super) {\n    __extends(CheckboxComponent, _super);\n    function CheckboxComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    CheckboxComponent.prototype.render = function (element) {\n        this.noField = true;\n        return _super.prototype.render.call(this, element);\n    };\n    CheckboxComponent.prototype.clearErrorClasses = function (elements) {\n        var hiddentInvalidEntryMessage = document.getElementById(\"invalid-entry-\" + this.id);\n        if (hiddentInvalidEntryMessage) {\n            this.refs.label.removeChild(hiddentInvalidEntryMessage);\n        }\n        // @ts-ignore\n        _super.prototype.clearErrorClasses.call(this, elements);\n    };\n    CheckboxComponent.prototype.setErrorClasses = function (elements, dirty, hasErrors, hasMessages) {\n        // @ts-ignore\n        _super.prototype.setErrorClasses.call(this, elements, dirty, hasErrors, hasMessages);\n        elements.forEach(function (input) { return input.removeAttribute('aria-invalid'); });\n        var hiddentInvalidEntryMessage = document.getElementById(\"invalid-entry-\" + this.id);\n        if (hasErrors && !hiddentInvalidEntryMessage) {\n            this.addHiddenMessage(', invalid entry, ', this.refs.label);\n        }\n    };\n    CheckboxComponent.editForm = Checkbox_form_1.default;\n    return CheckboxComponent;\n}(Checkbox));\nexports.default = CheckboxComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/checkbox/Checkbox.js?");

/***/ }),

/***/ "./lib/components/checkbox/editForm/Checkbox.edit.data.js":
/*!****************************************************************!*\
  !*** ./lib/components/checkbox/editForm/Checkbox.edit.data.js ***!
  \****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        key: 'clearOnHide',\n        ignore: true,\n    },\n    {\n        key: 'redrawOn',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/checkbox/editForm/Checkbox.edit.data.js?");

/***/ }),

/***/ "./lib/components/checkbox/editForm/Checkbox.edit.display.js":
/*!*******************************************************************!*\
  !*** ./lib/components/checkbox/editForm/Checkbox.edit.display.js ***!
  \*******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'labelWidth',\n        ignore: true,\n    },\n    {\n        key: 'labelMargin',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/checkbox/editForm/Checkbox.edit.display.js?");

/***/ }),

/***/ "./lib/components/checkbox/editForm/Checkbox.edit.validation.js":
/*!**********************************************************************!*\
  !*** ./lib/components/checkbox/editForm/Checkbox.edit.validation.js ***!
  \**********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n    {\n        key: 'unique',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/checkbox/editForm/Checkbox.edit.validation.js?");

/***/ }),

/***/ "./lib/components/columns/Columns.form.js":
/*!************************************************!*\
  !*** ./lib/components/columns/Columns.form.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar nestedComponentForm = formiojs_1.Components.components.nested.editForm;\nvar Columns_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Columns.edit.display */ \"./lib/components/columns/editForm/Columns.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return nestedComponentForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Columns_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/columns/Columns.form.js?");

/***/ }),

/***/ "./lib/components/columns/Columns.js":
/*!*******************************************!*\
  !*** ./lib/components/columns/Columns.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Columns_form_1 = __importDefault(__webpack_require__(/*! ./Columns.form */ \"./lib/components/columns/Columns.form.js\"));\nvar Columns = formiojs_1.Components.components.columns;\nvar ColumnsComponent = /** @class */ (function (_super) {\n    __extends(ColumnsComponent, _super);\n    function ColumnsComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ColumnsComponent.editForm = Columns_form_1.default;\n    return ColumnsComponent;\n}(Columns));\nexports.default = ColumnsComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/columns/Columns.js?");

/***/ }),

/***/ "./lib/components/columns/editForm/Columns.edit.display.js":
/*!*****************************************************************!*\
  !*** ./lib/components/columns/editForm/Columns.edit.display.js ***!
  \*****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'description',\n        ignore: true,\n    },\n    {\n        key: 'tooltip',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'disabled',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        weight: 150,\n        type: 'datagrid',\n        input: true,\n        key: 'columns',\n        label: 'Column Properties',\n        addAnother: 'Add Column',\n        tooltip: 'The width, offset, push, and pull settings for each column.',\n        reorder: true,\n        components: [\n            {\n                type: 'hidden',\n                key: 'components',\n                defaultValue: [],\n            },\n            {\n                type: 'select',\n                key: 'size',\n                defaultValue: 'md',\n                label: 'Size',\n                data: {\n                    values: [\n                        { label: 'Smallest', value: 'xs' },\n                        { label: 'Mobile large', value: 'sm' },\n                        { label: 'Tablet', value: 'md' },\n                        { label: 'Desktop', value: 'lg' },\n                    ],\n                },\n            },\n            {\n                type: 'number',\n                key: 'width',\n                defaultValue: 6,\n                label: 'Width',\n            },\n            {\n                type: 'number',\n                key: 'offset',\n                defaultValue: 0,\n                label: 'Offset',\n            },\n        ],\n    },\n    {\n        weight: 160,\n        type: 'checkbox',\n        label: 'Auto adjust columns',\n        tooltip: 'Will automatically adjust columns based on if nested components are hidden.',\n        key: 'autoAdjust',\n        input: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/columns/editForm/Columns.edit.display.js?");

/***/ }),

/***/ "./lib/components/component/Component.js":
/*!***********************************************!*\
  !*** ./lib/components/component/Component.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar ComponentModal_1 = __importDefault(__webpack_require__(/*! ../componentmodal/ComponentModal */ \"./lib/components/componentmodal/ComponentModal.js\"));\nvar Tooltip_1 = __importDefault(__webpack_require__(/*! ../tooltip/Tooltip */ \"./lib/components/tooltip/Tooltip.js\"));\nvar Component = formiojs_1.Components.components.component;\nvar Validator = Component.Validator;\nvar clearErrorClasses = Component.prototype.clearErrorClasses;\nComponent.prototype.isIE = function () {\n    var userAgent = window.navigator.userAgent;\n    var msie = userAgent.indexOf('MSIE ');\n    if (msie > 0) {\n        // IE 10 or older => return version number\n        return parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10);\n    }\n    var trident = userAgent.indexOf('Trident/');\n    if (trident > 0) {\n        // IE 11 => return version number\n        var rv = userAgent.indexOf('rv:');\n        return parseInt(userAgent.substring(rv + 3, userAgent.indexOf('.', rv)), 10);\n    }\n    var edge = userAgent.indexOf('Edge/');\n    if (edge > 0) {\n        // IE 12 (aka Edge) => return version number\n        return parseInt(userAgent.substring(edge + 5, userAgent.indexOf('.', edge)), 10);\n    }\n    // other browser\n    return false;\n};\nComponent.prototype.isFirefox = function () {\n    var userAgent = window.navigator.userAgent;\n    var firefox = userAgent.indexOf('Firefox');\n    var seamonkey = userAgent.indexOf('Seamonkey');\n    if (firefox > 0 && seamonkey === -1) {\n        // returns version number\n        return parseInt(userAgent.substring(firefox + 8, userAgent.indexOf('.', firefox)), 10);\n    }\n    // other browser\n    return false;\n};\nComponent.prototype.addMessages = function (messages) {\n    var _this = this;\n    if (!messages) {\n        return;\n    }\n    // Standardize on array of objects for message.\n    if (typeof messages === 'string') {\n        messages = {\n            messages: messages,\n            level: 'error',\n        };\n    }\n    if (!Array.isArray(messages)) {\n        messages = [messages];\n    }\n    var renderMessageContainer = function (messageContainer, keyword) {\n        _this.setContent(messageContainer, messages.map(function (message, index) {\n            var key = keyword\n                ? keyword + _this.component.key + index\n                : _this.component.key + index;\n            return _this.renderTemplate('message', __assign(__assign({}, message), { key: key }));\n        }).join(''));\n    };\n    if (this.refs.messageContainer || this.refs.modalMessageContainer) {\n        renderMessageContainer(this.refs.messageContainer);\n        if (this.component.modalEdit) {\n            renderMessageContainer(this.refs.modalMessageContainer, 'modal');\n        }\n    }\n};\nComponent.prototype.attach = function (element) {\n    if (!this.builderMode && this.component.modalEdit) {\n        var modalShouldBeOpened = this.componentModal ? this.componentModal.isOpened : false;\n        var currentValue = modalShouldBeOpened ? this.componentModal.currentValue : this.dataValue;\n        this.componentModal = new ComponentModal_1.default(this, element, modalShouldBeOpened, currentValue);\n        this.setOpenModalElement();\n    }\n    this.attached = true;\n    this.element = element;\n    element.component = this;\n    if (this.element.id) {\n        this.id = this.element.id;\n    }\n    this.loadRefs(element, {\n        modalMessageContainer: 'single',\n        messageContainer: 'single',\n        tooltip: 'multiple',\n        label: 'single',\n    });\n    var tooltip = this.refs.tooltip[0];\n    if (tooltip) {\n        var title = this.interpolate(tooltip.getAttribute('data-title') || this.t(this.component.tooltip)).replace(/(?:\\r\\n|\\r|\\n)/g, '<br />');\n        this.tooltips[0] = new Tooltip_1.default(tooltip, {\n            id: this.component.id,\n            position: 'right',\n            title: title,\n        });\n    }\n    this.attachLogic();\n    this.autofocus();\n    this.hook('attachComponent', element, this);\n    var type = this.component.type;\n    if (type) {\n        this.hook(\"attach\" + (type.charAt(0).toUpperCase() + type.substring(1, type.length)), element, this);\n    }\n    return formiojs_1.Formio.Promise.resolve();\n};\nObject.defineProperty(Component.prototype, 'className', {\n    get: function () {\n        var className = this.hasInput ? 'usa-form-group ' : '';\n        className += 'usa-prose ';\n        if (this.component.type === 'columns') {\n            className += 'grid-row grid-gap ';\n        }\n        return className;\n    },\n});\nComponent.prototype.addHiddenMessage = function (message, parent) {\n    if (parent) {\n        var hiddenMessage = this.ce('span', { class: 'usa-sr-only', id: \"invalid-entry-\" + this.id });\n        this.setContent(hiddenMessage, this.t(message, {}));\n        parent.appendChild(hiddenMessage);\n    }\n};\nComponent.prototype.addHiddenMessageBeforeChild = function (parent, child, message, params) {\n    var hiddenMessage = this.ce('span', __assign({ class: 'usa-sr-only' }, params));\n    this.setContent(hiddenMessage, this.t(message, {}));\n    parent.insertBefore(hiddenMessage, child);\n};\nComponent.prototype.hiddenMessageRemovalByID = function (elemIDs) {\n    var _this = this;\n    elemIDs.forEach(function (elemID) {\n        var elem = document.getElementById(elemID);\n        if (elem) {\n            if (_this.isIE()) {\n                var parentElement = elem.parentElement;\n                if (parentElement) {\n                    parentElement.removeChild(elem);\n                }\n            }\n            else {\n                elem.remove();\n            }\n        }\n    });\n};\nComponent.prototype.clearErrorID = function (attributeName, element) {\n    var descRefs = element && element.getAttribute(attributeName);\n    // Removes an error message elem id\n    if (descRefs) {\n        var updatedDescRefs = descRefs.replace(/\\b(e-\\w*-\\w*)/g, '').trim();\n        if (updatedDescRefs) {\n            element.setAttribute(attributeName, updatedDescRefs);\n        }\n        else {\n            element.removeAttribute(attributeName);\n        }\n    }\n};\nComponent.prototype.addErrorID = function (attributeName, element) {\n    var _this = this;\n    if (element) {\n        var descRefs_1 = element.getAttribute(attributeName);\n        if (!descRefs_1 || descRefs_1.search(/\\b(e-\\w*-\\w*)/g) === -1) {\n            this.error.messages.forEach(function (message, index) {\n                var errorID = _this.error.component.modalEdit\n                    ? \"e-\" + _this.id + \"-modal\" + _this.component.key + index\n                    : \"e-\" + _this.id + \"-\" + _this.component.key + index;\n                element.setAttribute(attributeName, (descRefs_1 || '') + \" \" + errorID);\n                descRefs_1 = element.getAttribute(attributeName);\n            });\n        }\n    }\n};\nComponent.prototype.setDescribingAttribute = function (attributeName, element, values) {\n    var descRefs = element.getAttribute(attributeName) || '';\n    values.forEach(function (value) { return descRefs = descRefs.replace(value, '').trim(); });\n    values.forEach(function (value) { return descRefs += \" \" + value; });\n    descRefs.trim();\n    element.setAttribute(attributeName, descRefs);\n};\nComponent.prototype.clearDescribingAttribute = function (attributeName, element, values) {\n    var descRefs = element.getAttribute(attributeName) || '';\n    values.forEach(function (value) { return descRefs = descRefs.replace(value, '').trim(); });\n    element.setAttribute(attributeName, descRefs);\n};\nComponent.prototype.clearErrorClasses = function (elements) {\n    var _this = this;\n    this.removeClass(this.refs.label, 'usa-label--error');\n    this.removeClass(this.element, 'usa-form-group--error');\n    var fields = elements || this.refs.input;\n    if (fields) {\n        fields.forEach(function (element) {\n            if (element) {\n                _this.removeClass(element, 'usa-input--error');\n                element.setAttribute('aria-invalid', false);\n                if (element.type === 'textarea') {\n                    _this.clearErrorID('aria-labelledby', element);\n                    return;\n                }\n                _this.clearErrorID('aria-describedby', element);\n            }\n        });\n        if (this.component.modalEdit && this.refs.openModal) {\n            var openModalButton = this.refs.openModal;\n            this.clearErrorID('aria-describedby', openModalButton);\n            openModalButton.removeAttribute('aria-invalid');\n        }\n    }\n};\nComponent.prototype.setErrorClasses = function (elements, dirty, hasErrors, hasMessages) {\n    var _this = this;\n    this.clearErrorClasses(elements);\n    this.setSuccessClasses(false);\n    var handleInvalidFields = function (element) {\n        _this.addClass(element, 'usa-input--error');\n        element.setAttribute('aria-invalid', 'true');\n        if (element.type === 'textarea') {\n            _this.addErrorID('aria-labelledby', element);\n        }\n        else {\n            _this.addErrorID('aria-describedby', element);\n        }\n    };\n    if (hasErrors) {\n        this.addClass(this.refs.label, 'usa-label--error');\n        this.addClass(this.element, 'usa-form-group--error');\n        elements.forEach(function (input) {\n            if (input) {\n                if (_this.type === 'datetime') {\n                    handleInvalidFields(input.nextSibling);\n                }\n                else {\n                    handleInvalidFields(input);\n                }\n            }\n        });\n        if (this.component.modalEdit && this.refs.openModal) {\n            var openModalButton = this.refs.openModal;\n            this.addErrorID('aria-describedby', openModalButton);\n            openModalButton.setAttribute('aria-invalid', 'true');\n        }\n    }\n};\nComponent.prototype.setComponentValidity = function (messages, dirty, silentCheck) {\n    var hasErrors = !!messages.filter(function (message) { return message.level === 'error'; }).length;\n    if (messages.length && (!silentCheck || this.error) && (dirty || !this.pristine)) {\n        this.setCustomValidity(messages, dirty);\n        this.setSuccessClasses(false);\n    }\n    else if (!silentCheck && (dirty || !this.pristine) && !this.component.disabled) {\n        this.setCustomValidity('');\n        this.setSuccessClasses(true);\n    }\n    return !hasErrors;\n};\nComponent.prototype.setSuccessClasses = function (isSuccess) {\n    var _this = this;\n    var handleSuccessClass = function (element, isSuccess) {\n        isSuccess\n            ? _this.addClass(element, 'usa-input--success')\n            : _this.removeClass(element, 'usa-input--success');\n    };\n    if (this.refs.input && this.refs.input[0]) {\n        handleSuccessClass(this.refs.input[0], isSuccess);\n        if (this.component.type === 'datetime') {\n            handleSuccessClass(this.refs.input[0].nextSibling, isSuccess);\n        }\n    }\n    if (this.refs.selectContainer) {\n        handleSuccessClass(this.refs.selectContainer, isSuccess);\n    }\n    if (this.component.type === 'day') {\n        handleSuccessClass(this.refs.day, isSuccess);\n        handleSuccessClass(this.refs.month, isSuccess);\n        handleSuccessClass(this.refs.year, isSuccess);\n    }\n};\nexports.default = Component;\n\n\n//# sourceURL=webpack://vpat/./lib/components/component/Component.js?");

/***/ }),

/***/ "./lib/components/componentmodal/ComponentModal.js":
/*!*********************************************************!*\
  !*** ./lib/components/componentmodal/ComponentModal.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar ComponentModal = formiojs_1.Components.components.componentmodal;\nvar TAB_KEYCODE = 9;\nvar ESC_KEYCODE = 27;\nvar FOCUSABLE_SELECTOR = \"button:not([disabled]), [href], [role=\\\"link\\\"], input:not([disabled]),\\n  select:not([disabled]), textarea:not([disabled]), [tabindex]:not([disabled]), iframe\";\nvar HEADER_SELECTOR = 'h1, h2, h3, h4, h5, h6';\nvar init = ComponentModal.prototype.init;\nComponentModal.prototype.init = function () {\n    var _this = this;\n    init.call(this);\n    this.closeModalListener = function (event) {\n        if (_this.isValueChanged() && !_this.component.disabled) {\n            _this.showDialog();\n        }\n        else {\n            _this.closeModalHandler(event);\n        }\n    };\n    this.closeModalButtonListener = this.closeModalHandler.bind(this);\n};\nvar templateRefs = Object.getOwnPropertyDescriptor(ComponentModal.prototype, 'templateRefs');\nObject.defineProperty(ComponentModal.prototype, 'templateRefs', {\n    get: function () {\n        var refs = templateRefs.get.call(this);\n        var newRefs = {\n            modalCloseButton: 'single',\n            modalPreviewLiveRegion: 'single',\n            modalLiveRegion: 'single',\n            modalLabelValue: 'single',\n        };\n        return Object.assign({}, refs, newRefs);\n    }\n});\nvar setEventListeners = ComponentModal.prototype.setEventListeners;\nComponentModal.prototype.setEventListeners = function () {\n    setEventListeners.call(this);\n    this.component.addEventListener(this.refs.modalCloseButton, 'click', this.closeModalButtonListener);\n};\nvar removeEventListeners = ComponentModal.prototype.removeEventListeners;\nComponentModal.prototype.removeEventListeners = function () {\n    removeEventListeners.call(this);\n    this.component.removeEventListener(this.refs.modalCloseButton, 'click', this.closeModalButtonListener);\n};\nvar findElementLabel = function (element) {\n    if (element) {\n        var parent_1 = element.parentNode.parentNode;\n        if (parent_1) {\n            return parent_1.querySelector('label');\n        }\n    }\n};\nvar filterFocusableElements = function (focusableElements) {\n    return Array.prototype.filter.call(focusableElements, function (element) {\n        return !(element.className.includes('flatpickr') ||\n            element.className.includes('numInput') ||\n            element.className.includes('usa-sr-only'));\n    });\n};\nComponentModal.prototype.focusAndAddMessage = function (element, message, region) {\n    var _this = this;\n    var label = findElementLabel(element);\n    var tagName = element.tagName;\n    if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') {\n        if (label) {\n            var hiddenMessage = document.createElement('span');\n            hiddenMessage.classList.add('usa-sr-only');\n            hiddenMessage.id = \"msg-\" + this.component.id;\n            hiddenMessage.innerHTML = message;\n            if (label.firstChild) {\n                label.insertBefore(hiddenMessage, label.firstChild);\n            }\n            var removeHiddenMessageHandler_1 = function () {\n                _this.removeHiddenMessage.call(_this, element);\n                _this.component.removeEventListener(element, 'blur', removeHiddenMessageHandler_1);\n            };\n            this.component.addEventListener(element, 'blur', removeHiddenMessageHandler_1);\n        }\n    }\n    else {\n        if (region) {\n            setTimeout(function () {\n                region.innerHTML = message;\n            }, 0);\n        }\n    }\n    setTimeout(function () {\n        element.focus();\n    }, 0);\n};\nComponentModal.prototype.removeHiddenMessage = function (element) {\n    var label = findElementLabel(element);\n    if (label) {\n        var message = label.querySelector(\"#msg-\" + this.component.id);\n        if (message) {\n            label.removeChild(message);\n        }\n    }\n};\nComponentModal.prototype.focusTrap = function (focusableElements, event) {\n    var firstFocusableElement = focusableElements[0];\n    var lastFocusableElement = focusableElements[focusableElements.length - 1];\n    if (event.keyCode === TAB_KEYCODE) {\n        if (event.target === firstFocusableElement && event.shiftKey) {\n            event.preventDefault();\n            lastFocusableElement.focus();\n        }\n        if (event.target === lastFocusableElement && !event.shiftKey) {\n            event.preventDefault();\n            firstFocusableElement.focus();\n        }\n    }\n};\nComponentModal.prototype.toggleHideBackgroundElements = function (element, flag) {\n    var documentFocusableElements = Array.prototype.slice.call(document.querySelectorAll(FOCUSABLE_SELECTOR));\n    var modalFocusableElements = Array.prototype.slice.call(element.querySelectorAll(FOCUSABLE_SELECTOR));\n    var elementsToHide = documentFocusableElements.filter(function (element) { return modalFocusableElements.indexOf(element) < 0; });\n    var documentHeaders = Array.prototype.slice.call(document.querySelectorAll(HEADER_SELECTOR));\n    var modalHeaders = Array.prototype.slice.call(element.querySelectorAll(HEADER_SELECTOR));\n    var headersToHide = documentHeaders.filter(function (element) { return modalHeaders.indexOf(element) < 0; });\n    elementsToHide.forEach(function (element) {\n        if (flag) {\n            var tabindex = element.getAttribute('tabindex');\n            if (tabindex !== null) {\n                element.dataset.tabindex = tabindex;\n            }\n            element.setAttribute('tabindex', '-1');\n            element.setAttribute('aria-hidden', true);\n        }\n        else {\n            var tabindex = element.dataset.tabindex;\n            if (tabindex !== undefined) {\n                element.tabIndex = tabindex;\n                element.removeAttribute('data-tabindex');\n            }\n            else {\n                element.removeAttribute('tabindex');\n            }\n            element.removeAttribute('aria-hidden');\n        }\n    });\n    headersToHide.forEach(function (element) {\n        if (flag) {\n            element.setAttribute('aria-hidden', true);\n        }\n        else {\n            element.removeAttribute('aria-hidden');\n        }\n    });\n};\nvar openModal = ComponentModal.prototype.openModal;\nComponentModal.prototype.openModal = function () {\n    openModal.call(this);\n    this.toggleHideBackgroundElements(this.refs.modalContents, true);\n    var focusableElements = filterFocusableElements(this.refs.modalContents.querySelectorAll(FOCUSABLE_SELECTOR));\n    this.modalFirstFocusableElement = focusableElements[0];\n    this.focusAndAddMessage(this.modalFirstFocusableElement, 'Modal window has been opened.', this.refs.modalLiveRegion);\n    this.focusTrapHandler = this.focusTrap.bind(this, focusableElements);\n    this.modalEscapeButtonHandler = this.closeModalHandler.bind(this);\n    this.component.addEventListener(this.refs.modalContents, 'keydown', this.focusTrapHandler);\n    this.component.addEventListener(this.refs.modalContents, 'keydown', this.modalEscapeButtonHandler);\n};\nvar closeModal = ComponentModal.prototype.closeModal;\nComponentModal.prototype.closeModal = function () {\n    this.toggleHideBackgroundElements(this.refs.modalContents, false);\n    this.component.removeEventListener(this.refs.modalContents, 'keydown', this.focusTrapHandler);\n    this.focusAndAddMessage(this.refs.openModal, 'Modal window has been closed', this.refs.modalPreviewLiveRegion);\n    closeModal.call(this);\n};\nvar saveModalValueHandler = ComponentModal.prototype.saveModalValueHandler;\nComponentModal.prototype.saveModalValueHandler = function (event) {\n    saveModalValueHandler.call(this, event);\n    this.refs.openModal.focus();\n};\nComponentModal.prototype.closeModalHandler = function (event) {\n    if (event.type === 'click' || (event.type === 'keydown' && event.keyCode === ESC_KEYCODE)) {\n        event.preventDefault();\n        this.closeModal();\n        if (!this.component.disabled) {\n            this.component.setValue(this.currentValue, { resetValue: true });\n        }\n        this.refs.openModal.focus();\n    }\n};\nComponentModal.prototype.showDialog = function () {\n    var _this = this;\n    this.lastFocusedModalElement = document.activeElement === document.body || document.activeElement === this.refs.modalOverlay\n        ? this.refs.modalCloseButton\n        : document.activeElement;\n    this.toggleHideBackgroundElements(this.refs.modalContents, false);\n    this.component.removeEventListener(this.refs.modalContents, 'keydown', this.focusTrapHandler);\n    this.dialogElement = this.component.ce('div');\n    var dialogContent = \"\\n    <h3 ref=\\\"dialogHeader\\\" id=dl-\" + this.component.id + \">\" + this.component.t('Do you want to clear changes and get back to the form?') + \"</h3>\\n    <div class=\\\"formio-dialog-buttons float-right\\\">\\n      <button ref=\\\"dialogCancelButton\\\" class=\\\"usa-button usa-button--secondary\\\" aria-label=\\\"Cancel button. Click to get back to the Modal Dialog window.\\\">\" + this.component.t('Cancel') + \"</button>\\n      <button ref=\\\"dialogYesButton\\\" class=\\\"usa-button\\\" aria-label=\\\"Yes button. Click to get back to the form. Warning! All the entered values in the Modal Dialog window will not be saved.\\\">\" + this.component.t('Yes') + \"</button>\\n    </div>\\n    <span class=\\\"usa-sr-only\\\" ref=\\\"dialogLiveRegion\\\" aria-live=\\\"assertive\\\"></span>\\n  \";\n    this.dialogElement.innerHTML = dialogContent;\n    this.dialogElement.refs = {};\n    this.component.loadRefs.call(this.dialogElement, this.dialogElement, {\n        dialogHeader: 'single',\n        dialogCancelButton: 'single',\n        dialogYesButton: 'single',\n        dialogLiveRegion: 'single',\n    });\n    var escapeButtonHandler = function (closeModal, event) {\n        if (event.keyCode === ESC_KEYCODE) {\n            closeModal();\n        }\n    };\n    this.dialog = this.component.createModal(this.dialogElement);\n    this.dialog.refs.dialogClose.setAttribute('aria-label', 'Close button. Click to get back to the modal dialog window.');\n    var oldClose = this.dialog.close;\n    this.dialog.close = function () {\n        _this.toggleHideBackgroundElements(_this.dialog.refs.dialogContents, false);\n        _this.toggleHideBackgroundElements(_this.refs.modalContents, true);\n        _this.focusAndAddMessage(_this.lastFocusedModalElement, 'Confirmation dialog window has been closed.', _this.refs.modalLiveRegion);\n        _this.component.addEventListener(_this.refs.modalContents, 'keydown', _this.focusTrapHandler);\n        _this.component.removeEventListener(_this.dialog.refs.dialogContents, 'keydown', _this.dialogFocusTrapHandler);\n        _this.component.removeEventListener(_this.dialog.refs.dialogContents, 'keydown', _this.dialogEscapeButtonHandler);\n        oldClose.call(_this);\n    };\n    var focusableElements = __spreadArrays(this.dialog.refs.dialogContents.querySelectorAll(FOCUSABLE_SELECTOR));\n    this.dialogFocusTrapHandler = this.focusTrap.bind(this, focusableElements);\n    this.dialogEscapeButtonHandler = escapeButtonHandler.bind(this, this.dialog.close);\n    this.toggleHideBackgroundElements(this.dialog.refs.dialogContents, true);\n    this.component.addEventListener(this.dialog.refs.dialogContents, 'keydown', this.dialogFocusTrapHandler);\n    this.component.addEventListener(this.dialog.refs.dialogContents, 'keydown', this.dialogEscapeButtonHandler);\n    this.component.addEventListener(this.dialogElement.refs.dialogYesButton, 'click', this.saveDialogListener);\n    this.component.addEventListener(this.dialogElement.refs.dialogCancelButton, 'click', this.closeDialogListener);\n    this.focusAndAddMessage(focusableElements[0], 'Confirmation dialog has been opened', this.dialogElement.refs.dialogLiveRegion);\n};\nComponentModal.prototype.updateView = function () {\n    var valueAsString = this.component.getValueAsString(this.currentValue);\n    if (this.component.type === 'select') {\n        valueAsString = this.currentValue ? this.component.getValueAsString(this.currentValue) : '';\n    }\n    var modalButtonValue = valueAsString || this.component.t('Click to set value');\n    this.refs.openModal.innerHTML = modalButtonValue;\n    this.refs.modalLabelValue.innerHTML = \". \" + modalButtonValue;\n};\nexports.default = ComponentModal;\n\n\n//# sourceURL=webpack://vpat/./lib/components/componentmodal/ComponentModal.js?");

/***/ }),

/***/ "./lib/components/container/Container.form.js":
/*!****************************************************!*\
  !*** ./lib/components/container/Container.form.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Container_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Container.edit.data */ \"./lib/components/container/editForm/Container.edit.data.js\"));\nvar Container_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Container.edit.display */ \"./lib/components/container/editForm/Container.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Container_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: Container_edit_data_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/container/Container.form.js?");

/***/ }),

/***/ "./lib/components/container/Container.js":
/*!***********************************************!*\
  !*** ./lib/components/container/Container.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Container_form_1 = __importDefault(__webpack_require__(/*! ./Container.form */ \"./lib/components/container/Container.form.js\"));\nvar Container = formiojs_1.Components.components.container;\nvar ContainerComponent = /** @class */ (function (_super) {\n    __extends(ContainerComponent, _super);\n    function ContainerComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ContainerComponent.editForm = Container_form_1.default;\n    return ContainerComponent;\n}(Container));\nexports.default = ContainerComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/container/Container.js?");

/***/ }),

/***/ "./lib/components/container/editForm/Container.edit.data.js":
/*!******************************************************************!*\
  !*** ./lib/components/container/editForm/Container.edit.data.js ***!
  \******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        key: 'allowCalculateOverride',\n        ignore: true,\n    },\n    {\n        key: 'defaultValue',\n        ignore: true,\n    },\n    {\n        key: 'redrawOn',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/container/editForm/Container.edit.data.js?");

/***/ }),

/***/ "./lib/components/container/editForm/Container.edit.display.js":
/*!*********************************************************************!*\
  !*** ./lib/components/container/editForm/Container.edit.display.js ***!
  \*********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'description',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/container/editForm/Container.edit.display.js?");

/***/ }),

/***/ "./lib/components/content/Content.form.js":
/*!************************************************!*\
  !*** ./lib/components/content/Content.form.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.content.editForm;\nvar Content_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Content.edit.display */ \"./lib/components/content/editForm/Content.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Content_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/content/Content.form.js?");

/***/ }),

/***/ "./lib/components/content/Content.js":
/*!*******************************************!*\
  !*** ./lib/components/content/Content.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Content_form_1 = __importDefault(__webpack_require__(/*! ./Content.form */ \"./lib/components/content/Content.form.js\"));\nvar Content = formiojs_1.Components.components.content;\nvar ContentComponent = /** @class */ (function (_super) {\n    __extends(ContentComponent, _super);\n    function ContentComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ContentComponent.editForm = Content_form_1.default;\n    return ContentComponent;\n}(Content));\nexports.default = ContentComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/content/Content.js?");

/***/ }),

/***/ "./lib/components/content/editForm/Content.edit.display.js":
/*!*****************************************************************!*\
  !*** ./lib/components/content/editForm/Content.edit.display.js ***!
  \*****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [];\n\n\n//# sourceURL=webpack://vpat/./lib/components/content/editForm/Content.edit.display.js?");

/***/ }),

/***/ "./lib/components/currency/Currency.form.js":
/*!**************************************************!*\
  !*** ./lib/components/currency/Currency.form.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar Currency_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Currency.edit.data */ \"./lib/components/currency/editForm/Currency.edit.data.js\"));\nvar Currency_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Currency.edit.validation */ \"./lib/components/currency/editForm/Currency.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'data',\n                components: Currency_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Currency_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/currency/Currency.form.js?");

/***/ }),

/***/ "./lib/components/currency/Currency.js":
/*!*********************************************!*\
  !*** ./lib/components/currency/Currency.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Currency_form_1 = __importDefault(__webpack_require__(/*! ./Currency.form */ \"./lib/components/currency/Currency.form.js\"));\nvar Currency = formiojs_1.Components.components.currency;\nvar CurrencyComponent = /** @class */ (function (_super) {\n    __extends(CurrencyComponent, _super);\n    function CurrencyComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    CurrencyComponent.editForm = Currency_form_1.default;\n    return CurrencyComponent;\n}(Currency));\nexports.default = CurrencyComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/currency/Currency.js?");

/***/ }),

/***/ "./lib/components/currency/editForm/Currency.edit.data.js":
/*!****************************************************************!*\
  !*** ./lib/components/currency/editForm/Currency.edit.data.js ***!
  \****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        type: 'select',\n        input: true,\n        weight: 50,\n        key: 'currency',\n        label: 'Currency',\n        tooltip: 'The currency to use in currency formatting. Possible values are (ISO-4217) currency codes.',\n        defaultValue: 'USD',\n        dataSrc: 'values',\n        data: {\n            values: [\n                { label: 'US Dollar (USD)', value: 'USD' },\n                { label: 'Euro (EUR)', value: 'EUR' },\n                { label: 'Pound Sterling (GBP)', value: 'GBP' },\n                { label: 'Australian Dollar (AUD)', value: 'AUD' },\n                { label: 'Afghani (AFN)', value: 'AFN' },\n                { label: 'Lek (ALL)', value: 'ALL' },\n                { label: 'Algerian Dinar (DZD)', value: 'DZD' },\n                { label: 'Kwanza (AOA)', value: 'AOA' },\n                { label: 'East Caribbean Dollar (XCD)', value: 'XCD' },\n                { label: 'Argentine Peso (ARS)', value: 'ARS' },\n                { label: 'Armenian Dram (AMD)', value: 'AMD' },\n                { label: 'Aruban Florin (AWG)', value: 'AWG' },\n                { label: 'Azerbaijan Manat (AZN)', value: 'AZN' },\n                { label: 'Bahamian Dollar (BSD)', value: 'BSD' },\n                { label: 'Bahraini Dinar (BHD)', value: 'BHD' },\n                { label: 'Taka (BDT)', value: 'BDT' },\n                { label: 'Barbados Dollar (BBD)', value: 'BBD' },\n                { label: 'Belarusian Ruble (BYN)', value: 'BYN' },\n                { label: 'Belize Dollar (BZD)', value: 'BZD' },\n                { label: 'CFA Franc BCEAO (XOF)', value: 'XOF' },\n                { label: 'Bermudian Dollar (BMD)', value: 'BMD' },\n                { label: 'Indian Rupee (INR)', value: 'INR' },\n                { label: 'Ngultrum (BTN)', value: 'BTN' },\n                { label: 'Boliviano (BOB)', value: 'BOB' },\n                { label: 'Mvdol (BOV)', value: 'BOV' },\n                { label: 'Convertible Mark (BAM)', value: 'BAM' },\n                { label: 'Pula (BWP)', value: 'BWP' },\n                { label: 'Norwegian Krone (NOK)', value: 'NOK' },\n                { label: 'Brazilian Real (BRL)', value: 'BRL' },\n                { label: 'Brunei Dollar (BND)', value: 'BND' },\n                { label: 'Bulgarian Lev (BGN)', value: 'BGN' },\n                { label: 'Burundi Franc (BIF)', value: 'BIF' },\n                { label: 'Cabo Verde Escudo (CVE)', value: 'CVE' },\n                { label: 'Riel (KHR)', value: 'KHR' },\n                { label: 'CFA Franc BEAC (XAF)', value: 'XAF' },\n                { label: 'Canadian Dollar (CAD)', value: 'CAD' },\n                { label: 'Cayman Islands Dollar (KYD)', value: 'KYD' },\n                { label: 'Chilean Peso (CLP)', value: 'CLP' },\n                { label: 'Unidad de Fomento (CLF)', value: 'CLF' },\n                { label: 'Yuan Renminbi (CNY)', value: 'CNY' },\n                { label: 'Colombian Peso (COP)', value: 'COP' },\n                { label: 'Unidad de Valor Real (COU)', value: 'COU' },\n                { label: 'Comorian Franc (KMF)', value: 'KMF' },\n                { label: 'Congolese Franc (CDF)', value: 'CDF' },\n                { label: 'New Zealand Dollar (NZD)', value: 'NZD' },\n                { label: 'Costa Rican Colon (CRC)', value: 'CRC' },\n                { label: 'Kuna (HRK)', value: 'HRK' },\n                { label: 'Cuban Peso (CUP)', value: 'CUP' },\n                { label: 'Peso Convertible (CUC)', value: 'CUC' },\n                { label: 'Netherlands Antillean Guilder (ANG)', value: 'ANG' },\n                { label: 'Czech Koruna (CZK)', value: 'CZK' },\n                { label: 'Danish Krone (DKK)', value: 'DKK' },\n                { label: 'Djibouti Franc (DJF)', value: 'DJF' },\n                { label: 'Dominican Peso (DOP)', value: 'DOP' },\n                { label: 'Egyptian Pound (EGP)', value: 'EGP' },\n                { label: 'El Salvador Colon (SVC)', value: 'SVC' },\n                { label: 'Nakfa (ERN)', value: 'ERN' },\n                { label: 'Ethiopian Birr (ETB)', value: 'ETB' },\n                { label: 'Falkland Islands Pound (FKP)', value: 'FKP' },\n                { label: 'Fiji Dollar (FJD)', value: 'FJD' },\n                { label: 'CFP Franc (XPF)', value: 'XPF' },\n                { label: 'Dalasi (GMD)', value: 'GMD' },\n                { label: 'Lari (GEL)', value: 'GEL' },\n                { label: 'Ghana Cedi (GHS)', value: 'GHS' },\n                { label: 'Gibraltar Pound (GIP)', value: 'GIP' },\n                { label: 'Quetzal (GTQ)', value: 'GTQ' },\n                { label: 'Guinean Franc (GNF)', value: 'GNF' },\n                { label: 'Guyana Dollar (GYD)', value: 'GYD' },\n                { label: 'Gourde (HTG)', value: 'HTG' },\n                { label: 'Lempira (HNL)', value: 'HNL' },\n                { label: 'Hong Kong Dollar (HKD)', value: 'HKD' },\n                { label: 'Forint (HUF)', value: 'HUF' },\n                { label: 'Iceland Krona (ISK)', value: 'ISK' },\n                { label: 'Indian Rupee (INR)', value: 'INR' },\n                { label: 'Rupiah (IDR)', value: 'IDR' },\n                { label: 'SDR (Special Drawing Right) (XDR)', value: 'XDR' },\n                { label: 'Iranian Rial (IRR)', value: 'IRR' },\n                { label: 'Iraqi Dinar (IQD)', value: 'IQD' },\n                { label: 'New Israeli Sheqel (ILS)', value: 'ILS' },\n                { label: 'Jamaican Dollar (JMD)', value: 'JMD' },\n                { label: 'Yen (JPY)', value: 'JPY' },\n                { label: 'Jordanian Dinar (JOD)', value: 'JOD' },\n                { label: 'Tenge (KZT)', value: 'KZT' },\n                { label: 'Kenyan Shilling (KES)', value: 'KES' },\n                { label: 'North Korean Won (KPW)', value: 'KPW' },\n                { label: 'Won (KRW)', value: 'KRW' },\n                { label: 'Kuwaiti Dinar (KWD)', value: 'KWD' },\n                { label: 'Som (KGS)', value: 'KGS' },\n                { label: 'Lao Kip (LAK)', value: 'LAK' },\n                { label: 'Lebanese Pound (LBP)', value: 'LBP' },\n                { label: 'Loti (LSL)', value: 'LSL' },\n                { label: 'Rand (ZAR)', value: 'ZAR' },\n                { label: 'Liberian Dollar (LRD)', value: 'LRD' },\n                { label: 'Libyan Dinar (LYD)', value: 'LYD' },\n                { label: 'Swiss Franc (CHF)', value: 'CHF' },\n                { label: 'Pataca (MOP)', value: 'MOP' },\n                { label: 'Denar (MKD)', value: 'MKD' },\n                { label: 'Malagasy Ariary (MGA)', value: 'MGA' },\n                { label: 'Malawi Kwacha (MWK)', value: 'MWK' },\n                { label: 'Malaysian Ringgit (MYR)', value: 'MYR' },\n                { label: 'Rufiyaa (MVR)', value: 'MVR' },\n                { label: 'Ouguiya (MRU)', value: 'MRU' },\n                { label: 'Mauritius Rupee (MUR)', value: 'MUR' },\n                { label: 'ADB Unit of Account (XUA)', value: 'XUA' },\n                { label: 'Mexican Peso (MXN)', value: 'MXN' },\n                { label: 'Mexican Unidad de Inversion (UDI) (MXV)', value: 'MXV' },\n                { label: 'Moldovan Leu (MDL)', value: 'MDL' },\n                { label: 'Tugrik (MNT)', value: 'MNT' },\n                { label: 'Moroccan Dirham (MAD)', value: 'MAD' },\n                { label: 'Mozambique Metical (MZN)', value: 'MZN' },\n                { label: 'Kyat (MMK)', value: 'MMK' },\n                { label: 'Namibia Dollar (NAD)', value: 'NAD' },\n                { label: 'Nepalese Rupee (NPR)', value: 'NPR' },\n                { label: 'Cordoba Oro (NIO)', value: 'NIO' },\n                { label: 'Naira (NGN)', value: 'NGN' },\n                { label: 'Rial Omani (OMR)', value: 'OMR' },\n                { label: 'Pakistan Rupee (PKR)', value: 'PKR' },\n                { label: 'Balboa (PAB)', value: 'PAB' },\n                { label: 'Kina (PGK)', value: 'PGK' },\n                { label: 'Guarani (PYG)', value: 'PYG' },\n                { label: 'Sol (PEN)', value: 'PEN' },\n                { label: 'Philippine Peso (PHP)', value: 'PHP' },\n                { label: 'Zloty (PLN)', value: 'PLN' },\n                { label: 'Qatari Rial (QAR)', value: 'QAR' },\n                { label: 'Romanian Leu (RON)', value: 'RON' },\n                { label: 'Russian Ruble (RUB)', value: 'RUB' },\n                { label: 'Rwanda Franc (RWF)', value: 'RWF' },\n                { label: 'Saint Helena Pound (SHP)', value: 'SHP' },\n                { label: 'Tala (WST)', value: 'WST' },\n                { label: 'Dobra (STN)', value: 'STN' },\n                { label: 'Saudi Riyal (SAR)', value: 'SAR' },\n                { label: 'Serbian Dinar (RSD)', value: 'RSD' },\n                { label: 'Seychelles Rupee (SCR)', value: 'SCR' },\n                { label: 'Leone (SLL)', value: 'SLL' },\n                { label: 'Singapore Dollar (SGD)', value: 'SGD' },\n                { label: 'Sucre (XSU)', value: 'XSU' },\n                { label: 'Solomon Islands Dollar (SBD)', value: 'SBD' },\n                { label: 'Somali Shilling (SOS)', value: 'SOS' },\n                { label: 'South Sudanese Pound (SSP)', value: 'SSP' },\n                { label: 'Sri Lanka Rupee (LKR)', value: 'LKR' },\n                { label: 'Sudanese Pound (SDG)', value: 'SDG' },\n                { label: 'Surinam Dollar (SRD)', value: 'SRD' },\n                { label: 'Lilangeni (SZL)', value: 'SZL' },\n                { label: 'Swedish Krona (SEK)', value: 'SEK' },\n                { label: 'WIR Euro (CHE)', value: 'CHE' },\n                { label: 'WIR Franc (CHW)', value: 'CHW' },\n                { label: 'Syrian Pound (SYP)', value: 'SYP' },\n                { label: 'New Taiwan Dollar (TWD)', value: 'TWD' },\n                { label: 'Somoni (TJS)', value: 'TJS' },\n                { label: 'Tanzanian Shilling (TZS)', value: 'TZS' },\n                { label: 'Baht (THB)', value: 'THB' },\n                { label: 'Pa’anga (TOP)', value: 'TOP' },\n                { label: 'Trinidad and Tobago Dollar (TTD)', value: 'TTD' },\n                { label: 'Tunisian Dinar (TND)', value: 'TND' },\n                { label: 'Turkish Lira (TRY)', value: 'TRY' },\n                { label: 'Turkmenistan New Manat (TMT)', value: 'TMT' },\n                { label: 'Uganda Shilling (UGX)', value: 'UGX' },\n                { label: 'Hryvnia (UAH)', value: 'UAH' },\n                { label: 'UAE Dirham (AED)', value: 'AED' },\n                { label: 'US Dollar (Next day) (USN)', value: 'USN' },\n                { label: 'Peso Uruguayo (UYU)', value: 'UYU' },\n                { label: 'Uruguay Peso en Unidades Indexadas (UYI)', value: 'UYI' },\n                { label: 'Unidad Previsional (UYW)', value: 'UYW' },\n                { label: 'Uzbekistan Sum (UZS)', value: 'UZS' },\n                { label: 'Vatu (VUV)', value: 'VUV' },\n                { label: 'Bolívar Soberano (VES)', value: 'VES' },\n                { label: 'Dong (VND)', value: 'VND' },\n                { label: 'Yemeni Rial (YER)', value: 'YER' },\n                { label: 'Zambian Kwacha (ZMW)', value: 'ZMW' },\n                { label: 'Zimbabwe Dollar (ZWL),', value: 'ZWL' },\n            ],\n        },\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/currency/editForm/Currency.edit.data.js?");

/***/ }),

/***/ "./lib/components/currency/editForm/Currency.edit.validation.js":
/*!**********************************************************************!*\
  !*** ./lib/components/currency/editForm/Currency.edit.validation.js ***!
  \**********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validate.minLength',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxLength',\n        ignore: true,\n    },\n    {\n        key: 'validate.minWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.pattern',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/currency/editForm/Currency.edit.validation.js?");

/***/ }),

/***/ "./lib/components/datagrid/DataGrid.js":
/*!*********************************************!*\
  !*** ./lib/components/datagrid/DataGrid.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar DataGrid = formiojs_1.Components.components.datagrid;\nvar DataGridComponent = /** @class */ (function (_super) {\n    __extends(DataGridComponent, _super);\n    function DataGridComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(DataGridComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return DataGridComponent;\n}(DataGrid));\nexports.default = DataGridComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/datagrid/DataGrid.js?");

/***/ }),

/***/ "./lib/components/datamap/DataMap.js":
/*!*******************************************!*\
  !*** ./lib/components/datamap/DataMap.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar DataMap = formiojs_1.Components.components.datamap;\nvar DataMapComponent = /** @class */ (function (_super) {\n    __extends(DataMapComponent, _super);\n    function DataMapComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(DataMapComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return DataMapComponent;\n}(DataMap));\nexports.default = DataMapComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/datamap/DataMap.js?");

/***/ }),

/***/ "./lib/components/datetime/DateTime.form.js":
/*!**************************************************!*\
  !*** ./lib/components/datetime/DateTime.form.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.datetime.editForm;\nvar DateTime_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/DateTime.edit.display */ \"./lib/components/datetime/editForm/DateTime.edit.display.js\"));\nvar DateTime_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/DateTime.edit.data */ \"./lib/components/datetime/editForm/DateTime.edit.data.js\"));\nvar DateTime_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/DateTime.edit.validation */ \"./lib/components/datetime/editForm/DateTime.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: DateTime_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: DateTime_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: DateTime_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/datetime/DateTime.form.js?");

/***/ }),

/***/ "./lib/components/datetime/DateTime.js":
/*!*********************************************!*\
  !*** ./lib/components/datetime/DateTime.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar DateTime_form_1 = __importDefault(__webpack_require__(/*! ./DateTime.form */ \"./lib/components/datetime/DateTime.form.js\"));\nvar DateTime = formiojs_1.Components.components.datetime;\nvar DateTimeComponent = /** @class */ (function (_super) {\n    __extends(DateTimeComponent, _super);\n    function DateTimeComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    DateTimeComponent.editForm = DateTime_form_1.default;\n    return DateTimeComponent;\n}(DateTime));\nexports.default = DateTimeComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/datetime/DateTime.js?");

/***/ }),

/***/ "./lib/components/datetime/editForm/DateTime.edit.data.js":
/*!****************************************************************!*\
  !*** ./lib/components/datetime/editForm/DateTime.edit.data.js ***!
  \****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/datetime/editForm/DateTime.edit.data.js?");

/***/ }),

/***/ "./lib/components/datetime/editForm/DateTime.edit.display.js":
/*!*******************************************************************!*\
  !*** ./lib/components/datetime/editForm/DateTime.edit.display.js ***!
  \*******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/datetime/editForm/DateTime.edit.display.js?");

/***/ }),

/***/ "./lib/components/datetime/editForm/DateTime.edit.validation.js":
/*!**********************************************************************!*\
  !*** ./lib/components/datetime/editForm/DateTime.edit.validation.js ***!
  \**********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/datetime/editForm/DateTime.edit.validation.js?");

/***/ }),

/***/ "./lib/components/day/Day.form.js":
/*!****************************************!*\
  !*** ./lib/components/day/Day.form.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Day_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Day.edit.data */ \"./lib/components/day/editForm/Day.edit.data.js\"));\nvar Day_edit_day_1 = __importDefault(__webpack_require__(/*! ./editForm/Day.edit.day */ \"./lib/components/day/editForm/Day.edit.day.js\"));\nvar Day_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Day.edit.display */ \"./lib/components/day/editForm/Day.edit.display.js\"));\nvar Day_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Day.edit.validation */ \"./lib/components/day/editForm/Day.edit.validation.js\"));\nvar Day_edit_year_1 = __importDefault(__webpack_require__(/*! ./editForm/Day.edit.year */ \"./lib/components/day/editForm/Day.edit.year.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Day_edit_display_1.default,\n            },\n            {\n                key: 'day',\n                label: 'Day',\n                weight: 3,\n                components: Day_edit_day_1.default,\n            },\n            {\n                key: 'year',\n                label: 'Year',\n                weight: 3,\n                components: Day_edit_year_1.default,\n            },\n            {\n                key: 'data',\n                components: Day_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Day_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/Day.form.js?");

/***/ }),

/***/ "./lib/components/day/Day.js":
/*!***********************************!*\
  !*** ./lib/components/day/Day.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Day_form_1 = __importDefault(__webpack_require__(/*! ./Day.form */ \"./lib/components/day/Day.form.js\"));\nvar Day = formiojs_1.Components.components.day;\nvar DayComponent = /** @class */ (function (_super) {\n    __extends(DayComponent, _super);\n    function DayComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    DayComponent.prototype.clearErrorClasses = function (elements) {\n        var _a = this.refs, day = _a.day, month = _a.month, year = _a.year;\n        _super.prototype.clearErrorClasses.call(this, [day, month, year]);\n    };\n    DayComponent.editForm = Day_form_1.default;\n    return DayComponent;\n}(Day));\nexports.default = DayComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/Day.js?");

/***/ }),

/***/ "./lib/components/day/editForm/Day.edit.data.js":
/*!******************************************************!*\
  !*** ./lib/components/day/editForm/Day.edit.data.js ***!
  \******************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        key: 'redrawOn',\n        ignore: true,\n    },\n    {\n        key: 'clearOnHide',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/editForm/Day.edit.data.js?");

/***/ }),

/***/ "./lib/components/day/editForm/Day.edit.day.js":
/*!*****************************************************!*\
  !*** ./lib/components/day/editForm/Day.edit.day.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        weight: 214,\n        type: 'checkbox',\n        label: 'Day First',\n        tooltip: 'Display the Day field before the Month field.',\n        key: 'dayFirst',\n        input: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/editForm/Day.edit.day.js?");

/***/ }),

/***/ "./lib/components/day/editForm/Day.edit.display.js":
/*!*********************************************************!*\
  !*** ./lib/components/day/editForm/Day.edit.display.js ***!
  \*********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        weight: 213,\n        type: 'checkbox',\n        label: 'Use Locale Settings',\n        tooltip: 'Use locale settings to display day.',\n        key: 'useLocaleSettings',\n        input: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/editForm/Day.edit.display.js?");

/***/ }),

/***/ "./lib/components/day/editForm/Day.edit.validation.js":
/*!************************************************************!*\
  !*** ./lib/components/day/editForm/Day.edit.validation.js ***!
  \************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n    {\n        key: 'validate.required',\n        ignore: true,\n    },\n    {\n        key: 'validate.unique',\n        ignore: true,\n    },\n    {\n        weight: 0,\n        type: 'checkbox',\n        label: 'Require Day',\n        tooltip: 'A required field must be filled in before the form can be submitted.',\n        key: 'fields.day.required',\n        input: true,\n    },\n    {\n        weight: 10,\n        type: 'checkbox',\n        label: 'Require Month',\n        tooltip: 'A required field must be filled in before the form can be submitted.',\n        key: 'fields.month.required',\n        input: true,\n    },\n    {\n        weight: 20,\n        type: 'checkbox',\n        label: 'Require Year',\n        tooltip: 'A required field must be filled in before the form can be submitted.',\n        key: 'fields.year.required',\n        input: true,\n    },\n    {\n        weight: 40,\n        type: 'textfield',\n        label: 'Minimum Day',\n        placeholder: 'yyyy-MM-dd',\n        tooltip: 'A minimum date that can be set. You can also use Moment.js functions. For example: \\n \\n moment().subtract(10, \\'days\\')',\n        key: 'minDate',\n        input: true,\n    },\n    {\n        weight: 30,\n        type: 'textfield',\n        label: 'Maximum Day',\n        placeholder: 'yyyy-MM-dd',\n        tooltip: 'A maximum day that can be set. You can also use Moment.js functions. For example: \\n \\n moment().add(10, \\'days\\')',\n        key: 'maxDate',\n        input: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/editForm/Day.edit.validation.js?");

/***/ }),

/***/ "./lib/components/day/editForm/Day.edit.year.js":
/*!******************************************************!*\
  !*** ./lib/components/day/editForm/Day.edit.year.js ***!
  \******************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        weight: 203,\n        type: 'number',\n        input: true,\n        key: 'fields.year.minYear',\n        label: 'Minimum Year',\n        placeholder: '1900',\n        tooltip: 'The minimum year that can be entered.',\n    },\n    {\n        weight: 204,\n        type: 'number',\n        input: true,\n        key: 'fields.year.maxYear',\n        label: 'Maximum Year',\n        placeholder: '2030',\n        tooltip: 'The maximum year that can be entered.',\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/day/editForm/Day.edit.year.js?");

/***/ }),

/***/ "./lib/components/editgrid/EditGrid.js":
/*!*********************************************!*\
  !*** ./lib/components/editgrid/EditGrid.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar EditGrid = formiojs_1.Components.components.editgrid;\nvar EditGridComponent = /** @class */ (function (_super) {\n    __extends(EditGridComponent, _super);\n    function EditGridComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(EditGridComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return EditGridComponent;\n}(EditGrid));\nexports.default = EditGridComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/editgrid/EditGrid.js?");

/***/ }),

/***/ "./lib/components/email/Email.form.js":
/*!********************************************!*\
  !*** ./lib/components/email/Email.form.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar Email_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Email.edit.validation */ \"./lib/components/email/editForm/Email.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'validation',\n                components: Email_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/email/Email.form.js?");

/***/ }),

/***/ "./lib/components/email/Email.js":
/*!***************************************!*\
  !*** ./lib/components/email/Email.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Email_form_1 = __importDefault(__webpack_require__(/*! ./Email.form */ \"./lib/components/email/Email.form.js\"));\nvar Email = formiojs_1.Components.components.email;\nvar EmailComponent = /** @class */ (function (_super) {\n    __extends(EmailComponent, _super);\n    function EmailComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    EmailComponent.editForm = Email_form_1.default;\n    return EmailComponent;\n}(Email));\nexports.default = EmailComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/email/Email.js?");

/***/ }),

/***/ "./lib/components/email/editForm/Email.edit.validation.js":
/*!****************************************************************!*\
  !*** ./lib/components/email/editForm/Email.edit.validation.js ***!
  \****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validate.minWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxWords',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/email/editForm/Email.edit.validation.js?");

/***/ }),

/***/ "./lib/components/fieldset/Fieldset.form.js":
/*!**************************************************!*\
  !*** ./lib/components/fieldset/Fieldset.form.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar nestedComponentForm = formiojs_1.Components.components.nested.editForm;\nvar Fieldset_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Fieldset.edit.display */ \"./lib/components/fieldset/editForm/Fieldset.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return nestedComponentForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Fieldset_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/fieldset/Fieldset.form.js?");

/***/ }),

/***/ "./lib/components/fieldset/Fieldset.js":
/*!*********************************************!*\
  !*** ./lib/components/fieldset/Fieldset.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Fieldset_form_1 = __importDefault(__webpack_require__(/*! ./Fieldset.form */ \"./lib/components/fieldset/Fieldset.form.js\"));\nvar Fieldset = formiojs_1.Components.components.fieldset;\nvar FieldsetComponent = /** @class */ (function (_super) {\n    __extends(FieldsetComponent, _super);\n    function FieldsetComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    FieldsetComponent.editForm = Fieldset_form_1.default;\n    return FieldsetComponent;\n}(Fieldset));\nexports.default = FieldsetComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/fieldset/Fieldset.js?");

/***/ }),

/***/ "./lib/components/fieldset/editForm/Fieldset.edit.display.js":
/*!*******************************************************************!*\
  !*** ./lib/components/fieldset/editForm/Fieldset.edit.display.js ***!
  \*******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'description',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'label',\n        hidden: true,\n        calculateValue: function (context) {\n            return context.data.legend;\n        },\n    },\n    {\n        weight: 1,\n        type: 'textfield',\n        input: true,\n        key: 'legend',\n        label: 'Legend',\n        placeholder: 'Legend',\n        tooltip: 'The legend for this Fieldset.',\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/fieldset/editForm/Fieldset.edit.display.js?");

/***/ }),

/***/ "./lib/components/file/File.form.js":
/*!******************************************!*\
  !*** ./lib/components/file/File.form.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.file.editForm;\nvar File_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/File.edit.display */ \"./lib/components/file/editForm/File.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: File_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/file/File.form.js?");

/***/ }),

/***/ "./lib/components/file/File.js":
/*!*************************************!*\
  !*** ./lib/components/file/File.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar File_form_1 = __importDefault(__webpack_require__(/*! ./File.form */ \"./lib/components/file/File.form.js\"));\nvar File = formiojs_1.Components.components.file;\nvar FileComponent = /** @class */ (function (_super) {\n    __extends(FileComponent, _super);\n    function FileComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    FileComponent.prototype.activateRemovalAt = function (element, message) {\n        var focusedElem;\n        if (element && element.length) {\n            focusedElem = element[0];\n        }\n        else if (this.refs.fileBrowse) {\n            focusedElem = this.refs.fileBrowse;\n        }\n        var params = { id: \"removed-\" + this.id + \"-\" + this.component.key };\n        this.addHiddenMessageBeforeChild(focusedElem, focusedElem.children[0], message, params);\n        focusedElem.focus();\n    };\n    FileComponent.prototype.activateRemoveLink = function (event, index) {\n        _super.prototype.activateRemoveLink.call(this, event, index);\n        this.activateRemovalAt(this.refs.fileLink, this.t('File was removed. '));\n    };\n    FileComponent.prototype.activateFileStatusRemoveLink = function (event, index) {\n        _super.prototype.activateFileStatusRemoveLink.call(this, event, index);\n        this.activateRemovalAt(this.refs.fileStatusRemove, this.t('Error message was removed. '));\n    };\n    FileComponent.prototype.attach = function (element) {\n        var _this = this;\n        var superAttach = _super.prototype.attach.call(this, element);\n        var hiddenMessagesIDs = [\"uploaded-\" + this.id + \"-\" + this.component.key, \"notuploaded-\" + this.id + \"-\" + this.component.key, \"removed-\" + this.id + \"-\" + this.component.key];\n        this.refs.fileLink.forEach(function (fileLink) {\n            _this.addEventListener(fileLink, 'focusout', function () { return _this.hiddenMessageRemovalByID(hiddenMessagesIDs); });\n        });\n        this.refs.fileStatusRemove.forEach(function (fileStatusRemove) {\n            _this.addEventListener(fileStatusRemove, 'focusout', function () { return _this.hiddenMessageRemovalByID(hiddenMessagesIDs); });\n        });\n        this.addEventListener(this.refs.fileBrowse, 'focusout', function () { return _this.hiddenMessageRemovalByID(hiddenMessagesIDs); });\n        if (this.refs.fileBrowse) {\n            this.removeEventListener(this.refs.fileBrowse, 'click');\n            this.addEventListener(this.refs.fileBrowse, 'click', function (event) {\n                event.preventDefault();\n                // Set focus on a hidden empty element to prevent unneeded content announcement\n                var hiddenEmptyElem = document.getElementById(\"invisible-\" + _this.id + \"-\" + _this.component.key);\n                hiddenEmptyElem.textContent = ' ';\n                hiddenEmptyElem.focus();\n                _this.browseFiles(_this.browseOptions)\n                    .then(function (files) {\n                    _this.upload(files);\n                });\n            });\n        }\n        return superAttach;\n    };\n    // Adds action message and handles focus\n    FileComponent.prototype.onUploadDone = function (fileUpload) {\n        var focusedElem = null;\n        var message = '';\n        var params = { id: '' };\n        if (fileUpload.status !== 'error') {\n            if (this.refs.fileLink && this.refs.fileLink.length) {\n                focusedElem = this.refs.fileLink[this.refs.fileLink.length - 1];\n                message = this.t('File was uploaded. ');\n                params.id = \"uploaded-\" + this.id + \"-\" + this.component.key;\n            }\n        }\n        else {\n            if (this.refs.fileStatusRemove && this.refs.fileStatusRemove.length) {\n                focusedElem = this.refs.fileStatusRemove[this.refs.fileStatusRemove.length - 1];\n                message = this.t(\"File wasn't uploaded. \");\n                params.id = \"notuploaded-\" + this.id + \"-\" + this.component.key;\n            }\n        }\n        this.addHiddenMessageBeforeChild(focusedElem, focusedElem.children[0], message, params);\n        focusedElem.focus();\n    };\n    FileComponent.prototype.upload = function (files) {\n        // Set focus on a hidden message to announce about start of file uploading\n        var uploadingProcess = document.getElementById(\"invisible-\" + this.id + \"-\" + this.component.key);\n        uploadingProcess.textContent = this.t('Uploading is in process');\n        uploadingProcess.focus();\n        _super.prototype.upload.call(this, files, this.onUploadDone);\n    };\n    FileComponent.editForm = File_form_1.default;\n    return FileComponent;\n}(File));\nexports.default = FileComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/file/File.js?");

/***/ }),

/***/ "./lib/components/file/editForm/File.edit.display.js":
/*!***********************************************************!*\
  !*** ./lib/components/file/editForm/File.edit.display.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/file/editForm/File.edit.display.js?");

/***/ }),

/***/ "./lib/components/form/Form.js":
/*!*************************************!*\
  !*** ./lib/components/form/Form.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Form = formiojs_1.Components.components.form;\nvar FormComponent = /** @class */ (function (_super) {\n    __extends(FormComponent, _super);\n    function FormComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(FormComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return FormComponent;\n}(Form));\nexports.default = FormComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/form/Form.js?");

/***/ }),

/***/ "./lib/components/hidden/Hidden.form.js":
/*!**********************************************!*\
  !*** ./lib/components/hidden/Hidden.form.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.hidden.editForm;\nvar Hidden_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Hidden.edit.display */ \"./lib/components/hidden/editForm/Hidden.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Hidden_edit_display_1.default\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/hidden/Hidden.form.js?");

/***/ }),

/***/ "./lib/components/hidden/Hidden.js":
/*!*****************************************!*\
  !*** ./lib/components/hidden/Hidden.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Hidden_form_1 = __importDefault(__webpack_require__(/*! ./Hidden.form */ \"./lib/components/hidden/Hidden.form.js\"));\nvar Hidden = formiojs_1.Components.components.hidden;\nvar HiddenComponent = /** @class */ (function (_super) {\n    __extends(HiddenComponent, _super);\n    function HiddenComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    HiddenComponent.editForm = Hidden_form_1.default;\n    return HiddenComponent;\n}(Hidden));\nexports.default = HiddenComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/hidden/Hidden.js?");

/***/ }),

/***/ "./lib/components/hidden/editForm/Hidden.edit.display.js":
/*!***************************************************************!*\
  !*** ./lib/components/hidden/editForm/Hidden.edit.display.js ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [];\n\n\n//# sourceURL=webpack://vpat/./lib/components/hidden/editForm/Hidden.edit.display.js?");

/***/ }),

/***/ "./lib/components/html/HTML.form.js":
/*!******************************************!*\
  !*** ./lib/components/html/HTML.form.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.htmlelement.editForm;\nvar HTML_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/HTML.edit.display */ \"./lib/components/html/editForm/HTML.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: HTML_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/html/HTML.form.js?");

/***/ }),

/***/ "./lib/components/html/HTML.js":
/*!*************************************!*\
  !*** ./lib/components/html/HTML.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar HTML_form_1 = __importDefault(__webpack_require__(/*! ./HTML.form */ \"./lib/components/html/HTML.form.js\"));\nvar HTML = formiojs_1.Components.components.htmlelement;\nvar HTMLComponent = /** @class */ (function (_super) {\n    __extends(HTMLComponent, _super);\n    function HTMLComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    HTMLComponent.editForm = HTML_form_1.default;\n    return HTMLComponent;\n}(HTML));\nexports.default = HTMLComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/html/HTML.js?");

/***/ }),

/***/ "./lib/components/html/editForm/HTML.edit.display.js":
/*!***********************************************************!*\
  !*** ./lib/components/html/editForm/HTML.edit.display.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [];\n\n\n//# sourceURL=webpack://vpat/./lib/components/html/editForm/HTML.edit.display.js?");

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Address_1 = __importDefault(__webpack_require__(/*! ./address/Address */ \"./lib/components/address/Address.js\"));\nvar Button_1 = __importDefault(__webpack_require__(/*! ./button/Button */ \"./lib/components/button/Button.js\"));\nvar Checkbox_1 = __importDefault(__webpack_require__(/*! ./checkbox/Checkbox */ \"./lib/components/checkbox/Checkbox.js\"));\nvar Columns_1 = __importDefault(__webpack_require__(/*! ./columns/Columns */ \"./lib/components/columns/Columns.js\"));\nvar Container_1 = __importDefault(__webpack_require__(/*! ./container/Container */ \"./lib/components/container/Container.js\"));\nvar Content_1 = __importDefault(__webpack_require__(/*! ./content/Content */ \"./lib/components/content/Content.js\"));\nvar Currency_1 = __importDefault(__webpack_require__(/*! ./currency/Currency */ \"./lib/components/currency/Currency.js\"));\nvar DataGrid_1 = __importDefault(__webpack_require__(/*! ./datagrid/DataGrid */ \"./lib/components/datagrid/DataGrid.js\"));\nvar DataMap_1 = __importDefault(__webpack_require__(/*! ./datamap/DataMap */ \"./lib/components/datamap/DataMap.js\"));\nvar DateTime_1 = __importDefault(__webpack_require__(/*! ./datetime/DateTime */ \"./lib/components/datetime/DateTime.js\"));\nvar Day_1 = __importDefault(__webpack_require__(/*! ./day/Day */ \"./lib/components/day/Day.js\"));\nvar EditGrid_1 = __importDefault(__webpack_require__(/*! ./editgrid/EditGrid */ \"./lib/components/editgrid/EditGrid.js\"));\nvar Email_1 = __importDefault(__webpack_require__(/*! ./email/Email */ \"./lib/components/email/Email.js\"));\nvar Fieldset_1 = __importDefault(__webpack_require__(/*! ./fieldset/Fieldset */ \"./lib/components/fieldset/Fieldset.js\"));\nvar File_1 = __importDefault(__webpack_require__(/*! ./file/File */ \"./lib/components/file/File.js\"));\nvar Form_1 = __importDefault(__webpack_require__(/*! ./form/Form */ \"./lib/components/form/Form.js\"));\nvar Hidden_1 = __importDefault(__webpack_require__(/*! ./hidden/Hidden */ \"./lib/components/hidden/Hidden.js\"));\nvar HTML_1 = __importDefault(__webpack_require__(/*! ./html/HTML */ \"./lib/components/html/HTML.js\"));\nvar Input_1 = __importDefault(__webpack_require__(/*! ./input/Input */ \"./lib/components/input/Input.js\"));\nvar NestedComponent_1 = __importDefault(__webpack_require__(/*! ./nested/NestedComponent */ \"./lib/components/nested/NestedComponent.js\"));\nvar Number_1 = __importDefault(__webpack_require__(/*! ./number/Number */ \"./lib/components/number/Number.js\"));\nvar Panel_1 = __importDefault(__webpack_require__(/*! ./panel/Panel */ \"./lib/components/panel/Panel.js\"));\nvar Password_1 = __importDefault(__webpack_require__(/*! ./password/Password */ \"./lib/components/password/Password.js\"));\nvar PhoneNumber_1 = __importDefault(__webpack_require__(/*! ./phonenumber/PhoneNumber */ \"./lib/components/phonenumber/PhoneNumber.js\"));\nvar Radio_1 = __importDefault(__webpack_require__(/*! ./radio/Radio */ \"./lib/components/radio/Radio.js\"));\nvar ReCaptcha_1 = __importDefault(__webpack_require__(/*! ./recaptcha/ReCaptcha */ \"./lib/components/recaptcha/ReCaptcha.js\"));\nvar Resource_1 = __importDefault(__webpack_require__(/*! ./resource/Resource */ \"./lib/components/resource/Resource.js\"));\nvar Select_1 = __importDefault(__webpack_require__(/*! ./select/Select */ \"./lib/components/select/Select.js\"));\nvar SelectBoxes_1 = __importDefault(__webpack_require__(/*! ./selectboxes/SelectBoxes */ \"./lib/components/selectboxes/SelectBoxes.js\"));\nvar Signature_1 = __importDefault(__webpack_require__(/*! ./signature/Signature */ \"./lib/components/signature/Signature.js\"));\nvar Sketchpad_1 = __importDefault(__webpack_require__(/*! ./sketchpad/Sketchpad */ \"./lib/components/sketchpad/Sketchpad.js\"));\nvar Survey_1 = __importDefault(__webpack_require__(/*! ./survey/Survey */ \"./lib/components/survey/Survey.js\"));\nvar Table_1 = __importDefault(__webpack_require__(/*! ./table/Table */ \"./lib/components/table/Table.js\"));\nvar Tabs_1 = __importDefault(__webpack_require__(/*! ./tabs/Tabs */ \"./lib/components/tabs/Tabs.js\"));\nvar Tagpad_1 = __importDefault(__webpack_require__(/*! ./tagpad/Tagpad */ \"./lib/components/tagpad/Tagpad.js\"));\nvar Tags_1 = __importDefault(__webpack_require__(/*! ./tags/Tags */ \"./lib/components/tags/Tags.js\"));\nvar TextArea_1 = __importDefault(__webpack_require__(/*! ./textarea/TextArea */ \"./lib/components/textarea/TextArea.js\"));\nvar TextField_1 = __importDefault(__webpack_require__(/*! ./textfield/TextField */ \"./lib/components/textfield/TextField.js\"));\nvar Time_1 = __importDefault(__webpack_require__(/*! ./time/Time */ \"./lib/components/time/Time.js\"));\nvar Tree_1 = __importDefault(__webpack_require__(/*! ./tree/Tree */ \"./lib/components/tree/Tree.js\"));\nvar Unknown_1 = __importDefault(__webpack_require__(/*! ./unknown/Unknown */ \"./lib/components/unknown/Unknown.js\"));\nvar Url_1 = __importDefault(__webpack_require__(/*! ./url/Url */ \"./lib/components/url/Url.js\"));\nvar Well_1 = __importDefault(__webpack_require__(/*! ./well/Well */ \"./lib/components/well/Well.js\"));\nexports.default = {\n    address: Address_1.default,\n    button: Button_1.default,\n    checkbox: Checkbox_1.default,\n    columns: Columns_1.default,\n    container: Container_1.default,\n    content: Content_1.default,\n    currency: Currency_1.default,\n    day: Day_1.default,\n    datagrid: DataGrid_1.default,\n    datamap: DataMap_1.default,\n    datetime: DateTime_1.default,\n    editgrid: EditGrid_1.default,\n    email: Email_1.default,\n    fieldset: Fieldset_1.default,\n    file: File_1.default,\n    form: Form_1.default,\n    hidden: Hidden_1.default,\n    htmlelement: HTML_1.default,\n    input: Input_1.default,\n    nested: NestedComponent_1.default,\n    number: Number_1.default,\n    panel: Panel_1.default,\n    password: Password_1.default,\n    phoneNumber: PhoneNumber_1.default,\n    radio: Radio_1.default,\n    recaptcha: ReCaptcha_1.default,\n    resource: Resource_1.default,\n    select: Select_1.default,\n    selectboxes: SelectBoxes_1.default,\n    signature: Signature_1.default,\n    sketchpad: Sketchpad_1.default,\n    survey: Survey_1.default,\n    table: Table_1.default,\n    tabs: Tabs_1.default,\n    tagpad: Tagpad_1.default,\n    tags: Tags_1.default,\n    textarea: TextArea_1.default,\n    textfield: TextField_1.default,\n    time: Time_1.default,\n    tree: Tree_1.default,\n    unknown: Unknown_1.default,\n    url: Url_1.default,\n    well: Well_1.default,\n};\n\n\n//# sourceURL=webpack://vpat/./lib/components/index.js?");

/***/ }),

/***/ "./lib/components/input/Input.js":
/*!***************************************!*\
  !*** ./lib/components/input/Input.js ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Input = formiojs_1.Components.components.input;\nvar attachElement = Input.prototype.attachElement;\nInput.prototype.attachElement = function (element, index) {\n    var _this = this;\n    var superAttachElement = attachElement.call(this, element, index);\n    if ((this.isFirefox() || this.isIE()) && this.refs.input && this.refs.input.length) {\n        this.refs.input.forEach(function (input) {\n            _this.addEventListener(input, 'focus', function () {\n                _this.refs.messageContainer.setAttribute('aria-live', 'polite');\n            });\n            _this.addEventListener(input, 'focusout', function () {\n                _this.refs.messageContainer.removeAttribute('aria-live');\n            });\n        });\n    }\n    return superAttachElement;\n};\nexports.default = Input;\n\n\n//# sourceURL=webpack://vpat/./lib/components/input/Input.js?");

/***/ }),

/***/ "./lib/components/nested/NestedComponent.js":
/*!**************************************************!*\
  !*** ./lib/components/nested/NestedComponent.js ***!
  \**************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar NestedComponent = formiojs_1.Components.components.nested;\nvar attach = NestedComponent.prototype.attach;\nvar SPACE_KEY = 32;\nvar ENTER_KEY = 13;\nNestedComponent.prototype.togglePanelState = function () {\n    if (this.component.type === 'panel' && this.refs.header && this.refs[\"nested-\" + this.component.key]) {\n        this.refs.header.children[0].setAttribute('aria-expanded', !this._collapsed);\n        var nestedPanel = this.refs[\"nested-\" + this.component.key];\n        if (nestedPanel) {\n            this._collapsed ? nestedPanel.setAttribute('hidden', true) : nestedPanel.removeAttribute('hidden');\n        }\n    }\n};\nObject.defineProperty(NestedComponent.prototype, 'collapsed', {\n    set: function (value) {\n        this._collapsed = value;\n        this.togglePanelState();\n    }\n});\nNestedComponent.prototype.attach = function (element) {\n    var _this = this;\n    var superAttach = attach.call(this, element);\n    this.addEventListener(this.refs.header, 'keydown', function (e) {\n        if (_this.component.collapsible && _this.refs.header) {\n            if (e.keyCode === SPACE_KEY || e.keyCode === ENTER_KEY) {\n                e.preventDefault();\n                _this.collapsed = !_this.collapsed;\n                var panelButton = _this.refs.header.querySelector('[role=\"button\"]');\n                if (panelButton) {\n                    panelButton.focus();\n                }\n            }\n        }\n    });\n    return superAttach;\n};\nexports.default = NestedComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/nested/NestedComponent.js?");

/***/ }),

/***/ "./lib/components/number/Number.form.js":
/*!**********************************************!*\
  !*** ./lib/components/number/Number.form.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar Number_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Number.edit.data */ \"./lib/components/number/editForm/Number.edit.data.js\"));\nvar Number_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Number.edit.display */ \"./lib/components/number/editForm/Number.edit.display.js\"));\nvar Number_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Number.edit.validation */ \"./lib/components/number/editForm/Number.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Number_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: Number_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Number_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/number/Number.form.js?");

/***/ }),

/***/ "./lib/components/number/Number.js":
/*!*****************************************!*\
  !*** ./lib/components/number/Number.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Number_form_1 = __importDefault(__webpack_require__(/*! ./Number.form */ \"./lib/components/number/Number.form.js\"));\nvar NumberComp = formiojs_1.Components.components.number;\nvar NumberComponent = /** @class */ (function (_super) {\n    __extends(NumberComponent, _super);\n    function NumberComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    NumberComponent.editForm = Number_form_1.default;\n    return NumberComponent;\n}(NumberComp));\nexports.default = NumberComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/number/Number.js?");

/***/ }),

/***/ "./lib/components/number/editForm/Number.edit.data.js":
/*!************************************************************!*\
  !*** ./lib/components/number/editForm/Number.edit.data.js ***!
  \************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'case',\n        ignore: true,\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 70,\n        key: 'delimiter',\n        label: 'Use Thousands Separator',\n        tooltip: 'Separate thousands by local delimiter.',\n    },\n    {\n        type: 'number',\n        input: true,\n        weight: 80,\n        key: 'decimalLimit',\n        label: 'Decimal Places',\n        tooltip: 'The maximum number of decimal places.',\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 90,\n        key: 'requireDecimal',\n        label: 'Require Decimal',\n        tooltip: 'Always show decimals, even if trailing zeros.',\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/number/editForm/Number.edit.data.js?");

/***/ }),

/***/ "./lib/components/number/editForm/Number.edit.display.js":
/*!***************************************************************!*\
  !*** ./lib/components/number/editForm/Number.edit.display.js ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'spellcheck',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/number/editForm/Number.edit.display.js?");

/***/ }),

/***/ "./lib/components/number/editForm/Number.edit.validation.js":
/*!******************************************************************!*\
  !*** ./lib/components/number/editForm/Number.edit.validation.js ***!
  \******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'unique',\n        ignore: true,\n    },\n    {\n        key: 'validate.minLength',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxLength',\n        ignore: true,\n    },\n    {\n        key: 'validate.minWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.pattern',\n        ignore: true,\n    },\n    {\n        type: 'number',\n        label: 'Minimum Value',\n        key: 'validate.min',\n        input: true,\n        placeholder: 'Minimum Value',\n        tooltip: 'The minimum value this field must have before the form can be submitted.',\n        weight: 150,\n    },\n    {\n        type: 'number',\n        label: 'Maximum Value',\n        key: 'validate.max',\n        input: true,\n        placeholder: 'Maximum Value',\n        tooltip: 'The maximum value this field can have before the form can be submitted.',\n        weight: 160,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/number/editForm/Number.edit.validation.js?");

/***/ }),

/***/ "./lib/components/panel/Panel.form.js":
/*!********************************************!*\
  !*** ./lib/components/panel/Panel.form.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar nestedComponentForm = formiojs_1.Components.components.nested.editForm;\nvar Panel_edit_conditional_1 = __importDefault(__webpack_require__(/*! ./editForm/Panel.edit.conditional */ \"./lib/components/panel/editForm/Panel.edit.conditional.js\"));\nvar Panel_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Panel.edit.display */ \"./lib/components/panel/editForm/Panel.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return nestedComponentForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Panel_edit_display_1.default,\n            },\n            {\n                key: 'conditional',\n                components: Panel_edit_conditional_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/panel/Panel.form.js?");

/***/ }),

/***/ "./lib/components/panel/Panel.js":
/*!***************************************!*\
  !*** ./lib/components/panel/Panel.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Panel_form_1 = __importDefault(__webpack_require__(/*! ./Panel.form */ \"./lib/components/panel/Panel.form.js\"));\nvar Panel = formiojs_1.Components.components.panel;\nvar PanelComponent = /** @class */ (function (_super) {\n    __extends(PanelComponent, _super);\n    function PanelComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PanelComponent.editForm = Panel_form_1.default;\n    return PanelComponent;\n}(Panel));\nexports.default = PanelComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/panel/Panel.js?");

/***/ }),

/***/ "./lib/components/panel/editForm/Panel.edit.conditional.js":
/*!*****************************************************************!*\
  !*** ./lib/components/panel/editForm/Panel.edit.conditional.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar EditFormUtils = formiojs_1.Components.EditFormUtils;\n/* eslint-disable quotes, max-len */\nvar title = 'Advanced Next Page';\nvar jsonProp = 'nextPage';\nvar jsProp = 'nextPage';\nvar jsDocHTML = (\"\\n  <p>You must assign the <strong>next</strong> variable with the API key of the next page.</p>\\n  <p>The global variable <strong>data</strong> is provided, and allows you to access the data of any form component, by using its API key.</p>\\n  <p>Also <strong>moment</strong> library is available, and allows you to manipulate dates in a convenient way.</p>\\n  <h5>Example</h5><pre>next = data.addComment ? 'page3' : 'page4';</pre>\\n\");\nvar jsonDocHTML = (\"\\n  <p>Submission data is available as JsonLogic variables, with the same api key as your components.</p>\\n\");\nvar settingComponent = EditFormUtils.javaScriptValue(title, jsProp, jsonProp, 110, jsDocHTML, jsonDocHTML);\nexports.default = [\n    __assign(__assign({}, settingComponent), { customConditional: function (context) {\n            return context.instance.options.editForm.display === 'wizard';\n        } }),\n];\n/* eslint-enable quotes, max-len */\n\n\n//# sourceURL=webpack://vpat/./lib/components/panel/editForm/Panel.edit.conditional.js?");

/***/ }),

/***/ "./lib/components/panel/editForm/Panel.edit.display.js":
/*!*************************************************************!*\
  !*** ./lib/components/panel/editForm/Panel.edit.display.js ***!
  \*************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'description',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'label',\n        hidden: true,\n        calculateValue: function (context) {\n            return context.data.title;\n        },\n    },\n    {\n        key: 'tabindex',\n        hidden: true,\n    },\n    {\n        weight: 1,\n        type: 'textfield',\n        input: true,\n        placeholder: 'Panel Title',\n        label: 'Title',\n        key: 'title',\n        tooltip: 'The title text that appears in the header of this panel.',\n    },\n    {\n        weight: 20,\n        type: 'textarea',\n        input: true,\n        key: 'tooltip',\n        label: 'Tooltip',\n        placeholder: 'To add a tooltip to this field, enter text here.',\n        tooltip: 'Adds a tooltip to the side of this field.',\n    },\n    {\n        weight: 40,\n        type: 'fieldset',\n        input: false,\n        components: [\n            {\n                type: 'select',\n                input: true,\n                label: 'Breadcrumb Type',\n                key: 'breadcrumb',\n                dataSrc: 'values',\n                data: {\n                    values: [\n                        { label: 'Default', value: 'default' },\n                        { label: 'Condensed', value: 'condensed' },\n                        { label: 'Hidden', value: 'none' },\n                    ],\n                },\n            },\n            {\n                input: true,\n                type: 'checkbox',\n                label: 'Allow click on Breadcrumb',\n                key: 'breadcrumbClickable',\n                defaultValue: true,\n                conditional: {\n                    json: { '!==': [{ var: 'data.breadcrumb' }, 'none'] },\n                },\n            },\n            {\n                weight: 50,\n                label: 'Panel Navigation Buttons',\n                optionsLabelPosition: 'right',\n                values: [\n                    {\n                        label: 'Previous',\n                        value: 'previous',\n                    },\n                    {\n                        label: 'Cancel',\n                        value: 'cancel',\n                    },\n                    {\n                        label: 'Next',\n                        value: 'next',\n                    },\n                ],\n                inline: true,\n                type: 'selectboxes',\n                key: 'buttonSettings',\n                input: true,\n                inputType: 'checkbox',\n                defaultValue: {\n                    previous: true,\n                    cancel: true,\n                    next: true,\n                },\n            },\n        ],\n        customConditional: function (context) {\n            return context.instance.options.editForm.display === 'wizard';\n        },\n    },\n    {\n        weight: 650,\n        type: 'checkbox',\n        label: 'Collapsible',\n        tooltip: 'If checked, this will turn this Panel into a collapsible panel.',\n        key: 'collapsible',\n        input: true,\n    },\n    {\n        weight: 651,\n        type: 'checkbox',\n        label: 'Initially Collapsed',\n        tooltip: 'Determines the initial collapsed state of this Panel.',\n        key: 'collapsed',\n        input: true,\n        conditional: {\n            json: { '===': [{ var: 'data.collapsible' }, true] },\n        },\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/panel/editForm/Panel.edit.display.js?");

/***/ }),

/***/ "./lib/components/password/Password.form.js":
/*!**************************************************!*\
  !*** ./lib/components/password/Password.form.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar Password_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Password.edit.data */ \"./lib/components/password/editForm/Password.edit.data.js\"));\nvar Password_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Password.edit.display */ \"./lib/components/password/editForm/Password.edit.display.js\"));\nvar Password_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Password.edit.validation */ \"./lib/components/password/editForm/Password.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Password_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: Password_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Password_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/password/Password.form.js?");

/***/ }),

/***/ "./lib/components/password/Password.js":
/*!*********************************************!*\
  !*** ./lib/components/password/Password.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Password_form_1 = __importDefault(__webpack_require__(/*! ./Password.form */ \"./lib/components/password/Password.form.js\"));\nvar Password = formiojs_1.Components.components.password;\nvar PasswordComponent = /** @class */ (function (_super) {\n    __extends(PasswordComponent, _super);\n    function PasswordComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PasswordComponent.editForm = Password_form_1.default;\n    return PasswordComponent;\n}(Password));\nexports.default = PasswordComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/password/Password.js?");

/***/ }),

/***/ "./lib/components/password/editForm/Password.edit.data.js":
/*!****************************************************************!*\
  !*** ./lib/components/password/editForm/Password.edit.data.js ***!
  \****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'inputFormat',\n        ignore: true,\n    },\n    {\n        key: 'persistent',\n        ignore: true,\n    },\n    {\n        key: 'protected',\n        ignore: true,\n    },\n    {\n        key: 'dbIndex',\n        ignore: true,\n    },\n    {\n        key: 'encrypted',\n        ignore: true,\n    },\n    {\n        key: 'defaultValue',\n        ignore: true,\n    },\n    {\n        key: 'case',\n        ignore: true,\n    },\n    {\n        key: 'customDefaultValuePanel',\n        ignore: true,\n    },\n    {\n        key: 'calculateValuePanel',\n        ignore: true,\n    },\n    {\n        key: 'passwordInfo',\n        weight: 0,\n        type: 'htmlelement',\n        tag: 'div',\n        className: 'alert alert-info',\n        content: 'Password fields are automatically encrypted using 1-way salted bcrypt hashes. These hashes are also protected and not returned in the API.',\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/password/editForm/Password.edit.data.js?");

/***/ }),

/***/ "./lib/components/password/editForm/Password.edit.display.js":
/*!*******************************************************************!*\
  !*** ./lib/components/password/editForm/Password.edit.display.js ***!
  \*******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'spellcheck',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/password/editForm/Password.edit.display.js?");

/***/ }),

/***/ "./lib/components/password/editForm/Password.edit.validation.js":
/*!**********************************************************************!*\
  !*** ./lib/components/password/editForm/Password.edit.validation.js ***!
  \**********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'unique',\n        ignore: true,\n    },\n    {\n        key: 'validate.minWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxWords',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/password/editForm/Password.edit.validation.js?");

/***/ }),

/***/ "./lib/components/phonenumber/PhoneNumber.form.js":
/*!********************************************************!*\
  !*** ./lib/components/phonenumber/PhoneNumber.form.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar PhoneNumber_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/PhoneNumber.edit.validation */ \"./lib/components/phonenumber/editForm/PhoneNumber.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'validation',\n                components: PhoneNumber_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/phonenumber/PhoneNumber.form.js?");

/***/ }),

/***/ "./lib/components/phonenumber/PhoneNumber.js":
/*!***************************************************!*\
  !*** ./lib/components/phonenumber/PhoneNumber.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar PhoneNumber_form_1 = __importDefault(__webpack_require__(/*! ./PhoneNumber.form */ \"./lib/components/phonenumber/PhoneNumber.form.js\"));\nvar PhoneNumber = formiojs_1.Components.components.phoneNumber;\nvar PhoneNumberComponent = /** @class */ (function (_super) {\n    __extends(PhoneNumberComponent, _super);\n    function PhoneNumberComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PhoneNumberComponent.editForm = PhoneNumber_form_1.default;\n    return PhoneNumberComponent;\n}(PhoneNumber));\nexports.default = PhoneNumberComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/phonenumber/PhoneNumber.js?");

/***/ }),

/***/ "./lib/components/phonenumber/editForm/PhoneNumber.edit.validation.js":
/*!****************************************************************************!*\
  !*** ./lib/components/phonenumber/editForm/PhoneNumber.edit.validation.js ***!
  \****************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n    {\n        key: 'validate.minLength',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxLength',\n        ignore: true,\n    },\n    {\n        key: 'validate.pattern',\n        ignore: true,\n    },\n    {\n        key: 'validate.minWords',\n        ignore: true,\n    },\n    {\n        key: 'validate.maxWords',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/phonenumber/editForm/PhoneNumber.edit.validation.js?");

/***/ }),

/***/ "./lib/components/radio/Radio.form.js":
/*!********************************************!*\
  !*** ./lib/components/radio/Radio.form.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Radio_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Radio.edit.data */ \"./lib/components/radio/editForm/Radio.edit.data.js\"));\nvar Radio_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Radio.edit.display */ \"./lib/components/radio/editForm/Radio.edit.display.js\"));\nvar Radio_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Radio.edit.validation */ \"./lib/components/radio/editForm/Radio.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Radio_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: Radio_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Radio_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/radio/Radio.form.js?");

/***/ }),

/***/ "./lib/components/radio/Radio.js":
/*!***************************************!*\
  !*** ./lib/components/radio/Radio.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Radio_form_1 = __importDefault(__webpack_require__(/*! ./Radio.form */ \"./lib/components/radio/Radio.form.js\"));\nvar Radio = formiojs_1.Components.components.radio;\nRadio.editForm = Radio_form_1.default;\nvar attach = Radio.prototype.attach;\nRadio.prototype.attach = function (element) {\n    var superResult = attach.call(this, element);\n    this.loadRefs(element, {\n        input: 'multiple',\n        wrapper: 'multiple',\n        fieldset: 'single',\n        messageContainer: 'single',\n        label: 'single',\n    });\n    return superResult;\n};\nvar render = Radio.prototype.render;\nRadio.prototype.render = function () {\n    this.noField = true;\n    return render.call(this);\n};\nRadio.prototype.clearErrorClasses = function (elements) {\n    var _this = this;\n    this.removeClass(this.refs.label, 'usa-label--error');\n    this.removeClass(this.element, 'usa-form-group--error');\n    var hiddentInvalidEntryMessage = document.getElementById(\"invalid-entry-\" + this.id);\n    if (hiddentInvalidEntryMessage) {\n        this.refs.label.removeChild(hiddentInvalidEntryMessage);\n    }\n    if (elements) {\n        elements.forEach(function (element) {\n            _this.removeClass(element, 'usa-input--error');\n        });\n    }\n    this.clearErrorID('aria-labelledby', this.refs.fieldset);\n};\nRadio.prototype.setErrorClasses = function (elements, dirty, hasErrors, hasMessage) {\n    var _this = this;\n    this.clearErrorClasses(elements);\n    if (hasErrors) {\n        this.addClass(this.refs.label, 'usa-label--error');\n        this.addClass(this.element, 'usa-form-group--error');\n        var hiddentInvalidEntryMessage = document.getElementById(\"invalid-entry-\" + this.id);\n        if (!hiddentInvalidEntryMessage) {\n            this.addHiddenMessage(', invalid entry, ', this.refs.label);\n        }\n        if (elements) {\n            elements.forEach(function (element) {\n                _this.addClass(element, 'usa-input--error');\n            });\n        }\n        this.addErrorID('aria-labelledby', this.refs.fieldset);\n    }\n};\nexports.default = Radio;\n\n\n//# sourceURL=webpack://vpat/./lib/components/radio/Radio.js?");

/***/ }),

/***/ "./lib/components/radio/editForm/Radio.edit.data.js":
/*!**********************************************************!*\
  !*** ./lib/components/radio/editForm/Radio.edit.data.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        key: 'clearOnHide',\n        ignore: true,\n    },\n    {\n        key: 'redrawOn',\n        ignore: true,\n    },\n    {\n        type: 'datagrid',\n        input: true,\n        label: 'Values',\n        key: 'values',\n        tooltip: 'The radio button values that can be picked for this field. Values are text submitted with the form data. Labels are text that appears next to the radio buttons on the form.',\n        weight: 10,\n        reorder: true,\n        defaultValue: [{ label: '', value: '' }],\n        components: [\n            {\n                label: 'Label',\n                key: 'label',\n                input: true,\n                type: 'textfield',\n            },\n            {\n                label: 'Value',\n                key: 'value',\n                input: true,\n                type: 'textfield',\n                allowCalculateOverride: true,\n                calculateValue: { _camelCase: [{ var: 'row.label' }] },\n                validate: {\n                    required: true,\n                },\n            },\n        ],\n    },\n    {\n        type: 'select',\n        input: true,\n        label: 'Storage Type',\n        key: 'dataType',\n        clearOnHide: true,\n        tooltip: 'The type to store the data. If you select something other than autotype, it will force it to that type.',\n        weight: 12,\n        template: '<span>{{ item.label }}</span>',\n        dataSrc: 'values',\n        data: {\n            values: [\n                { label: 'Autotype', value: 'auto' },\n                { label: 'String', value: 'string' },\n                { label: 'Number', value: 'number' },\n                { label: 'Boolean', value: 'boolean' },\n                { label: 'Object', value: 'object' },\n            ],\n        },\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/radio/editForm/Radio.edit.data.js?");

/***/ }),

/***/ "./lib/components/radio/editForm/Radio.edit.display.js":
/*!*************************************************************!*\
  !*** ./lib/components/radio/editForm/Radio.edit.display.js ***!
  \*************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/radio/editForm/Radio.edit.display.js?");

/***/ }),

/***/ "./lib/components/radio/editForm/Radio.edit.validation.js":
/*!****************************************************************!*\
  !*** ./lib/components/radio/editForm/Radio.edit.validation.js ***!
  \****************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n    {\n        key: 'unique',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/radio/editForm/Radio.edit.validation.js?");

/***/ }),

/***/ "./lib/components/recaptcha/ReCaptcha.js":
/*!***********************************************!*\
  !*** ./lib/components/recaptcha/ReCaptcha.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar ReCaptcha = formiojs_1.Components.components.recaptcha;\nvar ReCaptchaComponent = /** @class */ (function (_super) {\n    __extends(ReCaptchaComponent, _super);\n    function ReCaptchaComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(ReCaptchaComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return ReCaptchaComponent;\n}(ReCaptcha));\nexports.default = ReCaptchaComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/recaptcha/ReCaptcha.js?");

/***/ }),

/***/ "./lib/components/resource/Resource.js":
/*!*********************************************!*\
  !*** ./lib/components/resource/Resource.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Resource = formiojs_1.Components.components.resource;\nvar ResourceComponent = /** @class */ (function (_super) {\n    __extends(ResourceComponent, _super);\n    function ResourceComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(ResourceComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return ResourceComponent;\n}(Resource));\nexports.default = ResourceComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/resource/Resource.js?");

/***/ }),

/***/ "./lib/components/select/Select.form.js":
/*!**********************************************!*\
  !*** ./lib/components/select/Select.form.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Select_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Select.edit.data */ \"./lib/components/select/editForm/Select.edit.data.js\"));\nvar Select_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Select.edit.display */ \"./lib/components/select/editForm/Select.edit.display.js\"));\nvar Select_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/Select.edit.validation */ \"./lib/components/select/editForm/Select.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Select_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: Select_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: Select_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/select/Select.form.js?");

/***/ }),

/***/ "./lib/components/select/Select.js":
/*!*****************************************!*\
  !*** ./lib/components/select/Select.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:16-20 */
/*! CommonJS bailout: this is used directly at 26:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Select_form_1 = __importDefault(__webpack_require__(/*! ./Select.form */ \"./lib/components/select/Select.form.js\"));\nvar Select = formiojs_1.Components.components.select;\nvar SelectComponent = /** @class */ (function (_super) {\n    __extends(SelectComponent, _super);\n    function SelectComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    SelectComponent.schema = function () {\n        var extend = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            extend[_i] = arguments[_i];\n        }\n        return Select.schema({\n            widget: 'html5',\n            template: '',\n        });\n    };\n    Object.defineProperty(SelectComponent, \"builderInfo\", {\n        get: function () {\n            return __assign(__assign({}, Select.builderInfo), { schema: SelectComponent.schema() });\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(SelectComponent.prototype, \"defaultSchema\", {\n        get: function () {\n            return SelectComponent.schema();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    SelectComponent.prototype.clearErrorClasses = function (elements) {\n        var fields = elements || [this.refs.selectContainer];\n        var hiddentInvalidEntryMessage = document.getElementById(\"invalid-entry-\" + this.id);\n        if (this.isIE() && hiddentInvalidEntryMessage) {\n            this.refs.label.removeChild(hiddentInvalidEntryMessage);\n        }\n        _super.prototype.clearErrorClasses.call(this, fields);\n    };\n    SelectComponent.prototype.setErrorClasses = function (elements, dirty, hasErrors, hasMessages) {\n        _super.prototype.setErrorClasses.call(this, elements, dirty, hasErrors, hasMessages);\n        var hiddentInvalidEntryMessage = document.getElementById(\"invalid-entry-\" + this.id);\n        if (hasErrors && this.isIE() && !hiddentInvalidEntryMessage) {\n            this.addHiddenMessage(', invalid entry, ', this.refs.label);\n        }\n    };\n    SelectComponent.editForm = Select_form_1.default;\n    return SelectComponent;\n}(Select));\nexports.default = SelectComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/select/Select.js?");

/***/ }),

/***/ "./lib/components/select/editForm/Select.edit.data.js":
/*!************************************************************!*\
  !*** ./lib/components/select/editForm/Select.edit.data.js ***!
  \************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nexports.default = [\n    {\n        key: 'clearOnHide',\n        ignore: true,\n    },\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        type: 'select',\n        input: true,\n        weight: 0,\n        tooltip: 'The source to use for the select data. Values lets you provide your own values and labels. JSON lets you provide raw JSON data. URL lets you provide a URL to retrieve the JSON data from.',\n        key: 'dataSrc',\n        defaultValue: 'values',\n        label: 'Data Source Type',\n        dataSrc: 'values',\n        data: {\n            values: [\n                { label: 'Values', value: 'values' },\n                { label: 'URL', value: 'url' },\n                { label: 'Resource', value: 'resource' },\n                { label: 'Custom', value: 'custom' },\n                { label: 'Raw JSON', value: 'json' },\n                { label: 'IndexedDB', value: 'indexeddb' },\n            ],\n        },\n    },\n    {\n        type: 'textfield',\n        weight: 10,\n        input: true,\n        key: 'indexeddb.database',\n        label: 'Database name',\n        tooltip: 'The name of the indexeddb database.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'indexeddb'] },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'indexeddb.table',\n        label: 'Table name',\n        weight: 16,\n        tooltip: 'The name of table in the indexeddb database.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'indexeddb'] },\n        },\n    },\n    {\n        type: 'textarea',\n        as: 'json',\n        editor: 'ace',\n        weight: 18,\n        input: true,\n        key: 'indexeddb.filter',\n        label: 'Row Filter',\n        tooltip: 'Filter table items that match the object.',\n        defaultValue: {},\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'indexeddb'] },\n        },\n    },\n    {\n        type: 'textarea',\n        as: 'json',\n        editor: 'ace',\n        weight: 10,\n        input: true,\n        key: 'data.json',\n        label: 'Data Source Raw JSON',\n        tooltip: 'A raw JSON array to use as a data source.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'json'] },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'data.url',\n        weight: 10,\n        label: 'Data Source URL',\n        placeholder: 'Data Source URL',\n        tooltip: 'A URL that returns a JSON array to use as the data source.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'url'] },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        label: 'Lazy Load Data',\n        key: 'lazyLoad',\n        tooltip: 'When set, this will not fire off the request to the URL until this control is within focus. This can improve performance if you have many Select dropdowns on your form where the API\\'s will only fire when the control is activated.',\n        weight: 11,\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'resource',\n                        'url',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'datagrid',\n        input: true,\n        label: 'Request Headers',\n        key: 'data.headers',\n        // tslint:disable-next-line: max-line-length\n        tooltip: 'Set any headers that should be sent along with the request to the url. This is useful for authentication.',\n        weight: 11,\n        components: [\n            {\n                label: 'Key',\n                key: 'key',\n                input: true,\n                type: 'textfield',\n            },\n            {\n                label: 'Value',\n                key: 'value',\n                input: true,\n                type: 'textfield',\n            },\n        ],\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'url'] },\n        },\n    },\n    {\n        type: 'datagrid',\n        input: true,\n        label: 'Data Source Values',\n        key: 'data.values',\n        tooltip: 'Values to use as the data source. Labels are shown in the select field. Values are the corresponding values saved with the submission.',\n        weight: 10,\n        reorder: true,\n        defaultValue: [{ label: '', value: '' }],\n        components: [\n            {\n                label: 'Label',\n                key: 'label',\n                input: true,\n                type: 'textfield',\n            },\n            {\n                label: 'Value',\n                key: 'value',\n                input: true,\n                type: 'textfield',\n                allowCalculateOverride: true,\n                calculateValue: { _camelCase: [{ var: 'row.label' }] },\n            },\n        ],\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'values'] },\n        },\n    },\n    {\n        type: 'select',\n        input: true,\n        dataSrc: 'url',\n        data: {\n            url: '/form?type=resource&limit=4294967295&select=_id,title',\n        },\n        authenticate: true,\n        template: '<span>{{ item.title }}</span>',\n        valueProperty: '_id',\n        clearOnHide: false,\n        label: 'Resource',\n        key: 'data.resource',\n        lazyLoad: false,\n        weight: 10,\n        tooltip: 'The resource to be used with this field.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        label: 'Data Path',\n        key: 'selectValues',\n        weight: 12,\n        description: 'The object path to the iterable items.',\n        tooltip: 'The property within the source data, where iterable items reside. For example: results.items or results[0].items',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'url'] },\n        },\n    },\n    {\n        type: 'select',\n        input: true,\n        label: 'Value Property',\n        key: 'valueProperty',\n        skipMerge: true,\n        clearOnHide: false,\n        tooltip: 'The field to use as the value.',\n        weight: 11,\n        refreshOn: 'data.resource',\n        template: '<span>{{ item.label }}</span>',\n        valueProperty: 'key',\n        dataSrc: 'url',\n        lazyLoad: false,\n        onSetItems: function (component, form) {\n            var newItems = [];\n            formiojs_1.Utils.eachComponent(form.components, function (component, path) {\n                if (component.input) {\n                    newItems.push({\n                        label: component.label || component.key,\n                        key: \"data.\" + path,\n                    });\n                }\n            });\n            return newItems;\n        },\n        onChange: function (context) {\n            if (context && context.flags && context.flags.modified) {\n                var valueProp = context.instance.data.valueProperty;\n                var templateProp = valueProp ? valueProp : 'data';\n                var template = \"<span>{{ item.\" + templateProp + \" }}</span>\";\n                var searchField = valueProp ? valueProp + \"__regex\" : '';\n                context.instance.root.getComponent('template').setValue(template);\n                context.instance.root.getComponent('searchField').setValue(searchField);\n            }\n        },\n        data: {\n            url: '/form/{{ data.data.resource }}',\n        },\n        conditional: {\n            json: {\n                and: [\n                    { '===': [{ var: 'data.dataSrc' }, 'resource'] },\n                    { var: 'data.data.resource' },\n                ],\n            },\n        },\n    },\n    {\n        type: 'select',\n        input: true,\n        label: 'Storage Type',\n        key: 'dataType',\n        clearOnHide: true,\n        tooltip: 'The type to store the data. If you select something other than autotype, it will force it to that type.',\n        weight: 12,\n        template: '<span>{{ item.label }}</span>',\n        dataSrc: 'values',\n        data: {\n            values: [\n                { label: 'Autotype', value: 'auto' },\n                { label: 'String', value: 'string' },\n                { label: 'Number', value: 'number' },\n                { label: 'Boolean', value: 'boolean' },\n                { label: 'Object', value: 'object' },\n            ],\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        label: 'Value Property',\n        key: 'valueProperty',\n        skipMerge: true,\n        clearOnHide: false,\n        weight: 13,\n        description: \"The selected item's property to save.\",\n        tooltip: 'The property of each item in the data source to use as the select value. If not specified, the item itself will be used.',\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'json',\n                        'url',\n                        'custom',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        label: 'Select Fields',\n        key: 'selectFields',\n        tooltip: 'The properties on the resource to return as part of the options. Separate property names by commas. If left blank, all properties will be returned.',\n        placeholder: 'Comma separated list of fields to select.',\n        weight: 14,\n        conditional: {\n            json: {\n                and: [\n                    { '===': [{ var: 'data.dataSrc' }, 'resource'] },\n                    { '===': [{ var: 'data.valueProperty' }, ''] },\n                ],\n            },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        key: 'disableLimit',\n        label: 'Disable limiting response',\n        tooltip: 'When enabled the request will not include the limit and skip options in the query string',\n        weight: 15,\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'url'] },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'searchField',\n        label: 'Search Query Name',\n        weight: 16,\n        description: 'Name of URL query parameter',\n        tooltip: 'The name of the search querystring parameter used when sending a request to filter results with. The server at the URL must handle this query parameter.',\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'url',\n                        'resource',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'number',\n        input: true,\n        key: 'minSearch',\n        weight: 17,\n        label: 'Minimum Search Length',\n        tooltip: 'The minimum amount of characters they must type before a search is made.',\n        defaultValue: 0,\n        conditional: {\n            json: {\n                and: [\n                    { '===': [{ var: 'data.dataSrc' }, 'url'] },\n                    { '!=': [{ var: 'data.searchField' }, ''] },\n                ],\n            },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'filter',\n        label: 'Filter Query',\n        weight: 18,\n        description: 'The filter query for results.',\n        tooltip: 'Use this to provide additional filtering using query parameters.',\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'url',\n                        'resource',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'sort',\n        label: 'Sort Query',\n        weight: 18,\n        description: 'The sort query for results',\n        tooltip: 'Use this to provide additional sorting using query parameters',\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'url',\n                        'resource',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'number',\n        input: true,\n        key: 'limit',\n        label: 'Limit',\n        weight: 18,\n        defaultValue: 100,\n        description: 'Maximum number of items to view per page of results.',\n        tooltip: 'Use this to limit the number of items to request or view.',\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'url',\n                        'resource',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'textarea',\n        input: true,\n        key: 'data.custom',\n        label: 'Custom Values',\n        editor: 'ace',\n        rows: 10,\n        weight: 14,\n        placeholder: \"values = data['mykey'];\",\n        tooltip: 'Write custom code to return the value options. The form data object is available.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'custom'] },\n        },\n    },\n    {\n        type: 'textarea',\n        input: true,\n        key: 'template',\n        label: 'Item Template',\n        editor: 'ace',\n        as: 'html',\n        rows: 3,\n        weight: 18,\n        tooltip: 'The HTML template for the result data items.',\n        allowCalculateOverride: true,\n        calculateValue: function (context) {\n            if (!context.data.template) {\n                if (context.instance && context.instance._currentForm.options.editComponent) {\n                    return context.instance._currentForm.options.editComponent.template;\n                }\n            }\n            return context.data.template;\n        }\n    },\n    {\n        type: 'select',\n        input: true,\n        key: 'refreshOn',\n        label: 'Refresh Options On',\n        weight: 19,\n        tooltip: 'Refresh data when another field changes.',\n        dataSrc: 'custom',\n        valueProperty: 'value',\n        data: {\n            custom: function (context) {\n                var values = [];\n                values.push({ label: 'Any Change', value: 'data' });\n                context.utils.eachComponent(context.instance.options.editForm.components, function (component, path) {\n                    if (component.key !== context.data.key) {\n                        values.push({\n                            label: component.label || component.key,\n                            value: path,\n                        });\n                    }\n                });\n                return values;\n            },\n        },\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'url',\n                        'resource',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 20,\n        key: 'clearOnRefresh',\n        label: 'Clear Value On Refresh Options',\n        defaultValue: false,\n        tooltip: 'When the Refresh On field is changed, clear this components value.',\n        conditional: {\n            json: {\n                in: [\n                    { var: 'data.dataSrc' },\n                    [\n                        'url',\n                        'resource',\n                    ],\n                ],\n            },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 21,\n        key: 'searchEnabled',\n        label: 'Enable Static Search',\n        defaultValue: true,\n        tooltip: 'When checked, the select dropdown will allow for searching within the static list of items provided.',\n    },\n    {\n        label: 'Search Threshold',\n        mask: false,\n        tableView: true,\n        alwaysEnabled: false,\n        type: 'number',\n        input: true,\n        key: 'selectThreshold',\n        validate: {\n            min: 0,\n            customMessage: '',\n            json: '',\n            max: 1,\n        },\n        delimiter: false,\n        requireDecimal: false,\n        encrypted: false,\n        defaultValue: 0.3,\n        weight: 22,\n        tooltip: 'At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match, a threshold of 1.0 would match anything.',\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 23,\n        key: 'addResource',\n        label: 'Add Resource',\n        tooltip: 'Allows to create a new resource while entering a submission.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },\n        },\n    },\n    {\n        type: 'textfield',\n        label: 'Add Resource Label',\n        key: 'addResourceLabel',\n        tooltip: 'Set the text of the Add Resource button.',\n        placeholder: 'Add Resource',\n        weight: 24,\n        input: true,\n        conditional: {\n            json: {\n                and: [\n                    { '===': [{ var: 'data.dataSrc' }, 'resource'] },\n                    { '!!': { var: 'data.addResource' } },\n                ],\n            },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 25,\n        key: 'reference',\n        label: 'Save as reference',\n        tooltip: 'Using this option will save this field as a reference and link its value to the value of the origin record.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 26,\n        key: 'authenticate',\n        label: 'Formio Authenticate',\n        tooltip: 'Check this if you would like to use Formio Authentication with the request.',\n        conditional: {\n            json: { '===': [{ var: 'data.dataSrc' }, 'url'] },\n        },\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        weight: 27,\n        key: 'readOnlyValue',\n        label: 'Read Only Value',\n        tooltip: 'Check this if you would like to show just the value when in Read Only mode.',\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/select/editForm/Select.edit.data.js?");

/***/ }),

/***/ "./lib/components/select/editForm/Select.edit.display.js":
/*!***************************************************************!*\
  !*** ./lib/components/select/editForm/Select.edit.display.js ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/select/editForm/Select.edit.display.js?");

/***/ }),

/***/ "./lib/components/select/editForm/Select.edit.validation.js":
/*!******************************************************************!*\
  !*** ./lib/components/select/editForm/Select.edit.validation.js ***!
  \******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n    {\n        weight: 50,\n        type: 'checkbox',\n        label: 'Perform server validation',\n        tooltip: 'Check this if you would like for the server to perform a validation check to ensure the selected value is an available option. This requires a Search query to ensure a record is found.',\n        key: 'validate.select',\n        input: true,\n        conditional: {\n            json: { var: 'data.searchField' },\n        },\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/select/editForm/Select.edit.validation.js?");

/***/ }),

/***/ "./lib/components/selectboxes/SelectBoxes.form.js":
/*!********************************************************!*\
  !*** ./lib/components/selectboxes/SelectBoxes.form.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Radio_form_1 = __importDefault(__webpack_require__(/*! ../radio/Radio.form */ \"./lib/components/radio/Radio.form.js\"));\nvar SelectBoxes_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/SelectBoxes.edit.validation */ \"./lib/components/selectboxes/editForm/SelectBoxes.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return Radio_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'validation',\n                components: SelectBoxes_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/selectboxes/SelectBoxes.form.js?");

/***/ }),

/***/ "./lib/components/selectboxes/SelectBoxes.js":
/*!***************************************************!*\
  !*** ./lib/components/selectboxes/SelectBoxes.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar SelectBoxes_form_1 = __importDefault(__webpack_require__(/*! ./SelectBoxes.form */ \"./lib/components/selectboxes/SelectBoxes.form.js\"));\nvar SelectBoxes = formiojs_1.Components.components.selectboxes;\nvar SelectBoxesComponent = /** @class */ (function (_super) {\n    __extends(SelectBoxesComponent, _super);\n    function SelectBoxesComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    SelectBoxesComponent.editForm = SelectBoxes_form_1.default;\n    return SelectBoxesComponent;\n}(SelectBoxes));\nexports.default = SelectBoxesComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/selectboxes/SelectBoxes.js?");

/***/ }),

/***/ "./lib/components/selectboxes/editForm/SelectBoxes.edit.validation.js":
/*!****************************************************************************!*\
  !*** ./lib/components/selectboxes/editForm/SelectBoxes.edit.validation.js ***!
  \****************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        type: 'number',\n        input: true,\n        key: 'validate.minSelectedCount',\n        label: 'Minimum checked number',\n        tooltip: 'Minimum checkboxes required before form can be submitted.',\n        weight: 250,\n    },\n    {\n        type: 'number',\n        input: true,\n        key: 'validate.maxSelectedCount',\n        label: 'Maximum checked number',\n        tooltip: 'Maximum checkboxes possible before form can be submitted.',\n        weight: 250,\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'minSelectedCountMessage',\n        label: 'Minimum checked error message',\n        tooltip: 'Error message displayed if minimum number of items not checked.',\n        weight: 250,\n    },\n    {\n        type: 'textfield',\n        input: true,\n        key: 'maxSelectedCountMessage',\n        label: 'Maximum checked error message',\n        tooltip: 'Error message displayed if maximum number of items checked.',\n        weight: 250,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/selectboxes/editForm/SelectBoxes.edit.validation.js?");

/***/ }),

/***/ "./lib/components/signature/Signature.js":
/*!***********************************************!*\
  !*** ./lib/components/signature/Signature.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Signature = formiojs_1.Components.components.signature;\nvar SignatureComponent = /** @class */ (function (_super) {\n    __extends(SignatureComponent, _super);\n    function SignatureComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(SignatureComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return SignatureComponent;\n}(Signature));\nexports.default = SignatureComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/signature/Signature.js?");

/***/ }),

/***/ "./lib/components/sketchpad/Sketchpad.js":
/*!***********************************************!*\
  !*** ./lib/components/sketchpad/Sketchpad.js ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Sketchpad = /** @class */ (function () {\n    function Sketchpad() {\n    }\n    Object.defineProperty(Sketchpad, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Sketchpad;\n}());\nexports.default = Sketchpad;\n\n\n//# sourceURL=webpack://vpat/./lib/components/sketchpad/Sketchpad.js?");

/***/ }),

/***/ "./lib/components/survey/Survey.js":
/*!*****************************************!*\
  !*** ./lib/components/survey/Survey.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Survey = formiojs_1.Components.components.survey;\nvar SurveyComponent = /** @class */ (function (_super) {\n    __extends(SurveyComponent, _super);\n    function SurveyComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(SurveyComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return SurveyComponent;\n}(Survey));\nexports.default = SurveyComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/survey/Survey.js?");

/***/ }),

/***/ "./lib/components/table/Table.form.js":
/*!********************************************!*\
  !*** ./lib/components/table/Table.form.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar nestedComponentForm = formiojs_1.Components.components.nested.editForm;\nvar Table_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Table.edit.display */ \"./lib/components/table/editForm/Table.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return nestedComponentForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Table_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/table/Table.form.js?");

/***/ }),

/***/ "./lib/components/table/Table.js":
/*!***************************************!*\
  !*** ./lib/components/table/Table.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Table_form_1 = __importDefault(__webpack_require__(/*! ./Table.form */ \"./lib/components/table/Table.form.js\"));\nvar Table = formiojs_1.Components.components.table;\nvar TableComponent = /** @class */ (function (_super) {\n    __extends(TableComponent, _super);\n    function TableComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    TableComponent.editForm = Table_form_1.default;\n    return TableComponent;\n}(Table));\nexports.default = TableComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/table/Table.js?");

/***/ }),

/***/ "./lib/components/table/editForm/Table.edit.display.js":
/*!*************************************************************!*\
  !*** ./lib/components/table/editForm/Table.edit.display.js ***!
  \*************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'description',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        key: 'tooltip',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'disabled',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        type: 'number',\n        label: 'Number of Rows',\n        key: 'numRows',\n        input: true,\n        weight: 1,\n        placeholder: 'Number of Rows',\n        tooltip: 'Enter the number or rows that should be displayed by this table.',\n    },\n    {\n        type: 'number',\n        label: 'Number of Columns',\n        key: 'numCols',\n        input: true,\n        weight: 2,\n        placeholder: 'Number of Columns',\n        tooltip: 'Enter the number or columns that should be displayed by this table.',\n    },\n    {\n        type: 'checkbox',\n        label: 'Bordered',\n        key: 'bordered',\n        input: true,\n        tooltip: 'This will border the table if checked.',\n        weight: 702,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/table/editForm/Table.edit.display.js?");

/***/ }),

/***/ "./lib/components/tabs/Tabs.js":
/*!*************************************!*\
  !*** ./lib/components/tabs/Tabs.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Tabs = formiojs_1.Components.components.tabs;\nvar TabsComponent = /** @class */ (function (_super) {\n    __extends(TabsComponent, _super);\n    function TabsComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(TabsComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return TabsComponent;\n}(Tabs));\nexports.default = TabsComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/tabs/Tabs.js?");

/***/ }),

/***/ "./lib/components/tagpad/Tagpad.js":
/*!*****************************************!*\
  !*** ./lib/components/tagpad/Tagpad.js ***!
  \*****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Tagpad = /** @class */ (function () {\n    function Tagpad() {\n    }\n    Object.defineProperty(Tagpad, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Tagpad;\n}());\nexports.default = Tagpad;\n\n\n//# sourceURL=webpack://vpat/./lib/components/tagpad/Tagpad.js?");

/***/ }),

/***/ "./lib/components/tags/Tags.js":
/*!*************************************!*\
  !*** ./lib/components/tags/Tags.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Tags = formiojs_1.Components.components.tags;\nvar TagsComponent = /** @class */ (function (_super) {\n    __extends(TagsComponent, _super);\n    function TagsComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(TagsComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return TagsComponent;\n}(Tags));\nexports.default = TagsComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/tags/Tags.js?");

/***/ }),

/***/ "./lib/components/textarea/TextArea.form.js":
/*!**************************************************!*\
  !*** ./lib/components/textarea/TextArea.form.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar TextArea_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/TextArea.edit.display */ \"./lib/components/textarea/editForm/TextArea.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: TextArea_edit_display_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/textarea/TextArea.form.js?");

/***/ }),

/***/ "./lib/components/textarea/TextArea.js":
/*!*********************************************!*\
  !*** ./lib/components/textarea/TextArea.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar TextArea_form_1 = __importDefault(__webpack_require__(/*! ./TextArea.form */ \"./lib/components/textarea/TextArea.form.js\"));\nvar TextArea = formiojs_1.Components.components.textarea;\nvar TextAreaComponent = /** @class */ (function (_super) {\n    __extends(TextAreaComponent, _super);\n    function TextAreaComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    TextAreaComponent.editForm = TextArea_form_1.default;\n    return TextAreaComponent;\n}(TextArea));\nexports.default = TextAreaComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/textarea/TextArea.js?");

/***/ }),

/***/ "./lib/components/textarea/editForm/TextArea.edit.display.js":
/*!*******************************************************************!*\
  !*** ./lib/components/textarea/editForm/TextArea.edit.display.js ***!
  \*******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        type: 'number',\n        input: true,\n        key: 'rows',\n        label: 'Rows',\n        weight: 210,\n        tooltip: 'This allows control over how many rows are visible in the text area.',\n        placeholder: 'Enter the amount of rows',\n    },\n    {\n        type: 'checkbox',\n        input: true,\n        key: 'showCharCount',\n        defaultValue: false,\n        label: 'Show Character count'\n    }\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/textarea/editForm/TextArea.edit.display.js?");

/***/ }),

/***/ "./lib/components/textfield/TextField.form.js":
/*!****************************************************!*\
  !*** ./lib/components/textfield/TextField.form.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar TextField_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/TextField.edit.data */ \"./lib/components/textfield/editForm/TextField.edit.data.js\"));\nvar TextField_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/TextField.edit.display */ \"./lib/components/textfield/editForm/TextField.edit.display.js\"));\nvar TextField_edit_validation_1 = __importDefault(__webpack_require__(/*! ./editForm/TextField.edit.validation */ \"./lib/components/textfield/editForm/TextField.edit.validation.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: TextField_edit_display_1.default,\n            },\n            {\n                key: 'data',\n                components: TextField_edit_data_1.default,\n            },\n            {\n                key: 'validation',\n                components: TextField_edit_validation_1.default,\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/textfield/TextField.form.js?");

/***/ }),

/***/ "./lib/components/textfield/TextField.js":
/*!***********************************************!*\
  !*** ./lib/components/textfield/TextField.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Component_1 = __importDefault(__webpack_require__(/*! ../component/Component */ \"./lib/components/component/Component.js\"));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ./TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nvar TextField = formiojs_1.Components.components.textfield;\nvar TextFieldComponent = /** @class */ (function (_super) {\n    __extends(TextFieldComponent, _super);\n    function TextFieldComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    TextFieldComponent.prototype.addInputError = function (message, dirty) {\n        Component_1.default.prototype.addInputError.call(this, message, dirty);\n    };\n    TextFieldComponent.editForm = TextField_form_1.default;\n    return TextFieldComponent;\n}(TextField));\nexports.default = TextFieldComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/textfield/TextField.js?");

/***/ }),

/***/ "./lib/components/textfield/editForm/TextField.edit.data.js":
/*!******************************************************************!*\
  !*** ./lib/components/textfield/editForm/TextField.edit.data.js ***!
  \******************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        key: 'redrawOn',\n        ignore: true,\n    },\n    {\n        key: 'clearOnHide',\n        ignore: true,\n    },\n    {\n        type: 'select',\n        label: 'Input Format',\n        key: 'inputFormat',\n        weight: 105,\n        placeholder: 'Input Format',\n        tooltip: 'Force the output of this field to be sanitized in a specific format.',\n        template: '<span>{{ item.label }}</span>',\n        data: {\n            values: [\n                {\n                    value: 'plain',\n                    label: 'Plain',\n                },\n                {\n                    value: 'html',\n                    label: 'HTML',\n                },\n                {\n                    value: 'raw',\n                    label: 'Raw (Insecure)',\n                },\n            ],\n        },\n        defaultValue: 'plain',\n        input: true,\n    },\n    {\n        weight: 200,\n        type: 'radio',\n        label: 'Text Case',\n        key: 'case',\n        tooltip: 'When data is entered, you can change the case of the value.',\n        input: true,\n        values: [\n            {\n                value: 'mixed',\n                label: 'Mixed (Allow upper and lower case)',\n            },\n            {\n                value: 'uppercase',\n                label: 'Uppercase',\n            },\n            {\n                value: 'lowercase',\n                label: 'Lowercase',\n            },\n        ],\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/textfield/editForm/TextField.edit.data.js?");

/***/ }),

/***/ "./lib/components/textfield/editForm/TextField.edit.display.js":
/*!*********************************************************************!*\
  !*** ./lib/components/textfield/editForm/TextField.edit.display.js ***!
  \*********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n    {\n        weight: 1350,\n        type: 'checkbox',\n        input: true,\n        key: 'spellcheck',\n        defaultValue: true,\n        label: 'Allow Spellcheck',\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/textfield/editForm/TextField.edit.display.js?");

/***/ }),

/***/ "./lib/components/textfield/editForm/TextField.edit.validation.js":
/*!************************************************************************!*\
  !*** ./lib/components/textfield/editForm/TextField.edit.validation.js ***!
  \************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'validateOn',\n        ignore: true,\n    },\n    {\n        weight: 110,\n        key: 'validate.minLength',\n        label: 'Minimum Length',\n        placeholder: 'Minimum Length',\n        type: 'number',\n        tooltip: 'The minimum length requirement this field must meet.',\n        input: true,\n    },\n    {\n        weight: 120,\n        key: 'validate.maxLength',\n        label: 'Maximum Length',\n        placeholder: 'Maximum Length',\n        type: 'number',\n        tooltip: 'The maximum length requirement this field must meet.',\n        input: true,\n    },\n    {\n        weight: 125,\n        key: 'validate.minWords',\n        label: 'Minimum Word Length',\n        placeholder: 'Minimum Word Length',\n        type: 'number',\n        tooltip: 'The minimum amount of words that can be added to this field.',\n        input: true,\n    },\n    {\n        weight: 126,\n        key: 'validate.maxWords',\n        label: 'Maximum Word Length',\n        placeholder: 'Maximum Word Length',\n        type: 'number',\n        tooltip: 'The maximum amount of words that can be added to this field.',\n        input: true,\n    },\n    {\n        weight: 130,\n        key: 'validate.pattern',\n        label: 'Regular Expression Pattern',\n        placeholder: 'Regular Expression Pattern',\n        type: 'textfield',\n        tooltip: 'The regular expression pattern test that the field value must pass before the form can be submitted.',\n        input: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/textfield/editForm/TextField.edit.validation.js?");

/***/ }),

/***/ "./lib/components/time/Time.form.js":
/*!******************************************!*\
  !*** ./lib/components/time/Time.form.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar baseEditForm = formiojs_1.Components.components.component.editForm;\nvar Time_edit_data_1 = __importDefault(__webpack_require__(/*! ./editForm/Time.edit.data */ \"./lib/components/time/editForm/Time.edit.data.js\"));\nvar Time_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Time.edit.display */ \"./lib/components/time/editForm/Time.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return baseEditForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'data',\n                components: Time_edit_data_1.default,\n            },\n            {\n                key: 'display',\n                components: Time_edit_display_1.default,\n            },\n            {\n                key: 'validation',\n                components: [\n                    {\n                        key: 'validateOn',\n                        ignore: true,\n                    },\n                ],\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/time/Time.form.js?");

/***/ }),

/***/ "./lib/components/time/Time.js":
/*!*************************************!*\
  !*** ./lib/components/time/Time.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Time_form_1 = __importDefault(__webpack_require__(/*! ./Time.form */ \"./lib/components/time/Time.form.js\"));\nvar Time = formiojs_1.Components.components.time;\nvar TimeComponent = /** @class */ (function (_super) {\n    __extends(TimeComponent, _super);\n    function TimeComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    TimeComponent.prototype.setValueAt = function (index, value) {\n        this.setRawValue(this.getValueAsString(value), index);\n        this.refs.input[index].value = this.getRawValue(index);\n    };\n    TimeComponent.editForm = Time_form_1.default;\n    return TimeComponent;\n}(Time));\nexports.default = TimeComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/time/Time.js?");

/***/ }),

/***/ "./lib/components/time/editForm/Time.edit.data.js":
/*!********************************************************!*\
  !*** ./lib/components/time/editForm/Time.edit.data.js ***!
  \********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'multiple',\n        ignore: true,\n    },\n    {\n        key: 'redrawOn',\n        ignore: true,\n    },\n    {\n        key: 'clearOnHide',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/time/editForm/Time.edit.data.js?");

/***/ }),

/***/ "./lib/components/time/editForm/Time.edit.display.js":
/*!***********************************************************!*\
  !*** ./lib/components/time/editForm/Time.edit.display.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [\n    {\n        key: 'labelPosition',\n        ignore: true,\n    },\n    {\n        key: 'placeholder',\n        ignore: true,\n    },\n    {\n        key: 'tabindex',\n        ignore: true,\n    },\n    {\n        key: 'hidden',\n        ignore: true,\n    },\n    {\n        key: 'hideLabel',\n        ignore: true,\n    },\n    {\n        key: 'autofocus',\n        ignore: true,\n    },\n];\n\n\n//# sourceURL=webpack://vpat/./lib/components/time/editForm/Time.edit.display.js?");

/***/ }),

/***/ "./lib/components/tooltip/Tooltip.js":
/*!*******************************************!*\
  !*** ./lib/components/tooltip/Tooltip.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TOOLTIP_WRAPPER_CLASS = 'tooltip__wrapper';\nvar TOOLTIP_TRIGGER_CLASS = 'tooltip__trigger';\nvar TOOLTIP_BODY_CLASS = 'tooltip__body';\nvar SET_CLASS = 'is-set';\nvar ADJUST_WHITESPACE_CLASS = 'tooltip__body--whitespace';\nvar VERTICAL_SPACER = 5;\nvar SPACER = 2;\nvar ESC_KEYCODE = 27;\nvar Tooltip = /** @class */ (function () {\n    function Tooltip(triggerElement, config) {\n        this.isResized = false;\n        this.tooltipTrigger = triggerElement;\n        this.config = config;\n        this.init();\n    }\n    Tooltip.prototype.init = function () {\n        this.createTooltip();\n        this.showTooltipListener = this.showTooltip.bind(this);\n        this.hideTooltipListener = this.hideTooltip.bind(this);\n        if (this.tooltipContent) {\n            this.addListeners(this.tooltipTrigger, 'mouseenter focus', this.showTooltipListener);\n            this.addListeners(this.tooltipTrigger, 'mouseleave blur', this.hideTooltipListener);\n            this.addListeners(document, 'keydown', this.hideTooltipListener);\n        }\n    };\n    Tooltip.prototype.dispose = function () {\n        if (this.tooltipContent) {\n            this.removeListeners(this.tooltipTrigger, 'mouseenter focus', this.showTooltipListener);\n            this.removeListeners(this.tooltipTrigger, 'mouseleave blur', this.hideTooltipListener);\n            this.removeListeners(document, 'keydown', this.hideTooltipListener);\n        }\n    };\n    Tooltip.prototype.addListeners = function (element, eventNames, listener) {\n        var events = eventNames.split(' ');\n        events.forEach(function (item) {\n            element.addEventListener(item, listener);\n        });\n    };\n    ;\n    Tooltip.prototype.removeListeners = function (element, eventNames, listener) {\n        var events = eventNames.split(' ');\n        events.forEach(function (item) {\n            element.removeEventListener(item, listener);\n        });\n    };\n    Tooltip.prototype.createTooltip = function () {\n        var tooltipLabelId = \"tooltip-\" + this.config.id;\n        this.tooltipContent = this.config.title;\n        this.wrapper = document.createElement('span');\n        this.tooltipBody = document.createElement('span');\n        this.position = this.config.position ? this.config.position : 'right';\n        this.tooltipTrigger.setAttribute('aria-labelledby', tooltipLabelId);\n        this.tooltipTrigger.setAttribute('tabindex', '0');\n        this.tooltipTrigger.classList.add(TOOLTIP_TRIGGER_CLASS);\n        this.tooltipTrigger.parentNode.insertBefore(this.wrapper, this.tooltipTrigger);\n        this.wrapper.classList.add(TOOLTIP_WRAPPER_CLASS);\n        this.wrapper.appendChild(this.tooltipTrigger);\n        this.wrapper.appendChild(this.tooltipBody);\n        this.tooltipBody.classList.add(TOOLTIP_BODY_CLASS);\n        this.tooltipBody.setAttribute('id', tooltipLabelId);\n        this.tooltipBody.setAttribute('role', 'tooltip');\n        this.tooltipBody.setAttribute('aria-hidden', 'true');\n        this.tooltipBody.innerHTML = this.tooltipContent;\n    };\n    Tooltip.prototype.isElementInViewportVertical = function (element) {\n        var rect = element.getBoundingClientRect();\n        var clientHeight = document.documentElement.clientHeight;\n        return (rect.top >= 0 &&\n            rect.bottom <= clientHeight);\n    };\n    Tooltip.prototype.isElementInViewportHorizontal = function (element) {\n        var rect = element.getBoundingClientRect();\n        var clientWidth = document.documentElement.clientWidth;\n        return (rect.left >= 0 &&\n            rect.right <= clientWidth);\n    };\n    Tooltip.prototype.adjustHorizontalPosition = function (element) {\n        var rect = element.getBoundingClientRect();\n        var clientWidth = document.documentElement.clientWidth;\n        var offset = 0;\n        if (rect.left < 0 && rect.right > clientWidth) {\n            return offset;\n        }\n        if (rect.left < 0) {\n            offset = rect.left - SPACER;\n        }\n        if (rect.right > clientWidth) {\n            offset = rect.right - clientWidth + SPACER;\n        }\n        return offset;\n    };\n    Tooltip.prototype.positionTooltip = function () {\n        var _this = this;\n        this.tooltipBody.setAttribute('aria-hidden', 'false');\n        this.tooltipBody.classList.add(SET_CLASS);\n        var tooltipWidth = this.tooltipTrigger.offsetWidth;\n        var tooltipHeight = this.tooltipTrigger.offsetHeight;\n        var leftOffset = this.tooltipTrigger.offsetLeft;\n        var adjustHorizontalCenter = tooltipWidth / 2 + leftOffset;\n        var adjustToEdgeX = tooltipWidth + SPACER;\n        var adjustToEdgeY = tooltipHeight + VERTICAL_SPACER + SPACER;\n        var setPositionClass = function (setPos) {\n            _this.isResized = false;\n            _this.tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + \"--top\");\n            _this.tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + \"--bottom\");\n            _this.tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + \"--right\");\n            _this.tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + \"--left\");\n            _this.tooltipBody.classList.remove(TOOLTIP_BODY_CLASS + \"--whitespace\");\n            _this.tooltipBody.classList.add(TOOLTIP_BODY_CLASS + \"--\" + setPos);\n        };\n        var adjustTooltipBody = function (element, updateMargins) {\n            if (!_this.isElementInViewportHorizontal(element)) {\n                element.classList.add(ADJUST_WHITESPACE_CLASS);\n                _this.isResized = true;\n                if (updateMargins) {\n                    updateMargins();\n                }\n            }\n        };\n        var positionTop = function (element) {\n            setPositionClass('top');\n            var setMargins = function () {\n                var offset = _this.isResized ? _this.adjustHorizontalPosition(element) : 0;\n                element.style.marginLeft = adjustHorizontalCenter - offset + \"px\";\n                element.style.marginBottom = adjustToEdgeY + \"px\";\n                element.style.bottom = 0;\n            };\n            setMargins();\n            adjustTooltipBody(element, setMargins);\n        };\n        var positionBottom = function (element) {\n            setPositionClass('bottom');\n            var setMargins = function () {\n                var offset = _this.isResized ? _this.adjustHorizontalPosition(element) : 0;\n                element.style.marginLeft = adjustHorizontalCenter - offset + \"px\";\n                element.style.marginTop = adjustToEdgeY + \"px\";\n                element.style.bottom = '';\n            };\n            setMargins();\n            adjustTooltipBody(element, setMargins);\n        };\n        var positionRight = function (element) {\n            setPositionClass('right');\n            var setMargins = function () {\n                element.style.marginBottom = '0';\n                element.style.marginLeft = adjustToEdgeX + leftOffset + SPACER + \"px\";\n                element.style.bottom = (adjustToEdgeY - _this.tooltipBody.offsetHeight) / 2 + \"px\";\n            };\n            setMargins();\n            adjustTooltipBody(element, setMargins);\n        };\n        var positionLeft = function (element) {\n            setPositionClass('left');\n            var setMargins = function () {\n                element.style.marginBottom = '0';\n                element.style.marginLeft = leftOffset - _this.tooltipBody.offsetWidth - SPACER + \"px\";\n                element.style.bottom = (adjustToEdgeY - _this.tooltipBody.offsetHeight) / 2 + \"px\";\n            };\n            setMargins();\n            adjustTooltipBody(element, setMargins);\n        };\n        var changePositionAxis = function (element) {\n            positionTop(element);\n            if (!_this.isElementInViewportVertical(element)) {\n                positionBottom(element);\n            }\n        };\n        switch (this.position) {\n            case 'top':\n                positionTop(this.tooltipBody);\n                if (!this.isElementInViewportVertical(this.tooltipBody)) {\n                    positionBottom(this.tooltipBody);\n                }\n                break;\n            case 'bottom':\n                positionBottom(this.tooltipBody);\n                if (!this.isElementInViewportVertical(this.tooltipBody)) {\n                    positionTop(this.tooltipBody);\n                }\n                break;\n            case 'right':\n                positionRight(this.tooltipBody);\n                if (!this.isElementInViewportHorizontal(this.tooltipBody)) {\n                    positionLeft(this.tooltipBody);\n                    if (!this.isElementInViewportHorizontal(this.tooltipBody)) {\n                        changePositionAxis(this.tooltipBody);\n                    }\n                }\n                break;\n            case 'left':\n                positionLeft(this.tooltipBody);\n                if (!this.isElementInViewportHorizontal(this.tooltipBody)) {\n                    positionRight(this.tooltipBody);\n                    if (!this.isElementInViewportHorizontal(this.tooltipBody)) {\n                        changePositionAxis(this.tooltipBody);\n                    }\n                }\n                break;\n        }\n    };\n    Tooltip.prototype.showTooltip = function () {\n        this.positionTooltip();\n    };\n    Tooltip.prototype.hideTooltip = function (event) {\n        if (!(event.type === 'keydown' && event.keyCode !== ESC_KEYCODE)) {\n            this.tooltipBody.classList.remove(SET_CLASS);\n            this.tooltipBody.setAttribute('aria-hidden', 'true');\n        }\n    };\n    return Tooltip;\n}());\nexports.default = Tooltip;\n\n\n//# sourceURL=webpack://vpat/./lib/components/tooltip/Tooltip.js?");

/***/ }),

/***/ "./lib/components/tree/Tree.js":
/*!*************************************!*\
  !*** ./lib/components/tree/Tree.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Tree = formiojs_1.Components.components.tree;\nvar TreeComponent = /** @class */ (function (_super) {\n    __extends(TreeComponent, _super);\n    function TreeComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(TreeComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return TreeComponent;\n}(Tree));\nexports.default = TreeComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/tree/Tree.js?");

/***/ }),

/***/ "./lib/components/unknown/Unknown.js":
/*!*******************************************!*\
  !*** ./lib/components/unknown/Unknown.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Unknown = formiojs_1.Components.components.unknown;\nvar UnknownComponent = /** @class */ (function (_super) {\n    __extends(UnknownComponent, _super);\n    function UnknownComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Object.defineProperty(UnknownComponent, \"builderInfo\", {\n        get: function () {\n            return {};\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return UnknownComponent;\n}(Unknown));\nexports.default = UnknownComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/unknown/Unknown.js?");

/***/ }),

/***/ "./lib/components/url/Url.form.js":
/*!****************************************!*\
  !*** ./lib/components/url/Url.form.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TextField_form_1 = __importDefault(__webpack_require__(/*! ../textfield/TextField.form */ \"./lib/components/textfield/TextField.form.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return TextField_form_1.default.apply(void 0, __spreadArrays([[\n            {\n                key: 'validation',\n                components: [\n                    {\n                        key: 'validate.minWords',\n                        ignore: true,\n                    },\n                    {\n                        key: 'validate.maxWords',\n                        ignore: true,\n                    },\n                ],\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/url/Url.form.js?");

/***/ }),

/***/ "./lib/components/url/Url.js":
/*!***********************************!*\
  !*** ./lib/components/url/Url.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Url_form_1 = __importDefault(__webpack_require__(/*! ./Url.form */ \"./lib/components/url/Url.form.js\"));\nvar Url = formiojs_1.Components.components.url;\nvar UrlComponent = /** @class */ (function (_super) {\n    __extends(UrlComponent, _super);\n    function UrlComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    UrlComponent.editForm = Url_form_1.default;\n    return UrlComponent;\n}(Url));\nexports.default = UrlComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/url/Url.js?");

/***/ }),

/***/ "./lib/components/well/Well.form.js":
/*!******************************************!*\
  !*** ./lib/components/well/Well.form.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:22-26 */
/*! CommonJS bailout: this is used directly at 9:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar nestedComponentForm = formiojs_1.Components.components.well.editForm;\nvar Well_edit_display_1 = __importDefault(__webpack_require__(/*! ./editForm/Well.edit.display */ \"./lib/components/well/editForm/Well.edit.display.js\"));\nfunction default_1() {\n    var extend = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        extend[_i] = arguments[_i];\n    }\n    return nestedComponentForm.apply(void 0, __spreadArrays([[\n            {\n                key: 'display',\n                components: Well_edit_display_1.default\n            },\n        ]], extend));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack://vpat/./lib/components/well/Well.form.js?");

/***/ }),

/***/ "./lib/components/well/Well.js":
/*!*************************************!*\
  !*** ./lib/components/well/Well.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Well_form_1 = __importDefault(__webpack_require__(/*! ./Well.form */ \"./lib/components/well/Well.form.js\"));\nvar Well = formiojs_1.Components.components.well;\nvar WellComponent = /** @class */ (function (_super) {\n    __extends(WellComponent, _super);\n    function WellComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    WellComponent.editForm = Well_form_1.default;\n    return WellComponent;\n}(Well));\nexports.default = WellComponent;\n\n\n//# sourceURL=webpack://vpat/./lib/components/well/Well.js?");

/***/ }),

/***/ "./lib/components/well/editForm/Well.edit.display.js":
/*!***********************************************************!*\
  !*** ./lib/components/well/editForm/Well.edit.display.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = [];\n\n\n//# sourceURL=webpack://vpat/./lib/components/well/editForm/Well.edit.display.js?");

/***/ }),

/***/ "./lib/displays/index.js":
/*!*******************************!*\
  !*** ./lib/displays/index.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Webform_1 = __importDefault(__webpack_require__(/*! ../Webform */ \"./lib/Webform.js\"));\nvar Wizard_1 = __importDefault(__webpack_require__(/*! ../Wizard */ \"./lib/Wizard.js\"));\nexports.default = {\n    webform: Webform_1.default,\n    wizard: Wizard_1.default,\n};\n\n\n//# sourceURL=webpack://vpat/./lib/displays/index.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar builders_1 = __importDefault(__webpack_require__(/*! ./builders */ \"./lib/builders/index.js\"));\nvar components_1 = __importDefault(__webpack_require__(/*! ./components */ \"./lib/components/index.js\"));\nvar displays_1 = __importDefault(__webpack_require__(/*! ./displays */ \"./lib/displays/index.js\"));\nvar plugins_1 = __importDefault(__webpack_require__(/*! ./plugins */ \"./lib/plugins/index.js\"));\nvar providers_1 = __importDefault(__webpack_require__(/*! ./providers */ \"./lib/providers/index.js\"));\nvar templates_1 = __importDefault(__webpack_require__(/*! ./templates */ \"./lib/templates/index.js\"));\nvar widgets_1 = __importDefault(__webpack_require__(/*! ./widgets */ \"./lib/widgets/index.js\"));\nexports.default = {\n    builders: builders_1.default,\n    components: components_1.default,\n    displays: displays_1.default,\n    plugins: plugins_1.default,\n    providers: providers_1.default,\n    templates: templates_1.default,\n    widgets: widgets_1.default,\n};\n\n\n//# sourceURL=webpack://vpat/./lib/index.js?");

/***/ }),

/***/ "./lib/plugins/index.js":
/*!******************************!*\
  !*** ./lib/plugins/index.js ***!
  \******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {};\n\n\n//# sourceURL=webpack://vpat/./lib/plugins/index.js?");

/***/ }),

/***/ "./lib/providers/auth/index.js":
/*!*************************************!*\
  !*** ./lib/providers/auth/index.js ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {};\n\n\n//# sourceURL=webpack://vpat/./lib/providers/auth/index.js?");

/***/ }),

/***/ "./lib/providers/index.js":
/*!********************************!*\
  !*** ./lib/providers/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar auth_1 = __importDefault(__webpack_require__(/*! ./auth */ \"./lib/providers/auth/index.js\"));\nvar storage_1 = __importDefault(__webpack_require__(/*! ./storage */ \"./lib/providers/storage/index.js\"));\nexports.default = {\n    auth: auth_1.default,\n    storage: storage_1.default,\n};\n\n\n//# sourceURL=webpack://vpat/./lib/providers/index.js?");

/***/ }),

/***/ "./lib/providers/storage/index.js":
/*!****************************************!*\
  !*** ./lib/providers/storage/index.js ***!
  \****************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {};\n\n\n//# sourceURL=webpack://vpat/./lib/providers/storage/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {};\n\n\n//# sourceURL=webpack://vpat/./lib/templates/index.js?");

/***/ }),

/***/ "./lib/util/index.js":
/*!***************************!*\
  !*** ./lib/util/index.js ***!
  \***************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    override: function (classObj, extenders) {\n        for (var key in extenders) {\n            if (extenders.hasOwnProperty(key)) {\n                var extender = extenders[key];\n                if (typeof extender === 'function') {\n                    classObj.prototype[key] = extender;\n                }\n                else {\n                    var prop = Object.getOwnPropertyDescriptor(classObj.prototype, key);\n                    for (var attr in extender) {\n                        if (extender.hasOwnProperty(attr)) {\n                            prop[attr] = extender[attr](prop[attr]);\n                        }\n                    }\n                    Object.defineProperty(classObj.prototype, key, prop);\n                }\n            }\n        }\n    }\n};\n\n\n//# sourceURL=webpack://vpat/./lib/util/index.js?");

/***/ }),

/***/ "./lib/widgets/CalendarWidget.js":
/*!***************************************!*\
  !*** ./lib/widgets/CalendarWidget.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar formiojs_1 = __webpack_require__(/*! formiojs */ \"formiojs\");\nvar Calendar = formiojs_1.Widgets.calendar;\nvar util_1 = __importDefault(__webpack_require__(/*! ../util */ \"./lib/util/index.js\"));\nvar isIE = 'ActiveXObject' in window;\nutil_1.default.override(Calendar, {\n    flatpickrType: {\n        get: function (_super) {\n            return function getflatpickrType() {\n                return 'flatpickr-vpat';\n            };\n        }\n    },\n    attach: {\n        value: function (_super) {\n            return function attach(input) {\n                var _this = this;\n                var widgetTitle = !this.settings.noCalendar\n                    ? this.settings.enableTime\n                        ? 'Date/Time widget'\n                        : 'Calendar widget'\n                    : 'Time widget';\n                var handleLiveRegion = function (element, text) {\n                    element.innerHTML = text;\n                };\n                var addMessageToLabel = function (message, labelId) {\n                    var hiddenMessage = _this.ce('span', { class: 'usa-sr-only', id: \"msg-\" + _this.id });\n                    hiddenMessage.innerHTML = message;\n                    var label = document.getElementById(labelId);\n                    if (label.firstChild) {\n                        label.insertBefore(hiddenMessage, label.firstChild);\n                    }\n                };\n                var removeMessageFromLabel = function (labelId) {\n                    var elem = document.getElementById(labelId);\n                    var message = document.getElementById(\"msg-\" + _this.id);\n                    if (elem && message) {\n                        elem.removeChild(message);\n                    }\n                };\n                var liveRegion = document.getElementById(this.component.id + \"-liveRegion\");\n                this.settings.static = true;\n                this.settings.onDayCreate = function (dObj, dStr, fp, dayElem) {\n                    var label = dayElem.getAttribute('aria-label');\n                    var elementText = dayElem.innerHTML;\n                    dayElem.innerHTML = \"<span aria-hidden=\\\"true\\\">\" + elementText + \"</span><span class=\\\"usa-sr-only\\\">\" + label + \"</span>\";\n                };\n                var labelId = \"l-\" + this.component.id + \"-\" + this.component.key;\n                var labelledbyIds = input.getAttribute('aria-labelledby');\n                this.options.hooks = this.options.hooks || {};\n                this.options.hooks.onCalendarOpen = function () {\n                    addMessageToLabel(widgetTitle + \" has been opened.\", labelId);\n                    if (isIE) {\n                        handleLiveRegion(liveRegion, widgetTitle + \" has been opened\");\n                    }\n                };\n                this.options.hooks.onCalendarClose = function () {\n                    handleLiveRegion(liveRegion, widgetTitle + \" has been closed\");\n                    setTimeout(function () {\n                        handleLiveRegion(liveRegion, '');\n                    }, 50);\n                    removeMessageFromLabel(labelId);\n                };\n                var superAttach = _super.call(this, input);\n                return superAttach.then(function () {\n                    if (_this._input) {\n                        var calendar_1 = _this.calendar;\n                        _this.addEventListener(calendar_1.altInput, 'blur', removeMessageFromLabel.bind(_this, labelId));\n                        calendar_1.calendarContainer.setAttribute('role', 'application');\n                        calendar_1.altInput.id = _this._input.id;\n                        calendar_1.altInput.setAttribute('aria-labelledby', labelledbyIds);\n                        _this._input.removeAttribute('id');\n                        _this._input.removeAttribute('aria-labelledby');\n                        var isRequired = _this._input.getAttribute('aria-required');\n                        if (isRequired) {\n                            calendar_1.altInput.setAttribute('aria-required', isRequired);\n                        }\n                        var monthToStr_1 = function (monthNumber, locale) { return locale.months.longhand[monthNumber]; };\n                        var switchMonth = function (e) {\n                            var prevMonthNav = calendar_1.prevMonthNav;\n                            var nextMonthNav = calendar_1.nextMonthNav;\n                            var isPrevMonth = prevMonthNav.contains(e.target);\n                            var isNextMonth = nextMonthNav.contains(e.target);\n                            var changeMonth = function (value) {\n                                calendar_1.changeMonth.call(_this, value);\n                                handleLiveRegion(liveRegion, \"Switched to \" + monthToStr_1(calendar_1.currentMonth, calendar_1.l10n) + \", \" + calendar_1.currentYear);\n                            };\n                            if (e.type === 'keydown') {\n                                if (e.keyCode === 32 || e.keyCode === 13) {\n                                    if (isPrevMonth || isNextMonth) {\n                                        e.preventDefault();\n                                        changeMonth(isPrevMonth ? -1 : 1);\n                                    }\n                                }\n                            }\n                            if (e.type === 'click') {\n                                if (isPrevMonth || isNextMonth) {\n                                    e.preventDefault();\n                                    handleLiveRegion(liveRegion, \"Switched to \" + monthToStr_1(calendar_1.currentMonth, calendar_1.l10n) + \", \" + calendar_1.currentYear);\n                                }\n                            }\n                        };\n                        var monthNav = calendar_1.monthNav;\n                        _this.addEventListener(monthNav, 'keydown', switchMonth);\n                        _this.addEventListener(monthNav, 'click', switchMonth);\n                        var setTabindexAndLabel = function (element, label) {\n                            if (element) {\n                                element.setAttribute('tabindex', '0');\n                                element.setAttribute('aria-label', label);\n                            }\n                        };\n                        setTabindexAndLabel(calendar_1.prevMonthNav, 'Previous month button. Click to select previous month');\n                        setTabindexAndLabel(calendar_1.nextMonthNav, 'Next month button. Click to select next month');\n                        setTabindexAndLabel(calendar_1.monthsDropdownContainer, 'Months dropdown');\n                        setTabindexAndLabel(calendar_1.currentYearElement, 'Year spin button');\n                        setTabindexAndLabel(calendar_1.daysContainer, 'Calendar grid. Use arrow keys to navigate dates.');\n                    }\n                });\n            };\n        }\n    }\n});\nexports.default = Calendar;\n\n\n//# sourceURL=webpack://vpat/./lib/widgets/CalendarWidget.js?");

/***/ }),

/***/ "./lib/widgets/index.js":
/*!******************************!*\
  !*** ./lib/widgets/index.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar CalendarWidget_1 = __importDefault(__webpack_require__(/*! ./CalendarWidget */ \"./lib/widgets/CalendarWidget.js\"));\nexports.default = {\n    calendar: CalendarWidget_1.default,\n};\n\n\n//# sourceURL=webpack://vpat/./lib/widgets/index.js?");

/***/ }),

/***/ "formiojs":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_formiojs__;\n\n//# sourceURL=webpack://vpat/external_%22Formio%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./lib/index.js");
/******/ })()
.default;
});