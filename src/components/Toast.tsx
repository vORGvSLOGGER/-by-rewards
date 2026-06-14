interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

export default function Toast({ message, type = 'info' }: ToastProps) {
  const bg = type === 'success' ? 'bg-green-700' : type === 'error' ? 'bg-red-700' : 'bg-primary-700';
  return <div className={`${bg} text-white rounded-md p-3 text-sm mb-4`}>{message}</div>;
}
