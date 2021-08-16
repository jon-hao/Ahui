import React, { ReactEventHandler, useState } from "react";
import { SelectWrapper } from "./Select.style";
import { map } from "lodash";

type TOptions = {
  name: string;
  value: any;
};

type TSelectProps = {
  className?: string;
  classNameOption?: string;
  text: string;
  options: TOptions[];
  onSelect?: ReactEventHandler;
};

const Select: React.FC<TSelectProps> = ({
  className,
  classNameOption,
  text,
  options,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <SelectWrapper
      className={className}
      tabIndex={-1}
      onBlur={() => setOpen(false)}
    >
      <div className="select-name" onClick={() => setOpen(!open)}>
        {text}
      </div>
      {open && (
        <div className="select-options">
          {map(options, ({ name, value }, key) => (
            <div
              key={key}
              className={classNameOption}
              onClick={() => {
                onSelect(value);
                setOpen(false);
              }}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </SelectWrapper>
  );
};

export default Select;
