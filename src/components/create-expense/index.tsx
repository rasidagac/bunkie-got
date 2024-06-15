import type { SubmitHandler } from "react-hook-form";

import { createExpense } from "@/app/actions/expense";
import FileUpload from "@/components/file-upload";
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
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  amount: z.number().positive(),
  date: z.string().date().optional(),
  imageUrl: z.string().url().optional(),
});

export type CreateExpenseArgs = z.infer<typeof formSchema>;

export default function CreateExpense() {
  const { user } = useUser();
  const params = useParams<{ id: string }>();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { amount: 1, date: "" },
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit: SubmitHandler<CreateExpenseArgs> = async (formData) => {
    const { amount, date, imageUrl } = formData;

    await createExpense({
      amount: amount,
      date: date ? new Date(date) : new Date(),
      homeId: Number(params?.id),
      imageUrl,
      userId: user?.id as string,
    }).then(() => toast({ description: "Successfully created" }));
  };

  return (
    <div className="mx-auto h-full max-w-xl content-center">
      <h1 className="mb-4 font-bold">Create an expense</h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit((formData) => onSubmit(formData))}
        >
          <FormField
            control={control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expense total amount</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.currentTarget.value))
                    }
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expense date</FormLabel>
                <FormControl>
                  <Input className="flex-col" type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expense bill image</FormLabel>
                <FormControl>
                  <FileUpload {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting} type="submit">
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
}
