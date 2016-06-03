import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
// import directory from './modules';

import models from './models';
import services from './services';

angular.module('EmployeeDirectory', [uiRouter, models, services, home])
	.config(routing);
