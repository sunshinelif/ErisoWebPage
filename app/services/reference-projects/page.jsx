
const projects = [
    { name: 'Modern CSS', description: 'Modern Css project is a front end script written in react, it show cases the modern way of creating responsive landing pages', image: '/images/software/moderncss.png' },
    { name: 'Tightwad', description: 'Tightwad is your go-to platform for comparing prices and finding the best bargains in your area, ensuring you shop smartly and save money.', image: '/images/software/tightwad.png' },
    { name: 'Eventzar', description: 'EventZar is a platform for discovering and attending diverse and exciting events in your area.', image: '/images/software/eventazar.png' },
    { name: 'Edu Hub Connect', description: 'Eduhubconnect is an education advisory and scholarship website that is dedicated to helping students find and apply for scholarships to make university education more accessible.', image: '/images/software/eduhubconnect.png' },
  ];

export const metadata = {
    title: "Reference Projects",
    description: "",
};
  
const ReferenceProjects = () =>{
    return(
        <div className="bg-gray-100">
        <div className="min-h-screen max-container py-24">
          <div className="py-16">
            <h1 className="md:text-5xl text-3xl font-medium mb-16">Reference Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="relative  bg-gradient-to-r from-gray-400 to-gray-500 p-4 shadow-md rounded-md">  
                  <img src={project.image} alt={project.name} className="object-cover rounded-md" />
                  <h3 className="mt-4 text-gray-900 text-xl">{project.name}</h3>
                  <p className="text-sm text-gray-800">{project.description}</p>
                </div>
              ))}     
            </div>
            <div className="w-full flex justify-center">
                <div class="relative inline-flex group mt-16 ">
                    <div
                        class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <a href="https://www.czesttech.com/our-works" 
                        class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button">Click For More Detail
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ReferenceProjects;