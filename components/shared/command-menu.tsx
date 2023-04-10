import { clsx } from 'clsx';
import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { DividerVerticalIcon } from '@radix-ui/react-icons';

interface CommandMenuProps<T extends { label: string }> {
  items: T[];
  onSelect?: (data: {
    item: T;
    modifiers: {
      control: boolean;
    };
  }) => void;
}

function CommandMenu<T extends { label: string }>({
  items,
  onSelect,
}: CommandMenuProps<T>) {
  const [open, setOpen] = useState(false);
  const [isHoldingModifier, setIsHoldingModifier] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle the menu when ⌘K is pressed
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        setIsHoldingModifier(true);
      }
    };

    const keyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        setIsHoldingModifier(false);
      }
    };

    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    return () => {
      document.removeEventListener('keydown', keyDown);
      document.removeEventListener('keyup', keyUp);
    };
  }, []);

  return (
    <Command.Dialog
      className={clsx(
        'z-[50]',
        'fixed left-1/2 top-[20%] -translate-x-1/2 transform',
        'w-full sm:max-w-lg md:max-w-xl',
        'bg-white/70 backdrop-blur-xl dark:bg-gray-900/80',
        'rounded-lg shadow-lg',
      )}
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu">
      <div className="relative ml-px mt-2 pl-1.5">
        <Command.Input
          placeholder="Search for a component"
          className={clsx(
            'bg-transparent',
            'block w-full',
            'text-sm font-medium text-gray-700 placeholder:text-gray-600 dark:text-gray-300 dark:placeholder:text-gray-500',
            'border-none focus:border-transparent focus:outline-none focus-visible:ring-transparent',
          )}
        />
        <kbd
          onClick={() => setOpen(false)}
          className="absolute right-5 top-1/2 flex h-5 w-auto -translate-y-1/2 select-none items-center justify-center rounded-md bg-black/10 px-1.5 text-[0.6rem] font-bold leading-none text-gray-700 hover:cursor-pointer dark:bg-white/10 dark:text-gray-300">
          ESC
        </kbd>
      </div>
      <Command.Separator
        alwaysRender
        className="mt-2 h-px bg-gray-300/70 dark:bg-gray-300/10"
      />
      <Command.List
        style={{
          // Should equal py-2 below
          scrollPaddingBlockStart: '0.5rem',
          scrollPaddingBlockEnd: '0.5rem',
        }}
        className="max-h-[50vh] w-full overflow-y-auto px-2 py-2">
        <Command.Empty className="flex items-center space-x-2 px-3 py-3 text-sm text-gray-700 dark:text-gray-300">
          <DocumentMagnifyingGlassIcon className="h-5 w-5" />
          <span className="font-medium">No Results</span>
        </Command.Empty>
        {items.map((item) => (
          <Command.Item
            key={`cmdk-item-${item.label}`}
            onSelect={() => {
              // onSelect({ item, modifiers: { control: isHoldingModifier } });
              setOpen(false);
            }}
            className={clsx(
              'px-3 py-3',  
              'cursor-pointer',
              'flex items-center rounded-md text-sm font-medium text-gray-700 dark:text-gray-300',
              'aria-selected:bg-black/10 dark:aria-selected:bg-white/10',
              'select-none focus:outline-none',
            )}>
            {item.label}
          </Command.Item>
        ))}
      </Command.List>
      <div className="h-px bg-gray-300/70 dark:bg-gray-300/10" />
      <div className="ml-px flex w-full items-center justify-between py-2 pl-3.5 pr-5">
        <svg
          className="h-3 w-3 fill-current text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>

        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-2 ">
            <span className="text-xs">Go to</span>
            <kbd className="flex h-5 w-auto select-none items-center justify-center rounded-md bg-black/10 px-1.5 pb-1 font-bold hover:cursor-pointer dark:bg-white/10">
              ↵
            </kbd>
          </div>
          <DividerVerticalIcon className="opacity-30" />
          <div className="flex items-center space-x-2 ">
            <span className="text-xs">Open code</span>
            <div className="flex items-center space-x-1">
              <kbd className="flex h-5 w-auto select-none items-center justify-center rounded-md bg-black/10 px-1.5 pt-1 font-bold hover:cursor-pointer dark:bg-white/10">
                ⌃
              </kbd>
              <span className="">+</span>
              <kbd className="flex h-5 w-auto select-none items-center justify-center rounded-md bg-black/10 px-1.5 pb-1 font-bold hover:cursor-pointer dark:bg-white/10">
                ↵
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </Command.Dialog>
  );
}

export { CommandMenu };
