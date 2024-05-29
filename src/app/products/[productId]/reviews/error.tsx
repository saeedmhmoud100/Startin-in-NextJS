"use client";

export default function ErrorBoundary({error} : {
    error: Error;
}) {
  return (
    <main>
      <h1> Error: {error.message}</h1>
    </main>
  );
}