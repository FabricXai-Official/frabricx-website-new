import { cn } from "@/lib/utils";
import { Button, ButtonColors, ButtonSizes, createTheme, ThemeProvider } from "flowbite-react";
import { DynamicStringEnumKeysOf } from "flowbite-react/types";
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
  color?: DynamicStringEnumKeysOf<ButtonColors>;
  outline?: boolean;
  pill?: boolean;
  size?: DynamicStringEnumKeysOf<ButtonSizes>;
};

const CTA: React.FC<CTAProps> = ({ children, className, color, outline, pill, size }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color ?? "primary"}
        outline={outline}
        pill={pill}
        size={size}
        className={cn("w-full md:w-auto", className)}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CTA;
