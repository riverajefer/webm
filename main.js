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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_choose_project_choose_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/choose-project/choose-project.component */ "./src/app/components/choose-project/choose-project.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_access_coupon_access_coupon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/access-coupon/access-coupon.component */ "./src/app/components/access-coupon/access-coupon.component.ts");
/* harmony import */ var _components_show_coupon_show_coupon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/show-coupon/show-coupon.component */ "./src/app/components/show-coupon/show-coupon.component.ts");








var routes = [
    { path: '', pathMatch: 'full', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'projects', component: _components_choose_project_choose_project_component__WEBPACK_IMPORTED_MODULE_3__["ChooseProjectComponent"] },
    { path: 'project', component: _components_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] },
    { path: 'access-coupon', component: _components_access_coupon_access_coupon_component__WEBPACK_IMPORTED_MODULE_6__["AccessCouponComponent"] },
    { path: 'show-coupon', component: _components_show_coupon_show_coupon_component__WEBPACK_IMPORTED_MODULE_7__["ShowCouponComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
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

module.exports = "<div class=\"layout\">\n  <!-- <app-home></app-home> -->\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  border: 1px solid #585858;\n  width: 1280px;\n  height: 800px; }\n\n.example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEplZmZlcnNvblxcUHJveWVjdG9zXFxNYWNoaW5lUlxcZnJvbnQtYXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODU4NTg7XHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_choose_project_choose_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/choose-project/choose-project.component */ "./src/app/components/choose-project/choose-project.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_access_coupon_access_coupon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/access-coupon/access-coupon.component */ "./src/app/components/access-coupon/access-coupon.component.ts");
/* harmony import */ var _components_show_coupon_show_coupon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/show-coupon/show-coupon.component */ "./src/app/components/show-coupon/show-coupon.component.ts");














