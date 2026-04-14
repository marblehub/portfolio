export default function ProjectCard({ title, desc }: any) {
  return (
    <div className="p-5 border rounded-2xl shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-slate-600 mt-2">{desc}</p>
    </div>
  );
}
