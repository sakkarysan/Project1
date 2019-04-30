'use strict';

(function(){
    var firstDriverSpeed = 50;
    var secondDriverSpeed = 70;
    var time = 3;
    var string = 'км';
    var S;  

    // var speedInHours = firstDriverSpeed + string 
    // if(firstDriverSpeed < secondDriverSpeed) {
    //     return true
    // } else {
    //     return false
    // }
    // телоСравнения ? действие1 : действие
    // firstDriverSpeed < secondDriverSpeed ?  return true :  return false 
    
    var getTotalPath = function (firstSpeed, secondSpeed, time) {  
        return S = firstSpeed * time + secondSpeed * time;
    } 
    getTotalPath(firstDriverSpeed, secondDriverSpeed, time);
   

    // for(var i = 0; i < Array.length; i++) 
    // if() - унарные, бинарные и тернарный. 
    // document;
    // window;
    // .METHOD_NAME
    // .classList
    // .addEventListener('', function(){})
    // var link = document.querySelector('a') - обычный возвращаемый элемент разметки
    // document.querySelectorAll(''); - что такое NodeList и HTMLCollection
    // document.getElementById('ID');
    // document.getElementByTagName('');
    // document.getElementByTagName();
    // .appendChild();
    // .createElement;
    // .parentNode
    // callback-function;

    
})();

// Для сторонних библиотек - вызов библиотеки оборачивать в отдельный IIFE модуль.
// JavaScript - среда - браузер. 
// FireFox - Gecko (ES6)
// Chrome - Blink (ES6)
// Safari - Webkit  (ES6)
// IE - Trident (ecmaScript5)
// JavaScript - ecmascript. ;
// ES7 и ES8


//  В любом языке есть 2 составляющие:
// 1 - алгоритмирование
// 
// 2 - структура данных
//  Number - числа - 3
//  Строки (String) - строчные - 'Привет'
//  Boolean - true/false 1 < 2 - true; 2 < 1 = false
// Служебные данные
// Объекты - сложный тип данных.



//  Heap - "своеобразная" память js;
// Разработчик не может очищать Heap
// var testParam = dfkgkdg;
// testParam = null