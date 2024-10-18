import { ReactNode } from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  //hover is active to show text color change
  const buttonClasses = active ? 'text-green-700 dark:text-white border-b border-green-700' : 'text-[#121212] dark:text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-green-700 dark:hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;