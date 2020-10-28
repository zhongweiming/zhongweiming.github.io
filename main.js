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

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/app.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/app.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular Router</h1>\n<nav>\n  <a routerLink=\"/crisis-center\" routerLinkActive=\"active\">Crisis Center</a>\n  <a routerLink=\"/superheroes\" routerLinkActive=\"active\">Heroes</a>\n  <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\n  <a [routerLink]=\"[{ outlets: { popup: ['compose'] } }]\">Contact</a>\n</nav>\n<div [@routeAnimation]=\"getAnimationData(routerOutlet)\">\n  <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n</div>\n<router-outlet name=\"popup\"></router-outlet>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/auth/login/login.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>LOGIN</h2>\n<p>{{ message }}</p>\n<p>\n  <button (click)=\"login()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n</p>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/compose-message/compose-message.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/compose-message/compose-message.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Contact Crisis Center</h3>\n<div *ngIf=\"details\">\n  {{ details }}\n</div>\n<div>\n  <div>\n    <label>Message: </label>\n  </div>\n  <div>\n    <textarea\n      [(ngModel)]=\"message\"\n      rows=\"10\"\n      cols=\"35\"\n      [disabled]=\"sending\"\n    ></textarea>\n  </div>\n</div>\n<p *ngIf=\"!sending\">\n  <button (click)=\"send()\">Send</button>\n  <button (click)=\"cancel()\">Cancel</button>\n</p>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-list/crisis-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/crisis-list/crisis-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>CRISIS CENTER</h2>\n<p>Get your crisis here</p>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/heroes/hero-detail/hero-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/heroes/hero-detail/hero-detail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>HEROES</h2>\n<div *ngIf=\"hero$ | async as hero\">\n  <h2>{{ hero.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{ hero.id }}</div>\n  <div>\n    <label\n      >name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n    </label>\n  </div>\n  <p>\n    <button (click)=\"gotoHeroes(hero)\">Back</button>\n  </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/heroes/hero-list/hero-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/heroes/hero-list/hero-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes$ | async\" [class.selected]=\"hero.id === selectedId\">\n    <a [routerLink]=\"['/superhero', hero.id]\">\n      <span class=\"badge\">{{ hero.id }}</span> {{ hero.name }}\n    </a>\n  </li>\n</ul>\n<div class=\"test\" style=\"width: 200px; height: 100px;\"></div>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>\n"

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/_@angular_animations@8.0.3@@angular/animations/fesm5/animations.js");

// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("heroes <=> hero", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: "relative" }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "-100%" })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "100%" }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1000ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: "0%" }))]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.0.3@@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose-message/compose-message.component */ "./src/app/compose-message/compose-message.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selective-preloading-strategy.service */ "./src/app/selective-preloading-strategy.service.ts");








var appRoutes = [
    {
        path: "admin",
        loadChildren: function () { return __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(function (m) { return m.AdminModule; }); },
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: "crisis-center",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | crisis-center-crisis-center-module */ "crisis-center-crisis-center-module").then(__webpack_require__.bind(null, /*! ./crisis-center/crisis-center.module */ "./src/app/crisis-center/crisis-center.module.ts")).then(function (m) { return m.CrisisCenterModule; });
        },
        data: {
            preload: true
        }
    },
    // 配置第二路由
    {
        path: "compose",
        component: _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_4__["ComposeMessageComponent"],
        outlet: "popup"
    },
    // 默认路由，当什么路径都不输入的时候跳到这里
    /* 这里pathMatch的意思其实就是全匹配和部分匹配的意思，如果设置为prefix，那么只要路由有部分匹配到了''，就会跳到heroes，
    很明显这样的话所有路由都会跳到heroes，为full的话只有整个路径都和''一样才会重定向，soga */
    {
        path: "",
        redirectTo: "/superheroes",
        pathMatch: "full"
    },
    // 通配路由，当路由都匹配不上的时候会跳到这里
    {
        path: "**",
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false,
                    // preloadingStrategy: PreloadAllModules
                    preloadingStrategy: _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__["SelectivePreloadingStrategyService"]
                })
            ],
            // 放在providers中以便可以注入应用的任何地方
            providers: [_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__["SelectivePreloadingStrategyService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "angular-router-sample";
    }
    AppComponent.prototype.getAnimationData = function (outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData["animation1"] // 和定义的路由里面data对象里面的属性关联的
        );
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/app.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/_@angular_platform-browser@8.0.3@@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@8.0.3@@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/_@angular_platform-browser@8.0.3@@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crisis-list/crisis-list.component */ "./src/app/crisis-list/crisis-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _heroes_heroes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heroes/heroes.module */ "./src/app/heroes/heroes.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compose-message/compose-message.component */ "./src/app/compose-message/compose-message.component.ts");











// import { CrisisCenterModule } from "./crisis-center/crisis-center.module";
// 当使用loadChildren的方式惰性加载路由的时候，这个模块已经不需要在appmodule中引入了，完全分离开
// import { AdminModule } from "./admin/admin.module";


