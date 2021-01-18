import { accessorType } from '../store/index'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}


// Todo
/**
 * add percentage completed
 * add max life span
 * add localstorage support
 * add color setting
 * add mark your event button
 * add database support for premium?
 * git commit main ni
 */
