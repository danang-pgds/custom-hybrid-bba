import { nextTick } from 'vue'

export default {
  props: ['activeLine','number','text','test'],
  data(){
    return {
      lineStep:'width: calc(100% - 2.5rem); top: 50%; transform: translate(-50%, -50%)',
      lineActive:"'width':'100%'",
      classIcon:'w-8 h-8 mx-auto bg-gray-200 border-2 border-gray-200 rounded-full text-lg text-white flex items-center'
    }
  },
  mounted: ()=>{
    
  },
  methods: {
    init() {
      this.lineStep = 'width: calc(100% - 2.5rem); top: 50%; transform: translate(-50%, -50%)';
      this.lineActive = this.activeLine ? "width:100%":"width:0%";
      const classIconActive = 'w-8 h-8 mx-auto rounded-full text-md text-white flex items-center bg-red-500';
      const classIconInActive = 'w-8 h-8 mx-auto bg-gray-200 border-2 border-gray-200 rounded-full text-lg text-white flex items-center';
      this.classIcon = this.activeLine ? classIconActive:classIconInActive;
    }
    
  },
  template: `
  <div class="w-1/4">
    <div class="relative mb-2">
      <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem); top: 50%; transform: translate(-50%, -50%)">
        <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
          <div class="w-0 bg-red-300 h-1 rounded" style="{{test}}"></div>
        </div>
      </div>

      <div class="{{classIcon}}">
        <span class="text-center w-full text-white">{{number}}</span>
      </div>
    </div>
    <div class="text-ms text-center">{{text}}</div>
  </div>
  `
}