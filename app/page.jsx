// The Landing/Home Page

// app/page.jsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          Empowering Students
        </h1>
        <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
          A gamified platform for environmental education, real-world action,
          and sustainable change.
        </p>
        <Link
          href="/register"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is EduQuest?</h2>
        <p className="text-lg text-gray-700">
          Designed for Indian schools and colleges, our platform gamifies
          learning. Students complete tasks, quizzes, and weekly challenges —
          all while competing with peers, earning rewards and learning stuff
          that matter.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "🌿 Weekly Assignments",
                desc: "Hands-on tasks that helps the student have a far in-depth knowledge of the subject",
              },
              {
                title: "🧠 Quizzes & Word of the Day",
                desc: "Learn New terms and test your knowledge every week.",
              },
              {
                title: "🏅 Points & Badges",
                desc: "Earn points and unlock badges as you complete activities.",
              },
              {
                title: "📊 Leaderboards",
                desc: "Track class and grade performance. Rise to the top!",
              },
              {
                title: "🌟 Hidden Achievements",
                desc: "Surprise awards like ‘Student of the Year’ or a tree planted in your name.",
              },
              {
                title: "🗣️ Student Forum",
                desc: "Post questions, share ideas, and discuss topics with peers.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="py-16 px-6 bg-white max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">For All Changemakers</h2>
        <p className="text-gray-700 mb-10">
          Whether you're a student, teacher, NGO, or part of a government
          initiative — The EduQuest Platform connects and empowers everyone to build
          a brighter future.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-700 font-semibold">
          <span className="bg-blue-100 px-4 py-2 rounded">🌱 Students</span>
          <span className="bg-blue-100 px-4 py-2 rounded">📚 Teachers</span>
          <span className="bg-blue-100 px-4 py-2 rounded">🏢 Institutes</span>
          <span className="bg-blue-100 px-4 py-2 rounded">🌍 NGOs</span>
          <span className="bg-blue-100 px-4 py-2 rounded">🏛️ Government</span>
        </div>
      </section>



      {/* Call to Action / Footer */}
      <footer className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Learning Movement</h2>
        <p className="mb-6 text-lg">
          Start your journey toward knowledge today.
        </p>
        <div className="space-x-4">
          <Link
            href="/register"
            className="bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-100 font-semibold"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="border border-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
          >
            Login
          </Link>
        </div>
      </footer>
    </main>
  );
}
