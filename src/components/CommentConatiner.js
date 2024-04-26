import React from 'react'


const commentsData = [
  {
  name: "@satheeshshanm",
  text: "Nice Teaser! wishing great success for SK bro & Rajkumar Sir's team! 👍",
  replies: [
    {
      name: "@dhanushkardhanush9953",
      text: "Movies like these should be promoted... Tribute to real life a hero",
      replies: [
        {
          name: "@udhayakumarsubramaniyam2883",
          text: "அச்சமில்லை அச்சமில்லை அச்சமென்பதில்லையே",
          replies: [
            {
              name: "@puthagathozhi2334",
              text: "IMPRESSSED  I LIKE YOUR WORK MR.SIVAKATHIKEYAN  CONGRAGULATION TO ALL 👌👌",
              replies: [],
            },
          ],
        },
        {
          name: "@MunishK02",
          text: "Yet another magnum opus by Siva Karthikeyan",
          replies: [],
        },
      ],
    }
  ]
},
  {
  name: "@wilsonmohanmuthiah7217",
  text: "Congrats universal Hero Kamalhassan sir and sivakarthikeyansir...superb ❤❤🎉",
  replies: [
    {
      name: "@Yacob_mohd",
      text: "Dayummmmm ! Shiva annae. Well done 🥵🔥. Let’s go !",
      replies: [
        {
          name: "@saravanan-qw8jj",
          text: "Rajkumar Nailed it Man , SK ❤ On New Race OMG Repeat Mood ON Next 3 Days",
          replies: [],
        },
        {
          name: "@hariharidass2311",
          text: "Payankarama irukku bro 🔥 Kotha * kotha vera level bro",
          replies: [],
        }
      ],
    }
  ]
},
]

const Comment = ({data}) => {
  const {name, text, replies} = data

  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className='w-12 h-12' alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const CommentsList = ({comments}) => {
  return comments.map((comment, index) => (
    <div key={index}>
  <Comment data={comment}/>
  <div className='pl-5 border border-l-black ml-5'>
      <CommentsList comments={comment.replies}/>
  </div>
  </div>
  )
)}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer