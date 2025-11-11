'use client';

import { Menu, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function MobileHeader() {
  return (
    <header
      className="sticky top-0 z-40 w-full
      border-b border-white/10
      bg-background/30 supports-backdrop-filter:bg-background/20
      backdrop-blur-xl backdrop-saturate-150
      shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.06)]"
    >
      <div className="mx-auto flex h-14 container items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="p-4">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li>Lend</li>
                  <li>Borrow</li>
                  <li>Multiply</li>
                  <li>Smart Lend</li>
                  <li>Lite</li>
                  <li>Swap</li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span className="text-sm font-semibold">dApp</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
