'use client'


import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);
  
  const smallDate = date?.toLocaleDateString("es-ES",{
      weekday:"short",
      day:"numeric",
      month:"long"
    });


  return (
    <div className="flex-col gap-4 sm:flex-wrap sm:flex sm:flex-row">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      disabled={(date)=> date.getDay() ===0  || date.getDay() === 6}
    />
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      disabled={(date) => date >new Date()}
    />
    <Calendar
      mode="multiple"
      selected={multipleDate}
      onSelect={setMultipleDate}
      className="rounded-md border"
     
    />
    <div>
      <h1 className="text-3xl">Informacion</h1>
      <div className="border-b"> </div>
      <p>{smallDate}</p>
      <p>{multipleDate?.map((date) => date?.toLocaleDateString()).join(", ")}</p>
    </div>
    
    
    
    </div>
  );
}
