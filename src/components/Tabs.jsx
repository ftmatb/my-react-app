export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
