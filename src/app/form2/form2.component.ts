import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { EnrollmentServiceService } from '../enrollment-service.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private _enrollmentService: EnrollmentServiceService) { }

  ngOnInit(): void {

  }

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new UserData('', 'rob@test.com', 718199723, 'default', 'morning', true)
  submitted = false;
  errorMsg = '';

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    //  console.log(this.userModel);
    this.submitted = true;

    this._enrollmentService.enroll(this.userModel)
      .subscribe(data => console.log('success!', data),
       error=>this.errorMsg=error.statusText)

      }


}
