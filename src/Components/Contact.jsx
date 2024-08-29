import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "@nextui-org/react";

export default function Contact() {
    const [Sending, setSending] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        emailjs.send("service_hcnw34c", "template_mahjl2d", formData, {
            publicKey: 'GUue2Sx0_P9iu8_Dr',
        }).then(() => {
            setSending(false);
            toast.success('Message sent successfully!', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }).catch(() => {
            setSending(false);
            toast.error('Failed to send message.', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    };
    return (
        <>
            <BackgroundBeamsWithCollision className={"h-auto"}>
                {Sending &&
                    <div className="h-[100vh] w-[100vw] absolute dark:bg-black/60 bg-white/65 z-50 flex justify-center align-center">
                        <Spinner size="lg" label="Sending . . ." color="secondary" />
                    </div>
                }
                <div className="mx-auto px-6 lg:px-8">
                    <ToastContainer />
                    <div className="text-center">
                        <p className="md:text-4xl text-2xl font-semibold">Contact Me</p>
                        <p className="md:text-xl text-sm font-normal mt-2">I&apos;d love to hear from you! feel free to drop me a message.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800">
                        <form onSubmit={handleSubmit} className="w-[90vw] md:w-[65vw] lg:w-[50vw] mt-2 z-10">
                            <label className="block mb-2">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 lg:text-base text-sm tracking-wider block w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </label>
                            <label className="block mb-2">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 lg:text-base text-sm tracking-wider block w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </label>
                            <label className="block mb-2">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Subject</span>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 lg:text-base text-sm tracking-wider outline-0 block w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </label>
                            <label className="block mb-2">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Message</span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    required
                                    onChange={handleChange}
                                    className="mt-1 md:h-24 sm:h-22 h-18 block outline-0 w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 max-h-32"
                                />
                            </label>
                            <button
                                type="submit"
                                className="w-full sm:py-2 mt-3 py-1 px-4 bg-violet-700 text-white rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
            <footer className="text-center py-2 dark:bg-neutral-950 neutral-100">
                <p className="md:text-base text-xs font-normal">© 2024 Himansu Sekhar Lenka. All Rights Reserved.</p>
                <p className="md:text-base text-xs font-normal">Designed, Developed & Maintained by Himansu Sekhar Lenka</p>
            </footer>
        </>
    )
}