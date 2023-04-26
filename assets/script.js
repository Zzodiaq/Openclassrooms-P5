const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const image = $(".banner-img");
const parag = $("#banner p");
const parent = $(".dots");
let i = 0;
let enfant = $(".dots .dot:nth-child(" + i + ")");

$(".arrow_left").click(() => {
	i--;
	if(i < 0){
		i = slides.length-1
	}
	image.attr('src', slides[i].image);
	parag.html(slides[i].tagLine)
	$(".dots").children().removeClass('dot_selected');
	switch (i) {
		case 0:
			$('.dots').children(':nth-child(1)').addClass('dot_selected');
			break;
		case 1:
			$('.dots').children(':nth-child(2)').addClass('dot_selected');
			break;
		case 2:
			$('.dots').children(':nth-child(3)').addClass('dot_selected');
			break;
		case 3:
			$('.dots').children(':nth-child(4)').addClass('dot_selected');
			break;
		default:
			break;
	}
})

$(".arrow_right").click(() => {
	i++;
	if(i >= slides.length){
		i = 0;
	}
	image.attr('src', slides[i].image);
	parag.html(slides[i].tagLine)
	$(".dots").children().removeClass('dot_selected');
	switch (i) {
		case 0:
			$('.dots').children(':nth-child(1)').addClass('dot_selected');
			break;
		case 1:
			$('.dots').children(':nth-child(2)').addClass('dot_selected');
			break;
		case 2:
			$('.dots').children(':nth-child(3)').addClass('dot_selected');
			break;
		case 3:
			$('.dots').children(':nth-child(4)').addClass('dot_selected');
			break;
		default:
			break;
	}
})
