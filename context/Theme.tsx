import * as everything from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  console.log("e->", everything);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
