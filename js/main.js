$(document).ready(function(){
	var $mainpage = $("#mainpage");
	var template = $("#template").text();

	renderMainpage();

  function renderMainpage() {
    $mainpage.html(Mustache.render(template, data));
  }
});