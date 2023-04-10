import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';

const File = () => (
  <Toolbar.Root
    className="flex w-full min-w-max rounded-md bg-white p-[10px] shadow-[0_2px_10px] shadow-blackA7"
    aria-label="Formatting options">
    <Toolbar.Link
      className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-transparent bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:cursor-pointer hover:bg-transparent hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
      href="#"
      target="_blank"
      style={{ marginRight: 10 }}>
      Choose File
    </Toolbar.Link>
    <Toolbar.Button
      className="inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-violet9 px-[10px] text-[13px] leading-none text-white outline-none hover:bg-violet10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7"
      style={{ marginLeft: 'auto' }}>
      Upload
    </Toolbar.Button>
  </Toolbar.Root>
);

export default File;
