type Screen = "app" | "about" | "contact"|"myAccount";


interface BreadcrumbProps {
   currentScreen: Screen;
  onHomeClick: () => void;
}

const Breadcrumb = ({ currentScreen, onHomeClick }: BreadcrumbProps) => {
  const screenLabelMap: { [key in Screen]: string } = {
  app: "Home",
  about: "About",
  contact: "Contact",
  myAccount:"My Account"
};

  return (
    <div className="px-20 mt-6 text-sm flex gap-2">
      <span
        onClick={onHomeClick}
        className="cursor-pointer text-gray-400 hover:underline"
      >
        Home
      </span>

      {currentScreen !== "app" && (
        <>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">
            {screenLabelMap[currentScreen]}
          </span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
