'use client'
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge>Badge</Badge>
      <Badge variant='destructive'>destructive</Badge>
      <Badge variant='secondary'>secondary</Badge>
      <Badge variant='info'>info</Badge>
      <Badge variant='success'>success</Badge>
    </div>
  );
}
