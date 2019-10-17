let $dot = $('.dot');

// rendering time
function renderTime(pos,t) {
  if(t === 1){
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-a`).addClass('off');
    $(`${pos} .seg-d`).addClass('off');
    $(`${pos} .seg-e`).addClass('off');
    $(`${pos} .seg-f`).addClass('off');
    $(`${pos} .seg-g`).addClass('off');
  } else if(t == 2){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-e`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
    $(`${pos} .seg-c`).addClass('off');
    $(`${pos} .seg-f`).addClass('off');
  } else if(t == 3){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
    $(`${pos} .seg-e`).addClass('off');
    $(`${pos} .seg-f`).addClass('off');
  } else if(t == 4){
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-f`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
    $(`${pos} .seg-a`).addClass('off');
    $(`${pos} .seg-d`).addClass('off');
    $(`${pos} .seg-e`).addClass('off');
  } else if(t == 5){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-f`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
    $(`${pos} .seg-b`).addClass('off');
    $(`${pos} .seg-e`).addClass('off');
  } else if(t == 6){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-e`).removeClass('off');
    $(`${pos} .seg-f`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
    $(`${pos} .seg-b`).addClass('off');
  } else if(t == 7){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).addClass('off');
    $(`${pos} .seg-e`).addClass('off');
    $(`${pos} .seg-f`).addClass('off');
    $(`${pos} .seg-g`).addClass('off');
  } else if(t == 8){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-e`).removeClass('off');
    $(`${pos} .seg-f`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
  } else if(t == 9){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-f`).removeClass('off');
    $(`${pos} .seg-g`).removeClass('off');
    $(`${pos} .seg-e`).addClass('off');
  } else if(t == 0){
    $(`${pos} .seg-a`).removeClass('off');
    $(`${pos} .seg-b`).removeClass('off');
    $(`${pos} .seg-c`).removeClass('off');
    $(`${pos} .seg-d`).removeClass('off');
    $(`${pos} .seg-e`).removeClass('off');
    $(`${pos} .seg-f`).removeClass('off');
    $(`${pos} .seg-g`).addClass('off');
  }
}
// rendering blinking dots
function blink(){
  let visibility = false;
  setInterval(function(){
  if(visibility){
    $dot.show();
    visibility = false;
  } else {
    $dot.hide();
    visibility = true;
  }
}, 500);
};
blink();


// setting time value
setInterval(setClock, 1000);

function setClock(){
  const currentDate = new Date(),
  secs = currentDate.getSeconds(),
  mins = currentDate.getMinutes(),
  hrs = currentDate.getHours();
  let h1,h10,m1,m10,s1,s10;
  h10 = Math.floor(hrs/10);
  h1 = hrs%10;
  m10 = Math.floor(mins/10);
  m1 = mins%10;
  s10 = Math.floor(secs/10);
  s1 = secs%10; 
  
  renderTime('.hour10', h10);
  renderTime('.hour1', h1);
  renderTime('.minute10', m10);
  renderTime('.minute1', m1);
  renderTime('.second10', s10);
  renderTime('.second1', s1);
}

setClock();
// set background image depending on time
function setBg() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    document.body.style.backgroundSize = "cover";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.backgroundSize = "cover";
    document.querySelector('.clock').style.backgroundColor = "rgba(219, 219, 219, 0.7)";
  }
}
setBg();