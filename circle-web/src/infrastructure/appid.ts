import AppID from "ibmcloud-appid-js";

const appID = new AppID();
(async () => {
  try {
    await appID.init({
      clientId: "c39b10d8-3a95-47ec-9a0a-5bf51fe10296",
      discoveryEndpoint: "https://jp-tok.appid.cloud.ibm.com/oauth/v4/71d5a6a9-fd11-4914-82be-156be981c1d8/.well-known/openid-configuration",
    });
  } catch (e) {
    console.log(e)
  }
})();

export default appID;