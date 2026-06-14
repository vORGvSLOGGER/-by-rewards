interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  rows: Record<string, any>[];
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-md border border-primary-700 bg-primary/70">
      <table className="min-w-full text-sm">
        <thead className="bg-primary-700 text-gray-200">
          <tr>{columns.map((col) => <th key={col.key} className="text-right p-3">{col.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-primary-700">
              {columns.map((col) => <td key={col.key} className="p-3 text-gray-300">{row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
