import React, { ReactNode } from "react";
import "./Card.scss";

interface Props {
  title?: string;
  avatar?: ReactNode;
  centered?: boolean;
  description?: string;
  footer?: ReactNode;
  onPress?(): void;
}

const Card = ({
  title,
  avatar,
  centered,
  description,
  footer,
  onPress,
}: Props) => {
  return (
    <div
      className={`CardWrapper ${centered && "CardCentered"}`}
      onClick={onPress}
    >
      {avatar && avatar}
      {title && <p className="Title">{title}</p>}
      {description && <p className="Description">{description}</p>}
      {footer && footer}
    </div>
  );
};

export default Card;
