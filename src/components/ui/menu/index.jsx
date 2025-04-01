import Link from "next/link";
import { useTranslation } from "@hooks";
import { MENU } from "@utils";

export const Menu = (props) => {
  //props
  const { className, onClose } = props;

  const t = useTranslation();

  const menuClassName = className ? `menu ${className}` : "menu";

  return (
    <nav className={menuClassName}>
      <ul className="menu__list stack align-center">
        {Object.entries(MENU).map(([key, value]) => (
          <li key={key} className="menu__item">
            <Link
              onClick={value === "#" ? (e) => e.preventDefault() : onClose}
              className="menu__item-link stack center"
              href={value}
            >
              {t.navigation[key]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
