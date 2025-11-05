import { useEffect } from "react";

/**
 * Хук для закрытия чего-либо по клавише Escape.
 * @param onClose — функция, вызываемая при нажатии Escape.
 */
export function useEscapeClose(onClose: (value: boolean) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
}
