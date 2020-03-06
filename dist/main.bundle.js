webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-bg {\n    background-color: #E5E5E5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-bg\">\n  <app-header></app-header>\n  <app-project-info></app-project-info>\n  <app-edit-photo-card></app-edit-photo-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_photo_card_edit_photo_card_component__ = __webpack_require__("../../../../../src/app/edit-photo-card/edit-photo-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_info_project_info_component__ = __webpack_require__("../../../../../src/app/project-info/project-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_photo_card_dragDrop_directive__ = __webpack_require__("../../../../../src/app/edit-photo-card/dragDrop.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_webcam__ = __webpack_require__("../../../../ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_photo_card_take_photo_dialog_take_photo_dialog_component__ = __webpack_require__("../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {MatCardModule} from '@angular/material/card';










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edit_photo_card_edit_photo_card_component__["a" /* EditPhotoCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__project_info_project_info_component__["a" /* ProjectInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__edit_photo_card_dragDrop_directive__["a" /* DragDirective */],
            __WEBPACK_IMPORTED_MODULE_11__edit_photo_card_take_photo_dialog_take_photo_dialog_component__["a" /* TakePhotoDialogComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_webcam__["a" /* WebcamModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_image_cropper__["a" /* ImageCropperModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_7_ngx_image_cropper__["a" /* ImageCropperModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__edit_photo_card_take_photo_dialog_take_photo_dialog_component__["a" /* TakePhotoDialogComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/dragDrop.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDirective = (function () {
    function DragDirective() {
        this.files = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.background = '#eee';
    }
    DragDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    };
    DragDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    };
    DragDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        var files = [];
        for (var i = 0; i < evt.dataTransfer.files.length; i++) {
            var file = evt.dataTransfer.files[i];
            files.push(file);
        }
        if (files.length > 0) {
            this.files.emit(files);
        }
    };
    return DragDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], DragDirective.prototype, "files", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('style.background'),
    __metadata("design:type", Object)
], DragDirective.prototype, "background", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDirective.prototype, "onDragOver", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDirective.prototype, "onDragLeave", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDirective.prototype, "onDrop", null);
DragDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appDrag]',
    }),
    __metadata("design:paramtypes", [])
], DragDirective);

var _a;
//# sourceMappingURL=dragDrop.directive.js.map

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/edit-photo-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\n  width: 73.6%;\n  height: 422px;\n  margin: auto;\n  margin-top: 300px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n\n  background: #ffffff;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n\n.your-project-photo {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n\n  margin-right: 120px;\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  margin: 50px;\n  -ms-flex-pack: space-evenly;\n      justify-content: space-evenly;\n}\n\n.upload-photo {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  margin-top: 65px;\n  margin-left: 130px;\n}\n\n.dropzone {\n\n  width: 430px;\n  height: 197px;\n  border: 2px dashed #4342e6;\n  border-radius: 4px;\n}\n\n.container {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.dropped-img {\n  height: 200px;\n}\n\n.text-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.flex-grow-0-4{\n  -ms-flex-positive: 0.4;\n      flex-grow: 0.4;\n}\n\n\n.icon-wrapper {\n  background: #F3F3F3;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);\n  width: 124px;\n  height: 124px;\n  border-radius: 50%;\n\n  display: -ms-flexbox;\n\n  display: flex;\n\n  -ms-flex-item-align: center;\n\n      align-self: center;\n\n  -ms-flex-pack: center;\n\n      justify-content: center;\n}\n\n.project-photo {\n  display: -ms-flexbox;\n  display: flex;\n\n  -ms-flex-align: center;\n\n      align-items: center;\n\n  -ms-flex-pack: center;\n\n      justify-content: center;\n}\n\n.cropper-container {\n  width: 430px;\n  height: 197px;\n}\n\n.edit-project-photo-text {\n  font-size: 32px;\n  position: absolute;\n  margin-top: -45px;\n  left: 260px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/edit-photo-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <div class=\"edit-project-photo-text\">Edit project photo</div>\n  <div class=\"upload-photo\">\n    <div\n      *ngIf=\"!files.length && !takenImageFile\"\n      class=\"rmpm dropzone\"\n      appDrag\n      (files)=\"filesDropped($event)\"\n      (click)=\"fileUpload()\"\n    >\n      <div class=\"text-wrapper\">\n        <div class=\"centered\">Drag your photo here</div>\n      </div>\n    </div>\n\n    <!--taken image preview with WebCam-->\n    <div *ngIf=\"takenImageFile\" >\n      <!-- [imageFile]=\"takenImageFile\" -->\n      <image-cropper class=\"cropper-container\"\n        [imageFileChanged]=\"takenImageFile\"\n        [maintainAspectRatio]=\"true\"\n        [roundCropper]=\"true\"\n        format=\"png\"\n        (imageCropped)=\"imageCropped($event)\"\n        (imageLoaded)=\"imageLoaded()\"\n        (loadImageFailed)=\"loadImageFailed()\"\n      ></image-cropper>\n    </div>\n\n    <!--droped image preview-->\n    <div *ngFor=\"let file of files\" class=\"cropper-container\">\n      <image-cropper *ngIf=\"!takenImageFile\" class=\"cropper-container\"\n        [imageFileChanged]=\"file\"\n        [maintainAspectRatio]=\"true\"\n        [roundCropper]=\"true\"\n        format=\"png\"\n        (imageCropped)=\"imageCropped($event)\"\n        (imageLoaded)=\"imageLoaded()\"\n        (loadImageFailed)=\"loadImageFailed()\"\n      ></image-cropper>\n    </div>\n    <div *ngIf=\"incorrectFileTypeProvided\" style=\"color: red\">\n      Incorrect file type provided, this app only accepts images\n    </div>\n\n    <div class=\"container\">\n      <hr class=\"flex-grow-0-4\" />\n      or\n      <hr class=\"flex-grow-0-4\" />\n    </div>\n    <div class=\"container\">\n      <input\n        style=\"display: none\"\n        type=\"file\" (change)=\"onFileChanged($event)\"\n        #fileInput>\n      <button class=\"button-purple flex-grow-0-4\" (click)=\"fileInput.click()\">\n        <img src=\"assets/upload-icon.svg\" alt=\"\" />\n        <span class=\"vertial-align\"> Upload New Photo </span>\n      </button>\n      <button\n        class=\"flex-grow-0-4 button-green\"\n        (click)=\"openTakePhotoDialog()\"\n      >\n        <img src=\"assets/photo-icon.svg\" alt=\"\" />\n        Take A Photo\n      </button>\n    </div>\n  </div>\n\n  <div class=\"your-project-photo\">\n    <h2>Your project photo</h2>\n    <div class=\"icon-wrapper\" *ngIf=\"!takenImageFile && !files.length\">\n      <img class=\"project-photo\" src=\"assets/user-icon.svg\" alt=\"\" />\n    </div>\n\n    <img\n      *ngIf=\"takenImageFile || files.length\"\n      class=\"icon-wrapper\"\n      [src]=\"croppedImage\"\n      alt=\"\"\n    />\n\n    <button class=\"button-purple\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/edit-photo-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPhotoCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take_photo_dialog_take_photo_dialog_component__ = __webpack_require__("../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPhotoCardComponent = (function () {
    function EditPhotoCardComponent(dialog) {
        this.dialog = dialog;
        this.files = [];
        this.croppedImage = '';
        this.takePhotoMode = false;
        this.takenWithWebcamImageURL = '';
        this.takenImageFile = null;
        this.incorrectFileTypeProvided = false;
    }
    EditPhotoCardComponent.prototype.ngOnInit = function () { };
    EditPhotoCardComponent.prototype.openTakePhotoDialog = function () {
        var _this = this;
        var dialogRef = (this.takePhotoDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__take_photo_dialog_take_photo_dialog_component__["a" /* TakePhotoDialogComponent */], {
            width: '500px',
        }));
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with result:', result);
            fetch(result)
                .then(function (res) { return res.blob(); })
                .then(function (blob) {
                var file = new File([blob], 'File name', { type: 'image/jpeg' });
                console.log(file);
                _this.takenImageFile = file;
                _this.files = [];
            });
        });
    };
    EditPhotoCardComponent.prototype.isWebcamImage = function (file) {
        return file.imageAsDataUrl !== undefined;
    };
    EditPhotoCardComponent.prototype.filesDropped = function (files) {
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            if (!this.isWebcamImage(file)) {
                if (!file.type.includes('image'))
                    this.incorrectFileTypeProvided = true;
                else
                    this.incorrectFileTypeProvided = false;
            }
        }
        this.files = files;
        this.takenImageFile = null;
    };
    EditPhotoCardComponent.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
        this.filesDropped([file]);
    };
    EditPhotoCardComponent.prototype.imageLoaded = function () { };
    EditPhotoCardComponent.prototype.loadImageFailed = function () { };
    EditPhotoCardComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    return EditPhotoCardComponent;
}());
EditPhotoCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-edit-photo-card',
        template: __webpack_require__("../../../../../src/app/edit-photo-card/edit-photo-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-photo-card/edit-photo-card.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]) === "function" && _a || Object])
], EditPhotoCardComponent);

