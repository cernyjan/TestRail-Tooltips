$( document ).ready(function() {
	var urlSearch = window.location.search;
	var html = $("body").html();
	if (urlSearch.indexOf("/suites/") >= 0 && urlSearch.indexOf("/view/") >= 0 && html.indexOf("About TestRail") >= 0)
	{
		console.log("TestRail Tooltips is Online");

		function iteration() {
		    myVar = setInterval(checkTooltip, 1000);
		}

		function checkTooltip() {
			if ($('#groups').find('table').find('td').first().next().next().not('[title]').length > 0){
			    $('#groups').find('table').find('td').each(function( index ) {
				    if ($( this ).hasClass( "id" )){
				        $( this ).attr('title', $( this ).find('a').html());
				    }
				    else if ($( this ).hasClass( "sub" )){
				        $( this ).attr('title', $( this ).html());
				    }
					else if ($( this ).not('[class]')){
						$( this ).attr('title', $( this ).find('span').html());
					}
				});
			}	
		}

		iteration();
	}
});