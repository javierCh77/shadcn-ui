import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const items = [
  {
    id:"1",
    question:"is it Accesible?",
    answer:" Yes. It comes with default styles that matches the other"
  },
  {
    id:"2",
    question:"Is it styled?",
    answer:" Yes. It comes with default styles that matches the other"
  },
  {
    id:"3",
    question:"Is it animated?",
    answer:" Yes. It comes with default styles that matches the other"
  },
  {
    id:"4",
    question:"I like ?",
    answer:" Yes. It comes with default styles that matches the other"
  },
]




export default function Page() {
  return (
  <div>
    <Accordion type="single"  className="w-full">
    {
      items.map((item)=>(
        <AccordionItem value={item.id} key={item.id}>
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>
          {item.answer}
        </AccordionContent>
      </AccordionItem>
      ))}
     </Accordion>
  </div>
  );
}