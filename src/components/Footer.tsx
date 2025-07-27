
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              AI Automation Systems
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Save time, double your sales, and focus on what really matters — all with smart automated steps designed specifically for your success.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Email Automation</li>
              <li>Content Creation</li>
              <li>Lead Generation</li>
              <li>Social Media</li>
              <li>SEO & Content</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2025 AI Automation Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
