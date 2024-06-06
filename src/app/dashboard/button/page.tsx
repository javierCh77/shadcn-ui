'use client'
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Loader2, Mail } from "lucide-react";


export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
        <Button>default</Button>
        <Button variant='destructive'>default</Button>
        <Button variant='link'>default</Button>
        <Button variant='outline'>default</Button>
        <Button variant='secondary'>default</Button>
        <Button disabled>default</Button>
        <Button onClick={()=>console.log("Hola mundo")}>click Me</Button>
        <Button variant='success'>Success</Button>
        
        <Button variant="outline" size="icon">
         <ChevronRightIcon className="h-4 w-4" />
        </Button>
        
        <Button>
           <Mail className="mr-2 h-4 w-4" /> Login 
        </Button>
       
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
        </Button>
    </div>
  );
}
