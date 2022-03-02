let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// як масив об'єктів
// let userAddress = [];
// for (const user of users) {
//     userAddress.push(user.address)
// }
// console.log(userAddress);

// як масив стрінгових значень
// let userAddress = [];
// for (const user of users) {
//     let {city, country, street, houseNumber}=user.address;
//     userAddress.push(`${city} ${country}, ${street}, ${houseNumber}`)
// }
// console.log(userAddress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.
//
// for (const user of users) {
//     let {name, age, status} = user;
//     let {city, country, street, houseNumber}=user.address;
//     let divUser = document.createElement('div');
//     divUser.innerText=`${name} - ${age}, status - ${status}, address: ${city} ${country}, ${street}, ${houseNumber}`;
//     divUser.classList.add('user');
//     document.body.appendChild(divUser);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй
// блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let {city, country, street, houseNumber}=user.address;
//     let divUser = document.createElement('div');
//     let divName = document.createElement('div');
//     divName.innerText = user.name
//     let divAge = document.createElement('div');
//     divAge.innerText = user.age;
//     let divStatus = document.createElement('div');
//     divStatus.innerText = user.status;
//     let divAddress = document.createElement('div');
//     divAddress.innerText = `${city} ${country}, ${street}, ${houseNumber}`;
//     document.body.appendChild(divUser);
//     divUser.append(divName);
//     divUser.append(divAge);
//     divUser.append(divStatus);
//     divUser.append(divAddress);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
//     з блоками для кожної властивості
// for (const user of users) {
//     let {city, country, street, houseNumber}=user.address;
//     let divUser = document.createElement('div');
//     let divName = document.createElement('div');
//     divName.innerText = user.name
//     let divAge = document.createElement('div');
//     divAge.innerText = user.age;
//     let divStatus = document.createElement('div');
//     divStatus.innerText = user.status;
//     let divAddress = document.createElement('div');
//     let divCity = document.createElement('div');
//     divCity.innerText = city;
//     let divCountry = document.createElement('div');
//     divCountry.innerText = country;
//     let divStreet = document.createElement('div');
//     divStreet.innerText = street;
//     let divHouse = document.createElement('div');
//     divHouse.innerText =`house - ${houseNumber}`;
//     document.body.appendChild(divUser);
//     divUser.append(divName);
//     divUser.append(divAge);
//     divUser.append(divStatus);
//     divUser.append(divAddress);
//     divAddress.append(divCity);
//     divAddress.append(divCountry);
//     divAddress.append(divStreet);
//     divAddress.append(divHouse);
// }
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// //     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let wrap = document.createElement('div');
// wrap.classList.add('wrap');
// document.body.appendChild(wrap);
// for (let i = 0; i <rules.length; i++) {
//     let rule = document.createElement('div');
//     rule.classList.add('rules', `rule${i+1}`);
//     let ruleTitle = document.createElement('h2');
//     ruleTitle.innerText = rules[i].title;
//     let ruleBody = document.createElement('p');
//     ruleBody.innerText = rules[i].body;
//     wrap.appendChild(rule);
//     rule.append(ruleTitle);
//     rule.append(ruleBody);
// }
