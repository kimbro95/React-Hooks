import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
    const [index, setIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) return;
    return {
        item: allTabs[index],
        changeItem: setIndex
    };
};
