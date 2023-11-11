import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./dropdown.css";

type DropdownProps = {};

export const Dropdown = (props: DropdownProps) => {
  const {} = props;

  //   TODO: Setup props & enhance UI

  const data = useMemo(() => buildStaticDropdownData(), []);

  const [dropdownText, setDropdownText] = useState("Select an option");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = useCallback(
    () => setShowDropdown(!showDropdown),
    [showDropdown]
  );
  const handleHideDropdown = useCallback(() => setShowDropdown(false), []);

  const handleDropdownOptionClick = useCallback(
    (option: string) => {
      setDropdownText(option);
      handleHideDropdown();
    },
    [handleHideDropdown]
  );

  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onElseWhereClick = (e: MouseEvent) => {
      if (dropdownContainerRef.current?.contains(e.target as Node) === false) {
        handleHideDropdown();
      }
    };

    document.body.addEventListener("click", onElseWhereClick);

    return () => document.removeEventListener("click", onElseWhereClick);
  }, [handleHideDropdown]);

  return (
    <div ref={dropdownContainerRef} className="dropdown-container">
      <button
        className={`dropdown-button ${
          showDropdown ? "dropdown-button-border" : ""
        }`}
        onClick={handleToggleDropdown}
      >
        {dropdownText}
        <span
          className={`material-icons dropdown-button-icon ${
            showDropdown ? "dropdown-button-icon-rotate" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      <ul
        className={`dropdown-list ${
          showDropdown ? `show-dropdown` : `hide-dropdown`
        }`}
      >
        {data.map((item) => (
          <li
            key={item.id}
            className="dropdown-list-item"
            onClick={() => handleDropdownOptionClick(item.option)}
          >
            {item.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

type StaticDropdownData = {
  id: number;
  option: string;
};

function buildStaticDropdownData(): StaticDropdownData[] {
  return [
    {
      id: 0,
      option: "Option 1",
    },
    {
      id: 1,
      option: "Option 2",
    },
    {
      id: 2,
      option: "Option 3",
    },
    {
      id: 3,
      option: "Option 4",
    },
    {
      id: 4,
      option: "Option 5",
    },
    {
      id: 5,
      option: "Option 6",
    },
    {
      id: 6,
      option: "Option 7",
    },
    {
      id: 7,
      option: "Option 8",
    },
    {
      id: 8,
      option: "Option 9",
    },
    {
      id: 9,
      option: "Option 10",
    },
    {
      id: 10,
      option: "Option 11",
    },
    {
      id: 11,
      option: "Option 12",
    },
    {
      id: 12,
      option: "Option 13",
    },
    {
      id: 13,
      option: "Option 14",
    },
    {
      id: 14,
      option: "Option 15",
    },
    {
      id: 15,
      option: "Option 16",
    },
    {
      id: 16,
      option: "Option 17",
    },
    {
      id: 17,
      option: "Option 18",
    },
    {
      id: 18,
      option: "Option 19",
    },
    {
      id: 19,
      option: "Option 20",
    },
  ];
}
