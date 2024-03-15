interface Props {
  _id: string;
  name: string;
  engines: number;
  wingspan: number;
  year: number;
  isChecked: boolean;
  onCheckboxChange: (id: string) => void;
}

export default function TableRow({
  _id,
  name,
  engines,
  wingspan,
  year,
  isChecked,
  onCheckboxChange,
}: Props) {
  return (
    <tr key={_id} className="border border-black text-center ">
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(_id)}
        />
      </td>
      <td>{name}</td>
      <td>{wingspan}</td>
      <td>{engines}</td>
      <td>{year}</td>
    </tr>
  );
}
