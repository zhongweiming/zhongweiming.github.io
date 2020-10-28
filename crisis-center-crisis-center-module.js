(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crisis-center-crisis-center-module"],{

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-center-home/crisis-center-home.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/crisis-center/crisis-center-home/crisis-center-home.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Welcome to the Crisis Center</p>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-center/crisis-center.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/crisis-center/crisis-center/crisis-center.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>CRISIS CENTER</h2>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-detail/crisis-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/crisis-center/crisis-detail/crisis-detail.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>CRISES</h2>\n<!-- <div *ngIf=\"crisis$ | async as crisis\"> -->\n<div *ngIf=\"crisis\">\n  <h3>\"{{ editName }}\"</h3>\n  <div><label>Id: </label>{{ crisis.id }}</div>\n  <div>\n    <label\n      >name:\n      <input [(ngModel)]=\"editName\" placeholder=\"name\" />\n    </label>\n  </div>\n  <p>\n    <button (click)=\"save()\">Save</button>\n    <button (click)=\"cancel()\">Cancel</button>\n  </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-list/crisis-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/crisis-center/crisis-list/crisis-list.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Crises</h2>\n<ul class=\"crises\">\n  <li\n    *ngFor=\"let crisis of crises$ | async\"\n    [class.selected]=\"crisis.id === selectedId\"\n  >\n    <!-- <a [routerLink]=\"['/crisis-center', crisis.id]\"> -->\n    <!-- 我们在这里使用相对路径，这样的话父路由改变的时候就不会影响子路由，无/和./是一个意思同级路由下，兄弟路由使用../<sibling> -->\n    <a [routerLink]=\"[crisis.id]\">\n      <span class=\"badge\">{{ crisis.id }}</span> {{ crisis.name }}\n    </a>\n  </li>\n</ul>\n<!-- 提供路由出口，设置了children的话需要在父组件添加这个出口 -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/can-deactivate.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/can-deactivate.guard.ts ***!
  \*****************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var CanDeactivateGuard = /** @class */ (function () {
    // 作为专属组件的守卫的时候用
    // implements CanDeactivate<CrisisDetailComponent> {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        // 调用其方法来判断是否继续离开即可，在组件中需要实现该方法，且为公开方法
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        })
        // 作为专属组件的守卫的时候用
        // implements CanDeactivate<CrisisDetailComponent> {
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center-home/crisis-center-home.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center-home/crisis-center-home.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1jZW50ZXIvY3Jpc2lzLWNlbnRlci1ob21lL2NyaXNpcy1jZW50ZXItaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/crisis-center/crisis-center-home/crisis-center-home.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center-home/crisis-center-home.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CrisisCenterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterHomeComponent", function() { return CrisisCenterHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var CrisisCenterHomeComponent = /** @class */ (function () {
    function CrisisCenterHomeComponent() {
    }
    CrisisCenterHomeComponent.prototype.ngOnInit = function () {
    };
    CrisisCenterHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crisis-center-home',
            template: __webpack_require__(/*! raw-loader!./crisis-center-home.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-center-home/crisis-center-home.component.html"),
            styles: [__webpack_require__(/*! ./crisis-center-home.component.css */ "./src/app/crisis-center/crisis-center-home/crisis-center-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrisisCenterHomeComponent);
    return CrisisCenterHomeComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CrisisCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterRoutingModule", function() { return CrisisCenterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _can_deactivate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../can-deactivate.guard */ "./src/app/can-deactivate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crisis-center-home/crisis-center-home.component */ "./src/app/crisis-center/crisis-center-home/crisis-center-home.component.ts");
/* harmony import */ var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crisis-list/crisis-list.component */ "./src/app/crisis-center/crisis-list/crisis-list.component.ts");
/* harmony import */ var _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crisis-center/crisis-center.component */ "./src/app/crisis-center/crisis-center/crisis-center.component.ts");
/* harmony import */ var _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crisis-detail/crisis-detail.component */ "./src/app/crisis-center/crisis-detail/crisis-detail.component.ts");
/* harmony import */ var _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crisis-detail-resolver.service */ "./src/app/crisis-center/crisis-detail-resolver.service.ts");









