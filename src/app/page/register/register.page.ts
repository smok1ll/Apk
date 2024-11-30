import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('/tab-inicial/inicio'); // Redirigir al home después de registrarse
      })
      .catch(error => {
        console.error("Error en registro", error);
      });
  }


  ngOnInit() {
  }

}
