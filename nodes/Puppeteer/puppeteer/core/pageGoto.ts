import { IPageGoto } from "./dto/interface";
import { state } from "../state";

export const pageGoto = async (data: IPageGoto) => {
        const { instance, options, url } = data;
        const urlParam = new URL(url);
        const response = await state[instance]?.page.goto(urlParam.toString(),options);
        const headers = response?.headers();
        const statusCode = response?.status();
        return {
                headers,
                statusCode
        }
}