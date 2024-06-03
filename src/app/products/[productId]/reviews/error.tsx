"use client";

export default function ErrorBoundary({error,reset} : {
    error: Error;
    reset: () => void;
}) {
  return (
    <main>
      <h1> Error: {error.message} <button onClick={reset}>try again</button> </h1>
    </main>
  );
}