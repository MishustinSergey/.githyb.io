//Создаем див с классом враппер.
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

var body = document.querySelector('body');
body.appendChild(wrapper);


//Создаем заголовок страницы
var h3 = document.createElement('h3');
h3.classList.add('text');
h3.innerHTML = 'Тест по программированию';
var text = document.querySelector('.wrapper');
text.appendChild(h3);

//Создаем первый вопрос в тесте
var title = document.createElement('p');
title.classList.add('title');
title.innerHTML = '1. Вопрос №1';
var text = document.querySelector('.wrapper');
text.appendChild(title);

//Создаем список Ul для вопроса 1
var newUl = document.createElement('ul');
newUl.classList.add('variants');
wrapper.insertBefore(newUl, wrapper.children[2]);

var neinput = document.createElement('div');
neinput.classList.add('input_buttom');

neinput.innerHTML += '<input type="checkbox" name="text1" value="" > Вариант №2<Br> <input type="checkbox" name="text1" value="" > Вариант №2<Br></input><input type="checkbox" name="text1" value="" > Вариант №3<Br></input>';
newUl.insertBefore(neinput, newUl.nextSibling);

// //добовляем Li
// var newLi = document.createElement('li>a');
// newLi.innerHTML = 'Вариант 1';
// newUl.insertBefore(newLi, newUl.children[1]);
//
// //копия варианта ответа № 2
// var newLi2 = newLi.cloneNode(false);
// //делаем корриктеровки в копии №2
// newLi2.innerHTML = 'Вариант 2';
// // вставим её после текущего сообщения
// newLi.parentNode.insertBefore(newLi2, newLi.nextSibling);
//
// //копия варианта ответа № 3
// var newLi3 = newLi.cloneNode(false);
// //делаем корриктеровки в копии №3
// newLi3.innerHTML = 'Вариант 3';
// // вставим её после текущего сообщения
// newLi2.parentNode.insertBefore(newLi3, newLi2.nextSibling);


var title_two = title.cloneNode(true);
//делаем корриктеровки в копии №2
title_two.innerHTML = '2. Вопрос №2';
// вставим её после текущего сообщения
wrapper.insertBefore(title_two, wrapper.children[3])


var newUl2 = newUl.cloneNode(true);
wrapper.insertBefore(newUl2, wrapper.children[4]);
//
// //копия вопроса № 2
//
//
//копия вопроса № 3
var title_three = title.cloneNode(true);
//делаем корриктеровки в копии №3
title_three.innerHTML = '3. Вопрос №3';
// вставим её после текущего сообщения
wrapper.insertBefore(title_three, wrapper.children[5]);

var newUl3 = newUl.cloneNode(true);
wrapper.insertBefore(newUl3, wrapper.children[6]);

var neinput1 = document.createElement('div');
neinput1.classList.add('input_submit');
neinput1.innerHTML += '<input type="submit" name="text1" value="Проверить мои результаты" />'
newUl3.insertBefore(neinput1, newUl3.nextSibling);
