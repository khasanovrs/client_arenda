(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_client_create_clientCreate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/client_create/clientCreate.component */ "./src/app/components/client_create/clientCreate.component.ts");
/* harmony import */ var _components_client_info_clientInfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/client_info/clientInfo.component */ "./src/app/components/client_info/clientInfo.component.ts");
/* harmony import */ var _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stock/stock.component */ "./src/app/components/stock/stock.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_equipments_create_equipmentsCreate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/equipments_create/equipmentsCreate.component */ "./src/app/components/equipments_create/equipmentsCreate.component.ts");
/* harmony import */ var _components_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/equipments/equipments.component */ "./src/app/components/equipments/equipments.component.ts");
/* harmony import */ var _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/applications/applications.component */ "./src/app/components/applications/applications.component.ts");
/* harmony import */ var _components_applications_create_applicationsCreate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/applications-create/applicationsCreate.component */ "./src/app/components/applications-create/applicationsCreate.component.ts");
/* harmony import */ var _components_applications_info_applicationsInfo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/applications-info/applicationsInfo.component */ "./src/app/components/applications-info/applicationsInfo.component.ts");
/* harmony import */ var _components_sets_sets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sets/sets.component */ "./src/app/components/sets/sets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var routes = [
    {
        path: '',
        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"]
    },
    {
        path: 'main',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
        path: 'clients',
        component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"]
    }, {
        path: 'client-create',
        component: _components_client_create_clientCreate_component__WEBPACK_IMPORTED_MODULE_5__["ClientCreateComponent"]
    }, {
        path: 'clients/:id',
        component: _components_client_info_clientInfo_component__WEBPACK_IMPORTED_MODULE_6__["ClientInfoComponent"]
    }, {
        path: 'settings',
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }, {
        path: 'stock',
        component: _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_7__["StockComponent"]
    }, {
        path: 'sets',
        component: _components_sets_sets_component__WEBPACK_IMPORTED_MODULE_14__["SetsComponent"]
    }, {
        path: 'equipments-create',
        component: _components_equipments_create_equipmentsCreate_component__WEBPACK_IMPORTED_MODULE_9__["EquipmentsCreateComponent"]
    }, {
        path: 'equipments/:id',
        component: _components_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_10__["EquipmentsComponent"]
    }, {
        path: 'application',
        component: _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationsComponent"]
    },
    {
        path: 'application-create',
        component: _components_applications_create_applicationsCreate_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationsCreateComponent"]
    },
    {
        path: 'application/:id',
        component: _components_applications_info_applicationsInfo_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationsInfoComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message-alert></app-message-alert>\n\n<app-menu *ngIf=\"checkAuth===true\" class=\"---left-main-menu\"></app-menu>\n\n<div [ngClass]=\"{'---main-content':checkAuth===true}\" class=\"---d-flex ---flex-nowrap ---flex-column\">\n\t<app-header *ngIf=\"checkAuth===true\"></app-header>\n\t<div [ngClass]=\"{'---main-wrapper':checkAuth===true}\" style=\"height: 100%;\" class=\"---d-flex ---flex-column ---flex-nowrap\">\n\t\t<router-outlet></router-outlet>\n  \t\t\n  \t\t<!-- На странице авторизации убрать футер -->\n  \t\t<app-footer></app-footer>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_global_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage/global-params */ "./src/app/storage/global-params.ts");
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(globalParams, authService, router) {
        this.globalParams = globalParams;
        this.authService = authService;
        this.router = router;
        //checkAuth: Boolean = false;
        this.checkAuth = true;
        // this.checkAuth = this.authService.getEmittedValue().subscribe(item => this.checkAuth = item);
        // this.checkAuthRedirect();
    }
    AppComponent.prototype.checkAuthRedirect = function () {
        if (this.checkAuth !== true) {
            this.router.navigate(['/']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_storage_global_params__WEBPACK_IMPORTED_MODULE_1__["GlobalParams"],
            _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: options, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.service */ "./src/app/components/main/main.service.ts");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/http/http.service */ "./src/app/utils/http/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_message_alert_message_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/message_alert/message_alert.component */ "./src/app/components/message_alert/message_alert.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _components_message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _storage_session_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage/session-storage.service */ "./src/app/storage/session-storage.service.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_client_client_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/client/client.service */ "./src/app/components/client/client.service.ts");
/* harmony import */ var _pipes_digits_numbers_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/digits_numbers.pipe */ "./src/app/pipes/digits_numbers.pipe.ts");
/* harmony import */ var _pipes_telephone_number_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/telephone_number.pipe */ "./src/app/pipes/telephone_number.pipe.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_users_users_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/users/users.service */ "./src/app/components/users/users.service.ts");
/* harmony import */ var _components_sale_sale_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sale/sale.component */ "./src/app/components/sale/sale.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_client_create_clientCreate_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/client_create/clientCreate.component */ "./src/app/components/client_create/clientCreate.component.ts");
/* harmony import */ var _components_client_create_clientCreate_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/client_create/clientCreate.service */ "./src/app/components/client_create/clientCreate.service.ts");
/* harmony import */ var _components_client_info_clientInfo_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/client_info/clientInfo.service */ "./src/app/components/client_info/clientInfo.service.ts");
/* harmony import */ var _components_client_info_clientInfo_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/client_info/clientInfo.component */ "./src/app/components/client_info/clientInfo.component.ts");
/* harmony import */ var _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/stock/stock.component */ "./src/app/components/stock/stock.component.ts");
/* harmony import */ var _components_stock_stock_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/stock/stock.service */ "./src/app/components/stock/stock.service.ts");
/* harmony import */ var _components_equipments_equipments_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/equipments/equipments.service */ "./src/app/components/equipments/equipments.service.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _storage_global_params__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./storage/global-params */ "./src/app/storage/global-params.ts");
/* harmony import */ var _components_equipments_create_equipmentsCreate_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/equipments_create/equipmentsCreate.component */ "./src/app/components/equipments_create/equipmentsCreate.component.ts");
/* harmony import */ var _components_equipments_create_equipmentsCreate_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/equipments_create/equipmentsCreate.service */ "./src/app/components/equipments_create/equipmentsCreate.service.ts");
/* harmony import */ var _components_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/equipments/equipments.component */ "./src/app/components/equipments/equipments.component.ts");
/* harmony import */ var _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/applications/applications.component */ "./src/app/components/applications/applications.component.ts");
/* harmony import */ var _components_applications_applications_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/applications/applications.service */ "./src/app/components/applications/applications.service.ts");
/* harmony import */ var _components_applications_create_applicationsCreate_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/applications-create/applicationsCreate.service */ "./src/app/components/applications-create/applicationsCreate.service.ts");
/* harmony import */ var _components_applications_create_applicationsCreate_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/applications-create/applicationsCreate.component */ "./src/app/components/applications-create/applicationsCreate.component.ts");
/* harmony import */ var _components_applications_info_applicationsInfo_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/applications-info/applicationsInfo.component */ "./src/app/components/applications-info/applicationsInfo.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_sets_sets_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/sets/sets.service */ "./src/app/components/sets/sets.service.ts");
/* harmony import */ var _components_sets_sets_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/sets/sets.component */ "./src/app/components/sets/sets.component.ts");
/* harmony import */ var _services_dopParamsChange_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/dopParamsChange.service */ "./src/app/services/dopParamsChange.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var options;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_digits_numbers_pipe__WEBPACK_IMPORTED_MODULE_17__["DigitsNumbersPipe"],
                _pipes_telephone_number_pipe__WEBPACK_IMPORTED_MODULE_18__["TelephoneNumberPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"],
                _components_message_alert_message_alert_component__WEBPACK_IMPORTED_MODULE_7__["MessageAlertComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_22__["UsersComponent"],
                _components_sale_sale_component__WEBPACK_IMPORTED_MODULE_24__["SaleComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_26__["SettingsComponent"],
                _components_client_create_clientCreate_component__WEBPACK_IMPORTED_MODULE_27__["ClientCreateComponent"],
                _components_client_info_clientInfo_component__WEBPACK_IMPORTED_MODULE_30__["ClientInfoComponent"],
                _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_31__["StockComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_34__["AuthComponent"],
                _components_equipments_create_equipmentsCreate_component__WEBPACK_IMPORTED_MODULE_37__["EquipmentsCreateComponent"],
                _components_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_39__["EquipmentsComponent"],
                _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_40__["ApplicationsComponent"],
                _components_applications_create_applicationsCreate_component__WEBPACK_IMPORTED_MODULE_43__["ApplicationsCreateComponent"],
                _components_applications_info_applicationsInfo_component__WEBPACK_IMPORTED_MODULE_44__["ApplicationsInfoComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__["FooterComponent"],
                _components_sets_sets_component__WEBPACK_IMPORTED_MODULE_47__["SetsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_25__["NgxMaskModule"].forRoot(options)
            ],
            providers: [
                _components_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
                _utils_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
                _components_message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_9__["GlobalParamsMessage"],
                _storage_global_params__WEBPACK_IMPORTED_MODULE_36__["GlobalParams"],
                _storage_session_storage_service__WEBPACK_IMPORTED_MODULE_11__["SessionStorageService"],
                _components_client_client_service__WEBPACK_IMPORTED_MODULE_16__["ClientService"],
                _services_dopParams_service__WEBPACK_IMPORTED_MODULE_19__["DopParamsService"],
                _components_users_users_service__WEBPACK_IMPORTED_MODULE_23__["UsersService"],
                _components_client_create_clientCreate_service__WEBPACK_IMPORTED_MODULE_28__["ClientCreateService"],
                _components_client_info_clientInfo_service__WEBPACK_IMPORTED_MODULE_29__["ClientInfoService"],
                _components_stock_stock_service__WEBPACK_IMPORTED_MODULE_32__["StockService"],
                _components_equipments_equipments_service__WEBPACK_IMPORTED_MODULE_33__["EquipmentsService"],
                _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"],
                _components_equipments_create_equipmentsCreate_service__WEBPACK_IMPORTED_MODULE_38__["EquipmentsCreateService"],
                _components_applications_applications_service__WEBPACK_IMPORTED_MODULE_41__["ApplicationsService"],
                _components_applications_create_applicationsCreate_service__WEBPACK_IMPORTED_MODULE_42__["ApplicationsCreateService"],
                _components_sets_sets_service__WEBPACK_IMPORTED_MODULE_46__["SetsService"],
                _services_dopParamsChange_service__WEBPACK_IMPORTED_MODULE_48__["DopParamsChangeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/applications-create/applicationsCreate.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/applications-create/applicationsCreate.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-rent-in ---row\">\n  <div class=\"---col-12 ---col-lg-6 ---form\">\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные аренды</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Филиал</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.branch.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let branch of branches\"\n                      [ngValue]=\"branch.val\">\n                {{branch.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Вид аренды</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.typeLease.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let applicationsTypeLease of applicationsTypeLeases\"\n                      [ngValue]=\"applicationsTypeLease.val\">\n                {{applicationsTypeLease.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Скидка на аренду</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.sale.val\" (change)=\"changeSum()\">\n              <option class=\"---select__list-item\" *ngFor=\"let discount of discounts\"\n                      [ngValue]=\"discount.val\">\n                {{discount.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Доставка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.delivery.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let delivery of applicationsDelivery\"\n                      [ngValue]=\"delivery.val\">\n                {{delivery.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.status.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let status of applicationsStatus\"\n                      [ngValue]=\"status.val\">\n                {{status.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Источник</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.source.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let source of applicationsSource\"\n                      [ngValue]=\"source.val\">\n                {{source.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Комментарий</label>\n          <textarea class=\"---input\" [(ngModel)]=\"application.comment\"></textarea>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Начало аренды</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <div class=\"---select\">\n              <input type=\"date\" (change)=\"changeSum()\" [(ngModel)]=\"application.rent_start.val\">\n            </div>\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Окончание аренды</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <input type=\"date\" (change)=\"changeSum()\" [(ngModel)]=\"application.rent_end.val\">\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold ---d-flex ---flex-wrap ---align-items-center ---justify-content-between\">\n        Данные арендатора\n\n        <a href=\"#\" class=\"---check-by-bailiff\">Проверить через сервис приставов</a>\n      </div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label></label>\n          <div class=\"---add-client-from-base ---pos-rel ---radius-5\" (click)=\"showSearchClient.show=true;\">\n            Добавить клиента из базы\n            <i class=\"ifont ---icon-loop ---y-pos-abs\"></i>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label></label>\n          <div class=\"---add-client-from-base ---pos-rel ---radius-5\" (click)=\"globalParams.showModalCreateUser=true;\">\n            Добавить нового клиента\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>ФИО клиента</label>\n          <input class=\"---input\" [(ngModel)]=\"application.client_fio.val\">\n        </div>\n\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Электронная почта</label>\n          <input type=\"email\" class=\"---input\" [(ngModel)]=\"application.client_email.val\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Номер телефона</label>\n          <input type=\"tel\" class=\"---input\" [(ngModel)]=\"application.client_phone.val\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Номер и серия паспорта</label>\n          <input class=\"---input\" [(ngModel)]=\"application.client_number_passport.val\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Паспорт выдан</label>\n          <input class=\"---input\" [(ngModel)]=\"application.client_where_passport.val\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Дата выдачи паспорта</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <input type=\"date\" class=\"---radius-5\" [(ngModel)]=\"application.client_date_passport.val\">\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Адрес прописки</label>\n          <input class=\"---input\" [(ngModel)]=\"application.client_address_passport.val\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---btns-wrapper\">\n      <div (click)=\"addApplication()\" class=\"---btn ---btn--fill-acent\">Создать заявку</div>\n    </div>\n\n  </div>\n  <div class=\"---col-12 ---col-lg-6\">\n\n    <div class=\"---r-side-add-block ---equipment-wrapper ---block--bg-white ---radius-5 ---form\">\n      <div class=\"h2 ---font-sbold\">Запрашиваемое оборудование</div>\n      <div class=\"---devider ---devider-mt0\"></div>\n\n      <div class=\"---prod-list\">\n        <div *ngFor=\"let equipment of application.equipments; let i = index\"\n             class=\"---prod-item ---pos-rel ---d-flex ---align-items-center ---justify-content-between\">\n                        <span class=\"---prod-item__info ---d-inline-flex ---align-items-center\">\n                            <span\n                              class=\"---prod-item__img ---radius-5 ---d-flex ---align-items-center ---justify-content-center\">\n                                <img src=\"/assets/imgs/catalog/{{equipment.photo}}.png\" alt=\"\"\n                                     class=\"---lazyload ---img-contain\">\n                            </span>\n                            <span class=\"---prod-item__title ---font-sbold\">{{equipment.name}}</span>\n                            <span style=\"color: red\" (click)=\"deleteEquipment(i)\">Удалить</span>\n                        </span>\n\n          <span class=\"---prod-item__thumb ---d-inline-flex\">\n                            <span class=\"---thumb-item\">\n                                За единицу<br>\n                                <span class=\"---font-sbold\">{{equipment.price | digitsNumbers}} ₽</span>\n                            </span>\n                            <span class=\"---thumb-item\">\n                                В наличии<br>\n                                <span class=\"---font-sbold\">{{equipment.in_stock}} шт.</span>\n                            </span>\n                        </span>\n\n          <span class=\"---prod-qnty-wrapper ---radius-5 ---d-inline-flex ---align-items-center\">\n                            <span (click)=\"changeCount(equipment,'decrease')\"\n                                  class=\"c-pointer ---switcher ---d-inline-flex ---justify-content-center ---align-items-center\">-</span>\n                            <span class=\"---qnty ---font-sbold\">{{equipment.count}}</span>\n                            <span (click)=\"changeCount(equipment,'increase')\"\n                                  class=\"c-pointer ---switcher ---d-inline-flex ---justify-content-center ---align-items-center ---plus\">+</span>\n                        </span>\n        </div>\n\n        <div (click)=\"showAddEquipments.show=true\" class=\"---btn ---btn--fill-dark\">Добавить</div>\n      </div>\n\n      <div class=\"---devider\"></div>\n\n      <div class=\"---total-price ---font-sbold h2\">\n        <div class=\"---delivery ---font-light\">Доставка: {{application.delivery_sum | digitsNumbers}} ₽</div>\n        Итого: {{application.sum | digitsNumbers}} ₽\n      </div>\n\n      <div class=\"---devider\"></div>\n\n      <a href=\"#\" class=\"---btn ---btn--fill-acent\">Добавить платеж</a>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n<div *ngIf=\"showSearchClient.show\" class=\"spec-abs\">\n  <div class=\"spec-abs-mod\">\n    <div (click)=\"showSearchClient.show=false\">Закрыть</div>\n    <input type=\"text\" class=\"---input\" [(ngModel)]=\"showSearchClient.filter\"\n           (keyup)=\"searchClient(showSearchClient.filter)\">\n    <div *ngFor=\"let client of showSearchClient.clients; let i = index\" (click)=\"insertClientData(i)\">\n      <div>{{client.client_fio}}</div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showAddEquipments.show\" class=\"spec-abs\">\n  <div class=\"spec-abs-mod\">\n    <div (click)=\"showAddEquipments.show=false\">Закрыть</div>\n    <input type=\"text\" class=\"---input\" [(ngModel)]=\"showAddEquipments.filter\"\n           (keyup)=\"searchEquipments(showAddEquipments.filter)\">\n    <div *ngFor=\"let equipments of showAddEquipments.equipments; let i = index\" (click)=\"insertEquipmentsData(i)\">\n      <div>{{equipments.name}}</div>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"globalParams.showModalCreateUser\" class=\"spec-abs\">\n  <div class=\"spec-abs-mod\">\n    <div (click)=\"globalParams.showModalCreateUser=false\">Закрыть</div>\n    <app-client-create></app-client-create>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/applications-create/applicationsCreate.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/applications-create/applicationsCreate.component.ts ***!
  \********************************************************************************/
/*! exports provided: ApplicationsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsCreateComponent", function() { return ApplicationsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _applicationsCreate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applicationsCreate.service */ "./src/app/components/applications-create/applicationsCreate.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equipments/equipments.service */ "./src/app/components/equipments/equipments.service.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/client.service */ "./src/app/components/client/client.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_global_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../storage/global-params */ "./src/app/storage/global-params.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplicationsCreateComponent = /** @class */ (function () {
    function ApplicationsCreateComponent(applicationsCreateService, dopParamsService, equipmentsService, clientService, globalParamsMessage, globalParams, router) {
        this.applicationsCreateService = applicationsCreateService;
        this.dopParamsService = dopParamsService;
        this.equipmentsService = equipmentsService;
        this.clientService = clientService;
        this.globalParamsMessage = globalParamsMessage;
        this.globalParams = globalParams;
        this.router = router;
        this.applicationsStatus = [];
        this.applicationsSource = [];
        this.applicationsDelivery = [];
        this.applicationsTypeLeases = [];
        this.equipmentsTypeList = [];
        this.branches = [];
        // список скидок
        this.discounts = [];
        // отображение окна поиска клиента из бд
        this.showSearchClient = {
            show: false,
            filter: '',
            clients: []
        };
        // отображение окна добавления товара
        this.showAddEquipments = {
            show: false,
            filter: '',
            equipments: []
        };
        this.application = {
            client_id: null,
            equipments: [],
            sum: '0',
            delivery_sum: '0',
            typeLease: { val: null, required: true, name: 'тип аренды' },
            sale: { val: null, required: true, name: 'скидка' },
            status: { val: null, required: true, name: 'статус' },
            source: { val: null, required: true, name: 'источник' },
            branch: { val: null, required: true, name: 'филиал' },
            rent_start: { val: null, required: true, name: 'начало аренды' },
            rent_end: { val: null, required: true, name: 'конец аренды' },
            delivery: { val: null, required: true, name: 'тип доставки' },
            client_fio: { val: '', required: true, name: 'фио клиента' },
            client_email: { val: '', required: false, name: '' },
            comment: '',
            client_phone: { val: '', required: true, name: 'телефон клиента' },
            client_number_passport: { val: '', required: true, name: 'серия и номер паспорта' },
            client_where_passport: { val: '', required: true, name: 'кем выдан паспорт' },
            client_date_passport: { val: '', required: true, name: 'дата выдачи паспорта' },
            client_address_passport: { val: '', required: true, name: 'адрес регистрации' }
        };
    }
    ApplicationsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationsCreateService.getApplicationsStatus().then(function (data) {
            _this.applicationsStatus = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.applicationsCreateService.getApplicationsSource().then(function (data) {
            _this.applicationsSource = data;
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
        this.applicationsCreateService.getApplicationsDelivery().then(function (data) {
            _this.applicationsDelivery = data;
        }, function (error) {
            console.log('Ошибка при получении статусов доставки: ', error);
        });
        this.applicationsCreateService.getApplicationsTypeLease().then(function (data) {
            _this.applicationsTypeLeases = data;
        }, function (error) {
            console.log('Ошибка при получении типов аренды: ', error);
        });
        this.equipmentsService.getEquipmentsType().then(function (data) {
            _this.equipmentsTypeList = data;
        }, function (error) {
            console.log('Ошибка при получении списка типов оборудования: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discounts = data;
        }, function (error) {
            console.log('Ошибка при получении списка скидок: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
    };
    // поиск клиентов из бд
    ApplicationsCreateComponent.prototype.searchClient = function (filter) {
        var _this = this;
        if (filter === '') {
            return false;
        }
        this.clientService.searchClient({ filter: filter }).then(function (data) {
            _this.showSearchClient.clients = data;
        }, function (error) {
            console.log('Ошибка при получении списка сотрудников: ', error);
        });
    };
    // поиск товара из бд
    ApplicationsCreateComponent.prototype.searchEquipments = function (filter) {
        var _this = this;
        if (filter === '') {
            return false;
        }
        this.equipmentsService.searchEquipments({ filter: filter }).then(function (data) {
            _this.showAddEquipments.equipments = data;
        }, function (error) {
            console.log('Ошибка при получении списка оборудования: ', error);
        });
    };
    ApplicationsCreateComponent.prototype.changeCount = function (equipment, type) {
        if (type === 'increase') {
            if (parseInt(equipment.count, 10) === parseInt(equipment.in_stock, 10)) {
                this.globalParamsMessage.data = { title: "\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0442\u043E\u043B\u044C\u043A\u043E " + equipment.in_stock + " \u0448\u0442 ", type: 'error', body: '' };
                return false;
            }
            equipment.count++;
        }
        if (type === 'decrease') {
            if (equipment.count === 1) {
                this.globalParamsMessage.data = { title: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 1", type: 'error', body: '' };
                return false;
            }
            equipment.count--;
        }
        this.changeSum();
    };
    // заполнение данными из справочника
    ApplicationsCreateComponent.prototype.insertClientData = function (index) {
        this.application.client_id = this.showSearchClient.clients[index].client_id;
        this.application.client_fio.val = this.showSearchClient.clients[index].client_fio;
        this.application.client_email.val = this.showSearchClient.clients[index].client_email;
        this.application.client_phone.val = this.showSearchClient.clients[index].client_phone;
        this.application.client_number_passport.val = this.showSearchClient.clients[index].client_number_passport;
        this.application.client_where_passport.val = this.showSearchClient.clients[index].client_where_passport;
        this.application.client_date_passport.val = this.showSearchClient.clients[index].client_date_passport;
        this.application.client_address_passport.val = this.showSearchClient.clients[index].client_address_passport;
        this.showSearchClient.show = false;
        this.showSearchClient = {
            show: false,
            filter: '',
            clients: []
        };
    };
    ApplicationsCreateComponent.prototype.insertEquipmentsData = function (index) {
        var tmp = {
            id: this.showAddEquipments.equipments[index].id,
            name: this.showAddEquipments.equipments[index].name,
            in_stock: this.showAddEquipments.equipments[index].count,
            count: 1,
            price: this.showAddEquipments.equipments[index].price_per_day,
            photo: this.showAddEquipments.equipments[index].photo
        };
        this.application.equipments.push(tmp);
        this.showAddEquipments = {
            show: false,
            filter: '',
            equipments: []
        };
        this.changeSum();
    };
    ApplicationsCreateComponent.prototype.addApplication = function () {
        var _this = this;
        for (var value in this.application) {
            if (this.application.hasOwnProperty(value)) {
                if (this.application[value].required && this.application[value].val === '') {
                    this.globalParamsMessage.data = { title: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \"" + this.application[value].name + "\"", type: 'error', body: '' };
                    return false;
                }
            }
        }
        var date1 = new Date(this.application.rent_start.val);
        var date2 = new Date(this.application.rent_end.val);
        if (date2 < date1) {
            this.globalParamsMessage.data = { title: "\u041F\u0435\u0440\u0438\u043E\u0434 \u0430\u0440\u0435\u043D\u0434\u044B \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E", type: 'error', body: '' };
            return false;
        }
        this.applicationsCreateService.addApplication({
            client_id: this.application.client_id,
            equipments: this.application.equipments,
            typeLease: this.application.typeLease.val,
            sale: this.application.sale.val,
            rent_start: this.application.rent_start.val,
            rent_end: this.application.rent_end.val,
            delivery: this.application.delivery.val,
            client_fio: this.application.client_fio.val,
            client_email: this.application.client_email.val,
            client_phone: this.application.client_phone.val,
            client_number_passport: this.application.client_number_passport.val,
            client_where_passport: this.application.client_where_passport.val,
            client_date_passport: this.application.client_date_passport.val,
            client_address_passport: this.application.client_address_passport.val,
            sum: this.application.sum,
            delivery_sum: this.application.delivery_sum,
            comment: this.application.comment,
            source: this.application.source.val,
            branch: this.application.branch.val,
            status: this.application.status.val
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Заявка успешно добавлена', type: 'success', body: '' };
            _this.router.navigate(['/application']);
        }, function (error) {
            console.log('Ошибка при добавлении новой заявки: ', error);
        });
    };
    // вычесляем сумму аренды
    ApplicationsCreateComponent.prototype.changeSum = function () {
        var sum = null;
        if (this.application.equipments.length !== 0) {
            for (var _i = 0, _a = this.application.equipments; _i < _a.length; _i++) {
                var value = _a[_i];
                sum += value.count * parseFloat(value.price);
            }
        }
        else {
            return true;
        }
        if (this.application.rent_start.val !== null && this.application.rent_end.val !== null) {
            var date1 = new Date(this.application.rent_start.val);
            var date2 = new Date(this.application.rent_end.val);
            if (date2 < date1) {
                this.globalParamsMessage.data = { title: "\u041F\u0435\u0440\u0438\u043E\u0434 \u0430\u0440\u0435\u043D\u0434\u044B \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E", type: 'error', body: '' };
                return false;
            }
            var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
            sum = daysLag * sum;
        }
        if (this.application.sale !== null) {
            var tmpSale = 0;
            for (var _b = 0, _c = this.discounts; _b < _c.length; _b++) {
                var value = _c[_b];
                if (this.application.sale.val === value.val) {
                    tmpSale = parseFloat(value.name);
                }
            }
            if (tmpSale !== 0) {
                sum -= sum * tmpSale / 100;
            }
        }
        this.application.sum = sum;
    };
    // удаление оборудования из списка
    ApplicationsCreateComponent.prototype.deleteEquipment = function (index) {
        this.application.equipments.splice(index, 1);
    };
    ApplicationsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications-create',
            template: __webpack_require__(/*! ./applicationsCreate.component.html */ "./src/app/components/applications-create/applicationsCreate.component.html"),
        }),
        __metadata("design:paramtypes", [_applicationsCreate_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationsCreateService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentsService"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_5__["GlobalParamsMessage"],
            _storage_global_params__WEBPACK_IMPORTED_MODULE_7__["GlobalParams"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ApplicationsCreateComponent);
    return ApplicationsCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/applications-create/applicationsCreate.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/applications-create/applicationsCreate.service.ts ***!
  \******************************************************************************/
/*! exports provided: ApplicationsCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsCreateService", function() { return ApplicationsCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationsCreateService = /** @class */ (function () {
    function ApplicationsCreateService(httpService) {
        this.httpService = httpService;
        this.applicationsStatusList = [];
        this.applicationsSourceList = [];
        this.applicationsTypeLeaseList = [];
        this.applicationsDeliveryList = [];
    }
    // получение списка статусов
    ApplicationsCreateService.prototype.getApplicationsStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.applicationsStatusList.length === 0) {
                _this.httpService.prepareQuery('api/get-applications-status', '')
                    .then(function (result) {
                    _this.applicationsStatusList = result;
                    resolve(_this.applicationsStatusList);
                }, function (error) {
                    console.log('Ошибка при получении списка статусов заявки', error);
                    reject();
                });
            }
            else {
                resolve(_this.applicationsStatusList);
            }
        });
    };
    // получение списка типов аренды
    ApplicationsCreateService.prototype.getApplicationsTypeLease = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.applicationsTypeLeaseList.length === 0) {
                _this.httpService.prepareQuery('api/get-applications-type-lease', '')
                    .then(function (result) {
                    _this.applicationsTypeLeaseList = result;
                    resolve(_this.applicationsTypeLeaseList);
                }, function (error) {
                    console.log('Ошибка при получении списка типов аренды заявки', error);
                    reject();
                });
            }
            else {
                resolve(_this.applicationsTypeLeaseList);
            }
        });
    };
    // получение списка источников
    ApplicationsCreateService.prototype.getApplicationsSource = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.applicationsSourceList.length === 0) {
                _this.httpService.prepareQuery('api/get-applications-source', '')
                    .then(function (result) {
                    _this.applicationsSourceList = result;
                    resolve(_this.applicationsSourceList);
                }, function (error) {
                    console.log('Ошибка при получении списка источников заявки', error);
                    reject();
                });
            }
            else {
                resolve(_this.applicationsSourceList);
            }
        });
    };
    // получение списка источников
    ApplicationsCreateService.prototype.getApplicationsDelivery = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.applicationsDeliveryList.length === 0) {
                _this.httpService.prepareQuery('api/get-applications-delivery', '')
                    .then(function (result) {
                    _this.applicationsDeliveryList = result;
                    resolve(_this.applicationsDeliveryList);
                }, function (error) {
                    console.log('Ошибка при получении списка статусов доставки', error);
                    reject();
                });
            }
            else {
                resolve(_this.applicationsDeliveryList);
            }
        });
    };
    // создание заявки
    ApplicationsCreateService.prototype.addApplication = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-application', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении новой заявки', error);
                reject();
            });
        });
    };
    ApplicationsCreateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ApplicationsCreateService);
    return ApplicationsCreateService;
}());



