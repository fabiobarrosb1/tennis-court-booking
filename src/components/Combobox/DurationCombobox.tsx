"use client"

import * as React from "react"
import { Check, ChevronsUpDown, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const durations = [
  {
    value: "15 min",
    label: "15 min",
  },
  {
    value: "30 min",
    label: "30 min",
  },
  {
    value: "45 min",
    label: "45 min",
  },
  {
    value: "60 min",
    label: "60 min",
  },
  {
    value: "120 min",
    label: "120 min",
  },
]

export function DurationCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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
          <ChevronDown className={`ml-2 h-4 w-4 shrink-0 ${
              open ? "rotate-180 transition-transform duration-200" : ""
            }`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No duration found.</CommandEmpty>
          <CommandGroup>
            {durations.map((duration) => (
              <CommandItem
                key={duration.value}
                value={duration.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
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
  )
}
