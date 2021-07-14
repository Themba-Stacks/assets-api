if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/cheep-tap/cheep-tap?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/cheep/cheep?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/cheep-nav/cheep-nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/cheep-button/cheep-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/cheep-modal/cheep-modal?hash=77082571bcce38871015e3fa55fc644572846ca7');
require('../../components/cheep-profile/cheep-profile?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=8dc7488b197fea8281c2ee8f2356784c77ecc15d');
require('../../pages/profile/profile?hash=fa903d9482a60f077893060a59aca576765efedd');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}