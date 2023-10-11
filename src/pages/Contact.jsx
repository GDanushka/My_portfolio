import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas, StarsCanvas } from "../components/canvas";
import { resume } from "../assets/index";
import { resumePDF } from "../assets/index";
  
function Contact () {
	const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = resumePDF;
    anchor.download = "resume.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
	return (
		<div className='relative z-0 h-screen flex justify-center items-center'>
			<div className='xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full'>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className='flex-[0.75] py-5 bg-black-100 px-8 rounded-2xl'
				>
					<p className={styles.sectionSubText}>More About Me</p>
					<h3 className={styles.sectionHeadText}>My Resume.</h3>
					<img
						src={resume}
						alt='resume_image'
						className=' rounded-2xl'
					/>
						<button
						type='submit'
						onClick={handleDownload}
								className='bg-tertiary py-3 px-8 outline-none w-fit  font-bold text-white rounded-xl shadow-md shadow-primary mt-2'
							>
								Download
							</button>
					
				</motion.div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className='xl:flex-1 xl:h-auto xl:mt-8 md:h-[420px] h-[320px] mx-auto w-[240px] mt-60 md:mt-0'
				>
					<EarthCanvas />
				</motion.div>
			</div>
			<StarsCanvas />
		</div>
	);
}

export default SectionWrapper(Contact, "contact");
