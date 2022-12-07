import axios from "axios";
import { BaseService } from "./BaseServices";

export class GlobalServices extends BaseService {
  constructor() {
    return super();
  }

  uploadFileApi = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_presset");
    return axios.post("YOUR_API_IN_CLOUDINARY", formData);
  };

  removeImgApi = (public_id) => {
    return this.post("destroyFile", {
      public_id,
    });
  };
}

export const globalService = new GlobalServices();
