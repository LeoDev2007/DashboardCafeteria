import { NativeSelect } from "@chakra-ui/react";
import type React from "react";

type Props = {
  children: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: () => void;
  defaultValue?: string;
};

const SelectComponent = ({ children, value, onChange, onBlur, defaultValue }: Props) => {
  return (
    <NativeSelect.Root size="sm" width="130px" >
      <NativeSelect.Field 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur}
        autoFocus 
        paddingLeft="1rem"
        defaultValue={defaultValue}
      >
        {children}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

export default SelectComponent;
