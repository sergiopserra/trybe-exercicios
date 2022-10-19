// 1ª QUESTÃO - NOVA PESSOA CONTRATADA
// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };
// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };
// console.log(newEmployees(employeeGenerator));



// 2ª QUESTÃO - SORTEADOR DE LOTERIA
// const verifyNumbers = (drawnNumber, chosenNumber) => drawnNumber === chosenNumber;
// const drawnResult = (chosenNumber, callback) => {
//   const drawnNumber = Math.ceil(Math.random()*5);
//   return callback(drawnNumber, chosenNumber) ? "Tente Novamente" : "Parabéns você ganhou";
// }
// console.log(drawnResult(2, verifyNumbers));



// 3ª QUESTÃO - CORRETOR AUTOMÁTICO DE EXAME
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const verifyAnswers = (correct, marked) => {
//   if (correct === marked) {
//     return  1;
//   } else if (marked === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// }
// const pontuation = (correct, marked, callback) => {
//   let result = 0;
//   for (let index = 0; index < correct.length; index +=1) {
//     result += callback(correct[index], marked[index]);
//   }
//   return result;
// }
// console.log(pontuation(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));
