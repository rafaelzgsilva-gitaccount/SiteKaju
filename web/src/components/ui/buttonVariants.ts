import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
                premium:
                    "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-full",
                outline:
                    "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-white rounded-full",
                ghost:
                    "hover:bg-secondary text-foreground",
                link:
                    "text-primary underline-offset-4 hover:underline p-0 h-auto",
            },
            size: {
                default: "h-11 px-6 py-2 text-sm",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-8 text-base",
                xl: "h-14 px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);
