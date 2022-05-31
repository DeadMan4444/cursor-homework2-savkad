"use strict";

let change_N;
do{
    change_N = Number(prompt(`Введіть зміну N` ));

} while (!change_N || !Number.isInteger(change_N) );

let change_M;
do{
    change_M = Number(prompt(`Введіть зміну M` ));
    
} while (!change_M || !Number.isInteger(change_M) );

let change_B;
let sum=0;
if(confirm("Чи потрібно пропускати парні числа?")) {
    for(change_B=change_N; change_B<=change_M; change_B++)
    if (change_B % 2 !== 0)
    sum += change_B;
    document.writeln("<br>"+sum);
}else {
    for(change_B=change_N; change_B<=change_M; change_B++)
    sum += change_B;
    document.writeln("<br>"+sum);
}