var _a;
//# sourceMappingURL=edit-photo-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <webcam\n    [height]=\"500\"\n    [width]=\"500\"\n    [trigger]=\"triggerObservable\"\n    (imageCapture)=\"handleImage($event)\"\n    *ngIf=\"showWebcam\"\n    [imageQuality]=\"0.8\"\n    (initError)=\"handleInitError($event)\"\n  ></webcam>\n\n  <div class=\"snapshot\" *ngIf=\"webcamImage\">\n    <h2>Nice one!</h2>\n    <img [src]=\"webcamImage.imageAsDataUrl\" />\n  </div>\n  <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n  <ul *ngFor=\"let error of errors\">\n    <li>{{ error | json }}</li>\n  </ul>\n</div>\n<div mat-dialog-actions>\n  <button class=\"button-purple\" *ngIf=\"webcamImage\" [mat-dialog-close]=\"webcamImageAsURL\">Use This Photo And Exit</button>\n  <button class=\"button-green\" (click)=\"triggerSnapshot()\">Take a New Photo</button>\n  <button class=\"button-red\" (click)=\"onNoClick()\">Cancel</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakePhotoDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TakePhotoDialogComponent = (function () {
    function TakePhotoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // toggle webcam on/off
        this.showWebcam = true;
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        this.webcamImageAsURL = "";
        this.webcamImageAsFile = null;
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    TakePhotoDialogComponent.prototype.ngOnInit = function () { };
    TakePhotoDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TakePhotoDialogComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    TakePhotoDialogComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    TakePhotoDialogComponent.prototype.handleImage = function (webcamImage) {
        console.info("received webcam image", webcamImage);
        this.webcamImage = webcamImage;
        this.webcamImageAsURL = webcamImage.imageAsDataUrl;
    };
    Object.defineProperty(TakePhotoDialogComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return TakePhotoDialogComponent;
}());
TakePhotoDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-take-photo-dialog",
        template: __webpack_require__("../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-photo-card/take-photo-dialog/take-photo-dialog.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */]) === "function" && _a || Object, Object])
], TakePhotoDialogComponent);

