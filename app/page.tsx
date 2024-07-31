import { MyDialog } from "@/components/MyDialog";
import { SelectScrollable } from "@/components/SelectScrollable";
import { ToastDemo } from "@/components/toastDemo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Home() {
  return (
    <div className="flex flex-col">
      <div  className="flex justify-center items-center">
        <h1>123</h1>
      </div>
      <Button>Button</Button>
      <Input type="email" placeholder="Email" />
      <MyDialog />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <SelectScrollable />
      <ToastDemo />
    </div>
  );
}
