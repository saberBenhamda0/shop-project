import { useState } from "react";

export const handleDate = () =>{
    const [date, setDate] = useState<Date | null>(null);
    const currentDate = new Date();
    () => setDate(currentDate);
    return date;
  }
