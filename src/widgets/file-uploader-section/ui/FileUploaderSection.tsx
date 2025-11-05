import s from "./FileUploaderSection.module.scss";

import { useState, useRef } from "react";
import clsx from "clsx";
import { FilePill } from "@/shared/ui/file-pill";
import { Button } from "@/shared/ui/button";
import { SvgIcon } from "@shared/ui/SvgIcon";
import { Loader } from "@/shared/ui/loader";

interface FileItem {
  id: string;
  name: string;
  size: number;
  file: File;
}

const generateUniqueId = (): string =>
  Math.random().toString(36).substring(2, 9);

export function FileUploaderSection() {
  const [files, setFiles] = useState<FileItem[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Обработчик выбора файлов
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Получаем список файлов (FileList), если он существует
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) return;

    // 2. Преобразуем FileList в массив FileItem
    const newFileItems: FileItem[] = Array.from(fileList).map((file) => ({
      id: generateUniqueId(), // Генерируем уникальный ID для ключа
      name: file.name,
      size: file.size, // Присваиваем реальный размер
      file: file, // Храним сам объект File
    }));

    // 3. Добавляем новые объекты FileItem к существующему стейту
    setFiles((prevFiles) => [...prevFiles, ...newFileItems]);

    // Сбрасываем значение инпута, чтобы можно было выбрать тот же файл
    event.target.value = "";
  };

  // Обработка удаления файла
  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  // Обработка анализа (имитация)
  const handleAnalyze = async () => {
    if (files.length === 0 || isLoading) return;

    setIsLoading(true);

    // Имитация отправки FormData и получения ответа
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsLoading(false);
    setFiles([]); // Очистка после успешного анализа
  };

  return (
    <section className={s.uploader}>
      <div className={s.uploader__container}>
        <div className={s.uploader__content}>
          <h3 className={s.uploader__title}>Upload your files</h3>
          {/* Скрытый input */}
          <input
            className={s.uploader__input}
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            multiple
            disabled={isLoading}
          />
          <Button
            className={s.uploader__btn}
            variant="transparent"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            Choose Files
            <SvgIcon name="icon-upload" className={s["uploader__btn-icon"]} />
          </Button>
          <ul className={s.uploader__list}>
            {files.map((fileItem) => (
              <FilePill
                key={fileItem.id}
                fileName={fileItem.name}
                onRemove={() => handleRemoveFile(fileItem.id)}
                isLoading={isLoading}
              />
            ))}
          </ul>

          {/* Кнопка "ANALYZE MY FILES" */}
          <Button
            className={clsx(s["uploader__analyze-btn"])}
            onClick={handleAnalyze}
            disabled={isLoading || files.length === 0}
          >
            ANALYzE my files
            {isLoading && <Loader />}
          </Button>
        </div>
      </div>
    </section>
  );
}
