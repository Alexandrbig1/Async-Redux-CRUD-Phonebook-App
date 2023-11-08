import { IconClick, SwitcherTheme } from "./ThemeButton.styled";

export default function ThemeButton({ toggleTheme }) {
  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <SwitcherTheme onClick={handleThemeToggle}>
      <IconClick />
    </SwitcherTheme>
  );
}
