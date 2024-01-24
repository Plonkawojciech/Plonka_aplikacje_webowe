const Contact = () => {
  return (
    <>
      <form action='post' className='max-w-md mx-auto my-8'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-white-700'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          required
          className='mt-1 p-2 border rounded-md w-full'
        />
        <br />

        <label
          htmlFor='topic'
          className='block text-sm font-medium text-white-700 mt-4'
        >
          Topic
        </label>
        <select
          name='topic'
          id='topic'
          required
          className='mt-1 p-2 border rounded-md w-full'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
        <br />

        <label
          htmlFor='agreement'
          className='block text-sm font-medium text-white-700 mt-4'
        >
          I agree to process my personal data
        </label>
        <input type='checkbox' id='agreement' required className='mt-1' />
        <br />

        <label
          htmlFor='message'
          className='block text-sm font-medium text-white-700 mt-4'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={10}
          required
          className='mt-1 p-2 border rounded-md w-full'
        ></textarea>
        <br />

        <button
          type='submit'
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={}
        >
          Send
        </button>
      </form>
    </>
  )
}

export default Contact