var AppModule = /** @class */ (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        // Use a custom replacer to display function names in the route configs
        var replacer = function (key, value) {
            return typeof value === "function" ? value.name : value;
        };
        // console.log(JSON.stringify(router.config, null, 2));
        // console.log(router.config);
        console.log("Routes: ", JSON.stringify(router.config, replacer, 2));
    }
    AppModule.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_7__["CrisisListComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _compose_message_compose_message_component__WEBPACK_IMPORTED_MODULE_12__["ComposeMessageComponent"]
            ],
            // 要注意的是这里的模块导入顺序有影响的,如果approute在前面的话，通配符会先注册，会拦截后面的所有路由导航
            // imports: [BrowserModule, AppRoutingModule, HeroesModule],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _heroes_heroes_module__WEBPACK_IMPORTED_MODULE_10__["HeroesModule"],
                // CrisisCenterModule,
                // AdminModule,
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




var authRoutes = [
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (
    // 包含了即将被激活的路由
    route, 
    // 包含了该应用即将到达的状态
    state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // 保存尝试跳转的URL
        this.authService.redirectUrl = url;
        // 创建一些参数数据在页面之间传递，比如来个sessionid
        var sessionId = 1234567;
        // Set our navigation extras object
        // that contains our global query params and fragment
        var navigationExtras = {
            queryParams: {
                session_id: sessionId,
            },
            fragment: "anchor",
        };
        // 导航到登录验证页面
        this.router.navigate(["/login"], navigationExtras);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.0.3@@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return (_this.isLoggedIn = true); }));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = "Trying to log in ...";
        this.authService.login().subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl
                    ? _this.router.parseUrl(_this.authService.redirectUrl)
                    : "/admin";
                // 设置额外的参数对象，一起往下传递
                var navigationExtras = {
                    queryParamsHandling: "preserve",
                    preserveFragment: true,
                };
                // Redirect the user
                _this.router.navigateByUrl(redirect, navigationExtras);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/compose-message/compose-message.component.css":
/*!***************************************************************!*\
  !*** ./src/app/compose-message/compose-message.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  bottom: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9zZS1tZXNzYWdlL2NvbXBvc2UtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvc2UtbWVzc2FnZS9jb21wb3NlLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/compose-message/compose-message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/compose-message/compose-message.component.ts ***!
  \**************************************************************/
/*! exports provided: ComposeMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMessageComponent", function() { return ComposeMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");



var ComposeMessageComponent = /** @class */ (function () {
    function ComposeMessageComponent(router) {
        this.router = router;
        this.sending = false;
    }
    ComposeMessageComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        this.details = "Sending Message...";
        setTimeout(function () {
            _this.sending = false;
            _this.closePopup();
        }, 1000);
    };
    ComposeMessageComponent.prototype.cancel = function () {
        this.closePopup();
    };
    ComposeMessageComponent.prototype.closePopup = function () {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    ComposeMessageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ComposeMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-compose-message",
            template: __webpack_require__(/*! raw-loader!./compose-message.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/compose-message/compose-message.component.html"),
            styles: [__webpack_require__(/*! ./compose-message.component.css */ "./src/app/compose-message/compose-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ComposeMessageComponent);
    return ComposeMessageComponent;
}());



/***/ }),

/***/ "./src/app/crisis-list/crisis-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/crisis-list/crisis-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1saXN0L2NyaXNpcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/crisis-list/crisis-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/crisis-list/crisis-list.component.ts ***!
  \******************************************************/
