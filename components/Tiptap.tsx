'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle, FontFamily, FontSize } from '@tiptap/extension-text-style';
import ImageResize from 'tiptap-extension-resize-image';
import Toolbar from './Toolbar';

export default function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, FontFamily, FontSize, ImageResize],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <button
        onClick={() => {
          const htmlContent = editor.getHTML();
          console.log(htmlContent);
        }}
      >
        Submit
      </button>
    </div>
  );
}
