import { newCheepRequest } from "/request/request";

Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onSubmit: async function(event) {
      console.log(event)
      await newCheepRequest({
        handle: "@user",
        message: event.detail.value.cheepText,
        profileImageSrc: "/assets/images/js_logo.svg"

      })
      this.$page.showCheepModal();

      this.$page.getCheeps();
    },
  },
});
