interface FilterBarProps {
  search: string;
  onSearch: (value: string) => void;
}

export default function FilterBar({ search, onSearch }: FilterBarProps) {
  return (
    <div className="bg-primary/80 border border-primary-700 rounded-md p-4">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="ابحث عن عرض أو متجر..."
        className="w-full bg-primary-700 border border-primary-600 rounded-md px-4 py-3 outline-none focus:border-accent-gold"
      />
    </div>
  );
}
