import { profileRequest, cheepRequest } from "/request/request";

Page({
  data: {
    title: 'profile',
    profiles: '',
    userFilteredCheeps: ''
  },
  async onLoad() {
    const profile = await profileRequest()
    const userCheeps = await cheepRequest()
    console.log(profile)
    const filterCheeps = userCheeps.filter((cheep)=>{
      return profile.uniqueHandle === cheep.handle
    }) 

    this.setData({profiles: profile, userFilteredCheeps: filterCheeps})
  },
  openIndex(){
    my.redirectTo({
      url: '../index/index'
    });
  }
});
