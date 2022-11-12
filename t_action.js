
//default empty map
localStorage.setItem('default_map','{"root":{"data":{"text":"Mindmap","expand":true,"isActive":false},"children":[]},"theme":{"template":"classic","config":{"imgMaxWidth":68,"imgMaxHeight":112,"backgroundImage":"","backgroundRepeat":"repeat"}},"layout":"logicalStructure","view":{"transform":{"scaleX":0.8,"scaleY":0.8000000000000002,"shear":0,"rotate":0,"translateX":-175.25745849609382,"translateY":-17.23999633789066,"originX":0,"originY":0,"a":0.8,"b":0,"c":0,"d":0.8,"e":-175.25745849609382,"f":-17.23999633789066},"state":{"scale":0.8,"x":-324,"y":-103,"sx":-449,"sy":-97}}}')


//Set function for taking name of map from url
var mapname = null;
var savedmap = null;
var thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');

//Array for loading panel

const saved_maps = [];




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
 saved_maps.push(mapname);
// localStorage.setItem('saved_maps',saved_maps);   
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
    var DEF_MAP = localStorage.getItem('default_map');
    localStorage.setItem(mapname, DEF_MAP);
    
    
} 
}




window.onload =  mapname_get(); mapname_work();


function loader () {
         localStorage.removeItem('SIMPLE_MIND_MAP_DATA');
     localStorage.setItem('SIMPLE_MIND_MAP_DATA',savedmap);
    window.location.reload();
    
}


// Autosave for obsidian cos on exit dosnt works
// Onexit for chrome etc
setInterval(function () {
     var thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
   localStorage.setItem(mapname,thismap)}, 1000);

 setTimeout(function(){window.onbeforeunload = function () {
     var thismap = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
   localStorage.setItem(mapname,thismap)
};}, 5000);






//toolbar css 
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






//Show noteContentViewer on hover
$('.noteContentViewer').hover(
  function () {
    $(this).css('visibility','visible');
   
  }, 
  function () {
    $(this).css('visibility','hidden');
      
  }
);




//English Default
//localStorage.setItem('SIMPLE_MIND_MAP_LANG','en');



//Creating map selecting input 
var selector = '<button title="Delete Map" class="deleteMap">X</button><input class="selectMap" title="Type new map name, Ctrl+Backspace to delete text. Click X to remove map, Click + to create new." placeholder="Select a map" type="text" list="maplist" name="category"><datalist id="maplist"></datalist><button title="Create New Map" class="addMap">+</button>'

$('.navigatorContainer').prepend(selector);

//Empty on mouse out
$('.selectMap').attr('onfocus','this.value=""');

//setting var for map selected
$(".selectMap").on('input', function () {
  var val = this.value;
  if($('#maplist option').filter(function(){
      return this.value.toUpperCase() === val.toUpperCase();        
  }).length) {
      newmapname = this.value;
  }
  else {
    var newmapValue = $('.selectMap').val();
    newmapname = newmapValue;
  }
});


// URL LOADER on click
var newmapname = null;

$('.addMap').on('click',function(){    
var currentHref = window.location.href ;
var alterHref = currentHref.split('=')[0];
var newHref = alterHref + '=' + newmapname;
window.location = newHref;
window.location.reload();
});


// Current map list from localStorage maker
var KEYS = Object.keys(localStorage);
var R1 = 'TOAST UI editor for : Statistics';
var R2 = 'default_map';
var R3 = 'SIMPLE_MIND_MAP_DATA';
var R4 = 'SIMPLE_MIND_MAP_LANG';

KEYS = jQuery.grep(KEYS, function(value) {
  return value != R1;
});
KEYS = jQuery.grep(KEYS, function(value) {
  return value != R2;
});
KEYS = jQuery.grep(KEYS, function(value) {
  return value != R3;
});
KEYS = jQuery.grep(KEYS, function(value) {
  return value != R4;
});

console.log(KEYS);

$.each(KEYS, function(i, obj) {
  $('#maplist').append("<option value="+obj+"></option>")
});



// Maybe create 'ZEN' mode with minimal of ui?
var ZEN = '<button title="Zen mode" class="ZEN">⦿</button>'
$('.navigatorContainer').append(ZEN);
$('.ZEN').on('click',ZEN_mode);
function ZEN_mode() {

  $('.toolbar').toggle();
  $('.countContainer').toggle();
  $('.navigatorContainer').children().toggle();
  $('.ZEN').css('display','block');
  

}