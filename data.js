export const data = {
    goods: {
        dairy: {
            name: 'Молоко, сыр, яйца',
            items: [
                {id: 0, type:'Молоко', img:`/img/dairy/id${() => this.id}.png`, brand: 'ПРОСТОКВАШИНО', weight: '1л', name: 'Молоко ПРОСТОКВАШИНО паст.', prices: {haveDiscount: true, price: {withDiscount: "44,50", withoutDiscount: '50,50'}}, rating: 3, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 1, type:'Масло', img:`/img/dairy/id${() => this.id}.png`, brand: 'ПРОСТОКВАШИНО', weight: '190 г', name: 'Масло сливочное ПРОСТОКВАШИНО 82%', prices: {haveDiscount: false, price: "192,99"}, rating: 2, tags: {OurProducts: true, Useful: false, NonGMO: true}},
                {id: 2, type:'Сыр', img:`/img/dairy/id${() => this.id}.png`, brand: 'DORBLU', weight: '100 г', name: 'Сыр Dorblu a la creme с голубой плесенью мягкий 65%', prices: {haveDiscount: false, price: "139,99"}, rating: 2, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 3, type:'Сгущенка', img:`/img/dairy/id${() => this.id}.png`, brand: 'РОГАЧЕВ', weight: '200 г', name: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром', prices: {haveDiscount: true, price: {withDiscount: "77,99", withoutDiscount: '168,50'}}, rating: 2.5, tags: {OurProducts: true, Useful: false, NonGMO: true}},
                {id: 4, type:'Йогурт', img:`/img/dairy/id${() => this.id}.png`, brand: 'Fruttis', weight: '115 г', name: 'Йогуртный продукт Fruttis С вишней/с черникой 5%, 115г', prices: {haveDiscount: false, price: "29,99"}, rating: 2, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 5, type:'Йогурт', img:`/img/dairy/id${() => this.id}.png`, brand: 'Fruttis', weight: '115 г', name: 'Йогуртный продукт Fruttis С маракуйей и персиком/с ананасом и дыней 5%, 115г', prices: {haveDiscount: false, price: "29,99"}, rating: 2, tags: {OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        bread: {
            name: 'Хлеб',
            items: [
                {id: 6, type:'Хлеб', img:`/img/bread/id${() => this.id}.jpg`, brand: "Harry's American Sandwich", weight: '470 г', name: "Хлеб Harry's American Sandwich сэндвичный пшеничный в нарезке, 470г", prices: {haveDiscount: false, price: "129,99"}, rating: 3, tags: {OurProducts: false, Useful: false, NonGMO: true}},
                {id: 7, type:'Хлеб', img:`/img/bread/id${() => this.id}.jpg`, brand: "Аютинский", weight: '570 г', name: "Хлеб Аютинский хлеб тостовый нарезанный высший сорт, 570г", prices: {haveDiscount: false, price: "59,99"}, rating: 4, tags: {OurProducts: true, Useful: false, NonGMO: true}},
            ]
        },
        meat: {
            name: 'Мясо, птица, колбаса',
            items: [
                {id: 8, type:'Колбаса', img:`/img/meat/id${() => this.id}.png`, brand: "Черкизово", weight: '590 г', name: "Колбаса Черкизово сырокопченная САЛЬЧИЧОН", prices: {haveDiscount: false, price: "599,99"}, rating: 4, tags: {OurProducts: true, Useful: false, NonGMO: true}},
                {id: 9, type:'Птица', img:`/img/meat/id${() => this.id}.jpg`, brand: "Петелинка", weight: '900 г', name: "Мясо бедра бескостное цыпленка-бройлера Петелинка охлажденное, ~900г", prices: {haveDiscount: true, price: {withDiscount: "577,99", withoutDiscount: '770,50'}}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        fruitsAndVegetables: {
            name: 'Фрукты и овощи',
            items: [
                {id: 10, type:'Фрукты', img:`/img/fruitsAndVegetables/id${() => this.id}.jpg`, brand: "Без бренда", weight: '1000 г', name: "Яблоки Премиум", prices: {haveDiscount: true, price: {withDiscount: "120,99", withoutDiscount: '159,50'}}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 11, type:'Овощи', img:`/img/fruitsAndVegetables/id${() => this.id}.jpg`, brand: "Без бренда", weight: '1000 г', name: "Морковь мытая", prices: {haveDiscount: true, price: {withDiscount: "60,99", withoutDiscount: '99,99'}}, rating: 5, tags: {OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        frozenProducts: {
            name: 'Замороженные продукты',
            items: [
                {id: 12, type:'Фрукты', img:`/img/frozenProducts/id${() => this.id}.jpg`, brand: "METRO Chef", weight: '2500 г', name: "METRO Chef Дольки картофельные с кожурой быстрозамороженные, 2.5кг", prices: {haveDiscount: false, price: "712,99"}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 13, type:'Овощи', img:`/img/frozenProducts/id${() => this.id}.jpg`, brand: "Без бренда", weight: '1000 г', name: "Клубника замороженная, 1кг", prices: {haveDiscount: true, price: {withDiscount: "310,99", withoutDiscount: '499,99'}}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        drinks: {
            name: 'Напитки',
            items: [
                {id: 14, type:'Пиво', img:`/img/drinks/id${() => this.id}.jpg`, brand: "Cheerday Silver", weight: '1л', name: "Пиво Cheerday Silver светлое, 1л", prices: {haveDiscount: false, price: "412,99"}, rating: 1, tags: {OurProducts: false, Useful: false, NonGMO: true}},
                {id: 15, type:'Газированные напитки', img:`/img/drinks/id${() => this.id}.jpg`, brand: "Coca-Cola", weight: '330 мл', name: "Напиток Coca-Cola Original газированный, 330мл", prices: {haveDiscount: true, price: {withDiscount: "310,99", withoutDiscount: '499,99'}}, rating: 4, tags: {OurProducts: false, Useful: false, NonGMO: true}},
            ]
        },
        pastry: {
            name: 'Кондитерские изделия',
            items: [
                {id: 16, type:'Булочки', img:`/img/pastry/id${() => this.id}.jpg`, brand: "Золотой колос", weight: '75 г', name: "Булочка Золотой колос Венская, 75г", prices: {haveDiscount: false, price: "12,99"}, rating: 4, tags: {OurProducts: true, Useful: false, NonGMO: true}},
                {id: 17, type:'Булочки', img:`/img/pastry/id${() => this.id}.jpg`, brand: "Аютинский хлеб", weight: '200 г', name: "Булочки Аютинский хлеб Домашние с вишней, 200г", prices: {haveDiscount: true, price: {withDiscount: "110,99", withoutDiscount: '199,99'}}, rating: 5, tags: {OurProducts: true, Useful: false, NonGMO: true}},
            ]
        }, 
        teaCoffee: {
            name: 'Чай, кофе',
            items: [
                {id: 18, type:'Чай', img:`/img/teaCoffee/id${() => this.id}.jpg`, brand: "Maitre de The", weight: '100 г', name: "Чай Maitre de The Люкс смесь чая черного среднелистового индийского, цейлонского, кенийского и китайского, 100г", prices: {haveDiscount: false, price: "322,99"}, rating: 5, tags: {OurProducts: false, Useful: true, NonGMO: true}},
                {id: 19, type:'Кофе', img:`/img/teaCoffee/id${() => this.id}.jpg`, brand: "НЕСКАФЕ", weight: '900 г', name: "Кофе Нескафе Голд растворимый сублимированный с добавлением натурального жареного молотого кофе, 900г", prices: {haveDiscount: true, price: {withDiscount: "2700,99", withoutDiscount: '3500,99'}}, rating: 5, tags: {OurProducts: true, Useful: false, NonGMO: true}},
            ]
        }, 
        grocery: {
            name: 'Бакалея',
            items: [
                {id: 20, type:'Макароны', img:`/img/grocery/id${() => this.id}.jpg`, brand: "Rummo", weight: '1кг', name: "ЧМакароны Rummo Спагетти Гросси №5, 1кг", prices: {haveDiscount: false, price: "322,99"}, rating: 4, tags: {OurProducts: false, Useful: false, NonGMO: true}},
                {id: 21, type:'Макароны', img:`/img/grocery/id${() => this.id}.jpg`, brand: "Metro Chef", weight: '3кг', name: "METRO Chef Макароны спагетти, 3кг", prices: {haveDiscount: true, price: {withDiscount: "270,99", withoutDiscount: '350,99'}}, rating: 5, tags: {OurProducts: true, Useful: false, NonGMO: true}},
            ]
        }, 
        healthly: {
            name: 'Здоровое питание',
            items: [
                {id: 22, type:'Фиточай', img:`/img/healthly/id${() => this.id}.jpg`, brand: "Фабрика природы", weight: '100 г', name: "Напиток чайный Фабрика природы Полезный гречишный с кокосом, 100г", prices: {haveDiscount: false, price: "522,99"}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 23, type:'Фиточай', img:`/img/healthly/id${() => this.id}.jpg`, brand: "Фабрика природыf", weight: '100 г', name: "Напиток чайный Фабрика природы Полезный гречишный с манго, 100г", prices: {haveDiscount: true, price: {withDiscount: "270,99", withoutDiscount: '350,99'}}, rating: 2, tags: {OurProducts: true, Useful: true, NonGMO: true}},
            ]
        },
        babyFood: {
            name: 'Детское питание',
            items: [
                {id: 26, type:'Вода', img:`/img/babyFood/id${() => this.id}.jpg`, brand: "ФрутоНяня", weight: '330 мл', name: "Вода детская ФрутоНяня питьевая негазированная, 330мл", prices: {haveDiscount: false, price: "52,99"}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 27, type:'Пюре', img:`/img/babyFood/id${() => this.id}.jpg`, brand: "GERBER", weight: '90 г', name: "Пюре фруктовое Gerber Спелое манго с 6 месяцев, 90г", prices: {haveDiscount: true, price: {withDiscount: "70,99", withoutDiscount: '120,99'}}, rating: 5, tags: {OurProducts: false, Useful: true, NonGMO: true}},
            ]
        },
        babyFood: {
            name: 'Детское питание',
            items: [
                {id: 26, type:'Вода', img:`/img/babyFood/id${() => this.id}.jpg`, brand: "ФрутоНяня", weight: '330 мл', name: "Вода детская ФрутоНяня питьевая негазированная, 330мл", prices: {haveDiscount: false, price: "52,99"}, rating: 4, tags: {OurProducts: true, Useful: true, NonGMO: true}},
                {id: 27, type:'Пюре', img:`/img/babyFood/id${() => this.id}.jpg`, brand: "GERBER", weight: '90 г', name: "Пюре фруктовое Gerber Спелое манго с 6 месяцев, 90г", prices: {haveDiscount: true, price: {withDiscount: "70,99", withoutDiscount: '120,99'}}, rating: 5, tags: {OurProducts: false, Useful: true, NonGMO: true}},
            ]
        },
    },
    NonFood: {
        petProducts: {
            name: 'Зоотовары',
            items: [
                {id: 24, type:'Корм для кошек', img:`/img/petProducts/id${() => this.id}.jpg`, brand: "Whiskas", weight: '14кг', name: "Корм сухой Whiskas Аппетитное ассорти Вкусные подушечки для взрослых кошек с нежным паштетом с говядиной, 13.8кг", prices: {haveDiscount: false, price: "5220,99"}, rating: 3},
                {id: 25, type:'Корм для кошек', img:`/img/petProducts/id${() => this.id}.jpg`, brand: "Perfect Fit", weight: '650 г', name: "Корм сухой Perfect Fit Junior для котят с курицей, 650г", prices: {haveDiscount: true, price: {withDiscount: "270,99", withoutDiscount: '350,99'}}, rating: 5},
            ]
        },
        household: {
            name: 'Непродовольственные товары',
            items: [
                {id: 28, type:'Мыло', img:`/img/household/id${() => this.id}.jpg`, brand: "SYNERGETIC", weight: '5л', name: "Мыло жидкое Synergetic Миндальное молочко гипоаллергенное, 5л", prices: {haveDiscount: false, price: "999,99"}, rating: 5},
                {id: 29, type:'Корм для кошек', img:`/img/household/id${() => this.id}.jpg`, brand: "METRO PROFESSIONAL", weight: '10кг', name: "METRO PROFESSIONAL Уголь высший сорт, 10кг", prices: {haveDiscount: true, price: {withDiscount: "899,99", withoutDiscount: '999,99'}}, rating: 4},
            ]
        }
    }
}