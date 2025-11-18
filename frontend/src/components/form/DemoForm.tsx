import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormField, FormGroup } from './index';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be at least 18 years old'),
});

type FormData = z.infer<typeof formSchema>;

export function DemoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    alert('Form submitted! Check console for data.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
      <FormGroup title="Personal Information" description="Enter your details">
        <FormField
          label="Name"
          required
          error={errors.name?.message}
          helpText="Your full name"
        >
          <Input {...register('name')} placeholder="John Doe" />
        </FormField>

        <FormField
          label="Email"
          required
          error={errors.email?.message}
          helpText="We'll never share your email"
        >
          <Input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
          />
        </FormField>

        <FormField label="Age" required error={errors.age?.message}>
          <Input
            {...register('age', { valueAsNumber: true })}
            type="number"
            placeholder="25"
          />
        </FormField>
      </FormGroup>

      <Button type="submit">Submit</Button>
    </form>
  );
}
