"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

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
import { ROUTES } from "@/constants/routes";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{
    sucess: boolean;
    data: T;
  }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  // ...
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {};
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-8"
      >
        {Object.keys(defaultValues).map((element, index) => (
          <FormField
            key={element + index}
            control={form.control}
            name={element}
            render={({ field }) => (
              <FormItem className="gap2.5 flex w-full flex-col">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {element === "email"
                    ? "Email Address"
                    : element.charAt(0).toUpperCase() + element.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded border"
                    type={element === "password" ? "password" : "text"}
                    placeholder={element}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full px-3 py-4 font-inter !text-light-900"
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "Signing In..."
              : "Signing Up..."
            : buttonText}
        </Button>
        {buttonText === "Sign In" ? (
          <p className="paragraph-semibold">
            Don't have an account?{" "}
            <span>
              <Link href={ROUTES.SIGN_UP} className="text-primary-500">
                Sign Up
              </Link>
            </span>
          </p>
        ) : (
          <p className="paragraph-semibold">
            Have an account?{" "}
            <span>
              <Link href={ROUTES.SIGN_IN} className="text-primary-500">
                Sign In
              </Link>
            </span>
          </p>
        )}
      </form>
    </Form>
  );
};
export default AuthForm;
