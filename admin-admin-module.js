(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dashboard</p>\n\n<p>Session ID: {{ sessionId | async }}</p>\n<a id=\"anchor\"></a>\n<p>Token: {{ token | async }}</p>\n\nPreloaded Modules\n<ul>\n  <li *ngFor=\"let module of modules\">{{ module }}</li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/admin/admin.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/admin/admin/admin.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>ADMIN</h3>\n<nav>\n  <a\n    routerLink=\"./\"\n    routerLinkActive=\"active\"\n    [routerLinkActiveOptions]=\"{ exact: true }\"\n    >Dashboard</a\n  >\n  <a routerLink=\"./crises\" routerLinkActive=\"active\">Manage Crises</a>\n  <a routerLink=\"./heroes\" routerLinkActive=\"active\">Manage Heroes</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/manage-crises/manage-crises.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/admin/manage-crises/manage-crises.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Manage your crises here</p>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/manage-heroes/manage-heroes.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/admin/manage-heroes/manage-heroes.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Manage your heroes here</p>\n"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selective-preloading-strategy.service */ "./src/app/selective-preloading-strategy.service.ts");





var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(route, preloadStrategy) {
        this.route = route;
        this.modules = preloadStrategy.preloadedModules;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.sessionId = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params.get("session_id") || "None"; }));
        this.token = this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (fragment) { return fragment || "None"; }));
        // console.log(`
        // Received SessionId: ${JSON.stringify(this.sessionId)} \n
        // Received Token: ${this.token}
        // `);
    };
    AdminDashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__["SelectivePreloadingStrategyService"] }
    ]; };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-admin-dashboard",
            template: __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin/admin-dashboard/admin-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__["SelectivePreloadingStrategyService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ "./src/app/admin/manage-heroes/manage-heroes.component.ts");
/* harmony import */ var _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-crises/manage-crises.component */ "./src/app/admin/manage-crises/manage-crises.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");








var adminRoutes = [
    {
        path: "",
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: "",
                // 这也是无组件路由的好处，可以统一管理子组件，不用每个子组件都添加
                canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                children: [
                    {
                        path: "crises",
                        component: _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_3__["ManageCrisesComponent"],
                    },
                    {
                        path: "heroes",
                        component: _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_2__["ManageHeroesComponent"],
                    },
                    {
                        path: "",
                        component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"],
                    },
                ],
            },
        ],
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(adminRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.0.3@@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-crises/manage-crises.component */ "./src/app/admin/manage-crises/manage-crises.component.ts");
/* harmony import */ var _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ "./src/app/admin/manage-heroes/manage-heroes.component.ts");








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_6__["ManageCrisesComponent"], _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_7__["ManageHeroesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/manage-crises/manage-crises.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/manage-crises/manage-crises.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/manage-crises/manage-crises.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-crises/manage-crises.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageCrisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCrisesComponent", function() { return ManageCrisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var ManageCrisesComponent = /** @class */ (function () {
    function ManageCrisesComponent() {
    }
    ManageCrisesComponent.prototype.ngOnInit = function () {
    };
    ManageCrisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-crises',
            template: __webpack_require__(/*! raw-loader!./manage-crises.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/manage-crises/manage-crises.component.html"),
            styles: [__webpack_require__(/*! ./manage-crises.component.css */ "./src/app/admin/manage-crises/manage-crises.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageCrisesComponent);
    return ManageCrisesComponent;
}());



/***/ }),

/***/ "./src/app/admin/manage-heroes/manage-heroes.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/manage-heroes/manage-heroes.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hbmFnZS1oZXJvZXMvbWFuYWdlLWhlcm9lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/manage-heroes/manage-heroes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-heroes/manage-heroes.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageHeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHeroesComponent", function() { return ManageHeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var ManageHeroesComponent = /** @class */ (function () {
    function ManageHeroesComponent() {
    }
    ManageHeroesComponent.prototype.ngOnInit = function () {
    };
    ManageHeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-heroes',
            template: __webpack_require__(/*! raw-loader!./manage-heroes.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/admin/manage-heroes/manage-heroes.component.html"),
            styles: [__webpack_require__(/*! ./manage-heroes.component.css */ "./src/app/admin/manage-heroes/manage-heroes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageHeroesComponent);
    return ManageHeroesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map