export default {
  data() {
    return { 
      step:{
        step2:true,
        step3:true,
        step4:false,
      },
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
        <Step234 :activeLine="step.step2" number="2" text="Detail & Contact"/>
        <Step234 :activeLine="step.step3" number="3" text="Payment" />
        <Step234 :activeLine="step.step4" number="4" text="Finish" />
      </div>
    </div>
  </div>
  <div class="hybridbooking-modal-body h-screen overflow-y-auto">
    <Calendar :title="title" @in-count="increaseCount"/>
    {{count}}
  </div>
  `
}