/***/ }),

/***/ "./src/app/components/applications-info/applicationsInfo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/applications-info/applicationsInfo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-rent-in ---row\">\n  <div class=\"---col-12 ---col-lg-6 ---form\">\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные аренды</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Филиал</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.branch.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let branch of branches\"\n                      [ngValue]=\"branch.val\">\n                {{branch.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Вид аренды</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.typeLease.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let applicationsTypeLease of applicationsTypeLeases\"\n                      [ngValue]=\"applicationsTypeLease.val\">\n                {{applicationsTypeLease.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Скидка на аренду</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.sale.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let discount of discounts\" [ngValue]=\"discount.val\">\n                {{discount.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Доставка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.delivery.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let delivery of applicationsDelivery\"\n                      [ngValue]=\"delivery.val\">\n                {{delivery.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Источник</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"application.source.val\">\n              <option class=\"---select__list-item\" *ngFor=\"let source of applicationsSource\"\n                      [ngValue]=\"source.val\">\n                {{source.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Комментарий</label>\n          <textarea class=\"---input\" [(ngModel)]=\"application.comment\"></textarea>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Начало аренды</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <div class=\"---select\">\n              <input type=\"date\" [(ngModel)]=\"application.rent_start.val\">\n            </div>\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Окончание аренды</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <input type=\"date\" [(ngModel)]=\"application.rent_end.val\">\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold ---d-flex ---flex-wrap ---align-items-center ---justify-content-between\">\n        Данные арендатора\n      </div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>ФИО клиента</label>\n          <div>{{application.client_fio}}</div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-xs-6\">\n          <label>Номер телефона</label>\n          <div>{{application.client_phone | telephoneNumber}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"---col-12 ---col-lg-6\">\n\n    <div class=\"---r-side-add-block ---equipment-wrapper ---block--bg-white ---radius-5 ---form\">\n      <div class=\"h2 ---font-sbold\">Запрашиваемое оборудование</div>\n      <div class=\"---devider ---devider-mt0\"></div>\n\n      <div class=\"---prod-list\">\n        <div class=\"---prod-item ---pos-rel ---d-flex ---align-items-center ---justify-content-between\">\n                        <span class=\"---prod-item__info ---d-inline-flex ---align-items-center\">\n                            <span\n                              class=\"---prod-item__img ---radius-5 ---d-flex ---align-items-center ---justify-content-center\">\n                                <img src=\"/assets/imgs/catalog/{{application.equipments.photo}}.png\" alt=\"\"\n                                     class=\"---lazyload ---img-contain\">\n                            </span>\n                            <span class=\"---prod-item__title ---font-sbold\">{{application.equipments.name}}</span>\n                        </span>\n\n          <span class=\"---prod-item__thumb ---d-inline-flex\">\n                            <span class=\"---thumb-item\">\n                                Количество<br>\n                                <span class=\"---font-sbold\">{{application.equipments.count}}</span>\n                            </span>\n                        </span>\n        </div>\n      </div>\n\n\n      <div class=\"---total-price ---font-sbold h2\">\n        <div class=\"---delivery ---font-light\">Доставка: {{application.delivery_sum | digitsNumbers}} ₽</div>\n        Итого: {{application.sum | digitsNumbers}} ₽\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/applications-info/applicationsInfo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/applications-info/applicationsInfo.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApplicationsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsInfoComponent", function() { return ApplicationsInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equipments/equipments.service */ "./src/app/components/equipments/equipments.service.ts");
/* harmony import */ var _client_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/client.service */ "./src/app/components/client/client.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _applications_create_applicationsCreate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../applications-create/applicationsCreate.service */ "./src/app/components/applications-create/applicationsCreate.service.ts");
/* harmony import */ var _applications_applications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../applications/applications.service */ "./src/app/components/applications/applications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplicationsInfoComponent = /** @class */ (function () {
    function ApplicationsInfoComponent(applicationsCreateService, dopParamsService, equipmentsService, clientService, globalParamsMessage, activatedRoute, applicationsService, router) {
        var _this = this;
        this.applicationsCreateService = applicationsCreateService;
        this.dopParamsService = dopParamsService;
        this.equipmentsService = equipmentsService;
        this.clientService = clientService;
        this.globalParamsMessage = globalParamsMessage;
        this.activatedRoute = activatedRoute;
        this.applicationsService = applicationsService;
        this.router = router;
        this.applicationsStatus = [];
        this.applicationsSource = [];
        this.applicationsDelivery = [];
        this.applicationsTypeLeases = [];
        this.equipmentsTypeList = [];
        this.branches = [];
        this.discounts = [];
        // заявка
        this.application = {
            id: null,
            branch: { val: null, required: true, name: '' },
            delivery: { val: null, required: true, name: '' },
            typeLease: { val: null, required: true, name: '' },
            sale: { val: null, required: true, name: '' },
            source: { val: null, required: true, name: '' },
            comment: '',
            rent_start: { val: null, required: true, name: '' },
            rent_end: { val: null, required: true, name: '' },
            client_id: null,
            client_fio: '',
            client_phone: '',
            delivery_sum: '',
            sum: '',
            equipments: {
                id: null,
                name: '',
                count: null,
                status: null,
                photo: '',
                price: '',
                stock: null
            }
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.applicationId = params.id;
        });
    }
    ApplicationsInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationsCreateService.getApplicationsStatus().then(function (data) {
            _this.applicationsStatus = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.applicationsCreateService.getApplicationsSource().then(function (data) {
            _this.applicationsSource = data;
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
        this.applicationsCreateService.getApplicationsDelivery().then(function (data) {
            _this.applicationsDelivery = data;
        }, function (error) {
            console.log('Ошибка при получении статусов доставки: ', error);
        });
        this.applicationsCreateService.getApplicationsTypeLease().then(function (data) {
            _this.applicationsTypeLeases = data;
        }, function (error) {
            console.log('Ошибка при получении типов аренды: ', error);
        });
        this.equipmentsService.getEquipmentsType().then(function (data) {
            _this.equipmentsTypeList = data;
        }, function (error) {
            console.log('Ошибка при получении списка типов оборудования: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discounts = data;
        }, function (error) {
            console.log('Ошибка при получении списка скидок: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.applicationsService.getApplicationInfo({ applicationId: this.applicationId }).then(function (data) {
            _this.application.id = data.id;
            _this.application.branch.val = data.branch;
            _this.application.delivery.val = data.delivery;
            _this.application.typeLease.val = data.typeLease;
            _this.application.sale.val = data.sale;
            _this.application.source.val = data.source;
            _this.application.comment = data.comment;
            _this.application.rent_start.val = data.rent_start;
            _this.application.rent_end.val = data.rent_end;
            _this.application.client_id = data.client_id;
            _this.application.client_fio = data.client_fio;
            _this.application.client_phone = data.client_phone;
            _this.application.delivery_sum = data.client_phone;
            _this.application.equipments = data.equipments;
            _this.application.sum = data.sum;
        }, function (error) {
            console.log('Ошибка при получении детальной информации по клиенту: ', error);
        });
    };
    ApplicationsInfoComponent.prototype.updateApplication = function () {
        var _this = this;
        for (var value in this.application) {
            if (this.application.hasOwnProperty(value)) {
                if (this.application[value].required && this.application[value].val === '') {
                    this.globalParamsMessage.data = { title: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \"" + this.application[value].name + "\"", type: 'error', body: '' };
                    return false;
                }
            }
        }
        this.applicationsCreateService.addApplication({
            client_id: this.application.client_id,
            equipments: this.application.equipments,
            typeLease: this.application.typeLease.val,
            sale: this.application.sale.val,
            rent_start: this.application.rent_start.val,
            rent_end: this.application.rent_end.val,
            delivery: this.application.delivery.val,
            sum: this.application.sum,
            delivery_sum: this.application.delivery_sum,
            comment: this.application.comment,
            source: this.application.source.val,
            branch: this.application.branch.val
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Заявка успешно изменена', type: 'success', body: '' };
            _this.router.navigate(['/application']);
        }, function (error) {
            console.log('Ошибка при внесении изменений в заявку: ', error);
        });
    };
    ApplicationsInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications-info',
            template: __webpack_require__(/*! ./applicationsInfo.component.html */ "./src/app/components/applications-info/applicationsInfo.component.html"),
        }),
        __metadata("design:paramtypes", [_applications_create_applicationsCreate_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationsCreateService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__["DopParamsService"],
            _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_2__["EquipmentsService"],
            _client_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_4__["GlobalParamsMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _applications_applications_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ApplicationsInfoComponent);
    return ApplicationsInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/applications/applications.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/applications/applications.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-clients\">\n\n  <div class=\"---tabs ---tabs--finance\">\n    <div class=\"---tabs__switchers-wrapper ---d-flex ---align-items-center ---justify-content-between\">\n      <div class=\"---tabs__switchers ---h1 ---font-light ---d-flex\">\n        <div class=\"---tabs__switcher ---is-active\" (click)=\"changeTypeApplications('')\">Все заявки</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeApplications('1')\">С сайта</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeApplications('2')\">Соц. сети</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeApplications('3')\">Звонки</div>\n      </div>\n    </div>\n\n    <div class=\"---h-filters-wrapper ---d-flex ---justify-content-between ---align-items-start\">\n\n      <div class=\"---d-flex ---form ---align-items-start\">\n        <div class=\"---filters ---js-toggle-show ---radius-5 ---d-inline-flex ---align-items-center\"\n             (click)=\"changeShowFilters()\">\n          Фильтры\n          <i class=\"ifont ---icon-menu-finance ---d-none ---sm-d-flex\"></i>\n        </div>\n\n        <div class=\"---filters ---js-toggle-show ---radius-5 ---d-inline-flex ---align-items-center\"\n             (click)=\"changeActiveFields()\">\n          Активные поля\n          <i class=\"ifont ---icon-list ---d-none ---sm-d-flex\"></i>\n        </div>\n      </div>\n\n      <a routerLink='/application-create' class=\"---btn ---btn--fill-acent\">Новая заявка</a>\n    </div>\n\n    <div *ngIf=\"showFilters\" class=\"---block--bg-white ---block-filter ---radius-5 ---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\"\n                    [(ngModel)]=\"filters.status\">\n              <option class=\"---select__list-item\" *ngFor=\"let status of deliveryStatus\" [ngValue]=\"status.val\">\n                {{status.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Филиал</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\"\n                    [(ngModel)]=\"filters.branch\">\n              <option class=\"---select__list-item\" *ngFor=\"let branch of branches\" [ngValue]=\"branch.val\">\n                {{branch.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Дата обращения начало</label>\n          <div>\n            <input type=\"date\" [(ngModel)]=\"filters.date_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Дата обращения конец</label>\n          <div class=\"---select\">\n            <input type=\"date\" [(ngModel)]=\"filters.date_end\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"---btns ---d-flex\">\n        <div (click)=\"getApplication()\" class=\"---btn ---btn--fill-acent\">Применить фильтры</div>\n        <div (click)=\"clearFilter()\" class=\"---btn ---btn--border-bg\">\n          Сбросить фильры\n          <i class=\"ifont ---icon-close\"></i>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"showActiveFields\" id=\"active-field\" class=\" ---block--bg-white ---block-filter ---radius-5 ---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\" *ngFor=\"let activeField of activeFields; let i = index\">\n          <label for=\"right_{{activeField.code}}\" class=\"---checkbox\" [ngClass]=\"{'---is-active':activeField.flag}\">\n            <input type=\"checkbox\"\n                   id=\"right_{{activeField.code}}\"\n                   (change)=\"changeCheckbox(i)\"\n                   [checked]=\"activeField.flag\">\n            {{activeField.name}}\n          </label>\n        </div>\n\n      </div>\n\n      <div class=\"---btns ---d-flex\">\n        <div (click)=\"changeFields()\" class=\"---btn ---btn--fill-acent\">Применить</div>\n      </div>\n    </div>\n\n    <div class=\"---t-wrapper\">\n      <table>\n        <tr>\n          <ng-container *ngFor=\"let activeField of activeFields\">\n            <th *ngIf=\"activeField.flag===1\">{{activeField.name}}</th>\n          </ng-container>\n        </tr>\n\n        <tr *ngFor=\"let application of applications | paginate: { itemsPerPage: 10, currentPage: p }\"\n            (click)=\"applicationDetails(application.equipments_id)\"\n            class=\"cursor-pointer\">\n          <td *ngIf=\"activeFieldsTables['client']===1\">{{application.client}}</td>\n          <td *ngIf=\"activeFieldsTables['phone']===1\">{{application.phone | telephoneNumber}}</td>\n          <td *ngIf=\"activeFieldsTables['equipments_name']===1\">{{application.equipments_name}}</td>\n          <td *ngIf=\"activeFieldsTables['status']===1\">\n            <div class=\"---select\">\n              <select class=\"---select__cur-value\"\n                      (change)=\"changeStatus(application)\"\n                      [(ngModel)]=\"application.status\">\n                <option class=\"---select__list-item\" *ngFor=\"let status of deliveryStatus\" [ngValue]=\"status.val\">\n                  {{status.name}}\n                </option>\n              </select>\n            </div>\n          </td>\n          <td *ngIf=\"activeFieldsTables['source']===1\">{{application.source}}</td>\n          <td *ngIf=\"activeFieldsTables['comment']===1\">{{application.comment}}</td>\n          <td *ngIf=\"activeFieldsTables['user']===1\">{{application.user}}</td>\n          <td *ngIf=\"activeFieldsTables['equipments_count']===1\">{{application.equipments_count}}</td>\n        </tr>\n      </table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/applications/applications.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/applications/applications.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _applications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applications.service */ "./src/app/components/applications/applications.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent(applicationsService, dopParamsService, router) {
        this.applicationsService = applicationsService;
        this.dopParamsService = dopParamsService;
        this.router = router;
        this.deliveryStatus = [];
        // отображение фильтра
        this.showFilters = false;
        // отображение фильтра
        this.showActiveFields = false;
        // список активных полей
        this.activeFields = [];
        // список активных полей
        this.activeFieldsTables = {};
        this.branches = [];
        this.filters = {
            source: '',
            status: '',
            branch: null,
            date_start: '',
            date_end: '',
        };
        this.applications = [];
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationsService.getApplicationsStatus().then(function (data) {
            _this.deliveryStatus = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.applicationsService.getApplicationsFields().then(function (data) {
            _this.activeFields = data;
            _this.changeShowFields();
        }, function (error) {
            console.log('Ошибка при получении списка полей оборудования: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.getApplication();
    };
    // изменение типа источников
    ApplicationsComponent.prototype.changeTypeApplications = function (data) {
        this.filters.source = data;
        this.getApplication();
    };
    // отображение фильтра
    ApplicationsComponent.prototype.changeShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    // отображение фильтра
    ApplicationsComponent.prototype.changeActiveFields = function () {
        this.showActiveFields = !this.showActiveFields;
    };
    // изменение отображений записекй у полей
    ApplicationsComponent.prototype.changeShowFields = function () {
        for (var _i = 0, _a = this.activeFields; _i < _a.length; _i++) {
            var value = _a[_i];
            this.activeFieldsTables[value.code] = value.flag;
        }
    };
    // изменение списка активных полей
    ApplicationsComponent.prototype.changeFields = function () {
        var _this = this;
        this.applicationsService.changeFields({ data: this.activeFields }).then(function () {
            _this.showActiveFields = false;
        }, function () {
            console.log('Ошибка при изменение списка отображаемых полей');
        });
    };
    // изменение списка полей
    ApplicationsComponent.prototype.changeCheckbox = function (i) {
        this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
        this.changeShowFields();
    };
    // изменение статуса
    ApplicationsComponent.prototype.changeStatus = function (application) {
        this.applicationsService.updateApplicationsStatus({
            application_id: application.equipments_id,
            application_status: application.status
        }).then(function () {
        }, function (error) {
            console.log('Ошибка при изменении статуса у оборудования: ', error);
        });
    };
    ApplicationsComponent.prototype.getApplication = function () {
        var _this = this;
        this.applicationsService.getApplication({
            status: this.filters.status,
            source: this.filters.source,
            branch: this.filters.branch,
            date_start: this.filters.date_start,
            date_end: this.filters.date_end,
        }).then(function (data) {
            _this.applications = data;
        }, function (error) {
            console.log('Ошибка при получении списка заявок: ', error);
        });
    };
    // очистка фильтра
    ApplicationsComponent.prototype.clearFilter = function () {
        this.filters = {
            source: '',
            status: '',
            branch: null,
            date_start: '',
            date_end: '',
        };
        this.getApplication();
    };
    ApplicationsComponent.prototype.applicationDetails = function (equipments_id) {
        this.router.navigate(['/application/' + equipments_id]);
    };
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/components/applications/applications.component.html"),
        }),
        __metadata("design:paramtypes", [_applications_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationsService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/components/applications/applications.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/applications/applications.service.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsService", function() { return ApplicationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationsService = /** @class */ (function () {
    function ApplicationsService(httpService) {
        this.httpService = httpService;
        this.applicationsFieldsList = [];
        this.applicationsStatusList = [];
    }
    // получение списка активных полей
    ApplicationsService.prototype.getApplicationsFields = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.applicationsFieldsList.length === 0) {
                _this.httpService.prepareQuery('api/get-applications-field', '')
                    .then(function (result) {
                    _this.applicationsFieldsList = result;
                    resolve(result);
                }, function (error) {
                    console.log('Ошибка при получении списка полей для заявок', error);
                    reject();
                });
            }
            else {
                resolve(_this.applicationsFieldsList);
            }
        });
    };
    // изменение списка активных полей для таблицы
    ApplicationsService.prototype.changeFields = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/change-applications-field', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при изменение списка отображаемых полей', error);
                reject();
            });
        });
    };
    // получение списка статусов
    ApplicationsService.prototype.getApplicationsStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.applicationsStatusList.length === 0) {
                _this.httpService.prepareQuery('api/get-applications-status', '')
                    .then(function (result) {
                    _this.applicationsStatusList = result;
                    resolve(_this.applicationsStatusList);
                }, function (error) {
                    console.log('Ошибка при получении списка статусов заявки', error);
                    reject();
                });
            }
            else {
                resolve(_this.applicationsStatusList);
            }
        });
    };
    // получение списка заявов
    ApplicationsService.prototype.getApplication = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-applications', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении заявок', error);
                reject();
            });
        });
    };
    // изменение статуса
    ApplicationsService.prototype.updateApplicationsStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/update-applications-status', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при изменении статуса заявки', error);
                reject();
            });
        });
    };
    // получение информации по заявке
    ApplicationsService.prototype.getApplicationInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-application-info', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при изменении статуса заявки', error);
                reject();
            });
        });
    };
    ApplicationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ApplicationsService);
    return ApplicationsService;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---d-flex ---pos-rel\" style=\"height: 100%;\">\n  <div id=\"---page-auth\" class=\"---d-flex\">\n    <div class=\"---text-wrap ---pos-rel ---d-flex ---justify-content-center ---flex-column\">\n      <div class=\"---logo ---d-flex ---align-items-center ---font-ebold\">\n        <img data-src=\"assets/imgs/logo.svg\" alt=\"\" class=\"---lazyload\">\n        <span>\n                    stroika<br>\n                    <span class=\"---acent\">arenda</span>\n                </span>\n      </div>\n\n      <div class=\"---title ---font-sbold\">\n        Добро<br>\n        пожаловать!\n      </div>\n\n      <form action=\"#\" class=\"---form\" (keydown.enter)=\"auth()\">\n        <div class=\"---field\">\n          <input type=\"text\" mask=\"+0 (000) 000 00 00\" class=\"---input\" placeholder=\"Ваш телефон\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"---field\">\n          <input type=\"password\" class=\"---input\" placeholder=\"Пароль\" [(ngModel)]=\"pass\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n\n        <div (click)=\"auth()\" class=\"---btn ---btn--fill-acent\">Войти в систему</div>\n      </form>\n    </div>\n\n    <div class=\"---bg-img ---d-none ---xs-d-block\">\n      <img data-src=\"assets/imgs/bg/auth.png\" alt=\"\" class=\"---lazyload ---img-cover\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, globalParamsMessage, router) {
        this.authService = authService;
        this.globalParamsMessage = globalParamsMessage;
        this.router = router;
        this.phone = '';
        this.pass = '';
    }
    AuthComponent.prototype.auth = function () {
        var _this = this;
        if (this.phone === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать номер телефона', type: 'error', body: '' };
            return false;
        }
        if (this.pass === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать пароль', type: 'error', body: '' };
            return false;
        }
        var phone = this.phone.replace(/[\),\(,\-,+,\s]/g, '');
        this.authService.auth({ phone: phone, password: this.pass }).then(function () {
            console.log('Авторизация прошла');
            _this.router.navigate(['/main']);
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.less */ "./src/app/components/auth/auth.less")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_2__["GlobalParamsMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.less":
/*!*******************************************!*\
  !*** ./src/app/components/auth/auth.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#---page-auth {\n  width: 100%;\n}\n#---page-auth .---text-wrap {\n  z-index: 1;\n  width: 545px;\n  padding: 80px 120px;\n  color: #fff;\n  background: #2a1f3a;\n}\n#---page-auth .---text-wrap:before {\n  content: '';\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 177px;\n  background: #2f2340;\n}\n#---page-auth .---text-wrap .---logo {\n  margin-bottom: 95px;\n  font-size: 48px;\n  line-height: 1;\n}\n#---page-auth .---text-wrap .---logo img {\n  height: 73px;\n  width: 73px;\n  margin-right: 30px;\n}\n#---page-auth .---text-wrap .---title {\n  line-height: 1.2;\n  margin-bottom: 50px;\n  font-size: 36px;\n}\n#---page-auth .---text-wrap .---field {\n  margin-bottom: 12px;\n}\n#---page-auth .---text-wrap .---btn {\n  margin-top: 30px;\n  width: 100%;\n}\n#---page-auth .---bg-img {\n  width: calc(100% - 545px);\n}\n"

/***/ }),

/***/ "./src/app/components/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(httpService) {
        this.httpService = httpService;
        this.authenticated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.authenticated.emit(false);
    }
    // получение детальной информации по клиенту
    AuthService.prototype.auth = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/auth', data)
                .then(function () {
                _this.authenticated.emit(true);
                resolve();
            }, function (error) {
                console.log('Ошибка при авторизации', error);
                reject();
            });
        });
    };
    // получение детальной информации по клиенту
    AuthService.prototype.exit = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/exit', '')
                .then(function () {
                _this.authenticated.emit(false);
                resolve();
            }, function (error) {
                console.log('Ошибка при выходе', error);
                reject();
            });
        });
    };
    AuthService.prototype.getEmittedValue = function () {
        return this.authenticated;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/client/client.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-clients\">\n\n  <div class=\"---tabs ---tabs--finance\">\n    <div class=\"---tabs__switchers-wrapper ---d-flex ---align-items-center ---justify-content-between\">\n      <div class=\"---tabs__switchers ---h1 ---font-light ---d-flex\">\n        <div class=\"---tabs__switcher ---is-active\" (click)=\"changeTypeClients('all')\">Все клиенты</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeClients('ur')\">Юр. лица</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeClients('fiz')\">Физ. лица</div>\n      </div>\n    </div>\n\n    <div class=\"---h-filters-wrapper ---d-flex ---justify-content-between ---align-items-start\">\n\n      <div class=\"---d-flex ---form ---align-items-start\">\n        <div class=\"---filters ---js-toggle-show ---radius-5 ---d-inline-flex ---align-items-center\"\n             (click)=\"changeShowFilters()\">\n          Фильтры\n          <i class=\"ifont ---icon-menu-finance ---d-none ---sm-d-flex\"></i>\n        </div>\n\n        <div class=\"---filters ---js-toggle-show ---radius-5 ---d-inline-flex ---align-items-center\"\n             (click)=\"changeActiveFields()\">\n          Активные поля\n          <i class=\"ifont ---icon-list ---d-none ---sm-d-flex\"></i>\n        </div>\n\n        <div class=\"---search ---field ---pos-rel\">\n          <input class=\"---input\" placeholder=\"Поиск по клиентам\" [(ngModel)]=\"filters.like\"\n                 (keyup)=\"getClients()\">\n          <button class=\"---y-pos-abs ifont ---icon-loop\"></button>\n        </div>\n      </div>\n\n      <a routerLink='/client-create' class=\"---btn ---btn--fill-acent\">Добавить клиента</a>\n\n    </div>\n\n    <div *ngIf=\"showFilters\" class=\"---block--bg-white ---block-filter ---radius-5 ---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Филиал</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"filters.branch\">\n              <option class=\"---select__list-item\" *ngFor=\"let branch of branches\" [ngValue]=\"branch.val\">\n                {{branch.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Источник</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"filters.source\">\n              <option class=\"---select__list-item\" *ngFor=\"let source of sourceList\" [ngValue]=\"source.val\">\n                {{source.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"filters.status\">\n              <option class=\"---select__list-item\" *ngFor=\"let status of statusList\" [ngValue]=\"status.val\">\n                {{status.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Дата обращения начало</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <input [(ngModel)]=\"filters.date_start\" class=\"---datepicker\" data-position=\"bottom left\">\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Дата обращения конец</label>\n          <div class=\"---input ---input--calendar ---pos-rel\">\n            <input [(ngModel)]=\"filters.date_end\" class=\"---datepicker\" data-position=\"bottom left\">\n            <i class=\"---y-pos-abs ifont ---icon-calendar\"></i>\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Выручка от</label>\n          <div>\n            <input class=\"---input ---shadow--bg\" mask=\"separator\" [(ngModel)]=\"filters.dohod_start\">\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Выручка до</label>\n          <div>\n            <input class=\"---input ---shadow--bg\" mask=\"separator\" [(ngModel)]=\"filters.dohod_end\">\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество прокатов от</label>\n          <div>\n            <input class=\"---input ---shadow--bg\" mask=\"separator\" [(ngModel)]=\"filters.rentals_start\">\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество прокатов до</label>\n          <div>\n            <input class=\"---input ---shadow--bg\" mask=\"separator\" [(ngModel)]=\"filters.rentals_end\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"---btns ---d-flex\">\n        <div (click)=\"getClients()\" class=\"---btn ---btn--fill-acent\">Применить фильтры</div>\n        <div (click)=\"clearFilter()\" class=\"---btn ---btn--border-bg\">\n          Сбросить фильтры\n          <i class=\"ifont ---icon-close\"></i>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"showActiveFields\" id=\"active-field\" class=\" ---block--bg-white ---block-filter ---radius-5 ---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\" *ngFor=\"let activeField of activeFields; let i = index\">\n          <label for=\"right_{{activeField.code}}\" class=\"---checkbox\" [ngClass]=\"{'---is-active':activeField.flag}\">\n            <input type=\"checkbox\"\n                   id=\"right_{{activeField.code}}\"\n                   (change)=\"changeCheckbox(i)\"\n                   [checked]=\"activeField.flag\">\n            {{activeField.name}}\n          </label>\n        </div>\n\n      </div>\n\n      <div class=\"---btns ---d-flex\">\n        <div (click)=\"changeFields()\" class=\"---btn ---btn--fill-acent\">Применить</div>\n      </div>\n    </div>\n\n    <div class=\"---tabs__tab ---is-visible\" data-tab=\"1\">\n\n      <div class=\"---t-wrapper\">\n        <table>\n          <tr>\n            <ng-container *ngFor=\"let activeField of activeFields\">\n              <th *ngIf=\"activeField.flag===1\">{{activeField.name}}</th>\n            </ng-container>\n          </tr>\n\n          <tr *ngFor=\"let client of clients | paginate: { itemsPerPage: 10, currentPage: p }\" class=\"cursor-pointer\"\n              (click)=\"clientDetails(client.id)\">\n            <td *ngIf=\"activeFieldsTables['org']===1\">{{client.org}}</td>\n            <td *ngIf=\"activeFieldsTables['fio']===1\">{{client.fio}}</td>\n            <td *ngIf=\"activeFieldsTables['phone']===1\">{{client.phone | telephoneNumber}}</td>\n            <td *ngIf=\"activeFieldsTables['status']===1\">\n              <div [ngClass]=\"{\n              '---purple':client.status===1,\n              '---dark':client.status===2,\n              '---dark-red':client.status===3,\n              '---light-red':client.status===4\n              }\" class=\"---select ---bg-color select-png bg-white\">\n                <select class=\"---select__cur-value w-200\"\n                        (change)=\"changeStatus(client)\"\n                        [(ngModel)]=\"client.status\">\n                  <option class=\"---select__list-item\" *ngFor=\"let status of statusList\" [ngValue]=\"status.val\">\n                    {{status.name}}\n                  </option>\n                </select>\n              </div>\n            </td>\n            <td *ngIf=\"activeFieldsTables['date_create']===1\">{{client.date_create}}</td>\n            <td *ngIf=\"activeFieldsTables['last_contact']===1\">{{client.last_contact}}</td>\n            <td *ngIf=\"activeFieldsTables['source']===1\">{{client.source.name}}</td>\n            <td *ngIf=\"activeFieldsTables['rentals']===1\">{{client.rentals}}</td>\n            <td *ngIf=\"activeFieldsTables['dohod']===1\">\n              <div class=\"---font-sbold\">{{client.dohod| digitsNumbers}} ₽</div>\n            </td>\n            <td *ngIf=\"activeFieldsTables['sale']===1\">\n              <div class=\"---font-sbold\">{{client.sale.name}}</div>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n      <div\n        class=\"---block--bg-white ---block-pagination ---d-flex ---align-items-center ---justify-content-between ---radius-5\">\n        <pagination-controls previousLabel='' nextLabel=\"\" (pageChange)=\"p = $event\"></pagination-controls>\n\n        <div>Всего клиентов — <span class=\"---font-sbold\">{{clients.length | digitsNumbers}}</span></div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.service */ "./src/app/components/client/client.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService, dopParamsService, router) {
        this.clientService = clientService;
        this.dopParamsService = dopParamsService;
        this.router = router;
        this.clients = [];
        this.p = 1;
        this.statusList = [];
        this.sourceList = [];
        this.branches = [];
        // отображение фильтра
        this.showFilters = false;
        // отображение фильтра
        this.showActiveFields = false;
        // параметры фильтра для поиска
        this.filters = {
            type: 'all',
            like: '',
            source: null,
            status: null,
            branch: null,
            date_start: '',
            date_end: '',
            rentals_start: '',
            rentals_end: '',
            dohod_start: '',
            dohod_end: '',
        };
        // список активных полей
        this.activeFields = [];
        // список активных полей
        this.activeFieldsTables = {};
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStatus().then(function (data) {
            _this.statusList = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.dopParamsService.getSource().then(function (data) {
            _this.sourceList = data;
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
        this.clientService.getActiveFields().then(function (data) {
            _this.activeFields = data;
            _this.changeShowFields();
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.getClients();
    };
    ClientComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClient({
            type: this.filters.type,
            like: this.filters.like,
            source: this.filters.source,
            status: this.filters.status,
            branch: this.filters.branch,
            date_start: this.filters.date_start,
            date_end: this.filters.date_end,
            rentals_start: this.filters.rentals_start,
            rentals_end: this.filters.rentals_end,
            dohod_start: this.filters.dohod_start,
            dohod_end: this.filters.dohod_end,
        }).then(function (data) {
            _this.clients = data;
        }, function (error) {
            console.log('Ошибка при получении списка юр. клиентов: ', error);
        });
    };
    // изменение статуса
    ClientComponent.prototype.changeStatus = function (client) {
        this.clientService.updateStatusClientUr({ client_id: client.id, client_status: client.status }).then(function () {
        }, function (error) {
            console.log('Ошибка при изменении статуса у юр. клиента: ', error);
        });
    };
    // отображение фильтра
    ClientComponent.prototype.changeShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    // отображение фильтра
    ClientComponent.prototype.changeActiveFields = function () {
        this.showActiveFields = !this.showActiveFields;
    };
    // список клиентов
    ClientComponent.prototype.changeTypeClients = function (data) {
        this.filters.type = data;
        this.getClients();
    };
    // изменение прав у нового пользователя
    ClientComponent.prototype.changeCheckbox = function (i) {
        this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
        this.changeShowFields();
    };
    // изменение списка активных полей
    ClientComponent.prototype.changeFields = function () {
        this.clientService.changeFields({ data: this.activeFields }).then(function () {
        }, function () {
            console.log('Ошибка при изменение списка отображаемых полей');
        });
    };
    // изменение отображений записекй у полей
    ClientComponent.prototype.changeShowFields = function () {
        for (var _i = 0, _a = this.activeFields; _i < _a.length; _i++) {
            var value = _a[_i];
            this.activeFieldsTables[value.code] = value.flag;
        }
    };
    // очистка фильтра
    ClientComponent.prototype.clearFilter = function () {
        this.filters = {
            type: 'all',
            like: '',
            source: null,
            status: null,
            branch: null,
            date_start: '',
            date_end: '',
            rentals_start: '',
            rentals_end: '',
            dohod_start: '',
            dohod_end: '',
        };
        this.getClients();
    };
    ClientComponent.prototype.clientDetails = function (id) {
        this.router.navigate(['/clients/' + id]);
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/components/client/client.component.html"),
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/client/client.service.ts ***!
  \*****************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(httpService) {
        this.httpService = httpService;
        this.clients = [];
        this.activeFields = [];
    }
    // поиск и получение клиентов
    ClientService.prototype.getClient = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-client', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении списка юр. клиентов', error);
                reject(error);
            });
        });
    };
    // обновление статуса клиента
    ClientService.prototype.updateStatusClientUr = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/update-status-client', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при изменении статуса у юр. клиента', error);
                reject(error);
            });
        });
    };
    // получение активных полей для клиента
    ClientService.prototype.getActiveFields = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.activeFields.length === 0) {
                _this.httpService.prepareQuery('api/get-client-fields', '')
                    .then(function (result) {
                    _this.activeFields = result;
                    resolve(_this.activeFields);
                }, function (error) {
                    console.log('Ошибка при получении отображаемых полей для клиента', error);
                    reject();
                });
            }
            else {
                resolve(_this.activeFields);
            }
        });
    };
    // изменение списка активных полей для таблицы
    ClientService.prototype.changeFields = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/change-client-fields', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при изменение списка отображаемых полей', error);
                reject();
            });
        });
    };
    // изменение списка активных полей для таблицы
    ClientService.prototype.searchClient = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-search-client', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при поиске клиентов', error);
                reject();
            });
        });
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/components/client_create/clientCreate.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/client_create/clientCreate.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-client-in ---row\">\n\n  <div class=\"---col-12 ---col-lg-6 ---form\">\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные о аренде</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Скидка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newClient.sale\">\n              <option class=\"---select__list-item\" *ngFor=\"let discount of discounts\" [ngValue]=\"discount.val\">\n                {{discount.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Город аренды</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newClient.branch\">\n              <option class=\"---select__list-item\" *ngFor=\"let branch of branches\" [ngValue]=\"branch.val\">\n                {{branch.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newClient.status\">\n              <option class=\"---select__list-item\" *ngFor=\"let status of statusList\" [ngValue]=\"status.val\">\n                {{status.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Источник</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newClient.source\">\n              <option class=\"---select__list-item\" *ngFor=\"let source of sources\" [ngValue]=\"source.val\">\n                {{source.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные клиента</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Название компании</label>\n          <input class=\"---input\" [(ngModel)]=\"newClient.name\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Инн</label>\n          <input class=\"---input\" [(ngModel)]=\"newClient.inn\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Род деятельности</label>\n          <input class=\"---input\" [(ngModel)]=\"newClient.occupation\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Адрес регистрации</label>\n          <input class=\"---input\" [(ngModel)]=\"newClient.address\">\n        </div>\n\n        <div class=\"---col-12 ---col-sm-6\">\n          <div class=\"---row ---_sm\">\n\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>ОГРН</label>\n              <input class=\"---input\" [(ngModel)]=\"newClient.ogrn\">\n            </div>\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>БИК</label>\n              <input class=\"---input\" [(ngModel)]=\"newClient.bic\">\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"---col-12 ---col-sm-6\">\n          <div class=\"---row ---_sm\">\n\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>КПП</label>\n              <input class=\"---input\" [(ngModel)]=\"newClient.kpp\">\n            </div>\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>Р/С</label>\n              <input class=\"---input\" [(ngModel)]=\"newClient.schet\">\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Паспортные данные</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Серия номер паспорта</label>\n          <input type=\"text\" class=\"---input\" [(ngModel)]=\"newClient.number_passport\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Кем выдан</label>\n          <input type=\"text\" class=\"---input\" [(ngModel)]=\"newClient.where_passport\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Дата выдачи паспорта</label>\n          <input type=\"date\" class=\"---input\" [(ngModel)]=\"newClient.date_passport\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Адрес прописки</label>\n          <input type=\"text\" class=\"---input\" [(ngModel)]=\"newClient.address_passport\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Контакты</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Руководитель компании</label>\n          <input class=\"---input\" [(ngModel)]=\"newClient.name_chief\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Номер телефона руководителя</label>\n          <input type=\"tel\" class=\"---input\" [(ngModel)]=\"newClient.phone_chief\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Номер телефона ответственного</label>\n          <input type=\"tel\" class=\"---input\" [(ngModel)]=\"newClient.phone\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Номер телефона ответственного</label>\n          <input type=\"tel\" class=\"---input\" [(ngModel)]=\"newClient.phone_2\">\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>E-mail</label>\n          <input [(ngModel)]=\"newClient.email\" class=\"---input\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---btns-wrapper\">\n      <div (click)=\"addClient()\" class=\"---btn ---btn--fill-acent\">Сохранить</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/client_create/clientCreate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/client_create/clientCreate.component.ts ***!
  \********************************************************************/
