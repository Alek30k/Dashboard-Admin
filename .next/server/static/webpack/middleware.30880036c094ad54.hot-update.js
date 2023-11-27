"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./app/authconfig.js":
/*!***************************!*\
  !*** ./app/authconfig.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    providers: [],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        authorized ({ auth, request }) {\n            const isLoggedIn = auth?.user;\n            const isOnDashboard = request.nextUrl.pathname.startsWith(\"/dashboard\");\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false;\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL(\"/dashboard\", request.nextUrl));\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL2F1dGhjb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGFBQWE7SUFDeEJDLFdBQVcsRUFBRTtJQUNiQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFXO1FBQ1RDLFlBQVcsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7WUFDMUIsTUFBTUMsYUFBYUYsTUFBTUc7WUFDekIsTUFBTUMsZ0JBQWdCSCxRQUFRSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO1lBQzFELElBQUlILGVBQWU7Z0JBQ2pCLElBQUlGLFlBQVksT0FBTztnQkFDdkIsT0FBTztZQUNULE9BQU8sSUFBSUEsWUFBWTtnQkFDckIsT0FBT00sU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksY0FBY1QsUUFBUUksT0FBTztZQUNoRTtZQUNBLE9BQU87UUFDVDtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXV0aGNvbmZpZy5qcz83NTliIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRoQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZCh7IGF1dGgsIHJlcXVlc3QgfSkge1xuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IGF1dGg/LnVzZXI7XG4gICAgICBjb25zdCBpc09uRGFzaGJvYXJkID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgaWYgKGlzT25EYXNoYm9hcmQpIHtcbiAgICAgICAgaWYgKGlzTG9nZ2VkSW4pIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvZGFzaGJvYXJkXCIsIHJlcXVlc3QubmV4dFVybCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiYXV0aENvbmZpZyIsInByb3ZpZGVycyIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsImF1dGgiLCJyZXF1ZXN0IiwiaXNMb2dnZWRJbiIsInVzZXIiLCJpc09uRGFzaGJvYXJkIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./app/authconfig.js\n");

/***/ })

});