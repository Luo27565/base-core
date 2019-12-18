import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private config: MatSnackBarConfig = new MatSnackBarConfig();

  constructor(private snackBar: MatSnackBar, private translate: TranslateService) {
    this.config.verticalPosition = 'top';
    this.config.duration = 1500;
  }

  async showSuccess(message: string) {
    message = await this.translate.get(message).toPromise();
    this.config.panelClass = 'alert-success';
    this.snackBar.open(message, null, this.config);
  }

  async showWarning(message: string) {
    message = await this.translate.get(message).toPromise();
    this.config.panelClass = 'alert-warning';  // alert-warning
    this.snackBar.open(message, null, this.config);
  }

  async showFail(message: string) {
    message = await this.translate.get(message).toPromise();
    this.config.panelClass = 'alert-fail'; // alert-fail
    this.snackBar.open(message, null, this.config);
  }

}
