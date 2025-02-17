import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Email must be a valid email address.',
  }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: 'Phone number must be valid and include the country code (e.g., +123456789).',
    })
    .min(11, {
      message: 'Phone number must be at least 12 characters.',
    })
    .max(15, {
      message: 'Phone number must be at most 15 characters.',
    }),
});

export const useContactUs = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('values', values);
    try {
    } catch (error: any) {
      console.error('Error submitting contact us form:', error);
      form.setError('root', {
        message: error.message,
      });
    }
  }

  return {
    form,
    onSubmit,
  };
};
