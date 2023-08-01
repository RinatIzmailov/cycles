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

myArray2.forEach((element) => {
    console.log(element)
})


                            // WHILE ( Выполняет блок кода пока условие правдиво)

let r = 0

while (r < 7) {
    console.log(r)
    r++
}    
// Код может выполняться бесконечно если условие верно или не выполниться ниразу

// Пример бесконечного цикла
let t = 0
while ( t < 5) {
    console.log(t)
}


                            // DO WHILE ВЫПОЛНЯЕТСЯ ХОТЯ БЫ ОДИН РАЗ

let y = 0

do {
    console.log(y)
    y++
} while (y < 5)

                            // FOR IN используя этото цикл можно перебрать все свойства объекта

for ( key in Object) {
    // Действия с каждым свойством объекта
    // Значение свойства - Object[key]
}              

// key -название свойства в объекте
// Object в данном случае название переменной в котой содержится Объект

const myObject1 = {
    x: 10,
    y: false,
 }

for ( const key in myObject1) {
    console.log(key, myObject1[key])
}
// На выходе получим   x: 10, y: false, z: 'asd'
    
                            // FOR OF

const myString = 'Rinat'

for (const letter of myString) {
    console.log(letter)
}

//'Rinat' - строка (любое значение эдементы которого можно перебирать (итерировать))
// letter - символ в строке

// for of можно использовать для массивов

const myArray0 = [1, 2, 3, 4, 5]

for (const element of myArray0) {
    console.log(element)
}
    
                // Но лучше для массивов всетаки forEach!!!

const myArray10 = [1, 2, 3, 4, 5]
myArray10.forEach(element => {
    console.log(element)
})


                // for of не для объектов!!! так как объекты не итерируемые елементы в js 