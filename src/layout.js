export default {
  data() {
    return { 
      // step:{
        step2:false,
        step3:false,
        step4:false,
      // },
      title: 'danang',
      count:0
    }
  },
  methods: {
    increaseCount(n) {
      this.count += n
    }
    
  },
  template: `
  <div class="hybridbooking-modal-header">
    <div class="w-full py-6">
      <div class="flex">
        <Step1 />
        <Step234 :activeLine="step2" number="2" text="Detail & Contact" test="width:100%"/>
        <Step234 :activeLine="step3" number="3" text="Payment" />
        <Step234 :activeLine="step4" number="4" text="Finish" />
      </div>
    </div>
  </div>
  <div class="hybridbooking-modal-body h-screen overflow-y-auto">
    <Calendar :title="title" @in-count="increaseCount"/>
    {{count}}
  </div>
  `
}