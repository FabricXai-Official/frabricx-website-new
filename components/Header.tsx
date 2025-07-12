import {
  Button,
  createTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider,
} from "flowbite-react";
import FabricXAi from "@/public/icons/fabricxai.svg";
import CTA from "./CTA";

const theme = createTheme({
  navbar: {
    root: {
      base: "bg-transparent px-2 py-2.5 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between px-24",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      icon: "h-6 w-6 shrink-0",
      title: "sr-only",
    },
  },
});

export default function Header() {
  return (
    <ThemeProvider theme={theme} applyTheme="replace">
      <Navbar fluid rounded>
        <NavbarBrand href="#">
          <div className="flex items-center justify-center h-6 sm:h-9 ">
            <FabricXAi />
          </div>
        </NavbarBrand>
        <div className="flex md:order-2 gap-2">
          <Button color="alternative">Get a Demo</Button>
          <CTA>Get started</CTA>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#features">Features</NavbarLink>
          <NavbarLink href="#solutions">Solutions</NavbarLink>
          <NavbarLink href="#pricing">Pricing</NavbarLink>
          <NavbarLink href="#about">About</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}
