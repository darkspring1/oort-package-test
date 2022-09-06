import React from "react"

interface IProps {
    label: string
    backgroundColor: string
    onClick?: () => void
}

export const MyButton = ({ label, backgroundColor, onClick }: IProps) => {
    return (
      <button onClick={onClick}
      style={{ backgroundColor: backgroundColor }}>
        {label}
      </button>
    );
  }