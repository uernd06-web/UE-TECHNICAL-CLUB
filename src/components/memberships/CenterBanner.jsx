import { FaUsers } from "react-icons/fa";

export default function CenterBanner() {
  return (
    <div className="bg-red-700 text-white rounded-2xl p-6 text-center flex flex-col items-center justify-center shadow-lg border-2 border-red-800 h-full min-h-[250px]">
      <div className="mb-3 text-4xl">
        <FaUsers />
      </div>
      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider leading-tight">
        One Club,<br />
        One Membership,<br />
        Lifetime Relationship
      </h2>
    </div>
  );
}