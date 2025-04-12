import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-32 h-screen bg-black">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-white">
                Contact <span className="text-red-600">Us</span>
              </h1>
              <p className="text-gray-400">
                We are available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-white">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc text-gray-400">
                <li>
                  <span className="font-bold text-red-600">Phone: </span>
                  (123) 34567890
                </li>
                <li>
                  <span className="font-bold text-red-600">Email: </span>
                  <a href="" className="underline hover:text-red-500">
                    your-email@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-red-900/30 p-10 bg-[#0F0F0F]">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-white">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" className="bg-black border-red-900/30 text-white" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-white">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" className="bg-black border-red-900/30 text-white" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input type="email" id="email" placeholder="Email" className="bg-black border-red-900/30 text-white" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-white">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" className="bg-black border-red-900/30 text-white" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-white">Message</Label>
              <Textarea placeholder="Type your message here." id="message" className="bg-black border-red-900/30 text-white" />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
