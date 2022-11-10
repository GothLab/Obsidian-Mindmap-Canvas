

function trax () {
    //Find all unwrapped text and wrap it in span
    $('div').contents().filter(function() {
    return this.nodeType === 3;
}).wrap('<span></span>');

    //Find all span and add a trn class
    $('span').each(function(){$(this).addClass('trn')});

    //Translate all to English
  //  var translator = $('body').translate({lang: "en", t: dict}); 
    
    //CSS Transparency 
    $('.navigatorContainer').css('background','transparent');
}



//Set function for taking name of map from url
var mapname = null;
var savedmap = null;
var thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');



function mapname_get () {
    
    function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}

var result = get_query();

$.each(result, function() {
  var key = Object.keys(this)[0];
  var value = this[key];
}); 
 mapname = result.mapname;
 savedmap = localStorage.getItem(mapname);

};




  
    


// Check if its new or old map requested
function mapname_work () {
    
if (mapname in localStorage) {
    
     console.log('there is such map, checking if its already loaded and if not loading and refreshing')
     //check if 

     
     if ( JSON.stringify(thismap) !== JSON.stringify(savedmap) ) {
         
     console.log('trying to take from save to local')
    localStorage.removeItem('SIMPLE_MIND_MAP_DATA');
    // localStorage.setItem('SIMPLE_MIND_MAP_DATA',savedmap);
    // thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
       

       setTimeout(function(){loader();}, 1);
         
     }
     
    else { console.log('current map is taken from save file') }
    
} else {
    console.log('no such map, creating new one');
    var dummy = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
    localStorage.setItem(mapname, dummy);
    
    
} 
}




window.onload =  trax(); mapname_get(); mapname_work();


function loader () {
         localStorage.removeItem('SIMPLE_MIND_MAP_DATA');
     localStorage.setItem('SIMPLE_MIND_MAP_DATA',savedmap);
    window.location.reload();
    
}

setInterval(function () {
     var thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
   localStorage.setItem(mapname,thismap)}, 1000);

 setTimeout(function(){window.onbeforeunload = function () {
     var thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
   localStorage.setItem(mapname,thismap)
};}, 5000);



$('.toolbarBtn').css('opacity','30%');

$('.toolbarBtn').hover(
  function () {
    var x = $(this).find('.text').text();
      $(this).attr('title',x)
      $(this).css('opacity','100%');
      
  }, 
  function () {
  //  $(this).find('.text').hide();
      $(this).css('opacity','30%');
  }
);

$('.countContainer').hide();



//Show noteContentViewer on hover
$('.noteContentViewer').hover(
  function () {
    $(this).css('visibility','visible');
   
  }, 
  function () {
    $(this).css('visibility','hidden');
      
  }
);

