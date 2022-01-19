let user={userName :"Hakan Baran Çakır", isActive :true};


//obje olarak kaydetmek yerine json tipine çevirip atmalıyız
localStorage.setItem('userInfo',JSON.stringify(user));

let info=localStorage.getItem('userInfo');
// bu bilgiyi parshe etmemiz lazım yoksa string olarka geliyor
info =JSON.parse(info);
console.log(info.userName);
console.log(info.isActive);