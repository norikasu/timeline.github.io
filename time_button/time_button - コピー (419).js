function exec419(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output419").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor136( newColor ) {
    document.getElementById('a019').style.backgroundColor = newColor;
  }
