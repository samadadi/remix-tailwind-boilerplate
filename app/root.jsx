import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "New Remix App" },
    { name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
