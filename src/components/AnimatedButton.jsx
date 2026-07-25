import { Link } from "react-router-dom";

const variants = {
  primary: "btn-minimal btn-minimal-primary",
  accent: "btn-minimal btn-minimal-accent",
  outline: "btn-minimal btn-minimal-outline",
  ghost: "btn-minimal btn-minimal-ghost",
  "outline-light": "btn-minimal btn-minimal-outline-light",
};

export default function AnimatedButton({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  icon,
  type = "button",
  onClick,
  ...props
}) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`.trim();

  const content = (
    <>
      <span className="btn-minimal-text">{children}</span>
      {icon && <span className="btn-minimal-icon">{icon}</span>}
      <span className="btn-minimal-shine" aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
