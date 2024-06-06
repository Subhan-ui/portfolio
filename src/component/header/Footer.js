import classes from "./Footer.module.css";
import { arrays } from "../../constants";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={classes.CompleteFooter}>
      <div className={classes.footerCopyright}></div>
      <div className={classes.footerCopyright}>
        Copyright © {year} Subhan Shoukat
      </div>
      <div className={classes.Footer}>
        {arrays.map((contact) => (
          <a
            href={contact.href}
            key={contact.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
