import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 transition-colors duration-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium mb-16 transition-colors duration-700">Get In Touch</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors duration-700">
              <Mail size={20} className="text-gray-600 dark:text-gray-400 transition-colors duration-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-700">Email</p>
              <a
                href="mailto:6justin14@gmail.com"
                className="text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
              >
                6justin14@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors duration-700">
              <Phone size={20} className="text-gray-600 dark:text-gray-400 transition-colors duration-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-700">Phone</p>
              <a
                href="tel:+19566848376"
                className="text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-700"
              >
                (956) 684-8376
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors duration-700">
              <MapPin size={20} className="text-gray-600 dark:text-gray-400 transition-colors duration-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-700">Location</p>
              <p className="text-lg transition-colors duration-700">Austin, TX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}