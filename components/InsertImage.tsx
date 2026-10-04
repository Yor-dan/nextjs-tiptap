import { Editor } from '@tiptap/react';
import { ChangeEvent } from 'react';

interface InsertImageProps {
  editor: Editor | null;
}

export default function InsertImage({ editor }: InsertImageProps) {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];

    if (!image || !editor) return;

    const objectUrl = URL.createObjectURL(image);
    editor.chain().focus().setImage({ src: objectUrl }).run();
    e.target.value = '';
  };

  return <input type="file" accept="image/*" onChange={handleImageChange} />;
}
