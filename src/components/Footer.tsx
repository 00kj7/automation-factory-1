
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              AI Automation Systems
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses worldwide with cutting-edge AI automation solutions. 
              Scale your operations, boost productivity, and stay ahead of the competition.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email Automation</li>
              <li>Content Creation</li>
              <li>Lead Generation</li>
              <li>Social Media</li>
              <li>SEO & Content</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Video Tutorials</li>
              <li>Community Forum</li>
              <li>Contact Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI Automation Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
