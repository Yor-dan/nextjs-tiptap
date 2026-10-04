import { Editor, useEditorState } from '@tiptap/react';

type FontSelectorProps = {
  editor: Editor;
};

const FONTS = [
  // Generic / System Fallbacks
  { label: 'Default', value: 'Inter, sans-serif' },
  { label: 'Serif', value: 'Georgia, serif' },
  { label: 'Monospace', value: 'monospace' },

  // Standard Web-Safe Sans-Serif
  { label: 'Arial', value: 'Arial, "Helvetica Neue", Helvetica, sans-serif' },
  { label: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' },
  { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
  { label: 'Impact', value: 'Impact, Charcoal, sans-serif' },
  {
    label: 'Lucida Sans',
    value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  {
    label: 'Segoe UI',
    value: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  { label: 'Tahoma', value: 'Tahoma, Verdana, Segoe, sans-serif' },
  {
    label: 'Trebuchet MS',
    value: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  { label: 'Verdana', value: 'Verdana, Geneva, sans-serif' },

  // Standard Web-Safe Serif
  {
    label: 'Georgia',
    value: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
  {
    label: 'Palatino',
    value: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  },
  {
    label: 'Times New Roman',
    value: '"Times New Roman", Times, Baskerville, Georgia, serif',
  },

  // Standard Web-Safe Monospace
  {
    label: 'Courier New',
    value: '"Courier New", Courier, "Lucida Sans Typewriter", monospace',
  },
  { label: 'Lucida Console', value: '"Lucida Console", Monaco, monospace' },
];

export default function FontSelector({ editor }: FontSelectorProps) {
  // Subscribes to editor state changes so the component re-renders when selection updates
  const currentFont = useEditorState({
    editor,
    selector: (ctx) =>
      ctx.editor.getAttributes('textStyle').fontFamily ||
      'Arial, "Helvetica Neue", Helvetica, sans-serif',
  });

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
        <option key={font.label} value={font.value}>
          {font.label}
        </option>
      ))}
    </select>
  );
}
