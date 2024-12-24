import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { AlarmClock, AreaChart, AreaChartIcon } from 'lucide-react'
function FeaturedPosts() {

  const posts = [
    {
      image: "/Images/Road.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "/Images/Car.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "/Images/Umbrailla.png?height=400&width=600",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ]
  return (
    <div>

<section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="text-[#23A6F0] font-bold text-sm sm:text-base mb-2 sm:mb-3">Practice Advice</h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Featured Posts</h2>
        <p className="text-[#737373] font-normal text-sm sm:text-base max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-fill"
              />
            </div>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{post.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <AlarmClock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <AreaChart className="w-3 h-3 sm:w-4 sm:h-4 text-[#2DC071]" />
                  <span>{post.comments} comments</span>
                </div>
              </div>
              <button className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 hover:text-blue-500 flex items-center gap-1 sm:gap-2">
                Learn More
                <span className="text-lg sm:text-xl">→</span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
  )
}

export default FeaturedPosts