/*! exports provided: ClientCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateComponent", function() { return ClientCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clientCreate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientCreate.service */ "./src/app/components/client_create/clientCreate.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_global_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage/global-params */ "./src/app/storage/global-params.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientCreateComponent = /** @class */ (function () {
    function ClientCreateComponent(clientCreateService, dopParamsService, globalParamsMessage, globalParams, router) {
        this.clientCreateService = clientCreateService;
        this.dopParamsService = dopParamsService;
        this.globalParamsMessage = globalParamsMessage;
        this.globalParams = globalParams;
        this.router = router;
        // список статусов
        this.statusList = [];
        // список филиалов
        this.branches = [];
        // список скидок
        this.discounts = [];
        // список исчтоников
        this.sources = [];
        this.newClient = {
            sale: null,
            branch: null,
            status: null,
            source: null,
            name: '',
            inn: null,
            occupation: '',
            address: '',
            ogrn: null,
            bic: null,
            kpp: null,
            schet: null,
            name_chief: '',
            phone_chief: '',
            phone: '',
            phone_2: '',
            email: '',
            number_passport: '',
            where_passport: '',
            date_passport: '',
            address_passport: '',
        };
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStatus().then(function (data) {
            _this.statusList = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discounts = data;
        }, function (error) {
            console.log('Ошибка при получении списка скидок: ', error);
        });
        this.dopParamsService.getSource().then(function (data) {
            _this.sources = data;
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
    };
    ClientCreateComponent.prototype.addClient = function () {
        var _this = this;
        if (this.newClient.sale === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать скидку', type: 'error', body: '' };
            return false;
        }
        if (this.newClient.branch === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать город аренды', type: 'error', body: '' };
            return false;
        }
        if (this.newClient.status === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать статус', type: 'error', body: '' };
            return false;
        }
        if (this.newClient.phone_chief === '' && this.newClient.phone === '' && this.newClient.phone_2 === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: '' };
            return false;
        }
        this.clientCreateService.addClient({
            sale: this.newClient.sale,
            branch: this.newClient.branch,
            status: this.newClient.status,
            source: this.newClient.source,
            name: this.newClient.name,
            inn: this.newClient.inn,
            occupation: this.newClient.occupation,
            address: this.newClient.address,
            ogrn: this.newClient.ogrn,
            bic: this.newClient.bic,
            kpp: this.newClient.kpp,
            schet: this.newClient.schet,
            name_chief: this.newClient.name_chief,
            email: this.newClient.email,
            phone_chief: this.newClient.phone_chief.replace(/[\),\(,\-,+,\s]/g, ''),
            phone: this.newClient.phone.replace(/[\),\(,\-,+,\s]/g, ''),
            phone_2: this.newClient.phone_2.replace(/[\),\(,\-,+,\s]/g, '')
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Пользователь успешно добавлен', type: 'success', body: '' };
            _this.globalParams.showModalCreateUser = false;
            _this.router.navigate(['/clients']);
        }, function (error) {
            console.log('Ошибка при добавлении нового пользователей: ', error);
        });
    };
    ClientCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-create',
            template: __webpack_require__(/*! ./clientCreate.component.html */ "./src/app/components/client_create/clientCreate.component.html"),
        }),
        __metadata("design:paramtypes", [_clientCreate_service__WEBPACK_IMPORTED_MODULE_1__["ClientCreateService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_3__["GlobalParamsMessage"],
            _storage_global_params__WEBPACK_IMPORTED_MODULE_5__["GlobalParams"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/client_create/clientCreate.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/client_create/clientCreate.service.ts ***!
  \******************************************************************/
/*! exports provided: ClientCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateService", function() { return ClientCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientCreateService = /** @class */ (function () {
    function ClientCreateService(httpService) {
        this.httpService = httpService;
    }
    ClientCreateService.prototype.addClient = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-client', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении нового клиента', error);
                reject();
            });
        });
    };
    ClientCreateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ClientCreateService);
    return ClientCreateService;
}());



