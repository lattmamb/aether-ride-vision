import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, 'Message is required').max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const hours = [
  { day: 'Monday – Friday', time: '7:00am – 7:00pm' },
  { day: 'Saturday', time: '8:00am – 6:00pm' },
  { day: 'Sunday', time: '8:00am – 6:00pm' },
];

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Mock submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="/videos/map-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the future of transportation? Reach out and let's get you on the road.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-metallic rounded-2xl p-8 border border-white/10"
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Phone (optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          rows={4}
                          className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Contact Details Card */}
            <div
              className="glass-metallic rounded-2xl p-8 border border-white/10"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a href="tel:+12178271305" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+1 (217) 827-1305</p>
                  </div>
                </a>
                <a href="mailto:lambmatt2002@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">lambmatt2002@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Decatur+IL+62525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Decatur, IL 62525, United States</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div
              className="glass-metallic rounded-2xl p-8 border border-white/10"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-muted-foreground text-sm">{h.day}</span>
                    <span className="text-foreground font-medium text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
