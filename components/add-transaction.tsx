import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AddTransaction() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add transaction</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add transaction</DialogTitle>
          <DialogDescription>
            Record a new transaction to update your holdings
          </DialogDescription>
          <div className="flex flex-col gap-4 py-4">
            <Input placeholder="Symbol" />
            <Input placeholder="Quantity" />
            <Input placeholder="Price" />
            <Button>Add</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
