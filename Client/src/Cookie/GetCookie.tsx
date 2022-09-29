export const getCookie = ()=>{

let cookies:any = document.cookie || ""
if(!cookies)return ""
cookies = cookies.split(";") as unknown as object

let cookiesObj: any ={}
for(let i = 0; i< cookies.length; i++){
    if(cookies[i].includes("viewer_cookie-token_x_token")){
        cookiesObj.token = cookies[i]
    }
}
let userToken = cookiesObj.token
userToken = userToken?.split("=")[1] || JSON.stringify({none: "token"})
return userToken

}