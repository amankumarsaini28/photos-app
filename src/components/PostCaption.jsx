import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import { useRef, useState } from 'react';

export const PostCaption = ({ text }) => {
  const ref = useRef();

  const [initialConfig] = useState({
  namespace: 'MyEditor',
  editable: false,
  onError: error => {
    console.error('ERR:LEXICAL:: ', error);
  },
  editorState: editor => {
    const state = editor.parseEditorState(text)
    editor.setEditorState(state);
  }
});

  return (
    <div className="post-caption">
      <LexicalComposer initialConfig={initialConfig} >
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </LexicalComposer>
    </div>
  );
}