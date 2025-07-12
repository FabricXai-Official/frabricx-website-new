import { cn } from "@/utils/cn";
import { Button, createTheme, ThemeProvider } from "flowbite-react";
import React from "react";

const theme = createTheme({
    button: {
    color: {
      primary: "bg-[#F2F827] text-[#13191D]",
    },
  },
});

type CTAProps = {
  children?: React.ReactNode;
  className?: string;
};

const CTA: React.FC<CTAProps> = ({ children, className }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className={cn("w-full md:w-auto", className)}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CTA;
