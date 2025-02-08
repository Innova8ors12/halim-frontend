'use client';

import { DetailedHTMLProps, FC, FormHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useContactUs } from '@/hooks/useContactUs';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { LoadingSpinner } from '../ui/loading-spinner';

interface ContactUsFormProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const ContactUsForm: FC<ContactUsFormProps> = ({ ...props }) => {
  const { form, onSubmit } = useContactUs();

  return (
    <Form {...form}>
      <form
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 ${props.className ? props.className : ''}`}
      >
        {form.formState.errors.root?.message && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
          </Alert>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* skip the forth position and place button in fifth position */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="col-start-1 w-40 mt-8"
        >
          {form.formState.isSubmitting ? (
            <>
              <LoadingSpinner className="mr-1" />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
      <div id="recaptcha-container"></div>
    </Form>
  );
};
