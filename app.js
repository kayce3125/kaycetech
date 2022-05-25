const menu = document.querySelector ('#mobile-menu');
const menulinks = document.querySelector ('.navbar__menu');


menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});

var p = document.getElementById('h22');
p.innerHTML = '';
var n = 0;
var str = 'We Build Beautiful, Clean & Modern Design Website With Flexible And Responsive Components.';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = " " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = " " + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = " " + str + "|"
        n = 1;
      } else {
        p.innerHTML = " " + str
        n = 0;
      };
    }, 500);
  };
}, 60)



    var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?9080';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginLeft":"50",
      "position":"left"
  },
  "brandSetting":{
      "brandName":"KayceTech",
      "brandSubTitle":"Typically replies within a day",
      "brandImg":"https://i.ibb.co/HPLhBXF/2KAYCE.png",
      "welcomeText":"Hi there!\nHow can I help you?",
      "messageText":"Hello, I have a question about {{page_link}}",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"2349066073100"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);







//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
