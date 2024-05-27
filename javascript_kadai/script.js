// 必要なHTML要素の取得
  const ded = (document.getElementById('ded'));
  const incomeTax = (document.getElementById('income-tax'));
  const formulaButton = (document.getElementById('formula-button'));
  let incomeResultElm = (document.getElementById('incomeResult'));
  let dedResultElm = (document.getElementById('dedResult'));

// 所得税
  function calcIncomeTax (){
    let input2 = parseInt(document.getElementById('severance-pay').value);
    
    // 正の数以外が入力されたら知らせる
        try {
          //正の数値かどうかをチェックする正規表現
          const isValid = /^\d+(\.\d+)?$/.test(input2);
          console.log(isValid);
          if (!isValid) {
            throw new Error("半角の正数のみを入力してください");
          }

          // //数値として評価できるかチェック
          // const num = parseFloat(input2);
          //  if (isNaN(num) || num <= 0) {
          //    throw new Error("半角の正数のみを入力してください");
          //  }
          //  console.log("入力は正の数値です", num);
           
        } catch (error) {
            console.log('--- output error ---')
            console.log(error.name)
            console.log(error.message)
            alert(error.message);
        }

    // resultの初期化
    let result = 0;
    
  // 所得税
    if (input2 > 4000) {
        result = input2 * 0.45; 
      } else if (input2 > 1800) {
        result = input2 * 0.40;
      } else if (input2 > 900) {
        result = input2 * 0.33;
      } else if (input2 > 695) {
        result = input2 * 0.23; 
      } else if (input2 > 330) {
        result = input2 * 0.20;
      } else if (input2 > 195) {
        result = input2 * 0.10;
      } else { 
        result = input2 * 0.05;
      } 
   
    return (Math.floor(result));
  }     
  
  // 退職金控除額
  function calcDed (){
    let input1 = parseInt(document.getElementById('length-of-service').value);

     // 正の数以外が入力されたら知らせる
     try {
      //正の数値かどうかをチェックする正規表現
      const isValid = /^\d+(\.\d+)?$/.test(input1);
      console.log(isValid);
      if (!isValid) {
        throw new Error("半角の正数のみを入力してください");
      }

      // //数値として評価できるかチェック
      // const num = parseFloat(input1);
      //  if (isNaN(num) || num <= 0) {
      //    throw new Error("半角の正数のみを入力してください");
      //  }
      //  console.log("入力は正の数値です", num);
       
    } catch (error) {
        console.log('--- output error ---')
        console.log(error.name)
        console.log(error.message)
        alert(error.message);
    }

    // resultの初期化
    let result = 0;

     if (input1 <= 20) { 
       result = 40 * input1 ;
     } else if (input1 > 20 ) {
       result = 800 + 70 * (input1 - 20);
     } else {
       result = 80;
     }

    return (Math.floor(result));
     
  }
    
  // ボタンを押すと計算結果を出すコード
 formulaButton.addEventListener('click',() => {
      setTimeout(() => {
      if (!incomeTax.checked && !ded.checked){
        alert('チェックがついてません。');
        return;
      } 
      if (incomeTax.checked){
        incomeResultElm.value = calcIncomeTax();      
      } 
      if (ded.checked){
        dedResultElm.value = calcDed();
      }
      if (incomeTax.checked && ded.checked ) {
        incomeResultElm.value = calcIncomeTax(); 
        dedResultElm.value = calcDed();
      }
    }, 2000);
  });


