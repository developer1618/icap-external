export { default as AddButton } from '../..\\components\\AddButton.vue'
export { default as AddModal } from '../..\\components\\AddModal.vue'
export { default as AdminMenu } from '../..\\components\\AdminMenu.vue'
export { default as Authorization } from '../..\\components\\Authorization.vue'
export { default as CalendarInput } from '../..\\components\\CalendarInput.vue'
export { default as DeleteModal } from '../..\\components\\DeleteModal.vue'
export { default as ExitModal } from '../..\\components\\ExitModal.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Loader } from '../..\\components\\Loader.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as PartnerMenu } from '../..\\components\\PartnerMenu.vue'
export { default as ResetPassword } from '../..\\components\\ResetPassword.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as SendEmail } from '../..\\components\\SendEmail.vue'
export { default as Table } from '../..\\components\\Table.vue'
export { default as UploadFile } from '../..\\components\\UploadFile.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
