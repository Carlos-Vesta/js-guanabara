/**
 * 9 - Verificação de Temperatura
Crie um programa que determine se o clima é quente ("Quente") ou frio ("Frio") com base na temperatura fornecida em graus Celsius.
Considere 30°C como temperatura mínima para clima quente.
 */

var grausCelsius = Number(prompt("Digite o valor da temperatura em graus celsius: "))

var clima = 
// TEMPERATURAS ALTAS
grausCelsius >= 60 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA ABSURDAMENTE QUENTE!🔥 PERIGO DE MORTE INSTANTANEA!💀 >>` :
grausCelsius >= 50 & grausCelsius <= 59 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA EXTREMAMENTE QUENTE!🥵 >>` :
grausCelsius >= 30 & grausCelsius <= 49 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA QUENTE!🪭 >>` :
grausCelsius >= 20 & grausCelsius <= 29 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA MODERADO!😎 >>` :

// TEMPERATURAS BAIXAS
grausCelsius >= 10 & grausCelsius <= 19 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA BAIXO!🤧 >>` :
grausCelsius >= 0 & grausCelsius <= 9 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA FRIO!☃️ >>` :
grausCelsius < 0 & grausCelsius >= -20 ? ` A temperartura é de ${grausCelsius}°C. \n<< CLIMA EXTREMAMENTE FRIO!☃️ >>` :
`A temperartura é de ${grausCelsius}°C. \n<< CLIMA ABSURDAMENTE FIO!❄️ PERIGO DE MORTE INSTANTANEA!🥶 >>`


alert(clima)
