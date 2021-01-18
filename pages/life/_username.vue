<template>
  <div @click="parentClicked" class="flex flex-col px-5 md:px-24 select-none">
    <div class="w-full flex justify-between py-8">
      <button
        @click="goback"
        class="w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-200 transform -translate-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div class="flex relative">
        <button
          class="w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
        <button
          id="setting"
          @click="toggleMenu"
          class="w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-200 ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-tool"
          >
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            ></path>
          </svg>
        </button>

        <div
          v-if="showMenu"
          id="menu"
          class="absolute top-0 right-0 transform translate-y-12 mt-1 bg-white border border-gray-300 shadow-lg rounded-lg z-30"
        >
          <div class="p-4 text-left">
            <h1 class="text-lg font-bold pb-4">Setting</h1>
            <div class="pb-4">
              <h2 class="pb-2">Life expectancy</h2>
              <input
                type="number"
                name="expectancy"
                v-model="diesAt"
                class="border-b p-1"
              />
            </div>

            <div class="pb-4">
              <h2 class="pb-2">Database support</h2>
              <div class="flex items-center">
                <p class="pr-4 text-sm text-gray-600">Off</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-gray-500"
                >
                  <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
                  <circle cx="8" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>

            <button
              @click="toggleMenu"
              class="mt-4 w-full py-2 bg-black text-white font-bold rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-8 md:pb-12">
      <h1 class="text-2xl font-bold">Your life in weeks</h1>
      <p>Born {{ commad(daysPassed) }} days ago</p>
    </div>
    <p class="text-sm text-right text-gray-600 pb-2">
      {{ Math.round((daysPassed / lifeDays) * 100) }}% completed
    </p>
    <div class="pb-2 overflow-x-scroll">
      <div
        v-for="(_, index) of Array(Number(diesAt)).fill(1)"
        :key="index"
        class="flex items-center year"
      >
        <div class="num flex-none absolute transform -translate-x-4">
          <p class="text-xs">
            {{ index % 5 === 0 ? index : '' }}
          </p>
        </div>
        <div
          v-for="(_, ix) of Array(weeksYear).fill(1)"
          :key="ix"
          class="weeks relative"
        >
          <div
            class="box"
            :class="{
              'bg-green-500': passed(index, ix),
              'border border-gray-400': !passed(index, ix),
            }"
          ></div>
          <!-- <div class="absolute w-32 h-12 shadow-xl bg-black rounded-lg z-20">
            <div class="py-1 px-2 text-white">
              <p>Week {{ ((index + 1) * 52) + (ix + 1) }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="pt-12 pb-24 flex justify-center">
      <a
        href="https://www.github.com/kentozuka"
        target="_blank"
        class="text-gray-600"
        >GitHub: kentozuka</a
      >
    </div>
    <!-- <div class="flex flex-wrap bg-blue-200">
      <div v-for="(item, index) of Array(500).fill(1)" :key="index" class="">
        <div class="w-8 h-8 bg-black"></div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
  transition: 'fade',

  asyncData({ params }) {
    const username = params.username
    return { username }
  },

  data: () => ({
    showMenu: false,
    now: new Date(),
    diesAt: 100 as number,
    weeksYear: 52, // weeks in a year
    daysYear: 365,
  }),

  computed: {
    birthday(): string {
      return this.$accessor.birthday
    },
    daysPassed(): number {
      return this.diffPassed(this.birthday, 'day')
    },
    weeksPassed(): number {
      return this.diffPassed(this.birthday, 'week')
    },
    lifeDays(): number {
      return this.diesAt * this.daysYear
    },
  },

  methods: {
    goback(): void {
      this.$router.go(-1)
    },
    commad(x: number | string): string {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    sum(year: number, weeks: number): number {
      return year * this.weeksYear + weeks // 1 year has 52 weeks
    },
    passed(index: number, ix: number): boolean {
      return this.sum(index, ix + 1) <= this.weeksPassed
    },
    diffPassed(target: string, type: string): number {
      const n = this.$dayjs(target)
      return this.$dayjs(this.now).diff(n, type)
    },
    toggleMenu(): void {
      this.showMenu = !this.showMenu
    },
    parentClicked (event: any): void {
      if (!this.showMenu) return
      const menu = document.getElementById('menu')
      const btn = document.getElementById('setting')
      const inside = menu.contains(event.target)
      const fromMenu = btn.contains(event.target)
      if (!inside && !fromMenu) this.toggleMenu()
    }
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.num {
  width: 16px;
  height: 20px;
}
.box {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin: 0 2px 4px;
}
</style>
