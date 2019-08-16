


$(document).ready(function() {
	$('.dot1').click(function() {
		$('#lo').show();
		$('#loo').hide();


	});

	$('.dot2').click(function() {
		$('#lo').hide();
		$('#loo').show();
	});

	$('.dot3').click(function() {
		$('#loo').hide();
		$('#l').show();
	});

	 $('#order').click(function() {
    alert("were have received ur Order,Thank U And Welcome Once Again ")
    });


	 

});



var product=[];

function fun(){
  var x={};
  x.price=document.getElementById('price').value;
  x.title=document.getElementById('title').value;
  product.push(x);
    
  var iDiv = document.createElement('div');
  iDiv.id = product.length;
  iDiv.className = 'block';
  document.getElementsByTagName('body')[0].appendChild(iDiv);
  
  var para = document.createElement("span");
  var node = document.createTextNode('Title: ' + x.title+' |                    ');
  para.appendChild(node);

  var element = document.getElementById(product.length);
  element.appendChild(para);
  
  para = document.createElement("span");
  node = document.createTextNode('Price: '+ x.price);
  para.appendChild(node);
  
  element.appendChild(para);
}


