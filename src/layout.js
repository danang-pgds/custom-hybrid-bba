export default {
  data() {
    return { 
      step:{
        step2:false,
        step3:false,
        step4:false,
      },
      title: 'danang',
      count:0,
      data:'',
      authors:''
    }
  },
  mounted(){
    // this.fetchData()
  },
  methods: {
    increaseCount(n) {
      this.count += n
    },
    async fetchData() {
      // const response = await (await fetch('https://bes.hybridbooking.com/extranet/my_test_controller/checkBookingDOKU/51687835809?manual')).json();
      const response = await (await fetch('https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=main')).json();
      this.data = response;
      this.data.forEach(element => {
        console.log(element)
        this.authors = element.author;
      });
      // this.authors = response[0];
      // console.log(response)
      console.log(this.authors)
      // console.log(this.data[0].sha)
    }
  },
  template: `
  <div class="hybridbooking-modal-header">
    <div class="w-full py-6">
      <div class="flex">
        <Step1 />
        <Step234 :activeLine="step.step2" number="2" text="Detail & Contact"/>
        <Step234 :activeLine="step.step3" number="3" text="Payment" />
        <Step234 :activeLine="step.step4" number="4" text="Finish" />
      </div>
    </div>
  </div>
  <div class="hybridbooking-modal-body h-screen overflow-y-auto">
    <Calendar :title="title" @in-count="increaseCount"/>
    {{count}}
    {{authors.login}}
  </div>
  `
}