import ResponsiveAppBar from "./Navbar";

export default function Layout({ children }) {
    return (
      <>
        <ResponsiveAppBar />
        <main>{children}</main>
      </>
    )
}