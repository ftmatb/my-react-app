export default function TabButton({ label, isSelected, ...props }) {
  function handleClick() {
    console.log("Hello World");
  }
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {label}
      </button>
    </li>
  );
}
