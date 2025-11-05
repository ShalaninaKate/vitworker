
import s from './FilePill.module.scss';
import { SvgIcon } from '@/shared/ui/SvgIcon';


interface Props {
  fileName: string;
  onRemove: () => void;
  isLoading: boolean;
}


export function FilePill({ fileName, onRemove, isLoading }: Props){
  return (
    <li className={s.filePill}>
      <span className={s.filePill__text}>{fileName}</span>
      <button
        className={s["filePill__remove-btn"]}
        onClick={onRemove}
        disabled={isLoading}
        title="Remove file"
      >
        <SvgIcon name="icon-close" className={s["filePill__remove-btn-icon"]} />
      </button>
    </li>
  );
  };