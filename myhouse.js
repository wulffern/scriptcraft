function myhouse( width, height, length ) {
    var i ;
    var x;


	if ( typeof width == 'undefined' ) {
        width = 10;
    }

	if ( typeof height == 'undefined' ) {
        height = 5;
    }
	
	if ( typeof length == 'undefined' ) {
        length = 10;
    }

	var walls =  13;
	var ceiling = '43:2';
	
    this.chkpt('myskyscraper');

//    for ( i = 0; i < floors; i++ ) {

	box0(walls, width,height,length);
	this.up(height).prism0(ceiling, width,length);


  //  }

    this.move('myskyscraper');
    // return the drone to where it started

};
var Drone = require('drone');
Drone.extend( myhouse );
