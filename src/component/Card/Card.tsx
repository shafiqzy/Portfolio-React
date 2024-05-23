interface CardProps {
  title: string;
  description: string;
}
export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
