'use client';

import { Editor, ChainedCommands } from '@tiptap/react';

type ToolbarButtonProps = {
  editor: Editor;
  nodeOrMark: string;
  command: (chain: ChainedCommands) => ChainedCommands;
  children: React.ReactNode;
};

export default function ToolbarButton({
  editor,
  nodeOrMark,
  command,
  children,
}: ToolbarButtonProps) {
  // check if mark/node is active
  const isActive = editor.isActive(nodeOrMark);

  // check if command can be executed right now
  const canExecute = command(editor.can().chain().focus()).run();

  return (
    <button
      onClick={() => command(editor.chain().focus()).run()}
      disabled={!canExecute}
      className={isActive ? 'is-active' : ''}
      type="button"
    >
      {children}
    </button>
  );
}
