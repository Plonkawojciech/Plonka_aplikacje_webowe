import React from "react"
import Homepage from "../pages/Homepage"
import About from "../pages/About"

interface RouteItem {
  path: string
  name: string
  element: React.JSX.Element
}

// export const routes: RouteItem[]

export const routes: Array<RouteItem> = [
  {
    path: "/",
    name: "Homepage",
    element: <Homepage />
  },
  {
    path: "/about",
    name: "About",
    element: <About />
  }
]