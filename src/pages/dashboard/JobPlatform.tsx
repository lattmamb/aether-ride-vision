import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useSEO } from '@/hooks/useSEO';
import { toast } from 'sonner';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Search,
  Filter,
  Plus,
  Heart,
  HeartOff
} from 'lucide-react';
import { Job } from '@/types';
import { PostJobModal } from '@/components/dashboard/modals';

const mockJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Vehicle Operations Specialist',
    type: 'full-time',
    location: 'Decatur, IL',
    salary: { min: 45000, max: 55000, period: 'yearly' },
    description: 'Lead our vehicle operations team in managing fleet maintenance, charging schedules, and ensuring optimal vehicle performance.',
    requirements: ['Strong communication skills', '2+ years automotive experience', 'Technical aptitude', 'Valid driver\'s license'],
    postedDate: new Date('2025-01-15'),
    applicants: 12
  },
  {
    id: 'job-2',
    title: 'Community Liaison Coordinator',
    type: 'part-time',
    location: 'Springfield, IL',
    salary: { min: 55000, max: 65000, period: 'yearly' },
    description: 'Build relationships with local residents and businesses to expand Unity Fleet\'s presence in rural communities.',
    requirements: ['Community involvement', 'Team leadership skills', 'Flexible schedule', 'Local area knowledge'],
    postedDate: new Date('2025-01-18'),
    applicants: 8
  },
  {
    id: 'job-3',
    title: 'Customer Experience Ambassador',
    type: 'remote',
    location: 'Remote',
    salary: { min: 18, max: 22, period: 'hourly' },
    description: 'Provide exceptional customer service and support to Unity Fleet subscribers through remote assistance.',
    requirements: ['Customer service experience', 'Remote work setup', 'Problem-solving skills', 'Tech-savvy'],
    postedDate: new Date('2025-01-20'),
    applicants: 25
  },
  {
    id: 'job-4',
    title: 'Charging Hub Attendant',
    type: 'part-time',
    location: 'Champaign, IL',
    salary: { min: 15, max: 18, period: 'hourly' },
    description: 'Maintain charging stations, assist customers, and ensure optimal operation of hub facilities.',
    requirements: ['Attention to detail', 'Customer service skills', 'Basic technical knowledge', 'Reliable transportation'],
    postedDate: new Date('2025-01-22'),
    applicants: 15
  },
  {
    id: 'job-5',
    title: 'Fleet Safety Inspector',
    type: 'contract',
    location: 'Champaign, IL',
    salary: { min: 15, max: 18, period: 'hourly' },
    description: 'Conduct comprehensive safety inspections of autonomous vehicles and charging infrastructure.',
    requirements: ['Safety inspection certification', 'Automotive knowledge', 'Attention to detail', 'Documentation skills'],
    postedDate: new Date('2025-01-25'),
    applicants: 6
  },
  {
    id: 'job-6',
    title: 'Investment Coordinator',
    type: 'full-time',
    location: 'Multiple Locations',
    salary: { min: 42000, max: 48000, period: 'yearly' },
    description: 'Help community members navigate the tokenization platform and investment opportunities.',
    requirements: ['Financial services background', 'Strong analytical skills', 'Investment knowledge', 'Series 7 license (preferred)'],
    postedDate: new Date('2025-01-28'),
    applicants: 9
  }
];

const typeColors: Record<string, string> = {
  'full-time': 'bg-primary text-primary-foreground',
  'part-time': 'bg-purple-500 text-white',
  'contract': 'bg-green-500 text-white',
  'remote': 'bg-blue-500 text-white'
};

export default function JobPlatform() {
  useSEO({ title: 'Job Platform | Unity Fleet', description: 'Find and manage job opportunities' });
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  const filteredJobs = mockJobs.filter(job => {
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const formatSalary = (job: Job) => {
    if (job.salary.period === 'yearly') {
      return `$${job.salary.min.toLocaleString()} - $${job.salary.max.toLocaleString()}/year`;
    }
    return `$${job.salary.min} - $${job.salary.max}/hour`;
  };

  const handleSaveJob = (jobId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (savedJobs.includes(jobId)) {
      setSavedJobs(prev => prev.filter(id => id !== jobId));
      toast.success('Job removed from saved list');
    } else {
      setSavedJobs(prev => [...prev, jobId]);
      toast.success('Job saved successfully');
    }
  };

  const handleApply = (jobTitle: string) => {
    toast.success(`Application submitted for "${jobTitle}"! We'll be in touch soon.`);
    setSelectedJob(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Platform</h1>
          <p className="text-muted-foreground mt-1">Discover and manage employment opportunities</p>
        </div>
        <Button onClick={() => setShowPostJobModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Jobs</p>
              <p className="text-2xl font-bold">{mockJobs.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Hourly Pay</p>
              <p className="text-2xl font-bold">$22</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Clock className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Worker Satisfaction</p>
              <p className="text-2xl font-bold">98%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs by title or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', 'full-time', 'part-time', 'contract', 'remote'].map((type) => (
            <Badge
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="cursor-pointer capitalize px-4 py-2"
              onClick={() => setSelectedType(type)}
            >
              {type === 'all' ? 'All Jobs' : type.replace('-', ' ')}
            </Badge>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="p-6 cursor-pointer transition-all hover:border-primary hover:shadow-lg"
            onClick={() => setSelectedJob(job)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className={typeColors[job.type]}>
                    {job.type.replace('-', ' ')}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </Badge>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={(e) => handleSaveJob(job.id, e)}
              >
                {savedJobs.includes(job.id) ? (
                  <Heart className="h-5 w-5 text-destructive fill-destructive" />
                ) : (
                  <Heart className="h-5 w-5" />
                )}
              </Button>
            </div>

            <p className="text-muted-foreground mb-4 line-clamp-2">
              {job.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="font-semibold text-primary">
                {formatSalary(job)}
              </div>
              <div className="text-sm text-muted-foreground">
                {job.applicants} applicants
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Key Requirements:</p>
              <div className="flex flex-wrap gap-2">
                {job.requirements.slice(0, 3).map((req, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {req}
                  </Badge>
                ))}
                {job.requirements.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{job.requirements.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            <Button className="w-full mt-4" onClick={(e) => { e.stopPropagation(); handleApply(job.title); }}>
              Apply Now
            </Button>
          </Card>
        ))}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge className={typeColors[selectedJob.type]}>
                    {selectedJob.type.replace('-', ' ')}
                  </Badge>
                  <Badge variant="outline">
                    <MapPin className="h-3 w-3 mr-1" />
                    {selectedJob.location}
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" onClick={() => setSelectedJob(null)}>
                ✕
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Salary</h3>
                <p className="text-primary font-semibold text-lg">{formatSalary(selectedJob)}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => handleApply(selectedJob.title)}>
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleSaveJob(selectedJob.id, {} as React.MouseEvent)}
                >
                  {savedJobs.includes(selectedJob.id) ? (
                    <>
                      <HeartOff className="h-4 w-4 mr-2" />
                      Unsave Job
                    </>
                  ) : (
                    <>
                      <Heart className="h-4 w-4 mr-2" />
                      Save Job
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Post Job Modal */}
      <PostJobModal open={showPostJobModal} onOpenChange={setShowPostJobModal} />
    </div>
  );
}
