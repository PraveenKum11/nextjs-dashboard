'use client';

import { useEffect } from "react";

export default function Error({ error, reset }: {
  // Error & { digest?: string }, inherits all the properties and 
  // methods of the regular Error type and includes an additional 
  // optional property named digest that can be a string.
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service.
    console.log(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route.
          () => reset()
        }
      >
        Try Again
      </button>
    </main>
  );
}