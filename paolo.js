var container = document.getElementById('container');

container.addEventListener('mousemove',function(e){
  //var top = e.pageY;
  //var left = e.pageX;
  var torch = document.getElementById('torch');
  //torch.style.clip = "rect("+(top-100)+"px,"+left+"px,"+top+"px,"+(left-100)+"px)";
  torch.style.top = (e.clientY - 80) + "px";
  torch.style.left = (e.clientX - 80) + "px";
  torch.style.backgroundPosition = (-e.clientX - 80)+"px " + (-e.clientY - 80)+"px";
});


container.addEventListener('mouseout',function(e){
  //var top = e.pageY;
  //var left = e.pageX;
  var torch = document.getElementById('torch');
  //torch.style.clip = "rect("+(top-100)+"px,"+left+"px,"+top+"px,"+(left-100)+"px)";
  torch.style.top = (e.clientY - 50000) + "px";
  torch.style.left = (e.clientX - 50000) + "px";

});
