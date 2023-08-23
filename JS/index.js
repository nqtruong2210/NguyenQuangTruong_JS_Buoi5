//EXCERCISE-1
function scoreArea(areaValue){
    if(areaValue === 'A'){
        return 2;
    }else if(areaValue === 'B'){
        return 1;
    }else if(areaValue === 'C'){
        return 0.5
    }else{
        return 0;
    }
}
 
function scoreObject(objectValue){
    if (objectValue === '1'){
        return 2.5;
    }else if(objectValue === '2'){
        return 1.5;
    }else if(objectValue === '3'){
        return 1;
    }else{
        return 0;
    }
}

function scoreGrade(score1,score2,score3){
    return score1 + score2 + score3;
}

document.getElementById('btn__result').onclick = function(){
    var benchMark = +document.getElementById('bench__mark').value;
    var score1 = +document.getElementById('grade1').value;
    var score2 = +document.getElementById('grade2').value;
    var score3 = +document.getElementById('grade3').value;
    var areaValue = document.getElementById('area').value;
    var objectValue = document.getElementById('object').value;
    var totalScore = scoreArea(areaValue) + scoreObject(objectValue) + scoreGrade(score1,score2,score3);
    var printHTML = ' ';
    

    if(score1 === 0 || score2 === 0 || score3 === 0){
        printHTML = 'Rất tiếc! Bạn đã bị điểm liệt. Bạn đã thi rớt.'
    }else if(benchMark > 0 && benchMark <= 30){
        if(totalScore >= benchMark){
            printHTML = `
            Chúc mừng! Bạn đã thi đậu.<br>
            Điểm của bạn là: ${totalScore}
            `
        }else{
            printHTML = `
            Rất tiếc! Bạn đã thi rớt.<br>
            Điểm của bạn là: ${totalScore}
            `
        }
    }else{
        alert('Vui lòng nhập điểm chuẩn từ 0 đến 30');
        return;
    }

    document.getElementById('result').innerHTML = printHTML;
}

//EXCERCISE-2
//Input: Tên, số KM
//Output: Tính và xuất tiền phải trả
var numberFormat = new Intl.NumberFormat('vi-VN',{
    style: 'currency',
    currency: 'VND',
    currencyDisplay: 'code',
});
  
document.getElementById('btn__kw').onclick = function(){
    const VALUE_1KMTO50KM = 500;
    const VALUE_51KMTO100KM = 650;
    const VALUE_101KMTO200KM = 850;
    const VALUE_201KMTO350KM = 1100;
    const VALUE_FROM351KW = 1300; //Từ 351KW trở đi

    var name = document.getElementById('name').value;
    var kilowatts = +document.getElementById('kilowatts').value;
    var totalKW;

    if(kilowatts <= 50){
        totalKW = kilowatts * VALUE_1KMTO50KM;
    }else if(kilowatts > 50 && kilowatts <= 100){
        totalKW = 50 * VALUE_1KMTO50KM + (kilowatts - 50) * VALUE_51KMTO100KM;
    }else if(kilowatts > 100 && kilowatts <= 200){
        totalKW = 50 * VALUE_1KMTO50KM + 50 * VALUE_51KMTO100KM + (kilowatts - 100) * VALUE_101KMTO200KM;
    }else if(kilowatts > 200 && kilowatts <= 350){
        totalKW = 50 * VALUE_1KMTO50KM + 50 * VALUE_51KMTO100KM + 100 * VALUE_101KMTO200KM + (kilowatts - 200) * VALUE_201KMTO350KM;
    }else if(kilowatts > 350){
        totalKW = 50 * VALUE_1KMTO50KM + 50 * VALUE_51KMTO100KM + 100 * VALUE_101KMTO200KM + 150 * VALUE_201KMTO350KM + (kilowatts - 350) * VALUE_FROM351KW;
    }else{
        alert('Vui lòng nhập số KW tiêu thụ!!!');
        return;
    }

document.getElementById('result__kw').innerHTML =  `
    Họ tên chủ hộ: ${name} <br>
    Tổng số tiền điện phải trả: ${numberFormat.format(totalKW)};
    `
}

//EXCERCISE-3

