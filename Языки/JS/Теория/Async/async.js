console.log('Start');

console.log('Start 2');

setTimeout(() => console.log('2 sec'), 2000);

setTimeout(() => console.log('5 sec'), 5000);

console.log('end');

// eventLoop
 

/**
 * Call Stack | Сторонний Api
 *            | 
 *            |
 *            |
 *            |
 * ------------------------
 * Callback
 */

 setTimeout(() => console.log('0 sec'), 0);

 console.log('end 2');

 for (let i = 0; i < 10000; i++){
    console.log(i);
 }

 // Вывод: Ассинхронный код выполниться только после всего синхр
