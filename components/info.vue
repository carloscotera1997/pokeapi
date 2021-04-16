<template>
  <div data-app>
    <v-dialog v-model="showInfo" width="600" persistent>
      <v-card>
        <v-img
          lazy-src="../background_pokemon.svg"
          src="../background_pokemon.svg"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-spacer> </v-spacer>
            <v-btn icon @click="close()">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-app-bar>
          <img
            width="200px"
            height="200px"
            :src="
              info.sprites ? info.sprites.other.dream_world.front_default : ''
            "
          />
        </v-img>
        <v-card-text>
          <p class="text"><b> Name: </b> {{ info.name }}</p>
          <v-divider></v-divider>
          <p class="text"><b> Weight: </b> {{ info.height }}</p>
          <v-divider></v-divider>
          <p class="text"><b> Height: </b> {{ info.weight }}</p>
          <v-divider></v-divider>
          <p class="text">
            <b> Types: </b> {{ info.types ? getTypes(info.types) : 'No types' }}
          </p>

          <v-divider></v-divider>
        </v-card-text>
        <v-card-actions>
          <Button
            :color="'#F22539'"
            :name="'Share to my  friends'"
            @clicked="clipboard()"
          />
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="starEvent()"
            :color="verifySelected(item) ? '#ECA539' : '#BFBFBF'"
          >
            <v-icon v-text="'mdi-star'" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Button from '@/components/utils/Button'
import { request } from '@/mixins/request'
import { utils } from '@/mixins/utils'
import Config from '@/assets/config'
export default {
  //TODO: Mejorar con valores por defecto las props
  props: ['showDialog', 'item'],
  mixins: [request, utils],
  components: {
    Button,
  },
  data() {
    return {
      showInfo: this.showDialog,
      info: {},
      config: Config,
    }
  },
  watch: {
    showDialog(val) {
      this.showInfo = val
    },

    item: {
      handler(val) {
        this.getInfoPokemon()
      },
      deep: true,
    },
  },
  methods: {
    clipboard() {
      let aux = document.createElement('input')
      aux.setAttribute('value', 'holaaaaaaaaaaaaaaaa')
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      document.body.removeChild(aux)
    },

    getTypes(types) {
      types = types.map((type) => {
        return type.type.name
      })
      return types.join(' , ')
    },
    async getInfoPokemon() {
      let res = await this.getData(
        this,
        `${this.config.urlAllPokemons}/${this.item.name}`
      )
      this.info = res.data
      this.info.selected = this.item.selected
    },
    starEvent() {
      this.$emit('change-selected')
    },
    close() {
      this.showInfo = false
      this.$emit('dialog-closed')
    },
  },
}
</script>
<style>
.text {
  margin: 10px;
}
</style>


