import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "Content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "Content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [index, setIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;
  return {
    item: allTabs[index],
    changeItem: setIndex
  };
};

const App = () => {
  // const tab = useTabs(0, content);
  const { item, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, idx) => (
        <button key={idx} onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>
        {item.content}
      </div>
    </div>
  );
}

export default App;