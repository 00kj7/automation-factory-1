
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    // AI Assistants & Agents
    { title: "Slack AI Assistant - Automate Tasks on Slack", url: "https://www.checkout-ds24.com/redir/599343/Rogayah/" },
    { title: "Email Handling AI Assistant", url: "https://www.checkout-ds24.com/redir/599333/Rogayah/" },
    { title: "Voice AI Agent Will Call Anyone For You (100% Automatic)", url: "https://www.checkout-ds24.com/redir/599240/Rogayah/" },
    { title: "AI Assistant Will Manage Your Business (Automate Everything)", url: "https://www.checkout-ds24.com/redir/599239/Rogayah/" },
    { title: "AI Sales Agent", url: "https://www.checkout-ds24.com/redir/600558/Rogayah/" },
    { title: "AI Linkedin Agent", url: "https://www.checkout-ds24.com/redir/600559/Rogayah/" },
    { title: "AI Agent Finder Team", url: "https://www.checkout-ds24.com/redir/600556/Rogayah/" },
    { title: "Customer Feedback AI Assistant", url: "https://www.checkout-ds24.com/redir/599335/Rogayah/" },
    { title: "Reputation Management AI Assistant", url: "https://www.checkout-ds24.com/redir/599327/Rogayah/" },
    { title: "Discovery Call Form to Send Proposal", url: "https://www.checkout-ds24.com/redir/599326/Rogayah/" },
    { title: "Discovery Call Form - Send Email", url: "https://www.checkout-ds24.com/redir/599219/Rogayah/" },
    { title: "Post Call — Action Items", url: "https://www.checkout-ds24.com/redir/599323/Rogayah/" },

    // Email Marketing & Outreach
    { title: "High Ticket Email System - Automate Email Campaigns", url: "https://www.checkout-ds24.com/redir/599347/Rogayah/" },
    { title: "AI Powered Email Personalization", url: "https://www.checkout-ds24.com/redir/599210/Rogayah/" },
    { title: "Personalized Outreach with AI", url: "https://www.checkout-ds24.com/redir/599319/Rogayah/" },
    { title: "Personalized video outreach system", url: "https://www.checkout-ds24.com/redir/600560/Rogayah/" },
    { title: "Clever Refferal Autoresponder", url: "https://www.checkout-ds24.com/redir/599218/Rogayah/" },
    { title: "Automated Newsletter Production", url: "https://www.checkout-ds24.com/redir/600552/Rogayah/" },
    { title: "Search Intent Email Finder System", url: "https://www.checkout-ds24.com/redir/600541/Rogayah/" },
    { title: "Proposal Automation", url: "https://www.checkout-ds24.com/redir/599315/Rogayah/" },
    { title: "Instagram AI Messaging and Follow Ups System", url: "https://www.checkout-ds24.com/redir/599328/Rogayah/" },

    // Lead Generation & CRM
    { title: "Double Inbound Lead Conversion", url: "https://www.checkout-ds24.com/redir/599322/Rogayah/" },
    { title: "AI Automated Lead Researcher in CRM", url: "https://www.checkout-ds24.com/redir/600564/Rogayah/" },
    { title: "AI Automated Lead Qualification System", url: "https://www.checkout-ds24.com/redir/600563/Rogayah/" },
    { title: "How to Find 1,000+ Leads (100% Automatic)", url: "https://www.checkout-ds24.com/redir/600565/Rogayah/" },
    { title: "First Step Into AI Automations", url: "https://www.checkout-ds24.com/redir/599248/Rogayah/" },
    { title: "5 n8n Scenarios for new lead, Ai agent, Reporting, Webhooks", url: "https://www.checkout-ds24.com/redir/599241/Rogayah/" },
    { title: "4 Workflows: New lead, Daily Reminder, Webhooks, Sample", url: "https://www.checkout-ds24.com/redir/600568/Rogayah/" },
    { title: "Photography CRM Flow", url: "https://www.checkout-ds24.com/redir/600549/Rogayah/" },

    // Content Creation & SEO
    { title: "Content Creation Generator- Automate your Content Creation", url: "https://www.checkout-ds24.com/redir/599341/Rogayah/" },
    { title: "AI Content Architect", url: "https://www.checkout-ds24.com/redir/599325/Rogayah/" },
    { title: "AI Content Strategist", url: "https://www.checkout-ds24.com/redir/599324/Rogayah/" },
    { title: "AI Content Engine", url: "https://www.checkout-ds24.com/redir/599320/Rogayah/" },
    { title: "Ai Content System Blueprint", url: "https://www.checkout-ds24.com/redir/596680/Rogayah/" },
    { title: "AI Blog System", url: "https://www.checkout-ds24.com/redir/600566/Rogayah/" },
    { title: "Make 1,000+ Blogs In One Click (+SEO Optimized)", url: "https://www.checkout-ds24.com/redir/600567/Rogayah/" },
    { title: "Make.com Automation: SEO-Optimized AI Content With Claude AI", url: "https://www.checkout-ds24.com/redir/599211/Rogayah/" },
    { title: "YouTube Content Idea Generator", url: "https://www.checkout-ds24.com/redir/599220/Rogayah/" },
    { title: "WordPress Content Syndicator", url: "https://www.checkout-ds24.com/redir/600542/Rogayah/" },
    { title: "Social Media + Blog Repurposing AI Agent Team", url: "https://www.checkout-ds24.com/redir/600562/Rogayah/" },
    { title: "Ai Social media content Blueprint", url: "https://www.checkout-ds24.com/redir/596687/Rogayah/" },
    { title: "SEO WordPress AI Blog Assistant", url: "https://www.checkout-ds24.com/redir/599332/Rogayah/" },
    { title: "Make Viral Ads using AI- Step~By~Step Guide", url: "https://www.checkout-ds24.com/redir/599340/Rogayah/" },

    // Video & Media Automation
    { title: "AI Automation Workflow That Translates Any Video", url: "https://www.checkout-ds24.com/redir/599245/Rogayah/" },
    { title: "Create An Animated AI Influencer For Your Brand", url: "https://www.checkout-ds24.com/redir/600538/Rogayah/" },
    { title: "Ai Avatar That Works While You Sleep! (HeyGen + ElevenLabs)", url: "https://www.checkout-ds24.com/redir/599247/Rogayah/" },
    { title: "Voice bot flow using Ai", url: "https://www.checkout-ds24.com/redir/596675/Rogayah/" },
    { title: "YT Parasite", url: "https://www.checkout-ds24.com/redir/600554/Rogayah/" },
    { title: "YT Parasite System (ChatGPT Growth Hack)", url: "https://www.checkout-ds24.com/redir/600539/Rogayah/" },

    // Recruitment & HR Automation
    { title: "AI Resume Screening System - Automate CV Screening", url: "https://www.checkout-ds24.com/redir/599345/Rogayah/" },
    { title: "AI Recruitment CV Analysis", url: "https://www.checkout-ds24.com/redir/599330/Rogayah/" },
    { title: "Clickup Hiring Pipeline", url: "https://www.checkout-ds24.com/redir/599222/Rogayah/" },
    { title: "Payroll System for Hourly Contractors", url: "https://www.checkout-ds24.com/redir/599227/Rogayah/" },

    // Workflow Automation & Project Management
    { title: "AI Project Commander", url: "https://www.checkout-ds24.com/redir/599321/Rogayah/" },
    { title: "ClickUp Project Manager", url: "https://www.checkout-ds24.com/redir/599228/Rogayah/" },
    { title: "Build Your First AI Chatbot with RAG and Make.com", url: "https://www.checkout-ds24.com/redir/599236/Rogayah/" },
    { title: "n8n Email AI Agent", url: "https://www.checkout-ds24.com/redir/599237/Rogayah/" },
    { title: "Build A Client Onboarding System", url: "https://www.checkout-ds24.com/redir/600543/Rogayah/" },
    { title: "Automating Client Onboarding", url: "https://www.checkout-ds24.com/redir/599329/Rogayah/" },
    { title: "Payment Completed to Create Trello Board and Send Email", url: "https://www.checkout-ds24.com/redir/600547/Rogayah/" },
    { title: "Autonomous Waitlist Management", url: "https://www.checkout-ds24.com/redir/599223/Rogayah/" },
    { title: "Payment Tracking System - Automated Payment Reminders", url: "https://www.checkout-ds24.com/redir/599344/Rogayah/" },
    { title: "3 N8N Examples", url: "https://www.checkout-ds24.com/redir/600550/Rogayah/" },

    // Competitive Intelligence & Strategy
    { title: "Create McKinsey-Style Competitive Analysis Reports with AI", url: "https://www.checkout-ds24.com/redir/599246/Rogayah/" },
    { title: "Deep Personalization", url: "https://www.checkout-ds24.com/redir/600551/Rogayah/" },
    { title: "Search Intent", url: "https://www.checkout-ds24.com/redir/600553/Rogayah/" },

    // SEO & Traffic Growth Hacks
    { title: "AI Parasite SEO System (Medium", url: "https://www.checkout-ds24.com/redir/600548/Rogayah/" },
    { title: "LinkedIn AI Parasite System", url: "https://www.checkout-ds24.com/redir/600540/Rogayah/" }
  ];

  const getCategory = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    // AI Assistants & Agents
    if (lowerTitle.includes('slack ai assistant') || lowerTitle.includes('email handling ai assistant') ||
        lowerTitle.includes('voice ai agent') || lowerTitle.includes('ai assistant will manage') ||
        lowerTitle.includes('ai sales agent') || lowerTitle.includes('ai linkedin agent') ||
        lowerTitle.includes('ai agent finder') || lowerTitle.includes('customer feedback ai assistant') ||
        lowerTitle.includes('reputation management ai assistant') || lowerTitle.includes('discovery call form') ||
        lowerTitle.includes('post call')) {
      return 'AI Assistants & Agents';
    }
    
    // Email Marketing & Outreach
    if (lowerTitle.includes('high ticket email') || lowerTitle.includes('email personalization') ||
        lowerTitle.includes('personalized outreach') || lowerTitle.includes('personalized video outreach') ||
        lowerTitle.includes('referral autoresponder') || lowerTitle.includes('automated newsletter') ||
        lowerTitle.includes('email finder system') || lowerTitle.includes('proposal automation')) {
      return 'Email Marketing & Outreach';
    }
    
    // Lead Generation & CRM
    if (lowerTitle.includes('lead conversion') || lowerTitle.includes('lead researcher') ||
        lowerTitle.includes('lead qualification') || lowerTitle.includes('find') && lowerTitle.includes('leads') ||
        lowerTitle.includes('first step into ai') || lowerTitle.includes('5 n8n scenarios') ||
        lowerTitle.includes('4 workflows') || lowerTitle.includes('photography crm')) {
      return 'Lead Generation & CRM';
    }
    
    // Content Creation & SEO
    if (lowerTitle.includes('content creation') || lowerTitle.includes('content architect') ||
        lowerTitle.includes('content strategist') || lowerTitle.includes('content engine') ||
        lowerTitle.includes('content system blueprint') || lowerTitle.includes('blog system') ||
        lowerTitle.includes('make 1,000+ blogs') || lowerTitle.includes('claude ai') ||
        lowerTitle.includes('youtube content idea') || lowerTitle.includes('wordpress content') ||
        lowerTitle.includes('social media + blog') || lowerTitle.includes('social media content blueprint') ||
        lowerTitle.includes('seo wordpress')) {
      return 'Content Creation & SEO';
    }
    
    // Video & Media Automation
    if (lowerTitle.includes('translates any video') || lowerTitle.includes('animated ai influencer') ||
        lowerTitle.includes('avatar that works') || lowerTitle.includes('heygen') || lowerTitle.includes('elevenlabs') ||
        lowerTitle.includes('voice bot flow') || lowerTitle.includes('yt parasite')) {
      return 'Video & Media Automation';
    }
    
    // Recruitment & HR Automation
    if (lowerTitle.includes('resume screening') || lowerTitle.includes('recruitment cv') ||
        lowerTitle.includes('hiring pipeline') || lowerTitle.includes('payroll system')) {
      return 'Recruitment & HR Automation';
    }
    
    // Workflow Automation & Project Management
    if (lowerTitle.includes('project commander') || lowerTitle.includes('clickup project') ||
        lowerTitle.includes('chatbot with rag') || lowerTitle.includes('n8n email') ||
        lowerTitle.includes('client onboarding') || lowerTitle.includes('payment completed') ||
        lowerTitle.includes('waitlist management') || lowerTitle.includes('payment tracking') ||
        lowerTitle.includes('trello')) {
      return 'Workflow Automation & Project Management';
    }
    
    // Competitive Intelligence & Strategy
    if (lowerTitle.includes('competitive analysis') || lowerTitle.includes('deep personalization') ||
        lowerTitle.includes('search intent') && !lowerTitle.includes('email finder')) {
      return 'Competitive Intelligence & Strategy';
    }
    
    // SEO & Traffic Growth Hacks
    if (lowerTitle.includes('parasite seo') || lowerTitle.includes('linkedin ai parasite')) {
      return 'SEO & Traffic Growth Hacks';
    }
    
    // Instagram & Social Media
    if (lowerTitle.includes('instagram ai messaging') || lowerTitle.includes('viral ads') ||
        lowerTitle.includes('social media') && !lowerTitle.includes('blog')) {
      return 'Instagram & Social Media';
    }
    
    return 'AI Assistants & Agents';
  };

  const categories = [
    'all',
    'AI Assistants & Agents',
    'Email Marketing & Outreach',
    'Lead Generation & CRM',
    'Content Creation & SEO',
    'Video & Media Automation',
    'Recruitment & HR Automation',
    'Workflow Automation & Project Management',
    'Competitive Intelligence & Strategy',
    'SEO & Traffic Growth Hacks',
    'Instagram & Social Media'
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || getCategory(product.title) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Complete AI Automation Catalog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI-powered business automation solutions
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for AI systems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              url={product.url}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
