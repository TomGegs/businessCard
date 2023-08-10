const MainButton = ({ label, icon }) => {
    return (
        <div className="relative justify-center w-full mx-auto">
            <div className="left-4.5 absolute -top-1 h-16 w-full animate-gradientFast bg-gradient-to-r from-primary via-altSecond to-secondary blur-md" />

            <button
                className=" relative flex w-full justify-center rounded-xl text-white  bg-bgPrimary py-4 hover:text-primary active:translate-y-0.5 active:scale-95 gap-x-2 font-semibold place-items-center"
                type="button">
                {icon ? <span className=" ml-2  text-xl">{icon}</span> : null}
                {label}
            </button>
        </div>
    );
};

export default MainButton;
