"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

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

const durations = [
  {
    value: "15",
    label: "15 min",
  },
  {
    value: "30",
    label: "30 min",
  },
  {
    value: "45",
    label: "45 min",
  },
  {
    value: "60",
    label: "60 min",
  },
  {
    value: "120",
    label: "120 min",
  },
];

export function DurationCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setDuration } = useAppContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? durations.find((duration) => duration.value === value)?.label
            : "Select duration..."}
          <ChevronDown
            className={`ml-2 h-4 w-4 shrink-0 ${
              open ? "rotate-180 transition-transform duration-200" : ""
            }`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search duration..." />
          <CommandEmpty>No duration found.</CommandEmpty>
          <CommandGroup>
            {durations.map((duration) => (
              <CommandItem
                className="custom-hover-bg"
                key={duration.value}
                value={duration.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setDuration(
                    currentValue === value ? 30 : parseInt(currentValue, 10)
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === duration.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {duration.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
