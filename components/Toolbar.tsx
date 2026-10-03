'use client';

import { Editor } from '@tiptap/react';
import ToolbarButton from './ToolbarButton';
import FontSelector from './FontSelector';

type ToolbarProps = {
  editor: Editor | null;
};

export default function Toolbar({ editor }: ToolbarProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="toolbar flex gap-2">
      {/*bold*/}
      <ToolbarButton
        editor={editor}
        nodeOrMark="bold"
        command={(chain) => chain.toggleBold()}
      >
        Bold
      </ToolbarButton>

      {/*italic*/}
      <ToolbarButton
        editor={editor}
        nodeOrMark="italic"
        command={(chain) => chain.toggleItalic()}
      >
        Italic
      </ToolbarButton>

      {/*strike*/}
      <ToolbarButton
        editor={editor}
        nodeOrMark="strike"
        command={(chain) => chain.toggleStrike()}
      >
        Strike
      </ToolbarButton>

      {/*underline*/}
      <ToolbarButton
        editor={editor}
        nodeOrMark="underline"
        command={(chain) => chain.toggleUnderline()}
      >
        Underline
      </ToolbarButton>

      {/*bullet list*/}
      <ToolbarButton
        editor={editor}
        nodeOrMark="bulletList"
        command={(chain) => chain.toggleBulletList()}
      >
        Bullet List
      </ToolbarButton>

      {/*ordered list*/}
      <ToolbarButton
        editor={editor}
        nodeOrMark="orderedList"
        command={(chain) => chain.toggleOrderedList()}
      >
        Ordered List
      </ToolbarButton>

      <FontSelector editor={editor} />
    </div>
  );
}
