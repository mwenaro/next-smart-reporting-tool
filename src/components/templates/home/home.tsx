// src/App.tsx

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Landing Page</h1>
        <p className="text-lg">We provide awesome solutions for your needs.</p>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt leo at
            elementum vestibulum.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Service 1</h3>
              <p className="text-gray-600">Description of Service 1.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Service 2</h3>
              <p className="text-gray-600">Description of Service 2.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Service 3</h3>
              <p className="text-gray-600">Description of Service 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or want to get in touch? Reach out to us at info@example.com.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
