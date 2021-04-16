<template>
  <div>
    <loading v-if="loading" v-show="loading" />
    <v-container v-else>
      <info-pokemon
        class="text-left"
        :showDialog="showDialog"
        @dialog-closed="dialogClosed"
        :item="pokemonChoosen"
        @change-selected="setFavorite(pokemonChoosen)"
      />
      <v-flex md>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          filled
          solo
        >
        </v-text-field>

        <div
          class="text-left"
          v-if="itemsFiltered.length != 0"
          style="overflow-y: scroll; height: 400px"
        >
          <v-list-item-group>
            <v-list-item
              class="item"
              v-for="(pokemon, index) in itemsFiltered"
              :key="index"
            >
              <v-list-item-content
                @click.stop="showInfoPokemon(pokemon, index)"
              >
                <v-list-item-title v-text="pokemon.name" />
              </v-list-item-content>
              <v-list-item-icon>
                <v-btn icon @click="setFavorite(pokemon)">
                  <v-icon
                    :color="verifySelected(pokemon) ? '#ECA539' : '#BFBFBF'"
                    v-text="'mdi-star'"
                  />
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </div>
      </v-flex>
      <v-flex :md="6" centered>
        <empty-list
          :title="'Uh-oh!'"
          @go-to-home="search = ''"
          :message="'You look lost on your journey!'"
          :nameButton="'Go back home'"
          v-if="itemsFiltered.length == 0"
        />
      </v-flex>
      <div v-show="itemsFiltered.length != 0 || search == ''">
        <Actions :category="category" @change-category="changeCategory" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Button from '@/components/utils/Button'
import Config from '@/assets/config'
import { request } from '@/mixins/request'
import { utils } from '@/mixins/utils'
import infoPokemon from '@/components/info'
import Actions from '@/components/actions'
import loading from '@/components/utils/loading'
import EmptyList from '@/components/utils/empty'
export default {
  mixins: [request, utils],
  beforeMount() {
    this.getAllPokemons()
  },
  components: { Button, infoPokemon, loading, EmptyList, Actions },
  data() {
    return {
      search: '',
      loading: true,
      category: true,
      config: Config,
      pokemonChoosen: {},
      indexPokemonChoosen: null,
      showDialog: false,
      items: [],
    }
  },
  computed: {
    itemsFiltered() {
      let items = this.category ? this.items : this.$store.getters.getItems
      return this.search != '' ? this.filter(items, 'name', this.search) : items
    },
  },
  methods: {
    changeCategory(value) {
      this.category = value
    },

    dialogClosed() {
      this.showDialog = false
    },

    /**
     * Metodo que muestra la información especifica del pokemon
     *
     */
    showInfoPokemon(item, index) {
      this.indexPokemonChoosen = index
      this.pokemonChoosen = item
      this.showDialog = true
    },
    /**
     * Metodo que obtiene todos los pokemones
     */
    async getAllPokemons() {
      let res = await this.getData(this, this.config.urlAllPokemons)
      this.loading = false
      this.items = res.data.results
    },

    /**
     * Metodo filtra una array de json con una key especifica
     */
    filter(items, key, value) {
      return items.filter((item) => {
        return item[key].includes(value)
      })
    },

    /**
     * Metodo que agrega un elemento al store de favoritos
     */
    setFavorite(item) {
      if (this.verifySelected(item)) {
        this.$store.commit('deleteItem', item)
      } else {
        this.$store.commit('addItem', item)
      }
    },
  },
}
</script>


<style>
.list {
  background-color: #f9f9f9;
}
.item {
  background-color: white;
  margin-bottom: 10px;
}
.text-left {
  text-align: left;
}
</style>