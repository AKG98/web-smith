import {  useContext } from 'react'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import EditorContext from '../contexts/EditorContext';
import ThemeContext from '../contexts/ThemeContext'


export default function EditorL() {
  const {cmTheme} = useContext(ThemeContext);
  const editTheme=cmTheme;
  const { editorText, updateEditorText } = useContext(EditorContext);
    
    const onChangeHtml = useCallback((value) => {
        updateEditorText('html', value);
    }, [updateEditorText]);

    const onChangeCss = useCallback((value) => {
        updateEditorText('css', value);
    }, [updateEditorText]);

    const onChangeJs = useCallback((value) => {
        updateEditorText('js', value);
    }, [updateEditorText]);

    const srcCode = `
    <html>
      <body>${editorText.html}</body>
      <style>${editorText.css}</style>
      <script>${editorText.js}</script>
    </html>
  `;
  return (
    <div className="container-fluid mt-5 p-2">
      <div className="row g-1">
        <div className="col-md-4">
          <div className="card mb-1" style={{ overflow: 'hidden', height: 'calc(100vh / 3)' }}>
            <div className="editor-title d-flex px-2" style={{ height: '1.7rem' }}>
              <i className="bi bi-filetype-html me-2"></i><p>HTML</p>
              <div className="ms-auto">
                <i className="bi bi-circle-fill text-danger me-1" style={{ fontSize: '0.7rem' }}></i>
                <i className="bi bi-circle-fill text-success" style={{ fontSize: '0.7rem' }}></i>
              </div>
            </div>
            <div className="card-body p-0">
              <CodeMirror
                className='code-mirror'
                value={editorText.html}
                theme = {editTheme}
                height='100%'
                extensions={[html(true)]}
                onChange={onChangeHtml}
              />
            </div>
          </div>
          <div className="card mb-1" style={{ overflow: 'hidden', height: 'calc(100vh / 3)' }}>
            <div className="editor-title d-flex px-2" style={{ height: '1.7rem' }}>
              <i className="bi bi-filetype-css me-2"></i><p>CSS</p>
              <div className="ms-auto">
                <i className="bi bi-circle-fill text-danger me-1" style={{ fontSize: '0.7rem' }}></i>
                <i className="bi bi-circle-fill text-success" style={{ fontSize: '0.7rem' }}></i>
              </div>
            </div>
            <div className="card-body p-0">
              <CodeMirror
                className='code-mirror'
                value={editorText.css}
                theme = {editTheme}
                height='100%'
                extensions={[css(true)]}
                onChange={onChangeCss}
              />
            </div>
          </div>
          <div className="card mb-1" style={{ overflow: 'hidden', height: 'calc(100vh / 3)' }}>
            <div className="editor-title d-flex px-2" style={{ height: '1.7rem' }}>
              <i className="bi bi-filetype-js me-2"></i><p>JS</p>
              <div className="ms-auto">
                <i className="bi bi-circle-fill text-danger me-1" style={{ fontSize: '0.7rem' }}></i>
                <i className="bi bi-circle-fill text-success" style={{ fontSize: '0.7rem' }}></i>
              </div>
            </div>
            <div className="card-body p-0">
              <CodeMirror
                className='code-mirror'
                value={editorText.js}
                theme = {editTheme}
                height='100%'
                extensions={[javascript(true)]}
                onChange={onChangeJs}
              />
            </div>
          </div>
        </div>
        <div className="col-md-8">
        <div className="output-container p-0" style={{ overflow: 'hidden', height: '101vh', borderRadius: '5px' }}>
                    <div className="editor-title d-flex px-2" style={{ height: '1.7rem' }}>
                        <i className="bi bi-box-fill me-2"></i><p>Output</p>
                        <div className="ms-auto" >
                            <i className="bi bi-circle-fill text-danger me-1" style={{ fontSize: '0.7rem' }}></i>
                            <i className="bi bi-circle-fill text-success" style={{ fontSize: '0.7rem' }}></i>
                        </div>
                    </div>
                    <div className='px-2' dangerouslySetInnerHTML={{ __html: srcCode }} style={{ width: '100%', height: '100%', background: 'transparent' }} />
                </div>
        </div>
      </div>
    </div>
  )
}
