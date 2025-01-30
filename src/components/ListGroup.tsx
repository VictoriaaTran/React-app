import { useState } from "react";

// items: [], heading: string
interface Props{
    items: string[];
    heading: string;
    // function (item:string) => return void (nothing)
    onSelectedItem: (item:string) => void;
}
// dynamic list of items
function ListGroup({items, heading, onSelectedItem}: Props) {
  // a list of items

  //hook to manage state - have dynamic data that change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {/* render message */}
      {items.length === 0 && <p>No items</p>}

      {/* list items */}
      <ul className="list-group">
        {/* wrap it as an expression */}
        {items.map((item, index) => (
          <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
                key={item}
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectedItem(item); 
                }}
                >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
