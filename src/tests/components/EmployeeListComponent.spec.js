import angular from 'angular';
import app from '../../app/app';

describe('Component: EmployeeList', () => {
	let element;
	let scope;
	let controller;

	beforeEach(() => {
		angular.mock.module(app);
	});

	describe('when there are no employees', () => {
		beforeEach(() => {
			angular.mock.inject(($rootScope, $compile) => {
				scope = $rootScope.$new();
				element = angular.element('<employee-list></employee-list>');
				element = $compile(element)(scope);
				scope.$digest();
			});

		});

		it('should show the no employees message', () => {
			const controller = element.controller('employeeList');
			expect(controller.noEmployees).toBeTruthy();
		});
	});

	describe('when there are employees', () => {
		beforeEach(() => {
			angular.mock.inject(($rootScope, $compile) => {
				scope = $rootScope.$new();
				scope.listFake = [{ id: '0', name: 'Han Solo' }];
				element = angular.element(`<employee-list list-of-employees="listFake"></employee-list>`);
				element = $compile(element)(scope);
				scope.$digest();
			});
		});

		it('should render employees', () => {
			const controller = element.controller('employeeList');
			expect(controller.noEmployees).toBeFalsy();
		});
	});
});
