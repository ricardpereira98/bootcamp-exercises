(function () {

	data.details = [];

	var vehiclesGR = new GlideRecord('x_512735_bmw_gen_cmdb_ci_vehicle');

	//	var vehicleID = $sp.getParameter("sys_id");
	//	console.log("sysID: " + vehicleID + " Type of: " + vehicleID);

	//vehiclesGR.addQuery("sys_id", vehicleID);
	vehiclesGR.addQuery("sys_id", "2c5d3c2bc39712109db51c377d01310e");
	//2c5d3c2bc39712109db51c377d01310e
	vehiclesGR.query();

	if (vehiclesGR.next()) {

		var vehicleObj = {};

		$sp.getRecordDisplayValues(vehicleObj, vehiclesGR, 'name');
		console.log(vehiclesGR.getValue("sys_id"));
		vehicleObj.id = vehiclesGR.getValue("u_id");
		vehicleObj.type = vehiclesGR.getValue("u_type");
		vehicleObj.history = vehiclesGR.getValue("u_history");
		vehicleObj.startProd = vehiclesGR.getValue("u_production_start");

		if (!vehiclesGR.getValue("u_production_end")) {
			vehicleObj.endProd = "Production for this " + vehicleObj.type + " is still ongoing."
		} else {
			vehicleObj.endProd = vehiclesGR.getValue("u_production_end");

		}
		
		data.details.push(vehicleObj);
		
	}

}
)();
