import { cn } from '@/lib/utils';

interface FormHelperTextProps {
  children: React.ReactNode;
  className?: string;
}

export function FormHelperText({ children, className }: FormHelperTextProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  );
}