// import { OwlModule } from 'ngx-owl-carousel';
// import { DragScrollModule } from 'ngx-drag-scroll';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_choose_project_choose_project_component__WEBPACK_IMPORTED_MODULE_9__["ChooseProjectComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
                _components_access_coupon_access_coupon_component__WEBPACK_IMPORTED_MODULE_12__["AccessCouponComponent"],
                _components_show_coupon_show_coupon_component__WEBPACK_IMPORTED_MODULE_13__["ShowCouponComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
                // OwlModule,
                // DragScrollModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/access-coupon/access-coupon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/access-coupon/access-coupon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"access_coupon\">\n  <h1>TU COPÓN DE ACCESO</h1>\n\n  <div class=\"container_coupon\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"keyboard_cel\">\n          <p>\n            Si deseas envío de cupón por mensaje de texto ingresa tu número de celular\n          </p>\n          <div style=\"text-align:center\">\n            <input (input)=\"onInputChange($event)\" class=\"input\" value={{value}} placeholder=\"\" />\n            <div class=\"simple-keyboard\"></div>\n            <button mat-button routerLink=\"/show-coupon\">Visualizar cupón en pantalla</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"image_fundacion\">\n          <img src=\"https://picsum.photos/id/309/540/540\" width=\"540px\" alt=\"u\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/access-coupon/access-coupon.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/access-coupon/access-coupon.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".access_coupon h1 {\n  color: #585858;\n  padding: 27px 0px 15px;\n  margin: 0px;\n  font-size: 2.2em; }\n\ninput {\n  width: 72%;\n  height: 60px;\n  padding: 20px;\n  font-size: 30px;\n  border: 2px solid #ccc;\n  border-radius: 10px;\n  box-sizing: border-box;\n  letter-spacing: 3px;\n  color: #585858;\n  font-weight: bold;\n  margin-bottom: 10px; }\n\n.numeric-theme {\n  max-width: 320px;\n  margin: 0 auto; }\n\n.numeric-theme + .simple-keyboard-preview {\n  max-width: 320px; }\n\n.simple-keyboard.hg-theme-default.numeric-theme .hg-button.hg-standardBtn.hg-button-at {\n  max-width: none; }\n\n.container_coupon {\n  width: 85%;\n  margin: auto 0;\n  padding: 15px; }\n\n.keyboard_cel {\n  border: 1px solid #cccccc;\n  min-height: 530px;\n  padding: 10px 10px;\n  border-radius: 10px;\n  margin-left: 40px; }\n\n.keyboard_cel p {\n    font-size: 1.6em;\n    color: #585858; }\n\n.keyboard_cel button {\n    margin-top: 20px;\n    min-width: 120px;\n    padding: 8px 26px;\n    font-size: 1.3em;\n    font-weight: bold;\n    font-family: 'Roboto Condensed', sans-serif;\n    border: 1px solid #01DF01;\n    color: #585858; }\n\n.image_fundacion {\n  text-align: center;\n  padding-left: 80px; }\n\n.image_fundacion image {\n    padding: 10px; }\n\n.simple-keyboard.hg-theme-default.myTheme {\n  border: 5px solid red;\n  border-radius: 10px;\n  margin: 10px;\n  width: calc(100% - 20px); }\n\n.simple-keyboard.hg-layout-default .hg-button.hg-send {\n  background: #01DF01;\n  color: white; }\n\n.simple-keyboard.hg-layout-default .hg-button.hg-highlight {\n  box-shadow: 0px 0px 40px 5px rgba(255, 255, 0, 0.5);\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Nlc3MtY291cG9uL0Q6XFxKZWZmZXJzb25cXFByb3llY3Rvc1xcTWFjaGluZVJcXGZyb250LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWNjZXNzLWNvdXBvblxcYWNjZXNzLWNvdXBvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUtwQjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBTG5CO0lBUUksZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTs7QUFUbEI7SUFhSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyx5QkFBeUI7SUFDekIsY0FBYyxFQUFBOztBQUlsQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFGcEI7SUFLSSxhQUFhLEVBQUE7O0FBSWpCO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1EQUFtRDtFQUNuRCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY2Vzcy1jb3Vwb24vYWNjZXNzLWNvdXBvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2Nlc3NfY291cG9uIHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuICAgIHBhZGRpbmc6IDI3cHggMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA3MiU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgY29sb3I6ICM1ODU4NTg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm51bWVyaWMtdGhlbWUge1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5udW1lcmljLXRoZW1lKy5zaW1wbGUta2V5Ym9hcmQtcHJldmlldyB7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuLnNpbXBsZS1rZXlib2FyZC5oZy10aGVtZS1kZWZhdWx0Lm51bWVyaWMtdGhlbWUgLmhnLWJ1dHRvbi5oZy1zdGFuZGFyZEJ0bi5oZy1idXR0b24tYXQge1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxufVxyXG4uY29udGFpbmVyX2NvdXBvbiB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ua2V5Ym9hcmRfY2VsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDUzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyNnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMURGMDE7XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZV9mdW5kYWNpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcblxyXG4gIGltYWdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2ltcGxlLWtleWJvYXJkLmhnLXRoZW1lLWRlZmF1bHQubXlUaGVtZSB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxufVxyXG5cclxuLnNpbXBsZS1rZXlib2FyZC5oZy1sYXlvdXQtZGVmYXVsdCAuaGctYnV0dG9uLmhnLXNlbmQge1xyXG4gIGJhY2tncm91bmQ6ICMwMURGMDE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2ltcGxlLWtleWJvYXJkLmhnLWxheW91dC1kZWZhdWx0IC5oZy1idXR0b24uaGctaGlnaGxpZ2h0IHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/access-coupon/access-coupon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/access-coupon/access-coupon.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccessCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCouponComponent", function() { return AccessCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AccessCouponComponent = /** @class */ (function () {
    function AccessCouponComponent(router) {
        var _this = this;
        this.router = router;
        this.value = '';
        this.onChange = function (input) {
            console.log('Input changed: ', input);
            if (input.length <= 10) {
                _this.value = input;
            }
        };
        this.onKeyPress = function (button) {
            console.log('Button pressed: ', button);
            if (button === '{enter}') {
                if (_this.value.length >= 10) {
                    _this.router.navigate(['/show-coupon']);
                }
                else {
                    alert('Completa el número de teléfono');
                }
            }
        };
        this.onInputChange = function (event) {
            _this.keyboard.setInput(event.target.value);
        };
    }
    AccessCouponComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.keyboard = new simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default.a({
            layout: {
                default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}'],
            },
            theme: 'hg-theme-default hg-layout-numeric numeric-theme',
            buttonTheme: [
                {
                    class: 'hg-send',
                    buttons: '{enter}'
                }
            ],
            display: {
                '{bksp}': 'Borrar',
                '{enter}': 'Envíar',
            },
            onChange: function (input) { return _this.onChange(input); },
            onKeyPress: function (buttons) { return _this.onKeyPress(buttons); }
        });
    };
    AccessCouponComponent.prototype.onNext = function () {
        this.router.navigate(['/show-coupon']);
    };
    AccessCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-coupon',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./access-coupon.component.html */ "./src/app/components/access-coupon/access-coupon.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/simple-keyboard/build/css/index.css */ "./node_modules/simple-keyboard/build/css/index.css"), __webpack_require__(/*! ./access-coupon.component.scss */ "./src/app/components/access-coupon/access-coupon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccessCouponComponent);
    return AccessCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/choose-project/choose-project.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/choose-project/choose-project.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header_project\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <h1>\n          ESCOGE EL PROYECTO AL CUÁL DESEAS APORTAR\n        </h1>\n      </div>\n      <div class=\"col-5\">\n        <img src=\"assets/images/logo.jpg\" width=\"200px\" alt=\"Logo\" style=\"padding-top: 5px\">\n      </div>\n    </div>\n  </div>\n\n  <p class=\"descrip\">\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit earum aliquid.\n  </p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <mat-card class=\"example-card\">\n          <img mat-card-image src=\"https://picsum.photos/id/140/500/500\" width=\"100px\" alt=\"u\">\n          <mat-card-content>\n            <p>\n              The Shiba Inu is the smallest of\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-stroked-button color=\"primary\" routerLink=\"/project\">SELECCIONAR</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-6\">\n        <mat-card class=\"example-card\">\n          <img mat-card-image src=\"https://picsum.photos/id/301/500/500\" width=\"100px\" alt=\"u\">\n          <mat-card-content>\n            <p>\n              The Shiba Inu is the smallest of\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-stroked-button color=\"primary\" routerLink=\"/project\">SELECCIONAR</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/choose-project/choose-project.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/choose-project/choose-project.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 15px; }\n  section h1 {\n    color: #585858;\n    padding: 10px 0px 15px; }\n  section p {\n    padding: 10px 50px;\n    letter-spacing: 1px; }\n  p.descrip {\n  font-size: 1.6em;\n  color: #585858; }\n  .example-card {\n  max-width: 300px; }\n  .container {\n  text-align: center; }\n  .container .row {\n    text-align: center;\n    width: 1200px;\n    margin: 0 auto; }\n  mat-card-content {\n  padding: 0px; }\n  mat-card-content p {\n    padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaG9vc2UtcHJvamVjdC9EOlxcSmVmZmVyc29uXFxQcm95ZWN0b3NcXE1hY2hpbmVSXFxmcm9udC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNob29zZS1wcm9qZWN0XFxjaG9vc2UtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBSUksY0FBYztJQUNkLHNCQUFzQixFQUFBO0VBTDFCO0lBVUksa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBS3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUdoQjtFQUNFLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFJSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWMsRUFBQTtFQUlsQjtFQU1FLFlBQVksRUFBQTtFQU5kO0lBR0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaG9vc2UtcHJvamVjdC9jaG9vc2UtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTVweDtcclxuXHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxucC5kZXNjcmlwIHtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGNvbG9yOiAjNTg1ODU4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgcCB7XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/choose-project/choose-project.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/choose-project/choose-project.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChooseProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseProjectComponent", function() { return ChooseProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ChooseProjectComponent = /** @class */ (function () {
    function ChooseProjectComponent(router) {
        this.router = router;
    }
    ChooseProjectComponent.prototype.ngOnInit = function () {
    };
    ChooseProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-project',
            template: __webpack_require__(/*! ./choose-project.component.html */ "./src/app/components/choose-project/choose-project.component.html"),
            styles: [__webpack_require__(/*! ./choose-project.component.scss */ "./src/app/components/choose-project/choose-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChooseProjectComponent);
    return ChooseProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <mat-grid-list cols=\"4\" rowHeight=\"80px\">\n    <mat-grid-tile>\n      <p>FOOTER</p>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <mat-icon>home</mat-icon>\n      <p> Carrera 29 9C Bis 37C. <br>\n        Cali Colombia.\n      </p>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <mat-icon>email</mat-icon>\n      <p>\n        ceo@evolfai.com\n      </p>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <mat-icon>phone</mat-icon>\n      <p>\n        300 418 0371\n      </p>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  position: absolute;\n  bottom: 0px;\n  top: 690px;\n  height: 90px;\n  margin-top: 20px;\n  background-color: #003748;\n  width: 1280px;\n  color: white; }\n  footer mat-grid-list mat-grid-tile mat-icon {\n    margin-right: 25px;\n    font-size: 40px;\n    margin-bottom: 23px; }\n  footer mat-grid-list mat-grid-tile p {\n    margin-left: 10px;\n    padding: 0px;\n    line-height: 21px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXEplZmZlcnNvblxcUHJveWVjdG9zXFxNYWNoaW5lUlxcZnJvbnQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFFaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFUZDtJQWVRLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFqQjNCO0lBcUJRLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICB0b3A6IDY5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNjMsIDcwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNzQ4O1xyXG4gIHdpZHRoOiAxMjgwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBtYXQtZ3JpZC1saXN0IHtcclxuXHJcbiAgICBtYXQtZ3JpZC10aWxlIHtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<header>\n  <mat-grid-list cols=\"2\" rowHeight=\"110px\">\n    <mat-grid-tile>\n      <h1>\n         LOREM IPSUM\n      </h1>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <img src=\"assets/images/logo.jpg\" width=\"100px\" alt=\"Logo\">\n    </mat-grid-tile>\n  </mat-grid-list>\n\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  margin-bottom: 20px;\n  background-color: #f7f7f7;\n  width: 1280px;\n  height: 130px;\n  position: relative;\n  top: 0px; }\n  header mat-grid-list mat-grid-tile {\n    height: 40px;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 200; }\n  header mat-grid-list mat-grid-tile image {\n      padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXEplZmZlcnNvblxcUHJveWVjdG9zXFxNYWNoaW5lUlxcZnJvbnQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBb0M7RUFDcEMsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUSxFQUFBO0VBTlY7SUFZTSxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGdCQUFnQixFQUFBO0VBZHRCO01BaUJRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcclxuICB3aWR0aDogMTI4MHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG5cclxuICBtYXQtZ3JpZC1saXN0IHtcclxuXHJcblxyXG4gICAgbWF0LWdyaWQtdGlsZSB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <div class=\"header\">\n    <h1>EVOLFAI</h1>\n    <p>\n      En busca de una humanidad sostenible\n    </p>\n  </div>\n\n  <div class=\"conatiner\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <img src=\"/assets/images/video.png\" alt=\"\" width=\"350px\" class=\"video\">\n      </div>\n      <div class=\"col-8\">\n        <p class=\"descripcion\">\n          Por tu gran aporte tendrás acceso a Internet ZONAFAI; para que puedas conectar con más personas y más\n          propósitos\n        </p>\n        <div class=\"box\">\n          <p>\n            Tu aporte entre 1.000 y 2.000: Acceso ZONAFAI por 1 hora\n          </p>\n          <p>\n            Tu aporte mayor a 2.000: Acceso ZONAFAI por 24 horas\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn_next\">\n    <button mat-raised-button color=\"basic\" (click)=\"onNext()\">SIGUIENTE</button>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background-color: #eeeeee;\n  height: 800px; }\n  section .header h1 {\n    font-size: 4em !important;\n    padding: 25px 0px;\n    margin: 0px; }\n  section .header p {\n    font-size: 3em;\n    margin-bottom: 60px;\n    color: #585858; }\n  section p {\n    padding: 10px 50px;\n    letter-spacing: 1px; }\n  section .container {\n    padding: 0px 45px; }\n  section p.descripcion {\n    font-size: 1.8em;\n    color: #585858; }\n  section .video {\n    margin-top: 20px; }\n  section .box {\n    font-size: 1.6em;\n    color: #585858; }\n  section .box p {\n      border: 1px solid #585858; }\n  section .btn_next {\n    position: relative;\n    left: 500px; }\n  section .btn_next button {\n      width: 200px;\n      height: 70px;\n      font-size: 1.8em;\n      font-family: 'Roboto Condensed', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxKZWZmZXJzb25cXFByb3llY3Rvc1xcTWFjaGluZVJcXGZyb250LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFvQztFQUNwQyxhQUFhLEVBQUE7RUFGZjtJQU1NLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBUmpCO0lBWU0sY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7RUFkcEI7SUFtQkksa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBcEJ2QjtJQXdCSSxpQkFBaUIsRUFBQTtFQXhCckI7SUE0QkksZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQTdCbEI7SUFpQ0ksZ0JBQWdCLEVBQUE7RUFqQ3BCO0lBcUNJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUF0Q2xCO01BeUNNLHlCQUF5QixFQUFBO0VBekMvQjtJQThDSSxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBL0NmO01Ba0RNLFlBQVk7TUFDWixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLDJDQUEyQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggNDVweDtcclxuICB9XHJcblxyXG4gIHAuZGVzY3JpcGNpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuXHJcbiAgICBwIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU4NTg1ODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG5fbmV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MDBweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.mySlideImages = [10, 11, 12].map(function (i) { return "https://picsum.photos/100?image=" + i; });
        this.mySlideOptions = {
            items: 2,
            dots: true,
            nav: true,
            margin: 10,
            width: '200px'
        };
    };
    HomeComponent.prototype.onNext = function () {
        console.log('next');
        this.router.navigate(['/projects']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <h1>\n          PROYECTO NOMBRE\n        </h1>\n      </div>\n      <div class=\"col-5\">\n        <img src=\"assets/images/logo.jpg\" width=\"200px\" alt=\"Logo\" style=\"padding-top: 5px\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container_project\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h2>DATOS DEL PROYECTO</h2>\n        <div class=\"box_data_project\">\n          <ul>\n            <li>\n              <b>Lugar de impacto:</b> Alto Jordan Cali\n            </li>\n            <li>\n              <b>Cantidad de aportes:</b> 15\n            </li>\n            <li>\n              <b>Valor recaudado: </b> $ 70.000\n            </li>\n            <li>\n              <b> Cantidad de familias impactadas: </b>10\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-6 content_amount\">\n        <H2>INGRESA TU APORTE</H2>\n\n        <div class=\"list_amount\">\n          <mat-chip-list>\n            <mat-chip color=\"primary\" selected>$ 200</mat-chip>\n            <p>ÚLTIMA MONEDA</p>\n            <mat-chip color=\"accent\" selected>$ 2.000</mat-chip>\n            <p>ÚLTIMO BILLETE</p>\n            <mat-chip color=\"warn\" selected> $ 2.200</mat-chip>\n            <p>TOTAL</p>\n\n          </mat-chip-list>\n        </div>\n\n        <button mat-button color=\"primary\" routerLink=\"/access-coupon\"> CONTINUAR</button>\n\n      </div>\n    </div>\n  </div>\n\n\n</section>\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 15px; }\n  section h1 {\n    color: #585858;\n    padding: 10px 0px 15px; }\n  section p {\n    padding: 10px 50px;\n    letter-spacing: 1px; }\n  section .box_data_project {\n    min-height: 340px;\n    background-color: #f6f7ff;\n    padding: 30px 10px 19px;\n    border-radius: 20px;\n    border: 1px solid #585858; }\n  section .box_data_project ul {\n      padding-left: 10px; }\n  section .box_data_project ul li {\n        list-style-type: none;\n        margin: 40px 0px;\n        text-align: left;\n        font-size: 1.6em;\n        color: #585858; }\n  section .container_project {\n    width: 90%;\n    margin: 0 auto; }\n  section .list_amount {\n    padding-left: 40px;\n    text-align: center; }\n  section mat-chip-list mat-chip {\n    min-width: 180px;\n    min-height: 40px;\n    text-align: center;\n    font-size: 1.6em;\n    font-family: 'Roboto Condensed', sans-serif;\n    padding: 25px 17px; }\n  section mat-chip-list p {\n    font-size: 1.3em;\n    font-weight: bold;\n    color: #585858;\n    padding: 10px 10px; }\n  section .content_amount button {\n    margin-top: 75px;\n    min-width: 130px;\n    padding: 10px 50px;\n    font-size: 1.5em;\n    font-weight: bold;\n    font-family: 'Roboto Condensed', sans-serif;\n    border: 1px solid #585858; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L0Q6XFxKZWZmZXJzb25cXFByb3llY3Rvc1xcTWFjaGluZVJcXGZyb250LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBSUksY0FBYztJQUNkLHNCQUFzQixFQUFBO0VBTDFCO0lBVUksa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBWHZCO0lBZUksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0VBbkI3QjtNQXNCTSxrQkFBa0IsRUFBQTtFQXRCeEI7UUF3QlEscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTtFQTVCdEI7SUFpQ00sVUFBVTtJQUNWLGNBQWMsRUFBQTtFQWxDcEI7SUFzQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBdkN0QjtJQTRDTSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGtCQUFrQixFQUFBO0VBakR4QjtJQXFETSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQXhEeEI7SUE4RE0sZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQ0FBMkM7SUFDM0MseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTVweDtcclxuXHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuYm94X2RhdGFfcHJvamVjdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMTlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTg1ODU4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWluZXJfcHJvamVjdCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxpc3RfYW1vdW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1jaGlwLWxpc3Qge1xyXG4gICAgbWF0LWNoaXAge1xyXG4gICAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggMTdweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudF9hbW91bnQge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgICAgbWluLXdpZHRoOiAxMzBweDtcclxuICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU4NTg1ODtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/show-coupon/show-coupon.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/show-coupon/show-coupon.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"show_coupon\">\n  <h1>GRACIAS POR TU APORTE</h1>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6 code_qr\">\n        <h2>CUPÓN DE ACCESO</h2>\n        <img src=\"/assets/images/qr.png\" alt=\"QR\" width=\"400px\">\n        <h3>343YTU</h3>\n        <button mat-button color=\"primary\" routerLink=\"/\"> TERMINAR</button>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"recommendations\">\n          <h2>PUBLICIDAD</h2>\n          <div class=\"image_banner\">\n            <img src=\"https://picsum.photos/id/405/540/240\" width=\"540px\" alt=\"u\">\n          </div>\n          <h3>\n            Recomendaciones para tu Acceso:\n          </h3>\n          <ul>\n            <li> Deshabilita tus datos.</li>\n            <li> Conectate a la red wifi: ZONAFAI.</li>\n            <li> Abre el mensaje de texto y da click en el link o ingresa tu código en portal wifi.zonafai.com.</li>\n            <li> Captura o anota el código que aparece en pantalla.</li>\n            <li> Disfruta de tu acceso.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/show-coupon/show-coupon.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/show-coupon/show-coupon.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #585858;\n  padding: 27px 0px 15px;\n  margin: 0px;\n  font-size: 2.2em; }\n\nbutton {\n  margin-top: 40px;\n  min-width: 130px;\n  padding: 10px 50px;\n  font-size: 1.5em;\n  font-weight: bold;\n  font-family: 'Roboto Condensed', sans-serif;\n  border: 1px solid #585858; }\n\n.code_qr h3,\n.code_qr h2 {\n  font-size: 1.8em;\n  color: #585858;\n  margin: 0px 0px; }\n\n.recommendations h3,\n.recommendations h2 {\n  font-size: 1.8em;\n  color: #585858; }\n\n.recommendations ul {\n  text-align: left; }\n\n.recommendations ul li {\n    padding: 4px 0px;\n    font-size: 1.2em;\n    color: #585858; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LWNvdXBvbi9EOlxcSmVmZmVyc29uXFxQcm95ZWN0b3NcXE1hY2hpbmVSXFxmcm9udC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3ctY291cG9uXFxzaG93LWNvdXBvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUczQjs7RUFJSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFJbkI7O0VBSUksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFMbEI7RUFTSSxnQkFBZ0IsRUFBQTs7QUFUcEI7SUFZTSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdy1jb3Vwb24vc2hvdy1jb3Vwb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgY29sb3I6ICM1ODU4NTg7XHJcbiAgcGFkZGluZzogMjdweCAwcHggMTVweDtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXNpemU6IDIuMmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWluLXdpZHRoOiAxMzBweDtcclxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODU4NTg7XHJcbn1cclxuXHJcbi5jb2RlX3FyIHtcclxuXHJcbiAgaDMsXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGNvbG9yOiAjNTg1ODU4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlY29tbWVuZGF0aW9ucyB7XHJcblxyXG4gIGgzLFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBjb2xvcjogIzU4NTg1ODtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBjb2xvcjogIzU4NTg1ODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/show-coupon/show-coupon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/show-coupon/show-coupon.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCouponComponent", function() { return ShowCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowCouponComponent = /** @class */ (function () {
    function ShowCouponComponent() {
    }
    ShowCouponComponent.prototype.ngOnInit = function () {
    };
    ShowCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-coupon',
            template: __webpack_require__(/*! ./show-coupon.component.html */ "./src/app/components/show-coupon/show-coupon.component.html"),
            styles: [__webpack_require__(/*! ./show-coupon.component.scss */ "./src/app/components/show-coupon/show-coupon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowCouponComponent);
    return ShowCouponComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Jefferson\Proyectos\MachineR\front-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map