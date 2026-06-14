interface StatusBadgeProps {
  status: string;
}

const colourMap: Record<string, { bg: string; text: string }> = {
  draft: { bg: 'bg-gray-500', text: 'text-white' },
  submitted: { bg: 'bg-blue-500', text: 'text-white' },
  under_review: { bg: 'bg-yellow-500', text: 'text-primary' },
  needs_user_action: { bg: 'bg-orange-500', text: 'text-white' },
  approved: { bg: 'bg-green-600', text: 'text-white' },
  rejected: { bg: 'bg-red-600', text: 'text-white' },
  paid: { bg: 'bg-purple-600', text: 'text-white' },
  active: { bg: 'bg-green-600', text: 'text-white' },
  paused: { bg: 'bg-yellow-500', text: 'text-primary' },
  expired: { bg: 'bg-gray-600', text: 'text-white' },
  pending: { bg: 'bg-blue-500', text: 'text-white' },
  verified: { bg: 'bg-green-600', text: 'text-white' },
  suspended: { bg: 'bg-red-700', text: 'text-white' }
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const slug = status || 'draft';
  const colours = colourMap[slug] || { bg: 'bg-gray-500', text: 'text-white' };
  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${colours.bg} ${colours.text}`}>{status.split('_').join(' ')}</span>
  );
}
