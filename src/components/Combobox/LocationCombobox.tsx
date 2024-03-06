"use client";

import * as React from "react";
import { Check, ChevronsUpDown, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppContext } from "../Context/MyContext";

const locations = [
  {
    value: "portugal",
    label: "Portugal",
  },
  {
    value: "spain",
    label: "Spain",
  },
  {
    value: "france",
    label: "France",
  },
  {
    value: "italy",
    label: "Italy",
  },
  {
    value: "singapore",
    label: "Singapore",
  },
];

export function LocationCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setLocation } = useAppContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-left"
        >
          {value
            ? locations.find((location) => location.value === value)?.label
            : "Select location..."}
          <ChevronDown
            className={`ml-2 h-4 w-4 shrink-0 ${
              open ? "rotate-180 transition-transform duration-200" : ""
            }`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            {locations.map((location) => (
              <CommandItem
                key={location.value}
                value={location.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setLocation(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === location.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {location.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
