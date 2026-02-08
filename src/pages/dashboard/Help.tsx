import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSEO } from '@/hooks/useSEO';
import { toast } from 'sonner';
import { 
  HelpCircle, 
  MessageCircle, 
  BookOpen, 
  Video,
  Mail,
  Phone,
  CheckCircle,
  ExternalLink,
  Search
} from 'lucide-react';

const faqs = [
  {
    question: 'How do I add a new vehicle to the fleet?',
    answer: 'Navigate to Dashboard Overview and click "Add New Vehicle" in the Quick Actions panel. Fill in the vehicle details including model, VIN, and color, then submit the form.'
  },
  {
    question: 'How can I track vehicle locations in real-time?',
    answer: 'Go to Real-Time Tracking from the sidebar. The map view shows all vehicles with their current status. Click on any vehicle marker or card to see detailed information.'
  },
  {
    question: 'How do I schedule maintenance for a vehicle?',
    answer: 'From the Vehicle Health section on the Dashboard Overview, click "Schedule Maintenance" or navigate to the Maintenance page. Select the vehicle, date, and service type.'
  },
  {
    question: 'How can I export fleet data?',
    answer: 'On the Real-Time Tracking page, click the "Export Data" button to download vehicle data as a CSV file. You can also export from Analytics & Reports.'
  },
  {
    question: 'How do I manage user permissions?',
    answer: 'Go to User Management from the sidebar. Click on a user to edit their role and permissions. Available roles include Administrator, Manager, Operator, and Viewer.'
  },
  {
    question: 'What do the different vehicle statuses mean?',
    answer: 'Active: Currently in use. Available: Ready for booking. Charging: At a charging station. Maintenance: Undergoing service or repair.'
  },
  {
    question: 'How do I post a new job opening?',
    answer: 'Navigate to Job Platform and click "Post New Job". Fill in the job title, type, location, salary, and requirements. The posting will be visible immediately.'
  },
  {
    question: 'How can I view charging hub analytics?',
    answer: 'Go to Charging Hubs from the sidebar. Select a hub to see detailed analytics including energy delivered, revenue, and utilization rates.'
  }
];

const systemStatus = [
  { name: 'Fleet Tracking', status: 'operational' },
  { name: 'Booking System', status: 'operational' },
  { name: 'Payment Processing', status: 'operational' },
  { name: 'Notifications', status: 'operational' },
  { name: 'Analytics', status: 'operational' }
];

export default function Help() {
  useSEO({ title: 'Help & Support | Unity Fleet', description: 'Get help and support for Unity Fleet dashboard' });
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    subject: '',
    message: ''
  });

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.subject || !contactForm.message) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Support request submitted! We\'ll get back to you within 24 hours.');
    setContactForm({ subject: '', message: '' });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
          <p className="text-muted-foreground mt-1">Find answers and get assistance</p>
        </div>
        <Badge className="status-success">
          <CheckCircle className="h-3 w-3 mr-1" />
          All Systems Operational
        </Badge>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 cursor-pointer hover:border-primary transition-colors" onClick={() => toast.info('Documentation opening...')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Documentation</p>
              <p className="text-xs text-muted-foreground">Browse guides</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:border-primary transition-colors" onClick={() => toast.info('Video tutorials coming soon!')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Video className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="font-medium">Video Tutorials</p>
              <p className="text-xs text-muted-foreground">Watch & learn</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:border-primary transition-colors" onClick={() => toast.info('Live chat coming soon!')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="font-medium">Live Chat</p>
              <p className="text-xs text-muted-foreground">Get instant help</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:border-primary transition-colors" onClick={() => window.open('mailto:support@unityfleet.com')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="font-medium">Email Support</p>
              <p className="text-xs text-muted-foreground">support@unityfleet.com</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </h3>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search FAQs..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No FAQs match your search. Try a different query or contact support.
              </p>
            )}
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Support
            </h3>
            <form onSubmit={handleSubmitContact} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What do you need help with?"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your issue..."
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </Card>

          {/* System Status */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="space-y-3">
              {systemStatus.map((system, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{system.name}</span>
                  <Badge variant="outline" className="text-green-500 border-green-500">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Operational
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={() => toast.info('Status page opening...')}>
              <ExternalLink className="h-4 w-4 mr-2" />
              View Status Page
            </Button>
          </Card>

          {/* Contact Info */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>support@unityfleet.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (217) 555-0100</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Support hours: Monday - Friday, 8 AM - 6 PM CST
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
