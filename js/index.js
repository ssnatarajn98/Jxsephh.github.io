const url = 'https://api.giphy.com/v1/gifs/trending?';
const apiKey = 'api_key=tvATh5CFvKA1cSqBhf3l9c1nBIDYdsV9&fmt=json';
const container = document.getElementById('container');
let gif_array;
fetch(url+apiKey, {
    method: 'get'
}).then(function(response) {
  response.json().then(result => {
  gif_array = result.data;
  });
}).catch(function(err) {
    console.error(err);
});

function loopThroughGifs(array) {
  array.forEach((gif) => {
    container.innerHTML += `<img height="480" width="480" src="${gif.images.original.url}">`;
  });
}

let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
console.log((arr.length))
//var static_data = [[1,]]
console.log(arr[0]);
$(document).ready(function(){
    var count = 0
    $(".buddy").on("swiperight",function(){
      count = count + 1;
      arr[count] = 1;
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $(".avatar").css("background-image", `url(${gif_array[(count+1)].images.original.url})`);
      $(this).append('<div class="status like">Like!</div>');
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });
  $(".buddy").on("swipeleft",function(){
     count = count +1;
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $(".avatar").css("background-image", `url(${gif_array[(count+1)].images.original.url})`);
    $(this).append('<div class="status dislike">Dislike!</div>');
    $(this).append('<div class="status like">Like!</div>');
    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-right rotate-left').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-right rotate-left').fadeIn(400);
     }
  });

});
function DrawTable(){
  var x = document.getElementById("container");
  x.style.visibility = "hidden  ";
  var table = document.getElementById("tableDisp");
  x.style.display = "block";
  var headerx = table.insertRow(-1);
  var cellhead = headerx.insertCell(0)
  cellhead.innerHTML="NAME";
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "David";
  var row2 = table.insertRow(-1);
  var cell2 = row2.insertCell(0);
  cell2.innerHTML = "Samanatha";
  var row3 = table.insertRow(-1);
  var cell3 = row3.insertCell(0);
  cell3.innerHTML = "Carly";
  var row4 = table.insertRow(-1);
  var cell4 = row4.insertCell(0);
  cell4.innerHTML = "Mike";
  var row5 = table.insertRow(-1);
  var cell5 = row5.insertCell(0);
  cell5.innerHTML = "Hannah";


}
console.log(arr)
function getBinary(){

  var resultx = 0;
  for(i=0;i<20;i++){
    resultx += (2^i) * arr[i];
  }
  return resultx

};
