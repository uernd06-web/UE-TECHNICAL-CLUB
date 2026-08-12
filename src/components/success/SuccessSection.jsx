import React from 'react'
import SuccessCard from './SuccessCard'

const SuccessSection = ({stories}) => {


  return (
    <div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
  {stories.map((story) => (
    <SuccessCard story={story} key={story.id} />
  ))}
</div>
    </div>
  )
}

export default SuccessSection