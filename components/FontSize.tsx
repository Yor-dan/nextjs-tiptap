'use client';

import { Editor, useEditorState } from '@tiptap/react';

type FontSizeProps = {
  editor: Editor;
};

export const SIZES = [
  { label: '8', value: '8px' },
  { label: '10', value: '10px' },
  { label: '12', value: '12px' },
  { label: '14', value: '14px' },
  { label: '16', value: '16px' },
  { label: '18', value: '18px' },
  { label: '20', value: '20px' },
  { label: '24', value: '24px' },
  { label: '30', value: '30px' },
  { label: '36', value: '36px' },
  { label: '48', value: '48px' },
  { label: '60', value: '60px' },
  { label: '72', value: '72px' },
];

export default function FontSize({ editor }: FontSizeProps) {
  const currentFontSize = useEditorState({
    editor,
    selector: (ctx) => ctx.editor.getAttributes('textStyle').fontSize || '16px',
  });

  console.log(currentFontSize);

  return (
    <select
      value={currentFontSize}
      onChange={(e) => {
        const value = e.target.value;
        editor.commands.setFontSize(value);
      }}
    >
      {SIZES.map((size) => (
        <option key={size.label} value={size.value}>
          {size.label}
        </option>
      ))}
    </select>
  );
}
