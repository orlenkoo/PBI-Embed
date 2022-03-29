<script setup lang="ts">
import { selectedReport, setPowerBiEmbed, commentX } from '@/data/reports'
import { submitComment } from '@/data/reports/comments'
import { ref, watch, getCurrentInstance } from 'vue'

const embedContainer = ref<HTMLEmbedElement | null>(null)
const comment = ref('')
watch(selectedReport, (v) => {
  v && setPowerBiEmbed(embedContainer.value!, v?.url)
})

const is_expanded = ref(localStorage.getItem("is_expanded"))


const app = getCurrentInstance()
const test = app.appContext.config.globalProperties.$test

console.log('In Iframe global variable ', test)


</script>

<template>
  <section >
    <h1 class= "report-title" v-if="selectedReport">
      {{ selectedReport.name }} {{test}}
    </h1>
    <div class="iframex" ref="embedContainer"></div>

    <div class="modal" :class="{ 'modal-open': commentX.length }">
      <div class="modal-box flex flex-col items-stretch text-center">
        <button
          class="bg-primary rounded-full w-10 h-10 absolute top-0 right-0 pb-1 text-3xl"
          @click="commentX = ''"
        >
          &times;
        </button>
       <h3 class="font-bold text-lg">Add Commentary</h3>
        <input
          class="mt-5 input bg-base-200"
          type="text"
          name="comment"
          placeholder="Enter Comments"
          v-model="comment"
        />
        <div class="modal-action mx-auto">
          <button
            class="btn btn-primary px-10"
            @click="submitComment(commentX, comment)"
          >
            Submit
          </button>
        </div> 
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section {
  position: absolute;
  top: 90px;
  height: calc(100% - 110px);
  width: calc(100% - 90px);
  margin-left: 80px;
  transition: 0.2s ease-in-out;
}
.report-title {
  color: var(--dark);
}
.iframex {
  width: 100%;
  height: 100%;
//  border: 1px rgba(22, 22, 18, 0.13) solid;
  box-shadow: 0 0 5px #c4c4c4;
  background: var(--light);
}

aside.is-expanded ~ section {
  margin-left: 310px;
  width: calc(100% - 320px);
}

</style>