import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, fullWidth = false, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-20 md:py-32",
                    !fullWidth && "max-w-7xl mx-auto px-6 md:px-8",
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
