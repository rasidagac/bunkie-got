'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Info, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateUsername } from 'unique-username-generator';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const formSchema = z.object({
  code: z.string().regex(/^(?=.{6,16}$)(?!.*_{2})[a-zA-Z0-9_]+$/, {
    message:
      'Your home code can only contain alphanumeric characters and underscores and must be between 6 and 16 characters',
  }),
  name: z.string().min(3, {
    message: 'Your home name must be at least 3 characters.',
  }),
  resetDayOfMonth: z.string(),
});

export default function CreateHome({ onFinish }) {
  const [spin, setSpin] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { resetDayOfMonth: '1' },
    resolver: zodResolver(formSchema),
  });

  const handleRandomCode = () => {
    setSpin(true);
    setTimeout(() => {
      form.setValue('code', generateUsername('_', 2, 10));
      form.trigger('code');
      setSpin(false);
    }, 500);
  };

  return (
    <div className="mx-auto h-full max-w-xl content-center">
      <h2>Create a new Home</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFinish)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
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
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  Your home code
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info size={20} className="cursor-pointer" />
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
                      size={20}
                      onClick={spin ? () => null : handleRandomCode}
                      className={`absolute right-2 top-2.5 cursor-pointer ${spin ? 'animate-spin' : null}`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resetDayOfMonth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expense reset date</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    name={field.name}
                    onValueChange={field.onChange}
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
