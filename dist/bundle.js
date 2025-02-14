/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("/* declaracion de variables */\nvar saludo = \"hola\";\n/* declaracion de constantes */\nvar mensaje = \"como estas?\";\n/* declaracion de funciones simplificadas ES6*/\nvar mayusculas_pro = function mayusculas_pro(texto) {\n  return texto.toUpperCase();\n};\n/* declaracion de funciones normales ES6 */\nvar mayusculas_semipro = function mayusculas_semipro(texto) {\n  return texto.toUpperCase();\n};\n/* funcion con parametros por defecto */\nvar saludar = function saludar() {\n  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"sin nombre\";\n  var edad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  /* template string */\n  console.log(\"\".concat(mayusculas_pro(saludo), \" \").concat(mayusculas_semipro(mensaje), \" \").concat(nombre, \" \").concat(edad >= 18 ? \"mayor de edad \" : \"menor de edad\"));\n};\n//saludar(\"diego\",18);\n\ndocument.getElementById(\"btn_aceptar\").addEventListener('click', function () {\n  var nombre = document.getElementById('nombre').value;\n  var edad = document.getElementById('edad').value;\n  var sexo = document.getElementById('sexo').value;\n  alert(\"\\n        Bienvenid\".concat(sexo == 'f' ? 'a' : 'o', \" \").concat(nombre, \" eres \").concat(edad >= 18 ? 'mayor' : 'menor', \" de edad\\n    \"));\n});\nvar escuela = {\n  \"empleados\": [{\n    \"puesto\": \"docente\",\n    \"area\": \"sistemas\",\n    \"noEmpleado\": 1234\n  }, {\n    \"puesto\": \"secretaria\",\n    \"area\": \"direccion\",\n    \"noEmpleado\": 1224\n  }],\n  \"alumnos\": [{\n    \"semestre\": 2,\n    \"carrera\": \"sistemas\",\n    \"noControl\": 112209\n  }, {\n    \"semestre\": 8,\n    \"carrera\": \"gestion\",\n    \"noControl\": 1122020\n  }]\n};\nconsole.log(\"funcionando\");\n\n//# sourceURL=webpack://fronend/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;