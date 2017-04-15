import {Component} from 'angular2/core';


 


@Component({
    selector: 'template-form',
    templateUrl: 'app/template-form.component.html'    
})
export class TemplateFormComponent {  
    
  frequencies= [
      {label: 'Daily', id: 1},
      {label: 'Weekly', id: 2},
      {label: 'Monthly', id: 3}
  ];
 
    onSubmit(form){
        console.log(form);
    }    
   
 }

    
 
