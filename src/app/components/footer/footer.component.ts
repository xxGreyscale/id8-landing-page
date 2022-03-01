import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Email {
  email: string,
  message: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {
  pageUrl: String = '';
  emailSent: boolean = false
  loading: boolean = false

  


  sendEmailAPI: string = 'https://qyxpx21ks2.execute-api.eu-west-1.amazonaws.com/prod/contact-us'
  
  // form instance
 contactusForm = new FormGroup({
  name: new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(155),
    Validators.required
  ]),
   email: new FormControl('', [
     Validators.email,
     Validators.required
   ]),
   message: new FormControl('', [
    Validators.maxLength(1240),
    Validators.required
  ])
 })

 get email(): any {
   return this.contactusForm.get('email')
 }

 get name(): any {
  return this.contactusForm.get('name')
}

 get message(): any {
  return this.contactusForm.get('message')
}

  constructor(private location: Location, private htppClient: HttpClient) { }

  ngOnInit(): void {
    this.pageUrl = this.location.path();
    this.pageUrl = this.pageUrl.split('/')[1]
  }

  onSubmit(): void{
    // take the data and validate it
    this.loading = true
    const formData = this.contactusForm.value;
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      sender: 'info@id8.space',
      recievers: ['info@id8.space'],
      header: 'Contact form from Dynamis'
    }
    this.emailSent = false
    this.sendEmail(payload).subscribe( response => {
      this.emailSent = true
      this.loading = false
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  sendEmail(payload: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json; charset=utf-8',  };
    return this.htppClient.post<any>(this.sendEmailAPI, payload, { headers })
    .pipe(
      retry(1),
      catchError(this.handleError)
      )
  }

}