/***/ }),

/***/ "./src/app/components/client_info/clientInfo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/client_info/clientInfo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-client-in ---row\">\n\n  <div class=\"---col-12 ---col-lg-6 ---form\">\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные о аренде</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Скидка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"client.sale\">\n              <option class=\"---select__list-item\" *ngFor=\"let discount of discounts\" [ngValue]=\"discount.val\">\n                {{discount.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Город аренды</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"client.branch\">\n              <option class=\"---select__list-item\" *ngFor=\"let branch of branches\" [ngValue]=\"branch.val\">\n                {{branch.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"client.status\">\n              <option class=\"---select__list-item\" *ngFor=\"let status of statusList\" [ngValue]=\"status.val\">\n                {{status.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Источник</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"client.source\">\n              <option class=\"---select__list-item\" *ngFor=\"let source of sources\" [ngValue]=\"source.val\">\n                {{source.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные клиента</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Название компании</label>\n          <input class=\"---input\" [(ngModel)]=\"client.name\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Инн</label>\n          <input class=\"---input\" [(ngModel)]=\"client.inn\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Род деятельности</label>\n          <input class=\"---input\" [(ngModel)]=\"client.occupation\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Адрес регистрации</label>\n          <input class=\"---input\" [(ngModel)]=\"client.address\">\n        </div>\n\n        <div class=\"---col-12 ---col-sm-6\">\n          <div class=\"---row ---_sm\">\n\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>ОГРН</label>\n              <input class=\"---input\" [(ngModel)]=\"client.ogrn\">\n            </div>\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>БИК</label>\n              <input class=\"---input\" [(ngModel)]=\"client.bic\">\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"---col-12 ---col-sm-6\">\n          <div class=\"---row ---_sm\">\n\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>КПП</label>\n              <input class=\"---input\" [(ngModel)]=\"client.kpp\">\n            </div>\n            <div class=\"---field col ---col-12 ---col-sm-6\">\n              <label>Р/С</label>\n              <input class=\"---input\" [(ngModel)]=\"client.schet\">\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Контакты</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Руководитель компании</label>\n          <input class=\"---input\" [(ngModel)]=\"client.name_chief\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Номер телефона руководителя</label>\n          <input type=\"text\" mask=\"+0 (000) 000 00 00\" class=\"---input\" [(ngModel)]=\"client.phone_chief\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Номер телефона ответственного</label>\n          <input type=\"text\" mask=\"+0 (000) 000 00 00\" class=\"---input\" [(ngModel)]=\"client.phone\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>Номер телефона ответственного</label>\n          <input type=\"text\" mask=\"+0 (000) 000 00 00\" class=\"---input\" [(ngModel)]=\"client.phone_2\">\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6\">\n          <label>E-mail</label>\n          <input [(ngModel)]=\"client.email\" class=\"---input\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---btns-wrapper\">\n      <div (click)=\"changeClient()\" class=\"---btn ---btn--fill-acent\">Обновить</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/client_info/clientInfo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/client_info/clientInfo.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoComponent", function() { return ClientInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clientInfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientInfo.service */ "./src/app/components/client_info/clientInfo.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientInfoComponent = /** @class */ (function () {
    function ClientInfoComponent(clientInfoService, dopParamsService, globalParamsMessage, router) {
        var _this = this;
        this.clientInfoService = clientInfoService;
        this.dopParamsService = dopParamsService;
        this.globalParamsMessage = globalParamsMessage;
        this.router = router;
        // список статусов
        this.statusList = [];
        // список филиалов
        this.branches = [];
        // список скидок
        this.discounts = [];
        // список исчтоников
        this.sources = [];
        this.client = {
            sale: null,
            branch: null,
            status: null,
            source: null,
            name: '',
            inn: null,
            occupation: '',
            address: '',
            ogrn: null,
            bic: null,
            kpp: null,
            schet: null,
            name_chief: '',
            phone_chief: '',
            phone: '',
            phone_2: '',
            email: '',
            number_passport: '',
            where_passport: '',
            date_passport: '',
            address_passport: ''
        };
        this.router.params.subscribe(function (params) {
            _this.clientId = params.id;
        });
    }
    ClientInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStatus().then(function (data) {
            _this.statusList = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discounts = data;
        }, function (error) {
            console.log('Ошибка при получении списка скидок: ', error);
        });
        this.dopParamsService.getSource().then(function (data) {
            _this.sources = data;
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
        this.clientInfoService.getClientInfo({ clientId: this.clientId }).then(function (data) {
            _this.client = data;
        }, function (error) {
            console.log('Ошибка при получении детальной информации по клиенту: ', error);
        });
    };
    ClientInfoComponent.prototype.changeClient = function () {
        var _this = this;
        if (this.client.sale === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать скидку', type: 'error', body: '' };
            return false;
        }
        if (this.client.branch === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать город аренды', type: 'error', body: '' };
            return false;
        }
        if (this.client.status === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать статус', type: 'error', body: '' };
            return false;
        }
        if (this.client.phone_chief === '' && this.client.phone === '' && this.client.phone_2 === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать хотя бы 1 номер телефона', type: 'error', body: '' };
            return false;
        }
        this.clientInfoService.updateClientInfo({
            sale: this.client.sale,
            branch: this.client.branch,
            status: this.client.status,
            source: this.client.source,
            name: this.client.name,
            inn: this.client.inn,
            occupation: this.client.occupation,
            address: this.client.address,
            ogrn: this.client.ogrn,
            bic: this.client.bic,
            kpp: this.client.kpp,
            schet: this.client.schet,
            name_chief: this.client.name_chief,
            phone_chief: this.client.phone_chief.replace(/[\),\(,\-,+,\s]/g, ''),
            phone: this.client.phone.replace(/[\),\(,\-,+,\s]/g, ''),
            phone_2: this.client.phone_2.replace(/[\),\(,\-,+,\s]/g, ''),
            clientId: this.clientId,
            email: this.client.email
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Пользователь успешно изменен', type: 'success', body: '' };
        }, function (error) {
            console.log('Ошибка при добавлении нового пользователей: ', error);
        });
    };
    ClientInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-info',
            template: __webpack_require__(/*! ./clientInfo.component.html */ "./src/app/components/client_info/clientInfo.component.html"),
        }),
        __metadata("design:paramtypes", [_clientInfo_service__WEBPACK_IMPORTED_MODULE_1__["ClientInfoService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_3__["GlobalParamsMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ClientInfoComponent);
    return ClientInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/client_info/clientInfo.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/client_info/clientInfo.service.ts ***!
  \**************************************************************/
/*! exports provided: ClientInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoService", function() { return ClientInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientInfoService = /** @class */ (function () {
    function ClientInfoService(httpService) {
        this.httpService = httpService;
    }
    // получение детальной информации по клиенту
    ClientInfoService.prototype.getClientInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-client-info', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении детальной информации по клиенту', error);
                reject();
            });
        });
    };
    // обновление детальной информации по клиенту
    ClientInfoService.prototype.updateClientInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/update-client-info', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при обновлении детальной информации по клиенту', error);
                reject();
            });
        });
    };
    ClientInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ClientInfoService);
    return ClientInfoService;
}());



