const getRoomData = async (room: string) => {
  const res = await fetch(`/${room}`);
  const datos = await res.json();

  return datos;
};

export default async function Page({ params }: { params: { room: string } }) {
  const room = await getRoomData(params.room as string);

  return <></>;
}
