const IconButtons = ({ iconName, url, noNewTab }) => {
    const openNewTab = () => {
        window.open(url, "_blank");
    };
    return (
        <button
            type="button"
            onClick={noNewTab ? null : openNewTab}
            className="rounded-full px-2 pt-2 text-xl text-primary hover:text-altSecond transition-all duration-500">
            {iconName}
        </button>
    );
};

export default IconButtons;
