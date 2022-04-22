import { SetStateAction } from "react";

type FilterButtonProps = {
  data: SetStateAction<{name: string,}>[];
  activeButton: String;
  onChange: (str: SetStateAction<string>) => void;
};

const FilterButtonSection = ({
  data,
  activeButton,
  onChange,
}: FilterButtonProps) => {
  return (
    <div className="filter">
      <ul>
        {data.map(({name: item}) => {
          function OnPress() {
            onChange(item);
          }
          return (
            <li
              onClick={OnPress}
              key={item.toString()}
              style={{ cursor: "pointer" }}
              className={`filter-btn ${activeButton == item ? "active" : ""}`}
            >
              <a
                data-type={`${item.toString().toLowerCase().replace(" ", "")}`}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FilterButtonSection;
