import { useNavigate } from "react-router-dom";

export default function BackButton({
  text,
  url,
}: {
  text?: string;
  url?: string;
}) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        url ? navigate(url) : navigate(-1);
      }}
    >
      {text ?? "Voltar"}
    </button>
  );
}
