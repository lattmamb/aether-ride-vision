import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@/components/ui/command';

const CommandMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search navigation…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Website">
          <CommandItem onSelect={() => go('/')}>Home</CommandItem>
          <CommandItem onSelect={() => go('/vehicles')}>Vehicles</CommandItem>
          <CommandItem onSelect={() => go('/pricing')}>Pricing</CommandItem>
          <CommandItem onSelect={() => go('/locations')}>Locations</CommandItem>
          <CommandItem onSelect={() => go('/about')}>About</CommandItem>
          <CommandItem onSelect={() => go('/book/tesla-model-3')}>Book Vehicle</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Dashboard">
          <CommandItem onSelect={() => go('/dashboard')}>Overview</CommandItem>
          <CommandItem onSelect={() => go('/dashboard/fleet')}>Fleet</CommandItem>
          <CommandItem onSelect={() => go('/dashboard/reservations')}>Reservations</CommandItem>
          <CommandItem onSelect={() => go('/dashboard/users')}>Users</CommandItem>
          <CommandItem onSelect={() => go('/dashboard/analytics')}>Analytics</CommandItem>
          <CommandItem onSelect={() => go('/dashboard/locations')}>Locations</CommandItem>
          <CommandItem onSelect={() => go('/dashboard/maintenance')}>Maintenance</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandMenu;
