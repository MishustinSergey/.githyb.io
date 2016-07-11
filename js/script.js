
//объявляем переменные
var base = 60;
var clocktimer,dateObj,dh,dm,ds,ms;
var readout='';
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0;
//функция для очистки поля


function clearСlock() {
	clearTimeout(clocktimer);
	h=1;m=1;tm=1;s=0;ts=0;ms=0;
	init=0;show=true;
	readout='00:00:00.00';
	document.TestForm.stopwatch.value=readout;
	ii = 0;
}


//функция для старта секундомера
function startTIME() {
	var cdateObj = new Date();
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000);
	if (t>999) { s++; }
	if (s>=(m*base)) {
		ts=0;
		m++;
	} else {
		ts=parseInt((ms/100)+s);
		if(ts>=base) { ts=ts-((m-1)*base); }
	}
	if (m>(h*base)) {
		tm=1;
		h++;
	} else {
		tm=parseInt((ms/100)+m);
		if(tm>=base) { tm=tm-((h-1)*base); }
	}
	ms = Math.round(t/10);
	if (ms>99) {ms=0;}
	if (ms==0) {ms='00';}
	if (ms>0&&ms<=9) { ms = '0'+ms; }
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; }
	dm=tm-1;
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }
	dh=h-1;
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
	readout = dh + ':' + dm + ':' + ds + '.' + ms;
	if (show==true) { document.TestForm.stopwatch.value = readout; }
	clocktimer = setTimeout("startTIME()",1);

}
var element = document.getElementById('#on_off')
console.log(element.classList);
//функция для паузы
function pause() {
	if (init==0) { dateObj = new Date();
	startTIME();
	init=1;

	} else { if(show==true) {
	show=false;
	} else { show=true; } }
	if (on_off.value === "Запуск") {
    on_off.value = "Стоп";
    // alert('кнопка будет стоп');
}else {
  on_off.value = "Запуск";
   // alert('кнопка будет запуск');
}
}

//
// <!--Форма для Секундомера-->

// var timer = 0;
// var minuts = 0;
// var horse = 0;
// function start() {
// console.log('time = ', horse, minuts, timer);
// timer++;
// if (timer === 61) {
//     timer = 0;
//     minuts++;
//
// }
// if (minuts === 61) {
//     minuts = 0;
//     horse++;
//     console.log('часов ', horse)
// }
// }
// function go() {
//    timerId = setInterval(start, 1000);
//
// }
//
// function stop() {
//     clearInterval(timerId);
// }
// function stupid() {
//     clearInterval(timerId);
//     timer = 0;
//     minuts = 0;
//     horse = 0;
//     console.log(timer, minuts, horse);
// }
//
// var elem = document.querySelector('a');
//
// console.log(elem);
//
// elem.onclick = function (){
//     alert('test1');
// };


// ----------------Лучший вариант---------------
// elem.addEventListener('click', function() {
//     alert('test2');
    // mouseover - при наведении мышкой сразу дает результат!
// }
// );
// s
 // еще 1 вариант
//  function handler(event){
//      console.log('evetn', event.keyCode);
//      if (event.keyCode === 27) {
//          alert('Вы нажали enter, поздравляю');
//      }else {
//          alert('вы промазали, пробуйте еще');
//      }
//  }
//  // elem.addEventListener('click', handler);
// window.addEventListener('keydown', handler);

// --------------------урок 5-----------------
// var caounte = 0;
// function somtext(){
//     console.log('This function works caounte =',caounte);
//     caounte++;
//     if (caounte === 5){
//         clearInterval(id);
//     }
// }
// // window.setTimeout(somtext, 2000);
// var id = setInterval(somtext, 2000);

// -------------------КОНСТРУКТОРЫ И ОПЕРАТОР NEW ---------------
// var a = {};
// var b = [];
//
// var c = new Object();
// var d = new Array(1, 2, 3, 4, 'test');
//
// function animal(newName, newColor) {
//     this.newName = prompt('введите имя', '');
//     this.newColor =prompt('введите цвет', '');
//     this.noise = function () {
//         alert("Hello, I am " + this.newName);
//     }
// }
// var dog = new animal(this.newName, this.newColor);
// console.log(dog);
// dog.noise();

// ------------------call/apply-------------
// function calculateMoney(a, b) {
//     console.log(this);
//     console.log("i am " + this.firstname + ' ' + this.lastname + ' have ' + (a + b) + ' dollars');
//
// }
// var context = {
//     firstname: 'Pet9',
//     lastname: 'Petrov'
// };
// calculateMoney.call(context, 5, 60);
// calculateMoney.apply(context, [5, 59]);
