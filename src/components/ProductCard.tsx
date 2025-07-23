
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
    
    // أدوات أتمتة التسويق والمبيعات - أدوات المتابعة والتحويل
    if (lowerTitle.includes('high ticket email') || lowerTitle.includes('instagram ai messaging') || 
        lowerTitle.includes('email handling') || lowerTitle.includes('proposal automation') ||
        lowerTitle.includes('personalized outreach') || lowerTitle.includes('referral autoresponder') ||
        lowerTitle.includes('email personalization')) {
      return '🔁 أدوات المتابعة والتحويل';
    }
    
    // أدوات أتمتة التسويق والمبيعات - أدوات المبيعات والربح
    if (lowerTitle.includes('ai sales agent') || lowerTitle.includes('lead conversion') ||
        lowerTitle.includes('discovery call') || lowerTitle.includes('reputation management')) {
      return '💰 أدوات المبيعات والربح';
    }
    
    // أدوات أتمتة العمليات والتنظيم
    if (lowerTitle.includes('slack') || lowerTitle.includes('clickup') || lowerTitle.includes('onboarding') ||
        lowerTitle.includes('payment tracking') || lowerTitle.includes('payroll') || 
        lowerTitle.includes('waitlist') || lowerTitle.includes('photography crm') ||
        lowerTitle.includes('post call') || lowerTitle.includes('trello')) {
      return '🧩 أدوات أتمتة العمليات والتنظيم';
    }
    
    // أدوات صناعة المحتوى والتسويق الرقمي - كتابة وتوليد المحتوى
    if (lowerTitle.includes('content creation') || lowerTitle.includes('content engine') ||
        lowerTitle.includes('content strategist') || lowerTitle.includes('content architect') ||
        lowerTitle.includes('blog') || lowerTitle.includes('wordpress') || lowerTitle.includes('claude ai')) {
      return '✍️ أدوات كتابة وتوليد المحتوى';
    }
    
    // أدوات صناعة المحتوى والتسويق الرقمي - الفيديو والصور
    if (lowerTitle.includes('video') || lowerTitle.includes('animated') || lowerTitle.includes('voice ai') ||
        lowerTitle.includes('avatar') || lowerTitle.includes('heygen') || lowerTitle.includes('elevenlabs') ||
        lowerTitle.includes('translates')) {
      return '📹 أدوات الفيديو والصور';
    }
    
    // أدوات صناعة المحتوى والتسويق الرقمي - SEO والتحسين
    if (lowerTitle.includes('seo') || lowerTitle.includes('parasite') || lowerTitle.includes('search intent')) {
      return '📊 أدوات SEO والتحسين';
    }
    
    // أدوات البحث والتحليل
    if (lowerTitle.includes('competitive analysis') || lowerTitle.includes('email finder') ||
        lowerTitle.includes('find') && lowerTitle.includes('leads') || lowerTitle.includes('lead researcher') ||
        lowerTitle.includes('lead qualification') || lowerTitle.includes('personalization')) {
      return '🔍 أدوات البحث والتحليل';
    }
    
    // أدوات التوظيف والموارد البشرية
    if (lowerTitle.includes('recruitment') || lowerTitle.includes('cv') || lowerTitle.includes('resume') ||
        lowerTitle.includes('screening')) {
      return '🧑‍💼 أدوات التوظيف والموارد البشرية';
    }
    
    // أدوات AI Agents و Workflows
    if (lowerTitle.includes('ai assistant') || lowerTitle.includes('chatbot') || lowerTitle.includes('n8n') ||
        lowerTitle.includes('ai agent') || lowerTitle.includes('automation') || lowerTitle.includes('workflow') ||
        lowerTitle.includes('rag') || lowerTitle.includes('make.com')) {
      return '🔧 أدوات AI Agents و Workflows';
    }
    
    // أدوات السوشيال ميديا
    if (lowerTitle.includes('viral ads') || lowerTitle.includes('social media') ||
        lowerTitle.includes('youtube') || lowerTitle.includes('linkedin') || lowerTitle.includes('yt parasite')) {
      return '📱 أدوات السوشيال ميديا';
    }
    
    return '🧩 أدوات أتمتة العمليات والتنظيم';
  };

  const categoryColor = (cat: string) => {
    switch (cat) {
      case '🔁 أدوات المتابعة والتحويل': return 'bg-blue-100 text-blue-800 border-blue-200';
      case '💰 أدوات المبيعات والربح': return 'bg-green-100 text-green-800 border-green-200';
      case '🧩 أدوات أتمتة العمليات والتنظيم': return 'bg-purple-100 text-purple-800 border-purple-200';
      case '✍️ أدوات كتابة وتوليد المحتوى': return 'bg-orange-100 text-orange-800 border-orange-200';
      case '📹 أدوات الفيديو والصور': return 'bg-pink-100 text-pink-800 border-pink-200';
      case '📊 أدوات SEO والتحسين': return 'bg-red-100 text-red-800 border-red-200';
      case '🔍 أدوات البحث والتحليل': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case '🧑‍💼 أدوات التوظيف والموارد البشرية': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case '🔧 أدوات AI Agents و Workflows': return 'bg-teal-100 text-teal-800 border-teal-200';
      case '📱 أدوات السوشيال ميديا': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
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
