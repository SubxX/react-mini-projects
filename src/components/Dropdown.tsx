import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
];

const Dropdown = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [value, setValue] = useState<any>();
  const [show, setShow] = useState(false);
  const selectValue = (e: any, value: any) => {
    e.stopPropagation();
    setValue(value);
    setShow(false);
  };
  useEffect(() => {
    const cb = (e: any) => {
      if (ref.current === e.target) return;
      setShow(false);
    };
    if (show) window.addEventListener("click", cb);
    return () => window.removeEventListener("click", cb);
  }, [show]);

  return (
    <div className="relative inline-block">
      <button
        className="bg-transparent custom-border custom-bg px-4 py-2 rounded-lg w-52 text-left"
        onClick={setShow.bind(this, !show)}
        ref={ref}
      >
        {value?.label ?? "Select"}
      </button>

      {show && (
        <ul className="absolute left-0 w-full rounded-lg custom-bg mt-2">
          {items.map((item) => (
            <li key={item.value}>
              <button
                disabled={item.value === value?.value}
                className="px-4 py-2 text-sm hover:bg-white hover:bg-opacity-20 cursor-pointer w-full text-left disabled:opacity-25"
                onClick={(e) => selectValue(e, item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
