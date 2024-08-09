export default function CustomButton({
  text,
  containerStyle,
}: {
  text: string;
  containerStyle: string;
}) {
  return (
    <button
      className={`${containerStyle} group rounded-lg relative cursor-pointer overflow-hidden bg-orange-400 uppercase`}
    >
      <span></span>
      <span className="text-white">{text}</span>
    </button>
  );
}
