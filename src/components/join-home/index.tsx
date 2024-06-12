"use client";

import { joinHome } from "@/app/actions/user";
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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  code: z.string().trim(),
});

export default function JoinHome() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { code: "" },
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit(async ({ code }) =>
    joinHome({ code }).catch((reason: Error) =>
      toast({ description: reason.message, variant: "destructive" }),
    ),
  );

  return (
    <div className="p-6">
      <Form {...form}>
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <FormField
            control={control}
            name="code"
            render={({ field, formState: { isSubmitting } }) => (
              <FormItem>
                <FormLabel>Home Code</FormLabel>
                <FormControl>
                  <div className="space-y-3">
                    <Input {...field} type="text" />
                    <Button
                      className="w-full"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Join
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
