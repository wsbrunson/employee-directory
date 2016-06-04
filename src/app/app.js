import angular from 'angular';
import ngRouter from 'angular-route';
import firebase from 'firebase';

import '../style/app.css';

import EmployeeListComponent from './components/EmployeeListComponent';
import EmployeeListContainer from './containers/EmployeeListContainer';
import EmployeeListService from './services/EmployeeListService';

const MODULE_NAME = 'EmployeeDirectory';

angular.module(MODULE_NAME, [ngRouter])
	.component('employeeList', EmployeeListComponent)
	.component('employeeListContainer', EmployeeListContainer)
	.service('EmployeeListService', EmployeeListService);

angular.module(MODULE_NAME).config(($routeProvider) => {
	const firebaseApp = firebase.initializeApp({
		apiKey: 'AIzaSyCP0I4KcZ0vHCreZUwO__hut3UwoZXfi6s',
		authDomain: 'employee-directory-ce7db.firebaseapp.com',
		databaseURL: 'https://employee-directory-ce7db.firebaseio.com',
		storageBucket: 'employee-directory-ce7db.appspot.com',
	});

	$routeProvider
		.when('/', {
			template: '<employee-list list-of-employees="$resovle.employees"></employee-list>',
			resolve: {
				employees: () => {
					return firebaseApp.database().ref().once('value').then((snapshot) => {
						return snapshot.val();
					});
				}
			}
		});
});

export default MODULE_NAME;
