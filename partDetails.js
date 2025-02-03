(function () {

	data.details = [];

	var vehicleID = $sp.getParameter("sys_id");

	//partsGR.addQuery("sys_id", vehicleID);
	partsGr = new GlideRecord("cmdb_rel_ci");
	partsGR.addEncodedQuery("parent=" + vehicleID);
	partsGR.query();

	if (partsGR.next()) {

		var childObj = {};
		//name, model nr, man date, history, warranty

		$sp.getRecordDisplayValues(childObj, partsGR, 'name');
		childObj.modelNumber = partsGR.getValue("model_number");
		childObj.manDate = partsGR.getValue("u_manufactured_date");
		childObj.history = partsGR.getValue("u_history");
		childObj.warranty = partsGR.getValue("u_warranty");

		data.details.push(childObj);

	}

}
)();