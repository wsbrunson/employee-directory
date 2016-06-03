describe('questionsComponent', function() {
	var dirController;
	var element;
	var scope;

	const questionOne = {
		'question': 'Grand Central Terminal, Park Avenue, New York is the world\'s',
		'choices': [{'answer': 'largest railway station'},
			{'answer': 'highest railway station'},
			{'answer': 'longest railway station'},
			{'answer': 'None of the above'}],
		'correctAnswer': 0
	};

	const quizData = [questionOne];

	beforeEach(module('SimpleQuiz'));

	beforeEach(inject(function($rootScope, $compile, _QuizModel_) {
		scope = $rootScope.$new();
		scope.inputData = new _QuizModel_(quizData);

		element = $compile('<questions input-data="inputData"></questions>')(scope);

		scope.$apply();

		dirController = element.controller('questions');
	}));

	it('Should compile without error', function() {
		expect(element).toBeTruthy();
		expect(dirController).toBeTruthy();
	});

	it('Should receive input data', function() {
		expect(dirController.questions).toBeTruthy();

		expect(dirController.questions[0].correctAnswer).toBe(0);
	});
});
