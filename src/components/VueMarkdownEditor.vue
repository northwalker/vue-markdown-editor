<template>
  <div class="vue-markdown-editor">
    <div ref="box" class="box">
      <div v-show="mode === 'EDIT' || mode === 'PREVIEW' || mode === 'CODE'" :class="columnMode" class="box-editor">
        <div>
          <a class="editor-icon-btn" @click="formatBlock('bold')"><i class="material-icons">format_bold</i></a>
          <a class="editor-icon-btn" @click="formatBlock('italic')"><i class="material-icons">format_italic</i></a>
          <a class="editor-icon-btn" @click="formatBlock('strikethrough')"><i class="material-icons">format_strikethrough</i></a>
          <a class="editor-icon-btn" @click="insertDivided"><i class="material-icons">remove</i></a>
          <a class="editor-icon-btn" @click="insertQuote"><i class="material-icons">format_quote</i></a>
          <a class="editor-icon-btn" @click="insertLink"><i class="material-icons">insert_link</i></a>
          <a class="editor-icon-btn" @click="insertImage"><i class="material-icons">insert_photo</i></a>
          <a class="editor-icon-btn" @click="headerDropdownActive = !headerDropdownActive">
            <i class="material-icons">title</i>
            <div v-if="headerDropdownActive" class="insert-header-dropdown-container">
              <div class="insert-header-dropdown-list" @click.stop>
                <a class="insert-header-dropdown-item" @click="insertHeader(1)">Header 1 #</a>
                <a class="insert-header-dropdown-item" @click="insertHeader(2)">Header 2 ##</a>
                <a class="insert-header-dropdown-item" @click="insertHeader(3)">Header 3 ###</a>
                <a class="insert-header-dropdown-item" @click="insertHeader(4)">Header 4 ####</a>
                <a class="insert-header-dropdown-item" @click="insertHeader(5)">Header 5 #####</a>
                <a class="insert-header-dropdown-item" @click="insertHeader(6)">Header 6 ######</a>
              </div>
            </div>
          </a>
          <!-- <a class="editor-icon-btn" @click="insertTable"><i class="material-icons">table_chart</i></a> -->
          <a class="editor-icon-btn" href="https://gist.github.com/85cb338e0685d78a86f3ac269b663363.git"
             target="_blank" rel="noopener noreferrer"><i class="material-icons">info</i></a>

        </div>
        <hr>
        <textarea id="nwVueMarkdoenEditor" ref="nwVueMarkdoenEditor" name="nwVueMarkdoenEditor" placeholder="Write something..." />
        <div class="counting">
          Char: {{ countCahr }} Word: {{ countWord }}
        </div>
      </div>
      <div :class="columnMode" class="box-previewer">
        <div>Mode:
          <!-- <a class="editor-text-btn" :class="{active: mode === 'EDIT'}" @click="mode = 'EDIT'">
            EDIT
          </a>
          <a class="editor-text-btn" :class="{active: mode === 'DISPLAY'}" @click="mode = 'DISPLAY'">
            DISPLAY
          </a> -->
          <a class="editor-text-btn" :class="{active: mode === 'PREVIEW'}" @click="mode = 'PREVIEW'">
            Preview
          </a>
          <a class="editor-text-btn" :class="{active: mode === 'CODE'}" @click="mode = 'CODE'">
            code
          </a>
        </div>
        <hr>
        <div v-show="mode === 'DISPLAY' || mode === 'PREVIEW'" >
          <div v-html="markedContent" />
        </div>
        <div v-show="mode === 'CODE'">
          <pre><code id="code" class="CODE"> <!-- {{ markedContent }} --> </code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import example from '@/.tmp/example.js'
