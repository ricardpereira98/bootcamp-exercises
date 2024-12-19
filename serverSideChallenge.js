function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    // Modified the if to return if the newValue == oldValue to avoid
    // unecessary trips to the server
    if (isLoading || newValue === '' || newValue == oldValue) {
        return;
    }

    // Instantiate the GetEmailAddress Script Include 
    var getEmailAddr = new GlideAjax('GetEmailAddress');
    // Specify the getEmail method && por sempre 'sysparm_name' como 1º parm)
    getEmailAddr.addParam('sysparm_name', 'cebolasComVinhoVerde');
    // Pass the Requested for sys_id
    getEmailAddr.addParam('sysparm_userID', g_form.getValue('u_requested_for'));
    // Send the request to the server
    getEmailAddr.getXML(populateEmailField);


    // When the response is back from the server
    function populateEmailField(response) {

        // Extract the email address from the response, clear any value from the email field, 
        // set new value in the email field
        var emailFromScriptInclude = response.responseXML.documentElement.getAttribute("answer");
        if (g_form.isNewRecord) {
            g_form.setValue('u_requested_for_email', emailFromScriptInclude);
        } else {
            g_form.clearValue('u_requested_for_email');
            g_form.setValue('u_requested_for_email', emailFromScriptInclude);
        }
    }
}