import { shallowMount } from '@vue/test-utils'
import VueMarkdownEditor from '@/components/VueMarkdownEditor.vue'

describe('VueMarkdownEditor.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(VueMarkdownEditor, {})
    expect(wrapper.contains('.vue-markdown-editor')).toBe(true)
  })
})