export default {
  name: 'VueMarkdownEditor',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editor: undefined,
      editorContent: '',
      mode: 'PREVIEW', // EDIT, DISPLAY, PREVIEW
      headerDropdownActive: false
    }
  },
  computed: {
    markedContent () {
      /* eslint-disable no-undef */
      return window.marked(this.editorContent)
    },
    columnMode () {
      return this.mode === 'PREVIEW' || this.mode === 'CODE'
        ? 'side' // side by side
        : 'single'
    },
    countCahr () {
      return this.editorContent ? this.editorContent.length : 0
    },
    countWord () {
      /* The right word count in respect for CJK. */
      // Github: sparksuite/simplemde.js
      const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g
      const m = this.editorContent.match(pattern)
      let count = 0
      if (m === null) return count
      for (var i = 0; i < m.length; i++) {
        if (m[i].charCodeAt(0) >= 0x4e00) {
          count += m[i].length
        } else {
          count += 1
        }
      }
      return count
    }
  },
  watch: {
    content (newValue) {
      if (newValue) {
        this.editorContent = JSON.parse(JSON.stringify(newValue))
        this.editor.setValue(this.editorContent)
      }
    },
    mode (newValue) {
      if (newValue && this.markedContent) {
        const codeElement = document.querySelector('#code')
        codeElement.textContent = this.markedContent
        this.$nextTick(() => {
          hljs.configure({
            useBR: true,
            tabReplace: '  '
          })
          hljs.highlightBlock(codeElement)
          codeElement.style.whiteSpace = 'pre-wrap'
        })
      }
    }
  },
  created () {},
  mounted () {
    /* eslint-disable no-undef */
    this.editor = window.CodeMirror.fromTextArea(document.querySelector('#nwVueMarkdoenEditor'), {
      lineWrapping: true,
      lineNumbers: false,
      autofocus: true
    })
    if (this.editor) {
      this.editor.on('change', cm => {
        this.editorContent = cm.getValue()
        this.$emit('change', this.editorContent)
      })
      // Demo
      this.editor.setValue(example)
    }
  },
  beforeDestroy () {},
  updated () {},
  methods: {
    formatBlock (type) {
      let startPoint = this.editor.getCursor('start')
      let endPoint = this.editor.getCursor('end')
      let text = this.editor.getSelection()
      if (type === 'bold') {
        text = text.split('**').join('')
        text = text.split('__').join('')
        this.editor.replaceSelection('**' + text + '**')
        startPoint.ch += '**'.length
        endPoint.ch = startPoint.ch + text.length
      } else if (type === 'italic') {
        text = text.split('*').join('')
        text = text.split('_').join('')
        this.editor.replaceSelection('*' + text + '*')
        startPoint.ch += '*'.length
        endPoint.ch = startPoint.ch + text.length
      } else if (type === 'strikethrough') {
        text = text.split('~').join('')
        this.editor.replaceSelection('~' + text + '~')
        startPoint.ch += '~'.length
        endPoint.ch = startPoint.ch + text.length
      }
      this.editor.setSelection(startPoint, endPoint)
      this.editor.focus()
    },
    insertDivided () {
      let selectedText = this.editor.getSelection()
      this.editor.replaceSelection(`${selectedText}\n***\n`)
      this.editor.focus()
    },
    insertQuote () {
      let cursor = this.editor.getCursor()
      let selectedText = this.editor.getSelection()
      if (selectedText && selectedText.length > 0) {
        this.editor.replaceSelection(`\n> ${selectedText}\n\n`)
      } else if (cursor && cursor.ch === 0) {
        this.editor.replaceSelection(`> ${selectedText}`)
      } else {
        this.editor.replaceSelection(`\n> ${selectedText}`)
      }
      this.editor.focus()
    },
    insertLink () {
      let startPoint = this.editor.getCursor('start')
      let endPoint = this.editor.getCursor('end')
      let selectedText = this.editor.getSelection()
      this.editor.replaceSelection(`[${selectedText}]()`)
      startPoint.ch += '['.length + selectedText.length + ']('.length
      endPoint.ch = startPoint.ch
      this.editor.setSelection(startPoint, endPoint)
      this.editor.focus()
    },
    insertImage () {
      let startPoint = this.editor.getCursor('start')
      let endPoint = this.editor.getCursor('end')
      let selectedText = this.editor.getSelection()
      this.editor.replaceSelection(`![${selectedText}]()`)
      startPoint.ch += '!['.length + selectedText.length + ']('.length
      endPoint.ch = startPoint.ch
      this.editor.setSelection(startPoint, endPoint)
      this.editor.focus()
    },
    getHeaderPoundKeyPrefix (level) {
      let poundKeyText = ''
      for (let i = 0; i < level; i++) {
        poundKeyText += '#'
      }
      return poundKeyText + ' '
    },
    insertHeader (level) {
      this.headerDropdownActive = false
      const cursor = this.editor.getCursor()
      const lineText = this.editor.getLine(cursor.line)
      const selectedText = this.editor.getSelection()
      const textPrefix = this.getHeaderPoundKeyPrefix(level)
      if (selectedText && selectedText.length > 0) {
        this.editor.replaceSelection(`\n${textPrefix}${selectedText}\n`)
      } else if (lineText && cursor.ch > 0) {
        const newStartPoint = { line: cursor.line, ch: 0 }
        const newEndPoint = { line: cursor.line, ch: textPrefix.length + lineText.length }
        this.editor.setSelection(newStartPoint, newEndPoint)
        this.editor.replaceSelection(`${textPrefix}${lineText}`)
      } else {
        // cursor.ch === 0
        this.editor.replaceSelection(`${textPrefix}${selectedText}`)
      }
      this.editor.focus()
    },
    insertTable () {
      // TO DO
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/code-mirror.scss';

.vue-markdown-editor {
  text-align: left;
  .insert-header-dropdown {
    &-container {
      position: relative;
    }
    &-list {
      z-index: 10;
      position: absolute;
      width: 200px;
      color: #2c3e50;
      background-color: #ffffff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    &-item {
      display: block;
      height: 32px;
      padding: 0 6px;
      line-height: 32px;
      cursor: pointer;
      &:hover {
        color: #42b983;
        background-color: lighten(#42b983, 40%);
      }
      &:active {
        color: #2c3e50;
        background-color: #42b983;
      }
    }

  }
  .editor {
    &-icon-btn {
      display: inline-block;
      vertical-align: middle;
      width: 36px;
      height: 36px;
      padding: 6px;
      color: #2c3e50;
      cursor: pointer;
      transition: all .4s ease;
      &:hover {
        color: #42b983;
        background-color: lighten(#42b983, 40%);
      }
      &:active {
        color: #2c3e50;
        background-color: #42b983;
      }
    }
    &-text-btn {
      display: inline-block;
      vertical-align: middle;
      min-width: 120px;
      height: 36px;
      line-height: 34px;
      padding: 0 16px;
      margin: 0 8px;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      border-radius: 4px;
      border: solid 1px #7d7d7d;
      cursor: pointer;
      transition: all .4s ease;
      > i {
        font-size: 16px;
        line-height: 36px;
      }
      &:hover {
        background-color: lighten(#42b983, 40%);
      }
      &:active {
        background-color: #42b983;
      }
      &.active {
        color: #42b983;
        font-weight: 700;
        border: solid 1px #42b983;
      }
    }
  }
  .box {
    margin-top: 24px;
    margin-bottom: 20px; // offset
    .single {
      max-width: 1024px;
      margin: 0 auto;
    }
    .side {
      width: 50%;
      float: left;
    }
    &-editor {
      &.side {
        padding: 24px;
      }
      .counting {
        margin: 16px 0;
        color: #505050;
        font-size: 16px;
        line-height: 32px;
      }
      // textarea {
      //   display: block;
      //   width: 100%;
      //   height: 70vh;
      //   padding: 16px;
      //   border-radius: 6px;
      //   border: solid 1px #ececec;
      //   font-size: 20px;
      //   color: #505050;
      //   outline: none;
      //   resize: none;
      //   overflow: auto;
      // }
    }
    &-previewer {
      &.side {
        padding: 24px;
        border-left: 1px solid #ececec;
      }
      padding: 24px;
    }
  }
}
</style>
