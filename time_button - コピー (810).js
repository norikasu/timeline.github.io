function exec810(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output810").innerHTML=ToDay;//指定した場所に表示させる
  }

      function changeBoxColor262( newColor ) {
        document.getElementById('c035').style.backgroundColor = newColor;
      }
