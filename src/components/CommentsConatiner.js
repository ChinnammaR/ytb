import React from 'react'
import { USER_ICON } from '../utils/constants';

const CommentsConatiner = () => {

   


    const CommentData=[{
        name:"chinnamma VR",
        comment:"This is a good code",
        replies:[
            {
                name:"chinnamma VR",
                comment:"This is a good code",
                replies:[
                    
                ]
            },
            {
                name:"chinnamma VR",
                comment:"This is a good code",
                replies:[
                    
                ]
            }

        ]
    },
    {
        name:"Megha VR",
        comment:"This is a good code",
        replies:[
            {
                name:"chinnamma VR",
                comment:"This is a good code",
                replies:[
                    {
                        name:"chinnamma VR",
                        comment:"This is a good code",
                        replies:[
                            
                        ]
                    }
                    
                ]
            }
            
        ]
    },
    {
        name:"Rakesh BK",
        comment:"This is a good code",
        replies:[
            
        ]
    },
    {
        name:"Aadvika KR",
        comment:"This is a good code",
        replies:[
            {
                name:"chinnamma VR",
                comment:"This is a good code",
                replies:[{
                    name:"chinnamma VR",
                    comment:"This is a good code",
                    replies:[{
                        name:"chinnamma VR",
                        comment:"This is a good code",
                        replies:[
                            
                        ]
                    }
                        
                    ]
                }
                    
                ]
            }
            
        ]
    }];

    const Comment=({data})=>{

        const{name,comment,replies}=data;

        return <div className='px-4 py-4 bg-gray-50'>
            <div className='flex'> <img alt="user" src={USER_ICON} className="h-6 w-6"/>
        <p className='px-2 font-bold'>{name}</p></div>
       
        <p className='px-6'>{comment}</p>
      
        </div>

    }


    const CommentList=({comments})=>{
        
        return comments.map((comment, index) => (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        ));
      };


  return (
    <div className='py-8 px-6  '>
      <h1 className='font-bold text-lg'>Comments:</h1>
      <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentsConatiner;
