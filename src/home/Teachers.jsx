import React from 'react';
import blob from '../assets/features/blob.png'; // Decorative background blob image
import teacher from '../assets/teachers/teacher.png';

const teachers = [
  {
    id: 1,
    name: "Ms. Taylor Roberts",
    image: teacher,
    bgBlob: blob   // Remove the curly braces here
  },
  {
    id: 2,
    name: "Mr. Michael Chen",
    image: teacher,
    bgBlob: blob   // Remove the curly braces here
  },
  {
    id: 3,
    name: "Mrs. Sofia Gonzalez",
    image: teacher,
    bgBlob: blob   // Remove the curly braces here
  }
];

export default function Teachers() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 uppercase tracking-wide">
            Meet Our Teachers
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Dedicated Professionals Guiding Your Child's Future.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="flex flex-col items-center">
              
              {/* Image Container */}
              <div className="relative w-[30vw] h-64 flex items-center justify-center">
                {/* Background Decorative Blob */}
                <img 
                  src={teacher.bgBlob} 
                  alt="background decor" 
                  className="absolute  w-[30vw] h-[50vh] object-cover"
                />
                
                {/* Teacher Image (Overlayed) */}
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="relative z-10 w-[50%] h-[35vh] -top-2 right-2 object-cover rounded-full"
                />
              </div>

              {/* Teacher Name */}
              <h3 className="mt-6 text-xl font-bold text-blue-900">
                {teacher.name}
              </h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
