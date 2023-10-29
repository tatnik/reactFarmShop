import { useState } from "react";
import styled from "styled-components";
import VisuallyHiddenInput from "../../ui/visually-hidden-input/visually-hidden-input";

const Label = styled.label`
  display:block;
  margin-top: 29px;
`

export const CheckButton = ({
  labelComponent,
  name,
  value,
  text,
  onChangeHandler,
  isChecked,
  ...props
}) => {
  const LabelComponent = labelComponent;
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = ({ target }) => {
    setChecked(!checked);
    onChangeHandler(target);
  }
  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        name={name}
        checked={checked}
        onChange={handleOnChange}
        type="checkbox"
        {...props}
      />
      <LabelComponent $isChecked={checked}>{text}</LabelComponent>
    </Label>
  )

}

