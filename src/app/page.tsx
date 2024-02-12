import { Confetti } from "./confetti";

export default async function Home() {
  const { redirected } = await fetch("https://docs.bsky.app", {
    cache: "no-store",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <p>Does docs.bsky.app still have the www. prefix?</p>
      <h1 className="text-[30vw] font-black">{redirected ? "YES" : "NO"}</h1>
      {!redirected && <Confetti />}
    </main>
  );
}
