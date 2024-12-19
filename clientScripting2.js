function onLoad() {
     if (g_form.isNewRecord())
        g_form.setValue("u_requested_for", g_user.userID); //Check to see if the form is for a new record.  If it is a new record, 
    //set the Requested for value to the currently logged in user.
  

}