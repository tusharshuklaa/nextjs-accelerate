import { WELCOME_TEXT } from "../../utils/contants";
import { Logo, LogoTypes } from "../logo";

export const Welcome = () => {
  return (
    <div className="flex flex-col h-96 items-center justify-center">
      <Logo type={LogoTypes.large} />

      <p className="mt-8">{WELCOME_TEXT}</p>
    </div>
  );
};
