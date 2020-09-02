(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ebillsubscribe_ebillsubscribe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ebillsubscribe/ebillsubscribe.component */ "./src/app/ebillsubscribe/ebillsubscribe.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services-home/services-home.component */ "./src/app/services-home/services-home.component.ts");
/* harmony import */ var _ebill_edit_ebill_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ebill-edit/ebill-edit.component */ "./src/app/ebill-edit/ebill-edit.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _lab_home_lab_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lab-home/lab-home.component */ "./src/app/lab-home/lab-home.component.ts");
/* harmony import */ var _lab_edit_lab_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab-edit/lab-edit.component */ "./src/app/lab-edit/lab-edit.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");



















const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "serviceshome/ebillsubscribe", component: _ebillsubscribe_ebillsubscribe_component__WEBPACK_IMPORTED_MODULE_4__["EbillsubscribeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'editprofile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'serviceshome', component: _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_8__["ServicesHomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'ebilledit', component: _ebill_edit_ebill_edit_component__WEBPACK_IMPORTED_MODULE_9__["EbillEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__["TasksComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'taskdetail/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'serviceshome/labsubscribe', component: _lab_home_lab_home_component__WEBPACK_IMPORTED_MODULE_14__["LabHomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'labedit', component: _lab_edit_lab_edit_component__WEBPACK_IMPORTED_MODULE_15__["LabEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__["PaymentComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'ngApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZW1wdHkgZmlsZSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _ebillsubscribe_ebillsubscribe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ebillsubscribe/ebillsubscribe.component */ "./src/app/ebillsubscribe/ebillsubscribe.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services-home/services-home.component */ "./src/app/services-home/services-home.component.ts");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _ebill_edit_ebill_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ebill-edit/ebill-edit.component */ "./src/app/ebill-edit/ebill-edit.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _lab_home_lab_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lab-home/lab-home.component */ "./src/app/lab-home/lab-home.component.ts");
/* harmony import */ var _lab_edit_lab_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lab-edit/lab-edit.component */ "./src/app/lab-edit/lab-edit.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"], _auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_18__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
        _ebillsubscribe_ebillsubscribe_component__WEBPACK_IMPORTED_MODULE_13__["EbillsubscribeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
        _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_17__["ServicesHomeComponent"],
        _ebill_edit_ebill_edit_component__WEBPACK_IMPORTED_MODULE_19__["EbillEditComponent"],
        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__["TasksComponent"],
        _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_21__["TaskDetailComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_24__["UsersComponent"],
        _lab_home_lab_home_component__WEBPACK_IMPORTED_MODULE_25__["LabHomeComponent"],
        _lab_edit_lab_edit_component__WEBPACK_IMPORTED_MODULE_26__["LabEditComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_27__["PaymentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_18__["YouTubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                    _ebillsubscribe_ebillsubscribe_component__WEBPACK_IMPORTED_MODULE_13__["EbillsubscribeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                    _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
                    _services_home_services_home_component__WEBPACK_IMPORTED_MODULE_17__["ServicesHomeComponent"],
                    _ebill_edit_ebill_edit_component__WEBPACK_IMPORTED_MODULE_19__["EbillEditComponent"],
                    _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_20__["TasksComponent"],
                    _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_21__["TaskDetailComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_24__["UsersComponent"],
                    _lab_home_lab_home_component__WEBPACK_IMPORTED_MODULE_25__["LabHomeComponent"],
                    _lab_edit_lab_edit_component__WEBPACK_IMPORTED_MODULE_26__["LabEditComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_27__["PaymentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_18__["YouTubePlayerModule"]
                ],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"], _auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptorService"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate(next, state) {
        if (this._auth.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthService {
    constructor(http) {
        this.http = http;
        // private _registerUrl = "http://localhost:3000/register";
        // private _loginUrl = "http://localhost:3000/login";
        // private _getUserUrl ="http://localhost:3000/getUserDetails";
        // private _updateUserUrl = "http://localhost:3000/updateUser";
        // private _getUsersUrl="http://localhost:3000/getUsers";
        // private _deleteUserUrl="http://localhost:3000/deleteUser";
        this._registerUrl = "register";
        this._loginUrl = "login";
        this._getUserUrl = "getUserDetails";
        this._updateUserUrl = "updateUser";
        this._getUsersUrl = "getUsers";
        this._deleteUserUrl = "deleteUser";
    }
    registerUser(user) {
        // console.log(user);
        return this.http.post(this._registerUrl, user);
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    getLoggedInUseremail() {
        return localStorage.getItem('CALMSemail');
    }
    getLoggedInUserID() {
        return localStorage.getItem('CALMSuserID');
    }
    getUserDetails(id) {
        return this.http.post(this._getUserUrl, { "_id": id });
    }
    getUsers() {
        return this.http.get(this._getUsersUrl);
    }
    saveUser(user) {
        return this.http.post(this._updateUserUrl, user);
    }
    deleteUser(id) {
        return this.http.post(this._deleteUserUrl, { "userID": id });
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    isAdmin() {
        return !!localStorage.getItem('isAdmin');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ebill-edit/ebill-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ebill-edit/ebill-edit.component.ts ***!
  \****************************************************/
/*! exports provided: EbillEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbillEditComponent", function() { return EbillEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function EbillEditComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Consumer Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EbillEditComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EbillEditComponent_div_15_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ebillForm.get("consumer").errors == null ? null : ctx_r0.ebillForm.get("consumer").errors.required);
} }
function EbillEditComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentfreq_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", paymentfreq_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paymentfreq_r6);
} }
function EbillEditComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Frequency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EbillEditComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EbillEditComponent_div_21_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ebillForm.get("paymentfreq").errors == null ? null : ctx_r2.ebillForm.get("paymentfreq").errors.required);
} }
function EbillEditComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dateofpayment_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", dateofpayment_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dateofpayment_r8);
} }
function EbillEditComponent_div_27_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EbillEditComponent_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.ebillForm.get("dateofpayment").errors == null ? null : ctx_r10.ebillForm.get("dateofpayment").errors.serverError);
} }
function EbillEditComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EbillEditComponent_div_27_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EbillEditComponent_div_27_small_2_Template, 2, 1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ebillForm.get("dateofpayment").errors == null ? null : ctx_r4.ebillForm.get("dateofpayment").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ebillForm.get("dateofpayment").errors == null ? null : ctx_r4.ebillForm.get("dateofpayment").errors.serverError);
} }
class EbillEditComponent {
    constructor(_utils, _router, fb, _auth) {
        this._utils = _utils;
        this._router = _router;
        this.fb = fb;
        this._auth = _auth;
        this.numbers = [];
        this.task = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"]("", "", "", null, false);
        this.ebdata = { userID: "", consumernum: "", paymentfreq: "", dateofpayment: undefined };
        this.ebillForm = this.fb.group({
            consumer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            paymentfreq: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dateofpayment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.numbers = Array(30).fill(0).map((x, i) => i + 1);
        this.freqoptions = ["Monthly", "Bimonthly"];
        this.userID = this._auth.getLoggedInUserID();
        this._utils.getEBService(this.userID.toString())
            .subscribe(res => {
            console.log(res);
            this.ebdata = JSON.parse(JSON.stringify(res));
            this.ebdata.userID = this.userID.toString();
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
    update() {
        this.nowDate = new Date();
        this.currmonth = this.nowDate.getMonth();
        this.currDate = this.nowDate.getDate();
        this.curryear = this.nowDate.getFullYear();
        this._utils.updateEBService(this.ebdata)
            .subscribe(res => {
            //update task on;y if there is change in payment date or paymentfrequency
            if (this.ebillForm.get('paymentfreq').touched || this.ebillForm.get('paymentdate').touched) {
                if (this.ebillForm.get('paymentfreq').value == "Monthly") {
                    //for dec month and monthly freq and payment date is past current date,schedule for next month
                    //and next year
                    if (this.currmonth == 11 && this.ebillForm.get('dateofpayment').value < this.currDate) {
                        this.scheduledmonth = 0;
                        this.scheduledyear = this.curryear + 1;
                    }
                    //if payment date is not over for current month, schedule for current month
                    else if (this.ebillForm.get('dateofpayment').value > this.currDate) {
                        this.scheduledmonth = this.currmonth;
                        this.scheduledyear = this.curryear;
                    }
                    else {
                        //Not Dec, other cases, schedule for next month, current year
                        this.scheduledmonth = this.currmonth + 1;
                        this.scheduledyear = this.curryear;
                    }
                }
                //repeat above cases for Bi monthly..only increment by 2 months
                if (this.ebillForm.get('paymentfreq').value == "Bimonthly") {
                    if (this.currmonth == 11 || this.currmonth == 10 && this.ebillForm.get('dateofpayment').value < this.currDate) {
                        this.scheduledmonth = 1;
                        this.scheduledyear = this.curryear + 1;
                    }
                    else if (this.ebillForm.get('dateofpayment').value > this.currDate) {
                        this.scheduledmonth = this.currmonth;
                        this.scheduledyear = this.curryear;
                    }
                    else {
                        this.scheduledmonth = this.currmonth + 2;
                        this.scheduledyear = this.curryear;
                    }
                }
                this.scheduledday = this.ebillForm.get('dateofpayment').value;
                console.log("New day" + this.scheduledday);
                console.log("New month" + this.scheduledmonth);
                console.log("New year" + this.scheduledyear);
                this.scheduleddate = new Date(this.scheduledyear, this.scheduledmonth, this.scheduledday);
                console.log("Scheduled date is " + this.scheduleddate);
                this.task = { userID: this.userID, email: this.useremail, servicetype: 'eb', scheduleddate: this.scheduleddate, completed: false };
                this._utils.updatetask(this.task)
                    .subscribe(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                });
            }
        });
        this._router.navigate(['/profile']);
    }
}
EbillEditComponent.ɵfac = function EbillEditComponent_Factory(t) { return new (t || EbillEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
EbillEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EbillEditComponent, selectors: [["app-ebill-edit"]], decls: 33, vars: 10, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup"], [1, "form-group"], ["for", "consumer"], ["type", "text", "formControlName", "consumer", "name", "consumer", "id", "consumer", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "frequency"], ["name", "paymentfreq", "id", "paymentfreq", "formControlName", "paymentfreq", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "dateofpayment"], ["name", "dateofpayment", "id", "dateofpayment", "formControlName", "dateofpayment", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "button", "routerLink", "/profile", 1, "btn", "btn-success", "float-right", "ml-2"], ["type", "submit", 1, "btn", "btn-success", "float-right", 3, "disabled", "click"], ["class", "text-white", 4, "ngIf"], [1, "text-white"], [3, "ngValue"]], template: function EbillEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Electricity bill payment service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Consumer Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EbillEditComponent_Template_input_ngModelChange_14_listener($event) { return ctx.ebdata.consumernum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EbillEditComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Payment Frequency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EbillEditComponent_Template_select_ngModelChange_19_listener($event) { return ctx.ebdata.paymentfreq = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EbillEditComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EbillEditComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Payment Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EbillEditComponent_Template_select_ngModelChange_25_listener($event) { return ctx.ebdata.dateofpayment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EbillEditComponent_option_26_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EbillEditComponent_div_27_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EbillEditComponent_Template_button_click_30_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ebillForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ebdata.consumernum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ebillForm.get("consumer").invalid && ctx.ebillForm.get("consumer").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ebdata.paymentfreq);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.freqoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ebillForm.get("paymentfreq").invalid && ctx.ebillForm.get("paymentfreq").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ebdata.dateofpayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ebillForm.get("dateofpayment").invalid && ctx.ebillForm.get("dateofpayment").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ebillForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:100px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWJpbGwtZWRpdC9lYmlsbC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZWJpbGwtZWRpdC9lYmlsbC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDojNzc2YzY3O1xyXG4gICAgY29sb3I6cmdiKDQ5LDMwLDM3KTtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4jbWFpbnRhYmxle1xyXG4gICAgaGVpZ2h0Ojg1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiM3NzZjNjc7XHJcbn1cclxuLmltYWdle1xyXG4gICAgaGVpZ2h0Ojg1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EbillEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ebill-edit',
                templateUrl: './ebill-edit.component.html',
                styleUrls: ['./ebill-edit.component.css']
            }]
    }], function () { return [{ type: _utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ebillsubscribe/ebillsubscribe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ebillsubscribe/ebillsubscribe.component.ts ***!
  \************************************************************/
/*! exports provided: EbillsubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbillsubscribeComponent", function() { return EbillsubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function EbillsubscribeComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Consumer Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EbillsubscribeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EbillsubscribeComponent_div_15_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ebillForm.get("consumer").errors == null ? null : ctx_r0.ebillForm.get("consumer").errors.required);
} }
function EbillsubscribeComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentfreq_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", paymentfreq_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paymentfreq_r6);
} }
function EbillsubscribeComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Frequency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EbillsubscribeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EbillsubscribeComponent_div_21_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ebillForm.get("paymentfreq").errors == null ? null : ctx_r2.ebillForm.get("paymentfreq").errors.required);
} }
function EbillsubscribeComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentdate_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", paymentdate_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paymentdate_r8);
} }
function EbillsubscribeComponent_div_27_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EbillsubscribeComponent_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.ebillForm.get("paymentdate").errors == null ? null : ctx_r10.ebillForm.get("paymentdate").errors.serverError);
} }
function EbillsubscribeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EbillsubscribeComponent_div_27_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EbillsubscribeComponent_div_27_small_2_Template, 2, 1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ebillForm.get("paymentdate").errors == null ? null : ctx_r4.ebillForm.get("paymentdate").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.ebillForm.get("paymentdate").errors == null ? null : ctx_r4.ebillForm.get("paymentdate").errors.serverError);
} }
class EbillsubscribeComponent {
    constructor(_utils, _router, fb, _auth) {
        this._utils = _utils;
        this._router = _router;
        this.fb = fb;
        this._auth = _auth;
        this.numbers = [];
        this.task = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"]("", "", "", null, false);
        this.ebillForm = this.fb.group({
            consumer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            paymentfreq: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            paymentdate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.numbers = Array(30).fill(0).map((x, i) => i + 1);
        this.freqoptions = ["Monthly", "Bimonthly"];
    }
    ngOnInit() {
    }
    subscribe(pay) {
        this.useremail = this._auth.getLoggedInUseremail();
        this.userID = this._auth.getLoggedInUserID();
        this.nowDate = new Date();
        this.ebillData = { userID: this.userID, email: this.useremail, registeredDate: this.nowDate, consumernum: this.ebillForm.get('consumer').value,
            paymentfreq: this.ebillForm.get('paymentfreq').value, dateofpayment: this.ebillForm.get('paymentdate').value };
        this.currmonth = this.nowDate.getMonth();
        this.currDate = this.nowDate.getDate();
        this.curryear = this.nowDate.getFullYear();
        console.log(this.currmonth);
        // console.log(this.ebillData);
        this._utils.addEbill(this.ebillData)
            .subscribe(res => {
            console.log(res);
            if (this.ebillForm.get('paymentfreq').value == "Monthly") {
                if (this.currmonth == 11 && this.ebillForm.get('paymentdate').value < this.currDate) {
                    this.scheduledmonth = 0;
                    this.scheduledyear = this.curryear + 1;
                }
                else if (this.ebillForm.get('paymentdate').value > this.currDate) {
                    this.scheduledmonth = this.currmonth;
                    this.scheduledyear = this.curryear;
                }
                else {
                    this.scheduledmonth = this.currmonth + 1;
                    this.scheduledyear = this.curryear;
                }
            }
            if (this.ebillForm.get('paymentfreq').value == "Bimonthly") {
                if (this.currmonth == 11 || this.currmonth == 10 && this.ebillForm.get('paymentdate').value < this.currDate) {
                    this.scheduledmonth = 1;
                    this.scheduledyear = this.curryear + 1;
                }
                else if (this.ebillForm.get('paymentdate').value > this.currDate) {
                    this.scheduledmonth = this.currmonth;
                    this.scheduledyear = this.curryear;
                }
                else {
                    this.scheduledmonth = this.currmonth + 2;
                    this.scheduledyear = this.curryear;
                }
            }
            this.scheduledday = this.ebillForm.get('paymentdate').value;
            this.scheduleddate = new Date(this.scheduledyear, this.scheduledmonth, this.scheduledday);
            console.log("Scheduled date is " + this.scheduleddate);
            this.task = { userID: this.userID, email: this.useremail, servicetype: 'eb', scheduleddate: this.scheduleddate, completed: false };
            console.log(this.task);
            this._utils.addTask(this.task)
                .subscribe(res => {
                console.log(res);
                if (pay) {
                    this._router.navigate(['/payment']);
                }
                else {
                    this._router.navigate(['/profile']);
                }
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
            //handle server side errors
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const validationError = err.error;
                if (err.status === 422) {
                    this.ebillForm.get('paymentdate').setErrors({ serverError: validationError });
                }
            }
        });
    }
}
EbillsubscribeComponent.ɵfac = function EbillsubscribeComponent_Factory(t) { return new (t || EbillsubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
EbillsubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EbillsubscribeComponent, selectors: [["app-ebillsubscribe"]], decls: 33, vars: 7, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup"], [1, "form-group"], ["for", "consumer"], ["type", "text", "formControlName", "consumer", "name", "consumer", "id", "consumer", 1, "form-control", "rounded-0"], [4, "ngIf"], ["for", "frequency"], ["name", "paymentfreq", "id", "paymentfreq", "formControlName", "paymentfreq", 1, "form-control", "rounded-0"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "paymentdate"], ["name", "paymentdate", "id", "paymentdate", "formControlName", "paymentdate", 1, "form-control", "rounded-0"], ["type", "button", "routerLink", "/profile", 1, "btn", "btn-success", "float-right", "ml-2"], ["type", "button", 1, "btn", "btn-success", "float-right", 3, "disabled", "click"], ["class", "text-white", 4, "ngIf"], [1, "text-white"], [3, "ngValue"]], template: function EbillsubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Electricity bill payment service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Consumer Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EbillsubscribeComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Payment Frequency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EbillsubscribeComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EbillsubscribeComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Payment Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EbillsubscribeComponent_option_26_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EbillsubscribeComponent_div_27_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EbillsubscribeComponent_Template_button_click_30_listener() { return ctx.subscribe(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ebillForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ebillForm.get("consumer").invalid && ctx.ebillForm.get("consumer").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.freqoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ebillForm.get("paymentfreq").invalid && ctx.ebillForm.get("paymentfreq").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ebillForm.get("paymentdate").invalid && ctx.ebillForm.get("paymentdate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ebillForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:100px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWJpbGxzdWJzY3JpYmUvZWJpbGxzdWJzY3JpYmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7Ozs7QUFDQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZWJpbGxzdWJzY3JpYmUvZWJpbGxzdWJzY3JpYmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDojNzc2YzY3O1xyXG4gICAgY29sb3I6cmdiKDQ5LDMwLDM3KTtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4jbWFpbnRhYmxle1xyXG4gICAgaGVpZ2h0Ojg1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiM3NzZjNjc7XHJcbn1cclxuLmltYWdle1xyXG4gICAgaGVpZ2h0Ojg1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EbillsubscribeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ebillsubscribe',
                templateUrl: './ebillsubscribe.component.html',
                styleUrls: ['./ebillsubscribe.component.css']
            }]
    }], function () { return [{ type: _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _profile_User_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/User.model */ "./src/app/profile/User.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function EditProfileComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_15_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editProfileForm.get("name").errors == null ? null : ctx_r0.editProfileForm.get("name").errors.required);
} }
function EditProfileComponent_div_20_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_20_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_20_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.editProfileForm.get("address").errors == null ? null : ctx_r6.editProfileForm.get("address").errors.serverError);
} }
function EditProfileComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_20_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditProfileComponent_div_20_small_2_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditProfileComponent_div_20_small_3_Template, 2, 1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editProfileForm.get("address").errors == null ? null : ctx_r1.editProfileForm.get("address").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editProfileForm.get("address").errors == null ? null : ctx_r1.editProfileForm.get("address").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editProfileForm.get("address").errors == null ? null : ctx_r1.editProfileForm.get("address").errors.serverError);
} }
function EditProfileComponent_div_25_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_25_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_25_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact number should have atleast 10 numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_25_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact number can have max 12 numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditProfileComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProfileComponent_div_25_small_1_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditProfileComponent_div_25_small_2_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditProfileComponent_div_25_small_3_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditProfileComponent_div_25_small_4_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editProfileForm.get("contact").errors == null ? null : ctx_r2.editProfileForm.get("contact").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editProfileForm.get("contact").errors == null ? null : ctx_r2.editProfileForm.get("contact").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editProfileForm.get("contact").errors == null ? null : ctx_r2.editProfileForm.get("contact").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editProfileForm.get("contact").errors == null ? null : ctx_r2.editProfileForm.get("contact").errors.maxlength);
} }
class EditProfileComponent {
    constructor(fb, _auth, router) {
        this.fb = fb;
        this._auth = _auth;
        this.router = router;
        this.profile = new _profile_User_model__WEBPACK_IMPORTED_MODULE_2__["User"](null, null, null, null);
        this.editProfileForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]]
        });
    }
    ngOnInit() {
        this.loggedinuserID = this._auth.getLoggedInUserID();
        this._auth.getUserDetails(this.loggedinuserID)
            .subscribe(res => {
            this.profile = JSON.parse(JSON.stringify(res));
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                const validationError = err.error;
                console.log(validationError);
            }
        });
    }
    saveUser() {
        this._auth.saveUser(this.profile)
            .subscribe(data => console.log(data));
        this.router.navigate(['/profile']);
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 37, vars: 14, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], [1, "col-md-5"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "uname1"], ["type", "text", "formControlName", "name", "name", "name", "id", "name", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["type", "text", "formControlName", "address", "name", "address", "id", "address", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "contact", "name", "contact", "id", "contact", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "float-right", 3, "disabled", "click"], ["type", "button", "routerLink", "/profile", 1, "btn", "btn-success", "float-right", "mr-2"], ["class", "text-white", 4, "ngIf"], [1, "text-white"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_10_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.profile.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditProfileComponent_div_15_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_19_listener($event) { return ctx.profile.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditProfileComponent_div_20_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_24_listener($event) { return ctx.profile.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditProfileComponent_div_25_Template, 5, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_29_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.editProfileForm.get("name").invalid && ctx.editProfileForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editProfileForm.get("name").invalid && ctx.editProfileForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.editProfileForm.get("address").invalid && ctx.editProfileForm.get("address").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editProfileForm.get("address").invalid && ctx.editProfileForm.get("address").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.editProfileForm.get("contact").invalid && ctx.editProfileForm.get("contact").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.profile.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editProfileForm.get("contact").invalid && ctx.editProfileForm.get("contact").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.editProfileForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:100px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:100vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxuICAgIGNvbG9yOnJnYig0OSwzMCwzNyk7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuI21haW50YWJsZXtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-profile',
                templateUrl: './edit-profile.component.html',
                styleUrls: ['./edit-profile.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 58, vars: 0, consts: [["data-color", "black", 1, "footer", "fixed-bottom", "footer-big", "footer-color-black"], [1, "container"], [1, "row"], [1, "col-md-2", "col-sm-3"], [1, "info"], [1, "title"], ["href", "#"], [1, "col-md-3", "col-md-offset-1", "col-sm-3"], [1, "col-md-3", "col-sm-3"], [1, "fa", "fa-twitter"], [1, "col-md-2", "col-md-offset-1", "col-sm-3"], ["href", "#", 1, "btn", "btn-social", "btn-facebook", "btn-simple"], [1, "fa", "fa-facebook-square"], ["href", "#", 1, "btn", "btn-social", "btn-twitter", "btn-simple"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Help and Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Money Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Latest News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " We've just been featured on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Awwwards Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "! Thank you everybody for... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Follow us on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "CALMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n    line-height: 20px;\r\n    \r\n    overflow: hidden;\r\n    position: fixed;\r\n    height: 100px;\r\n    bottom: 0;\r\n    width: 100%;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn) {\r\n    color: #777777;\r\n    display: block;\r\n    margin-bottom: 3px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):hover, .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):focus {\r\n    color: #777777;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    padding-bottom: 15px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn) {\r\n    color: #777777;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 10px 5px;\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    line-height: 20px;\r\n    text-align: center;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus {\r\n    color: #777777;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    color: #777777;\r\n    padding: 10px 15px;\r\n    margin: 15px 3px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    border-color: #DDDDDD;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    color: #777777;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\r\n    color: #9A9A9A;\r\n  }\r\n  .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    float: left;\r\n  }\r\n  .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 0px;\r\n    margin: 15px 10px 15px 0px;\r\n  }\r\n  .footer-color-gray[_ngcontent-%COMP%] {\r\n    background-color: #F5F5F5;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%] {\r\n    background-color: rgba(30, 30, 30, 0.97);\r\n    color: #DDDDDD;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-color-black[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .footer-transparent[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-transparent[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #777777;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn), .footer-transparent[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn) {\r\n    color: #FFFFFF;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .footer-color-black[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus, .footer-transparent[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .footer-transparent[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus {\r\n    color: #777777;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    border-color: #444444;\r\n  }\r\n  .footer-color-black[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    color: #DDDDDD;\r\n  }\r\n  .footer-transparent[_ngcontent-%COMP%] {\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n  .footer-transparent[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    position: relative;\r\n  }\r\n  .footer-transparent[_ngcontent-%COMP%]::after {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: rgba(17, 17, 17, 0.8);\r\n    display: block;\r\n    content: \"\";\r\n    z-index: 1;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    margin: 10px 0px 20px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    margin: 0 15px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .btn-social.btn-simple[_ngcontent-%COMP%] {\r\n    padding: 0 0 4px 0;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n  .footer-big[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiwwQkFBMEI7RUFDNUI7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBOztJQUVFLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBOzs7SUFHRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBOzs7SUFHRSxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsY0FBYztFQUNoQjtFQUNBOztJQUVFLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLGNBQWM7RUFDaEI7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgLypib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDsqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZvb3RlciBuYXYgPiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5mb290ZXIgbmF2ID4gdWwgYTpub3QoLmJ0bikge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICB9XHJcbiAgLmZvb3RlciBuYXYgPiB1bCBhOm5vdCguYnRuKTpob3ZlciwgLmZvb3RlciBuYXYgPiB1bCBhOm5vdCguYnRuKTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsLWFyZWEge1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwtYXJlYSBoNSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKSB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpob3ZlciwgLmZvb3RlciAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLmZvb3RlciAuY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyIGhyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0RERERERDtcclxuICB9XHJcbiAgLmZvb3RlciAudGl0bGUge1xyXG4gICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5mb290ZXIgLmJ0bi1zb2NpYWwge1xyXG4gICAgY29sb3I6ICM5QTlBOUE7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCBsaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAuZm9vdGVyOm5vdCguZm9vdGVyLWJpZykgbmF2ID4gdWwgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIG1hcmdpbjogMTVweCAxMHB4IDE1cHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWNvbG9yLWdyYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1jb2xvci1ibGFjayxcclxuICAuZm9vdGVyLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC45Nyk7XHJcbiAgICBjb2xvcjogI0RERERERDtcclxuICB9XHJcbiAgLmZvb3Rlci1jb2xvci1ibGFjayBuYXYgPiB1bCBhLFxyXG4gIC5mb290ZXItdHJhbnNwYXJlbnQgbmF2ID4gdWwgYSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLmZvb3Rlci1jb2xvci1ibGFjayBuYXYgPiB1bCBhOmhvdmVyLCAuZm9vdGVyLWNvbG9yLWJsYWNrIG5hdiA+IHVsIGE6Zm9jdXMsXHJcbiAgLmZvb3Rlci10cmFuc3BhcmVudCBuYXYgPiB1bCBhOmhvdmVyLFxyXG4gIC5mb290ZXItdHJhbnNwYXJlbnQgbmF2ID4gdWwgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLmZvb3Rlci1jb2xvci1ibGFjayAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKSxcclxuICAuZm9vdGVyLXRyYW5zcGFyZW50IC5zb2NpYWwtYXJlYSA+IGE6bm90KC5idG4pIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAuZm9vdGVyLWNvbG9yLWJsYWNrIC5zb2NpYWwtYXJlYSA+IGE6bm90KC5idG4pOmhvdmVyLCAuZm9vdGVyLWNvbG9yLWJsYWNrIC5zb2NpYWwtYXJlYSA+IGE6bm90KC5idG4pOmZvY3VzLFxyXG4gIC5mb290ZXItdHJhbnNwYXJlbnQgLnNvY2lhbC1hcmVhID4gYTpub3QoLmJ0bik6aG92ZXIsXHJcbiAgLmZvb3Rlci10cmFuc3BhcmVudCAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICB9XHJcbiAgLmZvb3Rlci1jb2xvci1ibGFjayAuYnRuLXNvY2lhbCxcclxuICAuZm9vdGVyLXRyYW5zcGFyZW50IC5idG4tc29jaWFsIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAuZm9vdGVyLWNvbG9yLWJsYWNrIGhyLFxyXG4gIC5mb290ZXItdHJhbnNwYXJlbnQgaHIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ0NDQ0O1xyXG4gIH1cclxuICAuZm9vdGVyLWNvbG9yLWJsYWNrIC50aXRsZSxcclxuICAuZm9vdGVyLXRyYW5zcGFyZW50IC50aXRsZSB7XHJcbiAgICBjb2xvcjogI0RERERERDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci10cmFuc3BhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmZvb3Rlci10cmFuc3BhcmVudCAuY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5mb290ZXItdHJhbnNwYXJlbnQ6OmFmdGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYmlnIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWJpZyBociB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1iaWcgLmNvbnRhaW5lciA+IGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXItYmlnIC5jb3B5cmlnaHQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWJpZyAuc29jaWFsLWFyZWEgPiAqIHtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWJpZyBuYXYgPiB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgLmZvb3Rlci1iaWcgbmF2ID4gdWwgbGkge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb290ZXItYmlnIG5hdiA+IHVsIC5idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWJpZyBuYXYgPiB1bCAuYnRuLXNvY2lhbC5idG4tc2ltcGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcclxuICB9XHJcbiAgLmZvb3Rlci1iaWcgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmZvb3Rlci1iaWcgLm51bWJlcnMgaDQge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    ngOnInit() {
        console.log(this._auth.isAdmin());
    }
    logoutUser() {
        localStorage.removeItem('CALMSuserID');
        localStorage.removeItem('CALMSemail');
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        this._router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 7, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "", 1, "navbar-brand"], ["src", "../../assets/logo.png", "width", "100", "height", "", "alt", "Logo", "loading", "lazy"], [1, "navbar-nav", "ml-auto"], ["routerLink", "", 1, "nav-link"], ["class", "nav-link", "routerLink", "/register", 4, "ngIf"], ["class", "nav-link", "routerLink", "/profile", 4, "ngIf"], ["class", "nav-link", "routerLink", "/serviceshome", 4, "ngIf"], ["class", "nav-link", "routerLink", "/tasks", 4, "ngIf"], ["class", "nav-link", "routerLink", "/users", 4, "ngIf"], ["class", "nav-link", "routerLink", "/login", 4, "ngIf"], ["class", "nav-link", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["routerLink", "/register", 1, "nav-link"], ["routerLink", "/profile", 1, "nav-link"], ["routerLink", "/serviceshome", 1, "nav-link"], ["routerLink", "/tasks", 1, "nav-link"], ["routerLink", "/users", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_a_11_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_a_12_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._auth.loggedIn() && !ctx._auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._auth.loggedIn() && !ctx._auth.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._auth.isAdmin() && ctx._auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._auth.isAdmin() && ctx._auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._auth.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._auth.loggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbXB0eSBmaWxlICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 129, vars: 0, consts: [[1, "section", "section-header"], [1, "parallax", "filter", "filter-color-red"], [1, "image", 2, "background-image", "url('../../assets/images/header.jpg')"], [1, "container"], [1, "content"], [1, "title-area"], [1, "title-modern"], [1, "separator", "line-separator"], [1, "section"], [1, "row"], [1, "separator", "separator-danger"], [1, "description"], [1, "col-md-4"], [1, "info-icon"], [1, "icondisplay"], ["src", "../../assets/images/electric.png", "alt", ""], ["src", "../../assets/images/medical-1.png", "alt", ""], ["src", "../../assets/images/quality.png", "alt", ""], ["src", "../../assets/images/receipt.png", "alt", ""], [1, "section", "section-our-team-freebie"], [1, "parallax", "filter", "filter-color-grey"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "team"], [1, "col-md-12", "col-md-offset-1"], [1, "card", "card-member"], [1, "avatar", "avatar-danger"], ["alt", "...", "src", "../../assets/images/face_1.jpg", 1, "img-circle"], [1, "title"], [1, "small-text"], ["alt", "...", "src", "../../assets/images/face_2.jpg", 1, "img-circle"], ["alt", "...", "src", "../../assets/images/face_3.jpg", 1, "img-circle"], [1, "section", "section-our-clients-freebie"], [1, "subtitle", "text-gray"], ["id", "testimonials"], ["alt", "...", "src", "../../assets/images/face_4.jpg", 1, "img-circle"], [1, "tab-content"], ["id", "testimonial1", 1, "tab-pane", "active"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A One Stop Solution for Utility Payments and Medical assistance for the Elderly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CALMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Citizen Assisted Living Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2666");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u273B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We promise you the best services, a kind and friendly attitude. We build that by getting to know you, your needs and creating the most ideal platform for you to easily manage your home needs and personal needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Electricity Bill payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Paying electricity bill online is the most helpful option, you can pay anywhere & anytime without jumping the deadline. We can pay your EB bill without missing out the last date of electricity bill payment that leads to extra payment of late charges. We offer a convenient platform for hassle-free bill payment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Medical Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "We have tied with up Apollo Diagnostics who offer the sheer convenience of Home Sample Collection. On receiving a call, Apollo\u2019s trained technicians arrive at the doorstep of the patient to collect samples. Home collection is completely free of cost and reports can be mailed to you or can be delivered at home (On Chargeable Basis) the very next day.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Adherence to Standards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "We observe standardized processes and security guidelines for on-us and off-us bill collections. Customer satisfaction is our key priority, and so all our process are audited on an annual basis. We ensure the top standards in customer interaction, timely payment and communicating with you in case of any issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Instant Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "We furnish instant payment confirmation receipt in the form of email. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Who We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u273B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "We are a young, dynamic service oriented team, focussed on alleviating the concerns of the elderly .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Jayce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "CEO / Co-Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "My passion is people and technology and I love collaborating to bring these two passions together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Ashish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Product Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "I am a software consultant, and love to design and bring ideas to life through innovative designs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Susan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Marketing Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "I am a business grad, passionate about connecting the technology advancements with people.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Here are some");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Clients Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u220E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " I am a client of CALMS for the past 1 year. I am very satisfied with their consistent, timely services and polite attitude. I recommend this website to all who want to have hassle free utility services as a gift for their parents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".icondisplay[_ngcontent-%COMP%]{\r\n    font-size: 62px;\r\n    line-height: 66px;\r\n    color: #c5a47e;\r\n    margin-bottom: 10px;\r\n   }\r\n\r\n   #testimonials[_ngcontent-%COMP%]{\r\n     display: inline;\r\n   }\r\n\r\n   \r\n\r\n   \r\n\r\n   \r\n\r\n   html[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\n   body[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 100%;\r\n}\r\n\r\n   @media (min-width: 58em) {\r\n  body[_ngcontent-%COMP%] {\r\n    font-size: 100%;\r\n  }\r\n}\r\n\r\n   @media (min-width: 115em) {\r\n  body[_ngcontent-%COMP%] {\r\n    font-size: 110%;\r\n  }\r\n}\r\n\r\n   @media (min-width: 125em) {\r\n  body[_ngcontent-%COMP%] {\r\n    font-size: 115%;\r\n  }\r\n}\r\n\r\n   @media (min-width: 145em) {\r\n  body[_ngcontent-%COMP%] {\r\n    font-size: 120%;\r\n  }\r\n}\r\n\r\n   @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  body[_ngcontent-%COMP%] {\r\n    font-feature-settings: normal;\r\n    \r\n  }\r\n}\r\n\r\n   h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], .content-blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: \"Cambo\", \"Times New Roman\", serif;\r\n}\r\n\r\n   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .content-blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: inherit;\r\n  font-family: \"Cambo\", \"Times New Roman\", serif;\r\n}\r\n\r\n   .content-blog[_ngcontent-%COMP%] {\r\n  padding: 30px 0;\r\n}\r\n\r\n   .content-blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n   h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n  line-height: 1.213483146em;\r\n  font-weight: bold;\r\n}\r\n\r\n   h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%] {\r\n  font-size: 2.4em;\r\n  line-height: 1.25;\r\n  margin: 0.4em 0;\r\n  font-weight: bold;\r\n}\r\n\r\n   h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\r\n  font-size: 1.61em;\r\n  line-height: 1.05em;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n   h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%] {\r\n  font-size: 1.3em;\r\n  line-height: 1.714285714em;\r\n}\r\n\r\n   h5[_ngcontent-%COMP%] {\r\n  font-size: 1.2em;\r\n}\r\n\r\n   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 1.6em;\r\n  font-weight: 400;\r\n  margin: 0 0 .75em;\r\n}\r\n\r\n   p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%], .btn-simple[_ngcontent-%COMP%], a[_ngcontent-%COMP%], .td-name[_ngcontent-%COMP%], td[_ngcontent-%COMP%], small[_ngcontent-%COMP%], .media[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n   a[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  opacity: .7;\r\n  font-size: 14px;\r\n}\r\n\r\n   a[_ngcontent-%COMP%]:hover {\r\n  color: #777777;\r\n  opacity: 1;\r\n}\r\n\r\n   .title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .title-modern[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-weight: 200;\r\n}\r\n\r\n   .text-gray[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .text-primary[_ngcontent-%COMP%] {\r\n  color: #c5a47e !important;\r\n}\r\n\r\n   .text-info[_ngcontent-%COMP%] {\r\n  color: #00abc0 !important;\r\n}\r\n\r\n   .text-success[_ngcontent-%COMP%] {\r\n  color: #7accb8 !important;\r\n}\r\n\r\n   .text-warning[_ngcontent-%COMP%] {\r\n  color: #f88f58 !important;\r\n}\r\n\r\n   .text-danger[_ngcontent-%COMP%] {\r\n  color: #e78b90 !important;\r\n}\r\n\r\n   .text-gold[_ngcontent-%COMP%], .title-gold[_ngcontent-%COMP%] {\r\n  color: #c5a47e;\r\n}\r\n\r\n   .quotes[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .quotes[_ngcontent-%COMP%]:before, .quotes[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  font-size: 40px;\r\n  font-family: sans-serif;\r\n  color: #777777;\r\n  line-height: 0;\r\n}\r\n\r\n   .quotes[_ngcontent-%COMP%]:before {\r\n  content: \"\\201C\";\r\n  left: 0;\r\n  top: 5px;\r\n}\r\n\r\n   .quotes[_ngcontent-%COMP%]:after {\r\n  content: \"\\201D\";\r\n  right: 0;\r\n  bottom: -10px;\r\n}\r\n\r\n   .separator[_ngcontent-%COMP%] {\r\n  color: #c5a47e;\r\n  margin: 0 auto 20px;\r\n  max-width: 240px;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n   .separator[_ngcontent-%COMP%]:before, .separator[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  width: 40%;\r\n  content: \" \";\r\n  margin-top: 10px;\r\n  border: 1px solid #c5a47e;\r\n}\r\n\r\n   .separator[_ngcontent-%COMP%]:before {\r\n  float: left;\r\n}\r\n\r\n   .separator[_ngcontent-%COMP%]:after {\r\n  float: right;\r\n}\r\n\r\n   .separator-danger[_ngcontent-%COMP%] {\r\n  color: #e78b90;\r\n}\r\n\r\n   .separator-danger[_ngcontent-%COMP%]:before, .separator-danger[_ngcontent-%COMP%]:after {\r\n  border-color: #e78b90;\r\n}\r\n\r\n   p.description[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #777777;\r\n}\r\n\r\n   a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n   a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]::-moz-focus-inner, input[type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, input[type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, input[type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner, select[_ngcontent-%COMP%]::-moz-focus-inner, input[type=\"file\"][_ngcontent-%COMP%]    > input[type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner {\r\n  outline: 0;\r\n}\r\n\r\n   .ui-slider-handle[_ngcontent-%COMP%]:focus, .navbar-toggle[_ngcontent-%COMP%] {\r\n  outline: 0 !important;\r\n}\r\n\r\n   \r\n\r\n   .form-control[_ngcontent-%COMP%], .input-group-addon[_ngcontent-%COMP%], .tagsinput[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\r\n  transition: all 300ms linear;\r\n}\r\n\r\n   .tagsinput[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%], .tagsinput-remove-link[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%], .btn-hover[_ngcontent-%COMP%], [data-toggle=\"collapse\"][_ngcontent-%COMP%]   i[_ngcontent-%COMP%], body[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: all 150ms linear;\r\n}\r\n\r\n   .btn-morphing[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .btn-morphing[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .gsdk-collapse[_ngcontent-%COMP%] {\r\n  transition: all 370ms linear;\r\n}\r\n\r\n   .fa[_ngcontent-%COMP%] {\r\n  width: 18px;\r\n  text-align: center;\r\n}\r\n\r\n   .margin-top[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n   .better-browser[_ngcontent-%COMP%] {\r\n  max-width: 700px;\r\n  margin: 200px auto;\r\n  text-align: center;\r\n}\r\n\r\n   .better-browser[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n   .info-icon[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n   .info-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  font-size: 62px;\r\n  line-height: 66px;\r\n  color: #c5a47e;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n   .info-icon[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  color: #777777;\r\n}\r\n\r\n   .avatar[_ngcontent-%COMP%] {\r\n  border: 3px solid #c5a47e;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  max-width: 110px;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n   .avatar-danger[_ngcontent-%COMP%] {\r\n  border-color: #e78b90;\r\n}\r\n\r\n   *[_ngcontent-%COMP%]::-moz-selection {\r\n  background: #e78b90;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   *[_ngcontent-%COMP%]::selection {\r\n  background: #e78b90;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.875em;\r\n}\r\n\r\n   @-webkit-keyframes zoomOut {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n   @keyframes zoomOut {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n   .zoomOut[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoomOut;\r\n  animation-name: zoomOut;\r\n}\r\n\r\n   .loading[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: white;\r\n  z-index: 1032;\r\n  opacity: 1;\r\n  transition: opacity 0.5s cubic-bezier(0.7, 0, 0.3, 1);\r\n}\r\n\r\n   .loading.hide[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n   .loading[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\r\n  z-index: 1033;\r\n  display: block;\r\n  position: relative;\r\n  text-align: center;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n   .loading[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n}\r\n\r\n   .loading[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n   \r\n\r\n   .btn-black[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 0.25em;\r\n  opacity: 0;\r\n}\r\n\r\n   .btn-black[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .btn-black[_ngcontent-%COMP%]:focus   i[_ngcontent-%COMP%] {\r\n  right: 26px;\r\n  opacity: 1;\r\n}\r\n\r\n   \r\n\r\n   .form-control[_ngcontent-%COMP%] {\r\n  border-color: #d0cdbc;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #777777;\r\n}\r\n\r\n   a[_ngcontent-%COMP%], .list-logos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child, .section-clients-3[_ngcontent-%COMP%]   #clients-carousel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child, .project-content[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .nav-text[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: all 150ms linear;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%], .btn-black[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]::-webkit-placeholder {\r\n  -webkit-transition: all 150ms ease-out;\r\n  transition: all 150ms ease-out;\r\n}\r\n\r\n   \r\n\r\n   .body-layer[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  bottom: 0;\r\n  z-index: 1030;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  visibility: hidden;\r\n  transition: all .1s ease;\r\n}\r\n\r\n   .body-layer[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  font-size: 75px;\r\n  line-height: 75px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]    ~ h3[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n  background-color: transparent;\r\n  font-weight: 600;\r\n  border-radius: 3px;\r\n  font-size: 12px;\r\n  line-height: 1.6em;\r\n  opacity: 0.8;\r\n  filter: alpha(opacity=80);\r\n  padding: 10px 20px;\r\n  border-color: #888888;\r\n  color: #888888;\r\n  text-transform: uppercase;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active, .btn.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #777777;\r\n  border-color: #777777;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%]:disabled, .btn[disabled][_ngcontent-%COMP%], .btn.disabled[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:disabled, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[disabled][_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.disabled[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #888888;\r\n}\r\n\r\n   .btn.btn-fill[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background-color: #888888;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n   .btn.btn-fill[_ngcontent-%COMP%]:hover, .btn.btn-fill[_ngcontent-%COMP%]:focus, .btn.btn-fill[_ngcontent-%COMP%]:active, .btn.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn.btn-fill.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: #777777;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .btn.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #FFFFFF;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #888888;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:focus {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  outline: 0 !important;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%]:active, .btn.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.dropdown-toggle[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  outline: 0 !important;\r\n}\r\n\r\n   .btn.btn-icon[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn.btn-icon[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n   .btn-danger[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[_ngcontent-%COMP%] {\r\n  border-color: #e78b90;\r\n  color: #e78b90;\r\n}\r\n\r\n   .btn-danger[_ngcontent-%COMP%]:hover, .btn-danger[_ngcontent-%COMP%]:focus, .btn-danger[_ngcontent-%COMP%]:active, .btn-danger.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-danger.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #e47a80;\r\n  border-color: #e47a80;\r\n}\r\n\r\n   .btn-danger[_ngcontent-%COMP%]:disabled, .btn-danger[disabled][_ngcontent-%COMP%], .btn-danger.disabled[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[_ngcontent-%COMP%]:disabled, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[disabled][_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.disabled[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #e78b90;\r\n}\r\n\r\n   .btn-danger.btn-fill[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background-color: #e78b90;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n   .btn-danger.btn-fill[_ngcontent-%COMP%]:hover, .btn-danger.btn-fill[_ngcontent-%COMP%]:focus, .btn-danger.btn-fill[_ngcontent-%COMP%]:active, .btn-danger.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-danger.btn-fill.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: #e47a80;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .btn-danger.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #FFFFFF;\r\n}\r\n\r\n   .btn-danger[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-danger[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #e78b90;\r\n}\r\n\r\n   .btn-black[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[_ngcontent-%COMP%] {\r\n  border-color: #333333;\r\n  color: #333333;\r\n}\r\n\r\n   .btn-black[_ngcontent-%COMP%]:hover, .btn-black[_ngcontent-%COMP%]:focus, .btn-black[_ngcontent-%COMP%]:active, .btn-black.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-black.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #393b3d;\r\n  border-color: #393b3d;\r\n}\r\n\r\n   .btn-black[_ngcontent-%COMP%]:disabled, .btn-black[disabled][_ngcontent-%COMP%], .btn-black.disabled[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[_ngcontent-%COMP%]:disabled, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[disabled][_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.disabled[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #333333;\r\n}\r\n\r\n   .btn-black.btn-fill[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background-color: #333333;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n   .btn-black.btn-fill[_ngcontent-%COMP%]:hover, .btn-black.btn-fill[_ngcontent-%COMP%]:focus, .btn-black.btn-fill[_ngcontent-%COMP%]:active, .btn-black.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-black.btn-fill.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: #393b3d;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .btn-black.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #FFFFFF;\r\n}\r\n\r\n   .btn-black[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-black[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #333333;\r\n}\r\n\r\n   .btn-white[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%] {\r\n  border-color: #FFFFFF;\r\n  color: #FFFFFF;\r\n  opacity: .9;\r\n}\r\n\r\n   .btn-white[_ngcontent-%COMP%]:hover, .btn-white[_ngcontent-%COMP%]:focus, .btn-white[_ngcontent-%COMP%]:active, .btn-white.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-white.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #FFFFFF;\r\n  border-color: #FFFFFF;\r\n}\r\n\r\n   .btn-white[_ngcontent-%COMP%]:disabled, .btn-white[disabled][_ngcontent-%COMP%], .btn-white.disabled[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%]:disabled, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[disabled][_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.disabled[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #FFFFFF;\r\n}\r\n\r\n   .btn-white.btn-fill[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background-color: #FFFFFF;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n   .btn-white.btn-fill[_ngcontent-%COMP%]:hover, .btn-white.btn-fill[_ngcontent-%COMP%]:focus, .btn-white.btn-fill[_ngcontent-%COMP%]:active, .btn-white.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-white.btn-fill.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .btn-white.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #FFFFFF;\r\n}\r\n\r\n   .btn-white[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\r\n  border-top-color: #FFFFFF;\r\n}\r\n\r\n   .btn-white[_ngcontent-%COMP%]:active, .btn-white.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .btn-white.dropdown-toggle[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.dropdown-toggle[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  color: #888888;\r\n}\r\n\r\n   .btn-white.btn-fill[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%] {\r\n  color: #888888;\r\n  opacity: .9;\r\n}\r\n\r\n   .btn-white.btn-fill[_ngcontent-%COMP%]:hover, .btn-white.btn-fill[_ngcontent-%COMP%]:focus, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-fill[_ngcontent-%COMP%]:focus {\r\n  color: #888888;\r\n  opacity: 1;\r\n}\r\n\r\n   .btn-white.btn-simple[_ngcontent-%COMP%]:active, .btn-white.btn-simple.active[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-simple[_ngcontent-%COMP%]:active, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-white.btn-simple.active[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n\r\n   .btn[_ngcontent-%COMP%]:disabled, .btn[disabled][_ngcontent-%COMP%], .btn.disabled[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n   .btn-round[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n  border-radius: 30px !important;\r\n  padding: 10px 20px;\r\n}\r\n\r\n   .btn-round.btn-icon[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n   .btn-simple[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  font-size: 14px;\r\n  padding: 10px 20px;\r\n}\r\n\r\n   .btn-simple.btn-icon[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n   .btn-lg[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  padding: 16px 32px;\r\n}\r\n\r\n   .btn-lg.btn-round[_ngcontent-%COMP%] {\r\n  padding: 17px 32px;\r\n}\r\n\r\n   .btn-lg.btn-simple[_ngcontent-%COMP%] {\r\n  padding: 18px 32px;\r\n}\r\n\r\n   .btn-sm[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  border-radius: 3px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n   .btn-sm.btn-round[_ngcontent-%COMP%] {\r\n  padding: 6px 10px;\r\n}\r\n\r\n   .btn-sm.btn-simple[_ngcontent-%COMP%] {\r\n  padding: 7px 10px;\r\n}\r\n\r\n   .btn-xs[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  border-radius: 3px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n   .btn-xs.btn-round[_ngcontent-%COMP%] {\r\n  padding: 6px 10px;\r\n}\r\n\r\n   .btn-xs.btn-simple[_ngcontent-%COMP%] {\r\n  padding: 7px 10px;\r\n}\r\n\r\n   .btn-wd[_ngcontent-%COMP%] {\r\n  min-width: 140px;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: #DDDDDD;\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  border: 1px solid #E3E3E3;\r\n  border-radius: 4px;\r\n  color: #444444;\r\n  padding: 10px 10px;\r\n  height: 40px;\r\n  box-shadow: none;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]:focus {\r\n  background-color: #FFFFFF;\r\n  border: 1px solid #777777;\r\n  box-shadow: none;\r\n  outline: 0 !important;\r\n}\r\n\r\n   .has-success[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .has-success[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #E3E3E3;\r\n  box-shadow: none;\r\n}\r\n\r\n   .has-success[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  color: #7accb8;\r\n}\r\n\r\n   .has-success[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #7accb8;\r\n}\r\n\r\n   .has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  color: #e78b90;\r\n}\r\n\r\n   .has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #e78b90;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]    + .form-control-feedback[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  margin-top: -7px;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50%;\r\n  vertical-align: middle;\r\n}\r\n\r\n   .open[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-radius: 4px 4px 0 0;\r\n  border-bottom-color: transparent;\r\n}\r\n\r\n   .input-lg[_ngcontent-%COMP%] {\r\n  height: 55px;\r\n  padding: 16px 32px;\r\n}\r\n\r\n   .has-error[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\r\n  color: #e78b90;\r\n}\r\n\r\n   .has-success[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\r\n  color: #7accb8;\r\n}\r\n\r\n   .input-group-addon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  border: 1px solid #E3E3E3;\r\n  border-radius: 4px;\r\n}\r\n\r\n   .has-success[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%], .has-error[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  border: 1px solid #E3E3E3;\r\n}\r\n\r\n   .has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + .input-group-addon[_ngcontent-%COMP%] {\r\n  border-color: #e78b90;\r\n  color: #e78b90;\r\n}\r\n\r\n   .has-success[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    + .input-group-addon[_ngcontent-%COMP%] {\r\n  border-color: #7accb8;\r\n  color: #7accb8;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]:focus    + .input-group-addon[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus    ~ .input-group-addon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  border-color: #777777;\r\n}\r\n\r\n   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:first-child, .input-group-addon[_ngcontent-%COMP%]:first-child, .input-group-btn[_ngcontent-%COMP%]:first-child    > .btn[_ngcontent-%COMP%], .input-group-btn[_ngcontent-%COMP%]:first-child    > .dropdown-toggle[_ngcontent-%COMP%], .input-group-btn[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle) {\r\n  border-right: 0 none;\r\n}\r\n\r\n   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:last-child, .input-group-addon[_ngcontent-%COMP%]:last-child, .input-group-btn[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%], .input-group-btn[_ngcontent-%COMP%]:last-child    > .dropdown-toggle[_ngcontent-%COMP%], .input-group-btn[_ngcontent-%COMP%]:first-child    > .btn[_ngcontent-%COMP%]:not(:first-child) {\r\n  border-left: 0 none;\r\n}\r\n\r\n   .form-control[disabled][_ngcontent-%COMP%], .form-control[readonly][_ngcontent-%COMP%], fieldset[disabled][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  background-color: #E3E3E3;\r\n  color: #888888;\r\n  cursor: not-allowed;\r\n}\r\n\r\n   .form-control-plain[_ngcontent-%COMP%] {\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-radius: 0;\r\n  padding: 8px 0;\r\n  font-size: 16px;\r\n  background-color: transparent;\r\n  border-color: #E3E3E3;\r\n  resize: vertical;\r\n}\r\n\r\n   .form-control-plain[_ngcontent-%COMP%]:focus {\r\n  background-color: transparent;\r\n  border: 0;\r\n  border-bottom: 1px solid #777;\r\n}\r\n\r\n   .form-control[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\r\n  color: rgba(119, 119, 119, 0.3);\r\n}\r\n\r\n   .section[_ngcontent-%COMP%] {\r\n  padding: 50px 0;\r\n  position: relative;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n   .section-gray[_ngcontent-%COMP%] {\r\n  background-color: #EEEEEE;\r\n  padding: 70px 0;\r\n}\r\n\r\n   .section-white[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\r\n  max-width: 760px;\r\n  margin: 0 auto 70px;\r\n  display: block;\r\n  padding: 0 15px;\r\n  text-align: center;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #777777;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   [class*=\"col-\"][_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\r\n  padding: 4.375em 0;\r\n  position: relative;\r\n  z-index: 3;\r\n  display: block;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #777777;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .parallax-small[_ngcontent-%COMP%] {\r\n  height: 65vh;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .responsive-background[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #c5a47e;\r\n  padding: 0;\r\n  z-index: 1;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  height: 80vh;\r\n}\r\n\r\n   .section[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n   .section-contact-form[_ngcontent-%COMP%] {\r\n  padding-top: 110px;\r\n}\r\n\r\n   .section-contact-form[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n   .section-contact-form[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%] {\r\n  padding: 20px 0 40px;\r\n  margin-top: 0;\r\n  border: none;\r\n}\r\n\r\n   .gradient-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n   .gradient-image[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  z-index: 3;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 300px;\r\n  content: '';\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%);\r\n  \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );\r\n  \r\n}\r\n\r\n   .section-our-team[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\r\n  padding-bottom: 0;\r\n}\r\n\r\n   .filter[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100%;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .filter[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  z-index: 3;\r\n  content: \"\";\r\n  opacity: .7;\r\n  background: #333;\r\n}\r\n\r\n   .filter[_ngcontent-%COMP%]   .title-area[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .filter[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .filter[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]:before, .filter[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]:after {\r\n  border-color: #FFFFFF;\r\n}\r\n\r\n   .filter.filter-color-black[_ngcontent-%COMP%]:before {\r\n  background: #333;\r\n}\r\n\r\n   .filter.filter-color-gold[_ngcontent-%COMP%]:before {\r\n  background: #bd986c;\r\n}\r\n\r\n   .filter.filter-color-green[_ngcontent-%COMP%]:before {\r\n  background: #55bea4;\r\n}\r\n\r\n   .filter.filter-color-blue[_ngcontent-%COMP%]:before {\r\n  background: #008b9c;\r\n}\r\n\r\n   .filter.filter-color-purple[_ngcontent-%COMP%]:before {\r\n  background: #50236F;\r\n}\r\n\r\n   .filter.filter-color-red[_ngcontent-%COMP%]:before {\r\n  background: #de6168;\r\n}\r\n\r\n   .filter.filter-gradient-black[_ngcontent-%COMP%]:before {\r\n  background: #1f1c2c;\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  background: linear-gradient(135deg, #1f1c2c 0%, #928dab 100%);\r\n  \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f1c2c', endColorstr='#928dab',GradientType=1 );\r\n  \r\n}\r\n\r\n   .filter.filter-gradient-gold[_ngcontent-%COMP%]:before {\r\n  background: #dfd389;\r\n  background: linear-gradient(135deg, #dfd48b 0%, #ec6565 100%);\r\n}\r\n\r\n   .filter.filter-gradient-green[_ngcontent-%COMP%]:before {\r\n  background: #71c491;\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  background: linear-gradient(135deg, #71c491 0%, #465556 100%);\r\n  \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#71c491', endColorstr='#465556',GradientType=1 );\r\n  \r\n}\r\n\r\n   .filter.filter-gradient-blue[_ngcontent-%COMP%]:before {\r\n  background: #085078;\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  background: linear-gradient(135deg, #085078 0%, #87d7db 100%);\r\n  \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#085078', endColorstr='#87d7db',GradientType=1 );\r\n  \r\n}\r\n\r\n   .filter.filter-gradient-purple[_ngcontent-%COMP%]:before {\r\n  background: #6c3aad;\r\n  background: linear-gradient(135deg, #6b39ac 0%, #c8fece 100%);\r\n}\r\n\r\n   .section-numbers[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\r\n  padding: 30px 0 0;\r\n}\r\n\r\n   .section-white[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   .section-white[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 2;\r\n  content: \"\";\r\n  opacity: 0.95;\r\n  background: #FFFFFF;\r\n}\r\n\r\n   .section-signup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n   .section-signup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin: 15px 0;\r\n}\r\n\r\n   .section-pricing[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   .section-pricing[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\r\n  margin-top: 115px;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n   .section-small[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .section-small[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .section-get-started[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .section-get-started[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  height: 100vh !important;\r\n}\r\n\r\n   .section-info[_ngcontent-%COMP%] {\r\n  padding-top: 100px;\r\n}\r\n\r\n   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  opacity: .93;\r\n}\r\n\r\n   .section-we-do[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 10px 0 20px;\r\n}\r\n\r\n   .section-we-do[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n   .section-we-do[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .section-we-do[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n   .section-we-do-presentation[_ngcontent-%COMP%] {\r\n  padding: 100px 0;\r\n}\r\n\r\n   .section-info-presentation[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n   .section-info-presentation[_ngcontent-%COMP%]   .info-pricing[_ngcontent-%COMP%]:first-child {\r\n  margin-top: 90px;\r\n}\r\n\r\n   .section-info-presentation[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: auto;\r\n  position: relative;\r\n}\r\n\r\n   .section-info-presentation[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  background-color: transparent;\r\n}\r\n\r\n   .nav[_ngcontent-%COMP%]    > .social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  font-size: 16px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  margin: 10px 0px;\r\n  padding: 15px 15px;\r\n  font-size: 20px;\r\n  line-height: 22px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n  margin: 15px 3px;\r\n  line-height: 18px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  padding: 10px 5px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-nav.navbar-uppercase[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  letter-spacing: 0px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%] {\r\n  margin: 15px 3px;\r\n  padding: 10px 20px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn-round[_ngcontent-%COMP%] {\r\n  margin: 16px 3px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   [class^=\"fa\"][_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  position: relative;\r\n  top: 1px;\r\n  margin-top: -3px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin: 15px 3px;\r\n  font-size: 14px;\r\n}\r\n\r\n   .navbar[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn) {\r\n  color: #434547;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus {\r\n  background-color: transparent;\r\n  border-radius: 3px;\r\n  color: #434547;\r\n  opacity: 0.85;\r\n  filter: alpha(opacity=85);\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   .caret[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus   .caret[_ngcontent-%COMP%] {\r\n  border-bottom-color: #333333;\r\n  border-top-color: #333333;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  background-color: transparent;\r\n  color: #c5a47e;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover, .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus {\r\n  background-color: transparent;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  color: #434547;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]:not(.navbar-transparent)   .btn-default[_ngcontent-%COMP%]:hover {\r\n  color: #c5a47e;\r\n  border-color: #c5a47e;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]:not(.navbar-transparent)   .btn-neutral[_ngcontent-%COMP%], .navbar-default[_ngcontent-%COMP%]:not(.navbar-transparent)   .btn-neutral[_ngcontent-%COMP%]:hover, .navbar-default[_ngcontent-%COMP%]:not(.navbar-transparent)   .btn-neutral[_ngcontent-%COMP%]:active {\r\n  color: #777777;\r\n}\r\n\r\n   .navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover, .navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus {\r\n  background-color: transparent;\r\n}\r\n\r\n   .navbar-transparent[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n   .navbar-toggle[_ngcontent-%COMP%] {\r\n  margin-top: 19px;\r\n  margin-bottom: 19px;\r\n  border: 0;\r\n}\r\n\r\n   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n   .navbar-toggle[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%], .navbar-toggle[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%] {\r\n  border-color: transparent;\r\n}\r\n\r\n   .navbar-toggle.navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover, .navbar-toggle.navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus {\r\n  background-color: transparent;\r\n}\r\n\r\n   .navbar-transparent[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n   .navbar.navbar-fixed-top[_ngcontent-%COMP%] {\r\n  transition: all .5s .1s;\r\n}\r\n\r\n   @media (min-width: 768px) {\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, .navbar-transparent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n    color: #FFFFFF;\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn), [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn) {\r\n    color: #FFFFFF;\r\n    border-color: #FFFFFF;\r\n    opacity: 0.85;\r\n    filter: alpha(opacity=85);\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn), .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:not(.btn), .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus:not(.btn), .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:not(.btn), .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus:not(.btn), [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn), [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:not(.btn), [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus:not(.btn), [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:not(.btn), [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus:not(.btn) {\r\n    background-color: transparent;\r\n    border-radius: 3px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:hover, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   .caret[_ngcontent-%COMP%], .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus   .caret[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   .caret[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus   .caret[_ngcontent-%COMP%] {\r\n    border-bottom-color: #FFFFFF;\r\n    border-top-color: #FFFFFF;\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-transparent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n    background-color: transparent;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    border-color: #FFFFFF;\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%] {\r\n    color: #777777;\r\n    background-color: #FFFFFF;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n  .navbar-transparent[_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%]:hover, .navbar-transparent[_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%]:focus, .navbar-transparent[_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%]:active, .navbar-transparent[_ngcontent-%COMP%]   .btn-default.btn-fill.active[_ngcontent-%COMP%], .navbar-transparent[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-toggle.btn-fill.btn-default[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%]:hover, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%]:focus, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .btn-default.btn-fill[_ngcontent-%COMP%]:active, [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .btn-default.btn-fill.active[_ngcontent-%COMP%], [class*=\"navbar-ct\"][_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-toggle.btn-fill.btn-default[_ngcontent-%COMP%] {\r\n    border-color: #FFFFFF;\r\n    opacity: 1;\r\n    filter: alpha(opacity=100);\r\n  }\r\n\r\n  .navbar-transparent[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n  }\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF;\r\n  line-height: 20px;\r\n  \r\n  overflow: hidden;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn) {\r\n  color: #777777;\r\n  display: block;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):hover, .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):focus {\r\n  color: #777777;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%] {\r\n  padding: 15px 0;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn) {\r\n  color: #777777;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  padding: 10px 5px;\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  line-height: 20px;\r\n  text-align: center;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus {\r\n  color: #777777;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  padding: 10px 15px;\r\n  margin: 15px 3px;\r\n  line-height: 20px;\r\n  text-align: center;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-color: #DDDDDD;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin-bottom: 10px;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\r\n  color: #9A9A9A;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  float: left;\r\n}\r\n\r\n   .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n  margin: 15px 10px 15px 0px;\r\n}\r\n\r\n   .footer-color-gray[_ngcontent-%COMP%] {\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%] {\r\n  background-color: rgba(30, 30, 30, 0.97);\r\n  color: #DDDDDD;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-color-black[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .footer-transparent[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-transparent[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  color: #777777;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn), .footer-transparent[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn) {\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .footer-color-black[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus, .footer-transparent[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):hover, .footer-transparent[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.btn):focus {\r\n  color: #777777;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  border-color: #444444;\r\n}\r\n\r\n   .footer-color-black[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .footer-transparent[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  color: #DDDDDD;\r\n}\r\n\r\n   .footer-transparent[_ngcontent-%COMP%] {\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n   .footer-transparent[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n   .footer-transparent[_ngcontent-%COMP%]::after {\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: rgba(17, 17, 17, 0.8);\r\n  display: block;\r\n  content: \"\";\r\n  z-index: 1;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  margin: 10px 0px 20px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin: 0 15px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  float: none;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   .btn-social.btn-simple[_ngcontent-%COMP%] {\r\n  padding: 0 0 4px 0;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n\r\n   .footer-big[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n   .social-line[_ngcontent-%COMP%] {\r\n  padding: 16px 0;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n   .social-line[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  line-height: 40px;\r\n  font-size: 22px;\r\n}\r\n\r\n   .social-line[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n   .social-line-black[_ngcontent-%COMP%] {\r\n  background-color: rgba(30, 30, 30, 0.97);\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .label-primary[_ngcontent-%COMP%] {\r\n  background-color: #c5a47e;\r\n}\r\n\r\n   .label-info[_ngcontent-%COMP%] {\r\n  background-color: #00abc0;\r\n}\r\n\r\n   .label-success[_ngcontent-%COMP%] {\r\n  background-color: #7accb8;\r\n}\r\n\r\n   .label-warning[_ngcontent-%COMP%] {\r\n  background-color: #f88f58;\r\n}\r\n\r\n   .label-danger[_ngcontent-%COMP%] {\r\n  background-color: #e78b90;\r\n}\r\n\r\n   .btn-social[_ngcontent-%COMP%] {\r\n  opacity: 0.85;\r\n  padding: 8px 9px;\r\n}\r\n\r\n   .btn-social[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  top: -1px;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n   .btn-social.btn-round[_ngcontent-%COMP%] {\r\n  padding: 9px 10px;\r\n}\r\n\r\n   .btn-social.btn-simple[_ngcontent-%COMP%] {\r\n  padding: 9px 5px;\r\n  font-size: 14px;\r\n}\r\n\r\n   .btn-social.btn-simple[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  position: relative;\r\n  top: -2px;\r\n  width: 24px;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  border-radius: 4px;\r\n  display: block;\r\n  z-index: 9000;\r\n  position: absolute;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125);\r\n  transform: translate3d(0, -20px, 0);\r\n  transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);\r\n}\r\n\r\n   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n  visibility: visible;\r\n  transform: translate3d(0, 0px, 0);\r\n}\r\n\r\n   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  margin-top: -5px;\r\n}\r\n\r\n   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]:before {\r\n  border-bottom: 11px solid rgba(0, 0, 0, 0.2);\r\n  border-left: 11px solid transparent;\r\n  border-right: 11px solid transparent;\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 12px;\r\n  top: -11px;\r\n}\r\n\r\n   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]:after {\r\n  border-bottom: 11px solid #FFFFFF;\r\n  border-left: 11px solid transparent;\r\n  border-right: 11px solid transparent;\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 12px;\r\n  top: -10px;\r\n}\r\n\r\n   .navbar-nav.navbar-right[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]:before {\r\n  left: auto;\r\n  right: 12px;\r\n}\r\n\r\n   .navbar-nav.navbar-right[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]:after {\r\n  left: auto;\r\n  right: 12px;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  margin: 0px 0px;\r\n  color: #434547;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  line-height: 13px;\r\n  padding: 20px 20px;\r\n  border-bottom: 1px solid #EEEEEE;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: -3px;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  background-color: #FFFFFF;\r\n  color: #c5a47e;\r\n  opacity: 1;\r\n  text-decoration: none;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child    > a[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\n   .btn-group.select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  min-width: 100%;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n}\r\n\r\n   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child    > a[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n   .select[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border-bottom: 0 none;\r\n}\r\n\r\n   .dropdown-menu.dropdown-info[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu.dropdown-info[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #00abc0;\r\n}\r\n\r\n   .dropdown-menu.dropdown-success[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu.dropdown-success[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #7accb8;\r\n}\r\n\r\n   .dropdown-menu.dropdown-danger[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu.dropdown-danger[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #e78b90;\r\n}\r\n\r\n   .dropdown-menu.dropdown-warning[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu.dropdown-warning[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #f88f58;\r\n}\r\n\r\n   .dropdown-menu.dropdown-black[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu.dropdown-black[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n}\r\n\r\n   .dropdown-with-icons[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  padding-left: 0px;\r\n  line-height: 28px;\r\n}\r\n\r\n   .dropdown-with-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  line-height: 28px;\r\n  float: left;\r\n}\r\n\r\n   .dropdown-with-icons[_ngcontent-%COMP%]   i[class^=\"pe-\"][_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  width: 46px;\r\n}\r\n\r\n   .dropdown-with-icons[_ngcontent-%COMP%]   i[class^=\"fa\"][_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 38px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  box-shadow: 0 32px 44px -24px rgba(0, 0, 0, 0.23), 0 20px 25px 0px rgba(0, 0, 0, 0.12), 0 15px 10px -10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 6px;\r\n  margin-bottom: 30px;\r\n  transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]:not(.card-plain):not(.card-price):hover {\r\n  transform: scale(1.03);\r\n  box-shadow: 0 26px 50px -10px rgba(0, 0, 0, 0.38), 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 15px 10px -10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .subtitle-black[_ngcontent-%COMP%] {\r\n  color: #141414;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  opacity: .85;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]:hover   .header[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .image-header[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .image-header.image-full[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img.image-full[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image-header[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n  color: #333333;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n   .card-member[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n   .card-member[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n}\r\n\r\n   .card-member[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 transparent;\r\n  height: auto;\r\n  width: 120px;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .card-white[_ngcontent-%COMP%] {\r\n  background: #FFFFFF;\r\n}\r\n\r\n   .card-plain[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  background: none;\r\n}\r\n\r\n   .card-plain[_ngcontent-%COMP%]   .image-header[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  z-index: 3;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  top: 0;\r\n  margin-left: 220px;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: white;\r\n  text-align: center;\r\n  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\r\n  vertical-align: center;\r\n  line-height: 1.7;\r\n  position: relative;\r\n  top: 44%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  text-shadow: none;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 3.6em;\r\n  text-shadow: -2px 2px 0px rgba(0, 0, 0, 0.3), -2px 4px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 1.3em;\r\n  margin: 0 auto .5em;\r\n  line-height: 1.5;\r\n  letter-spacing: 0.125;\r\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  letter-spacing: 0.1em;\r\n  text-transform: uppercase;\r\n  margin: 1em 0 0.5em;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-transform: lowercase;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%], .section-header-blog[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%], .section-presentation-page[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  margin: 30px auto;\r\n}\r\n\r\n   .section-header[_ngcontent-%COMP%]   .separator.line-separator[_ngcontent-%COMP%]:before, .section-header[_ngcontent-%COMP%]   .separator.line-separator[_ngcontent-%COMP%]:after, .section-header-blog[_ngcontent-%COMP%]   .separator.line-separator[_ngcontent-%COMP%]:before, .section-header-blog[_ngcontent-%COMP%]   .separator.line-separator[_ngcontent-%COMP%]:after, .section-presentation-page[_ngcontent-%COMP%]   .separator.line-separator[_ngcontent-%COMP%]:before, .section-presentation-page[_ngcontent-%COMP%]   .separator.line-separator[_ngcontent-%COMP%]:after {\r\n  border-color: white;\r\n}\r\n\r\n   .section-header-small[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section-header-small[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%] {\r\n  min-height: 50vh;\r\n  height: auto;\r\n}\r\n\r\n   .section-clients-1[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin: 0 10px 10px 0;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  opacity: .9;\r\n  color: #343434;\r\n  padding: 3px 0;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #c5a47e !important;\r\n  border-bottom: 2px solid #c5a47e;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\r\n  opacity: 0;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  max-width: 760px;\r\n  min-height: 130px;\r\n}\r\n\r\n   .section-clients-2[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   p.large[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   .nbs-flexisel-inner[_ngcontent-%COMP%]:before, .section-clients-3[_ngcontent-%COMP%]   .nbs-flexisel-inner[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 6%;\r\n  height: 50px;\r\n  display: block;\r\n  z-index: 1;\r\n  content: \"\";\r\n  z-index: 3;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   .nbs-flexisel-inner[_ngcontent-%COMP%]:before {\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);\r\n  \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$left-color', endColorstr='$right-color',GradientType=1 );\r\n  \r\n  left: 0;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   .nbs-flexisel-inner[_ngcontent-%COMP%]:after {\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%);\r\n  \r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$left-color', endColorstr='$right-color',GradientType=1 );\r\n  \r\n  right: 0;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   #clients-carousel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   #clients-carousel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  cursor: pointer;\r\n  position: relative;\r\n  margin: 0;\r\n  max-height: 50px;\r\n  max-width: 200px;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   #clients-carousel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   #clients-carousel[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child:hover {\r\n  opacity: 0;\r\n}\r\n\r\n   .section-clients-3[_ngcontent-%COMP%]   .nbs-flexisel-nav-left[_ngcontent-%COMP%], .section-clients-3[_ngcontent-%COMP%]   .nbs-flexisel-nav-right[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n   .list-logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 120px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n   .list-logos[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\r\n  color: #c5a47e;\r\n}\r\n\r\n   .list-logos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  opacity: 0.9;\r\n  color: #333333;\r\n}\r\n\r\n   .list-logos-info[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\r\n  color: #00abc0;\r\n}\r\n\r\n   .list-logos-success[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\r\n  color: #7accb8;\r\n}\r\n\r\n   .list-logos-warning[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\r\n  color: #f88f58;\r\n}\r\n\r\n   .list-logos-danger[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .client-logo[_ngcontent-%COMP%] {\r\n  color: #e78b90;\r\n}\r\n\r\n   .client-logo[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 0 15px;\r\n}\r\n\r\n   .client-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  width: auto;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n   .client-logo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n   .section-team-1[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\n\r\n   .section-team-1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n}\r\n\r\n   .section-team-1[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .section-team-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #555;\r\n}\r\n\r\n   .section-team-1[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team-text[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 0 0 75px;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 15px 35px;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  background: none repeat scroll 0 0 transparent;\r\n  height: auto;\r\n  width: 120px;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .section-team-2[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .big-text[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%], .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\r\n  min-width: 65%;\r\n  padding: 0 15px;\r\n  border-top: 1px solid #e3e3e3;\r\n  border-bottom: 1px solid #e3e3e3;\r\n  font-size: 18px;\r\n  padding-top: 9px;\r\n  vertical-align: middle;\r\n  margin-top: 35px;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-transform: none;\r\n  color: #c5a47e;\r\n  max-width: 55%;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .section-team-3[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%] {\r\n  padding-top: 5em;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\r\n  padding: 0 10px;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  height: 120px;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n   .section-team-4[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .img-circle.img-profile[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n\r\n   .description[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n   .big-text[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  line-height: 25px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0;\r\n}\r\n\r\n   .small-text[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  text-align: center;\r\n}\r\n\r\n   .social-buttons[_ngcontent-%COMP%] {\r\n  margin-top: -20px;\r\n  border-top: 1px solid #DDDDDD;\r\n  text-align: center;\r\n}\r\n\r\n   .scroller[_ngcontent-%COMP%] {\r\n  transition: all 0.4s ease-out;\r\n}\r\n\r\n   .address[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 1.6em;\r\n}\r\n\r\n   .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n}\r\n\r\n   .section-contact-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .section-contact-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .section-contact-3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n   .section-contact-1[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .section-contact-1[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-radius: 0;\r\n  padding: 8px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n   .section-contact-1[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\r\n  margin-top: 90px;\r\n}\r\n\r\n   .section-contact-2[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n   .section-contact-2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  \r\n}\r\n\r\n   .section-contact-3[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-top: 30px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n   .section-contact-3[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n   .section-contact-3[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 40%;\r\n  height: 570px;\r\n  background-color: rgba(255, 255, 255, 0.75);\r\n  z-index: 3;\r\n  padding: 20px 20px 20px 60px;\r\n}\r\n\r\n   .section-contact-3[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n   .section-contact-3[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  height: 570px;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n\r\n   .section-contact-3[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   .big-map[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n   @media (min-width: 768px) {\r\n  .section-contact-3[_ngcontent-%COMP%] {\r\n    min-height: 570px;\r\n  }\r\n  .section-contact-3[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n  }\r\n}\r\n\r\n   .section-closure[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n   .section-closure[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n   .section-closure[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n  padding: 150px 0;\r\n}\r\n\r\n   .section-closure[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   \r\n\r\n   .section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 2;\r\n  position: absolute;\r\n  display: block;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%] {\r\n  padding-bottom: 0;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 100;\r\n  display: block;\r\n  margin-top: 30vh;\r\n  text-align: center;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .button-contact[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .button-contact[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .button-contact[_ngcontent-%COMP%] {\r\n  padding: 25px 0 17px;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  margin: 40px auto;\r\n  max-width: 760px;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .text-gold[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .text-gold[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .text-gold[_ngcontent-%COMP%] {\r\n  color: #c5a47e;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section-get-started[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .section-header-freebie[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .section-our-team-freebie[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   .section-get-started[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  margin: 15vh auto;\r\n}\r\n\r\n   .section-contact-4[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section-our-services[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n}\r\n\r\n   .section-our-projects-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n   .section-our-projects-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n   .section-our-projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n   .member[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  min-height: 100px;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%], .section-our-clients[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\r\n  margin: 30px auto;\r\n  text-align: center;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .section-our-clients[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin: 0 10px 10px 0;\r\n}\r\n\r\n   .section-our-clients[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%], .section-our-clients[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  max-width: 760px;\r\n  min-height: 130px;\r\n  margin: 0 auto;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   p.large[_ngcontent-%COMP%], .section-our-clients[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   p.large[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n   .section-contact-4[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   \r\n\r\n   \r\n\r\n   .section-header-freebie[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n   .section-our-team-freebie[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  margin-top: 14vh;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  min-height: 0;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .list-logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: none;\r\n  transform: none;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .list-logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n   .section-our-clients-freebie[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image-clients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n   .image-clients[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  margin: 0 auto;\r\n  margin-right: 8px;\r\n  margin-left: 8px;\r\n}\r\n\r\n   .image-clients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n   \r\n\r\n   \r\n\r\n   .section-presentation-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  margin-top: 4vh;\r\n}\r\n\r\n   .fa-pay[_ngcontent-%COMP%] {\r\n  font-size: 30px !important;\r\n  display: inline-block;\r\n  margin: 5px 1px 0;\r\n  width: auto;\r\n  color: #FFFFFF;\r\n}\r\n\r\n   .share-area[_ngcontent-%COMP%] {\r\n  margin-top: 80px;\r\n}\r\n\r\n   \r\n\r\n   @media (min-width: 768px) {\r\n  .nav[_ngcontent-%COMP%]    > .social-links[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n  }\r\n\r\n  .section-header[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\r\n    max-width: 20em;\r\n  }\r\n}\r\n\r\n   @media (min-width: 992px) {\r\n  .section-we-made-1[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  .section-we-made-1[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  .section-we-made-1[_ngcontent-%COMP%]   .transition-1[_ngcontent-%COMP%] {\r\n    \r\n  }\r\n\r\n  .section-we-made-2[_ngcontent-%COMP%]   .scroll-area[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    height: 100%;\r\n    position: relative;\r\n    margin: 0 auto;\r\n  }\r\n  .section-we-made-2[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0;\r\n    overflow: hidden;\r\n  }\r\n  .section-we-made-2[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    width: 2500px;\r\n    margin: 0;\r\n    position: relative;\r\n  }\r\n  .section-we-made-2[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .row.scroller[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n  .section-we-made-2[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .row.scroller[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    height: 400px;\r\n  }\r\n  .section-we-made-2[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .row.scroller.scroller-portrait[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] {\r\n    height: 550px;\r\n  }\r\n  .section-we-made-2[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #777777;\r\n    display: inline;\r\n  }\r\n}\r\n\r\n   @media (max-width: 992px) {\r\n  .section-with-hover[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .over-area[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transition: background 0.25s, opacity 0.25s 0.25s;\r\n    transition-delay: 0;\r\n    -webkit-transition-delay: 0;\r\n  }\r\n  .section-with-hover[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .over-area[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    opacity: 0.2s;\r\n    filter: alpha(opacity=20s);\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    text-align: center;\r\n  }\r\n  .section-with-hover[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .over-area[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transition: opacity 0.3s, transform 0.3s;\r\n    transform: translateY(0px);\r\n  }\r\n  .section-with-hover[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .over-area[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .project-content[_ngcontent-%COMP%]   .project-details[_ngcontent-%COMP%] {\r\n    padding: 0 30px;\r\n  }\r\n  .project-content[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\r\n    right: -15px;\r\n  }\r\n  .project-content[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .section-header[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%], .section-header[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%]:after, .section-header[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]:after {\r\n    height: 80vh;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 4.5em;\r\n    letter-spacing: 0.07em;\r\n    line-height: 1.7;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 1.125em;\r\n    margin-top: 50px;\r\n  }\r\n  .section-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\r\n    width: 12em;\r\n  }\r\n\r\n  .section-signin[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n  .section-signin[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .section-signin[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .section-signin[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\r\n    min-height: 0;\r\n  }\r\n}\r\n\r\n   @media (min-width: 768px) and (max-width: 1200px) {\r\n  h1.responsive-small[_ngcontent-%COMP%] {\r\n    font-size: 4em !important;\r\n  }\r\n}\r\n\r\n   @media (max-width: 768px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    line-height: 1.25;\r\n  }\r\n  h1.responsive-small[_ngcontent-%COMP%] {\r\n    font-size: 2.3em !important;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.625em;\r\n    line-height: 1.15384615;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 1.375em;\r\n    line-height: 1.13636364;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    line-height: 1.11111111;\r\n  }\r\n\r\n  .navbar-transparent[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    text-align: center !important;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .section-we-made-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .section-clients-1[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 33%;\r\n  }\r\n  .section-clients-1[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n  .section-clients-1[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\r\n    opacity: 0;\r\n  }\r\n\r\n  .section-clients-2[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n    min-height: 130px;\r\n  }\r\n\r\n  .section-team-1[_ngcontent-%COMP%]   .static-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .section-team-3[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    margin-top: -10px;\r\n  }\r\n  .section-team-3[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n\r\n  .btn[_ngcontent-%COMP%] {\r\n    margin: 0 auto 15px;\r\n    float: none;\r\n  }\r\n\r\n  .section-contact-3[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    width: 100% !important;\r\n    padding: 20px !important;\r\n  }\r\n\r\n  .project-content[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .project-text[_ngcontent-%COMP%] {\r\n    text-align: center !important;\r\n  }\r\n  .project-content[_ngcontent-%COMP%]   .article[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-align: center !important;\r\n    margin-top: 25px;\r\n  }\r\n  footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n  }\r\n}\r\n\r\n   @-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n   @keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n   #bodyClick[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  opacity: 0;\r\n  top: 0;\r\n  left: auto;\r\n  right: 300px;\r\n  content: \"\";\r\n  z-index: 1029;\r\n  overflow-x: hidden;\r\n}\r\n\r\n   body[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n   .navbar-header[_ngcontent-%COMP%] {\r\n  transform: translate3d(0px, 0, 0);\r\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n  position: relative;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  display: block;\r\n  top: 0;\r\n  height: 100vh !important;\r\n  width: 300px;\r\n  right: 0;\r\n  z-index: 1032;\r\n  visibility: visible;\r\n  background-color: #999;\r\n  overflow-y: visible;\r\n  border-top: none;\r\n  text-align: left;\r\n  border-left: 1px solid #e3e3e3;\r\n  padding-right: 0px;\r\n  padding-left: 40px;\r\n  max-height: none !important;\r\n  transform: translate3d(300px, 0, 0);\r\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 3;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  margin: 0px 0px;\r\n  color: #434547;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  line-height: 13px;\r\n  padding: 24px 0;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\r\n  color: #c5a47e;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.social-links[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: -40px;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  padding: 24px 15px;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]::after {\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: #FFFFFF;\r\n  display: block;\r\n  content: \"\";\r\n  z-index: 1;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse.has-image[_ngcontent-%COMP%]::after {\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: rgba(17, 17, 17, 0.8);\r\n  display: block;\r\n  content: \"\";\r\n  z-index: 1;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #434547;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-burger[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #c5a47e;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]:after, .navbar-burger[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]:before {\r\n  display: none;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  float: none;\r\n  width: auto;\r\n  margin-top: 0;\r\n  background-color: transparent;\r\n  border: 0;\r\n  box-shadow: none;\r\n  transition: none;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  position: static;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  width: 24px;\r\n  height: 2px;\r\n  border-radius: 1px;\r\n}\r\n\r\n   .navbar-burger.navbar-transparent[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\r\n  margin-top: 12px;\r\n  margin-bottom: 8px;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%], .navbar-burger[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%], .navbar-burger[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n  outline: 1px solid transparent;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n  top: 0px;\r\n  -webkit-animation: topbar-back 500ms linear 0s;\r\n  animation: topbar-back 500ms 0s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n  bottom: 0px;\r\n  -webkit-animation: bottombar-back 500ms linear 0s;\r\n  animation: bottombar-back 500ms 0s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .toggled[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n  top: 6px;\r\n  -webkit-animation: topbar-x 500ms linear 0s;\r\n  animation: topbar-x 500ms 0s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .toggled[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n\r\n   .navbar-burger[_ngcontent-%COMP%]   .toggled[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n  bottom: 6px;\r\n  -webkit-animation: bottombar-x 500ms linear 0s;\r\n  animation: bottombar-x 500ms 0s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n   @keyframes topbar-x {\r\n  0% {\r\n    top: 0px;\r\n    transform: rotate(0deg);\r\n  }\r\n  45% {\r\n    top: 6px;\r\n    transform: rotate(145deg);\r\n  }\r\n  75% {\r\n    transform: rotate(130deg);\r\n  }\r\n  100% {\r\n    transform: rotate(135deg);\r\n  }\r\n}\r\n\r\n   @-webkit-keyframes topbar-x {\r\n  0% {\r\n    top: 0px;\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  45% {\r\n    top: 6px;\r\n    -webkit-transform: rotate(145deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotate(130deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(135deg);\r\n  }\r\n}\r\n\r\n   @keyframes topbar-back {\r\n  0% {\r\n    top: 6px;\r\n    transform: rotate(135deg);\r\n  }\r\n  45% {\r\n    transform: rotate(-10deg);\r\n  }\r\n  75% {\r\n    transform: rotate(5deg);\r\n  }\r\n  100% {\r\n    top: 0px;\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n   @-webkit-keyframes topbar-back {\r\n  0% {\r\n    top: 6px;\r\n    -webkit-transform: rotate(135deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: rotate(-10deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotate(5deg);\r\n  }\r\n  100% {\r\n    top: 0px;\r\n    -webkit-transform: rotate(0);\r\n  }\r\n}\r\n\r\n   @keyframes bottombar-x {\r\n  0% {\r\n    bottom: 0px;\r\n    transform: rotate(0deg);\r\n  }\r\n  45% {\r\n    bottom: 6px;\r\n    transform: rotate(-145deg);\r\n  }\r\n  75% {\r\n    transform: rotate(-130deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-135deg);\r\n  }\r\n}\r\n\r\n   @-webkit-keyframes bottombar-x {\r\n  0% {\r\n    bottom: 0px;\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  45% {\r\n    bottom: 6px;\r\n    -webkit-transform: rotate(-145deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotate(-130deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-135deg);\r\n  }\r\n}\r\n\r\n   @keyframes bottombar-back {\r\n  0% {\r\n    bottom: 6px;\r\n    transform: rotate(-135deg);\r\n  }\r\n  45% {\r\n    transform: rotate(10deg);\r\n  }\r\n  75% {\r\n    transform: rotate(-5deg);\r\n  }\r\n  100% {\r\n    bottom: 0px;\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n   @-webkit-keyframes bottombar-back {\r\n  0% {\r\n    bottom: 6px;\r\n    -webkit-transform: rotate(-135deg);\r\n  }\r\n  45% {\r\n    -webkit-transform: rotate(10deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotate(-5deg);\r\n  }\r\n  100% {\r\n    bottom: 0px;\r\n    -webkit-transform: rotate(0);\r\n  }\r\n}\r\n\r\n   .wrapper[_ngcontent-%COMP%] {\r\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n  left: 0;\r\n  background-color: white;\r\n}\r\n\r\n   .wrapper.transition[_ngcontent-%COMP%] {\r\n  transform: translate3d(0px, 0, 0);\r\n}\r\n\r\n   .nav-open[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\r\n  transform: translate3d(-150px, 0, 0);\r\n}\r\n\r\n   .nav-open[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\r\n  transform: translate3d(-200px, 0, 0);\r\n}\r\n\r\n   @media (min-width: 768px) {\r\n  .navbar-form[_ngcontent-%COMP%] {\r\n    margin-top: 21px;\r\n    margin-bottom: 21px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .navbar-search-form[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .section-pricing[_ngcontent-%COMP%]   [class*=\"col-\"][_ngcontent-%COMP%]:not(:first-child):not(:last-child)    > .card[_ngcontent-%COMP%]:not(.card-black) {\r\n    border-radius: 0;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.card-black) {\r\n    box-shadow: none;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   [class*=\"col-\"][_ngcontent-%COMP%]:first-child    > .card[_ngcontent-%COMP%]:not(.card-black) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   [class*=\"col-\"][_ngcontent-%COMP%]:last-child    > .card[_ngcontent-%COMP%]:not(.card-black) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n\r\n  .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .nav-open[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n    transform: translate3d(0px, 0, 0);\r\n  }\r\n\r\n  .navbar-burger[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n  }\r\n  .navbar-burger[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .navbar-burger[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-right: 0;\r\n  }\r\n\r\n  body[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%], body[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n  body[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n}\r\n\r\n   \r\n\r\n   @media (max-width: 767px) {\r\n  .navbar-transparent[_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    background-color: rgba(0, 0, 0, 0.45);\r\n  }\r\n\r\n  #bodyClick[_ngcontent-%COMP%] {\r\n    right: 230px;\r\n  }\r\n\r\n  .navbar-collapse[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    display: block;\r\n    top: 0;\r\n    height: 100vh;\r\n    width: 230px;\r\n    right: 0;\r\n    z-index: 1032;\r\n    visibility: visible;\r\n    background-color: #999;\r\n    overflow-y: visible;\r\n    border-top: none;\r\n    text-align: left;\r\n    border-left: 1px solid #e3e3e3;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    max-height: none !important;\r\n    transform: translate3d(230px, 0, 0);\r\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 3;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #e5e5e5;\r\n    padding-right: 15px;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 0;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    margin: 0px 0px;\r\n    color: #434547;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    line-height: 13px;\r\n    padding: 24px 0;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\r\n    color: #c5a47e;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.social-links[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-left: -40px;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li.social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding: 24px 15px;\r\n  }\r\n  .navbar-collapse[_ngcontent-%COMP%]::after {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #FFFFFF;\r\n    display: block;\r\n    content: \"\";\r\n    z-index: 1;\r\n  }\r\n  .navbar-collapse.has-image[_ngcontent-%COMP%]::after {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: rgba(17, 17, 17, 0.8);\r\n    display: block;\r\n    content: \"\";\r\n    z-index: 1;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n\r\n  .nav-open[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n    transform: translate3d(0px, 0, 0);\r\n  }\r\n\r\n  .nav-open[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    transform: translate3d(-115px, 0, 0);\r\n  }\r\n\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px 10px;\r\n  }\r\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n  }\r\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child    > a[_ngcontent-%COMP%] {\r\n    padding-bottom: 20px;\r\n  }\r\n\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\r\n    color: white;\r\n  }\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    color: #434547;\r\n  }\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    opacity: .7;\r\n    background: transparent;\r\n  }\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n    opacity: 1;\r\n  }\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav.navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\r\n    opacity: 1;\r\n  }\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   .caret[_ngcontent-%COMP%] {\r\n    border-bottom-color: #777;\r\n    border-top-color: #777;\r\n  }\r\n  [class*=\"navbar-\"][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active   .caret[_ngcontent-%COMP%] {\r\n    border-bottom-color: white;\r\n    border-top-color: white;\r\n  }\r\n\r\n  .dropdown-menu[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-fixed-top[_ngcontent-%COMP%] {\r\n    -webkit-backface-visibility: hidden;\r\n  }\r\n\r\n  .social-line[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px 0;\r\n  }\r\n\r\n  .subscribe-line[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px 0;\r\n  }\r\n\r\n  .social-line.pull-right[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n\r\n  .footer[_ngcontent-%COMP%]   nav.pull-left[_ngcontent-%COMP%] {\r\n    float: none !important;\r\n  }\r\n\r\n  .footer[_ngcontent-%COMP%]:not(.footer-big)   nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: none;\r\n  }\r\n\r\n  .social-area.pull-right[_ngcontent-%COMP%] {\r\n    float: none !important;\r\n  }\r\n\r\n  .form-control[_ngcontent-%COMP%]    + .form-control-feedback[_ngcontent-%COMP%] {\r\n    margin-top: -8px;\r\n  }\r\n\r\n  .navbar-toggle[_ngcontent-%COMP%]:hover, .navbar-toggle[_ngcontent-%COMP%]:focus {\r\n    background-color: transparent !important;\r\n  }\r\n\r\n  .btn.dropdown-toggle[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .media-post[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: none !important;\r\n    display: block;\r\n    margin: 0 auto 10px;\r\n  }\r\n\r\n  .media-post[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .nav-open[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\r\n    transform: translate3d(-280px, 0, 0);\r\n  }\r\n}\r\n\r\n   @media (max-width: 767px) {\r\n  .footer[_ngcontent-%COMP%]   .social-area.pull-right[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   nav.pull-left[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .section-numbers[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n  }\r\n\r\n  .section-pricing[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%] {\r\n    height: auto;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n    border-radius: 10px;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n    height: 215vh;\r\n  }\r\n}\r\n\r\n   @media (max-width: 930px) {\r\n  .section.section-our-team[_ngcontent-%COMP%]   .title-description[_ngcontent-%COMP%], .section.section-we-do[_ngcontent-%COMP%]   .title-description[_ngcontent-%COMP%] {\r\n    max-width: 550px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .section.section-we-do[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%] {\r\n    max-width: 420px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n   @media (min-width: 768px) {\r\n  .section-contact-us[_ngcontent-%COMP%] {\r\n    min-height: 570px;\r\n  }\r\n\r\n  .section-contact-us[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n  }\r\n\r\n  .section-pricing[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%]:first-child {\r\n    padding-right: 0;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    padding-left: 0;\r\n  }\r\n  .section-pricing[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%]:nth-child(2) {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n   @media (max-width: 992px) {\r\n  .section-faq[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    max-width: 480px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .section-faq[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .section.section-we-are[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n    max-width: 560px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .text-center[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .section.section-info[_ngcontent-%COMP%]   .info-pricing[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    margin: 50px auto;\r\n  }\r\n\r\n  .section.section-info[_ngcontent-%COMP%] {\r\n    height: auto;\r\n  }\r\n\r\n  .section.section-info[_ngcontent-%COMP%]   .info-pricing[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    text-align: -webkit-center;\r\n  }\r\n\r\n  .section.section-info[_ngcontent-%COMP%]   .info-pricing[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    float: none;\r\n    margin-top: 0;\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n   @media (min-width: 992px) {\r\n  .section-pricing[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   [class^=\"col-\"][_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n   .new-title-area[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7R0FDcEI7O0dBRUE7S0FDRSxlQUFlO0dBQ2pCOztHQUVBLHNCQUFzQjs7R0FJdEI7Ozs7Ozs7Ozs7OztrSUFZK0g7O0dBRWxJLDhCQUE4Qjs7R0FDOUI7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDhCQUE4QjtBQUNoQzs7R0FFQTtFQUNFLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjs7R0FDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztHQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0dBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7R0FDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztHQUNBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsMEJBQTBCO0VBQzVCO0FBQ0Y7O0dBRUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLDhDQUE4QztBQUNoRDs7R0FDQTs7Ozs7Ozs7Ozs7OztFQWFFLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7O0dBRUE7RUFDRSxlQUFlO0FBQ2pCOztHQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7R0FFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztHQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztHQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztHQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7R0FFQTtFQUNFLGdCQUFnQjtBQUNsQjs7R0FFQTtFQUNFLGVBQWU7RUFD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LGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtBQUNGOztHQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7R0FFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuaWNvbmRpc3BsYXl7XHJcbiAgICBmb250LXNpemU6IDYycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjZweDtcclxuICAgIGNvbG9yOiAjYzVhNDdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgfVxyXG5cclxuICAgI3Rlc3RpbW9uaWFsc3tcclxuICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qIEZyb20gIGV4dGVybmFsIGNzcyovXHJcblxyXG5cclxuXHJcbiAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIEdhaWEgQm9vdHN0cmFwIFRlbXBsYXRlIC0gdjEuMC4xXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9nYWlhLWJvb3RzdHJhcC10ZW1wbGF0ZVxyXG4qIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvZ2FpYS1ib290c3RyYXAtdGVtcGxhdGUvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuKiBDb3B5cmlnaHQgMjAxOSBDcmVhdGl2ZSBUaW0gKGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuICovXHJcblxyXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAgICAgICAgICovXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1OGVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTVlbSkge1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1ZW0pIHtcclxuICBib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMTE1JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NWVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIGZpeCAqL1xyXG4gIH1cclxufVxyXG5cclxuaDEsXHJcbi5oMSxcclxuaDIsXHJcbi5oMixcclxuaDMsXHJcbi5oMyxcclxuaDQsXHJcbi5oNCxcclxuaDUsXHJcbi5oNSxcclxuaDYsXHJcbi5oNixcclxuLmNvbnRlbnQtYmxvZyBwIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbWJvXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG59XHJcbmgxIGEsXHJcbi5oMSBhLFxyXG5oMiBhLFxyXG4uaDIgYSxcclxuaDMgYSxcclxuLmgzIGEsXHJcbmg0IGEsXHJcbi5oNCBhLFxyXG5oNSBhLFxyXG4uaDUgYSxcclxuaDYgYSxcclxuLmg2IGEsXHJcbi5jb250ZW50LWJsb2cgcCBhIHtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FtYm9cIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2cge1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxufVxyXG4uY29udGVudC1ibG9nIHAge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMSwgLmgxIHtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBsaW5lLWhlaWdodDogMS4yMTM0ODMxNDZlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDIsIC5oMiB7XHJcbiAgZm9udC1zaXplOiAyLjRlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxuICBtYXJnaW46IDAuNGVtIDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgzLCAuaDMge1xyXG4gIGZvbnQtc2l6ZTogMS42MWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA1ZW07XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5oNCwgLmg0IHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjcxNDI4NTcxNGVtO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMCAwIC43NWVtO1xyXG59XHJcblxyXG5wLFxyXG5sYWJlbCxcclxuLmJ0bixcclxuLmZvcm0tY29udHJvbCxcclxuLnRpdGxlIGg1LFxyXG4ubmF2YmFyLFxyXG4uYnJhbmQsXHJcbi5idG4tc2ltcGxlLFxyXG5hLFxyXG4udGQtbmFtZSxcclxudGQsXHJcbnNtYWxsLFxyXG4ubWVkaWEgaDUsXHJcbi5zdWJ0aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIG9wYWNpdHk6IC43O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi50aXRsZSBwIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLnRpdGxlLW1vZGVybiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAjYzVhNDdlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWluZm8ge1xyXG4gIGNvbG9yOiAjMDBhYmMwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjN2FjY2I4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZjg4ZjU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6ICNlNzhiOTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZ29sZCxcclxuLnRpdGxlLWdvbGQge1xyXG4gIGNvbG9yOiAjYzVhNDdlO1xyXG59XHJcblxyXG4ucXVvdGVzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnF1b3RlczpiZWZvcmUsIC5xdW90ZXM6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuLnF1b3RlczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDFDXCI7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDVweDtcclxufVxyXG4ucXVvdGVzOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcMjAxRFwiO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGNvbG9yOiAjYzVhNDdlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZXBhcmF0b3I6YmVmb3JlLCAuc2VwYXJhdG9yOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDAlO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1YTQ3ZTtcclxufVxyXG4uc2VwYXJhdG9yOmJlZm9yZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNlcGFyYXRvcjphZnRlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2VwYXJhdG9yLWRhbmdlciB7XHJcbiAgY29sb3I6ICNlNzhiOTA7XHJcbn1cclxuLnNlcGFyYXRvci1kYW5nZXI6YmVmb3JlLCAuc2VwYXJhdG9yLWRhbmdlcjphZnRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTc4YjkwO1xyXG59XHJcblxyXG5wLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpmb2N1cywgYTphY3RpdmUsXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5zZWxlY3Q6Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdID4gaW5wdXRbdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLnVpLXNsaWRlci1oYW5kbGU6Zm9jdXMsXHJcbi5uYXZiYXItdG9nZ2xlIHtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qICAgICAgICAgICBBbmltYXRpb25zICAgICAgICAgICAgICAqL1xyXG4uZm9ybS1jb250cm9sLFxyXG4uaW5wdXQtZ3JvdXAtYWRkb24sXHJcbi50YWdzaW5wdXQsXHJcbi5uYXZiYXIsXHJcbi5uYXZiYXIgLmFsZXJ0IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxufVxyXG5cclxuLnRhZ3NpbnB1dCAudGFnLFxyXG4udGFnc2lucHV0LXJlbW92ZS1saW5rLFxyXG4uZmlsdGVyLFxyXG4uYnRuLWhvdmVyLFxyXG5bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSBpLFxyXG5ib2R5ID4gLm5hdmJhci1jb2xsYXBzZSBhIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhcjtcclxufVxyXG5cclxuLmJ0bi1tb3JwaGluZyAuZmEsXHJcbi5idG4tbW9ycGhpbmcgLmNpcmNsZSxcclxuLmdzZGstY29sbGFwc2Uge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDM3MG1zIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzNzBtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDM3MG1zIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDM3MG1zIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzcwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uZmEge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbi10b3Age1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5iZXR0ZXItYnJvd3NlciB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IDIwMHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmV0dGVyLWJyb3dzZXIgZGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW5mby1pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmluZm8taWNvbiAuaWNvbiB7XHJcbiAgZm9udC1zaXplOiA2MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2NnB4O1xyXG4gIGNvbG9yOiAjYzVhNDdlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmluZm8taWNvbiAuZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjNWE0N2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYXZhdGFyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYXZhdGFyLWRhbmdlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTc4YjkwO1xyXG59XHJcblxyXG4qOjpzZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNlNzhiOTA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuODc1ZW07XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgem9vbU91dCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4uem9vbU91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbU91dDtcclxuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMzI7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC4zLCAxKTtcclxufVxyXG4ubG9hZGluZy5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2FkaW5nIC5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTAzMztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5sb2FkaW5nIC5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGVyIHtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG4ubG9hZGluZyAubG9hZGluZy1jb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi8qIEJVVFRPTlMgKi9cclxuLmJ0bi1ibGFjayBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNHB4O1xyXG4gIHJpZ2h0OiAwLjI1ZW07XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uYnRuLWJsYWNrOmhvdmVyIGksIC5idG4tYmxhY2s6Zm9jdXMgaSB7XHJcbiAgcmlnaHQ6IDI2cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogQlVUVE9OUyAqL1xyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6ICNkMGNkYmM7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcblxyXG5hLFxyXG4ubGlzdC1sb2dvcyBhIGltZzpmaXJzdC1jaGlsZCxcclxuLnNlY3Rpb24tY2xpZW50cy0zICNjbGllbnRzLWNhcm91c2VsIGxpIGltZzpmaXJzdC1jaGlsZCxcclxuLnByb2plY3QtY29udGVudCAuaWNvbi1jbG9zZSBpLCAubmF2LXRleHQgPiBsaS5hY3RpdmUgYSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5idG4sXHJcbi5idG4tYmxhY2sgaSxcclxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1wbGFjZWhvbGRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiAgIGVuZCBhbmltYXRpb24gICAqL1xyXG4uYm9keS1sYXllciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTAzMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcclxufVxyXG4uYm9keS1sYXllciAub3BlbiB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmNhcmQgLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNzVweDtcclxuICBsaW5lLWhlaWdodDogNzVweDtcclxufVxyXG4uY2FyZCAuaWNvbiB+IGgzIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYnRuLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0biB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODg4ODg4O1xyXG4gIGNvbG9yOiAjODg4ODg4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmUsIC5idG4uYWN0aXZlLCAub3BlbiA+IC5idG4uZHJvcGRvd24tdG9nZ2xlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bjpob3ZlcixcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG46Zm9jdXMsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuOmFjdGl2ZSxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4uYWN0aXZlLCAub3BlbiA+XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi5idG46ZGlzYWJsZWQsIC5idG5bZGlzYWJsZWRdLCAuYnRuLmRpc2FibGVkLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bjpkaXNhYmxlZCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG5bZGlzYWJsZWRdLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi5kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODg4ODg4O1xyXG59XHJcbi5idG4uYnRuLWZpbGwsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLmJ0bi1maWxsIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbn1cclxuLmJ0bi5idG4tZmlsbDpob3ZlciwgLmJ0bi5idG4tZmlsbDpmb2N1cywgLmJ0bi5idG4tZmlsbDphY3RpdmUsIC5idG4uYnRuLWZpbGwuYWN0aXZlLCAub3BlbiA+IC5idG4uYnRuLWZpbGwuZHJvcGRvd24tdG9nZ2xlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi5idG4tZmlsbDpob3ZlcixcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4uYnRuLWZpbGw6Zm9jdXMsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLmJ0bi1maWxsOmFjdGl2ZSxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4uYnRuLWZpbGwuYWN0aXZlLCAub3BlbiA+XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLmJ0bi1maWxsLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnRuLmJ0bi1maWxsIC5jYXJldCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4uYnRuLWZpbGwgLmNhcmV0IHtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idG4gLmNhcmV0LFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0biAuY2FyZXQge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG46aG92ZXIsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuOmZvY3VzIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG4uYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUsIC5vcGVuID4gLmJ0bi5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuOmFjdGl2ZSxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4uYWN0aXZlLCAub3BlbiA+XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4uYnRuLWljb24sXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLmJ0bi1pY29uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLWRhbmdlcixcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tZGFuZ2VyIHtcclxuICBib3JkZXItY29sb3I6ICNlNzhiOTA7XHJcbiAgY29sb3I6ICNlNzhiOTA7XHJcbn1cclxuLmJ0bi1kYW5nZXI6aG92ZXIsIC5idG4tZGFuZ2VyOmZvY3VzLCAuYnRuLWRhbmdlcjphY3RpdmUsIC5idG4tZGFuZ2VyLmFjdGl2ZSwgLm9wZW4gPiAuYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWRhbmdlcjpob3ZlcixcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tZGFuZ2VyOmZvY3VzLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXI6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXIuYWN0aXZlLCAub3BlbiA+XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZTQ3YTgwO1xyXG4gIGJvcmRlci1jb2xvcjogI2U0N2E4MDtcclxufVxyXG4uYnRuLWRhbmdlcjpkaXNhYmxlZCwgLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLCAuYnRuLWRhbmdlci5kaXNhYmxlZCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tZGFuZ2VyOmRpc2FibGVkLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXIuZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2U3OGI5MDtcclxufVxyXG4uYnRuLWRhbmdlci5idG4tZmlsbCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tZGFuZ2VyLmJ0bi1maWxsIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc4YjkwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbn1cclxuLmJ0bi1kYW5nZXIuYnRuLWZpbGw6aG92ZXIsIC5idG4tZGFuZ2VyLmJ0bi1maWxsOmZvY3VzLCAuYnRuLWRhbmdlci5idG4tZmlsbDphY3RpdmUsIC5idG4tZGFuZ2VyLmJ0bi1maWxsLmFjdGl2ZSwgLm9wZW4gPiAuYnRuLWRhbmdlci5idG4tZmlsbC5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWRhbmdlci5idG4tZmlsbDpob3ZlcixcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tZGFuZ2VyLmJ0bi1maWxsOmZvY3VzLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXIuYnRuLWZpbGw6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXIuYnRuLWZpbGwuYWN0aXZlLCAub3BlbiA+XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWRhbmdlci5idG4tZmlsbC5kcm9wZG93bi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDdhODA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmJ0bi1kYW5nZXIuYnRuLWZpbGwgLmNhcmV0LFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1kYW5nZXIuYnRuLWZpbGwgLmNhcmV0IHtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idG4tZGFuZ2VyIC5jYXJldCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tZGFuZ2VyIC5jYXJldCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U3OGI5MDtcclxufVxyXG5cclxuLmJ0bi1ibGFjayxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tYmxhY2sge1xyXG4gIGJvcmRlci1jb2xvcjogIzMzMzMzMztcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uYnRuLWJsYWNrOmhvdmVyLCAuYnRuLWJsYWNrOmZvY3VzLCAuYnRuLWJsYWNrOmFjdGl2ZSwgLmJ0bi1ibGFjay5hY3RpdmUsIC5vcGVuID4gLmJ0bi1ibGFjay5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWJsYWNrOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1ibGFjazpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tYmxhY2s6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1ibGFjay5hY3RpdmUsIC5vcGVuID5cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tYmxhY2suZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzM5M2IzZDtcclxuICBib3JkZXItY29sb3I6ICMzOTNiM2Q7XHJcbn1cclxuLmJ0bi1ibGFjazpkaXNhYmxlZCwgLmJ0bi1ibGFja1tkaXNhYmxlZF0sIC5idG4tYmxhY2suZGlzYWJsZWQsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWJsYWNrOmRpc2FibGVkLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1ibGFja1tkaXNhYmxlZF0sXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWJsYWNrLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmJ0bi1ibGFjay5idG4tZmlsbCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tYmxhY2suYnRuLWZpbGwge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxufVxyXG4uYnRuLWJsYWNrLmJ0bi1maWxsOmhvdmVyLCAuYnRuLWJsYWNrLmJ0bi1maWxsOmZvY3VzLCAuYnRuLWJsYWNrLmJ0bi1maWxsOmFjdGl2ZSwgLmJ0bi1ibGFjay5idG4tZmlsbC5hY3RpdmUsIC5vcGVuID4gLmJ0bi1ibGFjay5idG4tZmlsbC5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWJsYWNrLmJ0bi1maWxsOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1ibGFjay5idG4tZmlsbDpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tYmxhY2suYnRuLWZpbGw6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1ibGFjay5idG4tZmlsbC5hY3RpdmUsIC5vcGVuID5cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4tYmxhY2suYnRuLWZpbGwuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjNkO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idG4tYmxhY2suYnRuLWZpbGwgLmNhcmV0LFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi1ibGFjay5idG4tZmlsbCAuY2FyZXQge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmJ0bi1ibGFjayAuY2FyZXQsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLWJsYWNrIC5jYXJldCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmJ0bi13aGl0ZSxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUge1xyXG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiAuOTtcclxufVxyXG4uYnRuLXdoaXRlOmhvdmVyLCAuYnRuLXdoaXRlOmZvY3VzLCAuYnRuLXdoaXRlOmFjdGl2ZSwgLmJ0bi13aGl0ZS5hY3RpdmUsIC5vcGVuID4gLmJ0bi13aGl0ZS5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZTpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGU6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZS5hY3RpdmUsIC5vcGVuID5cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmJ0bi13aGl0ZTpkaXNhYmxlZCwgLmJ0bi13aGl0ZVtkaXNhYmxlZF0sIC5idG4td2hpdGUuZGlzYWJsZWQsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlOmRpc2FibGVkLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZVtkaXNhYmxlZF0sXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmJ0bi13aGl0ZS5idG4tZmlsbCxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUuYnRuLWZpbGwge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxufVxyXG4uYnRuLXdoaXRlLmJ0bi1maWxsOmhvdmVyLCAuYnRuLXdoaXRlLmJ0bi1maWxsOmZvY3VzLCAuYnRuLXdoaXRlLmJ0bi1maWxsOmFjdGl2ZSwgLmJ0bi13aGl0ZS5idG4tZmlsbC5hY3RpdmUsIC5vcGVuID4gLmJ0bi13aGl0ZS5idG4tZmlsbC5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlLmJ0bi1maWxsOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZS5idG4tZmlsbDpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUuYnRuLWZpbGw6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZS5idG4tZmlsbC5hY3RpdmUsIC5vcGVuID5cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUuYnRuLWZpbGwuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idG4td2hpdGUuYnRuLWZpbGwgLmNhcmV0LFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZS5idG4tZmlsbCAuY2FyZXQge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmJ0bi13aGl0ZSAuY2FyZXQsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlIC5jYXJldCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnRuLXdoaXRlOmFjdGl2ZSwgLmJ0bi13aGl0ZS5hY3RpdmUsIC5vcGVuID4gLmJ0bi13aGl0ZS5kcm9wZG93bi10b2dnbGUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlOmFjdGl2ZSxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUuYWN0aXZlLCAub3BlbiA+XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG4uYnRuLXdoaXRlLmJ0bi1maWxsLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZS5idG4tZmlsbCB7XHJcbiAgY29sb3I6ICM4ODg4ODg7XHJcbiAgb3BhY2l0eTogLjk7XHJcbn1cclxuLmJ0bi13aGl0ZS5idG4tZmlsbDpob3ZlciwgLmJ0bi13aGl0ZS5idG4tZmlsbDpmb2N1cyxcclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4td2hpdGUuYnRuLWZpbGw6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlLmJ0bi1maWxsOmZvY3VzIHtcclxuICBjb2xvcjogIzg4ODg4ODtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5idG4td2hpdGUuYnRuLXNpbXBsZTphY3RpdmUsIC5idG4td2hpdGUuYnRuLXNpbXBsZS5hY3RpdmUsXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXdoaXRlLmJ0bi1zaW1wbGU6YWN0aXZlLFxyXG4ubmF2YmFyIC5uYXZiYXItbmF2ID4gbGkgPiBhLmJ0bi13aGl0ZS5idG4tc2ltcGxlLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG46ZGlzYWJsZWQsIC5idG5bZGlzYWJsZWRdLCAuYnRuLmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcclxufVxyXG5cclxuLmJ0bi1yb3VuZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG4uYnRuLXJvdW5kLmJ0bi1pY29uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXNpbXBsZSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuLmJ0bi1zaW1wbGUuYnRuLWljb24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tbGcge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG59XHJcbi5idG4tbGcuYnRuLXJvdW5kIHtcclxuICBwYWRkaW5nOiAxN3B4IDMycHg7XHJcbn1cclxuLmJ0bi1sZy5idG4tc2ltcGxlIHtcclxuICBwYWRkaW5nOiAxOHB4IDMycHg7XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLmJ0bi1zbS5idG4tcm91bmQge1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5idG4tc20uYnRuLXNpbXBsZSB7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcbn1cclxuXHJcbi5idG4teHMge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLmJ0bi14cy5idG4tcm91bmQge1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcbi5idG4teHMuYnRuLXNpbXBsZSB7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcbn1cclxuXHJcbi5idG4td2Qge1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjREREREREO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNEREREREQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNEREREREQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjREREREREO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sLCAuaGFzLWVycm9yIC5mb3JtLWNvbnRyb2wsIC5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sOmZvY3VzLCAuaGFzLWVycm9yIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogI0UzRTNFMztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6ICM3YWNjYjg7XHJcbn1cclxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzdhY2NiODtcclxufVxyXG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiAjZTc4YjkwO1xyXG59XHJcbi5oYXMtZXJyb3IgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTc4YjkwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLm9wZW4gLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1sZyB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxufVxyXG5cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICBjb2xvcjogI2U3OGI5MDtcclxufVxyXG5cclxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIGNvbG9yOiAjN2FjY2I4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmhhcy1zdWNjZXNzIC5pbnB1dC1ncm91cC1hZGRvbiwgLmhhcy1lcnJvciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcclxufVxyXG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gIGJvcmRlci1jb2xvcjogI2U3OGI5MDtcclxuICBjb2xvcjogI2U3OGI5MDtcclxufVxyXG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbDpmb2N1cyArIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2FjY2I4O1xyXG4gIGNvbG9yOiAjN2FjY2I4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAuaW5wdXQtZ3JvdXAtYWRkb24sIC5mb3JtLWNvbnRyb2w6Zm9jdXMgfiAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmaXJzdC1jaGlsZCwgLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLCAuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0biwgLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5kcm9wZG93bi10b2dnbGUsIC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xyXG4gIGJvcmRlci1yaWdodDogMCBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpsYXN0LWNoaWxkLCAuaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCwgLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0biwgLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSwgLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLCAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSwgZmllbGRzZXRbZGlzYWJsZWRdIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgY29sb3I6ICM4ODg4ODg7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1wbGFpbiB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRTNFM0UzO1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuLmZvcm0tY29udHJvbC1wbGFpbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgxMTksIDExOSwgMTE5LCAwLjMpO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uc2VjdGlvbi1ncmF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gIHBhZGRpbmc6IDcwcHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24td2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNlY3Rpb24gLnRpdGxlLWFyZWEge1xyXG4gIG1heC13aWR0aDogNzYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gNzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWN0aW9uIC50aXRsZS1hcmVhIC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi5zZWN0aW9uIFtjbGFzcyo9XCJjb2wtXCJdIC50aXRsZS1hcmVhIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zZWN0aW9uIC50ZXh0LWFyZWEge1xyXG4gIHBhZGRpbmc6IDQuMzc1ZW0gMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2VjdGlvbiAudGV4dC1hcmVhIC5kZXNjcmlwdGlvbixcclxuLnNlY3Rpb24gLnRleHQtYXJlYSAuZGVzY3JpcHRpb24gcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi5zZWN0aW9uIC5wYXJhbGxheCxcclxuLnNlY3Rpb24gLnN0YXRpYy1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VjdGlvbiAucGFyYWxsYXggPiBpbWcsXHJcbi5zZWN0aW9uIC5wYXJhbGxheCAuZmlsdGVyID4gaW1nLFxyXG4uc2VjdGlvbiAuc3RhdGljLWltYWdlID4gaW1nLFxyXG4uc2VjdGlvbiAuc3RhdGljLWltYWdlIC5maWx0ZXIgPiBpbWcge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc2VjdGlvbiAucGFyYWxsYXgtc21hbGwge1xyXG4gIGhlaWdodDogNjV2aDtcclxufVxyXG4uc2VjdGlvbiAucmVzcG9uc2l2ZS1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YTQ3ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcbi5zZWN0aW9uIC5uYXYgPiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250YWN0LWZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAxMTBweDtcclxufVxyXG4uc2VjdGlvbi1jb250YWN0LWZvcm0gLnRpdGxlLWFyZWEge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnNlY3Rpb24tY29udGFjdC1mb3JtIC5zb2NpYWwtYnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMjBweCAwIDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5ncmFkaWVudC1pbWFnZTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDIyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDY1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICAvKiBGRjMuNisgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCB3aGl0ZSksIGNvbG9yLXN0b3AoMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpKSwgY29sb3Itc3RvcCgzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSksIGNvbG9yLXN0b3AoNjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpKTtcclxuICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDIyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDY1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDIyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDY1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSkgMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4gIC8qIElFMTArICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSkgMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4gIC8qIFczQyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTAgKTtcclxuICAvKiBJRTYtOSAqL1xyXG59XHJcblxyXG4uc2VjdGlvbi1vdXItdGVhbSAudGV4dC1hcmVhIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uZmlsdGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB6LWluZGV4OiAzO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgb3BhY2l0eTogLjc7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG4uZmlsdGVyIC50aXRsZS1hcmVhIC5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmZpbHRlciAuc2VwYXJhdG9yIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uZmlsdGVyIC5zZXBhcmF0b3I6YmVmb3JlLCAuZmlsdGVyIC5zZXBhcmF0b3I6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uZmlsdGVyLmZpbHRlci1jb2xvci1ibGFjazpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuLmZpbHRlci5maWx0ZXItY29sb3ItZ29sZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICNiZDk4NmM7XHJcbn1cclxuLmZpbHRlci5maWx0ZXItY29sb3ItZ3JlZW46YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjNTViZWE0O1xyXG59XHJcbi5maWx0ZXIuZmlsdGVyLWNvbG9yLWJsdWU6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA4YjljO1xyXG59XHJcbi5maWx0ZXIuZmlsdGVyLWNvbG9yLXB1cnBsZTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICM1MDIzNkY7XHJcbn1cclxuLmZpbHRlci5maWx0ZXItY29sb3ItcmVkOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2RlNjE2ODtcclxufVxyXG4uZmlsdGVyLmZpbHRlci1ncmFkaWVudC1ibGFjazpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMxZjFjMmM7XHJcbiAgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMWYxYzJjIDAlLCAjOTI4ZGFiIDEwMCUpO1xyXG4gIC8qIEZGMy42KyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjMWYxYzJjKSwgY29sb3Itc3RvcCgxMDAlLCAjOTI4ZGFiKSk7XHJcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMWYxYzJjIDAlLCAjOTI4ZGFiIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzFmMWMyYyAwJSwgIzkyOGRhYiAxMDAlKTtcclxuICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzFmMWMyYyAwJSwgIzkyOGRhYiAxMDAlKTtcclxuICAvKiBJRTEwKyAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZjFjMmMgMCUsICM5MjhkYWIgMTAwJSk7XHJcbiAgLyogVzNDICovXHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMxZjFjMmMnLCBlbmRDb2xvcnN0cj0nIzkyOGRhYicsR3JhZGllbnRUeXBlPTEgKTtcclxuICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbn1cclxuLmZpbHRlci5maWx0ZXItZ3JhZGllbnQtZ29sZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICNkZmQzODk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZGZkNDhiIDAlLCAjZWM2NTY1IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZGZkNDhiKSwgY29sb3Itc3RvcCgxMDAlLCAjZWM2NTY1KSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZGZkNDhiIDAlLCAjZWM2NTY1IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNkZmQ0OGIgMCUsICNlYzY1NjUgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNkZmQ0OGIgMCUsICNlYzY1NjUgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RmZDQ4YiAwJSwgI2VjNjU2NSAxMDAlKTtcclxufVxyXG4uZmlsdGVyLmZpbHRlci1ncmFkaWVudC1ncmVlbjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICM3MWM0OTE7XHJcbiAgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNzFjNDkxIDAlLCAjNDY1NTU2IDEwMCUpO1xyXG4gIC8qIEZGMy42KyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjNzFjNDkxKSwgY29sb3Itc3RvcCgxMDAlLCAjNDY1NTU2KSk7XHJcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNzFjNDkxIDAlLCAjNDY1NTU2IDEwMCUpO1xyXG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzcxYzQ5MSAwJSwgIzQ2NTU1NiAxMDAlKTtcclxuICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzcxYzQ5MSAwJSwgIzQ2NTU1NiAxMDAlKTtcclxuICAvKiBJRTEwKyAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3MWM0OTEgMCUsICM0NjU1NTYgMTAwJSk7XHJcbiAgLyogVzNDICovXHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM3MWM0OTEnLCBlbmRDb2xvcnN0cj0nIzQ2NTU1NicsR3JhZGllbnRUeXBlPTEgKTtcclxuICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbn1cclxuLmZpbHRlci5maWx0ZXItZ3JhZGllbnQtYmx1ZTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMwODUwNzg7XHJcbiAgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDg1MDc4IDAlLCAjODdkN2RiIDEwMCUpO1xyXG4gIC8qIEZGMy42KyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjMDg1MDc4KSwgY29sb3Itc3RvcCgxMDAlLCAjODdkN2RiKSk7XHJcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMDg1MDc4IDAlLCAjODdkN2RiIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA4NTA3OCAwJSwgIzg3ZDdkYiAxMDAlKTtcclxuICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzA4NTA3OCAwJSwgIzg3ZDdkYiAxMDAlKTtcclxuICAvKiBJRTEwKyAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwODUwNzggMCUsICM4N2Q3ZGIgMTAwJSk7XHJcbiAgLyogVzNDICovXHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwODUwNzgnLCBlbmRDb2xvcnN0cj0nIzg3ZDdkYicsR3JhZGllbnRUeXBlPTEgKTtcclxuICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcbn1cclxuLmZpbHRlci5maWx0ZXItZ3JhZGllbnQtcHVycGxlOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzZjM2FhZDtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM2YjM5YWMgMCUsICNjOGZlY2UgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICM2YjM5YWMpLCBjb2xvci1zdG9wKDEwMCUsICNjOGZlY2UpKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM2YjM5YWMgMCUsICNjOGZlY2UgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzZiMzlhYyAwJSwgI2M4ZmVjZSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzZiMzlhYyAwJSwgI2M4ZmVjZSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmIzOWFjIDAlLCAjYzhmZWNlIDEwMCUpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1udW1iZXJzIC50ZXh0LWFyZWEge1xyXG4gIHBhZGRpbmc6IDMwcHggMCAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi13aGl0ZSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2VjdGlvbi13aGl0ZSAuc3RhdGljLWltYWdlOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgb3BhY2l0eTogMC45NTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uc2VjdGlvbi1zaWdudXAgLmZvcm0tY29udHJvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWN0aW9uLXNpZ251cCAuYnRuIHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJpY2luZyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2VjdGlvbi1wcmljaW5nIC5jb250YWluZXIgPiAuY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNtYWxsIC5wYXJhbGxheCAuaW1hZ2UsXHJcbi5zZWN0aW9uLXNtYWxsIC5zdGF0aWMtaW1hZ2UgLmltYWdlLFxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAucGFyYWxsYXggLmltYWdlLFxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAuc3RhdGljLWltYWdlIC5pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VjdGlvbi1pbmZvIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNhcmRzIC5jYXJkIGEge1xyXG4gIG9wYWNpdHk6IC45MztcclxufVxyXG5cclxuLnNlY3Rpb24td2UtZG8gaDMge1xyXG4gIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbn1cclxuLnNlY3Rpb24td2UtZG8gaDUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnNlY3Rpb24td2UtZG8gcCB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLnNlY3Rpb24td2UtZG8gLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi13ZS1kby1wcmVzZW50YXRpb24ge1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWluZm8tcHJlc2VudGF0aW9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNlY3Rpb24taW5mby1wcmVzZW50YXRpb24gLmluZm8tcHJpY2luZzpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG4uc2VjdGlvbi1pbmZvLXByZXNlbnRhdGlvbiAuaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VjdGlvbi1pbmZvLXByZXNlbnRhdGlvbiAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLm5hdiA+IGxpID4gYTpob3ZlcixcclxuLm5hdiA+IGxpID4gYTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm5hdiA+IC5zb2NpYWwtbGlua3MgPiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYSB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMTVweCAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IC5zb2NpYWwtbGlua3MgPiBhIHtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItbmF2Lm5hdmJhci11cHBlcmNhc2UgPiBsaSA+IGEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYS5idG4ge1xyXG4gIG1hcmdpbjogMTVweCAzcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEuYnRuLXJvdW5kIHtcclxuICBtYXJnaW46IDE2cHggM3B4O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSA+IGEgW2NsYXNzXj1cImZhXCJdIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuLm5hdmJhciAuYnRuIHtcclxuICBtYXJnaW46IDE1cHggM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubmF2YmFyIC5idG4tc2ltcGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6bm90KC5idG4pIHtcclxuICBjb2xvcjogIzQzNDU0NztcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6bm90KC5idG4pOmhvdmVyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpub3QoLmJ0bik6Zm9jdXMsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpub3QoLmJ0bik6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpub3QoLmJ0bik6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogIzQzNDU0NztcclxuICBvcGFjaXR5OiAwLjg1O1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT04NSk7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duID4gYTpob3ZlciAuY2FyZXQsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5kcm9wZG93biA+IGE6Zm9jdXMgLmNhcmV0IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzMzMzMzO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNjNWE0N2U7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5uYXZiYXItdG9nZ2xlOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm5hdmJhci10b2dnbGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogIzQzNDU0NztcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQ6bm90KC5uYXZiYXItdHJhbnNwYXJlbnQpIC5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgY29sb3I6ICNjNWE0N2U7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzVhNDdlO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdDpub3QoLm5hdmJhci10cmFuc3BhcmVudCkgLmJ0bi1uZXV0cmFsLCAubmF2YmFyLWRlZmF1bHQ6bm90KC5uYXZiYXItdHJhbnNwYXJlbnQpIC5idG4tbmV1dHJhbDpob3ZlciwgLm5hdmJhci1kZWZhdWx0Om5vdCgubmF2YmFyLXRyYW5zcGFyZW50KSAuYnRuLW5ldXRyYWw6YWN0aXZlIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItdHJhbnNwYXJlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGUge1xyXG4gIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlIC5uYXZiYXItY29sbGFwc2UsXHJcbi5uYXZiYXItdG9nZ2xlIC5uYXZiYXItZm9ybSB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3ZlciwgLm5hdmJhci10b2dnbGUubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ubmF2YmFyLm5hdmJhci1maXhlZC10b3Age1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItYnJhbmQsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gIH1cclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItYnJhbmQ6Zm9jdXMsIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1icmFuZDpob3ZlcixcclxuICBbY2xhc3MqPVwibmF2YmFyLWN0XCJdIC5uYXZiYXItYnJhbmQ6Zm9jdXMsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgPiBsaSA+IGE6bm90KC5idG4pLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1uYXYgPiBsaSA+IGE6bm90KC5idG4pIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04NSk7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpub3QoLmJ0biksXHJcbiAgLm5hdmJhci10cmFuc3BhcmVudCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyOm5vdCguYnRuKSxcclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXM6bm90KC5idG4pLFxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXI6bm90KC5idG4pLFxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXM6bm90KC5idG4pLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpub3QoLmJ0biksXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyOm5vdCguYnRuKSxcclxuICBbY2xhc3MqPVwibmF2YmFyLWN0XCJdIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXM6bm90KC5idG4pLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXI6bm90KC5idG4pLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXM6bm90KC5idG4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgLm5hdiA+IGxpID4gYS5idG46aG92ZXIsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAubmF2YmFyLW5hdiAubmF2ID4gbGkgPiBhLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLm5hdmJhci10cmFuc3BhcmVudCAubmF2YmFyLW5hdiA+IC5kcm9wZG93biA+IGEgLmNhcmV0LFxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgPiAuZHJvcGRvd24gPiBhOmhvdmVyIC5jYXJldCxcclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duID4gYTpmb2N1cyAuY2FyZXQsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAubmF2YmFyLW5hdiA+IC5kcm9wZG93biA+IGEgLmNhcmV0LFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1uYXYgPiAuZHJvcGRvd24gPiBhOmhvdmVyIC5jYXJldCxcclxuICBbY2xhc3MqPVwibmF2YmFyLWN0XCJdIC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duID4gYTpmb2N1cyAuY2FyZXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGEsXHJcbiAgLm5hdmJhci10cmFuc3BhcmVudCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpob3ZlcixcclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmZvY3VzLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLm5hdmJhci1uYXYgPiAub3BlbiA+IGEsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpob3ZlcixcclxuICBbY2xhc3MqPVwibmF2YmFyLWN0XCJdIC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLmJ0bi1kZWZhdWx0LFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLmJ0bi1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5idG4tZGVmYXVsdC5idG4tZmlsbCxcclxuICBbY2xhc3MqPVwibmF2YmFyLWN0XCJdIC5idG4tZGVmYXVsdC5idG4tZmlsbCB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgfVxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLmJ0bi1kZWZhdWx0LmJ0bi1maWxsOmhvdmVyLFxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLmJ0bi1kZWZhdWx0LmJ0bi1maWxsOmZvY3VzLFxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLmJ0bi1kZWZhdWx0LmJ0bi1maWxsOmFjdGl2ZSxcclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5idG4tZGVmYXVsdC5idG4tZmlsbC5hY3RpdmUsXHJcbiAgLm5hdmJhci10cmFuc3BhcmVudCAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1maWxsLmJ0bi1kZWZhdWx0LFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLmJ0bi1kZWZhdWx0LmJ0bi1maWxsOmhvdmVyLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLmJ0bi1kZWZhdWx0LmJ0bi1maWxsOmZvY3VzLFxyXG4gIFtjbGFzcyo9XCJuYXZiYXItY3RcIl0gLmJ0bi1kZWZhdWx0LmJ0bi1maWxsOmFjdGl2ZSxcclxuICBbY2xhc3MqPVwibmF2YmFyLWN0XCJdIC5idG4tZGVmYXVsdC5idG4tZmlsbC5hY3RpdmUsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1jdFwiXSAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1maWxsLmJ0bi1kZWZhdWx0IHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQgLmRyb3Bkb3duLW1lbnUgLmRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIH1cclxufVxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIC8qYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREREREQ7Ki9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5mb290ZXIgbmF2ID4gdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZm9vdGVyIG5hdiA+IHVsIGE6bm90KC5idG4pIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLmZvb3RlciBuYXYgPiB1bCBhOm5vdCguYnRuKTpob3ZlciwgLmZvb3RlciBuYXYgPiB1bCBhOm5vdCguYnRuKTpmb2N1cyB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmZvb3RlciAuc29jaWFsLWFyZWEge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG4uZm9vdGVyIC5zb2NpYWwtYXJlYSBoNSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmZvb3RlciAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKSB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXIgLnNvY2lhbC1hcmVhID4gYTpub3QoLmJ0bik6aG92ZXIsIC5mb290ZXIgLnNvY2lhbC1hcmVhID4gYTpub3QoLmJ0bik6Zm9jdXMge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi5mb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMTVweCAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXIgaHIge1xyXG4gIGJvcmRlci1jb2xvcjogI0RERERERDtcclxufVxyXG4uZm9vdGVyIC50aXRsZSB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmZvb3RlciAudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZvb3RlciAuYnRuLXNvY2lhbCB7XHJcbiAgY29sb3I6ICM5QTlBOUE7XHJcbn1cclxuXHJcbi5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCBsaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmZvb3Rlcjpub3QoLmZvb3Rlci1iaWcpIG5hdiA+IHVsIGEge1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIG1hcmdpbjogMTVweCAxMHB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbG9yLWdyYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5mb290ZXItY29sb3ItYmxhY2ssXHJcbi5mb290ZXItdHJhbnNwYXJlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC45Nyk7XHJcbiAgY29sb3I6ICNEREREREQ7XHJcbn1cclxuLmZvb3Rlci1jb2xvci1ibGFjayBuYXYgPiB1bCBhLFxyXG4uZm9vdGVyLXRyYW5zcGFyZW50IG5hdiA+IHVsIGEge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5mb290ZXItY29sb3ItYmxhY2sgbmF2ID4gdWwgYTpob3ZlciwgLmZvb3Rlci1jb2xvci1ibGFjayBuYXYgPiB1bCBhOmZvY3VzLFxyXG4uZm9vdGVyLXRyYW5zcGFyZW50IG5hdiA+IHVsIGE6aG92ZXIsXHJcbi5mb290ZXItdHJhbnNwYXJlbnQgbmF2ID4gdWwgYTpmb2N1cyB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmZvb3Rlci1jb2xvci1ibGFjayAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKSxcclxuLmZvb3Rlci10cmFuc3BhcmVudCAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKSB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmZvb3Rlci1jb2xvci1ibGFjayAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpob3ZlciwgLmZvb3Rlci1jb2xvci1ibGFjayAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpmb2N1cyxcclxuLmZvb3Rlci10cmFuc3BhcmVudCAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpob3ZlcixcclxuLmZvb3Rlci10cmFuc3BhcmVudCAuc29jaWFsLWFyZWEgPiBhOm5vdCguYnRuKTpmb2N1cyB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLmZvb3Rlci1jb2xvci1ibGFjayAuYnRuLXNvY2lhbCxcclxuLmZvb3Rlci10cmFuc3BhcmVudCAuYnRuLXNvY2lhbCB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmZvb3Rlci1jb2xvci1ibGFjayBocixcclxuLmZvb3Rlci10cmFuc3BhcmVudCBociB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcbi5mb290ZXItY29sb3ItYmxhY2sgLnRpdGxlLFxyXG4uZm9vdGVyLXRyYW5zcGFyZW50IC50aXRsZSB7XHJcbiAgY29sb3I6ICNEREREREQ7XHJcbn1cclxuXHJcbi5mb290ZXItdHJhbnNwYXJlbnQge1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvb3Rlci10cmFuc3BhcmVudCAuY29udGFpbmVyIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9vdGVyLXRyYW5zcGFyZW50OjphZnRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAxNywgMTcsIDAuOCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZm9vdGVyLWJpZyB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmZvb3Rlci1iaWcgaHIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uZm9vdGVyLWJpZyAuY29udGFpbmVyID4gaHIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmZvb3Rlci1iaWcgLmNvcHlyaWdodCB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xyXG59XHJcbi5mb290ZXItYmlnIC5zb2NpYWwtYXJlYSA+ICoge1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbi5mb290ZXItYmlnIG5hdiA+IHVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmZvb3Rlci1iaWcgbmF2ID4gdWwgbGkge1xyXG4gIGZsb2F0OiBub25lO1xyXG59XHJcbi5mb290ZXItYmlnIG5hdiA+IHVsIC5idG4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uZm9vdGVyLWJpZyBuYXYgPiB1bCAuYnRuLXNvY2lhbC5idG4tc2ltcGxlIHtcclxuICBwYWRkaW5nOiAwIDAgNHB4IDA7XHJcbn1cclxuLmZvb3Rlci1iaWcgLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmZvb3Rlci1iaWcgLm51bWJlcnMgaDQge1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxufVxyXG5cclxuLnNvY2lhbC1saW5lIHtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uc29jaWFsLWxpbmUgLnRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5zb2NpYWwtbGluZSAuYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNvY2lhbC1saW5lLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAzMCwgMzAsIDAuOTcpO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ubGFiZWwtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YTQ3ZTtcclxufVxyXG5cclxuLmxhYmVsLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFiYzA7XHJcbn1cclxuXHJcbi5sYWJlbC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FjY2I4O1xyXG59XHJcblxyXG4ubGFiZWwtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4OGY1ODtcclxufVxyXG5cclxuLmxhYmVsLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3OGI5MDtcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwge1xyXG4gIG9wYWNpdHk6IDAuODU7XHJcbiAgcGFkZGluZzogOHB4IDlweDtcclxufVxyXG4uYnRuLXNvY2lhbCAuZmEge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0b3A6IC0xcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5idG4tc29jaWFsLmJ0bi1yb3VuZCB7XHJcbiAgcGFkZGluZzogOXB4IDEwcHg7XHJcbn1cclxuLmJ0bi1zb2NpYWwuYnRuLXNpbXBsZSB7XHJcbiAgcGFkZGluZzogOXB4IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ0bi1zb2NpYWwuYnRuLXNpbXBsZSAuZmEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB6LWluZGV4OiA5MDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzcwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzcwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDM3MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzcwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDM3MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpO1xyXG59XHJcbi5vcGVuIC5kcm9wZG93bi1tZW51IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xyXG59XHJcbi5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIHRvcDogLTExcHg7XHJcbn1cclxuLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIHRvcDogLTEwcHg7XHJcbn1cclxuLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0ID4gbGkgPiAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDEycHg7XHJcbn1cclxuLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0ID4gbGkgPiAuZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMTJweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbjogMHB4IDBweDtcclxuICBjb2xvcjogIzQzNDU0NztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcclxufVxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYSBpbWcge1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGNvbG9yOiAjYzVhNDdlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5kcm9wZG93bi1tZW51ID4gbGk6bGFzdC1jaGlsZCA+IGEge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG4uYnRuLWdyb3VwLnNlbGVjdCAuZHJvcGRvd24tbWVudSB7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbi5kcm9wZG93bi1tZW51ID4gbGk6Zmlyc3QtY2hpbGQgPiBhIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxufVxyXG4uZHJvcGRvd24tbWVudSA+IGxpOmxhc3QtY2hpbGQgPiBhIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxufVxyXG4uc2VsZWN0IC5kcm9wZG93bi1tZW51ID4gbGk6Zmlyc3QtY2hpbGQgPiBhIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24taW5mbyA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24taW5mbyA+IGxpID4gYTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMGFiYzA7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tc3VjY2VzcyA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tc3VjY2VzcyA+IGxpID4gYTpmb2N1cyB7XHJcbiAgY29sb3I6ICM3YWNjYjg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tZGFuZ2VyID4gbGkgPiBhOmhvdmVyLCAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1kYW5nZXIgPiBsaSA+IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZTc4YjkwO1xyXG59XHJcbi5kcm9wZG93bi1tZW51LmRyb3Bkb3duLXdhcm5pbmcgPiBsaSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLXdhcm5pbmcgPiBsaSA+IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjg4ZjU4O1xyXG59XHJcbi5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWJsYWNrID4gbGkgPiBhOmhvdmVyLCAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ibGFjayA+IGxpID4gYTpmb2N1cyB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5kcm9wZG93bi13aXRoLWljb25zID4gbGkgPiBhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4uZHJvcGRvd24td2l0aC1pY29ucyBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRyb3Bkb3duLXdpdGgtaWNvbnMgaVtjbGFzc149XCJwZS1cIl0ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB3aWR0aDogNDZweDtcclxufVxyXG4uZHJvcGRvd24td2l0aC1pY29ucyBpW2NsYXNzXj1cImZhXCJdIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMzJweCA0NHB4IC0yNHB4IHJnYmEoMCwgMCwgMCwgMC4yMyksIDAgMjBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDE1cHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzcwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzcwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDM3MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzcwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNjEsIDAuNywgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDM3MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpO1xyXG59XHJcbi5jYXJkOm5vdCguY2FyZC1wbGFpbik6bm90KC5jYXJkLXByaWNlKTpob3ZlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgYm94LXNoYWRvdzogMCAyNnB4IDUwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjM4KSwgMCAxMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNXB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5jYXJkIC5zdWJ0aXRsZS1ibGFjayB7XHJcbiAgY29sb3I6ICMxNDE0MTQ7XHJcbn1cclxuLmNhcmQgYSB7XHJcbiAgb3BhY2l0eTogLjg1O1xyXG59XHJcbi5jYXJkOmhvdmVyIC5oZWFkZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNhcmQgaDIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmNhcmQgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQgLmhlYWRlciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uY2FyZCAuaW1hZ2UtaGVhZGVyLFxyXG4uY2FyZCAuaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbn1cclxuLmNhcmQgLmltYWdlLWhlYWRlci5pbWFnZS1mdWxsLFxyXG4uY2FyZCAuaGVhZGVyIGltZy5pbWFnZS1mdWxsIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNhcmQgLnJvdyAuaW1hZ2UtaGVhZGVyLFxyXG4uY2FyZCAucm93IC5oZWFkZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNhcmQgLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uY2FyZCA+IGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5jYXJkIC50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5jYXJkIC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY2FyZC1tZW1iZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jYXJkLW1lbWJlciAuY29udGVudCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG4uY2FyZC1tZW1iZXIgPiBpbWcge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNhcmQtd2hpdGUge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5jYXJkLXBsYWluIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uY2FyZC1wbGFpbiAuaW1hZ2UtaGVhZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlcixcclxuLnNlY3Rpb24taGVhZGVyLWJsb2csXHJcbi5zZWN0aW9uLXByZXNlbnRhdGlvbi1wYWdlIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zZWN0aW9uLWhlYWRlciAuY29udGFpbmVyLFxyXG4uc2VjdGlvbi1oZWFkZXItYmxvZyAuY29udGFpbmVyLFxyXG4uc2VjdGlvbi1wcmVzZW50YXRpb24tcGFnZSAuY29udGFpbmVyIHtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMjBweDtcclxufVxyXG4uc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQsXHJcbi5zZWN0aW9uLWhlYWRlci1ibG9nIC5jb250ZW50LFxyXG4uc2VjdGlvbi1wcmVzZW50YXRpb24tcGFnZSAuY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNDQlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5zZWN0aW9uLWhlYWRlciAuYnRuLFxyXG4uc2VjdGlvbi1oZWFkZXItYmxvZyAuYnRuLFxyXG4uc2VjdGlvbi1wcmVzZW50YXRpb24tcGFnZSAuYnRuIHtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG4uc2VjdGlvbi1oZWFkZXIgaDEsXHJcbi5zZWN0aW9uLWhlYWRlci1ibG9nIGgxLFxyXG4uc2VjdGlvbi1wcmVzZW50YXRpb24tcGFnZSBoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDMuNmVtO1xyXG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAtMnB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5zZWN0aW9uLWhlYWRlciBoNSxcclxuLnNlY3Rpb24taGVhZGVyLWJsb2cgaDUsXHJcbi5zZWN0aW9uLXByZXNlbnRhdGlvbi1wYWdlIGg1IHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIG1hcmdpbjogMCBhdXRvIC41ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMjU7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uc2VjdGlvbi1oZWFkZXIgcCxcclxuLnNlY3Rpb24taGVhZGVyLWJsb2cgcCxcclxuLnNlY3Rpb24tcHJlc2VudGF0aW9uLXBhZ2UgcCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAxZW0gMCAwLjVlbTtcclxufVxyXG4uc2VjdGlvbi1oZWFkZXIgcCBzcGFuLFxyXG4uc2VjdGlvbi1oZWFkZXItYmxvZyBwIHNwYW4sXHJcbi5zZWN0aW9uLXByZXNlbnRhdGlvbi1wYWdlIHAgc3BhbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG4uc2VjdGlvbi1oZWFkZXIgLnNlcGFyYXRvcixcclxuLnNlY3Rpb24taGVhZGVyLWJsb2cgLnNlcGFyYXRvcixcclxuLnNlY3Rpb24tcHJlc2VudGF0aW9uLXBhZ2UgLnNlcGFyYXRvciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuLnNlY3Rpb24taGVhZGVyIC5zZXBhcmF0b3IubGluZS1zZXBhcmF0b3I6YmVmb3JlLCAuc2VjdGlvbi1oZWFkZXIgLnNlcGFyYXRvci5saW5lLXNlcGFyYXRvcjphZnRlcixcclxuLnNlY3Rpb24taGVhZGVyLWJsb2cgLnNlcGFyYXRvci5saW5lLXNlcGFyYXRvcjpiZWZvcmUsXHJcbi5zZWN0aW9uLWhlYWRlci1ibG9nIC5zZXBhcmF0b3IubGluZS1zZXBhcmF0b3I6YWZ0ZXIsXHJcbi5zZWN0aW9uLXByZXNlbnRhdGlvbi1wYWdlIC5zZXBhcmF0b3IubGluZS1zZXBhcmF0b3I6YmVmb3JlLFxyXG4uc2VjdGlvbi1wcmVzZW50YXRpb24tcGFnZSAuc2VwYXJhdG9yLmxpbmUtc2VwYXJhdG9yOmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXItc21hbGwgLnBhcmFsbGF4LFxyXG4uc2VjdGlvbi1oZWFkZXItc21hbGwgLnN0YXRpYy1pbWFnZSB7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNsaWVudHMtMSAubG9nbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNsaWVudHMtMiAubmF2LXRleHQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VjdGlvbi1jbGllbnRzLTIgLm5hdi10ZXh0IGxpIHtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XHJcbn1cclxuLnNlY3Rpb24tY2xpZW50cy0yIC5uYXYtdGV4dCBsaSBhIHtcclxuICBvcGFjaXR5OiAuOTtcclxuICBjb2xvcjogIzM0MzQzNDtcclxuICBwYWRkaW5nOiAzcHggMDtcclxufVxyXG4uc2VjdGlvbi1jbGllbnRzLTIgLm5hdi10ZXh0IGxpIGEgaW1nIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLnNlY3Rpb24tY2xpZW50cy0yIC5uYXYtdGV4dCA+IGxpLmFjdGl2ZSBhIHtcclxuICBjb2xvcjogI2M1YTQ3ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzVhNDdlO1xyXG59XHJcbi5zZWN0aW9uLWNsaWVudHMtMiAubmF2LXRleHQgPiBsaS5hY3RpdmUgYSBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLnNlY3Rpb24tY2xpZW50cy0yIC50YWItY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNzYwcHg7XHJcbiAgbWluLWhlaWdodDogMTMwcHg7XHJcbn1cclxuLnNlY3Rpb24tY2xpZW50cy0yIC50YWItY29udGVudCBwLmxhcmdlIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLnNlY3Rpb24tY2xpZW50cy0zIC5uYnMtZmxleGlzZWwtaW5uZXI6YmVmb3JlLCAuc2VjdGlvbi1jbGllbnRzLTMgLm5icy1mbGV4aXNlbC1pbm5lcjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogNiU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi5zZWN0aW9uLWNsaWVudHMtMyAubmJzLWZsZXhpc2VsLWlubmVyOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbiAgLyogRkYzLjYrICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHdoaXRlKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSk7XHJcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbiAgLyogT3BlcmEgMTEuMTArICovXHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCB3aGl0ZSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICAvKiBJRTEwKyAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbiAgLyogVzNDICovXHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyRsZWZ0LWNvbG9yJywgZW5kQ29sb3JzdHI9JyRyaWdodC1jb2xvcicsR3JhZGllbnRUeXBlPTEgKTtcclxuICAvKiBJRTYtOSAqL1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLnNlY3Rpb24tY2xpZW50cy0zIC5uYnMtZmxleGlzZWwtaW5uZXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDEwMCUpO1xyXG4gIC8qIEZGMy42KyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSwgY29sb3Itc3RvcCgxMDAlLCB3aGl0ZSkpO1xyXG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDEwMCUpO1xyXG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDEwMCUpO1xyXG4gIC8qIE9wZXJhIDExLjEwKyAqL1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgd2hpdGUgMTAwJSk7XHJcbiAgLyogSUUxMCsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHdoaXRlIDEwMCUpO1xyXG4gIC8qIFczQyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPSckbGVmdC1jb2xvcicsIGVuZENvbG9yc3RyPSckcmlnaHQtY29sb3InLEdyYWRpZW50VHlwZT0xICk7XHJcbiAgLyogSUU2LTkgKi9cclxuICByaWdodDogMDtcclxufVxyXG4uc2VjdGlvbi1jbGllbnRzLTMgI2NsaWVudHMtY2Fyb3VzZWwgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VjdGlvbi1jbGllbnRzLTMgI2NsaWVudHMtY2Fyb3VzZWwgbGkgaW1nIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG4uc2VjdGlvbi1jbGllbnRzLTMgI2NsaWVudHMtY2Fyb3VzZWwgbGkgaW1nOmZpcnN0LWNoaWxkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zZWN0aW9uLWNsaWVudHMtMyAjY2xpZW50cy1jYXJvdXNlbCBsaSBpbWc6Zmlyc3QtY2hpbGQ6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLnNlY3Rpb24tY2xpZW50cy0zIC5uYnMtZmxleGlzZWwtbmF2LWxlZnQsXHJcbi5zZWN0aW9uLWNsaWVudHMtMyAubmJzLWZsZXhpc2VsLW5hdi1yaWdodCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubGlzdC1sb2dvcyBpbWcge1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxpc3QtbG9nb3MgLmFjdGl2ZSAuY2xpZW50LWxvZ28ge1xyXG4gIGNvbG9yOiAjYzVhNDdlO1xyXG59XHJcbi5saXN0LWxvZ29zIGEge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmxpc3QtbG9nb3MtaW5mbyAuYWN0aXZlIC5jbGllbnQtbG9nbyB7XHJcbiAgY29sb3I6ICMwMGFiYzA7XHJcbn1cclxuXHJcbi5saXN0LWxvZ29zLXN1Y2Nlc3MgLmFjdGl2ZSAuY2xpZW50LWxvZ28ge1xyXG4gIGNvbG9yOiAjN2FjY2I4O1xyXG59XHJcblxyXG4ubGlzdC1sb2dvcy13YXJuaW5nIC5hY3RpdmUgLmNsaWVudC1sb2dvIHtcclxuICBjb2xvcjogI2Y4OGY1ODtcclxufVxyXG5cclxuLmxpc3QtbG9nb3MtZGFuZ2VyIC5hY3RpdmUgLmNsaWVudC1sb2dvIHtcclxuICBjb2xvcjogI2U3OGI5MDtcclxufVxyXG5cclxuLmNsaWVudC1sb2dvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuLmNsaWVudC1sb2dvIGkge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmNsaWVudC1sb2dvIGgzIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlY3Rpb24tdGVhbS0xIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTEgLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTEgLnRleHQtYXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWF4LXdpZHRoOiA3NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc2VjdGlvbi10ZWFtLTEgcCB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuLnNlY3Rpb24tdGVhbS0xIC5zdGF0aWMtaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGVhbS0yIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTIgLnRlYW0tdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgMCA3NXB4O1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMiAudGVhbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMiAudGVhbSAubWVtYmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMiAudGVhbSAubWVtYmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMiAudGVhbSAubWVtYmVyIC5zb2NpYWwtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHggMzVweDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTIgLnRlYW0gLm1lbWJlciBpbWcge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc2VjdGlvbi10ZWFtLTIgLnRlYW0gLmRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZWFtLTMgLnRlYW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnNlY3Rpb24tdGVhbS0zIC50ZWFtIC5tZW1iZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTMgLnRlYW0gLm1lbWJlciAuYmlnLXRleHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNlY3Rpb24tdGVhbS0zIC50ZWFtIC5tZW1iZXIgaW1nIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc2VjdGlvbi10ZWFtLTMgLnRlYW0gLm1lbWJlciAuZmlyc3QtbmFtZSwgLnNlY3Rpb24tdGVhbS0zIC50ZWFtIC5tZW1iZXIgLmxhc3QtbmFtZSB7XHJcbiAgbWluLXdpZHRoOiA2NSU7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTMgLnRlYW0gLm1lbWJlciAuZmlyc3QtbmFtZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMyAudGVhbSAubWVtYmVyIC5sYXN0LW5hbWUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMyAudGVhbSAubWVtYmVyIC5tb3R0byB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGNvbG9yOiAjYzVhNDdlO1xyXG4gIG1heC13aWR0aDogNTUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tMyAudGVhbSAubWVtYmVyIC5tb3R0byBoMyB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZWFtLTQge1xyXG4gIHBhZGRpbmctdG9wOiA1ZW07XHJcbn1cclxuLnNlY3Rpb24tdGVhbS00IC50ZWFtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5zZWN0aW9uLXRlYW0tNCAudGVhbSAubWVtYmVyIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLnNlY3Rpb24tdGVhbS00IC50ZWFtIC5tZW1iZXIgaW1nIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc2VjdGlvbi10ZWFtLTQgLnRlYW0gLm1lbWJlciAuZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTQgLnRlYW0gLm1lbWJlciAuZGVzY3JpcHRpb24gLmRldGFpbHMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc2VjdGlvbi10ZWFtLTQgLnRlYW0gLm1lbWJlciAuZGVzY3JpcHRpb24gLmRldGFpbHMgaSB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuXHJcbi5pbWctY2lyY2xlLmltZy1wcm9maWxlIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmlnLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNtYWxsLXRleHQge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RERERERDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGxlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmFkZHJlc3MgaDQge1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbn1cclxuLmFkZHJlc3MgcCB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnRhY3QtMSBoNCxcclxuLnNlY3Rpb24tY29udGFjdC0yIGg0LFxyXG4uc2VjdGlvbi1jb250YWN0LTMgaDQge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlY3Rpb24tY29udGFjdC0xIC5mb3JtLWNvbnRyb2wsXHJcbi5zZWN0aW9uLWNvbnRhY3QtMSAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2VjdGlvbi1jb250YWN0LTEgLmNvbnRhY3QtZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tY29udGFjdC0yIC5jb250YWN0LWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnNlY3Rpb24tY29udGFjdC0yIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvKiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250YWN0LTMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLnNlY3Rpb24tY29udGFjdC0zIC5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZWN0aW9uLWNvbnRhY3QtMyAuY29udGFjdC1jb250YWluZXIgLmFkZHJlc3MtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogNTcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDYwcHg7XHJcbn1cclxuLnNlY3Rpb24tY29udGFjdC0zIC5jb250YWN0LWNvbnRhaW5lciAuYWRkcmVzcy1jb250YWluZXIgLmFkZHJlc3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VjdGlvbi1jb250YWN0LTMgLmNvbnRhY3QtY29udGFpbmVyIC5tYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDU3MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNlY3Rpb24tY29udGFjdC0zIC5jb250YWN0LWNvbnRhaW5lciAubWFwIC5iaWctbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zZWN0aW9uLWNvbnRhY3QtMyB7XHJcbiAgICBtaW4taGVpZ2h0OiA1NzBweDtcclxuICB9XHJcbiAgLnNlY3Rpb24tY29udGFjdC0zIC5hZGRyZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4uc2VjdGlvbi1jbG9zdXJlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNlY3Rpb24tY2xvc3VyZSAuc3RhdGljLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc2VjdGlvbi1jbG9zdXJlIC5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBhZGRpbmc6IDE1MHB4IDA7XHJcbn1cclxuLnNlY3Rpb24tY2xvc3VyZSAudGV4dC1hcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLyogSE9NRSBQQUdFICovXHJcbi5zZWN0aW9uIC5pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNlY3Rpb24tZ2V0LXN0YXJ0ZWQsXHJcbi5zZWN0aW9uLWhlYWRlci1mcmVlYmllLFxyXG4uc2VjdGlvbi1vdXItdGVhbS1mcmVlYmllIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAuY29udGFpbmVyLFxyXG4uc2VjdGlvbi1oZWFkZXItZnJlZWJpZSAuY29udGFpbmVyLFxyXG4uc2VjdGlvbi1vdXItdGVhbS1mcmVlYmllIC5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMzB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlY3Rpb24tZ2V0LXN0YXJ0ZWQgLnRpdGxlLWhlYWRlcixcclxuLnNlY3Rpb24taGVhZGVyLWZyZWViaWUgLnRpdGxlLWhlYWRlcixcclxuLnNlY3Rpb24tb3VyLXRlYW0tZnJlZWJpZSAudGl0bGUtaGVhZGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAuYnV0dG9uLWNvbnRhY3QsXHJcbi5zZWN0aW9uLWhlYWRlci1mcmVlYmllIC5idXR0b24tY29udGFjdCxcclxuLnNlY3Rpb24tb3VyLXRlYW0tZnJlZWJpZSAuYnV0dG9uLWNvbnRhY3Qge1xyXG4gIHBhZGRpbmc6IDI1cHggMCAxN3B4O1xyXG59XHJcbi5zZWN0aW9uLWdldC1zdGFydGVkIC50ZXh0LWRlc2NyaXB0aW9uLFxyXG4uc2VjdGlvbi1oZWFkZXItZnJlZWJpZSAudGV4dC1kZXNjcmlwdGlvbixcclxuLnNlY3Rpb24tb3VyLXRlYW0tZnJlZWJpZSAudGV4dC1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3NjBweDtcclxufVxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAudGV4dC13aGl0ZSxcclxuLnNlY3Rpb24taGVhZGVyLWZyZWViaWUgLnRleHQtd2hpdGUsXHJcbi5zZWN0aW9uLW91ci10ZWFtLWZyZWViaWUgLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zZWN0aW9uLWdldC1zdGFydGVkIC50ZXh0LWdvbGQsXHJcbi5zZWN0aW9uLWhlYWRlci1mcmVlYmllIC50ZXh0LWdvbGQsXHJcbi5zZWN0aW9uLW91ci10ZWFtLWZyZWViaWUgLnRleHQtZ29sZCB7XHJcbiAgY29sb3I6ICNjNWE0N2U7XHJcbn1cclxuLnNlY3Rpb24tZ2V0LXN0YXJ0ZWQgLnBhcmFsbGF4LFxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAuc3RhdGljLWltYWdlLFxyXG4uc2VjdGlvbi1oZWFkZXItZnJlZWJpZSAucGFyYWxsYXgsXHJcbi5zZWN0aW9uLWhlYWRlci1mcmVlYmllIC5zdGF0aWMtaW1hZ2UsXHJcbi5zZWN0aW9uLW91ci10ZWFtLWZyZWViaWUgLnBhcmFsbGF4LFxyXG4uc2VjdGlvbi1vdXItdGVhbS1mcmVlYmllIC5zdGF0aWMtaW1hZ2Uge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uc2VjdGlvbi1nZXQtc3RhcnRlZCAuaW1hZ2UsXHJcbi5zZWN0aW9uLWhlYWRlci1mcmVlYmllIC5pbWFnZSxcclxuLnNlY3Rpb24tb3VyLXRlYW0tZnJlZWJpZSAuaW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlY3Rpb24tZ2V0LXN0YXJ0ZWQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNlY3Rpb24tZ2V0LXN0YXJ0ZWQgLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxNXZoIGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnRhY3QtNCAucGFyYWxsYXgsXHJcbi5zZWN0aW9uLW91ci1zZXJ2aWNlcyAucGFyYWxsYXgge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW91ci1wcm9qZWN0cy1mbHVpZCAucm93IFtjbGFzc149XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4uc2VjdGlvbi1vdXItcHJvamVjdHMtZmx1aWQgLnJvdyBbY2xhc3NePVwiY29sLVwiXSAucHJvamVjdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tb3VyLXByb2plY3RzIC5wcm9qZWN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubWVtYmVyIC5kZXNjcmlwdGlvbiB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW91ci1jbGllbnRzLWZyZWViaWUgLm5hdi10ZXh0LFxyXG4uc2VjdGlvbi1vdXItY2xpZW50cyAubmF2LXRleHQge1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tb3VyLWNsaWVudHMtZnJlZWJpZSAubmF2LXRleHQgbGksXHJcbi5zZWN0aW9uLW91ci1jbGllbnRzIC5uYXYtdGV4dCBsaSB7XHJcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1vdXItY2xpZW50cyAubmF2LXRleHQgbGkgYSBpbWcge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tb3VyLWNsaWVudHMtZnJlZWJpZSAudGFiLWNvbnRlbnQsXHJcbi5zZWN0aW9uLW91ci1jbGllbnRzIC50YWItY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNzYwcHg7XHJcbiAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLW91ci1jbGllbnRzLWZyZWViaWUgLnRhYi1jb250ZW50IHAubGFyZ2UsXHJcbi5zZWN0aW9uLW91ci1jbGllbnRzIC50YWItY29udGVudCBwLmxhcmdlIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLnNlY3Rpb24tY29udGFjdC00IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiBFTkQgSE9NRSAqL1xyXG4vKiBGUkVFQklFICovXHJcbi5zZWN0aW9uLWhlYWRlci1mcmVlYmllIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1vdXItdGVhbS1mcmVlYmllIC5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE0dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmNhcmQgcCB7XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tb3VyLWNsaWVudHMtZnJlZWJpZSAubGlzdC1sb2dvcyBpbWcge1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IG5vbmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5zZWN0aW9uLW91ci1jbGllbnRzLWZyZWViaWUgLmxpc3QtbG9nb3MgaW1nOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLnNlY3Rpb24tb3VyLWNsaWVudHMtZnJlZWJpZSAubmF2LXRleHQgPiBsaS5hY3RpdmUgYSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zZWN0aW9uLW91ci1jbGllbnRzLWZyZWViaWUgLm5hdi10ZXh0ID4gbGkuYWN0aXZlIGEgLmltYWdlLWNsaWVudHMgaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5pbWFnZS1jbGllbnRzIHtcclxuICB3aWR0aDogOTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY2xpZW50cyBpbWcsXHJcbi5hdXRob3IgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRU5EIEZSRUVCSUUgKi9cclxuLyogUFJFU0VOVEFUSU9OIFBBR0UgKi9cclxuLnNlY3Rpb24tcHJlc2VudGF0aW9uLXBhZ2UgLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNHZoO1xyXG59XHJcblxyXG4uZmEtcGF5IHtcclxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHggMXB4IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5zaGFyZS1hcmVhIHtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4vKiBFTkQgUFJFU0VOVEFUSU9OIFBBR0UgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdiA+IC5zb2NpYWwtbGlua3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIgLnNlcGFyYXRvciB7XHJcbiAgICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5zZWN0aW9uLXdlLW1hZGUtMSAucm93IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnNlY3Rpb24td2UtbWFkZS0xIC5yb3cgW2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgLnNlY3Rpb24td2UtbWFkZS0xIC50cmFuc2l0aW9uLTEge1xyXG4gICAgLyogICAgIFx0XHR0cmFuc2l0aW9uOiBhbGwgMC41czsgKi9cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXdlLW1hZGUtMiAuc2Nyb2xsLWFyZWEge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuc2VjdGlvbi13ZS1tYWRlLTIgLnByb2plY3RzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuc2VjdGlvbi13ZS1tYWRlLTIgLnByb2plY3RzIC5yb3cge1xyXG4gICAgd2lkdGg6IDI1MDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnNlY3Rpb24td2UtbWFkZS0yIC5wcm9qZWN0cyAucm93LnNjcm9sbGVyIFtjbGFzc149XCJjb2wtXCJdIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXdlLW1hZGUtMiAucHJvamVjdHMgLnJvdy5zY3JvbGxlciBbY2xhc3NePVwiY29sLVwiXSAucHJvamVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgLnNlY3Rpb24td2UtbWFkZS0yIC5wcm9qZWN0cyAucm93LnNjcm9sbGVyLnNjcm9sbGVyLXBvcnRyYWl0IC5wcm9qZWN0IHtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXdlLW1hZGUtMiAucHJvamVjdHMgLnByb2plY3QtZGVzY3JpcHRpb24gcCB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNlY3Rpb24td2l0aC1ob3ZlciAucHJvamVjdCAub3Zlci1hcmVhIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMC4yNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMC4yNXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDAuMjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMC4yNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDAuMjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMDtcclxuICB9XHJcbiAgLnNlY3Rpb24td2l0aC1ob3ZlciAucHJvamVjdCAub3Zlci1hcmVhIC5jb250ZW50IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBvcGFjaXR5OiAwLjJzO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwcyk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2VjdGlvbi13aXRoLWhvdmVyIC5wcm9qZWN0IC5vdmVyLWFyZWEgLmNvbnRlbnQgaDQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCAtbW96LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICAuc2VjdGlvbi13aXRoLWhvdmVyIC5wcm9qZWN0IC5vdmVyLWFyZWEgLmNvbnRlbnQgcCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtY29udGVudCAucHJvamVjdC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICB9XHJcbiAgLnByb2plY3QtY29udGVudCAuaWNvbi1jbG9zZSB7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgfVxyXG4gIC5wcm9qZWN0LWNvbnRlbnQgLmljb24tY2xvc2UgaSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkZXIgLnBhcmFsbGF4LCAuc2VjdGlvbi1oZWFkZXIgLnN0YXRpYy1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWhlYWRlciAucGFyYWxsYXg6YWZ0ZXIsIC5zZWN0aW9uLWhlYWRlciAuc3RhdGljLWltYWdlOmFmdGVyIHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZGVyIC5jb250ZW50IHtcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgaDEsIC5zZWN0aW9uLWhlYWRlciAuY29udGVudCBoNSwgLnNlY3Rpb24taGVhZGVyIC5jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0LjVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgaDEgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZGVyIC5jb250ZW50IGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWhlYWRlciAuY29udGVudCAuc2VwYXJhdG9yIHtcclxuICAgIHdpZHRoOiAxMmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tc2lnbmluIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXNpZ25pbiAuaW1hZ2UtY29udGFpbmVyLFxyXG4gIC5zZWN0aW9uLXNpZ25pbiAuZm9ybS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXNpZ25pbiAuZmlsdGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIGgxLnJlc3BvbnNpdmUtc21hbGwge1xyXG4gICAgZm9udC1zaXplOiA0ZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICB9XHJcbiAgaDEucmVzcG9uc2l2ZS1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDIuM2VtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNjI1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTM4NDYxNTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zNzVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjEzNjM2MzY0O1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTExMTExMTE7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24td2UtbWFkZS0xIHAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNsaWVudHMtMSAubG9nb3MgdWwgbGkge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcbiAgLnNlY3Rpb24tY2xpZW50cy0xIC5sb2dvcyB1bCBsaSBpbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLnNlY3Rpb24tY2xpZW50cy0xIC5sb2dvcyB1bCBsaSBpbWc6bGFzdC1jaGlsZCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY2xpZW50cy0yIC50YWItY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRlYW0tMSAuc3RhdGljLWltYWdlIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGVhbS0zIC5uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuc2VjdGlvbi10ZWFtLTMgLm1vdHRvIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250YWN0LTMgLmFkZHJlc3MtY29udGFpbmVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1jb250ZW50IC5wcm9kdWN0IC5wcm9qZWN0LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wcm9qZWN0LWNvbnRlbnQgLmFydGljbGUgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgZm9vdGVyIC5yb3cgLmluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgZm9vdGVyIC5yb3cgLmluZm8gLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgZm9vdGVyIC5yb3cgLmluZm8gdWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBmb290ZXIgLnJvdyBkaXY6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4jYm9keUNsaWNrIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDMwMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgei1pbmRleDogMTAyOTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDMyO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcclxuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlM2UzZTM7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMHB4LCAwLCAwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwcHgsIDAsIDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwcHgsIDAsIDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMHB4LCAwLCAwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMHB4LCAwLCAwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAubmF2YmFyLWNvbGxhcHNlID4gdWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYSB7XHJcbiAgbWFyZ2luOiAwcHggMHB4O1xyXG4gIGNvbG9yOiAjNDM0NTQ3O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYTpob3ZlciwgLm5hdmJhci1idXJnZXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNjNWE0N2U7XHJcbn1cclxuLm5hdmJhci1idXJnZXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkuc29jaWFsLWxpbmtzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpLnNvY2lhbC1saW5rcyA+IGEge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XHJcbn1cclxuLm5hdmJhci1idXJnZXIgLm5hdmJhci1jb2xsYXBzZTo6YWZ0ZXIge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLm5hdmJhci1idXJnZXIgLm5hdmJhci1jb2xsYXBzZS5oYXMtaW1hZ2U6OmFmdGVyIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLm5hdmJhci1idXJnZXIgLm5hdmJhci1jb2xsYXBzZSAuYWN0aXZlID4gYSxcclxuLm5hdmJhci1idXJnZXIgLm5hdmJhci1jb2xsYXBzZSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xyXG4gIGNvbG9yOiAjNDM0NTQ3O1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLmFjdGl2ZSA+IGE6Zm9jdXMsXHJcbi5uYXZiYXItYnVyZ2VyIC5uYXZiYXItY29sbGFwc2UgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxyXG4ubmF2YmFyLWJ1cmdlciAubmF2YmFyLWNvbGxhcHNlIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XHJcbiAgY29sb3I6ICNjNWE0N2U7XHJcbn1cclxuLm5hdmJhci1idXJnZXIgLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51OmFmdGVyLCAubmF2YmFyLWJ1cmdlciAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5kcm9wZG93bi1tZW51IHtcclxuICBmbG9hdDogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBub25lO1xyXG4gIC1vLXRyYW5zaXRpb246IG5vbmU7XHJcbiAgLW1zLXRyYW5zaXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAub3BlbiAuZHJvcGRvd24tbWVudSB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuLm5hdmJhci1idXJnZXIubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAubmF2YmFyLWhlYWRlciAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5iYXIxLFxyXG4ubmF2YmFyLWJ1cmdlciAuYmFyMixcclxuLm5hdmJhci1idXJnZXIgLmJhcjMge1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAuYmFyMSB7XHJcbiAgdG9wOiAwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHRvcGJhci1iYWNrIDUwMG1zIGxpbmVhciAwcztcclxuICAtbW96LWFuaW1hdGlvbjogdG9wYmFyLWJhY2sgNTAwbXMgbGluZWFyIDBzO1xyXG4gIGFuaW1hdGlvbjogdG9wYmFyLWJhY2sgNTAwbXMgMHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5iYXIyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5uYXZiYXItYnVyZ2VyIC5iYXIzIHtcclxuICBib3R0b206IDBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYm90dG9tYmFyLWJhY2sgNTAwbXMgbGluZWFyIDBzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBib3R0b21iYXItYmFjayA1MDBtcyBsaW5lYXIgMHM7XHJcbiAgYW5pbWF0aW9uOiBib3R0b21iYXItYmFjayA1MDBtcyAwcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuLm5hdmJhci1idXJnZXIgLnRvZ2dsZWQgLmJhcjEge1xyXG4gIHRvcDogNnB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0b3BiYXIteCA1MDBtcyBsaW5lYXIgMHM7XHJcbiAgLW1vei1hbmltYXRpb246IHRvcGJhci14IDUwMG1zIGxpbmVhciAwcztcclxuICBhbmltYXRpb246IHRvcGJhci14IDUwMG1zIDBzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAudG9nZ2xlZCAuYmFyMiB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4ubmF2YmFyLWJ1cmdlciAudG9nZ2xlZCAuYmFyMyB7XHJcbiAgYm90dG9tOiA2cHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvdHRvbWJhci14IDUwMG1zIGxpbmVhciAwcztcclxuICAtbW96LWFuaW1hdGlvbjogYm90dG9tYmFyLXggNTAwbXMgbGluZWFyIDBzO1xyXG4gIGFuaW1hdGlvbjogYm90dG9tYmFyLXggNTAwbXMgMHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgdG9wYmFyLXgge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0NWRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXIteCB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NWRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgdG9wYmFyLXgge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDVkZWcpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB0b3BiYXItYmFjayB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyB0b3BiYXItYmFjayB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHRvcGJhci1iYWNrIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGJvdHRvbWJhci14IHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm90dG9tYmFyLXgge1xyXG4gIDAlIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTQ1ZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJvdHRvbWJhci14IHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE0NWRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgYm90dG9tYmFyLWJhY2sge1xyXG4gIDAlIHtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdHRvbWJhci1iYWNrIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJvdHRvbWJhci1iYWNrIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLndyYXBwZXIudHJhbnNpdGlvbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG59XHJcblxyXG4ubmF2LW9wZW4gLndyYXBwZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUwcHgsIDAsIDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUwcHgsIDAsIDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1MHB4LCAwLCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUwcHgsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1MHB4LCAwLCAwKTtcclxufVxyXG5cclxuLm5hdi1vcGVuIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhci1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1wcmljaW5nIFtjbGFzcyo9XCJjb2wtXCJdOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuY2FyZDpub3QoLmNhcmQtYmxhY2spIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXByaWNpbmcgLmNhcmQ6bm90KC5jYXJkLWJsYWNrKSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuc2VjdGlvbi1wcmljaW5nIFtjbGFzcyo9XCJjb2wtXCJdOmZpcnN0LWNoaWxkID4gLmNhcmQ6bm90KC5jYXJkLWJsYWNrKSB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAuc2VjdGlvbi1wcmljaW5nIFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQgPiAuY2FyZDpub3QoLmNhcmQtYmxhY2spIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcjpub3QoLmZvb3Rlci1iaWcpIG5hdiA+IHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1vcGVuIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJ1cmdlciAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgLm5hdmJhci1idXJnZXIgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5uYXZiYXItYnVyZ2VyIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgYm9keSA+IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYsXHJcbiAgYm9keSA+IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgYm9keSA+IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbn1cclxuLyogICAgICAgICAgQ2hhbmdlcyBmb3Igc21hbGwgZGlzcGxheSAgICAgICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5uYXZiYXItdHJhbnNwYXJlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xyXG4gIH1cclxuXHJcbiAgI2JvZHlDbGljayB7XHJcbiAgICByaWdodDogMjMwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTAzMjtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjMwcHgsIDAsIDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMzBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIzMHB4LCAwLCAwKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSk7XHJcbiAgfVxyXG4gIC5uYXZiYXItY29sbGFwc2UgdWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaSA+IGEge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgY29sb3I6ICM0MzQ1NDc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgcGFkZGluZzogMjRweCAwO1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNjNWE0N2U7XHJcbiAgfVxyXG4gIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpLnNvY2lhbC1saW5rcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpLnNvY2lhbC1saW5rcyA+IGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMjRweCAxNXB4O1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlOjphZnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLm5hdmJhci1jb2xsYXBzZS5oYXMtaW1hZ2U6OmFmdGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC44KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIC5jb250YWluZXIge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5uYXYtb3BlbiAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1vcGVuIC53cmFwcGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTExNXB4LCAwLCAwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTE1cHgsIDAsIDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTE1cHgsIDAsIDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTExNXB4LCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTExNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm5hdmJhci1uYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgPiBsaTpmaXJzdC1jaGlsZCA+IGEge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSA+IGxpOmxhc3QtY2hpbGQgPiBhIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgPiBsaSA+IGEsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgLmFjdGl2ZSA+IGEsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcclxuICAgIGNvbG9yOiAjNDM0NTQ3O1xyXG4gIH1cclxuICBbY2xhc3MqPVwibmF2YmFyLVwiXSAubmF2YmFyLW5hdiA+IGxpID4gYSxcclxuICBbY2xhc3MqPVwibmF2YmFyLVwiXSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBbY2xhc3MqPVwibmF2YmFyLVwiXSAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciwgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsXHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgW2NsYXNzKj1cIm5hdmJhci1cIl0gLm5hdmJhci1uYXYgLmRyb3Bkb3duID4gYTpob3ZlciAuY2FyZXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzc3NztcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG4gIFtjbGFzcyo9XCJuYXZiYXItXCJdIC5uYXZiYXItbmF2IC5kcm9wZG93biA+IGE6YWN0aXZlIC5jYXJldCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZml4ZWQtdG9wIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1saW5lIC5idG4ge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLnN1YnNjcmliZS1saW5lIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1saW5lLnB1bGwtcmlnaHQge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIG5hdi5wdWxsLWxlZnQge1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb290ZXI6bm90KC5mb290ZXItYmlnKSBuYXYgPiB1bCBsaSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtYXJlYS5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGU6aG92ZXIsIC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1lZGlhLXBvc3QgLmF1dGhvciB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICB9XHJcblxyXG4gIC5tZWRpYS1wb3N0IC5tZWRpYS1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1vcGVuIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yODBweCwgMCwgMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI4MHB4LCAwLCAwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI4MHB4LCAwLCAwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yODBweCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yODBweCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb290ZXIgLnNvY2lhbC1hcmVhLnB1bGwtcmlnaHQsXHJcbiAgLmZvb3RlciBuYXYucHVsbC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLW51bWJlcnMgLmNhcmQge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tcHJpY2luZyAucGFyYWxsYXgge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuc2VjdGlvbi1wcmljaW5nIC5jYXJkLXByaWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuc2VjdGlvbi1wcmljaW5nIC5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIxNXZoO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICAuc2VjdGlvbi5zZWN0aW9uLW91ci10ZWFtIC50aXRsZS1kZXNjcmlwdGlvbixcclxuICAuc2VjdGlvbi5zZWN0aW9uLXdlLWRvIC50aXRsZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi5zZWN0aW9uLXdlLWRvIC50ZXh0LWRlc2NyaXB0aW9uIHtcclxuICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNlY3Rpb24tY29udGFjdC11cyB7XHJcbiAgICBtaW4taGVpZ2h0OiA1NzBweDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRhY3QtdXMgLmFkZHJlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1wcmljaW5nIC5yb3cgW2NsYXNzXj1cImNvbC1cIl06Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbiAgLnNlY3Rpb24tcHJpY2luZyAucm93IFtjbGFzc149XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICAuc2VjdGlvbi1wcmljaW5nIC5yb3cgW2NsYXNzXj1cImNvbC1cIl06bnRoLWNoaWxkKDIpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5zZWN0aW9uLWZhcSAuYm94IHtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWZhcSAudGV4dC1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24uc2VjdGlvbi13ZS1hcmUgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1heC13aWR0aDogNTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24uc2VjdGlvbi1pbmZvIC5pbmZvLXByaWNpbmcge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24uc2VjdGlvbi1pbmZvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLnNlY3Rpb24taW5mbyAuaW5mby1wcmljaW5nIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24uc2VjdGlvbi1pbmZvIC5pbmZvLXByaWNpbmcgLmljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuc2VjdGlvbi1wcmljaW5nIC5yb3cgW2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5uZXctdGl0bGUtYXJlYXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/lab-edit/lab-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/lab-edit/lab-edit.component.ts ***!
  \************************************************/
/*! exports provided: LabEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabEditComponent", function() { return LabEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LabEditComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Test Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabEditComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LabEditComponent_div_15_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.labForm.get("testname").errors == null ? null : ctx_r0.labForm.get("testname").errors.required);
} }
function LabEditComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const visitfreq_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", visitfreq_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](visitfreq_r6);
} }
function LabEditComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visit Frequency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabEditComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LabEditComponent_div_21_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.labForm.get("visitfreq").errors == null ? null : ctx_r2.labForm.get("visitfreq").errors.required);
} }
function LabEditComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const visitdate_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", visitdate_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](visitdate_r8);
} }
function LabEditComponent_div_27_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visitng Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabEditComponent_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.labForm.get("visitdate").errors == null ? null : ctx_r10.labForm.get("visitdate").errors.serverError);
} }
function LabEditComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LabEditComponent_div_27_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LabEditComponent_div_27_small_2_Template, 2, 1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.labForm.get("visitdate").errors == null ? null : ctx_r4.labForm.get("visitdate").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.labForm.get("visitdate").errors == null ? null : ctx_r4.labForm.get("visitdate").errors.serverError);
} }
class LabEditComponent {
    constructor(_utils, _router, fb, _auth) {
        this._utils = _utils;
        this._router = _router;
        this.fb = fb;
        this._auth = _auth;
        this.numbers = [];
        this.labdetail = { userID: "", email: "", registeredDate: null, testname: "", visitfreq: "", visitdate: null };
        this.task = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"]("", "", "", null, false);
        this.labForm = this.fb.group({
            testname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            visitfreq: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            visitdate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.numbers = Array(30).fill(0).map((x, i) => i + 1);
        this.freqoptions = ["Monthly", "Bimonthly"];
        this.userID = this._auth.getLoggedInUserID();
        this._utils.getLabService(this.userID.toString())
            .subscribe(res => {
            console.log(res);
            this.labdetail = JSON.parse(JSON.stringify(res));
            this.labdetail.userID = this.userID.toString();
        }, err => {
            console.log(err);
        });
    }
    update() {
        this.useremail = this._auth.getLoggedInUseremail();
        this.userID = this._auth.getLoggedInUserID();
        this.nowDate = new Date();
        this.currmonth = this.nowDate.getMonth();
        this.currDate = this.nowDate.getDate();
        this.curryear = this.nowDate.getFullYear();
        console.log(this.currmonth);
        // this.labdetail={userID:this.userID.toString(), testname:this.labForm.get('testname').value,
        // visitfreq:this.labForm.get('visitfreq').value,visitdate:this.labForm.get('visitdate').value};
        this._utils.updateLabservice(this.labdetail)
            .subscribe(res => {
            console.log(res);
            if (this.labForm.get('visitdate').touched || this.labForm.get('visitfreq').touched) {
                if (this.labForm.get('visitfreq').value == "Monthly") {
                    if (this.currmonth == 11 && this.labForm.get('visitdate').value < this.currDate) {
                        this.scheduledmonth = 0;
                        this.scheduledyear = this.curryear + 1;
                    }
                    else if (this.labForm.get('visitdate').value > this.currDate) {
                        this.scheduledmonth = this.currmonth;
                        this.scheduledyear = this.curryear;
                    }
                    else {
                        this.scheduledmonth = this.currmonth + 1;
                        this.scheduledyear = this.curryear;
                    }
                }
                if (this.labForm.get('visitfreq').value == "Bimonthly") {
                    if (this.currmonth == 11 || this.currmonth == 10 && this.labForm.get('visitdate').value < this.currDate) {
                        this.scheduledmonth = 1;
                        this.scheduledyear = this.curryear + 1;
                    }
                    else if (this.labForm.get('visitdate').value > this.currDate) {
                        this.scheduledmonth = this.currmonth;
                        this.scheduledyear = this.curryear;
                    }
                    else {
                        this.scheduledmonth = this.currmonth + 2;
                        this.scheduledyear = this.curryear;
                    }
                }
                this.scheduledday = this.labForm.get('visitdate').value;
                this.task = { userID: this.userID, email: this.useremail, servicetype: 'lab', scheduleddate: new Date(this.scheduledyear, this.scheduledmonth, this.scheduledday), completed: false };
                this._utils.updatetask(this.task)
                    .subscribe(res => {
                    console.log(res);
                    this._router.navigate(['/profile']);
                }, err => {
                    console.log(err);
                });
            }
        }, err => {
            console.log(err);
        });
    }
}
LabEditComponent.ɵfac = function LabEditComponent_Factory(t) { return new (t || LabEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
LabEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabEditComponent, selectors: [["app-lab-edit"]], decls: 33, vars: 10, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], [1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "testname"], ["type", "text", "formControlName", "testname", "name", "testname", "id", "testname", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "visitfreq"], ["name", "visitfreq", "id", "visitfreq", "formControlName", "visitfreq", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "visitdate"], ["name", "visitdate", "id", "visitdate", "formControlName", "visitdate", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "button", "routerLink", "/profile", 1, "btn", "btn-success", "float-right", "ml-2"], ["type", "submit", 1, "btn", "btn-success", "float-right", 3, "disabled"], ["class", "text-white", 4, "ngIf"], [1, "text-white"], [3, "ngValue"]], template: function LabEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lab @ Home service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LabEditComponent_Template_form_ngSubmit_10_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Test Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LabEditComponent_Template_input_ngModelChange_14_listener($event) { return ctx.labdetail.testname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LabEditComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Visit Frequency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LabEditComponent_Template_select_ngModelChange_19_listener($event) { return ctx.labdetail.visitfreq = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LabEditComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LabEditComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Visit Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LabEditComponent_Template_select_ngModelChange_25_listener($event) { return ctx.labdetail.visitdate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LabEditComponent_option_26_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LabEditComponent_div_27_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.labForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.labdetail.testname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labForm.get("testname").invalid && ctx.labForm.get("testname").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.labdetail.visitfreq);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.freqoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labForm.get("visitfreq").invalid && ctx.labForm.get("visitfreq").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.labdetail.visitdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labForm.get("visitdate").invalid && ctx.labForm.get("visitdate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.labForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:100px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiLWVkaXQvbGFiLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOzs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xhYi1lZGl0L2xhYi1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiM3NzZjNjc7XHJcbiAgICBjb2xvcjpyZ2IoNDksMzAsMzcpO1xyXG4gICAgbWFyZ2luLXRvcDoxMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbiNtYWludGFibGV7XHJcbiAgICBoZWlnaHQ6ODV2aDtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6ODV2aDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lab-edit',
                templateUrl: './lab-edit.component.html',
                styleUrls: ['./lab-edit.component.css']
            }]
    }], function () { return [{ type: _utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lab-home/lab-home.component.ts":
/*!************************************************!*\
  !*** ./src/app/lab-home/lab-home.component.ts ***!
  \************************************************/
/*! exports provided: LabHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabHomeComponent", function() { return LabHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _lab_home_labdetail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lab-home/labdetail.model */ "./src/app/lab-home/labdetail.model.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function LabHomeComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lab Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabHomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LabHomeComponent_div_15_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.labForm.get("testname").errors == null ? null : ctx_r0.labForm.get("testname").errors.required);
} }
function LabHomeComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const visitfreq_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", visitfreq_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](visitfreq_r6);
} }
function LabHomeComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visit Frequency is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabHomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LabHomeComponent_div_21_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.labForm.get("visitfreq").errors == null ? null : ctx_r2.labForm.get("visitfreq").errors.required);
} }
function LabHomeComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const visitdate_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", visitdate_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](visitdate_r8);
} }
function LabHomeComponent_div_27_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visitng Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabHomeComponent_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.labForm.get("visitdate").errors == null ? null : ctx_r10.labForm.get("visitdate").errors.serverError);
} }
function LabHomeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LabHomeComponent_div_27_small_1_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LabHomeComponent_div_27_small_2_Template, 2, 1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.labForm.get("visitdate").errors == null ? null : ctx_r4.labForm.get("visitdate").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.labForm.get("visitdate").errors == null ? null : ctx_r4.labForm.get("visitdate").errors.serverError);
} }
class LabHomeComponent {
    constructor(_utils, _router, fb, _auth) {
        this._utils = _utils;
        this._router = _router;
        this.fb = fb;
        this._auth = _auth;
        this.numbers = [];
        this.labdetail = new _lab_home_labdetail_model__WEBPACK_IMPORTED_MODULE_3__["Labdetail"]("", "", "", null, "", null);
        this.task = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"]("", "", "", null, false);
        this.labForm = this.fb.group({
            testname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            visitfreq: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            visitdate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.numbers = Array(30).fill(0).map((x, i) => i + 1);
        this.freqoptions = ["Monthly", "Bimonthly"];
    }
    ngOnInit() {
    }
    subscribe() {
        this.useremail = this._auth.getLoggedInUseremail();
        this.userID = this._auth.getLoggedInUserID();
        this.nowDate = new Date();
        this.currmonth = this.nowDate.getMonth();
        this.currDate = this.nowDate.getDate();
        this.curryear = this.nowDate.getFullYear();
        console.log(this.currmonth);
        this.labdetail = { userID: this.userID, email: this.useremail, registeredDate: this.nowDate, testname: this.labForm.get('testname').value,
            visitfreq: this.labForm.get('visitfreq').value, visitdate: this.labForm.get('visitdate').value };
        this._utils.addlabservice(this.labdetail)
            .subscribe(res => {
            console.log(res);
            if (this.labForm.get('visitfreq').value == "Monthly") {
                if (this.currmonth == 11 && this.labForm.get('visitdate').value < this.currDate) {
                    this.scheduledmonth = 0;
                    this.scheduledyear = this.curryear + 1;
                }
                else if (this.labForm.get('visitdate').value > this.currDate) {
                    this.scheduledmonth = this.currmonth;
                    this.scheduledyear = this.curryear;
                }
                else {
                    this.scheduledmonth = this.currmonth + 1;
                    this.scheduledyear = this.curryear;
                }
            }
            if (this.labForm.get('visitfreq').value == "Bimonthly") {
                if (this.currmonth == 11 || this.currmonth == 10 && this.labForm.get('visitdate').value < this.currDate) {
                    this.scheduledmonth = 1;
                    this.scheduledyear = this.curryear + 1;
                }
                else if (this.labForm.get('visitdate').value > this.currDate) {
                    this.scheduledmonth = this.currmonth;
                    this.scheduledyear = this.curryear;
                }
                else {
                    this.scheduledmonth = this.currmonth + 2;
                    this.scheduledyear = this.curryear;
                }
            }
            this.scheduledday = this.labForm.get('visitdate').value;
            // this.scheduleddate=new Date(this.scheduledyear,this.scheduledmonth,this.scheduledday);
            console.log(this.scheduledmonth);
            console.log(this.scheduledday);
            console.log(this.scheduleddate);
            console.log("Scheduled date is " + this.scheduleddate);
            this.task = { userID: this.userID, email: this.useremail, servicetype: 'lab', scheduleddate: new Date(this.scheduledyear, this.scheduledmonth, this.scheduledday), completed: false };
            this._utils.addTask(this.task)
                .subscribe(res => {
                console.log(res);
                this._router.navigate(['/profile']);
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
        });
    }
}
LabHomeComponent.ɵfac = function LabHomeComponent_Factory(t) { return new (t || LabHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
LabHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabHomeComponent, selectors: [["app-lab-home"]], decls: 33, vars: 7, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "testname"], ["type", "text", "formControlName", "testname", "name", "testname", "id", "testname", 1, "form-control", "rounded-0"], [4, "ngIf"], ["for", "visitfreq"], ["name", "visitfreq", "id", "visitfreq", "formControlName", "visitfreq", 1, "form-control", "rounded-0"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "visitdate"], ["name", "visitdate", "id", "visitdate", "formControlName", "visitdate", 1, "form-control", "rounded-0"], ["type", "button", "routerLink", "/profile", 1, "btn", "btn-success", "float-right", "ml-2"], ["type", "submit", 1, "btn", "btn-success", "float-right", 3, "disabled"], ["class", "text-white", 4, "ngIf"], [1, "text-white"], [3, "ngValue"]], template: function LabHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lab @ Home service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LabHomeComponent_Template_form_ngSubmit_10_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Test Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LabHomeComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Visit Frequency: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LabHomeComponent_option_20_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LabHomeComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Visit Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LabHomeComponent_option_26_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LabHomeComponent_div_27_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.labForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labForm.get("testname").invalid && ctx.labForm.get("testname").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.freqoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labForm.get("visitfreq").invalid && ctx.labForm.get("visitfreq").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labForm.get("visitdate").invalid && ctx.labForm.get("visitdate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.labForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:100px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiLWhvbWUvbGFiLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYWItaG9tZS9sYWItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxuICAgIGNvbG9yOnJnYig0OSwzMCwzNyk7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuI21haW50YWJsZXtcclxuICAgIGhlaWdodDo4NXZoO1xyXG4gICAgYmFja2dyb3VuZDojNzc2YzY3O1xyXG59XHJcbi5pbWFnZXtcclxuICAgIGhlaWdodDo4NXZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lab-home',
                templateUrl: './lab-home.component.html',
                styleUrls: ['./lab-home.component.css']
            }]
    }], function () { return [{ type: _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lab-home/labdetail.model.ts":
/*!*********************************************!*\
  !*** ./src/app/lab-home/labdetail.model.ts ***!
  \*********************************************/
/*! exports provided: Labdetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labdetail", function() { return Labdetail; });
class Labdetail {
    constructor(email, testname, visitfreq, visitdate, userID, registeredDate) {
        this.email = email;
        this.testname = testname;
        this.visitfreq = visitfreq;
        this.visitdate = visitdate;
        this.userID = userID;
        this.registeredDate = registeredDate;
    }
}


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.loginForm.get("email").errors == null ? null : ctx_r4.loginForm.get("email").errors.serverError);
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_15_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_15_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_15_small_3_Template, 2, 1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").errors == null ? null : ctx_r0.loginForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").errors == null ? null : ctx_r0.loginForm.get("email").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").errors == null ? null : ctx_r0.loginForm.get("email").errors.serverError);
} }
function LoginComponent_div_20_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum length of password is 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_20_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.loginForm.get("password").errors == null ? null : ctx_r7.loginForm.get("password").errors.serverError);
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_20_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_20_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_20_small_3_Template, 2, 1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").errors == null ? null : ctx_r1.loginForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").errors == null ? null : ctx_r1.loginForm.get("password").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").errors == null ? null : ctx_r1.loginForm.get("password").errors.serverError);
} }
class LoginComponent {
    constructor(_auth, _router, fb) {
        this._auth = _auth;
        this._router = _router;
        this.fb = fb;
        this.loginForm = this.fb.group({ email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.loginUserDetails = { email: "", password: "" };
        this.isAdmin = false;
    }
    loginUser() {
        this._auth.loginUser(this.loginUserDetails)
            .subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res['token']);
            localStorage.setItem('CALMSuserID', res['id']);
            localStorage.setItem('CALMSemail', res['email']);
            if (res['isAdmin'] == true) {
                localStorage.setItem('isAdmin', res['isAdmin']);
                this._router.navigate(['/tasks']);
            }
            else {
                this._router.navigate(['/profile']);
            }
        }, 
        // err=>console.log(err);
        err => {
            //handle server side errors
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const validationError = err.error;
                if (err.status === 401) {
                    this.loginForm.get('password').setErrors({ serverError: validationError });
                }
                else if (err.status === 422) {
                    this.loginForm.get('email').setErrors({ serverError: validationError });
                }
            }
        });
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 10, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "uname1", 2, "font-size", "20px", "font-weight", "bold", "font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "password", 2, "font-size", "20px", "font-weight", "bold", "font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "float-right", 3, "disabled"], ["class", "text-white", 4, "ngIf"], [1, "text-white"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginUserDetails.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.loginUserDetails.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.loginForm.get("email").invalid && ctx.loginForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserDetails.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").invalid && ctx.loginForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.loginForm.get("password").invalid && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserDetails.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").invalid && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    \r\n    color:rgb(49,30,37);\r\n    margin-top:100px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMkRBQTJEO0lBQzNELG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDojNzc2YzY3O1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3dvb2QuanBnJyk7ICovXHJcbiAgICBjb2xvcjpyZ2IoNDksMzAsMzcpO1xyXG4gICAgbWFyZ2luLXRvcDoxMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbiNtYWludGFibGV7XHJcbiAgICBoZWlnaHQ6ODV2aDtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6ODV2aDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PaymentComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 107, vars: 0, consts: [[1, "container"], [1, "row"], [1, "well", "col-xs-10", "col-sm-10", "col-md-6", "col-xs-offset-1", "col-sm-offset-1", "col-md-offset-3"], [1, "col-xs-6", "col-sm-6", "col-md-6"], ["title", "Phone"], [1, "col-xs-6", "col-sm-6", "col-md-6", "text-right"], [1, "text-center"], [1, "table", "table-hover"], [1, "col-md-9"], [1, "col-md-1", 2, "text-align", "center"], [1, "col-md-1", "text-center"], [1, "text-right"], [1, "text-center", "text-danger"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "btn-block"], [1, "glyphicon", "glyphicon-chevron-right"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Elf Cafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 2135 Sunset Blvd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Los Angeles, CA 90026 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "abbr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "P:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (213) 484-6829 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date: 1st November, 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Receipt #: 34522677W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Baked Rodopa Sheep Feta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "$26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lebanese Cabbage Salad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "$8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Baked Tart with Thyme and Garlic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "$48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Subtotal:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Tax:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "$6.94");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "$6.94");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Total:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "$31.53");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Pay Now\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZW1wdHkgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/User.model.ts":
/*!***************************************!*\
  !*** ./src/app/profile/User.model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, name, address, contact) {
        this.email = email;
        this.name = name;
        this.address = address;
        this.contact = contact;
    }
}


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.model */ "./src/app/profile/User.model.ts");
/* harmony import */ var _service_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.model */ "./src/app/profile/service.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ProfileComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_tr_50_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const service_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.edit(service_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_tr_50_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const service_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deletebill(service_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, service_r1.registereddate));
} }
class ProfileComponent {
    constructor(_auth, _utils, _route) {
        this._auth = _auth;
        this._utils = _utils;
        this._route = _route;
        this.user = new _User_model__WEBPACK_IMPORTED_MODULE_1__["User"](null, null, null, null);
        this.services = [];
        this.service = new _service_model__WEBPACK_IMPORTED_MODULE_2__["Service"](null, null, false, false);
    }
    ngOnChanges() {
        this.loadServices();
    }
    ngOnInit() {
        this.loadServices();
    }
    loadServices() {
        this.userID = localStorage.getItem('CALMSuserID');
        this._auth.getUserDetails(this.userID.toString())
            .subscribe(res => {
            this.user = JSON.parse(JSON.stringify(res));
            console.log(this.userID.toString());
            //Get EB services details
            this._utils.getEBService(this.userID.toString())
                .subscribe(res => {
                console.log(res);
                this.ebdata = JSON.parse(JSON.stringify(res));
                if (this.ebdata != null) {
                    this.service = new _service_model__WEBPACK_IMPORTED_MODULE_2__["Service"]("Electricity Bill Payment", this.ebdata.registeredDate, true, false);
                    this.services.push(this.service);
                }
                console.log(this.services);
                //get Lab services details
                this._utils.getLabService(this.userID.toString())
                    .subscribe(res => {
                    this.labdata = JSON.parse(JSON.stringify(res));
                    console.log(this.labdata);
                    if (this.labdata != null) {
                        this.service = new _service_model__WEBPACK_IMPORTED_MODULE_2__["Service"]("Lab@Home service", this.labdata.registeredDate, false, true);
                        this.services.push(this.service);
                    }
                    console.log(this.services);
                }, err => {
                    console.log(err);
                });
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
        });
    }
    edit(type) {
        if (type == "Electricity Bill Payment") {
            this._route.navigate(['/ebilledit']);
        }
        else if (type == "Lab@Home service") {
            this._route.navigate(['/labedit']);
        }
    }
    deletebill(type) {
        console.log(type);
        if (type == "Electricity Bill Payment") {
            this.serviceType = "eb";
        }
        else if (type == "Lab@Home service") {
            this.serviceType = "lab";
        }
        if (confirm("Are you sure you want to delete this service and related tasks?") == true) {
            if (this.serviceType == 'eb') {
                this._utils.deleteEBService(this.userID)
                    .subscribe((data) => {
                    //  this.service=JSON.parse(JSON.stringify(data));
                    //  if(this.service !=null){
                    //   this.service=new Service("Electricity Bill Payment",this.ebdata.registeredDate,true,false);
                    //   this.services.push(this.service);
                    //  }
                    this._utils.deletetasksforuserandservicetype(this.userID, this.serviceType)
                        .subscribe(res => {
                        console.log("Tasks deleted");
                        this.services = [];
                        this.loadServices();
                    }, err => {
                        console.log(err);
                    });
                    console.log(data);
                });
            }
            else if (this.serviceType == 'lab') {
                this._utils.deleteLabService(this.userID)
                    .subscribe((data) => {
                    this.services = [];
                    //  this.service=JSON.parse(JSON.stringify(data));
                    //  if(this.service !=null){
                    //   this.service=new Service("Lab@Home Service",this.labdata.registeredDate,false,true);
                    //   this.services.push(this.service);
                    //  }
                    this._utils.deletetasksforuserandservicetype(this.userID, this.serviceType)
                        .subscribe(res => {
                        console.log("Tasks deleted");
                        this.services = [];
                        this.loadServices();
                    }, err => {
                        console.log(err);
                    });
                    console.log(data);
                });
            }
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 51, vars: 5, consts: [["id", "top", 1, "card", "mx-auto"], [1, "card"], [1, "row"], [1, "col-md-6"], [1, "card-body"], ["for", ""], ["for", "", 1, "form-control"], ["type", "submit", "routerLink", "/editprofile", 1, "float-right", "btn", "btn-primary"], [1, "table-responsive"], [1, "table"], ["routerLink", "/serviceshome", 1, "btn", "btn-primary"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CALMS Profile Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Personal Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Edit User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " List of Enrolled Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Service Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Date of Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Add Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileComponent_tr_50_Template, 12, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin:0px;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    height:85vh;\r\n}\r\n\r\n#top[_ngcontent-%COMP%]{\r\n    height:50px;\r\n    background:#776c67;\r\n    font-family: cursive;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    padding-top: 15px;\r\n    text-align: center;\r\n    color:white;\r\n    text-transform:uppercase;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbip7XHJcbiAgICBtYXJnaW46MHB4O1xyXG59XHJcblxyXG50aGVhZCx0Ym9keXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGhlaWdodDo4NXZoO1xyXG59XHJcblxyXG4jdG9we1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiM3NzZjNjc7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG59XHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDojNzc2YzY3O1xyXG4gICAgY29sb3I6cmdiKDQ5LDMwLDM3KTtcclxuICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/service.model.ts":
/*!******************************************!*\
  !*** ./src/app/profile/service.model.ts ***!
  \******************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
class Service {
    constructor(type, registereddate, isEB, isLab) {
        this.type = type;
        this.registereddate = registereddate;
        this.isEB = isEB;
        this.isLab = isLab;
    }
}


/***/ }),

/***/ "./src/app/register/confirmedvalidator.ts":
/*!************************************************!*\
  !*** ./src/app/register/confirmedvalidator.ts ***!
  \************************************************/
/*! exports provided: ConfirmedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function() { return ConfirmedValidator; });
function ConfirmedValidator(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _confirmedvalidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmedvalidator */ "./src/app/register/confirmedvalidator.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function RegisterComponent_div_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_15_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_15_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.registerForm.get("email").errors == null ? null : ctx_r8.registerForm.get("email").errors.serverError);
} }
function RegisterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_15_small_1_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_15_small_2_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_15_small_3_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors == null ? null : ctx_r0.registerForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors == null ? null : ctx_r0.registerForm.get("email").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors == null ? null : ctx_r0.registerForm.get("email").errors.serverError);
} }
function RegisterComponent_div_20_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_20_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password should be at least 8 characters long and should contain one number,one upper case character, one lower case character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_20_small_1_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_20_small_2_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("password").errors == null ? null : ctx_r1.registerForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("password").errors == null ? null : ctx_r1.registerForm.get("password").errors.pattern);
} }
function RegisterComponent_div_25_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password should be at least 8 characters long and should contain one number,one upper case character, one lower case character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm Password must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_25_small_1_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_25_small_2_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_25_small_3_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("confpassword").errors == null ? null : ctx_r2.registerForm.get("confpassword").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("confpassword").errors == null ? null : ctx_r2.registerForm.get("confpassword").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("confpassword").errors == null ? null : ctx_r2.registerForm.get("confpassword").errors.confirmedValidator);
} }
function RegisterComponent_div_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_30_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.registerForm.get("name").errors == null ? null : ctx_r15.registerForm.get("name").errors.serverError);
} }
function RegisterComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_30_small_1_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_30_small_2_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.registerForm.get("name").errors == null ? null : ctx_r3.registerForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.registerForm.get("name").errors == null ? null : ctx_r3.registerForm.get("name").errors.serverError);
} }
function RegisterComponent_div_35_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_35_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.registerForm.get("address").errors == null ? null : ctx_r17.registerForm.get("address").errors.serverError);
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_35_small_1_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_35_small_2_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.registerForm.get("address").errors == null ? null : ctx_r4.registerForm.get("address").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.registerForm.get("address").errors == null ? null : ctx_r4.registerForm.get("address").errors.serverError);
} }
function RegisterComponent_div_40_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_40_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only numbers are allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_40_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact number should have atleast 10 numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_40_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact number can have max 12 numbers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_40_small_1_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_40_small_2_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_40_small_3_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_div_40_small_4_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("contact").errors == null ? null : ctx_r5.registerForm.get("contact").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("contact").errors == null ? null : ctx_r5.registerForm.get("contact").errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("contact").errors == null ? null : ctx_r5.registerForm.get("contact").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("contact").errors == null ? null : ctx_r5.registerForm.get("contact").errors.maxlength);
} }
class RegisterComponent {
    constructor(_auth, _router, fb) {
        this._auth = _auth;
        this._router = _router;
        this.fb = fb;
        this.registeredUser = { email: "", password: "", confpassword: "", name: "", address: "", contact: undefined };
        this.passwordpattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+.{8,}$';
        // phonePattern = /^[0-9]{10,12}$/;
        this.registerForm = this.fb.group({ email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // password:['',[Validators.minLength(6),Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.passwordpattern)]],
            confpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]]
        }, {
            validator: Object(_confirmedvalidator__WEBPACK_IMPORTED_MODULE_3__["ConfirmedValidator"])('password', 'confpassword')
        });
    }
    registerUser() {
        this._auth.registerUser(this.registeredUser)
            .subscribe(res => {
            localStorage.setItem('token', res['token']);
            this._router.navigate(['/login']);
        }, err => {
            console.log(err);
            //handle server side errors
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const validationError = err.error;
                if (err.status === 422) {
                    this.registerForm.get('email').setErrors({ serverError: validationError });
                }
            }
        });
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 44, vars: 26, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "uname1"], ["type", "email", "formControlName", "email", "name", "email", "id", "email", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "password", "formControlName", "confpassword", "name", "confpassword", "id", "confpassword", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["for", "name"], ["type", "text", "formControlName", "name", "name", "name", "id", "name", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["for", "address"], ["type", "text", "formControlName", "address", "name", "address", "id", "address", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["for", "contact"], ["type", "text", "formControlName", "contact", "name", "contact", "id", "contact", 1, "form-control", "rounded-0", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "float-right", 3, "disabled"], ["class", "text-white", 4, "ngIf"], [1, "text-white"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.registeredUser.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_div_15_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.registeredUser.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.registeredUser.confpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_29_listener($event) { return ctx.registeredUser.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_div_30_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_34_listener($event) { return ctx.registeredUser.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) { return ctx.registeredUser.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegisterComponent_div_40_Template, 5, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("email").invalid && ctx.registerForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").invalid && ctx.registerForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("confpassword").invalid && ctx.registerForm.get("confpassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUser.confpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confpassword").invalid && ctx.registerForm.get("confpassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("name").invalid && ctx.registerForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("name").invalid && ctx.registerForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("address").invalid && ctx.registerForm.get("address").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUser.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("address").invalid && ctx.registerForm.get("address").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.registerForm.get("contact").invalid && ctx.registerForm.get("contact").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registeredUser.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("contact").invalid && ctx.registerForm.get("contact").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:20px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:110vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:110vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiM3NzZjNjc7XHJcbiAgICBjb2xvcjpyZ2IoNDksMzAsMzcpO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuI21haW50YWJsZXtcclxuICAgIGhlaWdodDoxMTB2aDtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6MTEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services-home/services-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/services-home/services-home.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicesHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesHomeComponent", function() { return ServicesHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");




class ServicesHomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
ServicesHomeComponent.ɵfac = function ServicesHomeComponent_Factory(t) { return new (t || ServicesHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ServicesHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesHomeComponent, selectors: [["app-services-home"]], decls: 34, vars: 4, consts: [[1, "card"], [1, "row"], [1, "col-md-6", 2, "border", "solid 1px white"], [1, "card-header"], [2, "margin-left", "5px"], ["routerLink", "ebillsubscribe", 1, "btn", "btn-primary"], ["routerLink", "labsubscribe", 1, "btn", "btn-primary"], [2, "color", "black"], [2, "margin-top", "20px"], [2, "margin-left", "100px"], ["videoId", "lNWHS9Kok8Q", "suggestedQuality", "large", 3, "height", "width", "startSeconds", "endSeconds"]], template: function ServicesHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Introducing - CALMS Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CALMS has a vision of offering a wide varitey of services to make living in your own home hassle free and comfortable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Electricity Payment Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Paying electricity bill online is the most helpful option, you can pay anywhere & anytime without jumping the deadline. We can pay your EB bill without missing out the last date of electricity bill payment that leads to extra payment of late charges.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lab@Home Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We have tied with up Apollo Diagnostics who offer the sheer convenience of Home Sample Collection. On receiving a call, Apollo\u2019s trained technicians arrive at the doorstep of the patient to collect samples. Home collection is completely free of cost and reports can be mailed to you or can be delivered at home (On Chargeable Basis) the very next day.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Watch this space for more exciting services in the near future!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Here's a video of how the advancements of technology are assiting the elderly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "youtube-player", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 450)("width", 500)("startSeconds", "4")("endSeconds", 60);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"]], styles: [".card[_ngcontent-%COMP%]{\r\n    height:100%;\r\n    width:100%;\r\n   background: #776c67;\r\n   color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMtaG9tZS9zZXJ2aWNlcy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7R0FDWCxtQkFBbUI7R0FDbkIsV0FBVztBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMtaG9tZS9zZXJ2aWNlcy1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIGJhY2tncm91bmQ6ICM3NzZjNjc7XHJcbiAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services-home',
                templateUrl: './services-home.component.html',
                styleUrls: ['./services-home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, consts: [[1, "main"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#wrapper[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n }\r\n\r\n #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n \r\n}\r\n\r\n #sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n  padding: 0.875rem 1.25rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n #sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n  width: 15rem;\r\n}\r\n\r\n #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n}\r\n\r\n @media (min-width: 768px) {\r\n  #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n\r\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: -15rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n .main[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: row;\r\n    width:100%;\r\n    align-content: center;\r\n}\r\n\r\n .right[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOztDQUVEO0lBQ0csa0JBQWtCO0NBQ3JCOztDQUVEO0lBQ0ksVUFBVTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFJbkIsZ0NBQWdDOztBQUVsQzs7Q0FFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0NBRUE7RUFDRSxZQUFZO0FBQ2Q7O0NBSUE7RUFDRSxjQUFjO0FBQ2hCOztDQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLG1CQUFtQjtFQUNyQjs7O0FBR0Y7O0NBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0NBR0E7SUFDSSxVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBTdGFydCBCb290c3RyYXAgLSBTaW1wbGUgU2lkZWJhciAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGVzL3NpbXBsZS1zaWRlYmFyKVxyXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDIwIFN0YXJ0IEJvb3RzdHJhcFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1zaW1wbGUtc2lkZWJhci9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbiAjd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiB9XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiBcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG4ubWFpbntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnJpZ2h0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tasks_taskdetail_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/taskdetail.model */ "./src/app/tasks/taskdetail.model.ts");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function TaskDetailComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Electricity Consumer Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.consumernum);
} }
function TaskDetailComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lab Test Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.task.testname);
} }
function TaskDetailComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EB Payment Frequency:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EB Payment Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.task.paymentfreq);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.task.paymentdate);
} }
function TaskDetailComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Visit Frequency:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Visit Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.task.paymentfreq);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.task.paymentdate);
} }
class TaskDetailComponent {
    constructor(route, _router, _utils, _auth) {
        this.route = route;
        this._router = _router;
        this._utils = _utils;
        this._auth = _auth;
        this.task = new _tasks_taskdetail_model__WEBPACK_IMPORTED_MODULE_1__["TaskDetail"]("", "", "", null, "", false, null, "", null);
        this.isEBservice = false;
        this.isLabservice = false;
        this.newtask = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"]("", "", "", null, false);
        this.mail = { email: "", subject: "", text: "" };
        this.route.params.subscribe(params => {
            this.taskid = params['id'];
            console.log(this.taskid);
        });
        this._utils.getsingletask(this.taskid.toString())
            .subscribe(res => {
            this.taskdata = JSON.parse(JSON.stringify(res));
            if (this.taskdata.servicetype == "eb") {
                this.isEBservice = true;
            }
            else if (this.taskdata.servicetype == 'lab') {
                this.isLabservice = true;
            }
            //populating the taskdetail 
            this.task.email = this.taskdata.email;
            this.task.servicetype = this.taskdata.servicetype;
            this.task.scheduleddate = this.taskdata.scheduleddate;
            this.task.completed = this.taskdata.completed;
            this.userID = this.taskdata.userID;
            this._auth.getUserDetails(this.userID.toString())
                .subscribe(res => {
                this.userDetails = JSON.parse(JSON.stringify(res));
                this.task.contact = this.userDetails.contact;
            }, err => {
                console.log(err);
            });
            if (this.isEBservice) {
                this._utils.getEBService(this.userID.toString())
                    .subscribe(res => {
                    this.ebdata = JSON.parse(JSON.stringify(res));
                    console.log(this.ebdata);
                    this.task.consumernum = this.ebdata.consumernum;
                    this.task.paymentfreq = this.ebdata.paymentfreq;
                    this.task.paymentdate = this.ebdata.dateofpayment;
                }, err => {
                    console.log(err);
                });
            }
            else if (this.isLabservice) {
                this._utils.getLabService(this.userID.toString())
                    .subscribe(res => {
                    this.labdata = JSON.parse(JSON.stringify(res));
                    this.task.testname = this.labdata.testname;
                    this.task.paymentdate = this.labdata.visitdate;
                    this.task.paymentfreq = this.labdata.visitfreq;
                }, err => {
                    console.log(err);
                });
            }
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
    completeTask() {
        this.frequency = this.task.paymentfreq;
        this.nextdate = this.task.paymentdate;
        if (confirm("An email confirmation will be sent to the client. Are you sure you want to continue?") == true) {
            this.activedate = new Date(this.task.scheduleddate);
            console.log(this.task.scheduleddate);
            this.currmonth = this.activedate.getMonth();
            console.log(this.currmonth);
            this.curryear = this.activedate.getFullYear();
            this._utils.completetask(this.taskdata._id.toString())
                .subscribe(res => {
                if (this.frequency == "Monthly") {
                    if (this.currmonth == 11) {
                        this.scheduledmonth = 0;
                        this.scheduledyear = this.curryear + 1;
                    }
                    else {
                        this.scheduledmonth = this.currmonth + 1;
                        this.scheduledyear = this.curryear;
                    }
                }
                if (this.frequency == "Bimonthly") {
                    if (this.currmonth == 11 || this.currmonth == 10) {
                        this.scheduledmonth = 1;
                        this.scheduledyear = this.curryear + 1;
                    }
                    else {
                        this.scheduledmonth = this.currmonth + 2;
                        this.scheduledyear = this.curryear;
                    }
                }
                this.scheduledday = this.nextdate;
                console.log(this.nextdate + "Scheduledday");
                this.scheduleddate = new Date(this.scheduledyear, this.scheduledmonth, this.scheduledday, 0, 0, 0, 0);
                console.log("Scheduled date is " + this.scheduleddate);
                this.newtask = { userID: this.userID, email: this.userDetails.email, servicetype: this.task.servicetype, scheduleddate: this.scheduleddate, completed: false };
                this._utils.addTask(this.newtask)
                    .subscribe(res => {
                    console.log(res);
                    this._router.navigate(['/tasks']);
                }, err => {
                    console.log(err);
                });
            }, err => {
                console.log(err);
            });
        }
        //  Mail confirmation code starts
        this.mail.email = this.userDetails.email;
        if (this.task.servicetype == 'eb') {
            this.mail.subject = "Electricity Bill Payment - CALMS - Confirmation";
            this.mail.text = `Electricity Bill Payment scheduled for ${this.activedate} has been completed`;
        }
        else if (this.task.servicetype == 'lab') {
            this.mail.subject = "Lab@home Service - CALMS - Call confirmation";
            this.mail.text = `Lab visit has been scheduled for ${this.activedate}`;
        }
        this._utils.sendmail(this.mail)
            .subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
TaskDetailComponent.ɵfac = function TaskDetailComponent_Factory(t) { return new (t || TaskDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
TaskDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailComponent, selectors: [["app-task-detail"]], decls: 55, vars: 12, consts: [["id", "maintable", 1, "table"], [1, "image", 2, "background-image", "url('../../assets/images/office-1.jpeg')"], [1, "row"], [1, "col-md-4"], [1, "col-md-5"], ["id", "main", 1, "card", "rounded-0"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["for", ""], ["for", "", 1, "form-control"], [1, "col-md-6"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "button", "routerLink", "/tasks", 1, "btn", "btn-success", "float-right", "ml-2"], ["type", "submit", 1, "btn", "btn-success", "float-right", 3, "disabled", "click"], [1, "col-md-3"]], template: function TaskDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Task Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Service Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskDetailComponent_div_22_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskDetailComponent_div_23_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TaskDetailComponent_div_24_Template, 11, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TaskDetailComponent_div_25_Template, 11, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Task Scheduled Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Task Completed?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Funds Available:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Rs 20,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Contact Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_Template_button_click_52_listener() { return ctx.completeTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Complete Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.servicetype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEBservice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLabservice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEBservice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLabservice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 10, ctx.task.scheduleddate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.completed ? "Yes" : "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.task.completed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\n    color:rgb(49,30,37);\r\n    margin-top:50px;\r\n    background-size: cover;\r\n    border:1px solid white;\r\n}\r\n\r\n\r\n\r\n#maintable[_ngcontent-%COMP%]{\r\n    height:110vh;\r\n    background:#776c67;\r\n}\r\n\r\n\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    height:110vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7Ozs7QUFDQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDojNzc2YzY3O1xyXG4gICAgY29sb3I6cmdiKDQ5LDMwLDM3KTtcclxuICAgIG1hcmdpbi10b3A6NTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbiNtYWludGFibGV7XHJcbiAgICBoZWlnaHQ6MTEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiM3NzZjNjc7XHJcbn1cclxuLmltYWdle1xyXG4gICAgaGVpZ2h0OjExMHZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-detail',
                templateUrl: './task-detail.component.html',
                styleUrls: ['./task-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tasks/task.model.ts":
/*!*************************************!*\
  !*** ./src/app/tasks/task.model.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(userID, email, servicetype, scheduleddate, completed) {
        this.userID = userID;
        this.email = email;
        this.servicetype = servicetype;
        this.scheduleddate = scheduleddate;
        this.completed = completed;
    }
}


/***/ }),

/***/ "./src/app/tasks/taskdetail.model.ts":
/*!*******************************************!*\
  !*** ./src/app/tasks/taskdetail.model.ts ***!
  \*******************************************/
/*! exports provided: TaskDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetail", function() { return TaskDetail; });
class TaskDetail {
    constructor(email, servicetype, consumernum, scheduleddate, testname, completed, contact, paymentfreq, paymentdate) {
        this.email = email;
        this.servicetype = servicetype;
        this.consumernum = consumernum;
        this.scheduleddate = scheduleddate;
        this.testname = testname;
        this.completed = completed;
        this.contact = contact;
        this.paymentfreq = paymentfreq;
        this.paymentdate = paymentdate;
    }
}


/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function TasksComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Open Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.servicetype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, task_r1.scheduleddate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.completed ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/taskdetail/", task_r1._id, "");
} }
class TasksComponent {
    constructor(_utils) {
        this._utils = _utils;
        this.searchAll = true;
    }
    ngOnInit() {
        this.showalltasks();
    }
    toggleSearch() {
        this.searchAll = !this.searchAll;
        if (!this.searchAll) {
            this.showincompletetasks();
        }
        else {
            this.showalltasks();
        }
    }
    showincompletetasks() {
        this._utils.getincompletetasks()
            .subscribe(res => {
            console.log(res);
            this.tasks = [];
            this.tasks = JSON.parse(JSON.stringify(res));
        }, err => {
            console.log(err);
        });
    }
    showalltasks() {
        this._utils.gettasks()
            .subscribe(res => {
            console.log(res);
            this.tasks = JSON.parse(JSON.stringify(res));
        }, err => {
            console.log(err);
        });
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"])); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 22, vars: 2, consts: [[1, "card", "mx-auto"], [1, "card-header"], ["id", "main", 1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " List of Scheduled Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Task Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scheduled Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Completed? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_18_listener() { return ctx.toggleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TasksComponent_tr_21_Template, 13, 7, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Show ", ctx.searchAll ? "Incomplete " : "All ", " Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\ncolor:white;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    border: 1px solid white;\r\n}\r\n\r\n#main[_ngcontent-%COMP%]{\r\n    \r\n    height:190vh;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QixXQUFXO0FBQ1g7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbnRoZWFkLHRib2R5e1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbiNtYWlue1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6MTkwdmg7XHJcbn0gXHJcbi5jYXJkLWhlYWRlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks',
                templateUrl: './tasks.component.html',
                styleUrls: ['./tasks.component.css']
            }]
    }], function () { return [{ type: _utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, nxt) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                // Authorization:'Bearer ab.bb.cc'
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return nxt.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.service */ "./src/app/utils.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UsersComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_19_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteUser(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.contact);
} }
class UsersComponent {
    constructor(_auth, _utils) {
        this._auth = _auth;
        this._utils = _utils;
    }
    ngOnInit() {
        this._auth.getUsers()
            .subscribe(res => {
            console.log(res);
            this.users = JSON.parse(JSON.stringify(res));
        }, err => {
            console.log(err);
        });
    }
    deleteUser(id) {
        if (confirm("Are you sure you want to delete the User and related services and tasks?") == true) {
            this._auth.deleteUser(id.toString())
                .subscribe(res => {
                this.users = JSON.parse(JSON.stringify(res));
                //delete all Electricity bills for the user
                this._utils.deleteEBService(id.toString())
                    .subscribe(res => {
                    console.log("All eb services for user deleted");
                    this._utils.deleteLabService(id.toString())
                        .subscribe(res => {
                        this._utils.deletetasksforUser(id.toString())
                            .subscribe(res => {
                            console.log("All tasks for user deleted");
                        }, err => {
                            console.log(err);
                        });
                    }, err => {
                        console.log(err);
                    });
                }, err => {
                    console.log(err);
                });
            }, err => {
                console.log(err);
            });
        }
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 20, vars: 1, consts: [[1, "card", "mx-auto"], [1, "card-header"], ["id", "main", 1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " List of Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UsersComponent_tr_19_Template, 12, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".card[_ngcontent-%COMP%]{\r\n    background:#776c67;\r\ncolor:white;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    border: 1px solid white;\r\n}\r\n\r\n#main[_ngcontent-%COMP%]{\r\n    \r\n    height:190vh;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]{\r\n    margin-left: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QixXQUFXO0FBQ1g7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6Izc3NmM2NztcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbnRoZWFkLHRib2R5e1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbiNtYWlue1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6MTkwdmg7XHJcbn1cclxuICAgXHJcbi5jYXJkLWhlYWRlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utils.service.ts":
/*!**********************************!*\
  !*** ./src/app/utils.service.ts ***!
  \**********************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UtilsService {
    constructor(http) {
        this.http = http;
        // private _addebillUrl = "http://localhost:3000/addebill";
        // private _getEBServiceUrl = "http://localhost:3000/getEBService";
        // private _updateEBServiceUrl="http://localhost:3000/updateEbill";
        // private _deleteEBServiceUrl="http://localhost:3000/deleteEBill";
        // private _addTaskUrl="http://localhost:3000/addtask";
        // private _updatetaskUrl="http://localhost:3000/updatetask";
        // private _gettasksUrl="http://localhost:3000/gettasks";
        // private _getincompletetasksUrl="http://localhost:3000/getincompletetasks";
        // private _getsingletaskUrl ="http://localhost:3000/getsingletask";
        // private _completetaskUrl="http://localhost:3000/completetask";
        // private _sendmailUrl="http://localhost:3000/sendmail";
        // private _deletetasksforUserUrl = "http://localhost:3000/deletetasksforUser";
        // private _deletetasksforUserandservicetypeUrl = "http://localhost:3000/deletetasksforUserandservicetype";
        // private _addlabserviceUrl = "http://localhost:3000/addlabservice";
        // private _getlabServiceUrl = "http://localhost:3000/getlabService";
        // private _updateLabserviceUrl = "http://localhost:3000/updateLabservice";
        // private _deleteLabserviceUrl= "http://localhost:3000/deleteLabservice";
        this._addebillUrl = "addebill";
        this._getEBServiceUrl = "getEBService";
        this._updateEBServiceUrl = "updateEbill";
        this._deleteEBServiceUrl = "deleteEBill";
        this._addTaskUrl = "addtask";
        this._updatetaskUrl = "updatetask";
        this._gettasksUrl = "gettasks";
        this._getincompletetasksUrl = "getincompletetasks";
        this._getsingletaskUrl = "getsingletask";
        this._completetaskUrl = "completetask";
        this._sendmailUrl = "sendmail";
        this._deletetasksforUserUrl = "deletetasksforUser";
        this._deletetasksforUserandservicetypeUrl = "deletetasksforUserandservicetype";
        this._addlabserviceUrl = "addlabservice";
        this._getlabServiceUrl = "getlabService";
        this._updateLabserviceUrl = "updateLabservice";
        this._deleteLabserviceUrl = "deleteLabservice";
    }
    addEbill(billdata) {
        console.log(billdata);
        return this.http.post(this._addebillUrl, billdata);
    }
    getEBService(userID) {
        return this.http.post(this._getEBServiceUrl, { userID: userID });
    }
    updateEBService(ebill) {
        return this.http.post(this._updateEBServiceUrl, ebill);
    }
    deleteEBService(userID) {
        return this.http.post(this._deleteEBServiceUrl, { userID: userID });
    }
    addTask(task) {
        return this.http.post(this._addTaskUrl, task);
    }
    updatetask(task) {
        return this.http.post(this._updatetaskUrl, task);
    }
    deletetasksforUser(id) {
        return this.http.post(this._deletetasksforUserUrl, { "userID": id });
    }
    deletetasksforuserandservicetype(id, type) {
        return this.http.post(this._deletetasksforUserandservicetypeUrl, { "userID": id, "servicetype": type });
    }
    gettasks() {
        return this.http.get(this._gettasksUrl);
    }
    getincompletetasks() {
        return this.http.get(this._getincompletetasksUrl);
    }
    getsingletask(_id) {
        return this.http.post(this._getsingletaskUrl, { _id: _id });
    }
    completetask(_id) {
        return this.http.post(this._completetaskUrl, { _id: _id });
    }
    sendmail(mail) {
        return this.http.post(this._sendmailUrl, mail);
    }
    addlabservice(labdata) {
        console.log(labdata);
        return this.http.post(this._addlabserviceUrl, labdata);
    }
    getLabService(userID) {
        return this.http.post(this._getlabServiceUrl, { userID: userID });
    }
    updateLabservice(labdata) {
        return this.http.post(this._updateLabserviceUrl, labdata);
    }
    deleteLabService(userID) {
        return this.http.post(this._deleteLabserviceUrl, { userID: userID });
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jayce\Angular\MEAN-stack-project\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map