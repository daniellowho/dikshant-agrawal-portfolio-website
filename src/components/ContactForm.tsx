
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real scenario, this would be an API call
      console.log("Form submitted:", data);
      
      // Send an email to dikshant231@gmail.com using a mailto link
      const mailtoLink = `mailto:dikshant231@gmail.com?subject=Portfolio Contact from ${data.name}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`
      )}`;
      
      window.open(mailtoLink);
      
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="bg-darkgray-200" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} className="bg-darkgray-200" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Write your message here..." 
                  {...field} 
                  className="bg-darkgray-200 min-h-[120px]" 
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-darkgray-100 hover:bg-darkgray-200 text-white py-3 rounded-md transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Mail className="w-4 h-4" />
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
