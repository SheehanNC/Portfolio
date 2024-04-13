import React from 'react'
import ProjectCard from '../sub/ProjectCard'
export const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Introducing My Creations...
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard 
          src="/FullStack.png"
          title="Full-Stack Food Delivery Application"
          description="This project embodies my journey in web development. By harmonizing front-end aesthetics with rudimentary back-end features, I've crafted a student project mirroring a food delivery website. Although users can't make real orders, they can immerse themselves in a virtual culinary adventure, selecting dishes, adding them to their carts, and going through the checkout process. 
          It's a hands-on exploration of web development principles and user engagement, free from the constraints of actual transactions." 
          url=" https://quick-dine-frontend-2.vercel.app/"
        />
        <ProjectCard
          src="/EventPlanner.png"
          title="Interactive Event Planning Website"
          description="This project symbolizes my progression in web development. Through the fusion of captivating front-end design and foundational back-end functionalities, I've constructed a student project resembling an event planning platform. 
          While actual bookings aren't facilitated, users can delve into a simulated event planning experience, exploring various services, customizing event details, and navigating through the planning process. It's an immersive journey into web development fundamentals and user interaction."
          url="https://sheehannc.github.io/Event_Planner/"
        />
        <ProjectCard
          src="/PortfolioWebsite.png"
          title="My Portfolio Website"
          description="This project represents a milestone in my journey through web development. With a focus on elegant front-end design and essential back-end functionality, I've constructed a student project that displays the essence of a portfolio website. While it may not host real-life content, users can immerse themselves in a simulated portfolio experience, learning about my skills, and discovering ways to connect. It's about crafting a digital identity and inviting visitors to engage with my work and aspirations."
          url="https://your-food-delivery-website.com"
        />
      </div>
    </div>
  )
}
