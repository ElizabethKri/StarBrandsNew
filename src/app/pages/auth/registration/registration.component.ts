import {Component, OnInit} from '@angular/core';
import {ServerError} from "../../../interface/error";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IUser} from "../../../interface/user";
import {MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  login: string;
  psw: string;
  telephone: string;
  pswRepeat: string;
  email: string;
  saveValue: boolean;
  id: string;
  saveUserInStore: boolean;
  user: IUser | null;
  userForm: FormGroup;
  genders: any[];
  selectedGenders: any;



  constructor(private messageService: MessageService,
              private http: HttpClient,
              private userService: UserService,
              ) {
  }

  ngOnInit(): void {
    //записываем пользователя
    this.user = this.userService.getUser()
    //создание формГруппы
    this.userForm = new FormGroup({
      firstName: new FormControl('', {validators: Validators.required}),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthDay: new FormControl(''),
      telephone: new FormControl(''),
      gender: new FormControl(this.genders = [
          { name: 'Мужской', code: 'М' },
          { name: 'Женский', code: 'Ж' }])
    })
  }

  onSubmit(): void{

  }

  saveUser(): void {

  }

  selectDate(ev: Date): void{

  }


  registration(ev: Event): void | boolean {
    if (this.psw !== this.pswRepeat) {
      this.messageService.add({severity: 'error', summary: 'Ошибка', detail: 'Пароли не совпадают'});
      return false;
    }
    const userObj: IUser = {
      psw: this.psw,
      login: this.login,
      email: this.email,
      id: this.id,
    }

    this.http.post('http://localhost:3000/users/', userObj).subscribe((data) => {
      if (this.saveUserInStore) {
        const objUserJsonStr = JSON.stringify(userObj);
        window.localStorage.setItem('user_' + userObj.login, objUserJsonStr);
      }
      this.messageService.add({severity: 'success', summary: 'Регистрация прошла успешно'});

    }, (err: HttpErrorResponse) => {
      console.log('err', err)
      const serverError = <ServerError>err.error;
      this.messageService.add({
        severity: 'warn', summary: serverError.errorText
        // this.messageService.add({severity:'warn', summary:'Пользователь уже зарегистрирован'
      });
    });
  }
}

