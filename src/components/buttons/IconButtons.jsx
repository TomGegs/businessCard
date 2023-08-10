const IconButtons = ({ iconName, url }) => {
    return (
        <button
            type="button"
            onClick={() => window.open(url, "_blank")}
            className="rounded-full px-2 pt-2 text-lg text-primary hover:text-altSecond transition-all duration-500">
            {iconName}
        </button>
    );
};

export default IconButtons;
