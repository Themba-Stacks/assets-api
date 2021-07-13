Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    openProfile(){
    my.redirectTo({
      url: '../profile/profile'
    });
  },
  openIndex(){
    my.redirectTo({
      url: '../index/index'
    });
  }

  },
});