/*! exports provided: CrisisListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisListComponent", function() { return CrisisListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var CrisisListComponent = /** @class */ (function () {
    function CrisisListComponent() {
    }
    CrisisListComponent.prototype.ngOnInit = function () {
    };
    CrisisListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crisis-list',
            template: __webpack_require__(/*! raw-loader!./crisis-list.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-list/crisis-list.component.html"),
            styles: [__webpack_require__(/*! ./crisis-list.component.css */ "./src/app/crisis-list/crisis-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrisisListComponent);
    return CrisisListComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero-detail/hero-detail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/heroes/hero-detail/hero-detail.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/heroes/hero-detail/hero-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/heroes/hero-detail/hero-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hero.service */ "./src/app/heroes/hero.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");





var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // switchMap的好处是可以及时更新，在params变化的时候可以拿到最新的id值，始终保持最新
        this.hero$ = this.route.paramMap.pipe(
        // 这里是return这个而不只是在执行
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.service.getHero(params.get("id")); }));
        // 如果确定这个实例永远都不会被复用的话那就可以使用快照来简化这段代码
        // 注意这种方式只会得到初始值
        // let id = this.route.snapshot.paramMap.get('id');
        // this.hero$ = this.service.getHero(id);
    };
    HeroDetailComponent.prototype.gotoHeroes = function (hero) {
        var heroId = hero ? hero.id : null;
        // 使用可选参数对象，包含了一个无用参数foo
        this.router.navigate(["/superheroes", { id: heroId, foo: "foo" }]);
    };
    HeroDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }
    ]; };
    HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-hero-detail",
            template: __webpack_require__(/*! raw-loader!./hero-detail.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/heroes/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/heroes/hero-detail/hero-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero-list/hero-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/heroes/hero-list/hero-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroListComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n}\n.heroes a:hover {\n  color: #607d8b;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n.heroes li.selected {\n  background-color: #cfd8dc;\n  color: white;\n}\n.heroes li.selected:hover {\n  background-color: #bbd8dc;\n}\n.test {\n  background: url('great.png');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm8tbGlzdC9oZXJvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLDRCQUE0QztBQUM5QyIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy9oZXJvLWxpc3QvaGVyby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvTGlzdENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuXG4uaGVyb2VzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cblxuLmhlcm9lcyBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlcm9lcyBhOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG5cbi5oZXJvZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxOTRweDtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvZXMgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkOGRjO1xufVxuXG4udGVzdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2dyZWF0LnBuZycpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/heroes/hero-list/hero-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/heroes/hero-list/hero-list.component.ts ***!
  \*********************************************************/
/*! exports provided: HeroListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListComponent", function() { return HeroListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero.service */ "./src/app/heroes/hero.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message.service */ "./src/app/message.service.ts");






var HeroListComponent = /** @class */ (function () {
    function HeroListComponent(heroService, messageService, route, router) {
        this.heroService = heroService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            _this.selectedId = +params.get("id");
            return _this.heroService.getHeroes();
        }));
    };
    HeroListComponent.ctorParameters = function () { return [
        { type: _hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HeroListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-hero-list",
            template: __webpack_require__(/*! raw-loader!./hero-list.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/heroes/hero-list/hero-list.component.html"),
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/heroes/hero-list/hero-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeroListComponent);
    return HeroListComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero.service.ts":
/*!****************************************!*\
  !*** ./src/app/heroes/hero.service.ts ***!
  \****************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/heroes/mock-heroes.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");






var HeroService = /** @class */ (function () {
    function HeroService(messageService) {
        this.messageService = messageService;
    }
    HeroService.prototype.getHeroes = function () {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add("HeroService: fetched heroes");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_heroes__WEBPACK_IMPORTED_MODULE_4__["HEROES"]);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); }));
    };
    HeroService.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/heroes/heroes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/heroes/heroes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: HeroesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesRoutingModule", function() { return HeroesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/heroes/hero-list/hero-list.component.ts");





var heroRoutes = [
    {
        path: "heroes",
        redirectTo: "superheroes"
    },
    {
        path: "hero/:id",
        redirectTo: "superhero/:id"
    },
    {
        path: "superheroes",
        component: _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_4__["HeroListComponent"],
        // 为了转场动画
        data: {
            animation1: "heroes"
        }
    },
    {
        path: "superhero/:id",
        component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__["HeroDetailComponent"],
        data: {
            animation1: "hero"
        }
    }
];
var HeroesRoutingModule = /** @class */ (function () {
    function HeroesRoutingModule() {
    }
    HeroesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(heroRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HeroesRoutingModule);
    return HeroesRoutingModule;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/heroes/heroes.module.ts ***!
  \*****************************************/
/*! exports provided: HeroesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.0.3@@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@8.0.3@@angular/forms/fesm5/forms.js");
/* harmony import */ var _heroes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroes-routing.module */ "./src/app/heroes/heroes-routing.module.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/heroes/hero-detail/hero-detail.component.ts");
/* harmony import */ var _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-list/hero-list.component */ "./src/app/heroes/hero-list/hero-list.component.ts");







var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponent"], _hero_list_hero_list_component__WEBPACK_IMPORTED_MODULE_6__["HeroListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _heroes_routing_module__WEBPACK_IMPORTED_MODULE_4__["HeroesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        })
    ], HeroesModule);
    return HeroesModule;
}());



/***/ }),

/***/ "./src/app/heroes/mock-heroes.ts":
/*!***************************************!*\
  !*** ./src/app/heroes/mock-heroes.ts ***!
  \***************************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: "Dr Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" },
];


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/selective-preloading-strategy.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/selective-preloading-strategy.service.ts ***!
  \**********************************************************/
/*! exports provided: SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return SelectivePreloadingStrategyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/index.js");



var SelectivePreloadingStrategyService = /** @class */ (function () {
    function SelectivePreloadingStrategyService() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategyService.prototype.preload = function (route, load) {
        if (route.data && route.data["preload"]) {
            this.preloadedModules.push(route.path);
            console.log("Preloaded: " + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    };
    SelectivePreloadingStrategyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectivePreloadingStrategyService);
    return SelectivePreloadingStrategyService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/_@angular_platform-browser-dynamic@8.0.3@@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhongweiming/MyCode/FrontEnd/angular/angular-router-sample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map