import React, { useState } from 'react';

const API_URL =
    import.meta.env.MODE === 'development'
        ? `${import.meta.env.VITE_DEV_API_URL}`
        : `${import.meta.env.VITE_PROD_API_URL}`

function Contact() {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const commonStyle1 = "w-full p-4 rounded-lg text-sm mt-2 bg-gray-800 outline-none border-2 border-gray-700 text-gray-200 placeholder:text-gray-500 focus:border-gray-500";
    const commonStyle2 = "text-[13px] text-lime-100";

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const sendMessage = async () => {
        setIsLoading(true);
        try {
            fetch(`${API_URL}/getMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            }).then(async (res) => {
                const response = await res.json();
                if (response.error) {
                    setError(response.error);
                    setSuccess("");
                };
                if (response.msg) {
                    setSuccess(response.msg);
                    setError("");
                    setUser({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        message: ""
                    })
                };
                setIsLoading(false);
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
        } catch (err) {
            setIsLoading(false);
        }
    }

    return (
        <div className='mt-24'>
            <h1 className='text-3xl font-bold text-lime-200 text-center'>Get in Touch</h1>
            <p className='text-sm text-gray-300 leading-6 tracking-wider text-center mt-3'>Feel free to reach out for any inquiries or collaborations.</p>
            <div className='max-w-[600px] m-auto mt-8'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <label htmlFor="First name" className={commonStyle2}>First name</label><br />
                        <input onChange={handleInput} className={commonStyle1} type="text" placeholder='First name' name='firstname' value={user.firstname} />
                    </div>
                    <div>
                        <label htmlFor="Last name" className={commonStyle2}>Last name</label><br />
                        <input onChange={handleInput} className={commonStyle1} type="text" placeholder='Last name' name='lastname' value={user.lastname} />
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="Email" className={commonStyle2}>Email</label><br />
                        <input onChange={handleInput} className={commonStyle1} type="email" placeholder='Email' name='email' value={user.email} />
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="Phone" className={commonStyle2}>Phone</label><br />
                        <input onChange={handleInput} className={commonStyle1} type="number" placeholder='Phone' name='phone' value={user.phone} />
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="Message" className={commonStyle2}>Message</label><br />
                        <textarea onChange={handleInput} className={`${commonStyle1} resize-none h-52`} name="message" id="Message" value={user.message} placeholder='Leave a message.....'></textarea>
                    </div>
                    <div className='relative active:scale-95 transition-all w-full col-span-2 bg-gray-400 mt-2 rounded-xl'>
                        <button type='submit' onClick={sendMessage} className='bg-lime-200 h-11 rounded-lg text-gray-950 text-sm font-semibold w-full'>{isLoading ? 'Sending.....' : 'Message'}</button>
                        {
                            isLoading && <div className='w-full h-11 bg-gray-900/50 rounded-md absolute top-0'></div>
                        }
                    </div>
                    {error && <p className='w-full col-span-2 mt-5 bg-red-500/10 py-4 font-medium border-2 text-center border-red-400 text-[13px] text-red-400 rounded-lg'>{error}</p>}
                    {success && <p className='w-full col-span-2 mt-5 bg-green-500/10 font-medium py-4 border-2 text-center border-green-400 text-[13px] text-green-400 rounded-lg'>{success}</p>}
                </div>
            </div>
        </div>
    )
}

export default Contact
