
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
    if (title.toLowerCase().includes('email')) return 'Email Automation';
    if (title.toLowerCase().includes('content')) return 'Content Creation';
    if (title.toLowerCase().includes('lead')) return 'Lead Generation';
    if (title.toLowerCase().includes('social') || title.toLowerCase().includes('instagram') || title.toLowerCase().includes('linkedin')) return 'Social Media';
    if (title.toLowerCase().includes('seo') || title.toLowerCase().includes('blog')) return 'SEO & Content';
    if (title.toLowerCase().includes('recruitment') || title.toLowerCase().includes('cv') || title.toLowerCase().includes('resume')) return 'HR & Recruitment';
    if (title.toLowerCase().includes('payment') || title.toLowerCase().includes('payroll')) return 'Finance';
    return 'Business Automation';
  };

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'Email Automation': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Content Creation': return 'bg-green-100 text-green-800 border-green-200';
      case 'Lead Generation': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Social Media': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'SEO & Content': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'HR & Recruitment': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Finance': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
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
          className="w-full bg-gradient-to-r from-black via-purple-600 to-red-600 hover:from-gray-800 hover:via-purple-700 hover:to-red-700 text-white"
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
