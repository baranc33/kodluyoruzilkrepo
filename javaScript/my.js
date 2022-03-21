let setting={
    userName:"loremIpsum",
    password:"BadPassword",
    isActive:false,
    ip:"127.0.0.1",
    serverName:"Kodluyoruz.org"
}
//obje içersindeki nesneyi alabiliriz
// let userName=setting.userName

// let {userName,password,isActive,ip,serverName}=setting;
// yukardaki yöntemle hepsini birer değişken yaptık

// console.log(userName);
// console.log(password,isActive);
// console.log(ip,serverName);

//istersek bunlarda değişken ismini değiştirebilirz
//ip yerine server ip yapalım

let {userName,password,isActive,ip:ServerIp,serverName}=setting;

console.log(ServerIp)