var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function insertMessage() {
  msg = $('.message-input').val();

if ($.trim(msg) == '') {
    return false;
  }
$('<div class="message message-personal"><figure class="avatar-personal"><img src="img/chat/avatar-personal.png" /></figure>' 
  + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');

  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  'Dolor sit amet, consectetur adipisicing elit.',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><span></span><figure class="avatar"><img src="img/chat/avatar.png" /></figure></div>')
  .appendTo($('.mCSB_container'));

  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="img/chat/avatar.png" /> </figure>' +  Fake[i] + '</div>' )
    .appendTo($('.mCSB_container')).addClass('new');

    $()

    updateScrollbar();
    i++;
  }, 3000 + (Math.random() * 20) * 100);
}




$(document).ready(function(){

  $(".chat-chapter").click(function(){

    if(!$(this).hasClass('chat-active')){
                        
      $('.chat-chapter.chat-active').removeClass('chat-active');
      $(this).addClass('chat-active');

      // $(".chat-active").css({"background-color": "red"});
      $('.message.new').remove();
      fakeMessage();
    }

  });

});