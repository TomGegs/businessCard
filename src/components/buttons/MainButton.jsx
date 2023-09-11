function MainButton({ label, icon }) {
    return (
        <div className="relative mx-auto w-full justify-center">
            <div className="left-4.5 absolute -top-1 h-16 w-full animate-gradientFast bg-gradient-to-r from-primary via-altSecond to-secondary blur-md" />

            <button
                className=" relative flex w-full place-items-center justify-center gap-x-2  rounded-xl bg-bgPrimary py-4 font-semibold text-white hover:text-primary active:translate-y-0.5 active:scale-95"
                type="button"
            >
                {icon ? <span className=" ml-2  text-xl">{icon}</span> : null}
                {label}
            </button>
        </div>
    );
}

export default MainButton;
