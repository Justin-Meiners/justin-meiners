export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 transition-colors duration-700"
    >
      <div className="max-w-3xl">
        <h1 className="text-6xl font-medium mb-4 transition-colors duration-700">Justin Meiners</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-700">
          Computer Science Student & Software Developer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-700">
          Currently studying Computer Science at UT Austin with a focus on
          security operations, automation, and full-stack development.
          Passionate about building tools that solve real-world problems.
        </p>
      </div>
    </section>
  );
}