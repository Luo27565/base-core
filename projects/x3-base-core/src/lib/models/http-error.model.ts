import { HttpHeaders } from '@angular/common/http';

class ErrorModel {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string;
}

export class HttpErrorModel {
  error: ErrorModel;
  headers: HttpHeaders;
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}

