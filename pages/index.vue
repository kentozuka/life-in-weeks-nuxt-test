<template>
  <div class="container">
    <div class="pb-32 relative">

      <h1 class="text-4xl font-bold">LIFE IN WEEKS</h1>
      <p class="text-2xl pt-2">🎂</p>
      <p class="py-2 transition duration-200" :class="{ 'text-red-500 font-bold': invalid }">{{ date }}</p>

      <form @submit.prevent="handleSubmission">
        <div class="flex flex-col pb-4">
          <label for="year" class="text-sm text-left pb-2">year</label>
          <input
            type="number"
            name="year"
            v-model="year"
            class="px-2 py-1 border-b"
            placeholder="year"
          />
        </div>

        <div class="flex flex-col pb-4">
          <label for="month" class="text-sm text-left pb-2">month</label>
          <select
            name="month"
            id="month"
            v-model="month"
            class="appearance-none px-2 py-1 border-b"
          >
            <option value="" selected disabled hidden>month</option>
            <option v-for="month of months" :key="month.name" :value="month.number">{{month.name}}</option>
          </select>
        </div>

        <div class="flex flex-col pb-4">
          <label for="day" class="text-sm text-left pb-2">day</label>
          <input
            type="number"
            name="day"
            v-model="day"
            class="px-2 py-1 border-b"
            placeholder="day"
          />
        </div>

        <div class="flex flex-col">
          <label for="day" class="text-sm text-left pb-2">username</label>
          <input
            type="text"
            name="username"
            v-model="username"
            class="px-2 py-1 border-b"
            placeholder="optional"
          />
        </div>

        <button type="submit" class="w-full rounded-lg mt-8 px-4 py-2 bg-black border transition duration-200" :class="{ 'bg-gray-500': invalid }">
          <h1 class="font-bold text-white">
            <template v-if="invalid">
              Invalid Date
            </template>
            <template v-else>
              Generate
            </template>
          </h1>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'index',

  data: () => ({
    year: 2000,
    month: 1,
    day: 1,
    username: '',
    notice: false,
    months: [
      { name: 'January', number: 1, },
      { name: 'February', number: 2, },
      { name: 'March', number: 3, },
      { name: 'April', number: 4, },
      { name: 'May', number: 5, },
      { name: 'June', number: 6, },
      { name: 'July', number: 7, },
      { name: 'August', number: 8, },
      { name: 'September', number: 9, },
      { name: 'October', number: 10, },
      { name: 'November', number: 11, },
      { name: 'December', number: 12, },
    ],
  }),

  computed: {
    date(): string {
      return this
        .$dayjs(new Date(this.year, this.month - 1, this.day))
        .format('YYYY/MM/DD')
    },
    invalid () {
      return this.date === 'Invalid Date' || this.day > 31
    }
  },
  
  methods: {
    handleSubmission (): void {
      if (this.invalid) return this.toggleNotice()

      this.$accessor.setBirthday(this.date)

      const username = this.username || 'anonymous'
      this.$accessor.setUsername(username)

      this.$router.push({ path: `/life/${username}` })
    },
    toggleNotice (): void {
      this.notice = !this.notice
    }
  }
})
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