/***/ }),

/***/ "./src/app/components/equipments/equipments.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/equipments/equipments.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-client-in ---row\">\n  <div class=\"---col-12 ---col-lg-6 ---form\">\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">О товаре</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Марка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.mark\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsMark of equipmentsMarkList\"\n                      [ngValue]=\"equipmentsMark.val\">\n                {{equipmentsMark.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Модель</label>\n          <input type=\"text\" class=\"---input\" [(ngModel)]=\"equipment.model\">\n        </div>\n      </div>\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Склад</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.stock\">\n              <option class=\"---select__list-item\" *ngFor=\"let stock of stocks\" [ngValue]=\"stock.val\">\n                {{stock.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Тип оборудования</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.type\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsType of equipmentsTypeList\"\n                      [ngValue]=\"equipmentsType.val\">\n                {{equipmentsType.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Категория</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.category\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsCategory of equipmentsCategoryList\"\n                      [ngValue]=\"equipmentsCategory.val\">\n                {{equipmentsCategory.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>номер инструмента</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.tool_number\">\n        </div>\n      </div>\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.status\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsStatus of equipmentsStatusList\"\n                      [ngValue]=\"equipmentsStatus.val\">\n                {{equipmentsStatus.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Количество</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.count\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные на аренду</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Износ оборудования</label>\n          <div class=\"---input ---input--wear ---font-sbold ---d-flex ---align-items-center ---justify-content-between\">\n            <input type=\"text\" class=\"mini-input\" [(ngModel)]=\"equipment.degree_wear\">%\n\n            <div class=\"---d-flex\">\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 9}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 19}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 29}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 39}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 49}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 59}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 69}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 79}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear > 89}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':equipment.degree_wear === 100}\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Цена аренды за сутки</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"equipment.price_per_day\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Цена продажи</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"equipment.selling_price\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Количество прокатов</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.rentals\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Количество ремонтов</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.repairs\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Сумма ремонтов</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"equipment.repairs_sum\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Коэффициент окупаемости</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.payback_ratio\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Выручка</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"equipment.revenue\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Скидка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.discount\">\n              <option class=\"---select__list-item\" *ngFor=\"let discount of discounts\"\n                      [ngValue]=\"discount.val\">\n                {{discount.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Описание товара на сайте</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label></label>\n          <label class=\"---pos-rel ---input ---input--file-upload\">\n            <i class=\"ifont ---icon-camera ---y-pos-abs\"></i>\n            <input type=\"file\" class=\"---d-none\" multiple>\n            <span class=\"---input__file-name\">Загрузить фотографию</span>\n          </label>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Энергия удара, Дж</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.power_energy\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Габаритная длина, мм</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.length\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Сетевой шнур, м</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.network_cord\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Мощность, Вт</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.power\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Частота ударов, уд/мин</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"equipment.frequency_hits\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---btns-wrapper\">\n      <div (click)=\"updateEquipment()\" class=\"---btn ---btn--fill-acent\">Изменить</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/equipments/equipments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/equipments/equipments.component.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsComponent", function() { return EquipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipments.service */ "./src/app/components/equipments/equipments.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EquipmentsComponent = /** @class */ (function () {
    function EquipmentsComponent(dopParamsService, equipmentsService, globalParamsMessage, activatedRoute, router) {
        var _this = this;
        this.dopParamsService = dopParamsService;
        this.equipmentsService = equipmentsService;
        this.globalParamsMessage = globalParamsMessage;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.stocks = [];
        this.equipmentsTypeList = [];
        this.equipmentsCategoryList = [];
        this.equipmentsStatusList = [];
        this.discounts = [];
        this.equipmentsMarkList = [];
        this.equipment = {
            id: null,
            model: '',
            status: '',
            stock: null,
            discount: null,
            type: null,
            category: null,
            tool_number: null,
            count: null,
            mark: null,
            selling_price: '',
            price_per_day: '',
            rentals: 0,
            repairs: 0,
            repairs_sum: '0',
            revenue: '0',
            profit: '0',
            degree_wear: 0,
            payback_ratio: 0,
            power_energy: '',
            length: '',
            network_cord: '',
            power: '',
            frequency_hits: '',
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.equipmentId = params.id;
        });
    }
    EquipmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStock().then(function (data) {
            _this.stocks = data;
        }, function (error) {
            console.log('Ошибка при получении складов: ', error);
        });
        this.equipmentsService.getEquipmentsType().then(function (data) {
            _this.equipmentsTypeList = data;
        }, function (error) {
            console.log('Ошибка при получении списка типов оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsCategory().then(function (data) {
            _this.equipmentsCategoryList = data;
        }, function (error) {
            console.log('Ошибка при получении списка категорий оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsStatus().then(function (data) {
            _this.equipmentsStatusList = data;
        }, function (error) {
            console.log('Ошибка при получении списка статусов оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsMark().then(function (data) {
            _this.equipmentsMarkList = data;
        }, function (error) {
            console.log('Ошибка при получении списка статусов оборудования: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discounts = data;
        }, function (error) {
            console.log('Ошибка при получении списка скидок: ', error);
        });
        this.equipmentsService.getEquipmentInfo({ equipmentId: this.equipmentId }).then(function (data) {
            _this.equipment = data;
        }, function (error) {
            console.log('Ошибка при получении детальной информации по клиенту: ', error);
        });
    };
    EquipmentsComponent.prototype.updateEquipment = function () {
        var _this = this;
        if (this.equipment.model === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать наименование', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.status === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать статус', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.mark === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать марку', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.stock === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать склад', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.type === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать тип оборудования', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.category === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать категорию оборудования', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.count === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать количество оборудования', type: 'error', body: '' };
            return false;
        }
        if (this.equipment.tool_number === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать номер оборудования', type: 'error', body: '' };
            return false;
        }
        this.equipmentsService.updateEquipment({
            id: this.equipment.id,
            model: this.equipment.model,
            status: this.equipment.status,
            stock: this.equipment.stock,
            discount: this.equipment.discount,
            equipmentsType: this.equipment.type,
            equipmentsCategory: this.equipment.category,
            tool_number: this.equipment.tool_number,
            count: this.equipment.count,
            mark: this.equipment.mark,
            selling_price: this.equipment.selling_price,
            price_per_day: this.equipment.price_per_day,
            rentals: this.equipment.rentals,
            repairs: this.equipment.repairs,
            repairs_sum: this.equipment.repairs_sum,
            revenue: this.equipment.revenue,
            profit: this.equipment.profit,
            degree_wear: this.equipment.degree_wear,
            payback_ratio: this.equipment.payback_ratio,
            power_energy: this.equipment.power_energy,
            length: this.equipment.length,
            network_cord: this.equipment.network_cord,
            power: this.equipment.power,
            frequency_hits: this.equipment.frequency_hits,
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Оборудование успешно изменено', type: 'success', body: '' };
            _this.router.navigate(['/stock']);
        }, function (error) {
            console.log('Ошибка при изменении оборудования: ', error);
        });
    };
    EquipmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__(/*! ./equipments.component.html */ "./src/app/components/equipments/equipments.component.html"),
        }),
        __metadata("design:paramtypes", [_services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__["DopParamsService"],
            _equipments_service__WEBPACK_IMPORTED_MODULE_4__["EquipmentsService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_2__["GlobalParamsMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EquipmentsComponent);
    return EquipmentsComponent;
}());



/***/ }),

/***/ "./src/app/components/equipments/equipments.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/equipments/equipments.service.ts ***!
  \*************************************************************/
/*! exports provided: EquipmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsService", function() { return EquipmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentsService = /** @class */ (function () {
    function EquipmentsService(httpService) {
        this.httpService = httpService;
        this.equipmentsTypeList = [];
        this.equipmentsCategoryList = [];
        this.equipmentsAvailabilityList = [];
        this.equipmentsFieldsList = [];
    }
    // получение списка типов товаров
    EquipmentsService.prototype.getEquipmentsType = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.equipmentsTypeList.length === 0) {
                _this.httpService.prepareQuery('api/get-equipments-type', '')
                    .then(function (result) {
                    _this.equipmentsTypeList = result;
                    resolve(_this.equipmentsTypeList);
                }, function (error) {
                    console.log('Ошибка при получении списка типов оборудования', error);
                    reject();
                });
            }
            else {
                resolve(_this.equipmentsTypeList);
            }
        });
    };
    // получение списка категорий товаров
    EquipmentsService.prototype.getEquipmentsCategory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.equipmentsCategoryList.length === 0) {
                _this.httpService.prepareQuery('api/get-equipments-category', '')
                    .then(function (result) {
                    _this.equipmentsCategoryList = result;
                    resolve(_this.equipmentsCategoryList);
                }, function (error) {
                    console.log('Ошибка при получении списка категорий оборудования', error);
                    reject();
                });
            }
            else {
                resolve(_this.equipmentsCategoryList);
            }
        });
    };
    // получение списка статусов
    EquipmentsService.prototype.getEquipmentsStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.equipmentsAvailabilityList.length === 0) {
                _this.httpService.prepareQuery('api/get-equipments-status', '')
                    .then(function (result) {
                    _this.equipmentsAvailabilityList = result;
                    resolve(_this.equipmentsAvailabilityList);
                }, function (error) {
                    console.log('Ошибка при получении списка категорий оборудования', error);
                    reject();
                });
            }
            else {
                resolve(_this.equipmentsAvailabilityList);
            }
        });
    };
    // получение списка товаров
    EquipmentsService.prototype.getEquipments = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-equipments', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении списка оборудований', error);
                reject();
            });
        });
    };
    // получение конкретной информации о товаре
    EquipmentsService.prototype.getEquipmentInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-equipments-info', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении списка оборудований', error);
                reject();
            });
        });
    };
    // получение списка активных полей
    EquipmentsService.prototype.getEquipmentsFields = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.equipmentsFieldsList.length === 0) {
                _this.httpService.prepareQuery('api/get-equipments-fields', '')
                    .then(function (result) {
                    _this.equipmentsFieldsList = result;
                    resolve(result);
                }, function (error) {
                    console.log('Ошибка при получении списка полей для оборудования', error);
                    reject();
                });
            }
            else {
                resolve(_this.equipmentsFieldsList);
            }
        });
    };
    // изменение списка активных полей для таблицы
    EquipmentsService.prototype.changeFields = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/change-equipments-fields', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при изменение списка отображаемых полей', error);
                reject();
            });
        });
    };
    // обновление статуса оборудования
    EquipmentsService.prototype.updateStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-equipments-update-status', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при изменении статуса у оборудования', error);
                reject(error);
            });
        });
    };
    // получение списка марок
    EquipmentsService.prototype.getEquipmentsMark = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-equipment-mark', '')
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении списка марок', error);
                reject(error);
            });
        });
    };
    // обновление информации об оборудовании
    EquipmentsService.prototype.updateEquipment = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/equipments-update', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при изменении информации об оборудовании', error);
                reject(error);
            });
        });
    };
    // изменение списка активных полей для таблицы
    EquipmentsService.prototype.searchEquipments = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-equipments-search', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при поиске товаров', error);
                reject();
            });
        });
    };
    EquipmentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], EquipmentsService);
    return EquipmentsService;
}());



/***/ }),

/***/ "./src/app/components/equipments_create/equipmentsCreate.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/equipments_create/equipmentsCreate.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-client-in ---row\">\n  <div class=\"---col-12 ---col-lg-6 ---form\">\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">О товаре</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Марка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newEquipments.mark\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsMark of equipmentsMarkList\"\n                      [ngValue]=\"equipmentsMark.val\">\n                {{equipmentsMark.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Модель</label>\n          <input type=\"text\" class=\"---input\" [(ngModel)]=\"newEquipments.model\">\n        </div>\n      </div>\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Склад</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newEquipments.stock\">\n              <option class=\"---select__list-item\" *ngFor=\"let stock of stocks\" [ngValue]=\"stock.val\">\n                {{stock.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Тип оборудования</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newEquipments.type\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsType of equipmentsTypeList\"\n                      [ngValue]=\"equipmentsType.val\">\n                {{equipmentsType.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Категория</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newEquipments.category\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsCategory of equipmentsCategoryList\"\n                      [ngValue]=\"equipmentsCategory.val\">\n                {{equipmentsCategory.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>номер инструмента</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.tool_number\">\n        </div>\n      </div>\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Статус</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newEquipments.status\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsStatus of equipmentsStatusList\"\n                      [ngValue]=\"equipmentsStatus.val\">\n                {{equipmentsStatus.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Количество</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.count\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Данные на аренду</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Износ оборудования</label>\n          <div class=\"---input ---input--wear ---font-sbold ---d-flex ---align-items-center ---justify-content-between\">\n            <input type=\"text\" class=\"mini-input\" [(ngModel)]=\"newEquipments.degree_wear\">%\n\n            <div class=\"---d-flex\">\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 9}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 19}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 29}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 39}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 49}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 59}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 69}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 79}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear > 89}\"></div>\n              <div class=\"---dot\" [ngClass]=\"{'---dot--acent':newEquipments.degree_wear === 100}\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Цена аренды за сутки</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"newEquipments.price_per_day\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Цена продажи</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"newEquipments.selling_price\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Количество прокатов</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.rentals\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Количество ремонтов</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.repairs\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Сумма ремонтов</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"newEquipments.repairs_sum\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Коэффициент окупаемости</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.payback_ratio\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Выручка</label>\n          <input type=\"text\" class=\"---input\" mask=\"separator\" [(ngModel)]=\"newEquipments.revenue\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Скидка</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"newEquipments.discount\">\n              <option class=\"---select__list-item\" *ngFor=\"let discount of discounts\"\n                      [ngValue]=\"discount.val\">\n                {{discount.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---data-block\">\n      <div class=\"h2 ---font-sbold\">Описание товара на сайте</div>\n\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label></label>\n          <label class=\"---pos-rel ---input ---input--file-upload\">\n            <i class=\"ifont ---icon-camera ---y-pos-abs\"></i>\n            <input type=\"file\" (change)=\"addPhoto($event)\" class=\"---d-none\">\n            <span class=\"---input__file-name\">Загрузить фотографию</span>\n          </label>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Энергия удара, Дж</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.power_energy\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Габаритная длина, мм</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.length\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Сетевой шнур, м</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.network_cord\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Мощность, Вт</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.power\">\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-md-4 ---col-lg-6\">\n          <label>Частота ударов, уд/мин</label>\n          <input type=\"number\" class=\"---input\" [(ngModel)]=\"newEquipments.frequency_hits\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---btns-wrapper\">\n      <div (click)=\"addEquipment()\" class=\"---btn ---btn--fill-acent\">Добавить</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/equipments_create/equipmentsCreate.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/equipments_create/equipmentsCreate.component.ts ***!
  \****************************************************************************/
