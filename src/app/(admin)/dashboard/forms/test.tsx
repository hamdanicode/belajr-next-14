import React from 'react'

const TestForm = () => {

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        try {
          const result = await fetch('/api/dashboard', {
            
            method: 'POST',
            body:JSON.stringify({
                username:formData.get('testing'),
            })
            
          })
          console.log(result);
          
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div>
        <form onSubmit={handleForm}>
             <input name='testing' placeholder='testing' type="text" />

            <button className='primary' type='submit'>submit</button>
        </form>

    </div>
  )
}

export default TestForm