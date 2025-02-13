import Image from 'next/image';

const ClientsLogo = () => {
  // Array of client logos (using your logo as placeholder)
  const clients = [
    {
      id: 1,
      name: "Client 1",
      logo: "/images/designora1-02.png"
    },
    {
      id: 2, 
      name: "Client 2",
      logo: "/images/designora1-02.png"
    },
    {
      id: 3,
      name: "Client 3", 
      logo: "/images/designora1-02.png"
    },
    {
      id: 4,
      name: "Client 4",
      logo: "/images/designora1-02.png"
    },
    {
      id: 5,
      name: "Client 5",
      logo: "/images/designora1-02.png"
    },
    {
      id: 6,
      name: "Client 6",
      logo: "/images/designora1-02.png"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={40}
                className="w-auto h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsLogo;
