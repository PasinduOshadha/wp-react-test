
import './App.css'
import { Button } from './components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function App() {


  return (
    <>
      <div className="flex flex-col gap-5 max-w-[400px] border rounded mx-auto p-4">
        <Select className="w-full">
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App
