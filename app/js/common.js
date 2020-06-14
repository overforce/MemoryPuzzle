$(document).ready(() => {

	var cell = $('.cell')
	cell.append('<div class="front">', '<div class="back">', '<div class="left">', '<div class="right">')
	var selected = []



	function mix() {

		var cellsArr = []
		selected = []
		var memsArr = [
			['pog', 'pog', 'pog', 'pog'],
			['kekw','kekw','kekw','kekw'],
			['pepega','pepega','pepega','pepega'],
			['kappa','kappa','kappa','kappa']
		]

		$('.cell').addClass('show')

		setTimeout(() => {
			$('.cell').removeClass('show')
		}, 1000);

		while(cellsArr.length < 16){

			var rnd = Math.floor(Math.random()*4)
			if(memsArr[rnd][0] != undefined){
				cellsArr.push(memsArr[rnd].shift())
			}

		}

		for(var i = 1; i < 17; i++){
			$(`.cell:nth-child(${i}) .front`).addClass(cellsArr.pop())
		}

	}

	mix()


	$('.reset').click(function(){

		if(!$(this).hasClass('disabled')){

			$('.cell').removeClass('show')
			$('.win').removeClass('visible')

			$('.cell .front').removeClass('pog kappa pepega kekw')

			setTimeout(() => {
				mix()
			}, 300);

			$(this).addClass('disabled')

			setTimeout(() => {
				$(this).removeClass('disabled')
			}, 1000);

		}



	})


	cell.click(function(){

		if(!$(this).hasClass('show')){
			selected.push($('.front',this))
		}

		$(this).addClass('show')

		if(selected[1] != undefined){

			if(selected[0].attr('class') == selected[1].attr('class')){

				selected.splice(0,2)

				for(var i = 1; i < 16; i++){
					if($(`.cell:nth-child(${i})`).hasClass('show')){
						if(i == 15){
							$('.win').addClass('visible')
						}
					}else{
						break
					}

				}

			}else{

				var con1 = selected[0]
				var con2 = selected[1]



				selected.splice(0,2)

				setTimeout(() => {

					con1.parent('.cell').removeClass('show')
					con2.parent('.cell').removeClass('show')

				}, 200);




			}
		}

	})


});
