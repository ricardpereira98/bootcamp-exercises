(function () {

	data.vehicles = [];


	var vehiclesGR = new GlideRecord('x_512735_bmw_gen_cmdb_ci_vehicle');
	vehiclesGR.addEncodedQuery("u_type=" + options.type + "^ORDERBYDESCu_production_start");
	vehiclesGR.setLimit(options.maximum_records_to_display);
	vehiclesGR.query();
	while (vehiclesGR.next()) {
		var vehiclesObj = {};

		$sp.getRecordDisplayValues(vehiclesObj, vehiclesGR, 'name,u_type,sys_id');

		vehiclesObj.vehicle_name = vehiclesGR.getValue('name');
		vehiclesObj.vehicle_type = vehiclesGR.getValue('u_type');

		console.log(vehiclesObj.vehicle_type + " " + typeof vehiclesObj.vehicle_type);

			data.vehicles.push(car)
		
	}


	///com base no options.type definir a logica
}
)();
