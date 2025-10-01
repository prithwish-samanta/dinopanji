import NavBar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./navigation/AppRoutes";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
                <AppRoutes/>
            </main>
            <Footer />
        </div>
    )
}