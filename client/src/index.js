import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-wq6s47m77sxbmwmj.us.auth0.com"
            clientId="GudB6RCbgeTYKq8r6VCmh91xyQvtS7yw"
            authorizationParams={{
            redirect_uri: window.location.origin
            }}>


        <App /></Auth0Provider>
    </React.StrictMode>
);