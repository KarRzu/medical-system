import { ReactNode } from "react";
import { SWRConfig } from "swr";

export type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <SWRConfig value={{ refreshInterval: 3000 }}>{children}</SWRConfig>;
}
