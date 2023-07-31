                    // Циклы

// Как записать увеличение числа на 1 несколько раз (пусть будет 5 раз)

let i = 0

console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++


// На выходе будет : 0,1,2,3,4

// Второй пример когда надо перебрать  и вывести все элементы массива (надо производить действия с каждым элементом)

const myArray = [true, 'qwe', 10]
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

// Пример три. Переборвсех свойств объекта без цикла

const myObject = {
    x: 10,
    y: false,
    z: 'asd'
}

console.log(myObject.x)
console.log(myObject.y)
console.log(myObject.z)


                            // Цикл for

for ( let i = 0; i < 5; i++) {
    console.log(i)   // На выходе будет : 0,1,2,3,4
}

//  Не рекомендуется использовать цикл фор для массива. Лучше использовать функции высшего порядка массивов
// Такие как forEach, map, reduce.


// Допустим надо перебрать все элементы массива и вывести их в консоль
const myArray1 = [1,2,3,4,5]

for (let i = 0; i <= myArray1.length; i++) {
    console.log([i])
}

// Рекомендовано использовать метод forEach

const myArray2 = [1,2,3,4,5]

myArray2.forEach((element, index) => {
    console.log(element)
})

    