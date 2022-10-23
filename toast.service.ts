import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class ToastService {
    
  status: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  timer: any;
  toasterType: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  //showToast(status: '' , message:''  , autoclose: (default=true) , time: (default:3000ms))
  showToast(type: string, msg: string, autoclose?: boolean, time?:null | number) {
    this.toasterType.next(type); /*type can be warning, error, success*/
    this.status.next(msg)
    time = time == null ? 3000 : time; // if time is passed as argument, else default 3000ms = 3s
    autoclose = autoclose == null? true : autoclose; // default autoclose = true; closes the toast with time, else (autoclose == false){} toasts waits for user action.}
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (autoclose) {
      //default time for closing popup is set here
      this.timer = window.setTimeout(() => {
        this.status.next(null);
      }, time)
    }
  }
}
