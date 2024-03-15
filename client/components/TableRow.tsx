interface Props {
  id: number;
  name: string;
  engines: number;
  wingspan: number;
  year: number;
  isChecked: boolean;
  onCheckboxChange: (id: number) => void;
}

export default function TableRow({
  id,
  name,
  engines,
  wingspan,
  year,
  isChecked,
  onCheckboxChange,
}: Props) {
  return (
    <tr key={id} className="border border-black text-center ">
      <td className="text-black border border-black items-center just">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(id)}
        />
      </td>
      <td>{name}</td>
      <td>{wingspan}</td>
      <td>{engines}</td>
      <td>{year}</td>
    </tr>
  );
}
