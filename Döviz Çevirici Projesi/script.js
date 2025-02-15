const innerFirst = document.getElementById('innerFirst');
const innerSecond = document.getElementById('innerSecond');

let count = document.getElementById('count');
const equal = document.getElementById('equal');

const exchangeRate = document.getElementById('exchangeRate');

updateRate();

function updateRate(){ 
    fetch(`https://v6.exchangerate-api.com/v6/0fd5559097c452ca6fc688ec/latest/${innerFirst.value}`).then((res)=>res.json()).then((data)=>{
        const rate =data.conversion_rates[innerSecond.value];

        exchangeRate.textContent=`1 ${innerFirst.value} = ${rate} ${innerSecond.value}`;
        equal.textContent=(count.value * rate).toFixed(2);
    });
}

innerFirst.addEventListener('change',updateRate);
innerSecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);