var crisisCenterRoutes = [
    {
        path: "",
        component: _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_6__["CrisisCenterComponent"],
        children: [
            {
                path: "",
                component: _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_5__["CrisisListComponent"],
                children: [
                    {
                        path: ":id",
                        component: _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_7__["CrisisDetailComponent"],
                        canDeactivate: [_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_1__["CanDeactivateGuard"]],
                        resolve: {
                            // 表示路由data中的属性值，用于路由获取路由守卫resolve拿到的数据
                            crisis: _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_8__["CrisisDetailResolverService"]
                        }
                    },
                    {
                        path: "",
                        component: _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_4__["CrisisCenterHomeComponent"]
                    }
                ]
            }
        ]
    }
];
var CrisisCenterRoutingModule = /** @class */ (function () {
    function CrisisCenterRoutingModule() {
    }
    CrisisCenterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(crisisCenterRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], CrisisCenterRoutingModule);
    return CrisisCenterRoutingModule;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/crisis-center/crisis-center.module.ts ***!
  \*******************************************************/
/*! exports provided: CrisisCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterModule", function() { return CrisisCenterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.0.3@@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@8.0.3@@angular/forms/fesm5/forms.js");
/* harmony import */ var _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crisis-center-routing.module */ "./src/app/crisis-center/crisis-center-routing.module.ts");
/* harmony import */ var _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crisis-detail/crisis-detail.component */ "./src/app/crisis-center/crisis-detail/crisis-detail.component.ts");
/* harmony import */ var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crisis-list/crisis-list.component */ "./src/app/crisis-center/crisis-list/crisis-list.component.ts");
/* harmony import */ var _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crisis-center/crisis-center.component */ "./src/app/crisis-center/crisis-center/crisis-center.component.ts");
/* harmony import */ var _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crisis-center-home/crisis-center-home.component */ "./src/app/crisis-center/crisis-center-home/crisis-center-home.component.ts");









var CrisisCenterModule = /** @class */ (function () {
    function CrisisCenterModule() {
    }
    CrisisCenterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__["CrisisDetailComponent"],
                _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_6__["CrisisListComponent"],
                _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_7__["CrisisCenterComponent"],
                _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_8__["CrisisCenterHomeComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_4__["CrisisCenterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        })
    ], CrisisCenterModule);
    return CrisisCenterModule;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center/crisis-center.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center/crisis-center.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1jZW50ZXIvY3Jpc2lzLWNlbnRlci9jcmlzaXMtY2VudGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/crisis-center/crisis-center/crisis-center.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/crisis-center/crisis-center/crisis-center.component.ts ***!
  \************************************************************************/
