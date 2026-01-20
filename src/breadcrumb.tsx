interface BreadcrumbPath {
  label: string;
  screen: string;
}

interface BreadcrumbProps {
  paths: BreadcrumbPath[];
  onHomeClick: () => void;
  onNavigate: (screen: string) => void;
}

const Breadcrumb = ({ paths, onHomeClick, onNavigate }: BreadcrumbProps) => {
  return (
    <div className="px-20 mt-6 text-sm text-gray-400 flex gap-1 flex-wrap">

     
      <span
        onClick={onHomeClick}
        className="cursor-pointer hover:underline"
      >
        Home
      </span>

      {paths.map((item, index) => (
        <span key={index} className="flex gap-1">
          <span>/</span>

          <span
            onClick={() => onNavigate(item.screen)}
            className={`cursor-pointer hover:underline ${
              index === paths.length - 1
                ? "text-black font-medium"
                : ""
            }`}
          >
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
