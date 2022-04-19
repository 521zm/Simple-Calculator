// 所有按钮
let buttonObjs = document.getElementsByTagName("button");
// 结果框
let resultObj = document.getElementById("result");
// AC 按钮
let acObj = document.getElementById("ac");
// = 按钮
let getResultObj = document.getElementById("getResult");
for (const buttonObj of buttonObjs) {
    if (!['AC', '='].includes(buttonObj.innerHTML)) {
      buttonObj.addEventListener('click', () => {
        resultObj.innerHTML += buttonObj.innerHTML;
      })
    }
  }
  
getResultObj.addEventListener('click', () => {
    resultObj.innerHTML = eval(resultObj.innerHTML);
  })
  acObj.addEventListener('click', () => {
    resultObj.innerHTML = '';
  })