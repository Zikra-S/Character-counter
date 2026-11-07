import { useTextStore } from "../store/useTextStore";

function Total() {
  const text = useTextStore((state) => state.text);

  return <p>Characters: {text.length}</p>;
}

export default Total;