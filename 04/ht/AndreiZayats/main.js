"use strict";
// Получаем текущие год, месяц
var tmpMonth = new Date().getMonth();
if (tmpMonth == 11) tmpMonth = 12;
else tmpMonth++;
var tmpYear = new Date().getFullYear();
// Область для отрисовки
var htmlContext = document.getElementById("context");