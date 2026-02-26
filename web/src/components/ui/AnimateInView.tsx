import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';

type Direction = 'up' | 'right' | 'left' | 'scale';

interface AnimateInViewProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: Direction;
}

const hiddenClasses: Record<Direction, string> = {
    up: 'opacity-0 translate-y-8',
    right: 'opacity-0 translate-x-8',
    left: 'opacity-0 -translate-x-8',
    scale: 'opacity-0 scale-95',
};

export const AnimateInView = ({
    children,
    className,
    delay = 0,
    duration = 700,
    direction = 'up',
}: AnimateInViewProps) => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all ease-out',
                inView
                    ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
                    : hiddenClasses[direction],
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: inView ? `${delay}ms` : '0ms',
            }}
        >
            {children}
        </div>
    );
};
