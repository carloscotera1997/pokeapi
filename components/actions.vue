<template>
  <!-- <v-card v-show="itemsFiltered.length != 0 || search == ''"> -->
  <v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <Button
        :name="'All'"
        @clicked="changeCategory(true)"
        :color="getColor(category, '#F22539', '#BFBFBF')"
        :icon="'mdi-format-list-bulleted'"
        :size="30"
      />

      <Button
        :name="'Favorites'"
        @clicked="changeCategory(false)"
        :color="getColor(!category, '#F22539', '#BFBFBF')"
        :size="30"
        :icon="'mdi-star'"
      />
      <v-spacer> </v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import { utils } from '@/mixins/utils'
import Button from '@/components/utils/Button'
export default {
  mixins: [utils],
  props: ['category'],
  components: {
    Button,
  },
  methods: {
    changeCategory(cat) {
      this.$emit('change-category', cat)
    },
  },
}
</script>