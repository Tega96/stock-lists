const Layout = ({children}: {children: Readonly<{children: React.ReactNode}>}) => {
    return (
        <div className="">
            {children}
        </div>
    )
}
export default Layout