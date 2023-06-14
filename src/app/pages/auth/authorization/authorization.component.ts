import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {AuthService} from "../../../services/auth/auth.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IUser} from "../../../interface/user";
import {UserService} from "../../../services/user/user.service";
import {ServerError} from "../../../interface/error";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnChanges, OnDestroy {
  @Input() inputProp = 'active';
  @Input() inputObj: any;


  loginText = 'Логин';
  pswText: string = 'Пароль'
  psw: string;
  login: string;
  authTextButton: string;
  id: string;

  constructor(private authService: AuthService,
              private messageService: MessageService,
              private router: Router,
              private userService: UserService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.authTextButton = "Войти"
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    // если мы хотим обработать предыдущее значение
    if (changes['inputProp']) {
      const preValue = changes['inputProp'].previousValue;
      console.log('prevValue', preValue)
      // выполнить что-то при первичном изменении св-ва
      if (changes['inputProp'].firstChange) {
        console.log('first changes')
      }
    }
    console.log(this.inputProp);

  }

  //Проверка по авторизации (логин и пароль), если будет все ок, то переходим на страницу с турами
  onAuth(ev: Event): void {
    const authUser: IUser = {
      psw: this.psw,
      login: this.login,
      id: this.id,
    }
    this.http.post<{ access_token: string, id: string }>('http://localhost:3000/users/' + authUser.login, authUser).subscribe((data) => {
      authUser.id = data.id;
      this.userService.setUser(authUser);
      const token: string = data.access_token;
      this.userService.setToken(token);
      this.userService.setToStore(token);

      this.router.navigate(['starbrands/starbrands-list']);

    }, (err: HttpErrorResponse) => {
      const serverError = <ServerError>err.error;
      this.messageService.add({severity: 'warn', summary: serverError.errorText});
    });
  }
}
