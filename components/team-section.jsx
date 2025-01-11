export function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "Designation here",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida adipiscing bibendum at mauris cursus cursus lectus."
    },
    {
      name: "Elisa Williams",
      role: "Designation here",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida adipiscing bibendum at mauris cursus cursus lectus."
    },
    {
      name: "John Smith",
      role: "Designation here",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida adipiscing bibendum at mauris cursus cursus lectus."
    }
  ]

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit 
        egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-6">
        {team.map((member, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-lg mx-auto mb-2"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
              <p className="text-gray-600 flex-1">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

