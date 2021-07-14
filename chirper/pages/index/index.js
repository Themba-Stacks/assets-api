import { cheepRequest } from "/request/request";

Page({
  data:{
    title: 'index',
    message: "This is it",
    cheeps:"",
    isModalOpen: false

  },
  onLoad() {
    this.getCheeps()
  },

  async getCheeps(){
    const cheepsExternal = await cheepRequest();
    this.setData({cheeps: cheepsExternal})
  },

  showCheepModal(){
    this.setData({isModalOpen: !this.data.isModalOpen})
  },

  openProfile(){
    my.redirectTo({
      url: '../profile/profile'
    });
  }
});
