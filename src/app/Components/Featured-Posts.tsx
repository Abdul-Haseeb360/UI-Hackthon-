import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { AlarmClock, AreaChartIcon } from 'lucide-react'
function FeaturedPosts() {

  const posts = [
    {
      image: "/Images/Road.png?height=400&width=600",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "/Images/Car.png?height=400&width=600",
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

<section className="container w-auto mx-auto my-0 py-16 h-[1044px] ">
      <div className="text-center mb-12">
        <h3 className="text-[#23A6F0] font-bold text-base mb-3 ">Practice Advice</h3>
        <h2 className="text-[40px] leading-[50px] font-bold text-gray-800 mb-4">Featured Posts</h2>
        <p className="text-[#737373] font-normal text-sm max-w-2xl mx-auto">
          Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-[127px]">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] object-cover"
              />
              
            </div>
            <CardContent className="p-6">
              <div className="flex gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-sm text-gray-600 hover:text-blue-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <AlarmClock className="w-4 h-4 text-blue-600" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AreaChartIcon className="w-4 h-4 text-[#2DC071]" />
                  <span>{post.comments} comments</span>
                </div>
              </div>
              <button className="mt-4 text-gray-600 hover:text-blue-500 flex items-center gap-2">
                Learn More
                <span className="text-xl">→</span>
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
