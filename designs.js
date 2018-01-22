$(document).ready(function() {

    $('#sizePicker').submit(function(evt) {                              
        clearGrid();
        // clearing a grid by removing children from Table
        evt.preventDefault();
        // Prevents form default value
        makeGrid();
        // Create Grid by taking user input
        colorPixels();
        // Fill Grid with color by taking the value of color input
    });

});

function clearGrid() {
    $('#pixel_canvas').children().remove();
}

function makeGrid() {	
	let width = $('#input_width').val();
	let height = $('#input_height').val();
	let table = $('#pixel_canvas');	
	for (let c = 1; c <= height; c++){
		//create row
		let row = $('<tr></tr>').appendTo(table);
		for (let r = 1; r <= width; r++){
			//create colomun
			row.append('<td></td>');			
		}
	}
}

function colorPixels(){	
	$( 'td' ).on( 'mousedown', function( evt ) {
		let color = $('#colorPicker').val();
	    $( evt.target ).css( 'background-color', color );    
	    $( 'td' ).on( 'dblclick', function( ) {
	    $(this).css( 'background-color', '#fcfaf7' );
})
});
}
