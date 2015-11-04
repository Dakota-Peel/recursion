// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringify;
	if(typeof obj === 'number'){
      stringify = obj.toString();
    }else if(typeof obj === 'boolean'){
    	stringify = obj.toString();
    }else if(typeof obj === 'string'){
    	stringify = '"' + obj.toString() + '"';
    }else if(!obj){
    	stringify = '' + obj + '';
    }else if(Array.isArray(obj)){
    	if(obj.length  === 0){
    	stringify = '[]';
      }else{
      	stringify='[';
      	for(var i =0; i < obj.length; i++){
      		stringify += stringifyJSON(obj[i]);
      		if(i < obj.length-1){
      			stringify+=",";
      		}
      	}
      	stringify+=']';
      }
    }else if(typeof obj === 'object'){
    	stringify = '{';
    	var x =0;
    	for(var key in obj){
    		if(typeof obj[key] != 'function' && typeof obj[key] != 'undefined'){
    	  if(x > 0){ stringify += ',';}
    		stringify+= '"' + key + '"' + ':' + stringifyJSON(obj[key]);
    	  x++;
    	}}
    	stringify+='}';
    }
return stringify;
};
