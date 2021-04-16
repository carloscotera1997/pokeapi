
export const utils = {
  methods: {
    /**
* Obtiene el color del icono de item seleccionado
*/

    getColor(condition, primaryColor, secundaryColor) {
      return condition ? primaryColor : secundaryColor
    },
    /**
     * Metodo que verifica si un item esta agregadp
     *
     */
    verifySelected(item) {
      return this.$store.getters.getItems.includes(item)
    },

  }
}
