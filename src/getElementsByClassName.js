// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
var containstest = [];
var node = document.body;
var nodes = document.body.children;

  if(node.classList.contains(className)){
		containstest.push(node);
	}
var checkNodes = function(nodes){

	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].classList.contains(className)){
			containstest.push(nodes[i]);
		}
		if(nodes[i].children){
			checkNodes(nodes[i].children);
		}

	}
	return containstest;
  }
  checkNodes(nodes);
  return containstest;

};
