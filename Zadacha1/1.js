
function temp(a) {
    return (Math.round((9/5) * a + 32));
}

const Celsii = + prompt("Введите температуру Цельсия:");

alert(`В переводе с Цельций на Фаренгейты получается следующее значение: ${temp(Celsii)} `);