/*! exports provided: EquipmentsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsCreateComponent", function() { return EquipmentsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _equipmentsCreate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipmentsCreate.service */ "./src/app/components/equipments_create/equipmentsCreate.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equipments/equipments.service */ "./src/app/components/equipments/equipments.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EquipmentsCreateComponent = /** @class */ (function () {
    function EquipmentsCreateComponent(equipmentsCreateService, dopParamsService, equipmentsService, globalParamsMessage, router) {
        this.equipmentsCreateService = equipmentsCreateService;
        this.dopParamsService = dopParamsService;
        this.equipmentsService = equipmentsService;
        this.globalParamsMessage = globalParamsMessage;
        this.router = router;
        this.stocks = [];
        this.equipmentsTypeList = [];
        this.equipmentsCategoryList = [];
        this.equipmentsStatusList = [];
        this.discounts = [];
        this.equipmentsMarkList = [];
        // загрузка изображения
        this.load_file = [];
        this.fileString = '';
        this.newEquipments = {
            model: '',
            status: '',
            stock: null,
            discount: null,
            type: null,
            category: null,
            tool_number: null,
            count: null,
            mark: null,
            selling_price: '',
            price_per_day: '',
            rentals: 0,
            repairs: 0,
            repairs_sum: '0',
            revenue: '0',
            profit: '0',
            degree_wear: 0,
            payback_ratio: 0,
            power_energy: '',
            length: '',
            network_cord: '',
            power: '',
            frequency_hits: '',
            photo_name: '',
            photo_content: ''
        };
    }
    EquipmentsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStock().then(function (data) {
            _this.stocks = data;
        }, function (error) {
            console.log('Ошибка при получении складов: ', error);
        });
        this.equipmentsService.getEquipmentsType().then(function (data) {
            _this.equipmentsTypeList = data;
        }, function (error) {
            console.log('Ошибка при получении списка типов оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsCategory().then(function (data) {
            _this.equipmentsCategoryList = data;
        }, function (error) {
            console.log('Ошибка при получении списка категорий оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsStatus().then(function (data) {
            _this.equipmentsStatusList = data;
        }, function (error) {
            console.log('Ошибка при получении списка статусов оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsMark().then(function (data) {
            _this.equipmentsMarkList = data;
        }, function (error) {
            console.log('Ошибка при получении списка статусов оборудования: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discounts = data;
        }, function (error) {
            console.log('Ошибка при получении списка скидок: ', error);
        });
    };
    EquipmentsCreateComponent.prototype.addEquipment = function () {
        var _this = this;
        if (this.newEquipments.model === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать наименование', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.status === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать статус', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.mark === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать марку', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.stock === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать склад', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.type === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать тип оборудования', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.category === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать категорию оборудования', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.count === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать количество оборудования', type: 'error', body: '' };
            return false;
        }
        if (this.newEquipments.tool_number === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать номер оборудования', type: 'error', body: '' };
            return false;
        }
        this.equipmentsCreateService.addEquipment({
            model: this.newEquipments.model,
            status: this.newEquipments.status,
            stock: this.newEquipments.stock,
            discount: this.newEquipments.discount,
            equipmentsType: this.newEquipments.type,
            equipmentsCategory: this.newEquipments.category,
            tool_number: this.newEquipments.tool_number,
            count: this.newEquipments.count,
            mark: this.newEquipments.mark,
            selling_price: this.newEquipments.selling_price,
            price_per_day: this.newEquipments.price_per_day,
            rentals: this.newEquipments.rentals,
            repairs: this.newEquipments.repairs,
            repairs_sum: this.newEquipments.repairs_sum,
            revenue: this.newEquipments.revenue,
            profit: this.newEquipments.profit,
            degree_wear: this.newEquipments.degree_wear,
            payback_ratio: this.newEquipments.payback_ratio,
            power_energy: this.newEquipments.power_energy,
            length: this.newEquipments.length,
            network_cord: this.newEquipments.network_cord,
            power: this.newEquipments.power,
            frequency_hits: this.newEquipments.frequency_hits,
            photo: this.newEquipments.photo_name
        }).then(function () {
            if (_this.newEquipments.photo_name !== '') {
                _this.sendFiles();
            }
            else {
                _this.globalParamsMessage.data = { title: 'Оборудование успешно добавлено', type: 'success', body: '' };
                _this.router.navigate(['/stock']);
            }
        }, function (error) {
            console.log('Ошибка при добавлении нового пользователей: ', error);
        });
    };
    // добавить фото
    EquipmentsCreateComponent.prototype.addPhoto = function (event) {
        var target = event.target || event.srcElement;
        for (var j = 0; target.files.length > j; j++) {
            this.load_file = target.files[j];
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this, name);
            reader.readAsBinaryString(this.load_file);
        }
    };
    EquipmentsCreateComponent.prototype._handleReaderLoaded = function (data, readerEvt) {
        var binaryString = readerEvt.target.result;
        this.fileString = btoa(binaryString);
        this.newEquipments.photo_name = this.load_file.name;
        this.newEquipments.photo_content = this.fileString;
    };
    EquipmentsCreateComponent.prototype.sendFiles = function () {
        var _this = this;
        this.equipmentsCreateService.sendOrderFiles({
            file_name: this.newEquipments.photo_name,
            files: this.newEquipments.photo_content
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Оборудование успешно добавлено', type: 'success', body: '' };
            _this.router.navigate(['/stock']);
        }, function (error) {
            console.log('Ошибка при добавлении фотографии оборудования: ', error);
        });
    };
    EquipmentsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-create',
            template: __webpack_require__(/*! ./equipmentsCreate.component.html */ "./src/app/components/equipments_create/equipmentsCreate.component.html"),
        }),
        __metadata("design:paramtypes", [_equipmentsCreate_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentsCreateService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentsService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_4__["GlobalParamsMessage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EquipmentsCreateComponent);
    return EquipmentsCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/equipments_create/equipmentsCreate.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/equipments_create/equipmentsCreate.service.ts ***!
  \**************************************************************************/
/*! exports provided: EquipmentsCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsCreateService", function() { return EquipmentsCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentsCreateService = /** @class */ (function () {
    function EquipmentsCreateService(httpService) {
        this.httpService = httpService;
    }
    EquipmentsCreateService.prototype.addEquipment = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-equipment', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении нового оборудования', error);
                reject();
            });
        });
    };
    EquipmentsCreateService.prototype.sendOrderFiles = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-equipment-photo', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении фотографии оборудования', error);
                reject();
            });
        });
    };
    EquipmentsCreateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], EquipmentsCreateService);
    return EquipmentsCreateService;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"---d-flex\">\n  <div class=\"---copy\">crm.stroika-arenda.ru</div>\n  <a href=\"#\">Политика конфиденциальности</a>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"---d-flex ---justify-content-end ---xl-justify-content-between ---page-header ---pos-rel\">\n\n  <div class=\"---search-form ---d-flex\">\n    <button class=\"ifont ---icon-loop ---y-pos-abs ---search__btn\"></button>\n    <input class=\"---search__input\" placeholder=\"Поиск...\">\n    <i class=\"---js-close-search-form ifont ---icon-close ---y-pos-abs\"></i>\n  </div>\n\n  <div id=\"---menu-trigger\" class=\"---d-flex ---lg-d-none ---align-content-center ---justify-content-center ---y-pos-abs\">\n    <span></span>\n  </div>\n\n  <div class=\"---page-title ---align-self-center ---d-none ---xl-d-block\">Рабочий стол</div>\n\n  <div class=\"---d-flex\">\n    <a href=\"#\" class=\"---h-block ---d-inline-flex ---align-items-center ---search ---js-open-search-form\">\n      <span class=\"---h-block__title ---d-none ---xl-d-block\">Поиск</span>\n      <i class=\"ifont ---icon-loop\"></i>\n    </a>\n\n    <div class=\"---h-block ---d-none ---sm-d-inline-flex ---align-items-center ---in-rent\">\n      <div class=\"---h-block__title ---d-none ---xl-d-block\">В аренде</div>\n      <i class=\"ifont ---icon-electro-plug\"></i>\n      <span class=\"---font-sbold\">284</span>\n    </div>\n\n    <a href=\"#\" class=\"---h-block ---d-inline-flex ---align-items-center ---notifications\">\n      <i class=\"ifont ---icon-bell\"></i>\n      <span class=\"---h-block__title ---d-none ---xl-d-block\">Уведомления</span>\n      <span class=\"---font-sbold ---acent ---d-inline-flex ---align-items-center ---justify-content-center\">1</span>\n    </a>\n\n    <div class=\"---h-block ---d-inline-flex ---align-items-center ---in-rent\">\n      <div class=\"---h-block__title ---d-none ---xl-d-block\">Продажи</div>\n      <i class=\"ifont ---icon-database ---d-none ---sm-d-inline-flex\"></i>\n      <span class=\"---font-sbold\">810 560 ₽</span>\n    </div>\n\n\n\n    <div (click)=\"exit()\" class=\"---exit ---h-block ifont ---icon-exit\"></div>\n    <div routerLink=\"/application-create\" class=\"---btn ---btn--fill-acent ---d-none ---sm-d-block\">\n      Создать заявку\n    </div>\n  </div>\n\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage/session-storage.service */ "./src/app/storage/session-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, sessionStorageService, authService) {
        this.router = router;
        this.sessionStorageService = sessionStorageService;
        this.authService = authService;
    }
    HeaderComponent.prototype.exit = function () {
        var _this = this;
        this.authService.exit().then(function () {
            _this.sessionStorageService.pubId = '';
            _this.router.navigate(['/']);
        }, function (error) {
            console.log('Ошибка при выходе: ', error);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _storage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Главная страница\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/main/main.service.ts ***!
  \*************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainService = /** @class */ (function () {
    function MainService() {
    }
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---logo ---pos-rel ---d-block\">\n  <img data-src=\"assets/imgs/logo.svg\" alt=\"\" class=\"---lazyload ---y-pos-abs\">\n  stroika\n  <span class=\"---d-block\">arenda</span>\n</div>\n\n<nav>\n  <a *ngFor=\"let menu of menuList\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink={{menu.link}} routerLinkActive='---is-active'>\n    <i class=\"ifont ---y-pos-abs\" ngClass={{menu.class}}></i>\n    {{menu.name}}\n  </a>\n</nav>\n\n<div class=\"---btns ---d-block ---sm-d-none\">\n  <div class=\"---in-rent\">\n    В аренде: <b class=\"---font-sbold\">284</b>\n  </div>\n\n  <a href=\"#\" class=\"---btn ---btn--fill-acent ---btn--sm\">Создать заявку</a>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuList = [
            { link: '/', name: 'Рабочий стол', class: '---icon-menu-dashboard' },
            { link: '/rent.php', name: 'Прокат', class: '---icon-menu-rent' },
            { link: '/stock', name: 'Склад', class: '---icon-menu-base' },
            { link: '/clients', name: 'Клиенты', class: '---icon-menu-clients' },
            { link: '/reports.php', name: 'Отчеты', class: '---icon-menu-report' },
            { link: 'settings', name: 'Настройки', class: '---icon-menu-settings' },
            { link: '/finance.php', name: 'Финансы', class: '---icon-menu-finance' },
            { link: 'application', name: 'Заявки', class: '---icon-menu-orders' },
            { link: 'sets', name: 'Наборы', class: '---icon-menu-orders' }
        ];
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/message_alert/global-params-message.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message_alert/global-params-message.ts ***!
  \*******************************************************************/
/*! exports provided: GlobalParamsMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalParamsMessage", function() { return GlobalParamsMessage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalParamsMessage = /** @class */ (function () {
    function GlobalParamsMessage() {
        this.data = {
            title: '',
            body: '',
            type: ''
        };
    }
    GlobalParamsMessage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GlobalParamsMessage);
    return GlobalParamsMessage;
}());



/***/ }),

/***/ "./src/app/components/message_alert/message_alert.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/message_alert/message_alert.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-modal [(clrModalOpen)]=\"data.data.type\" [clrModalSize]=\"'xs'\" class=\"modal-window modal-message\">\n  <div class=\"modal-body\">\n    <div class=\"text-center red-modal\" *ngIf=\"data.data.type==='error'\">\n      <div>{{data.data.title}}</div>\n      <div>{{data.data.body}}</div>\n      <div class=\"btn\" (click)=\"clear()\">Ок, понял</div>\n    </div>\n\n    <div class=\"text-center green-modal\" *ngIf=\"data.data.type==='success'\">\n      <div>{{data.data.title}}</div>\n      <div>{{data.data.body}}</div>\n      <div class=\"btn\" (click)=\"clear()\">Ок, понял</div>\n    </div>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/components/message_alert/message_alert.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/message_alert/message_alert.component.ts ***!
  \*********************************************************************/
/*! exports provided: MessageAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAlertComponent", function() { return MessageAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_params_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageAlertComponent = /** @class */ (function () {
    function MessageAlertComponent(globalParamsMessage) {
        this.globalParamsMessage = globalParamsMessage;
        this.data = globalParamsMessage;
    }
    MessageAlertComponent.prototype.ngOnInit = function () {
    };
    MessageAlertComponent.prototype.clear = function () {
        this.data.data.type = '';
        this.data.data.title = '';
        this.data.data.body = '';
    };
    MessageAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-alert',
            template: __webpack_require__(/*! ./message_alert.component.html */ "./src/app/components/message_alert/message_alert.component.html"),
            styles: [__webpack_require__(/*! ./message_alert.scss */ "./src/app/components/message_alert/message_alert.scss")]
        }),
        __metadata("design:paramtypes", [_global_params_message__WEBPACK_IMPORTED_MODULE_1__["GlobalParamsMessage"]])
    ], MessageAlertComponent);
    return MessageAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/message_alert/message_alert.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/message_alert/message_alert.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sale/sale.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/sale/sale.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---col-12 ---col-xl-7\">\n  <div class=\"---row\">\n    <div class=\"---col-12 ---col-sm-6\">\n      <div class=\"---select\">\n        <select class=\"---select__cur-value\">\n          <option value=\"\">Электроинструменты 1</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"---devider\"></div>\n\n  <div class=\"---sale-list__item ---form ---radius-5 ---block--bg-white\">\n\n    <div class=\"---item__header ---pos-rel\">\n      <div class=\"h3 ---font-sbold\">Скидка 30% при аренде от 30 000 ₽</div>\n\n      <div class=\"---icons ---d-flex ---y-pos-abs\">\n        <a href=\"#\" class=\"ifont ---icon-edit ---acent\"></a>\n        <a href=\"#\" class=\"ifont ---icon-close\"></a>\n      </div>\n    </div>\n    <div class=\"---item__content ---row ---_sm\">\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">Доступно всем клиентам</label>\n      </div>\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">На все категории оборудования</label>\n      </div>\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">Действует автоматически</label>\n      </div>\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">Не суммуриуется с основной скидкой</label>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"---sale-list__item ---form ---radius-5 ---block--bg-white\">\n\n    <div class=\"---item__header ---pos-rel\">\n      <div class=\"h3 ---font-sbold\">Скидка 30% при аренде от 30 000 ₽</div>\n\n      <div class=\"---icons ---d-flex ---y-pos-abs\">\n        <a href=\"#\" class=\"ifont ---icon-edit ---acent\"></a>\n        <a href=\"#\" class=\"ifont ---icon-close\"></a>\n      </div>\n    </div>\n    <div class=\"---item__content ---row ---_sm\">\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">Доступно всем клиентам</label>\n      </div>\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">На все категории оборудования</label>\n      </div>\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">Действует автоматически</label>\n      </div>\n      <div class=\"---field col ---col-12 ---col-sm-6\">\n        <label class=\"---checkbox ---checkbox--dark\">Не суммуриуется с основной скидкой</label>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div class=\"---col-12 ---col-xl-4\">\n  <div class=\"---r-side-add-block ---block--bg-white ---radius-5\">\n    <div class=\"h2 ---font-sbold\">Добавить новую акцию</div>\n\n    <div class=\"---border\"></div>\n\n    <div class=\"---form\">\n      <div class=\"---field\">\n        <label>Название акции</label>\n        <input class=\"---input ---fill--bg\">\n      </div>\n\n      <div class=\"---row\">\n        <div class=\"col ---field ---col-12 ---col-xs-6\">\n          <label>Размер скидки (%)</label>\n          <div class=\"---input ---check ---pos-rel\">\n            <div class=\"---box ---y-pos-abs\"></div>\n            <input class=\"---font-sbold\" disabled>\n          </div>\n        </div>\n        <div class=\"col ---field ---col-12 ---col-xs-6\">\n          <label>или сумма в рублях</label>\n          <div class=\"---input ---check ---pos-rel\">\n            <div class=\"---box ---y-pos-abs\"></div>\n            <input type=\"money\" class=\"---font-sbold\" disabled>\n          </div>\n        </div>\n\n        <div class=\"col ---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Выберите филиал</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\">\n              <option value=\"\">Электроинструменты 1</option>\n              <option value=\"\">Электроинструменты 2</option>\n              <option value=\"\">Электроинструменты 3</option>\n              <option value=\"\">Электроинструменты 4</option>\n              <option value=\"\">Электроинструменты 5</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col ---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Доступность акции</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\">\n              <option value=\"\">Электроинструменты 1</option>\n              <option value=\"\">Электроинструменты 2</option>\n              <option value=\"\">Электроинструменты 3</option>\n              <option value=\"\">Электроинструменты 4</option>\n              <option value=\"\">Электроинструменты 5</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col ---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Категории оборудования</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\">\n              <option value=\"\">Электроинструменты 1</option>\n              <option value=\"\">Электроинструменты 2</option>\n              <option value=\"\">Электроинструменты 3</option>\n              <option value=\"\">Электроинструменты 4</option>\n              <option value=\"\">Электроинструменты 5</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col ---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Действие акции</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\">\n              <option value=\"\">Электроинструменты 1</option>\n              <option value=\"\">Электроинструменты 2</option>\n              <option value=\"\">Электроинструменты 3</option>\n              <option value=\"\">Электроинструменты 4</option>\n              <option value=\"\">Электроинструменты 5</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col ---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Суммируется</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\">\n              <option value=\"\">Электроинструменты 1</option>\n              <option value=\"\">Электроинструменты 2</option>\n              <option value=\"\">Электроинструменты 3</option>\n              <option value=\"\">Электроинструменты 4</option>\n              <option value=\"\">Электроинструменты 5</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---border\"></div>\n\n    <a href=\"#\" class=\"---btn ---btn--fill-acent\">Добавить</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sale/sale.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sale/sale.component.ts ***!
  \***************************************************/
/*! exports provided: SaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleComponent", function() { return SaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaleComponent = /** @class */ (function () {
    function SaleComponent() {
    }
    SaleComponent.prototype.ngOnInit = function () {
    };
    SaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale',
            template: __webpack_require__(/*! ./sale.component.html */ "./src/app/components/sale/sale.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SaleComponent);
    return SaleComponent;
}());



/***/ }),

/***/ "./src/app/components/sets/sets.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/sets/sets.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Статусы\n  <div  *ngFor=\"let status of statusList\">\n    {{status.name}}\n  </div>\n</div>\n<hr>\n<div>\n  Источники\n  <div  *ngFor=\"let source of sourceList\">\n    {{source.name}}\n  </div>\n</div>\n<hr>\n<div>\n  Филиалы\n  <div  *ngFor=\"let branch of branchList\">\n    {{branch.name}}\n  </div>\n</div>\n<hr>\n<div>\n  Склады\n  <div  *ngFor=\"let stock of stocksList\">\n    {{stock.name}}\n  </div>\n</div>\n<hr>\n<div>\n  Скидки\n  <div  *ngFor=\"let discount of discountList\">\n    {{discount.name}}\n  </div>\n</div>\n<hr>\n<div>\n  Права\n  <div  *ngFor=\"let right of rightsList\">\n    {{right.name}}\n  </div>\n</div>\n<hr>\n<div>\n  Роли\n  <div  *ngFor=\"let role of rolesList\">\n    {{role.name}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sets/sets.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sets/sets.component.ts ***!
  \***************************************************/
/*! exports provided: SetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetsComponent", function() { return SetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sets.service */ "./src/app/components/sets/sets.service.ts");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _stock_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock/stock.service */ "./src/app/components/stock/stock.service.ts");
/* harmony import */ var _services_dopParamsChange_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dopParamsChange.service */ "./src/app/services/dopParamsChange.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetsComponent = /** @class */ (function () {
    function SetsComponent(setsService, dopParamsService, stockService, dopParamsChangeService) {
        this.setsService = setsService;
        this.dopParamsService = dopParamsService;
        this.stockService = stockService;
        this.dopParamsChangeService = dopParamsChangeService;
        // список статусов
        this.statusList = [];
        // список филиалов
        this.branchList = [];
        // список складов
        this.stocksList = [];
        // список скидок
        this.discountList = [];
        // список исчтоников
        this.sourceList = [];
        // права пользователя
        this.rightsList = [];
        // роли пользователя
        this.rolesList = [];
    }
    SetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStatus().then(function (data) {
            _this.statusList = data;
        }, function (error) {
            console.log('Ошибка при получении статусов: ', error);
        });
        this.dopParamsService.getSource().then(function (data) {
            _this.sourceList = data;
        }, function (error) {
            console.log('Ошибка при получении источников: ', error);
        });
        this.dopParamsService.getBranch().then(function (data) {
            _this.branchList = data;
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.dopParamsService.getDiscount().then(function (data) {
            _this.discountList = data;
        }, function (error) {
            console.log('Ошибка при получении скидок: ', error);
        });
        this.dopParamsService.getRights().then(function (data) {
            _this.rightsList = data;
        }, function (error) {
            console.log('Ошибка при получении прав для пользователя: ', error);
        });
        this.dopParamsService.getRoles().then(function (data) {
            _this.rolesList = data;
        }, function (error) {
            console.log('Ошибка при получении ролей: ', error);
        });
        this.dopParamsService.getStock().then(function (data) {
            _this.stocksList = data;
        }, function (error) {
            console.log('Ошибка при получении складов: ', error);
        });
    };
    SetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sets',
            template: __webpack_require__(/*! ./sets.component.html */ "./src/app/components/sets/sets.component.html"),
        }),
        __metadata("design:paramtypes", [_sets_service__WEBPACK_IMPORTED_MODULE_1__["SetsService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_2__["DopParamsService"],
            _stock_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"],
            _services_dopParamsChange_service__WEBPACK_IMPORTED_MODULE_4__["DopParamsChangeService"]])
    ], SetsComponent);
    return SetsComponent;
}());



