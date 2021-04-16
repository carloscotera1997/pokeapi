export const request = {
  methods: {
    getData: async (context, url) => {
      return await context.$axios.get(url)

    }
  }
}
