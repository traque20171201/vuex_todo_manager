<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="paginations.currentPage"
              class="my-4"
              :length="paginations.totalPages"
              :totalVisible="paginations.totalVisible"
              @input="$emit('nextPage')"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    props: {
      paginations: {
        type: Object
      },
    },
    data () {
      return {
        circle: false,
        disabled: false,
        length: 15,
        nextIcon: 'navigate_next',
        nextIcons: ['mdi-chevron-right', 'mdi-arrow-right', 'mdi-menu-right'],
        prevIcon: 'navigate_before',
        prevIcons: ['mdi-chevron-left', 'mdi-arrow-left', 'mdi-menu-left'],
        page: 1,
        totalVisible: 7,
      }
    },
  }
</script>

<style scoped>
</style>