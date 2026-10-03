'use client';

import { Editor, useEditorState } from '@tiptap/react';

type FontSelectorProps = {
  editor: Editor;
};

const FONTS = [
  // Generic / System Fallbacks
  { name: 'Default', value: 'Inter, sans-serif' },
  { name: 'Serif', value: 'Georgia, serif' },
  { name: 'Monospace', value: 'monospace' },

  // Standard Web-Safe Sans-Serif
  { name: 'Arial', value: 'Arial, "Helvetica Neue", Helvetica, sans-serif' },
  { name: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' },
  { name: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
  { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
  {
    name: 'Lucida Sans',
    value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  {
    name: 'Segoe UI',
    value: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  { name: 'Tahoma', value: 'Tahoma, Verdana, Segoe, sans-serif' },
  {
    name: 'Trebuchet MS',
    value: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },

  // Standard Web-Safe Serif
  {
    name: 'Georgia',
    value: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
  {
    name: 'Palatino',
    value: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  },
  {
    name: 'Times New Roman',
    value: '"Times New Roman", Times, Baskerville, Georgia, serif',
  },

  // Standard Web-Safe Monospace
  {
    name: 'Courier New',
    value: '"Courier New", Courier, "Lucida Sans Typewriter", monospace',
  },
  { name: 'Lucida Console', value: '"Lucida Console", Monaco, monospace' },
];

export default function FontSelector({ editor }: FontSelectorProps) {
  // Subscribes to editor state changes so the component re-renders when selection updates
  const currentFont = useEditorState({
    editor,
    selector: (ctx) =>
      ctx.editor.getAttributes('textStyle').fontFamily || 'Default',
  });
  console.log(currentFont);

  if (!editor) return null;

  return (
    <select
      value={currentFont}
      onChange={(e) => {
        const value = e.target.value;
        editor.commands.setFontFamily(value);
      }}
    >
      {FONTS.map((font) => (
        <option key={font.name} value={font.value}>
          {font.name}
        </option>
      ))}
    </select>
  );
}
