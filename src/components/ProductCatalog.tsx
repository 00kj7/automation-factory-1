
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
    { title: "High Ticket Email System - Automate Email Campaigns", url: "https://www.checkout-ds24.com/redir/599347/Rogayah/" },
    { title: "AI Resume Screening System - Automate CV Screening", url: "https://www.checkout-ds24.com/redir/599345/Rogayah/" },
    { title: "Payment Tracking System - Automated Payment Reminders", url: "https://www.checkout-ds24.com/redir/599345/Rogayah/" },
    { title: "Slack AI Assistant - Automate Tasks on Slack", url: "https://www.checkout-ds24.com/redir/599343/Rogayah/" },
    { title: "Content Creation Generator - Automate your Content Creation", url: "https://www.checkout-ds24.com/redir/599341/Rogayah/" },
    { title: "Make Viral Ads using AI - Step-By-Step Guide", url: "https://www.checkout-ds24.com/redir/599340/Rogayah/" },
    { title: "Customer Feedback AI Assistant", url: "https://www.checkout-ds24.com/redir/599335/Rogayah/" },
    { title: "Email Handling AI Assistant", url: "https://www.checkout-ds24.com/redir/599333/Rogayah/" },
    { title: "SEO WordPress AI Blog Assistant", url: "https://www.checkout-ds24.com/redir/599332/Rogayah/" },
    { title: "AI Recruitment CV Analysis", url: "https://www.checkout-ds24.com/redir/599330/Rogayah/" },
    { title: "Automating Client Onboarding", url: "https://www.checkout-ds24.com/redir/599329/Rogayah/" },
    { title: "Instagram AI Messaging and Follow Ups System", url: "https://www.checkout-ds24.com/redir/599328/Rogayah/" },
    { title: "Reputation Management AI Assistant", url: "https://www.checkout-ds24.com/redir/599327/Rogayah/" },
    { title: "Discovery Call Form to Send Proposal", url: "https://www.checkout-ds24.com/redir/599326/Rogayah/" },
    { title: "AI Content Architect", url: "https://www.checkout-ds24.com/redir/599325/Rogayah/" },
    { title: "AI Content Strategist", url: "https://www.checkout-ds24.com/redir/599324/Rogayah/" },
    { title: "Post Call - Action Items", url: "https://www.checkout-ds24.com/redir/599323/Rogayah/" },
    { title: "Double Inbound Lead Conversion", url: "https://www.checkout-ds24.com/redir/599322/Rogayah/" },
    { title: "AI Project Commander", url: "https://www.checkout-ds24.com/redir/599321/Rogayah/" },
    { title: "AI Content Engine", url: "https://www.checkout-ds24.com/redir/599320/Rogayah/" },
    { title: "Personalized Outreach with AI", url: "https://www.checkout-ds24.com/redir/599319/Rogayah/" },
    { title: "Proposal Automation", url: "https://www.checkout-ds24.com/redir/599315/Rogayah/" },
    { title: "First Step Into AI Automations", url: "https://www.checkout-ds24.com/redir/599248/Rogayah/" },
    { title: "AI Avatar That Works While You Sleep! (HeyGen + ElevenLabs)", url: "https://www.checkout-ds24.com/redir/599247/Rogayah/" },
    { title: "Create McKinsey-Style Competitive Analysis Reports with AI", url: "https://www.checkout-ds24.com/redir/599246/Rogayah/" },
    { title: "AI Automation Workflow That Translates Any Video", url: "https://www.checkout-ds24.com/redir/599245/Rogayah/" },
    { title: "5 n8n Scenarios for new lead, AI agent, Reporting, Webhooks", url: "https://www.checkout-ds24.com/redir/599241/Rogayah/" },
    { title: "Voice AI Agent Will Call Anyone For You (100% Automatic)", url: "https://www.checkout-ds24.com/redir/599240/Rogayah/" },
    { title: "AI Assistant Will Manage Your Business (Automate Everything)", url: "https://www.checkout-ds24.com/redir/599239/Rogayah/" },
    { title: "n8n Email AI Agent", url: "https://www.checkout-ds24.com/redir/599237/Rogayah/" },
    { title: "Build Your First AI Chatbot with RAG and Make.com", url: "https://www.checkout-ds24.com/redir/599236/Rogayah/" },
    { title: "AI Content Generation System", url: "https://www.checkout-ds24.com/redir/599231/Rogayah/" },
    { title: "ClickUp Project Manager", url: "https://www.checkout-ds24.com/redir/599228/Rogayah/" },
    { title: "Payroll System for Hourly Contractors", url: "https://www.checkout-ds24.com/redir/599227/Rogayah/" },
    { title: "Autonomous Waitlist Management", url: "https://www.checkout-ds24.com/redir/599223/Rogayah/" },
    { title: "Clickup Hiring Pipeline", url: "https://www.checkout-ds24.com/redir/599222/Rogayah/" },
    { title: "YouTube Content Idea Generator", url: "https://www.checkout-ds24.com/redir/599220/Rogayah/" },
    { title: "Discovery Call Form - Send Email", url: "https://www.checkout-ds24.com/redir/599219/Rogayah/" },
    { title: "Clever Referral Autoresponder", url: "https://www.checkout-ds24.com/redir/599218/Rogayah/" },
    { title: "Make.com Automation: SEO-Optimized AI Content With Claude AI", url: "https://www.checkout-ds24.com/redir/599211/Rogayah/" },
    { title: "AI Powered Email Personalization", url: "https://www.checkout-ds24.com/redir/599210/Rogayah/" },
    { title: "AI Social Media Content Blueprint", url: "https://www.checkout-ds24.com/redir/596687/Rogayah/" },
    { title: "AI Content System Blueprint", url: "https://www.checkout-ds24.com/redir/596680/Rogayah/" },
    { title: "Voice Bot Flow Using AI", url: "https://www.checkout-ds24.com/redir/596675/Rogayah/" },
    { title: "4 Workflows: New Lead, Daily Reminder, Webhooks, Sample", url: "https://www.checkout-ds24.com/redir/600568/Rogayah/" },
    { title: "Make 1,000+ Blogs In One Click (+SEO Optimized)", url: "https://www.checkout-ds24.com/redir/600567/Rogayah/" },
    { title: "AI Blog System", url: "https://www.checkout-ds24.com/redir/600566/Rogayah/" },
    { title: "How to Find 1,000+ Leads (100% Automatic)", url: "https://www.checkout-ds24.com/redir/600565/Rogayah/" },
    { title: "AI Automated Lead Researcher in CRM", url: "https://www.checkout-ds24.com/redir/600564/Rogayah/" },
    { title: "AI Automated Lead Qualification System", url: "https://www.checkout-ds24.com/redir/600563/Rogayah/" },
    { title: "Social Media + Blog Repurposing AI Agent Team", url: "https://www.checkout-ds24.com/redir/600562/Rogayah/" },
    { title: "Personalized Video Outreach System", url: "https://www.checkout-ds24.com/redir/600560/Rogayah/" },
    { title: "AI LinkedIn Agent", url: "https://www.checkout-ds24.com/redir/600559/Rogayah/" },
    { title: "AI Sales Agent", url: "https://www.checkout-ds24.com/redir/600558/Rogayah/" },
    { title: "AI Agent Finder Team", url: "https://www.checkout-ds24.com/redir/600556/Rogayah/" },
    { title: "YT Parasite", url: "https://www.checkout-ds24.com/redir/600554/Rogayah/" },
    { title: "Search Intent", url: "https://www.checkout-ds24.com/redir/600553/Rogayah/" },
    { title: "Automated Newsletter Production", url: "https://www.checkout-ds24.com/redir/600552/Rogayah/" },
    { title: "Deep Personalization", url: "https://www.checkout-ds24.com/redir/600551/Rogayah/" },
    { title: "3 N8N Examples", url: "https://www.checkout-ds24.com/redir/600550/Rogayah/" },
    { title: "Photography CRM Flow", url: "https://www.checkout-ds24.com/redir/600549/Rogayah/" },
    { title: "AI Parasite SEO System (Medium)", url: "https://www.checkout-ds24.com/redir/600548/Rogayah/" },
    { title: "Payment Completed to Create Trello Board and Send Email", url: "https://www.checkout-ds24.com/redir/600547/Rogayah/" },
    { title: "Build A Client Onboarding System", url: "https://www.checkout-ds24.com/redir/600543/Rogayah/" },
    { title: "WordPress Content Syndicator", url: "https://www.checkout-ds24.com/redir/600542/Rogayah/" },
    { title: "Search Intent Email Finder System", url: "https://www.checkout-ds24.com/redir/600541/Rogayah/" },
    { title: "LinkedIn AI Parasite System", url: "https://www.checkout-ds24.com/redir/600540/Rogayah/" },
    { title: "YT Parasite System (ChatGPT Growth Hack)", url: "https://www.checkout-ds24.com/redir/600539/Rogayah/" },
    { title: "Create An Animated AI Influencer For Your Brand", url: "https://www.checkout-ds24.com/redir/600538/Rogayah/" }
  ];

  const getCategory = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    // Follow-up & Conversion Tools
    if (lowerTitle.includes('high ticket email') || lowerTitle.includes('instagram ai messaging') || 
        lowerTitle.includes('email handling') || lowerTitle.includes('proposal automation') ||
        lowerTitle.includes('personalized outreach') || lowerTitle.includes('referral autoresponder') ||
        lowerTitle.includes('email personalization')) {
      return 'Follow-up & Conversion Tools';
    }
    
    // Sales & Revenue Tools
    if (lowerTitle.includes('ai sales agent') || lowerTitle.includes('lead conversion') ||
        lowerTitle.includes('discovery call') || lowerTitle.includes('reputation management')) {
      return 'Sales & Revenue Tools';
    }
    
    // Operations & Organization Tools
    if (lowerTitle.includes('slack') || lowerTitle.includes('clickup') || lowerTitle.includes('onboarding') ||
        lowerTitle.includes('payment tracking') || lowerTitle.includes('payroll') || 
        lowerTitle.includes('waitlist') || lowerTitle.includes('photography crm') ||
        lowerTitle.includes('post call') || lowerTitle.includes('trello')) {
      return 'Operations & Organization Tools';
    }
    
    // Content Writing & Generation Tools
    if (lowerTitle.includes('content creation') || lowerTitle.includes('content engine') ||
        lowerTitle.includes('content strategist') || lowerTitle.includes('content architect') ||
        lowerTitle.includes('blog') || lowerTitle.includes('wordpress') || lowerTitle.includes('claude ai')) {
      return 'Content Writing & Generation Tools';
    }
    
    // Video & Image Tools
    if (lowerTitle.includes('video') || lowerTitle.includes('animated') || lowerTitle.includes('voice ai') ||
        lowerTitle.includes('avatar') || lowerTitle.includes('heygen') || lowerTitle.includes('elevenlabs') ||
        lowerTitle.includes('translates')) {
      return 'Video & Image Tools';
    }
    
    // SEO & Optimization Tools
    if (lowerTitle.includes('seo') || lowerTitle.includes('parasite') || lowerTitle.includes('search intent')) {
      return 'SEO & Optimization Tools';
    }
    
    // Research & Analysis Tools
    if (lowerTitle.includes('competitive analysis') || lowerTitle.includes('email finder') ||
        lowerTitle.includes('find') && lowerTitle.includes('leads') || lowerTitle.includes('lead researcher') ||
        lowerTitle.includes('lead qualification') || lowerTitle.includes('personalization')) {
      return 'Research & Analysis Tools';
    }
    
    // HR & Recruitment Tools
    if (lowerTitle.includes('recruitment') || lowerTitle.includes('cv') || lowerTitle.includes('resume') ||
        lowerTitle.includes('screening')) {
      return 'HR & Recruitment Tools';
    }
    
    // AI Agents & Workflows Tools
    if (lowerTitle.includes('ai assistant') || lowerTitle.includes('chatbot') || lowerTitle.includes('n8n') ||
        lowerTitle.includes('ai agent') || lowerTitle.includes('automation') || lowerTitle.includes('workflow') ||
        lowerTitle.includes('rag') || lowerTitle.includes('make.com')) {
      return 'AI Agents & Workflows Tools';
    }
    
    // Social Media Tools
    if (lowerTitle.includes('viral ads') || lowerTitle.includes('social media') ||
        lowerTitle.includes('youtube') || lowerTitle.includes('linkedin') || lowerTitle.includes('yt parasite')) {
      return 'Social Media Tools';
    }
    
    return 'Operations & Organization Tools';
  };

  const categories = [
    'all', 
    'Follow-up & Conversion Tools',
    'Sales & Revenue Tools', 
    'Operations & Organization Tools',
    'Content Writing & Generation Tools',
    'Video & Image Tools',
    'SEO & Optimization Tools',
    'Research & Analysis Tools',
    'HR & Recruitment Tools',
    'AI Agents & Workflows Tools',
    'Social Media Tools'
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || getCategory(product.title) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete AI Automation Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
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
