//jshw3--4
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

var body = document.querySelector('body');
body.appendChild(wrapper);


var h3 = document.createElement('h3');
h3.classList.add('text');
h3.innerHTML = 'Тест по программированию';
var text = document.querySelector('.wrapper');
text.appendChild(h3);

var title = document.createElement('p');
title.classList.add('title');
title.innerHTML = '1. Вопрос №1';
var text = document.querySelector('.wrapper');
text.appendChild(title);

var newUl = document.createElement('ul');
newUl.classList.add('variants');
wrapper.insertBefore(newUl, wrapper.children[2]);

var neinput = document.createElement('div');
neinput.classList.add('input_buttom');

neinput.innerHTML += '<input type="checkbox" name="text1" value="" > Вариант №2<Br> <input type="checkbox" name="text1" value="" > Вариант №2<Br></input><input type="checkbox" name="text1" value="" > Вариант №3<Br></input>';
newUl.insertBefore(neinput, newUl.nextSibling);


var title_two = title.cloneNode(true);
title_two.innerHTML = '2. Вопрос №2';
wrapper.insertBefore(title_two, wrapper.children[3])


var newUl2 = newUl.cloneNode(true);
wrapper.insertBefore(newUl2, wrapper.children[4]);
var title_three = title.cloneNode(true);

title_three.innerHTML = '3. Вопрос №3';

wrapper.insertBefore(title_three, wrapper.children[5]);

var newUl3 = newUl.cloneNode(true);
wrapper.insertBefore(newUl3, wrapper.children[6]);

var neinput1 = document.createElement('div');
neinput1.classList.add('input_submit');
neinput1.innerHTML += '<input type="submit" name="text1" value="Проверить мои результаты" />'
newUl3.insertBefore(neinput1, newUl3.nextSibling);
