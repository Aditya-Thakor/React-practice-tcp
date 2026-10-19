import React, { useRef } from 'react'

const Ref3 = () => {

    const hideRef = useRef(null);

    const handleClick=()=>{
        hideRef.current.style.display="none";
    }

    const dblClick=()=>{
        hideRef.current.style.display="block";
    }
  return (
    <div className='flex flex-col '>
      <p ref={hideRef} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto officiis est, doloremque nisi, eos reiciendis corporis, aspernatur eum labore deserunt odio temporibus optio atque cupiditate explicabo veritatis ipsa iste debitis tenetur itaque quasi. Voluptate cum corporis officia amet labore delectus quas aut, unde quo consectetur architecto exercitationem quaerat vero!</p>
      <button  onClick={handleClick} onDoubleClick={dblClick} className=' h-auto w-40 border border-gray-200 px-3 py-1.5 mt-3 m-auto'>Hide text</button>
    </div>
  )
}

export default Ref3;
