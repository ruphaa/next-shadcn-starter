import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme_toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Welcome to Next.js + Shadcn Starter pack
        </h1>
        <p className="text-muted-foreground text-center sm:text-left">
          A modern starter kit for building fast, beautiful web apps with
          Next.js, Tailwind CSS, Shadcn UI, and TypeScript — all set up and
          ready to go.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild>
            <Link target="_blank" href="https://github.com/ruphaa/next-shadcn-starter">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link target="_blank" href="https://github.com/ruphaa/next-shadcn-starter">View on GitHub</Link>
          </Button>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>What’s Included</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckIcon />
                Next.js App Router
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckIcon />
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckIcon />
                TypeScript
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckIcon />
                Shadcn UI
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckIcon />
                Dark mode support
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckIcon />
                Prettier + ESLint
              </Badge>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
