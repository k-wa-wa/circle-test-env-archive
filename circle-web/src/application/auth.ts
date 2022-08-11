import axios from "axios";
import { createResource } from "solid-js";
import appID from "../infrastructure/appid";

var accessToken: any;

export const loginAction = async () => {
  try {
    const tokens = await appID.signin();
    accessToken = tokens.accessToken;
  } catch (e) {
    console.log(e)
  }
}

const fetchUser = async () => {
  return await axios.get("/api/userinfo", { headers: { "Authorization": `Bearer ${accessToken}` } }).then(res => {
    console.log(res)
    return res.data;
  }).catch(err => {console.log(err); return});
}
const [userinfo] = createResource(fetchUser)

export { userinfo };