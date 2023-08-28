import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
}


  passwordValidator(control: FormControl): { [s: string]: boolean } | null {
    const password = control.value;
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}/.test(password)) {
      return { invalidPassword: true };
    }
    return null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Realizar la lógica de autenticación aquí
      this.router.navigate(['/welcome']);
    } else {
      console.log("Formulario inválido");
    }
  }
}
