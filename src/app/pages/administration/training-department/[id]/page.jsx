import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import TrainerDetailCard from "@/components/training-department/TrainerDetailCard";
import { organogramList } from "@/data/organogramData";


export default async function MemberDetailPage({ params }) {
  const { id } = await params;

  const member = organogramList.find((m) => String(m.id) === String(id)) || null;

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-gray-800">Profile Not Found</h2>
        <Link
          href="/pages/administration/training-department"
          className="mt-4 inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
        >
          <FiArrowLeft /> Back to all members
        </Link>
      </div>
    );
  }

  return <TrainerDetailCard trainer={member} />;
}