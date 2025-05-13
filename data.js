export const data = {
    goods: {
        dairy: {
            name: 'Молоко, сыр, яйца',
            items: [
                {id: 0, count:0, type:'Молоко', img:`/img/dairy/id0.png`, brand: 'ПРОСТОКВАШИНО', weight: '1л', name: 'Молоко ПРОСТОКВАШИНО паст.', prices: {haveDiscount: true, price: {withDiscount: "44,50", withoutDiscount: '50,50'}}, rating: 3, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 1, count:14, type:'Масло', img:`/img/dairy/id1.png`, brand: 'ПРОСТОКВАШИНО', weight: '190 г', name: 'Масло сливочное ПРОСТОКВАШИНО 82%', prices: {haveDiscount: false, price: "192,99"}, rating: 2, tags: {new: false, OurProducts: true, Useful: false, NonGMO: true}},
                {id: 2, count:14, type:'Сыр', img:`/img/dairy/id2.png`, brand: 'DORBLU', weight: '100 г', name: 'Сыр Dorblu a la creme с голубой плесенью мягкий 65%', prices: {haveDiscount: false, price: "139,99"}, rating: 2, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 3, count:0, type:'Сгущенка', img:`/img/dairy/id3.png`, brand: 'РОГАЧЕВ', weight: '200 г', name: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром', prices: {haveDiscount: true, price: {withDiscount: "77,99", withoutDiscount: '168,50'}}, rating: 2, tags: {new: false, OurProducts: true, Useful: false, NonGMO: true}},
                {id: 4, count:14, type:'Йогурт', img:`/img/dairy/id4.png`, brand: 'Fruttis', weight: '115 г', name: 'Йогуртный продукт Fruttis С вишней/с черникой 5%, 115г', prices: {haveDiscount: false, price: "29,99"}, rating: 2, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 5, count:14, type:'Йогурт', img:`/img/dairy/id5.png`, brand: 'Fruttis', weight: '115 г', name: 'Йогуртный продукт Fruttis С маракуйей и персиком/с ананасом и дыней 5%, 115г', prices: {haveDiscount: false, price: "29,99"}, rating: 2, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        bread: {
            name: 'Хлеб',
            items: [
                {id: 6, count:14, type:'Хлеб', img:`/img/bread/id6.jpg`, brand: "Harry's American Sandwich", weight: '470 г', name: "Хлеб Harry's American Sandwich сэндвичный пшеничный в нарезке, 470г", prices: {haveDiscount: false, price: "129,99"}, rating: 3, tags: {new: false, OurProducts: false, Useful: false, NonGMO: true}},
                {id: 7, count:14, type:'Хлеб', img:`/img/bread/id7.jpg`, brand: "Аютинский", weight: '570 г', name: "Хлеб Аютинский хлеб тостовый нарезанный высший сорт, 570г", prices: {haveDiscount: false, price: "59,99"}, rating: 4, tags: {new: false, OurProducts: true, Useful: false, NonGMO: true}},
            ]
        },
        meat: {
            name: 'Мясо, птица, колбаса',
            items: [
                {id: 8, count:14, type:'Колбаса', img:`/img/meat/id8.png`, brand: "Черкизово", weight: '590 г', name: "Колбаса Черкизово сырокопченная САЛЬЧИЧОН", prices: {haveDiscount: false, price: "599,99"}, rating: 4, tags: {new: true, OurProducts: true, Useful: false, NonGMO: true}},
                {id: 9, count:14, type:'Птица', img:`/img/meat/id9.jpg`, brand: "Петелинка", weight: '900 г', name: "Мясо бедра цыпленка-бройлера Петелинка охлажденное, ~900г", prices: {haveDiscount: true, price: {withDiscount: "577,99", withoutDiscount: '770,50'}}, rating: 4, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        fruitsAndVegetables: {
            name: 'Фрукты и овощи',
            items: [
                {id: 10, count:0, type:'Фрукты', img:`/img/fruitsAndVegetables/id10.jpg`, brand: "Без бренда", weight: '1000 г', name: "Яблоки Премиум", prices: {haveDiscount: true, price: {withDiscount: "120,99", withoutDiscount: '159,50'}}, rating: 4, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 11, count:14, type:'Овощи', img:`/img/fruitsAndVegetables/id11.jpg`, brand: "Без бренда", weight: '1000 г', name: "Морковь мытая", prices: {haveDiscount: true, price: {withDiscount: "60,99", withoutDiscount: '99,99'}}, rating: 5, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        frozenProducts: {
            name: 'Замороженные продукты',
            items: [
                {id: 12, count:14, type:'Фрукты', img:`/img/frozenProducts/id12.jpg`, brand: "METRO Chef", weight: '2500 г', name: "METRO Chef Дольки картофельные с кожурой быстрозамороженные, 2.5кг", prices: {haveDiscount: false, price: "712,99"}, rating: 4, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 13, count:14, type:'Овощи', img:`/img/frozenProducts/id13.jpg`, brand: "Без бренда", weight: '1000 г', name: "Клубника замороженная, 1кг", prices: {haveDiscount: true, price: {withDiscount: "310,99", withoutDiscount: '499,99'}}, rating: 4, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        drinks: {
            name: 'Напитки',
            items: [
                {id: 14, count:14, type:'Пиво', img:`/img/drinks/id14.jpg`, brand: "Cheerday Silver", weight: '1л', name: "Пиво Cheerday Silver светлое, 1л", prices: {haveDiscount: false, price: "412,99"}, rating: 1, tags: {new: true, OurProducts: false, Useful: false, NonGMO: true}},
                {id: 15, count:0, type:'Газированные напитки', img:`/img/drinks/id15.jpg`, brand: "Coca-Cola", weight: '330 мл', name: "Напиток Coca-Cola Original газированный, 330мл", prices: {haveDiscount: true, price: {withDiscount: "310,99", withoutDiscount: '499,99'}}, rating: 4, tags: {new: false, OurProducts: false, Useful: false, NonGMO: true}},
            ]
        },
        pastry: {
            name: 'Кондитерские изделия',
            items: [
                {id: 16, count:14, type:'Булочки', img:`/img/pastry/id16.jpg`, brand: "Золотой колос", weight: '75 г', name: "Булочка Золотой колос Венская, 75г", prices: {haveDiscount: false, price: "12,99"}, rating: 4, tags: {new: false, OurProducts: true, Useful: false, NonGMO: true}},
                {id: 17, count:14, type:'Булочки', img:`/img/pastry/id17.jpg`, brand: "Аютинский хлеб", weight: '200 г', name: "Булочки Аютинский хлеб Домашние с вишней, 200г", prices: {haveDiscount: true, price: {withDiscount: "110,99", withoutDiscount: '199,99'}}, rating: 5, tags: {new: true, OurProducts: true, Useful: false, NonGMO: true}},
            ]
        }, 
        teaCoffee: {
            name: 'Чай, кофе',
            items: [
                {id: 18, count:0, type:'Чай', img:`/img/teaCoffee/id18.jpg`, brand: "Maitre de The", weight: '100 г', name: "Чай Maitre de The Люкс смесь чая черного среднелистового индийского, цейлонского, кенийского и китайского, 100г", prices: {haveDiscount: false, price: "322,99"}, rating: 5, tags: {new: false, OurProducts: false, Useful: true, NonGMO: true}},
                {id: 19, count:14, type:'Кофе', img:`/img/teaCoffee/id19.jpg`, brand: "НЕСКАФЕ", weight: '900 г', name: "Кофе Нескафе Голд растворимый сублимированный с добавлением натурального жареного молотого кофе, 900г", prices: {haveDiscount: true, price: {withDiscount: "2700,99", withoutDiscount: '3500,99'}}, rating: 5, tags: {new: false, OurProducts: true, Useful: false, NonGMO: true}},
            ]
        }, 
        grocery: {
            name: 'Бакалея',
            items: [
                {id: 20, count:14, type:'Макароны', img:`/img/grocery/id20.jpg`, brand: "Rummo", weight: '1кг', name: "ЧМакароны Rummo Спагетти Гросси №5, 1кг", prices: {haveDiscount: false, price: "322,99"}, rating: 4, tags: {new: false, OurProducts: false, Useful: false, NonGMO: true}},
                {id: 21, count:14, type:'Макароны', img:`/img/grocery/id21.jpg`, brand: "Metro Chef", weight: '3кг', name: "METRO Chef Макароны спагетти, 3кг", prices: {haveDiscount: true, price: {withDiscount: "270,99", withoutDiscount: '350,99'}}, rating: 5, tags: {new: false, OurProducts: true, Useful: false, NonGMO: true}},
            ]
        }, 
        healthly: {
            name: 'Здоровое питание',
            items: [
                {id: 22, count:0, type:'Фиточай', img:`/img/healthly/id22.jpg`, brand: "Фабрика природы", weight: '100 г', name: "Напиток чайный Фабрика природы Полезный гречишный с кокосом, 100г", prices: {haveDiscount: false, price: "522,99"}, rating: 4, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 23, count:14, type:'Фиточай', img:`/img/healthly/id23.jpg`, brand: "Фабрика природыf", weight: '100 г', name: "Напиток чайный Фабрика природы Полезный гречишный с манго, 100г", prices: {haveDiscount: true, price: {withDiscount: "270,99", withoutDiscount: '350,99'}}, rating: 2, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        babyFood: {
            name: 'Детское питание',
            items: [
                {id: 26, count:14, type:'Вода', img:`/img/babyFood/id24.jpg`, brand: "ФрутоНяня", weight: '330 мл', name: "Вода детская ФрутоНяня питьевая негазированная, 330мл", prices: {haveDiscount: false, price: "52,99"}, rating: 4, tags: {new: false, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 27, count:0, type:'Пюре', img:`/img/babyFood/id25.jpg`, brand: "GERBER", weight: '90 г', name: "Пюре фруктовое Gerber Спелое манго с 6 месяцев, 90г", prices: {haveDiscount: true, price: {withDiscount: "70,99", withoutDiscount: '120,99'}}, rating: 5, tags: {new: false, OurProducts: false, Useful: true, NonGMO: true}},
            ]
        },
        babyFood: {
            name: 'Детское питание',
            items: [
                {id: 26, count:14, type:'Вода', img:`/img/babyFood/id26.jpg`, brand: "ФрутоНяня", weight: '330 мл', name: "Вода детская ФрутоНяня питьевая негазированная, 330мл", prices: {haveDiscount: false, price: "52,99"}, rating: 4, tags: {new: true, OurProducts: true, Useful: true, NonGMO: true}},
                {id: 27, count:14, type:'Пюре', img:`/img/babyFood/id27.jpg`, brand: "GERBER", weight: '90 г', name: "Пюре фруктовое Gerber Спелое манго с 6 месяцев, 90г", prices: {haveDiscount: true, price: {withDiscount: "70,99", withoutDiscount: '120,99'}}, rating: 5, tags: {new: false, OurProducts: false, Useful: true, NonGMO: true}},
            ]
        },
    },
    NonFood: {
        petProducts: {
            name: 'Зоотовары',
            items: [
                {id: 24, count:14, type:'Корм для кошек', img:`/img/petProducts/id24.jpg`, brand: "Whiskas", weight: '14кг', name: "Корм сухой Whiskas Аппетитное ассорти Вкусные подушечки для взрослых кошек с нежным паштетом с говядиной, 13.8кг", prices: {haveDiscount: false, price: "5220,99"}, rating: 3, tags: {new: false}},
                {id: 25, count:14, type:'Корм для кошек', img:`/img/petProducts/id25.jpg`, brand: "Perfect Fit", weight: '650 г', name: "Корм сухой Perfect Fit Junior для котят с курицей, 650г", prices: {haveDiscount: true, price: {withDiscount: "270,99", withoutDiscount: '350,99'}}, rating: 5, tags: {new: false}},
            ]
        },
        household: {
            name: 'Непродовольственные товары',
            items: [
                {id: 28, count:14, type:'Мыло', img:`/img/household/id28.jpg`, brand: "SYNERGETIC", weight: '5л', name: "Мыло жидкое Synergetic Миндальное молочко гипоаллергенное, 5л", prices: {haveDiscount: false, price: "999,99"}, rating: 5, tags: {new: false}},
                {id: 29, count:14, type:'Уголь', img:`/img/household/id29.jpg`, brand: "METRO PROFESSIONAL", weight: '10кг', name: "METRO PROFESSIONAL Уголь высший сорт, 10кг", prices: {haveDiscount: true, price: {withDiscount: "899,99", withoutDiscount: '999,99'}}, rating: 4, tags: {new: true}},
            ]
        }
    }
}