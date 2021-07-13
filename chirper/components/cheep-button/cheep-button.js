Component({
  mixins: [],
  data: {},
  props: {
    onClick(){
      // this logs on modal
    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    clicked(){
      this.props.onClick();
    }
  },
});
