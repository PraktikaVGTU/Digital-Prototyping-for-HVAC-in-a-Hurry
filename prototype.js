//Code to Deal with Parts Search
$("#search-btn").on("click", function() {
		//On new search, start w/ all parts to start
		$('.catalog-part').show();
    $('.description').hide();

		//Code to filter by Manufacturer
    var selmfr = $('#dd-mfr').find(':selected').val(); //JQuery event for drop-down
		console.log("selected mfr " + selmfr); //just for testing

		if(selmfr!="All") {
   		$('.catalog-part').each(function(){ //.each lets you do something to all items in the selected class
       if ($(this).attr('mfr') != selmfr) {
			 		$(this).hide();
				} //inner if statement ends here
			});
      $('.description').each(function(){
       if($(this).attr('mfr') != selmfr) {
			 		$(this).show();
				}
		});
		} //outer if statement ends here

		//Very similar code to filter by Model
		var selmodel = $('#dd-model').find(':selected').val();
		console.log("selected model " + selmodel);
		if(selmodel!="All") {
    $('.catalog-part').each(function(){
       if($(this).attr('model') != selmodel) {
			 		$(this).hide();
				}
		});
    $('.description').each(function(){
       if($(this).attr('model') != selmodel) {
			 		$(this).show();
				}
		});
    }

    var seltype = $('#dd-stype').find(':selected').val();
		console.log("selected model " + seltype);
		if(seltype!="All") {
    $('.catalog-part').each(function(){
       if($(this).attr('stype') != seltype) {
			 		$(this).hide();
				}
		});
    $('.description').each(function(){
       if($(this).attr('stype') != seltype) {
			 		$(this).show();
				}
		});
    }

		var parts = $('#partsearch').find('#partnumber').val();
		console.log("selected part #" + parts);
		if(parts!="") {
    $('.catalog-part').each(function(){
       if($(this).attr('part') != parts) {
			 		$(this).hide();
				}
		});
    $('.description').each(function(){
       if($(this).attr('part') != parts) {
			 		$(this).show();
				}
		});
    }
});