document.getElementById('btn__tax').onclick = function(){
    //Input: Tên, Tổng thu nhập năm, Số người phụ thuộc.
    //Output: Thu nhập chịu thuế
    const TAX_1TO60 = 0.05;
    const TAX_61TO120 = 0.1;
    const TAX_121TO210 = 0.15;
    const TAX_211TO384 = 0.2;
    const TAX_385TO624 = 0.25;
    const TAX_625TO960 = 0.3;
    const TAX_FORM960 = 0.35; //Từ 960 triệu trở đi

    var nameTax = document.getElementById('nameTax').value;
    var income = +document.getElementById('income').value;
    var people = +document.getElementById('people').value;
    var personIncomeTax = 0;

    var incomeTax = income - 4000000 - (1600000 * people);
    if (incomeTax >= 5600000) {
        if (incomeTax <= 60000000) {
            personIncomeTax += incomeTax * TAX_1TO60;
        } else if (incomeTax <= 120000000) {
            personIncomeTax += incomeTax * TAX_61TO120;
        } else if (incomeTax <= 210000000) {
            personIncomeTax += incomeTax * TAX_121TO210;
        } else if (incomeTax <= 384000000) {
            personIncomeTax += incomeTax * TAX_211TO384;
        } else if (incomeTax <= 624000000) {
            personIncomeTax += incomeTax * TAX_385TO624;
        } else if (incomeTax <= 960000000) {
            personIncomeTax += incomeTax * TAX_625TO960;
        } else if (incomeTax > 960000000) {
            personIncomeTax += incomeTax * TAX_FORM960;
        }
        } else {
    alert('Dữ liệu không hợp lệ');
    }

    document.getElementById('result__tax').innerHTML = `
    Tên: ${nameTax}<br>
    Tổng tiền thuế: ${personIncomeTax}
    `

    // if(income < 60000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_1TO60) / 100;
    // }else if(income > 60000000 && income < 120000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_61TO120) / 100;
    // }else if(income > 120000000 && income < 210000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_121TO210) / 100;
    // }else if(income > 210000000 && income < 384000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_211TO384) / 100;
    // }else if(income > 384000000 && income < 624000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_385TO624) / 100
    // }else if(income > 624000000 && income < 960000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_625TO960) / 100;
    // }else if(income > 960000000){
    //     totalTax = ((income - 4000000 - people * 1600000) / TAX_FORM960) / 100;
    // }

    // if (income < 60000000) {
    //     totalTax = 
    //     (income * TAX_1TO60) - (people * 1600000);
    // } else if (income >= 60000000 && income < 120000000) {
    //     totalTax = 
    //     (60000000 * TAX_1TO60 + (income - 60000000) * TAX_61TO120) - (people * 1600000);
    // } else if (income >= 120000000 && income < 210000000) {
    //     totalTax = 
    //     (60000000 * TAX_1TO60 + 60000000 * TAX_61TO120 + (income - 120000000) * TAX_121TO210) - (people * 1600000);
    // } else if (income >= 210000000 && income < 384000000) {
    //     totalTax = 
    //     (60000000 * TAX_1TO60 + 60000000 * TAX_61TO120 + 90000000 * TAX_121TO210 + (income - 210000000) * TAX_211TO384) - (people * 1600000);
    // } else if (income >= 384000000 && income < 624000000) {
    //     totalTax = 
    //     (60000000 * TAX_1TO60 + 60000000 * TAX_61TO120 + 90000000 * TAX_121TO210 + 174000000 * TAX_211TO384 + (income - 384000000) * TAX_385TO624) - (people * 1600000);
    // } else if (income >= 624000000 && income < 960000000) {
    //     totalTax = 
    //     (60000000 * TAX_1TO60 + 60000000 * TAX_61TO120 + 90000000 * TAX_121TO210 + 174000000 * TAX_211TO384 + 240000000 * TAX_385TO624 + (income - 624000000) * TAX_625TO960) - (people * 1600000);
    // } else {
    //     totalTax = 
    //     (60000000 * TAX_1TO60 + 60000000 * TAX_61TO120 + 90000000 * TAX_121TO210 + 174000000 * TAX_211TO384 + 240000000 * TAX_385TO624 + 336000000 * TAX_625TO960 + (income - 960000000) * TAX_FORM960) - (people * 1600000);
    // }
}

// EXERCISE-4
    var ex4Btn = document.getElementById('ex4__btn');
    var connect = document.getElementById('ex4__connect');
    var option = document.getElementById('option');

    const NHA_DAN = 'ND';
    const DOANH_NGHIEP = 'DN';
    const CONNECT_COST_10 = 7.5;
    const CONNECT_COST_UP_10 = 15;

    option.addEventListener('change', function () {
    if (option.value === DOANH_NGHIEP) {
        connect.style.display = 'block';
    } else if (option.value === NHA_DAN) {
        connect.style.display = 'none';
    }
    });

ex4Btn.addEventListener('click', function () {
    let customerCode = document.getElementById('ex4__customer-code').value;
    let channelNumber = document.getElementById('ex4__channel').value * 1;
    let connectNumber = document.getElementById('ex4__connect').value * 1;
    var optionValue = document.getElementById('option').value;
    let cableCost = 0;

     if (optionValue === NHA_DAN) {
        cableCost += 4.5 + 20.5 + 7.5 * channelNumber;
    }else if (optionValue === DOANH_NGHIEP) {
    if (connectNumber <= 10) {
        cableCost += 15 + 75 + 50 * channelNumber;
    }else if (connectNumber > 10) {
        cableCost += 15 + 75 + 5 * (connectNumber - 10) + 50 * channelNumber;
    }
  }
document.getElementById('ex4__result').innerHTML = `Mã khách hàng: ${customerCode} - Tiền Cáp: ${cableCost}$`;
});
