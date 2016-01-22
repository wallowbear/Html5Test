// JavaScript Document
$(function() {
	init();

})

function init() {
	var e = $.Event("initEvt");
	$("body").trigger(e);
	$("body").bind("click", function() {
		$("body").trigger(e);
	})
	$("body").bind("initEvt", function() {
		alert("evt e!!!");
	})


	$("input").change(function() {
		var $input = $(this);

		$("p").html(".attr( \"checked\" ): <b>" + $input.attr("checked") + "</b><br>
		" + ".prop( \"checked\" ): <b>" + $input.prop("checked") + "</b><br>
		" + ".is( \":checked\" ): <b>" + $input.is(":checked") + "</b>");
	}).change();

}