/***/ }),

/***/ "./src/app/components/sets/sets.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/sets/sets.service.ts ***!
  \*************************************************/
/*! exports provided: SetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetsService", function() { return SetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetsService = /** @class */ (function () {
    function SetsService(httpService) {
        this.httpService = httpService;
    }
    SetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], SetsService);
    return SetsService;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-settings ---row ---justify-content-between\">\n\n  <div class=\"---col-12 ---col-xl-7\">\n    <div class=\"---page-switchers h1 ---font-light\">\n      <a (click)=\"changeTab('print')\" [ngClass]=\"{'---is-active':currentTab==='print'}\">Печатные формы</a>\n      <a (click)=\"changeTab('stock')\" [ngClass]=\"{'---is-active':currentTab==='stock'}\">Акции</a>\n      <a (click)=\"changeTab('users')\" [ngClass]=\"{'---is-active':currentTab==='users'}\">Доступ</a>\n    </div>\n  </div>\n\n  <div *ngIf=\"currentTab==='print'\">\n    Печатные формы\n  </div>\n\n  <div *ngIf=\"currentTab==='stock'\">\n    <app-sale class=\"---page-settings ---row ---justify-content-between ng-star-inserted\"></app-sale>\n  </div>\n\n  <div *ngIf=\"currentTab==='users'\">\n    <app-users class=\"---page-settings ---row ---justify-content-between ng-star-inserted\"></app-users>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        // текущий таб
        this.currentTab = 'users';
    }
    // смена экрана
    SettingsComponent.prototype.changeTab = function (data) {
        this.currentTab = data;
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/stock/stock.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/stock/stock.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---page-clients\">\n\n  <div class=\"---tabs ---tabs--finance\">\n    <div class=\"---tabs__switchers-wrapper ---d-flex ---align-items-center ---justify-content-between\">\n      <div class=\"---tabs__switchers ---h1 ---font-light ---d-flex\">\n        <div class=\"---tabs__switcher ---is-active\" (click)=\"changeTypeEquipments('')\">Все позиции</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeEquipments('1')\">В аренде</div>\n        <div class=\"---tabs__switcher\" (click)=\"changeTypeEquipments('2')\">В ремонте</div>\n      </div>\n    </div>\n\n    <div class=\"---h-filters-wrapper ---d-flex ---justify-content-between ---align-items-start\">\n\n      <div class=\"---d-flex ---form ---align-items-start\">\n        <div class=\"---filters ---js-toggle-show ---radius-5 ---d-inline-flex ---align-items-center\"\n             (click)=\"changeShowFilters()\">\n          Фильтры\n          <i class=\"ifont ---icon-menu-finance ---d-none ---sm-d-flex\"></i>\n        </div>\n\n        <div class=\"---filters ---js-toggle-show ---radius-5 ---d-inline-flex ---align-items-center\"\n             (click)=\"changeActiveFields()\">\n          Активные поля\n          <i class=\"ifont ---icon-list ---d-none ---sm-d-flex\"></i>\n        </div>\n\n        <div class=\"---search ---field ---pos-rel\">\n          <input class=\"---input\" placeholder=\"Поиск по складу\" [(ngModel)]=\"filters.like\"\n                 (keyup)=\"getEquipments()\">\n          <button class=\"---y-pos-abs ifont ---icon-loop\"></button>\n        </div>\n      </div>\n\n      <a routerLink='/equipments-create' class=\"---btn ---btn--fill-acent\">Добавить товар</a>\n\n    </div>\n\n    <div *ngIf=\"showFilters\" class=\"---block--bg-white ---block-filter ---radius-5 ---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Склад</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"filters.stock\">\n              <option class=\"---select__list-item\" *ngFor=\"let stock of stocks\" [ngValue]=\"stock.val\">\n                {{stock.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Тип оборудования</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"filters.equipmentsType\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsType of equipmentsTypeList\"\n                      [ngValue]=\"equipmentsType.val\">\n                {{equipmentsType.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Категория</label>\n          <div class=\"---select\">\n            <select class=\"---select__cur-value\" [(ngModel)]=\"filters.equipmentsCategory\">\n              <option class=\"---select__list-item\" *ngFor=\"let equipmentsCategory of equipmentsCategoryList\"\n                      [ngValue]=\"equipmentsCategory.val\">\n                {{equipmentsCategory.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество от</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.count_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество до</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.count_end\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Цена продажи от</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.selling_price_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Цена продажи до</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.selling_price_end\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Цена за сутки от</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.price_per_day_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Цена за сутки до</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.price_per_day_end\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество прокатов от</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.rentals_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество прокатов до</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.rentals_end\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество ремонтов от</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.repairs_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Количество ремонтов до</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.repairs_end\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Сумма ремонтов от</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.repairs_sum_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Сумма ремонтов до</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.repairs_sum_end\">\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Выручка от</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.revenue_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Выручка до</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.revenue_end\">\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Прибыль от</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.profit_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Прибыль до</label>\n          <div class=\"---select\">\n            <input type=\"text\" mask=\"separator\" [(ngModel)]=\"filters.profit_end\">\n          </div>\n        </div>\n\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Степень износа от</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.degree_wear_start\">\n          </div>\n        </div>\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\">\n          <label>Степень износа до</label>\n          <div class=\"---select\">\n            <input type=\"number\" [(ngModel)]=\"filters.degree_wear_end\">\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"---btns ---d-flex\">\n        <div (click)=\"getEquipments()\" class=\"---btn ---btn--fill-acent\">Применить фильтры</div>\n        <div (click)=\"clearFilter()\" class=\"---btn ---btn--border-bg\">\n          Сбросить фильры\n          <i class=\"ifont ---icon-close\"></i>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"showActiveFields\" id=\"active-field\" class=\" ---block--bg-white ---block-filter ---radius-5 ---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-sm-6 ---col-lg-3\" *ngFor=\"let activeField of activeFields; let i = index\">\n          <label for=\"right_{{activeField.code}}\" class=\"---checkbox\" [ngClass]=\"{'---is-active':activeField.flag}\">\n            <input type=\"checkbox\"\n                   id=\"right_{{activeField.code}}\"\n                   (change)=\"changeCheckbox(i)\"\n                   [checked]=\"activeField.flag\">\n            {{activeField.name}}\n          </label>\n        </div>\n\n      </div>\n\n      <div class=\"---btns ---d-flex\">\n        <div (click)=\"changeFields()\" class=\"---btn ---btn--fill-acent\">Применить</div>\n      </div>\n    </div>\n\n    <div class=\"---t-wrapper\">\n      <table>\n        <tr>\n          <ng-container *ngFor=\"let activeField of activeFields\">\n            <th *ngIf=\"activeField.flag===1\">{{activeField.name}}</th>\n          </ng-container>\n        </tr>\n\n        <tr *ngFor=\"let equipment of equipmentsList | paginate: { itemsPerPage: 10, currentPage: p }\"\n            class=\"cursor-pointer\" (click)=\"equipmentDetails(equipment.id)\">\n          <td *ngIf=\"activeFieldsTables['name']===1\">{{equipment.name}}</td>\n          <td *ngIf=\"activeFieldsTables['category']===1\">{{equipment.category}}</td>\n          <td *ngIf=\"activeFieldsTables['stock']===1\">{{equipment.stock}}</td>\n          <td *ngIf=\"activeFieldsTables['type']===1\">{{equipment.type}}</td>\n          <td *ngIf=\"activeFieldsTables['status']===1\">\n            <div class=\"---select\">\n              <select class=\"---select__cur-value\" [(ngModel)]=\"equipment.status\"\n                      (change)=\"changeStatus(equipment)\">\n                <option class=\"---select__list-item\" *ngFor=\"let equipmentsStatus of equipmentsStatusList\"\n                        [ngValue]=\"equipmentsStatus.val\">\n                  {{equipmentsStatus.name}}\n                </option>\n              </select>\n            </div>\n          </td>\n          <td *ngIf=\"activeFieldsTables['selling_price']===1\">{{equipment.selling_price | digitsNumbers}}</td>\n          <td *ngIf=\"activeFieldsTables['price_per_day']===1\">{{equipment.price_per_day | digitsNumbers}}</td>\n          <td *ngIf=\"activeFieldsTables['rentals']===1\">{{equipment.rentals}}</td>\n          <td *ngIf=\"activeFieldsTables['repairs']===1\">{{equipment.repairs}}</td>\n          <td *ngIf=\"activeFieldsTables['repairs_sum']===1\">{{equipment.repairs_sum | digitsNumbers}}</td>\n          <td *ngIf=\"activeFieldsTables['tool_number']===1\">{{equipment.tool_number}}</td>\n          <td *ngIf=\"activeFieldsTables['revenue']===1\">{{equipment.revenue | digitsNumbers}}</td>\n          <td *ngIf=\"activeFieldsTables['profit']===1\">{{equipment.profit | digitsNumbers}}</td>\n          <td *ngIf=\"activeFieldsTables['degree_wear']===1\">{{equipment.degree_wear}}%</td>\n          <td *ngIf=\"activeFieldsTables['payback_ratio']===1\">{{equipment.payback_ratio}}%</td>\n        </tr>\n      </table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/stock/stock.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/stock/stock.component.ts ***!
  \*****************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock.service */ "./src/app/components/stock/stock.service.ts");
/* harmony import */ var _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equipments/equipments.service */ "./src/app/components/equipments/equipments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockComponent = /** @class */ (function () {
    function StockComponent(stockService, dopParamsService, equipmentsService, router) {
        this.stockService = stockService;
        this.dopParamsService = dopParamsService;
        this.equipmentsService = equipmentsService;
        this.router = router;
        this.p = 1;
        this.stocks = [];
        this.equipmentsTypeList = [];
        this.equipmentsCategoryList = [];
        this.equipmentsStatusList = [];
        // отображение фильтра
        this.showFilters = false;
        // отображение фильтра
        this.showActiveFields = false;
        // список активных полей
        this.activeFields = [];
        // список активных полей
        this.activeFieldsTables = {};
        this.equipmentsList = [];
        this.filters = {
            status: '',
            like: '',
            stock: null,
            equipmentsType: null,
            equipmentsCategory: null,
            count_start: null,
            count_end: null,
            selling_price_start: '',
            selling_price_end: '',
            price_per_day_start: '',
            price_per_day_end: '',
            rentals_start: null,
            rentals_end: null,
            repairs_start: null,
            repairs_end: null,
            repairs_sum_start: '',
            repairs_sum_end: '',
            revenue_start: '',
            revenue_end: '',
            profit_start: '',
            profit_end: '',
            degree_wear_start: null,
            degree_wear_end: null,
        };
    }
    StockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getStock().then(function (data) {
            _this.stocks = data;
        }, function (error) {
            console.log('Ошибка при получении складов: ', error);
        });
        this.equipmentsService.getEquipmentsType().then(function (data) {
            _this.equipmentsTypeList = data;
        }, function (error) {
            console.log('Ошибка при получении списка типов оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsCategory().then(function (data) {
            _this.equipmentsCategoryList = data;
        }, function (error) {
            console.log('Ошибка при получении списка категорий оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsStatus().then(function (data) {
            _this.equipmentsStatusList = data;
        }, function (error) {
            console.log('Ошибка при получении списка статусов оборудования: ', error);
        });
        this.equipmentsService.getEquipmentsFields().then(function (data) {
            _this.activeFields = data;
            _this.changeShowFields();
        }, function (error) {
            console.log('Ошибка при получении списка полей оборудования: ', error);
        });
        this.getEquipments();
    };
    // список оборудования
    StockComponent.prototype.changeTypeEquipments = function (data) {
        this.filters.status = data;
        this.getEquipments();
    };
    // отображение фильтра
    StockComponent.prototype.changeShowFilters = function () {
        this.showFilters = !this.showFilters;
    };
    // изменение статуса
    StockComponent.prototype.changeStatus = function (equipment) {
        this.equipmentsService.updateStatus({ equipment_id: equipment.id, equipment_status: equipment.status }).then(function () {
        }, function (error) {
            console.log('Ошибка при изменении статуса у оборудования: ', error);
        });
    };
    // отображение фильтра
    StockComponent.prototype.changeActiveFields = function () {
        this.showActiveFields = !this.showActiveFields;
    };
    // изменение прав у нового пользователя
    StockComponent.prototype.changeCheckbox = function (i) {
        this.activeFields[i].flag = this.activeFields[i].flag === 0 ? 1 : 0;
        this.changeShowFields();
    };
    // изменение отображений записекй у полей
    StockComponent.prototype.changeShowFields = function () {
        for (var _i = 0, _a = this.activeFields; _i < _a.length; _i++) {
            var value = _a[_i];
            this.activeFieldsTables[value.code] = value.flag;
        }
    };
    // изменение списка активных полей
    StockComponent.prototype.changeFields = function () {
        var _this = this;
        this.equipmentsService.changeFields({ data: this.activeFields }).then(function () {
            _this.showActiveFields = false;
        }, function () {
            console.log('Ошибка при изменение списка отображаемых полей');
        });
    };
    // получение списка оборудования
    StockComponent.prototype.getEquipments = function () {
        var _this = this;
        this.equipmentsService.getEquipments({
            like: this.filters.like,
            stock: this.filters.stock,
            equipmentsType: this.filters.equipmentsType,
            equipmentsCategory: this.filters.equipmentsCategory,
            status: this.filters.status,
            count_start: this.filters.count_start,
            count_end: this.filters.count_end,
            selling_price_start: this.filters.selling_price_start,
            selling_price_end: this.filters.selling_price_end,
            price_per_day_start: this.filters.price_per_day_start,
            price_per_day_end: this.filters.price_per_day_end,
            rentals_start: this.filters.rentals_start,
            rentals_end: this.filters.rentals_end,
            repairs_start: this.filters.repairs_start,
            repairs_end: this.filters.repairs_end,
            repairs_sum_start: this.filters.repairs_sum_start,
            repairs_sum_end: this.filters.repairs_sum_end,
            revenue_start: this.filters.revenue_start,
            revenue_end: this.filters.revenue_end,
            profit_start: this.filters.profit_start,
            profit_end: this.filters.profit_end,
            degree_wear_start: this.filters.degree_wear_start,
            degree_wear_end: this.filters.degree_wear_end,
        }).then(function (data) {
            _this.equipmentsList = data;
        }, function (error) {
            console.log('Ошибка при получении списка оборудований: ', error);
        });
    };
    // очистка фильтра
    StockComponent.prototype.clearFilter = function () {
        this.filters = {
            like: '',
            stock: null,
            equipmentsType: null,
            equipmentsCategory: null,
            status: '',
            count_start: null,
            count_end: null,
            selling_price_start: '',
            selling_price_end: '',
            price_per_day_start: '',
            price_per_day_end: '',
            rentals_start: null,
            rentals_end: null,
            repairs_start: null,
            repairs_end: null,
            repairs_sum_start: '',
            repairs_sum_end: '',
            revenue_start: '',
            revenue_end: '',
            profit_start: '',
            profit_end: '',
            degree_wear_start: null,
            degree_wear_end: null,
        };
        this.getEquipments();
    };
    StockComponent.prototype.equipmentDetails = function (index) {
        this.router.navigate(['/equipments/' + index]);
    };
    StockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! ./stock.component.html */ "./src/app/components/stock/stock.component.html"),
        }),
        __metadata("design:paramtypes", [_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__["DopParamsService"],
            _equipments_equipments_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StockComponent);
    return StockComponent;
}());



/***/ }),

/***/ "./src/app/components/stock/stock.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/stock/stock.service.ts ***!
  \***************************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockService = /** @class */ (function () {
    function StockService(httpService) {
        this.httpService = httpService;
    }
    // добавление склада
    StockService.prototype.addStock = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-stock', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении склада', error);
                reject();
            });
        });
    };
    // удаление склада
    StockService.prototype.deleteStock = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-stock', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении склада', error);
                reject();
            });
        });
    };
    StockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"---col-12 ---col-xl-7\">\n  <div class=\"---row\">\n    <div class=\"---col-12 ---col-sm-6\">\n      <div class=\"---select\">\n        <select class=\"---select__cur-value\" (change)=\"selectUsers(currentBranch)\" [(ngModel)]=\"currentBranch\">\n          <option class=\"---select__list-item\" *ngFor=\"let branch of branches\" [ngValue]=\"branch\">\n            {{branch.name}}\n          </option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"---devider\"></div>\n\n\n  <div class=\"---docs-wrapper\" *ngIf=\"usersAdmin.length>0\">\n    <div class=\"h2 ---font-sbold\">Администраторы</div>\n\n    <div class=\"---doc-item ---doc-item--avatar ---pos-rel ---radius-5\" *ngFor=\"let user of usersAdmin\">\n      <i class=\"---icon ifont ---icon-head-linear ---y-pos-abs\"></i>\n\n      <div class=\"---title ---font-sbold\">{{user.fio}}</div>\n      <div class=\"---date\">{{user.phone|telephoneNumber}} / {{user.email}}</div>\n\n      <div class=\"---icons ---y-pos-abs ---d-flex\">\n        <a href=\"#\" class=\"---history ---d-inline-flex ---align-items-center\">История</a>\n        <div (click)=\"changeUser(user)\" class=\"ifont ---icon-edit ---acent\"></div>\n        <a href=\"#\" class=\"ifont ---icon-close\"></a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"---docs-wrapper\" *ngIf=\"usersManager.length>0\">\n    <div class=\"h2 ---font-sbold\">Менеджеры</div>\n    <div class=\"---doc-item ---doc-item--avatar ---pos-rel ---radius-5\" *ngFor=\"let user of usersManager\">\n      <i class=\"---icon ifont ---icon-head-linear ---y-pos-abs\"></i>\n\n      <div class=\"---title ---font-sbold\">{{user.fio}}</div>\n      <div class=\"---date\">{{user.phone|telephoneNumber}} / {{user.email}}</div>\n\n      <div class=\"---icons ---y-pos-abs ---d-flex\">\n        <a href=\"#\" class=\"---history ---d-inline-flex ---align-items-center\">История</a>\n        <div (click)=\"changeUser(user)\" class=\"ifont ---icon-edit ---acent\"></div>\n        <a href=\"#\" class=\"ifont ---icon-close\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"---col-12 ---col-xl-4\">\n  <div class=\"---r-side-add-block ---block--bg-white ---radius-5\">\n    <div class=\"h2 ---font-sbold\">{{newUser.fio}}</div>\n\n    <div class=\"---border\"></div>\n\n    <div class=\"---form\">\n      <div class=\"---row\">\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Выберите филиал</label>\n          <select class=\"---select__cur-value\" [(ngModel)]=\"newUser.branch_id\">\n            <option class=\"---select__list-item\" *ngFor=\"let branch of branches\" [ngValue]=\"branch.val\">\n              {{branch.name}}\n            </option>\n          </select>\n        </div>\n        <div class=\"---field ---col-12 ---col-xs-6 ---col-xl-12\">\n          <label>Выберите роль</label>\n          <select class=\"---select__cur-value\" [(ngModel)]=\"newUser.user_type\">\n            <option class=\"---select__list-item\" *ngFor=\"let role of roles\" [ngValue]=\"role.val\">\n              {{role.name}}\n            </option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"---border ---border-mt0\"></div>\n\n      <div class=\"---row ---_sm\">\n        <div class=\"---field col ---col-12 ---col-xs-6 ---col-md-4 ---col-xl-6\">\n          <label>ФИО</label>\n          <input [(ngModel)]=\"newUser.name_lastName\" class=\"---input ---fill--bg\">\n        </div>\n        <div class=\"---field col ---col-12 ---col-xs-6 ---col-md-4 ---col-xl-6\">\n          <label>Пароль</label>\n          <input [(ngModel)]=\"newUser.pass\" class=\"---input ---fill--bg\">\n        </div>\n        <div class=\"---field col ---col-12 ---col-xs-6 ---col-md-4 ---col-xl-6\">\n          <label>Номер телфона</label>\n          <input [(ngModel)]=\"newUser.phone\" type=\"text\" mask=\"+0 (000) 000 00 00\" class=\"---input ---fill--bg\">\n        </div>\n        <div class=\"---field col ---col-12 ---col-xs-6 ---col-md-4 ---col-xl-6\">\n          <label>E-mail</label>\n          <input [(ngModel)]=\"newUser.email\" class=\"---input ---fill--bg\">\n        </div>\n      </div>\n\n      <div class=\"---border ---border-mt0\"></div>\n\n      <div class=\"---row ---_sm\">\n        <div class=\"col ---col-12 ---col-xs-6 checkbox-style\" *ngFor=\"let right of rights; let i = index\">\n          <label for=\"right_{{right.val}}\" class=\"---checkbox\" [ngClass]=\"{'---is-active':right.checked}\">\n            <input type=\"checkbox\"\n                   id=\"right_{{right.val}}\"\n                   (change)=\"changeCheckbox(i)\"\n                   [checked]=\"right.checked\">\n            {{right.name}}\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"---border ---border-mt0\"></div>\n\n    <div (click)=\"addNewUser()\" class=\"---btn ---btn--fill-acent\">{{newUser.btn}}</div>\n\n    <div (click)=\"clear()\" class=\"---btn ---btn--fill-acent\">Новый сотрудник</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dopParams.service */ "./src/app/services/dopParams.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/components/users/users.service.ts");
