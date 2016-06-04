const template = `
	<div ng-show="$ctrl.noEmployees">
		<p>No Employees :(</p>
	</div>
	<div ng-hide="$ctrl.noEmployees">
		<div class="employee-list" ng-repeat="employee in $ctrl.listOfEmployees track by $index">
			<div class="employee">
				<h4>{{ employee.name }}</h4>
			</div>
		</div>
	</div>`;

const EmployeeListComponent = {
	bindings: {
		listOfEmployees: '='
	},
	controller: function() {
		if (!this.listOfEmployees || this.listOfEmployees.length === 0) {
			this.noEmployees = true;
		}
	},
	template: template
};

export default EmployeeListComponent;
