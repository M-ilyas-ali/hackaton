import { createClient } from "next-sanity";
//todo  to make connection or to connect our project to sanity we make this client in lib 
export const Sanity_Client=createClient({
    apiVersion:"v2023-09-15",
    dataset:"production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    //?access api token from sanity which we have made for accessing purposes
    token:process.env.SANITY_ACCESS_TOKEN,
    //! our data caches are saved on CDN
    useCdn:true,

});