/*! exports provided: CrisisCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterComponent", function() { return CrisisCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");


var CrisisCenterComponent = /** @class */ (function () {
    function CrisisCenterComponent() {
    }
    CrisisCenterComponent.prototype.ngOnInit = function () {
    };
    CrisisCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crisis-center',
            template: __webpack_require__(/*! raw-loader!./crisis-center.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-center/crisis-center.component.html"),
            styles: [__webpack_require__(/*! ./crisis-center.component.css */ "./src/app/crisis-center/crisis-center/crisis-center.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrisisCenterComponent);
    return CrisisCenterComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-detail-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/crisis-center/crisis-detail-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: CrisisDetailResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailResolverService", function() { return CrisisDetailResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");
/* harmony import */ var _crisis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crisis.service */ "./src/app/crisis-center/crisis.service.ts");






var CrisisDetailResolverService = /** @class */ (function () {
    function CrisisDetailResolverService(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    CrisisDetailResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get("id");
        return this.cs.getCrisis(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (crisis) {
            if (crisis) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(crisis);
            }
            else {
                _this.router.navigate(["/crisis-center"]);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
        }));
    };
    CrisisDetailResolverService.ctorParameters = function () { return [
        { type: _crisis_service__WEBPACK_IMPORTED_MODULE_5__["CrisisService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CrisisDetailResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_crisis_service__WEBPACK_IMPORTED_MODULE_5__["CrisisService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CrisisDetailResolverService);
    return CrisisDetailResolverService;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-detail/crisis-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/crisis-center/crisis-detail/crisis-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1jZW50ZXIvY3Jpc2lzLWRldGFpbC9jcmlzaXMtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/crisis-center/crisis-detail/crisis-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/crisis-center/crisis-detail/crisis-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: CrisisDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisDetailComponent", function() { return CrisisDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _crisis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crisis.service */ "./src/app/crisis-center/crisis.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");





var CrisisDetailComponent = /** @class */ (function () {
    function CrisisDetailComponent(route, router, service, 
    // 因为要在can-deacivate守卫中调用
    // public dialogService: DialogService
    dialogService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.dialogService = dialogService;
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        // switchMap的好处是可以及时更新，在params变化的时候可以拿到最新的id值，始终保持最新
        // this.crisis = this.route.paramMap.pipe(
        //   // 这里是return这个而不只是在执行
        //   switchMap((params: ParamMap) => this.service.getCrisis(params.get("id")))
        // );
        var _this = this;
        // 如果确定这个实例永远都不会被复用的话那就可以使用快照来简化这段代码
        // 注意这种方式只会得到初始值
        // let id = this.route.snapshot.paramMap.get('id');
        // this.crisis = this.service.getCrisis(id);
        this.route.data.subscribe(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    // 实现这个方法，用于控制什么离开该页面的条件
    CrisisDetailComponent.prototype.canDeactivate = function () {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm("Discard changes?");
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // 使用可选参数对象，包含了一个无用参数foo
        // 使用相对路径来返回到上层路由
        this.router.navigate(["../", { id: crisisId, foo: "foo" }], {
            relativeTo: this.route,
        });
    };
    CrisisDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _crisis_service__WEBPACK_IMPORTED_MODULE_2__["CrisisService"] },
        { type: _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }
    ]; };
    CrisisDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-crisis-detail",
            template: __webpack_require__(/*! raw-loader!./crisis-detail.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-detail/crisis-detail.component.html"),
            styles: [__webpack_require__(/*! ./crisis-detail.component.css */ "./src/app/crisis-center/crisis-detail/crisis-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _crisis_service__WEBPACK_IMPORTED_MODULE_2__["CrisisService"],
            _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-list/crisis-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/crisis-center/crisis-list/crisis-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroListComponent's private CSS styles */\n.crises {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  /* width: 15em; */\n}\n.crises li {\n  position: relative;\n  cursor: pointer;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.crises li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.crises a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n}\n.crises a:hover {\n  color: #607d8b;\n}\n.crises .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n.crises li.selected {\n  background-color: #cfd8dc;\n  color: white;\n}\n.crises li.selected:hover {\n  background-color: #bbd8dc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jpc2lzLWNlbnRlci9jcmlzaXMtbGlzdC9jcmlzaXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1jZW50ZXIvY3Jpc2lzLWxpc3QvY3Jpc2lzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9MaXN0Q29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uY3Jpc2VzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogd2lkdGg6IDE1ZW07ICovXG59XG4uY3Jpc2VzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNyaXNlcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cblxuLmNyaXNlcyBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNyaXNlcyBhOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG5cbi5jcmlzZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxOTRweDtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jcmlzZXMgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY3Jpc2VzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDhkYztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/crisis-center/crisis-list/crisis-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/crisis-center/crisis-list/crisis-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CrisisListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisListComponent", function() { return CrisisListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.0.3@@angular/router/fesm5/router.js");
/* harmony import */ var _crisis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crisis.service */ "./src/app/crisis-center/crisis.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message.service */ "./src/app/message.service.ts");






var CrisisListComponent = /** @class */ (function () {
    function CrisisListComponent(crisisService, messageService, route, router) {
        this.crisisService = crisisService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crises$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            _this.selectedId = +params.get("id");
            return _this.crisisService.getCrises();
        }));
    };
    CrisisListComponent.ctorParameters = function () { return [
        { type: _crisis_service__WEBPACK_IMPORTED_MODULE_4__["CrisisService"] },
        { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CrisisListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-crisis-list",
            template: __webpack_require__(/*! raw-loader!./crisis-list.component.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/crisis-center/crisis-list/crisis-list.component.html"),
            styles: [__webpack_require__(/*! ./crisis-list.component.css */ "./src/app/crisis-center/crisis-list/crisis-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_crisis_service__WEBPACK_IMPORTED_MODULE_4__["CrisisService"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CrisisListComponent);
    return CrisisListComponent;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis.service.ts":
/*!*************************************************!*\
  !*** ./src/app/crisis-center/crisis.service.ts ***!
  \*************************************************/
/*! exports provided: CrisisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisService", function() { return CrisisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock_crises__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-crises */ "./src/app/crisis-center/mock-crises.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");






var CrisisService = /** @class */ (function () {
    function CrisisService(messageService) {
        this.messageService = messageService;
    }
    CrisisService.prototype.getCrises = function () {
        // TODO: send the message _after_ fetching the Crisises
        this.messageService.add("CrisisService: fetched Crisises");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_crises__WEBPACK_IMPORTED_MODULE_4__["CRISES"]);
    };
    CrisisService.prototype.getCrisis = function (id) {
        return this.getCrises().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); }));
    };
    CrisisService.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    CrisisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], CrisisService);
    return CrisisService;
}());



/***/ }),

/***/ "./src/app/crisis-center/mock-crises.ts":
/*!**********************************************!*\
  !*** ./src/app/crisis-center/mock-crises.ts ***!
  \**********************************************/
/*! exports provided: CRISES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRISES", function() { return CRISES; });
var CRISES = [
    { id: 1, name: "Dragon Burning Cities" },
    { id: 2, name: "Sky Rains Great White Sharks" },
    { id: 3, name: "Giant Asteroid Heading For Earth" },
    { id: 4, name: "Procrastinators Meeting Delayed Again" },
];


/***/ }),

/***/ "./src/app/dialog.service.ts":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.11.1@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.3@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.4.0@rxjs/_esm5/index.js");



/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    DialogService.prototype.confirm = function (message) {
        var confirmation = window.confirm(message || "Is it OK?");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(confirmation);
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        })
    ], DialogService);
    return DialogService;
}());



/***/ })

}]);
//# sourceMappingURL=crisis-center-crisis-center-module.js.map