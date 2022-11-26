//ボタンを押すごとに画面を切り替える関数
$(function () {

    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });



//選択ボタンデータを配列に入れてカウントする関数
      var countA;
      var countS;
      var countK;
      var countE;
      var box =[];
    $(".btn").each(function(){
      $(this).on('click',function(){
        var value = $(this).data("value");
         box.push(value);

        countA = box.filter(function(x){
                        return x === "a"
                    }).length;
        countS = box.filter(function(y){
                        return y === "s"
                    }).length;
        countK = box.filter(function(z){
                        return z === "k"
                    }).length
        countE = box.filter(function(w){
                        return w === "e"
                    }).length
                  
      });
    });

//結果を出力する関数
    $('.end').on('click',function(){
let achiver_per = Math.floor(((countA / 15) * 100) * Math.pow( 10, 1)) / Math.pow(10, 1);
let social_per  = Math.floor(((countS / 15) * 100) * Math.pow( 10, 1)) / Math.pow(10, 1);
let killer_per  = Math.floor(((countK / 15) * 100) * Math.pow( 10, 1)) / Math.pow(10, 1);
let explor_per  = Math.floor(((countE / 15) * 100) * Math.pow( 10, 1)) / Math.pow(10, 1);
     var result_mesage1 = "アチーバー要素　　　：　"  + achiver_per + "％" + "<br>" +
                          "ソーシャライザー要素：　"  + social_per  + "％" + "<br>" +
                          "キラー要素　　　　　：　"  + killer_per  + "％" + "<br>" +
                          "エクスプローラー要素：　"  + explor_per  + "％"; 
     $('#answer_01').css("display","")
     $('#answer_01 h4').html(result_mesage1);
  });

  });


  /*
  if( countA > countS) {
    $('#answer_01').css("display",""); //回答1
  } else {
    $('#answer_02').css("display","");//回答2
}
*/