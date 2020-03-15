import { axiosWithToken } from "../api/axios-with-token";
import { UPLOAD_AVATAR } from "../api/endpoints";

export class AvatarService {
  static upload(avatar: any) {
    let fd = new FormData();
    fd.append("avatar", avatar);
    return axiosWithToken.post<{ data: { avatar: string } }>(UPLOAD_AVATAR, fd);
  }
}
