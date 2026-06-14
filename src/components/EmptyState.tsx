interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-primary-700 rounded-md p-8 text-center bg-primary/60">
      <h3 className="font-bold">{title}</h3>
      {description && <p className="text-sm text-gray-400 mt-2">{description}</p>}
    </div>
  );
}
