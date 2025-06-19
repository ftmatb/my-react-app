export default function TabButton({ label, onSelect, isSelected }) {
  function handleClick() {
    console.log("Hello World");
  }
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {label}
      </button>
    </li>
  );
}
