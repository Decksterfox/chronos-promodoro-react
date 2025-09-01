import style from './style.module.css';
type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;
export function DefaultInput({ id, type, ...props }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}></label>
      <input type={type} id={id} className={style.input} {...props} />
    </>
  );
}
