import { shallowMount } from '@vue/test-utils'
import VueMarkdownEditor from '@/components/VueMarkdownEditor.vue'

describe('VueMarkdownEditor.vue', () => {
  it('should render correct contents', () => {
    window.marked = (text) => text
    window.CodeMirror = {
      fromTextArea: (text) => text
    }
    const wrapper = shallowMount(VueMarkdownEditor, {
      // mocks: {},
      // stubs: {}
    })
    expect(wrapper.contains('.vue-markdown-editor')).toBe(true)
  })
})
