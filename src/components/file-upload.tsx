"use client";

import { Input } from "@/components/ui/input";
import { toBase64 } from "@/lib/utils";
import { ChangeEvent, forwardRef, useState } from "react";
import * as React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

export default forwardRef(function FileUpload(
  props: ControllerRenderProps<FieldValues, string>,
  ref: React.Ref<HTMLInputElement>,
) {
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { onChange, value, ...field } = props;

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const base64 = await toBase64(e.target.files?.[0] as Blob);

    fetch("/api/upload", {
      body: JSON.stringify({
        base64,
        name: e.target.files?.[0].name,
      }),
      method: "PUT",
    }).then((value) => {
      setLoading(false);
      onChange(value.url);
    });
  };

  return (
    <Input
      {...field}
      loading={loading}
      onChange={handleChange}
      ref={ref}
      type="file"
    />
  );
});
