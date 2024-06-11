"use client";

import { uploadImage } from "@/app/actions/common";
import { Input } from "@/components/ui/input";
import { toBase64 } from "@/lib/utils";
import { ChangeEvent, forwardRef, useState } from "react";
import * as React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

export default forwardRef(function FileUpload(
  props: ControllerRenderProps<FieldValues, string>,
  ref: React.Ref<HTMLInputElement>,
) {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { onChange, value, ...field } = props;

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const base64 = (await toBase64(e.target.files?.[0] as Blob)) as string;

    uploadImage(base64, e.target.files?.[0].name as string).then((value) => {
      onChange(value.url);
      setLoading(false);
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
