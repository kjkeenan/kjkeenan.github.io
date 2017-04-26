$(document).ready(function() {

// move the carousel around //

$("#carousel-next").click(function() {
  var next = parseInt($('#carousel').css('margin-left').replace("px", "")); 
  console.log(next)
  if (next === -9600) { 
    return false;
  }

  else {
    $('#carousel').css('margin-left', next - 960);
  }
})

$("#carousel-prev").click(function() {
  var prev = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (prev === 0) {
    return false; 
  }
  else {
    $('#carousel').css('margin-left', prev + 960);
  }
})

$('#navbar-food').click(function() {
  document.location.href='index-2.html';
});

$('#navbar-lingo').click(function() {
  document.location.href='index4.html';
});

$('#navbar-attractions').click(function() {
  document.location.href="index-3.html";
});

$('#navbar-2-home').click(function() {
  document.location.href='index.html';
});

$('#navbar-2-attractions').click(function() {
  document.location.href='index-3.html';
});

$('#navbar-2-lingo').click(function() {
  document.location.href='index4.html';
});

$('#navbar-3-home').click(function() {
  document.location.href='index.html';
});

$('#navbar-3-food').click(function() {
  document.location.href='index-2.html';
});

$('#navbar-3-lingo').click(function() {
  document.location.href='index4.html';
});

$('#navbar-4-home').click(function() {
  document.location.href='index.html';
});

$('#navbar-4-food').click(function() {
  document.location.href='index-2.html';
});

$('#navbar-4-attractions').click(function() {
  document.location.href='index-3.html';
});








setTimeout(function() {
        $('#palm-left').slideUp('2500', function() {
            $('#palm-left').slideDown('500');
        });
    }, 1000);

setTimeout(function() {
        $('#palm-right').slideUp('2500', function() {
            $('#palm-right').slideDown('2500');
        });
    }, 1000);


$(".masonry-image-1").hover(function() {
  $(this).find('.card').toggleClass('flipped');
})

$(".masonry-image-2").hover(function() {
  $(this).find('.card').toggleClass('flipped');
})




$('.attraction-container').mouseover(function() {
  $('.attraction-overlay').show();
}).mouseout(function() {
  $('.attraction-overlay').hide();
});



});