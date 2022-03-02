// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let container = document.createElement('div');
// container.classList.add('wrap');
// container.classList.add('collapse');
// container.classList.add('alpha');
// container.classList.add('beta');
// container.style.backgroundColor = 'blue';
// container.style.color = 'yellow';
// container.style.fontSize = '50px';
// container.innerText = 'Слава Україні';
// container.style.height = '200px';
// container.style.width = '500px';
// container.style.textAlign = 'center';
// document.body.appendChild(container);
// document.body.appendChild(container.cloneNode(true));

//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     let duration = document.createElement('div');
//     duration.innerText=`${course.title} - ${course.monthDuration} months`;
//     document.body.appendChild(duration);
// }

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = course.title;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = course.monthDuration;
//     div.append(h1);
//     div.append(p);
//     document.body.appendChild(div);
// }

