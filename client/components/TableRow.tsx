interface Props {
  id: number;
  name: string;
  engines: number;
  wingspan: number;
  year: number;
}

export default function TableRow({
  id,
  name,
  engines,
  wingspan,
  year,
}: Props) {
  return (
    <tr key={id} className="border border-black text-center ">
      <td className="text-black border border-black items-center just">
        <input type="checkbox" />
      </td>
      <td className="text-black ext-center flex items-center justify-center">
        {name} 
      </td>
      <td className="text-black border border-black ">{wingspan}</td>
      <td className="text-black border border-black">{engines}</td>
      <td className="text-black border border-black">{year}</td>
    </tr>
  );
}
