to create module level lazy load use below cmd
ng generate module primengtemplate --route primengtemplate --module app.module
--------------delete alert----
private sweetAlertService: SweetAlertServiceService

async showConfirmation() {
    const confirmed = await this.sweetAlertService.showConfirmation('Are you sure?', 'This action cannot be undone!');
    
    if (confirmed) {
     //Api call
      console.log('Proceed with the action.');
    } else {
      //nothing
    }
  }
  ----sweet alert
