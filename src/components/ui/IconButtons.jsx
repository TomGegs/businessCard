const IconButtons = ({ iconName, url }) => {
    return (
        <button
            type="button"
            onClick={() => window.open(url, "_blank")}
            className="border border-blue-400 rounded-full p-3 text-blue-400 hover:text-purple-400 hover:border-purple-400 focus:border-purple-400 transition-all duration-500">
            {iconName}
        </button>
    );
};

export default IconButtons;
