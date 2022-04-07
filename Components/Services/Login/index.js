import Http, {urlMain} from "../Http";

export const loginApi = (data) => Http.post(urlMain+"auth/login", data)