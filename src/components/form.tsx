'use client';

import Language from '@/components/select';
import File from '@/components/toolbar';
import * as Form from '@radix-ui/react-form';

const InputForm = () => (
  <Form.Root className="w-[260px]">
    <Form.Field className="mb-[10px] grid" name="language">
      <div className="flex items-baseline justify-between">
        <Form.Label>Language</Form.Label>
        <Form.Control asChild>
          <Language />
        </Form.Control>
      </div>
    </Form.Field>
    <Form.Field className="mb-[10px] grid" name="file">
      <div className="flex items-baseline justify-between">
        <Form.Label></Form.Label>
        <Form.Control asChild>
          <File />
        </Form.Control>
      </div>
    </Form.Field>
    <Form.Submit asChild>
      <button className="focus:shadow-grey mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px]  bg-violet11 px-[15px] font-medium leading-none text-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-white focus:shadow-[0_0_0_2px] focus:outline-none">
        Recongize
      </button>
    </Form.Submit>
  </Form.Root>
);

export default InputForm;
