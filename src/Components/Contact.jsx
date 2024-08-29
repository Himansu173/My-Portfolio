import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function Contact() {
    const [formData, setFormData] = useState({
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
        // Add form submission logic here
        console.log(formData);

    };
    return (
        <>
            <BackgroundBeamsWithCollision className={"h-auto"}>
                <div className="mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <p className="md:text-4xl text-2xl font-semibold">Contact Me</p>
                        <p className="md:text-xl text-sm font-normal mt-2">I&apos;d love to hear from you! feel free to drop me a message.</p>
                    </div>
                    <div className="flex justify-center align-center">
                        <form onSubmit={handleSubmit} className="w-[90vw] md:w-[65vw] lg:w-[50vw] mt-6 z-10">
                            <label className="block mb-6" data-aos="zoom-in" data-aos-duration="800">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-2 block w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm outline-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </label>
                            <label className="block mb-6" data-aos="zoom-in" data-aos-duration="800">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Subject</span>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-2 outline-0 block w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm    dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                />
                            </label>
                            <label className="block mb-6" data-aos="zoom-in" data-aos-duration="800">
                                <span className="lg:text-lg text-sm tracking-wider text-gray-700 dark:text-gray-300">Message</span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    required
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-2 block outline-0 w-full px-4 sm:py-2 py-1 border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 max-h-32"
                                />
                            </label>
                            <button
                                type="submit"
                                className="w-full sm:py-2 py-1 px-4 bg-violet-700 text-white rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                                data-aos="zoom-in" data-aos-duration="800"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
            <footer className="text-center py-1">
                <p className="md:text-base text-xs font-normal">© Himansu Sekhar Lenka 2024. All Rights Reserved.</p>
                <p className="md:text-base text-xs font-normal">Designed, Developed & Maintained by Himansu Sekhar Lenka</p>
            </footer>
        </>
    )
}