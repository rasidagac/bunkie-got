"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, RefreshCw } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generateUsername } from "unique-username-generator";
import { z } from "zod";

const formSchema = z.object({
  code: z.string().regex(/^(?=.{6,16}$)(?!.*_{2})[a-zA-Z0-9_]+$/, {
    message:
      "Your home code can only contain alphanumeric characters and underscores and must be between 6 and 16 characters",
  }),
  name: z.string().min(3, {
    message: "Your home name must be at least 3 characters.",
  }),
  resetDayOfMonth: z.string(),
});

export default function CreateHome({
  onFinish,
}: {
  onFinish: SubmitHandler<z.infer<typeof formSchema>>;
}) {
  const [spin, setSpin] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { resetDayOfMonth: "1" },
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit, setValue, trigger } = form;

  const handleRandomCode = () => {
    setSpin(true);
    setTimeout(() => {
      setValue("code", generateUsername("_", 2, 10));
      trigger("code").then(() => setSpin(false));
    }, 500);
  };

  return (
    <div className="mx-auto h-full max-w-xl content-center">
      <h1 className="mb-4 font-bold">Create a new Home</h1>
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onFinish)}>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your home name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  Your home code
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="cursor-pointer" size={20} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Your home code must be unique</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input {...field} />
                    <RefreshCw
                      className={`absolute right-2 top-2.5 cursor-pointer ${spin ? "animate-spin" : null}`}
                      onClick={spin ? () => null : handleRandomCode}
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="resetDayOfMonth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expense reset date</FormLabel>
                <FormControl>
                  <Select
                    name={field.name}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">1st day of month</SelectItem>
                        <SelectItem value="5">5th day of month</SelectItem>
                        <SelectItem value="10">10th day of month</SelectItem>
                        <SelectItem value="15">15th day of month</SelectItem>
                        <SelectItem value="20">20th day of month</SelectItem>
                        <SelectItem value="25">25th day of month</SelectItem>
                        <SelectItem value="31">Last day of month</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
