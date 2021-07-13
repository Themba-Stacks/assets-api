import { cheepRequest } from "/request/request";

Page({
  data:{
    title: 'index',
    message: "This is it",
    cheeps:""
  },
  async onLoad() {
    const cheepsExternal = await cheepRequest();
    
    
    this.setData({cheeps: cheepsExternal})

    console.log(this.data.cheeps);
  },
  openProfile(){
    my.redirectTo({
      url: '../profile/profile'
    });
  }
});
