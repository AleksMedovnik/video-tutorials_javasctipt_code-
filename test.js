'use strict'

// check_target = False
// for i in range(3):
//     for j in range(3):
//         target = int(input(f'TR: {i}; TD: {j}: '))
//         if target == 10:
//             check_target = True
//             print("Цель поражена!")
//             break 
//     if check_target:
//         break
// else:
//     print('Ты - лузер!')

exit:
for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        let target = +prompt(`TR: ${i}; TD: ${j}`);
        if (target === 0){
            alert("Exit");
            break exit;
        }
    }
} 
