import React, {useState} from "react";
import SysHeader from "./components/SysHeader";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import {NavbarNested} from "./components/Navbar";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
        <SysHeader />
        <NavbarNested />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
