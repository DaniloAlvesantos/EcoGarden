interface PrimaryButtonProps {
  text: string;
  onClick?: VoidFunction;
  disabled?: boolean;
  className?: string;
  type: "button" | "submit" | "reset";
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { text, onClick, disabled, className, type } = props;

  return (
    <button
      className={"btn btn-success w-100 rounded-pill py-2" + className}
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
      type={type}
    >
      {text}
    </button>
  );
};
