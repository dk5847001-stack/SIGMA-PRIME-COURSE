import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditMessage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/messages/${id}`);
                let data = await response.json();
                console.log(data.message);
                setFormData({
                    name: data.message.name,
                    email: data.message.email,
                    subject: data.message.subject,
                    message: data.message.message
                });
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchMessage();
    }, [id]);

    let handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }))
    }

    let handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        
        let fetchMessage = async ()=>{
            try{
                let response = await fetch(`http://localhost:3000/api/messages/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData)
                    }
                );

                let data = await response.json();
                console.log(data.message);
                navigate("/admin")
                
            }catch(err){
                console.log(err.message)
            }
        };
        fetchMessage();
    }

    return (
        <div className="p-14">
            <h2 className="text-center mt-2">Hello, Name please update your data.</h2><br />
            <form onSubmit={handleFormSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Your Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                        />
                    </div>

                </div>

                {/* Subject */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        Subject
                    </label>

                    <input
                        type="text"
                        name="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        Message
                    </label>

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                    ></textarea>
                </div>

                <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60">Updata Message</button>
            </form>
        </div >
    )
}