Component({
  mixins: [],
  data: {
    cheep: ''
  },
  props: {},
  didMount() {
    this.setData({cheep: this.props.cheep})
  },
  
  methods: {},
});
