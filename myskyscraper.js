function myskyscraper( floors,nr ) {
	var i ;
	var x;
  if ( typeof floors == 'undefined' ) {
    floors = 10;
  }
  // bookmark the drone's position so it can return there later

	for (x =0;x < nr;x++){
	this.chkpt('myskyscraper');		
  for ( i = 0; i < floors; i++ ) {
    this
		  .box('35:6',20,1,20)  //70 = oven
      .up()
		  .box0('35:10',20,3,20) //103 = melon
	  .up(3);
  }
		this.box('35:2',20,1,20)  //70 = oven
	this.move('myskyscraper'); 
		this.left(40);

	}

  // return the drone to where it started

};
var Drone = require('drone'); 
Drone.extend( myskyscraper );
