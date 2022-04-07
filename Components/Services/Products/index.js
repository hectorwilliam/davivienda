import Http, {urlMain} from "../Http";

export const getProductApi = (data = "") => Http.get(urlMain+"products" + data)