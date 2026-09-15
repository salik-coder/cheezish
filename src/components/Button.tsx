import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ href, variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap font-body font-bold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-button active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";
  
  const variantClasses = variant === 'primary' 
    ? "bg-primary text-background hover:brightness-110 focus-visible:ring-primary"
    : "bg-surface text-main hover:bg-white/5 border border-white/10 focus-visible:ring-white";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
