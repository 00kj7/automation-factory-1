
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Zap } from "lucide-react";

interface ProductCardProps {
  title: string;
  url: string;
  featured?: boolean;
  category?: string;
}

const ProductCard = ({ title, url, featured = false, category }: ProductCardProps) => {
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

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'AI Assistants & Agents': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Email Marketing & Outreach': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Lead Generation & CRM': return 'bg-green-100 text-green-800 border-green-200';
      case 'Content Creation & SEO': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Video & Media Automation': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Recruitment & HR Automation': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Workflow Automation & Project Management': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Competitive Intelligence & Strategy': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'SEO & Traffic Growth Hacks': return 'bg-red-100 text-red-800 border-red-200';
      case 'Instagram & Social Media': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const cardCategory = category || getCategory(title);

  return (
    <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:scale-105 ${featured ? 'ring-2 ring-purple-500' : ''} gradient-card border-0`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-600" />
            {featured && <Zap className="h-4 w-4 text-yellow-500" />}
          </div>
          <Badge variant="outline" className={categoryColor(cardCategory)}>
            {cardCategory}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <CardDescription className="text-gray-600">
          AI-powered automation solution designed to streamline your workflow and boost productivity.
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-black via-purple-900 to-purple-700 hover:from-gray-800 hover:via-purple-800 hover:to-purple-600 text-white"
          onClick={() => window.open(url, '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Get This System
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
