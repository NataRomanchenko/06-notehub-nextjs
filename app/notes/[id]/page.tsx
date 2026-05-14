import NoteDetailsClient from "./NoteDetails.client";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoteDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return <NoteDetailsClient id={id} />;
}