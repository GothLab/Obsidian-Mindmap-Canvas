



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
    var dummy = localStorage.getItem('SIMPLE_MIND_MAP_DATA');
    localStorage.setItem(mapname, dummy);
    
    
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




//English Default
//localStorage.setItem('SIMPLE_MIND_MAP_LANG','en');

var selector = '<button title="Delete Map" class="deleteMap">X</button><input class="selectMap" title="Type new map name, Ctrl+Backspace to delete text. Click X to remove map, Click + to create new." placeholder="Select a map" type="text" list="maplist" name="category"><datalist id="maplist"><option name="table1" value="1" selected="true" disabled="disabled">Select A Category</option><option name="category1" value="general">General</option><option name="Category2" value="tech">Tech</option></datalist><button title="Create New Map" class="addMap">+</button>'

$('.navigatorContainer').prepend(selector);

$('.selectMap').attr('onfocus','this.value=""');

$(".selectMap").on('input', function () {
  var val = this.value;
  if($('#maplist option').filter(function(){
      return this.value.toUpperCase() === val.toUpperCase();        
  }).length) {
      //send ajax request
      alert(this.value);
  }
});