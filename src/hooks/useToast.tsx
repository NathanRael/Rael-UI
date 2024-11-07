import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../utils/cn.ts';
import { Toast } from '../components';

type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' |'top-center' | 'bottom-center';

type ToastType = {
    title: string;
    message?: string;
    duration?: number;
    onClose?: () => void;
    position?: ToastPosition;
    exiting?: boolean;
};

const useToast = () => {
    const [toasts, setToasts] = useState<ToastType[]>([]);
    const [position, setPosition] = useState<ToastPosition>('bottom-right');
    const timersRef = useRef<NodeJS.Timeout[]>([]);

    const toast = ({ title, message, duration = 5000, onClose, position }: ToastType) => {
        setToasts((prev) => [
            ...prev,
            { title, message, duration, onClose, exiting: false },
        ]);
        if (position) setPosition(position);
    };

    const removeToast = (index: number) => {
        setToasts((prev) =>
            prev.map((toast, i) =>
                i === index ? { ...toast, exiting: true } : toast
            )
        );

        setTimeout(() => {
            setToasts((prev) => prev.filter((_, i) => i !== index));
            clearTimeout(timersRef.current[index]);
            timersRef.current.splice(index, 1);
        }, 300);
    };

    useEffect(() => {
        toasts.forEach((toast, index) => {
            if (!timersRef.current[index] && !toast.exiting) {
                const timer = setTimeout(() => {
                    removeToast(index);
                    toast.onClose?.();
                }, toast.duration);

                timersRef.current[index] = timer;
            }
        });

        return () => {
            timersRef.current.forEach((timer) => clearTimeout(timer));
        };
    }, [toasts]);

    const ToastContainer = () => (
        <div
            className={cn(
                'fixed z-50 flex flex-col gap-4',
                position === 'top-left' && 'top-4 left-4',
                position === 'top-right' && 'top-4 right-4',
                position === 'bottom-left' && 'bottom-4 left-4',
                position === 'bottom-right' && 'bottom-4 right-4',
                position === 'top-center' && 'top-4 left-1/2 -translate-x-1/2 ',
                position === 'bottom-center' && 'bottom-4 left-1/2 -translate-x-1/2 ',
            )}
        >
            {toasts.map((toast, index) => (
                <div
                    key={index}
                    className={cn(
                        '',
                        toast.exiting  ? 'animate-slide-out' : 'animate-slide-in'
                    )}
                >
                    <Toast
                        title={toast.title}
                        message={toast.message}
                        onClose={() => removeToast(index)}
                    />
                </div>
            ))}
        </div>
    );

    return {
        toast,
        position,
        setPosition,
        renderToastContainer: () =>
            ReactDOM.createPortal(<ToastContainer />, document.body),
    };
};

export default useToast;
