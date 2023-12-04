"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});

export function InputForm({ formFields }: { formFields: any }) {
  const form = useForm({ resolver: zodResolver(FormSchema) });

  function onSubmit(data: any) {
    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      {JSON.stringify(data, null, 2)}
    </pre>;
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            {
              console.log({ field });
            }
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Input username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
