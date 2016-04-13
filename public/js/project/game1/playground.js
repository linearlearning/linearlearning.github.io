var Canvas = require('../canvas/canvas.js'),
		Vector = require('../actors/vector.js'),
		Target = require('../actors/target.js'),
		Sauron = require('../sauron/sauron.js');
		config = require('../level/playgroundConfig');

function initPlayground() {
	// Create objects needed for game
	var inputCanvas = new Canvas(config.inputCanvasSettings),
			inputVector = new Vector(config.inputVectorSettings),
			outputVector = new Vector(config.outputVectorSettings),
			outputCanvas = new Canvas(config.outputCanvasSettings),
			outputTarget = new Target(config.targetSettings);

	// draw grid(s)
	inputCanvas.drawCanvas();
	outputCanvas.drawCanvas();
	outputCanvas.drawProgressBar();

	// draw vector(s)
	inputVector.init();
	outputVector.init();

	// generate target(s)
	outputTarget.init()
}

// Requires JQuery
function initTutorial() {
	// Initialize
	$(window).ready(function(){
		// Initialize Popover
		$('#tutorial').popover();
		// Dismissable when clicking general window elements
		$(window).click(function() {
				$('#tutorial').popover('hide');
				Sauron.tutorial.show = false;
		});
	});
	// Load starting tutorial
	Sauron.tutorialControl(1,1000);
}

// think of this as the main function :)
startPlayground = function startPlayground() {
	initPlayground();
	initTutorial();
}
