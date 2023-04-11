'use strict'

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}


exitMain:
for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue exitMain;
    }

    console.log(i); 
}