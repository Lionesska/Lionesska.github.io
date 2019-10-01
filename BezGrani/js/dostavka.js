
$(window).load(function() {
  var logo = $("#logo"),
  progressValue = $("#progressValue"),
  totalProgressValue = $("#totalProgressValue"),
  timeValue = $("#timeValue"),
  totalTimeValue = $("#totalTimeValue"),
  txtContainer = $("#txtContainer"),
  tl, 
  progressSlider, 
  totalProgressSlider, 
  txt;
  
  
  progressSlider = $("#progressSlider").slider({
    range: false,
    min: 0,
    max: 100,
    step:.1,
    slide: function ( event, ui ) {
      tl.pause();
      tl.progress( ui.value/100 );
    }
  });
  
  totalProgressSlider = $("#totalProgressSlider").slider({
    range: false,
    min: 0,
    max: 100,
    step:.1,
    slide: function ( event, ui ) {
      tl.pause();
      tl.totalProgress( ui.value/100 );
    }
  });       
  
  function splitText(phrase) {
    var prevLetter, sentence,
    sentence = phrase.split("");
    $.each(sentence, function(index, val) {
      if(val === " "){
        val = "&nbsp;";
      }
      var letter = $("<div/>", {
        id : "txt" + index
      }).addClass('txt').html(val).appendTo(txtContainer);
      
      if(prevLetter) {
        $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
      };
      prevLetter = letter;
    });
    txt = $(".txt");
  }
  
  function buildTimeline() {


    TweenLite.set(txtContainer, {css:{perspective:500}});

    tl = new TimelineMax({onUpdate:updateUI, repeat:2, repeatDelay:1, yoyo:true});
    tl.from(logo, 0.5, {left:'-=60px', ease:Back.easeOut}); 
    tl.staggerFrom(txt, 0.4, {alpha:0}, 0.06, "textEffect");
    tl.staggerFrom(txt, 0.8, {rotationY:"-270deg", top:80, transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.06, "textEffect");
    tl.staggerTo(txt, 0.6, {rotationX:"360deg", color:"#8A3A62", transformOrigin:"50% 50% 10"}, 0.02);  
  } 
  function updateUI() {
    progressSlider.slider("value", tl.progress() *100);
    totalProgressSlider.slider("value", tl.totalProgress() *100);
    progressValue.html(tl.progress().toFixed(2));
    totalProgressValue.html(tl.totalProgress().toFixed(2));
    timeValue.html(tl.time().toFixed(2));
    totalTimeValue.html(tl.totalTime().toFixed(2));
  }                   
  function init() {
    splitText("Доставка и Оплата");
    buildTimeline();

    TweenLite.set($("#demoBackground"), {visibility:"visible"});
  }      
  init();
});


$(function() {
  $('.block').each(function(index, el) {
    setTimeout(function() {
      if ($('#load:visible').length > 0) {
        $('#load:visible').hide();
      }
      $(el).css('display', 'block');
    }, 3000 + 2000 * index);
  });
});