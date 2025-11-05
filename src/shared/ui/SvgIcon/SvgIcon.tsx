// src/components/SvgIcon.tsx

import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  // Имя иконки, которое формируется в vite.config.ts (например, 'icon-home')
  name: string;
  // Опциональный размер иконки
  size?: string | number;
}

export function SvgIcon({ name, ...rest }: SvgIconProps) {
  // Полный ID иконки в спрайте
  const iconId = `#${name}`;

  return (
    <svg
      aria-hidden="true"
      // Пропсы, переданные компоненту (className, style и т.д.)
      {...rest}
    >
      {/* 💡 Ключевой элемент для использования спрайта */}
      <use href={iconId}/>
    </svg>
  );
}
