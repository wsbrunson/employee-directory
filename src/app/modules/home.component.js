function homeComponent() {
	'use strict';

	const directiveConfig = {
		scope: {},
		template: template,
		controller: homeViewController,
		controllerAs: 'vm'
	};

	homeViewController.$inject = ['$state'];
	function homeViewController($state) {
		const vm = this;

            vm.createQuizButton = createQuizButton;
			vm.startQuizButton = startQuizButton;

            function createQuizButton() {
                $state.go('createQuiz');
            }

			function startQuizButton() {
				$state.go('quiz', {quizId: '5clco'});
			}
	}

	return directiveConfig;
}

export default homeComponent;

const template = `<h1>Employee Directory</h1>`;
