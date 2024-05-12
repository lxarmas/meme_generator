import React from 'react';



const Meme = () => {
    function handleClick() {
        console.log('I was clicked')
    }
  return (
      <main>
          <div className='form'>
              <input
                  type="text"
                  placeholder='Top text'
                  className='form--input'
                  />
            
              <input
                  type="text"
                  placeholder='bottom-text'
                  className='form--input'
                      />
                  
              <button
                  onClick={handleClick}
               className='form--button'   
              >Get a new meme Image</button>
          </form>
    </main>
  )
}

export default Meme