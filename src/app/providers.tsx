'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { Web3Provider } from "@/lib/web3/provider";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <Web3Provider>
        {children}
      </Web3Provider>
    </ChakraProvider>
  );
} 