type ContainerProps = {
    children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return (
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 xl:px-0">
            {children}
        </div>
    );
}