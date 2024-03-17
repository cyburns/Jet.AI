interface Props {
  _id: string;
  name: string;
  engines: number;
  wingspan: number;
  year: number;
  onCheckboxChange: (id: string, name: string) => void;
  isChecked: boolean;
}

export default function TableRow({
  _id,
  name,
  engines,
  wingspan,
  year,
  onCheckboxChange,
  isChecked,
}: Props) {
  return (
    <tr key={_id} className={isChecked ? "bg-gray-200" : "bg-white"}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(_id, name)}
        />
      </td>
      <td>{name}</td>
      <td>{wingspan}</td>
      <td>{engines}</td>
      <td>{year}</td>
    </tr>
  );
}