/* harmony import */ var _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, dopParamsService, globalParamsMessage) {
        this.usersService = usersService;
        this.dopParamsService = dopParamsService;
        this.globalParamsMessage = globalParamsMessage;
        // список филиалов
        this.branches = [];
        // список ролей
        this.roles = [];
        // список прав
        this.rights = [];
        // выбранный филиал
        this.currentBranch = { val: null, name: '' };
        // пользователи
        this.usersAdmin = [];
        this.usersManager = [];
        // объект для создания нового пользователя
        this.newUser = {
            id: null,
            fio: 'Добавить сотрудника',
            name_lastName: '',
            pass: '',
            user_type: { val: null, name: '' },
            branch_id: { val: null, name: '' },
            email: '',
            phone: '',
            user_right: [],
            btn: 'Создать'
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dopParamsService.getBranch().then(function (data) {
            _this.branches = data;
            _this.currentBranch = data[0];
            _this.newUser.branch_id = data[0];
            _this.selectUsers(_this.currentBranch);
        }, function (error) {
            console.log('Ошибка при получении филиалов: ', error);
        });
        this.dopParamsService.getRoles().then(function (data) {
            _this.roles = data;
        }, function (error) {
            console.log('Ошибка при получении ролей: ', error);
        });
        this.dopParamsService.getRights().then(function (data) {
            _this.rights = data;
        }, function (error) {
            console.log('Ошибка при получении прав для пользователя: ', error);
        });
    };
    // выбор филиала для вывода списка пользователей
    UsersComponent.prototype.selectUsers = function (branch) {
        var _this = this;
        this.usersService.getUsers({ branch: branch.val }).then(function (data) {
            _this.usersAdmin = [];
            _this.usersManager = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var value = data_1[_i];
                if (value.user_type === 1) {
                    _this.usersAdmin.push(value);
                }
                else {
                    _this.usersManager.push(value);
                }
            }
        }, function (error) {
            console.log('Ошибка при получении пользователей: ', error);
        });
    };
    // изменение прав у нового пользователя
    UsersComponent.prototype.changeCheckbox = function (i) {
        this.rights[i].checked = !this.rights[i].checked;
    };
    // добавление нового пользователя
    UsersComponent.prototype.addNewUser = function () {
        var _this = this;
        if (this.newUser.name_lastName === '') {
            this.globalParamsMessage.data = { title: 'Необходимо указать фио сотрудника', type: 'error', body: '' };
            return false;
        }
        if (this.newUser.pass === '' && this.newUser.id === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать пароль сотрудника', type: 'error', body: '' };
            return false;
        }
        if (this.newUser.phone === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать телефон сотрудника', type: 'error', body: '' };
            return false;
        }
        if (this.newUser.branch_id === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать филиал сотрудника', type: 'error', body: '' };
            return false;
        }
        if (this.newUser.user_type === null) {
            this.globalParamsMessage.data = { title: 'Необходимо указать роль сотрудника', type: 'error', body: '' };
            return false;
        }
        this.newUser.user_right = [];
        for (var _i = 0, _a = this.rights; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.checked) {
                this.newUser.user_right.push(value.val);
            }
        }
        this.usersService.addUsers({
            id: this.newUser.id,
            fio: this.newUser.name_lastName,
            pass: this.newUser.pass,
            phone: this.newUser.phone.replace(/[\),\(,\-,+,\s]/g, ''),
            branch_id: this.newUser.branch_id,
            user_type: this.newUser.user_type,
            email: this.newUser.email,
            user_right: this.newUser.user_right
        }).then(function () {
            _this.globalParamsMessage.data = { title: 'Пользователь успешно добавлен', type: 'success', body: '' };
            _this.clear();
            _this.selectUsers(_this.currentBranch);
        }, function (error) {
            console.log('Ошибка при добавлении нового пользователей: ', error);
        });
    };
    // правка пользоввателя
    UsersComponent.prototype.changeUser = function (client) {
        this.clear();
        this.newUser.id = client.id;
        this.newUser.fio = client.fio;
        this.newUser.name_lastName = client.fio;
        this.newUser.branch_id = client.branch_id;
        this.newUser.user_type = client.user_type;
        this.newUser.email = client.email;
        this.newUser.phone = client.phone;
        this.newUser.btn = 'Изменить';
        for (var _i = 0, _a = this.rights; _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, _c = client.rights; _b < _c.length; _b++) {
                var value2 = _c[_b];
                if (value2 === value.val) {
                    value.checked = true;
                }
            }
        }
    };
    UsersComponent.prototype.clear = function () {
        this.newUser = {
            id: null,
            fio: 'Добавить сотрудника',
            name_lastName: '',
            pass: '',
            user_type: null,
            branch_id: null,
            email: '',
            phone: '',
            user_right: [],
            btn: 'Создать'
        };
        for (var _i = 0, _a = this.rights; _i < _a.length; _i++) {
            var value = _a[_i];
            value.checked = false;
        }
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_dopParams_service__WEBPACK_IMPORTED_MODULE_1__["DopParamsService"],
            _message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_3__["GlobalParamsMessage"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/users/users.service.ts ***!
  \***************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(httpService) {
        this.httpService = httpService;
    }
    UsersService.prototype.getUsers = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/get-users', data)
                .then(function (result) {
                resolve(result);
            }, function (error) {
                console.log('Ошибка при получении пользователей', error);
                reject();
            });
        });
    };
    UsersService.prototype.addUsers = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-users', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении нового пользователя', error);
                reject();
            });
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/pipes/digits_numbers.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/digits_numbers.pipe.ts ***!
  \**********************************************/
/*! exports provided: DigitsNumbersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitsNumbersPipe", function() { return DigitsNumbersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DigitsNumbersPipe = /** @class */ (function () {
    function DigitsNumbersPipe() {
    }
    DigitsNumbersPipe.prototype.transform = function (value) {
        value = String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        return value;
    };
    DigitsNumbersPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'digitsNumbers'
        })
    ], DigitsNumbersPipe);
    return DigitsNumbersPipe;
}());



/***/ }),

/***/ "./src/app/pipes/telephone_number.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/telephone_number.pipe.ts ***!
  \************************************************/
/*! exports provided: TelephoneNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelephoneNumberPipe", function() { return TelephoneNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TelephoneNumberPipe = /** @class */ (function () {
    function TelephoneNumberPipe() {
    }
    TelephoneNumberPipe.prototype.transform = function (value) {
        var country = value.substr(0, 1);
        var city = value.substr(1, 3);
        var number = value.substr(4, 3);
        var number2 = value.substr(7, 2);
        var number3 = value.substr(9, 2);
        return "+ " + country + "(" + city + ")-" + number + "-" + number2 + "-" + number3;
    };
    TelephoneNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'telephoneNumber'
        })
    ], TelephoneNumberPipe);
    return TelephoneNumberPipe;
}());



/***/ }),

/***/ "./src/app/services/dopParams.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dopParams.service.ts ***!
  \***********************************************/
/*! exports provided: DopParamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DopParamsService", function() { return DopParamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DopParamsService = /** @class */ (function () {
    function DopParamsService(httpService) {
        this.httpService = httpService;
        this.source = [];
        this.status = [];
        this.branch = [];
        this.rights = [];
        this.roles = [];
        this.stock = [];
        this.discount = [];
    }
    // получение источников
    DopParamsService.prototype.getSource = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.source.length === 0) {
                _this.httpService.prepareQuery('api/get-source')
                    .then(function (result) {
                    _this.source = result;
                    resolve(_this.source);
                }, function (error) {
                    console.log('Ошибка при получении источников', error);
                    reject();
                });
            }
            else {
                resolve(_this.source);
            }
        });
    };
    // получение статусов
    DopParamsService.prototype.getStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.status.length === 0) {
                _this.httpService.prepareQuery('api/get-status', '')
                    .then(function (result) {
                    _this.status = result;
                    resolve(_this.status);
                }, function (error) {
                    console.log('Ошибка при получении статусов', error);
                    reject();
                });
            }
            else {
                resolve(_this.status);
            }
        });
    };
    // получение филиалов
    DopParamsService.prototype.getBranch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.branch.length === 0) {
                _this.httpService.prepareQuery('api/get-branch', '')
                    .then(function (result) {
                    _this.branch = result;
                    resolve(_this.branch);
                }, function (error) {
                    console.log('Ошибка при получении филиалов', error);
                    reject();
                });
            }
            else {
                resolve(_this.branch);
            }
        });
    };
    // получение списка складов
    DopParamsService.prototype.getStock = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.stock.length === 0) {
                _this.httpService.prepareQuery('api/get-stock', '')
                    .then(function (result) {
                    _this.stock = result;
                    resolve(_this.stock);
                }, function (error) {
                    console.log('Ошибка при получении списка складов', error);
                    reject();
                });
            }
            else {
                resolve(_this.stock);
            }
        });
    };
    // получение ролей
    DopParamsService.prototype.getRoles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.roles.length === 0) {
                _this.httpService.prepareQuery('api/get-roles', '')
                    .then(function (result) {
                    _this.roles = result;
                    resolve(_this.roles);
                }, function (error) {
                    console.log('Ошибка при получении ролей', error);
                    reject();
                });
            }
            else {
                resolve(_this.roles);
            }
        });
    };
    // получение прав
    DopParamsService.prototype.getRights = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.rights.length === 0) {
                _this.httpService.prepareQuery('api/get-rights', '')
                    .then(function (result) {
                    _this.rights = result;
                    resolve(_this.rights);
                }, function (error) {
                    console.log('Ошибка при получении прав для пользователя', error);
                    reject();
                });
            }
            else {
                resolve(_this.rights);
            }
        });
    };
    // получение скидок
    DopParamsService.prototype.getDiscount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.discount.length === 0) {
                _this.httpService.prepareQuery('api/get-discount', '')
                    .then(function (result) {
                    _this.discount = result;
                    resolve(_this.discount);
                }, function (error) {
                    console.log('Ошибка при получении списка скидок', error);
                    reject();
                });
            }
            else {
                resolve(_this.discount);
            }
        });
    };
    DopParamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DopParamsService);
    return DopParamsService;
}());



/***/ }),

/***/ "./src/app/services/dopParamsChange.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/dopParamsChange.service.ts ***!
  \*****************************************************/
/*! exports provided: DopParamsChangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DopParamsChangeService", function() { return DopParamsChangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/http/http.service */ "./src/app/utils/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DopParamsChangeService = /** @class */ (function () {
    function DopParamsChangeService(httpService) {
        this.httpService = httpService;
    }
    // добавление статуса
    DopParamsChangeService.prototype.addStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-status', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении статуса', error);
                reject();
            });
        });
    };
    // удаление статуса
    DopParamsChangeService.prototype.deleteStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-status', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении статуса', error);
                reject();
            });
        });
    };
    // добавление источника
    DopParamsChangeService.prototype.addSource = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-source', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении источника', error);
                reject();
            });
        });
    };
    // удаление источника
    DopParamsChangeService.prototype.deleteSource = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-source', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении источника', error);
                reject();
            });
        });
    };
    // добавление филиала
    DopParamsChangeService.prototype.addBranch = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-branch', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении филиала', error);
                reject();
            });
        });
    };
    // удаление филиала
    DopParamsChangeService.prototype.deleteBranch = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-branch', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении филиала', error);
                reject();
            });
        });
    };
    // добавление скидки
    DopParamsChangeService.prototype.addDiscount = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-discount', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении скидки', error);
                reject();
            });
        });
    };
    // удаление скидки
    DopParamsChangeService.prototype.deleteDiscount = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-discount', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении скидки', error);
                reject();
            });
        });
    };
    // добавление роли
    DopParamsChangeService.prototype.addRoles = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-roles', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении роли', error);
                reject();
            });
        });
    };
    // удаление роли
    DopParamsChangeService.prototype.deleteRoles = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-roles', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении роли', error);
                reject();
            });
        });
    };
    // добавление права
    DopParamsChangeService.prototype.addRights = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/add-rights', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при добавлении права', error);
                reject();
            });
        });
    };
    // удаление права
    DopParamsChangeService.prototype.deleteRights = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.prepareQuery('api/delete-rights', data)
                .then(function () {
                resolve();
            }, function (error) {
                console.log('Ошибка при удалении права', error);
                reject();
            });
        });
    };
    DopParamsChangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_utils_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DopParamsChangeService);
    return DopParamsChangeService;
}());



/***/ }),

/***/ "./src/app/storage/global-params.ts":
/*!******************************************!*\
  !*** ./src/app/storage/global-params.ts ***!
  \******************************************/
/*! exports provided: GlobalParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalParams", function() { return GlobalParams; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalParams = /** @class */ (function () {
    function GlobalParams() {
        this.checkAuth = false;
        // отображение модального окна создания пользователя
        this.showModalCreateUser = false;
    }
    GlobalParams = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GlobalParams);
    return GlobalParams;
}());



/***/ }),

/***/ "./src/app/storage/session-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/storage/session-storage.service.ts ***!
  \****************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
        this._pubId = '';
    }
    Object.defineProperty(SessionStorageService.prototype, "pubId", {
        get: function () {
            return this._pubId;
        },
        set: function (value) {
            this._pubId = value;
        },
        enumerable: true,
        configurable: true
    });
    SessionStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "./src/app/utils/http/http.service.ts":
/*!********************************************!*\
  !*** ./src/app/utils/http/http.service.ts ***!
  \********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/message_alert/global-params-message */ "./src/app/components/message_alert/global-params-message.ts");
/* harmony import */ var _storage_session_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage/session-storage.service */ "./src/app/storage/session-storage.service.ts");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpService = /** @class */ (function () {
    function HttpService(http, sessionStorage, globalParamsMessage) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        this.globalParamsMessage = globalParamsMessage;
    }
    HttpService_1 = HttpService;
    HttpService.handlerError = function (error) {
        if (error === void 0) { error = {}; }
        console.log('Ошибка после http-запроса', error);
        var text_error;
        if (typeof error.status !== 'undefined') {
            if (error.status === 0) {
                text_error = 'Неизвестная ошибка МИБ';
            }
            else if (error.status === 200) {
                text_error = error.body.json();
            }
            else if (error.status === 404) {
                text_error = 'Страница не найдена';
            }
            else if (error.status === 500) {
                text_error = 'МИБ временно не доступен';
                throw { name: 'MIB', message: 'МИБ временно не доступен' };
            }
            else {
                text_error = '';
            }
        }
        else {
            text_error = '';
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(text_error);
    };
    HttpService.prototype.prepareQuery = function (url, data) {
        var _this = this;
        if (url === void 0) { url = 'noUrl'; }
        if (data === void 0) { data = ''; }
        if (data !== '') {
            console.log('Отправляем данные: ', data);
            data = JSON.stringify(data);
            data = js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].encode(data);
        }
        return new Promise(function (resolve, reject) {
            _this.sendPostQuery(url, data).subscribe(function (result) {
                console.log('HttpService Ответ получен: ', result);
                if (result.status === 'OK') {
                    if (typeof result.data !== 'undefined') {
                        var rez = atob(result.data);
                        rez = JSON.parse(rez);
                        console.log('Результат ответа: ', rez);
                        resolve(rez);
                    }
                    else {
                        resolve(result.status);
                    }
                    if (typeof result.session_id !== 'undefined') {
                        _this.sessionStorage.pubId = result.session_id;
                    }
                }
                else if (result.status === 'ERROR') {
                    _this.globalParamsMessage.data = { title: 'Ошибка', body: result.msg, type: 'error' };
                    reject();
                }
                else {
                    _this.globalParamsMessage.data = { title: 'Ошибка', body: 'Система врменно недостпуна', type: 'error' };
                    reject();
                }
            }, function (error) {
                console.log('Ошибка после отправки запроса в МИБ', error);
                _this.globalParamsMessage.data = { title: 'Ошибка', body: 'Система врменно недостпуна', type: 'error' };
                reject(error);
            });
        });
    };
    HttpService.prototype.sendPostQuery = function (api, data) {
        var request = {
            sessionId: this.sessionStorage.pubId,
            prBlock: data
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        return this.http.post('http://artdekor-kzn.ru/' + api, request, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(HttpService_1.handlerError));
    };
    var HttpService_1;
    HttpService = HttpService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_session_storage_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"],
            _components_message_alert_global_params_message__WEBPACK_IMPORTED_MODULE_4__["GlobalParamsMessage"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /www/crm_stroika_arenda/client_arenda/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map