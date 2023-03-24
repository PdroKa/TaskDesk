import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from "../Pages/Login";
import HelpDesk from "../Pages/HelpDesk";
import Dashboard from "../Pages/Dashboard";
import RecoveryPassword from "../Pages/RecoveryPassword";



import { AuthProvider, AuthContext } from "../contexts/auth";
import { useContext } from "react";
import { ErrorRoute } from "./Error";


const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)


        if (loading) {
            return <h1>LOADING...</h1>
        }

        if (!authenticated) {
            return <Navigate to="/" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path="/dashboard"
                        element={
                            <Private>
                                <Dashboard />
                            </Private>}
                    />
                    <Route
                        exact
                        path="/helpdesk"
                        element={
                            <Private>
                                <HelpDesk />
                            </Private>}
                    />
                    <Route
                        exact
                        path="/recovery-password"
                        element={
                            <RecoveryPassword />}
                    />
                    <Route
                        exact
                        path="/"
                        element={
                            <LoginPage />}
                    />
                    <Route
                        path="*"
                        element={
                            <ErrorRoute />}
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )

}

export default AppRoutes;