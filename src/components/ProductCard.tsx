
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
      case 'AI Assistants & Agents': 
        return 'bg-[hsl(259_94%_51%)] text-white border-[hsl(259_94%_61%)]';
      case 'Email Marketing & Outreach': 
        return 'bg-[hsl(189_100%_53%)] text-[hsl(224_39%_7%)] border-[hsl(189_100%_63%)]';
      case 'Lead Generation & CRM': 
        return 'bg-[hsl(323_89%_59%)] text-white border-[hsl(323_89%_69%)]';
      case 'Content Creation & SEO': 
        return 'bg-[hsl(44_97%_60%)] text-[hsl(224_39%_7%)] border-[hsl(44_97%_70%)]';
      case 'Video & Media Automation': 
        return 'bg-[hsl(283_74%_64%)] text-white border-[hsl(283_74%_74%)]';
      case 'Recruitment & HR Automation': 
        return 'bg-[hsl(15_95%_68%)] text-white border-[hsl(15_95%_78%)]';
      case 'Workflow Automation & Project Management': 
        return 'bg-[hsl(165_100%_60%)] text-[hsl(224_39%_7%)] border-[hsl(165_100%_70%)]';
      case 'Competitive Intelligence & Strategy': 
        return 'bg-[hsl(270_100%_75%)] text-[hsl(224_39%_7%)] border-[hsl(270_100%_85%)]';
      case 'SEO & Traffic Growth Hacks': 
        return 'bg-[hsl(44_97%_60%)] text-[hsl(224_39%_7%)] border-[hsl(44_97%_70%)]';
      case 'Instagram & Social Media': 
        return 'bg-[hsl(189_100%_53%)] text-[hsl(224_39%_7%)] border-[hsl(189_100%_63%)]';
      default: 
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const cardCategory = category || getCategory(title);

  const getCategoryGradient = (cat: string) => {
    switch (cat) {
      case 'AI Assistants & Agents': return 'hover:bg-gradient-to-br hover:from-[hsl(259_94%_51%_/_0.1)] hover:to-[hsl(259_94%_51%_/_0.05)]';
      case 'Email Marketing & Outreach': return 'hover:bg-gradient-to-br hover:from-[hsl(189_100%_53%_/_0.1)] hover:to-[hsl(189_100%_53%_/_0.05)]';
      case 'Lead Generation & CRM': return 'hover:bg-gradient-to-br hover:from-[hsl(323_89%_59%_/_0.1)] hover:to-[hsl(323_89%_59%_/_0.05)]';
      case 'Content Creation & SEO': return 'hover:bg-gradient-to-br hover:from-[hsl(44_97%_60%_/_0.1)] hover:to-[hsl(44_97%_60%_/_0.05)]';
      default: return 'hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10';
    }
  };

  return (
    <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:scale-105 ${featured ? 'gradient-featured' : 'gradient-card'} ${getCategoryGradient(cardCategory)} border-0`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            {featured && <Zap className="h-4 w-4 text-secondary" />}
          </div>
          <Badge variant="outline" className={categoryColor(cardCategory)}>
            {cardCategory}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <CardDescription className="text-muted-foreground">
          AI-powered automation solution designed to streamline your workflow and boost productivity.
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:via-primary hover:to-secondary text-white transition-all duration-500 hover:scale-105"
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
