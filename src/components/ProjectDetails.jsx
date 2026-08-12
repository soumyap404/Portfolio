import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  repo,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href={href || "#"}
                target="_blank"
                rel="noreferrer"
               className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-400/40 bg-cyan-400/5 px-5 py-2.5 font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <span className="relative">View Project</span>

  <img
    src="assets/arrow-up.svg"
    className="relative size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
  />
              </a>
              {repo && (
                <a
  href={repo}
  target="_blank"
  rel="noreferrer"
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-400/40 bg-cyan-400/5 px-5 py-2.5 font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <span className="relative">Get Code</span>

  <img
    src="assets/arrow-up.svg"
    className="relative size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
  />
</a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
