(function () {

	data.vehicles = [];

	if(!options.type)
		options.type = "CaR";


	var vehiclesGR = new GlideRecord('x_512735_bmw_gen_cmdb_ci_vehicle');
	vehiclesGR.addEncodedQuery("u_type=" + options.type + "^ORDERBYDESCu_production_start");
	//vehiclesGR.addEncodedQuery("u_type=motorcycle^ORDERBYDESCu_production_start");
	//vehiclesGR.addEncodedQuery("u_type=car^ORDERBYDESCu_production_start");
	vehiclesGR.setLimit(options.maximum_records_to_display);
	vehiclesGR.query();
	while (vehiclesGR.next()) {
		var vehiclesObj = {};

		$sp.getRecordDisplayValues(vehiclesObj, vehiclesGR, 'name,sys_id');

		vehiclesObj.vehicle_type = vehiclesGR.getValue('u_type');
		vehiclesObj.startProd = vehiclesGR.getValue('u_production_start');

		console.log(vehiclesObj.vehicle_type + " " + typeof vehiclesObj.vehicle_type);

		data.vehicles.push(vehiclesObj);

	}
}
)();
