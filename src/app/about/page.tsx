import { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Shri Amar Computer Institution",
  description: "Learn more about Shri Amar Computer Institution, our vision, mission, and management committee.",
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-primary)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Institute</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            A Legacy of Educational Excellence in Lalgaon since establishment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>Shri Amar Computer Institution, Lalgaon</strong> is running under the prestigious <strong>Shri Amar Shiksha Kalyan Samiti</strong>. We are dedicated to bridging the digital divide by offering comprehensive computer education to students in rural and semi-urban areas.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Associated with the esteemed <strong>Makhanlal Chaturvedi National University of Journalism & Communication, Bhopal</strong>, we ensure our courses meet high academic standards. Our association number is MCRPSV/ASI/JAN/2018/8657.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To empower the youth of rural regions by providing high-quality, accessible, and practical technical education, making them industry-ready and digitally literate for the modern world.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To establish a center of excellence in computer education, fostering an environment that encourages practical learning, skill development, and career growth for every student.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Provide quality computer education to rural youth.",
              "Prepare students for competitive exams like CPCT.",
              "Promote digital literacy across all age groups.",
              "Offer university-recognized degree/diploma courses.",
              "Conduct regular practical training sessions.",
              "Assist in career counseling and job placement.",
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{objective}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
