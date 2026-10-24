'use client';

import * as React from 'react';

import { Input } from '@/components/ui/input';
import { formatBYPhone } from '@/lib/phone';

export function PhoneInput({ onChange, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      placeholder="+375 (__) ___-__-__"
      {...props}
      onChange={(event) => {
        // Write the formatted value into the DOM input so that
        // `new FormData(form)` reads the masked value on submit.
        event.target.value = formatBYPhone(event.target.value);
        onChange?.(event);
      }}
    />
  );
}
