"use client";

import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const MantineWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <MantineProvider
      defaultColorScheme={theme}
      theme={{
        fontFamily: "Inter, system-ui, sans-serif",
        headings: { fontFamily: "Inter, system-ui, sans-serif" },
        primaryColor: "cyan",
      }}
    >
      {children}
    </MantineProvider>
  );
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MantineWrapper>{children}</MantineWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}
