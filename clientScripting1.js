function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (newValue == "") {
        return;
    }
    var whatneeded = g_form.getValue('u_what_needed');

    // Clear all of the choices from the What needed field choice list
    g_form.clearOptions('u_what_needed');

    switch (newValue) {

        case "hr":
            g_form.addOption('u_what_needed', 'hr1', 'Human Resources 1');
            g_form.addOption('u_what_needed', 'hr2', 'Human Resources 2');
            break;
        case "facilities":
            g_form.addOption('u_what_needed', 'facilities1', 'Facilities 1');
            g_form.addOption('u_what_needed', 'facilities2', 'Facilities 2');

            break;
        case "legal":
            g_form.addOption('u_what_needed', 'legal1', 'Legal 1');
            g_form.addOption('u_what_needed', 'legal2', 'Legal 2');
            break;
        case "snow":
            g_form.addOption('u_what_needed', 'snow1', 'SnowRiders 1');
            g_form.addOption('u_what_needed', 'snow2', 'SnowRiders 2');
            break;
        default: g_form.addOption('u_what_needed', 'other', 'Other');
    }
    g_form.addOption('u_what_needed', 'other', 'Other');

    // If the form is loading and it is not a new record, set the u_what_needed value to the
    // value from the record before it was loaded
    if (isLoading && !g_form.isNewRecord()) {
        g_form.setValue('u_what_needed', whatneeded);
    }
}