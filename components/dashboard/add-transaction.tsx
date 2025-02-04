"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  symbol: z.string().nonempty({
    message: "Symbol is required",
  }),
  quantity: z
    .string()
    .nonempty({
      message: "Quantity is required",
    })
    .refine((val) => !isNaN(Number(val)), {
      message: "Must be a valid number",
    })
    .refine((val) => Number(val) > 0, {
      message: "Must be greater than 0",
    }),
  price: z
    .string()
    .nonempty({
      message: "Price is required",
    })
    .refine((val) => !isNaN(Number(val)), {
      message: "Must be a valid number",
    })
    .refine((val) => Number(val) > 0, {
      message: "Must be greater than 0",
    }),
  type: z.enum(["BUY", "SELL"], {
    required_error: "Transaction type is required",
  }),
});

export function AddTransaction() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symbol: "",
      quantity: "",
      price: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Trade</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Trade</DialogTitle>
          <DialogDescription>
            Record trade details to update portfolio
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="symbol"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Symbol</FormLabel> */}
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Symbol"
                      autoComplete="off"
                      className="placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Quantity</FormLabel> */}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Quantity"
                      autoComplete="off"
                      className="placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Price</FormLabel> */}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Price"
                      autoComplete="off"
                      className="placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex justify-center rounded-lg border p-1"
                    >
                      <ToggleGroupItem
                        value="BUY"
                        className="flex-1 data-[state=on]:bg-green-500 data-[state=on]:text-white"
                      >
                        BUY
                      </ToggleGroupItem>
                      <Separator
                        orientation="vertical"
                        className="mx-1 h-6 bg-gray-200"
                      />
                      <ToggleGroupItem
                        value="SELL"
                        className="flex-1 data-[state=on]:bg-red-500 data-[state=on]:text-white"
                      >
                        SELL
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
