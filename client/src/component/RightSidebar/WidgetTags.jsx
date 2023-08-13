import React from 'react'

const WidgetTags = () => {
    const tags=['C','C++' ,'Java' ,'Python' ,'Express','Firebase','HTML','CSS','Javascript','NodeJS','ReactJS','PHP','MangoDB','C#','Mysql']
  return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div
        className='widget-tags-div'>
            {
                tags.map((tags)=>(
                    <p key={tags}>{tags}</p>

                )
                )
            }
        </div>

    </div>
  )
}

export default WidgetTags