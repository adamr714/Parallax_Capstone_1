//Cards - Homepage
var raceChoice = {
    state: [{
    		cardTop: 'cayadTop',
			raceName: 'Cayad',
			cardArt: 'cayadArt',
			text: 'A dark and blood-thirsty faction, which seeks revenge for the chaos caused by the great split.',
			cardBottom: 'cayadBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'devoidTop',
			raceName: 'Devoid',
			cardArt: 'devoidArt',
			text: 'The Devoid focus on their ingenuity and engineering to maintain their way of life.',
			cardBottom: 'devoidBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'hadjenTop',
			raceName: 'Hadjen',
			cardArt: 'hadjenArt',
			text: 'The self-appointed lords of Magic who will protect their world at all costs.',
			cardBottom: 'hadjenBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'minotaurTop',
			raceName: 'Minotaur',
			cardArt: 'minoataurArt',
			text: 'A proud race of warriors who live by a code of honor.',
			cardBottom: 'minotaurBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'sicariusTop',
			raceName: 'Sicarius',
			cardArt: 'sicariusArt',
			text: 'Brooding and superstitious, the slightest glimpse of them usually meant a painful and torturous death.',
			cardBottom: 'sicariusBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'tiTop',
			raceName: 'Tir',
			cardArt: 'tirArt',
			text: 'Humans which posses magical talents that are highly sought after by other races.',
			cardBottom: 'torBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	}
    ],
    currentCard: 0,
}		

// Render Function
var renderList = function(element) {
    // debugger;

    var currentCard = raceChoice.state[raceChoice.currentCard];

    var infoCard = $('#character').html()
        .replace('{{cardTop}}', currentCard.cardTop)
        .replace('{{raceName}}', currentCard.raceName)
        .replace('{{cardArt}}', currentCard.cardArt)
        .replace('{{text}}', currentCard.text)
        .replace('{{cardBottom}}', currentCard.cardBottom)
        .replace('{{readmMore}}', currentCard.readmMore)
        .replace('{{create}}', currentCard.create)
    element.html(infoCard);
};







// Data
var paths=[
	"Blood Magic",
	"Ranged",
	"Melee"
]

var form =[
	"3",
	"4",
	"5",
	"6",
	"7"
]

var awareness =[
	"3",
	"4",
	"5"
]

var essence =[
	"2",
	"3",
	"4",
	"5",
	"6"
]

var movement = 5;

var mellee = 3;

var armor  = 1;

var ranged = 1;

var weapons=[
  "Select Weapon",
  "dagger",
  "spear",
  "claymore",
  "great axe",
  "great sword",
  "maul",
  "hand axe",
  "rapier",
  "short sword",
  "axe",
  "halberd",
  "long sword"
]

var armor = [
	"cloth",
	"leather",
	"chainmail"
]

var shield = [
	"buckler",
	"kite shielf"
]


// Functions and inner workings

$('#info').click(function() {
	$('#intro').toggleClass('hidden');
});


$('#cayadCardCreator').click(function() {
	$('#raceSelector').fadeOut(1000, function() {
		$('#caaydCreator').removeClass('hidden');
	});
});

$('#cayadCardCreator').click(function() {
	$('#info').fadeOut('hidden');
});

$(document).ready(function() {
	$('.tooltip').tooltipster();

	$('#templates').load('template.html', function() {
		console.log($('#character').html());
	});	
});