var _a;
//# sourceMappingURL=take-photo-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-main {\n    position: absolute;\n    width: 100%;\n    height: 100px;\n    left: 0px;\n    top: 0px;\n\n    background: #4342E6;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n\n    padding: 0;\n    margin: 0;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n\n\n}\n\n.left-aligned {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    margin-top: 13px;\n    margin-left: 26px;\n}\n\n.right-aligned {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n\n}\n\n.display-inline {\n  display: inline;\n}\n\n.white-color {\n  color: white;\n}\n\n.margin-8-px {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-main\">\n  <div class=\"left-aligned\">\n    <img src=\"assets/site-logo.svg\" alt=\"\">\n    <img src=\"assets/site-name.svg\" alt=\"\">\n\n    <img src=\"assets/back-icon.svg\" alt=\"\">\n    <div class=\"display-inline white-color margin-8-px\">Back</div>\n\n\n\n  </div>\n\n  <div class=\"right-aligned\">\n    <img src=\"assets/notification-icon.svg\" alt=\"\">\n    <img src=\"assets/wallet-icon.svg\" alt=\"\">\n\n    <img src=\"assets/profile-photo.svg\" alt=\"\">\n\n    <div class=\"display-inline white-color margin-8-px\">Milton Creator</div>\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-info/project-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-photo {\n\n    width: 100px;\n    height: 100px;\n\n    border-radius: 50%;\n\n    background: #FFFFFF;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n\n    list-style: none;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n\n    -ms-flex-align: center;\n\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n\n\n}\n\n.project-info {\n      width: 100%;\n    position: absolute;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n\n    -ms-flex-align: center;\n\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    top: 50px;\n\n\n}\n\nbutton {\n  color: #FFFFFF;\n  font-weight: 500;\n}\n\n.project-name {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 37px;\n  color: #3B3B3B;\n}\n\n.created-by-name {\n  margin-top: 10px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n\n  letter-spacing: 0.0673589px;\n\n  color: #777777;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-info/project-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-info\">\n  <div class=\"project-photo\">\n    <img  class=\"startup-icon\" src=\"assets/startup-icon.svg\" alt=\"\">\n\n  </div>\n  <div >\n    <p class=\"project-name\">Project Name</p>\n    <p class=\"created-by-name\">Created by <img src=\"assets/profile-photo.svg\" style=\"width: 16px; height: 16px; align-self: center;\"> <b>Milton Dix</b></p>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-info/project-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectInfoComponent = (function () {
    function ProjectInfoComponent() {
    }
    ProjectInfoComponent.prototype.ngOnInit = function () { };
    return ProjectInfoComponent;
}());
ProjectInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-project-info',
        template: __webpack_require__("../../../../../src/app/project-info/project-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-info/project-info.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ProjectInfoComponent);

//# sourceMappingURL=project-info.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */

/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map