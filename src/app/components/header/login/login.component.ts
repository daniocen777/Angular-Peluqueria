import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public showLoginSuccess: boolean;
  public showLoginError: boolean;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      user: new FormControl("", Validators.required),
      pass: new FormControl("", Validators.required)
    });
    this.showLoginSuccess = false;
    this.showLoginError = false;
  }

  ngOnInit() {}

  checkLogin() {
    this.showLoginSuccess = false;
    this.showLoginError = false;
    this.authService.login(this.formLogin.value).subscribe(response => {
      if (response) {
        this.showLoginSuccess = true;
        this.router.navigate(["/list-booking"]);
        localStorage.setItem("logged", "1");
        this.activeModal.close();
      } else {
        this.showLoginError = true;
      }
    });
  }
}
