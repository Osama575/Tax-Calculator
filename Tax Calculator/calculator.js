var basic;
var housing;
var transport;
var grossSalary;
var allowance;
var pension;
var annualPension;
var totalGross;
var nhf;
var annualNhf;
var cra;

function taxCalculate () {
  grossSalary = document.getElementById("grossPay").value;
  if ($("input[id= 'nhf' ]").is(':checked') === true) {
      basic = document.getElementById("basicSalary").value;
  }else{
    basic = document.getElementById("basics").value;
  }

  housing = document.getElementById("housings").value;
  transport = document.getElementById("transports").value;
  allowance = document.getElementById("allowances").value;


  if ($("input[id= 'pension' ]").is(':checked') === true) {
    pension = (parseFloat(basic) + parseFloat(housing) + parseFloat(transport)) * 0.08 ;
    annualPension = pension * 12;
  } else {
    pension = 0;
    annualPension = 0;
  }


  nhf = basic * 0.25;
  annualNhf = nhf * 12;

  totalGross = parseFloat(grossSalary) + parseFloat(allowance);


  var annualTotalGross = totalGross * 12;

  cra = (annualTotalGross * 0.2) + 200000

  var taxableIncome = annualTotalGross - annualPension - annualNhf - cra;


    var rate1 = 300000;
    var rate2 = 500000;
    var rate3 = 1600000;
    var rate4 = 3200000;
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    var result4 = 0;
    var result5 = 0;
    var result6 = 0;
    var result7 = 0;

    var i = 0;
  //tax rate
  if (i === 0 && taxableIncome > rate1) {
    result1 = 0.07 * rate1;
    taxableIncome -= rate1;
    i++;
    if (i === 1 && taxableIncome > rate1) {
      result2 = 0.11 * rate1;
      taxableIncome -= rate1;
      i++;
      if (i === 2 && taxableIncome > rate2) {
        result3 = 0.15 * rate2;
        taxableIncome -= rate2;
        i++;
        if (i === 3 && taxableIncome > rate2) {
          result4 = 0.19 * rate2;
          taxableIncome -= rate2;
          i++;
          if (i === 4 && taxableIncome > rate3) {
            result5 = 0.21 * rate3;
            taxableIncome -= rate3;
            i++;
            if (i === 5 && taxableIncome > rate4) {
              result6 = 0.24 * rate4;
              taxableIncome-= rate4;
              i++;
              if (i === 6 && taxableIncome > 0) {
                result7 = 0.24 * taxableIncome;
              }
            } else {
              result6 = 0.24 * taxableIncome;
            }
          }else {
            result5 = 0.21 * taxableIncome;
          }
        } else {
          result4 = 0.19 * taxableIncome;
        }
      } else {
        result3= 0.15 * taxableIncome;
      }
    } else {
      result2 = 0.11 * taxableIncome;
    }
  } else {
    result1 = 0.7 * taxableIncome
  }

var yearlyTax = result1 + result2 + result3 + result4 + result5 + result6 + result7;
var monthlyTax = Math.round(yearlyTax / 12);

$("#resultDisplay").text("Your Monthly Tax Payable is #" + monthlyTax);

$("#calculatorForm").css("display", "none");
$("#results").css("display", "block");
 }


// checks state of checkbox
function checkboxChecker () {
var checkAllowance = $("input[id= 'allowance' ]").is(':checked');
var checkNhf = $("input[id= 'nhf' ]").is(':checked');
var checkPension = $("input[id= 'pension' ]").is(':checked');

if (checkNhf === false) {
  $("#nhfForm").css("display", "none");
  basic = document.getElementById("basicSalary").value = 0;

}else{
    $("#nhfForm").css("display", "block");
}

if (checkAllowance === true) {
  $("#allowanceForm").css("display", "block");
  totalGross = grossSalary + allowance;

}else{
  $("#allowanceForm").css("display", "none");
  totalGross = grossSalary;
  document.getElementById("allowances").value = 0;
}

if (checkPension === true) {
  $("#pensionControlled").css("display", "block");
  if (checkNhf === true)
  {
    $("#basic").css("display", "none");
  } else {
    $("#basic").css("display", "block");
  }
}else{
  $("#pensionControlled").css("display", "none");
  basic = document.getElementById("basics").value = 0;
  document.getElementById("housings").value = 0;
  document.getElementById("transports").value = 0;

}

}

function reCalculateTax() {
  $("#calculatorForm").css("display", "block");
  $("#results").css("display", "none");
}


document.getElementById("fullReport").onclick = function () {
        href = "www.ipas.com.ng/contact/";

}
//event listeners
$(".cbox").click(function(){
checkboxChecker();
});

$("#calcTax").click(function(){
taxCalculate();
});

$("#reCalcTax").click(function(){
reCalculateTax();
});
