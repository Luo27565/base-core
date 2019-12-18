import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  constructor(private http: HttpClient) {}

  // 上传图片到数据库
  uploadImg(imageFile: any, fileType: string) {
    const formData = new FormData();
    // 图片文件
    formData.append('file', imageFile);
    // 其他需要上传的字段
    formData.append('fileType', fileType);

    return this.http.post('/file/ftp/v1', formData, {
      responseType: 'text'
    });
  }

  // 更新数据库图片
  updateImg(imageFile: any, fileType: string, resourceFilePath: string) {
    const formData = new FormData();
    // 图片文件
    formData.append('file', imageFile);
    // 其他需要上传的字段
    formData.append('fileType', fileType);
    formData.append('resourceFilePath', resourceFilePath);
    return this.http.put('/file/ftp/v1/{resourceFilePath}', formData);
  }

  // 获取FTP服务器根地址
  getBaseUrl() {
    const url = `/file/ftp/v1`;
    return this.http.get(url, { responseType: 'text' });
  }
}
