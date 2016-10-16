
// jquery syntax
$(function() {

			// Click Go button

			$('#go').click(function() {

				// see if a car has won the race
				function checkIfComplete() {

					if( isComplete == false ) {
						isComplete = true;
					} else {
						place = 'second';
					}
				}

				// get width of the cars
				var carWidth = $('#car1').width();

				// get width of race track
				var raceTrackWidth = $(window).width() - carWidth;

				// generate random number betweem 1 & 5000

				var raceTime1 = Math.floor( (Math.random() * 5000 ) + 1 );
				var raceTime2 = Math.floor( (Math.random() * 5000 ) + 1 );

				// set flag variable to False by default
				var isComplete = false;

				// set flag variable to FIRST
				var place = 'first';

				// animate car 1
				$('#car1').animate({

					// move car width of racetrack
					left: raceTrackWidth
					
				}, raceTime1, function() {

					// animation is complete

					// run a function
					checkIfComplete();

					// give some text feedback in the race info box
					$('#raceInfo1 span').text('Finished in ' + place + ' and clocked in at ' + raceTime1 + ' milliseconds!')
				});

				// animate car 2
				$('#car2').animate({

					// move car width of racetrack
					left: raceTrackWidth
					
				}, raceTime2, function() {

					// animation is complete

					// run a function
					checkIfComplete();

					// give some text feedback in the race info box
					$('#raceInfo2 span').text('Finished in ' + place + ' and clocked in at ' + raceTime2 + ' milliseconds!')
				});

				// reset the race
				$('#reset').click(function() {
					$('.car').css('left','0');
					$('.raceInfo span').text('');
				});

			});



});