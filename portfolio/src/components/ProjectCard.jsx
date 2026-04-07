export default function ProjectCard({ title, desc }) {
  return (
    <div className="p-4 border rounded-xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
}