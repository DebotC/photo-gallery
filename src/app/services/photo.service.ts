import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: UserPhoto[] = [];

  constructor() { }

  async addNewToGallery() {
    const caputedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filePath: 'soon...',
      webviewPath: caputedPhoto.webPath
    });
  }
}

export interface UserPhoto {
  filePath: string;
  webviewPath: string | undefined;
}
