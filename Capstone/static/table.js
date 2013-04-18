$(document).ready(function(){
  // Makes rows selectable
    $('.selectable').on('click', function () {
    	var td = $(this).find('td');
        td.toggleClass('selected');
    });
    // Removes rows
	$("#removeRows").on('click', function(){
		$('td').not('.selected, .rounded-foot-left, .rounded-foot-right').remove();
		$('td').removeClass('selected');
	});
	// Exports to excel
	$("#btnExport").click(function(e) {
	    window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('#exportToExcel').html()));
	    e.preventDefault();
	});
	// Disables ability to select text in the table
	var element = document.getElementsByTagName('table')[0];
    if (typeof element.onselectstart != 'undefined') {
        element.onselectstart = function() { return false; };
    } else if (typeof element.style.MozUserSelect != 'undefined') {
        element.style.MozUserSelect = 'none';
    } else {
        element.onmousedown = function() { return false; };
    }
});
