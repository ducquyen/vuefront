import { isString, isEmpty, isUndefined } from 'lodash'

export const BaseLayout = {
  computed: {
    modules() {
      let result = []
      for (const route in this.$vuefront.options.layouts) {
        const layout = this.$vuefront.options.layouts[route]
        let regexRoute = route.replace('*', '.*')
        regexRoute = regexRoute.replace('//', '\\//')
        const regex = new RegExp('^' + regexRoute + '$', 'i')
        let currentRoute = this.$route.path !== '' ? this.$route.path : '/'
        if (!isEmpty(this.$vuefront.params.url)) {
          currentRoute = this.$vuefront.params.url
        }

        currentRoute = currentRoute.replace('/amp', '')

        currentRoute = currentRoute !== '' ? currentRoute : '/'

        if (regex.test(currentRoute) && !isUndefined(layout[this.position])) {
          for (const key in layout[this.position]) {
            if (isString(layout[this.position][key])) {
              result = [
                ...result,
                {
                  component: 'vfE' + layout[this.position][key],
                  props: {},
                },
              ]
            } else {
              result = [
                ...result,
                {
                  component: 'vfE' + layout[this.position][key][0],
                  props: layout[this.position][key][1],
                },
              ]
            }
          }
        }
      }
      return result
    },
  },
}
