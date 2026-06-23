import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageOnLeft?: boolean;
  heading: ReactNode;
  description: ReactNode;
  cta?: ReactNode;
  additionalContent?: ReactNode;
  reverseLayoutOnMobile?: boolean;
}

export default function AnimatedSection({
  id,
  className = '',
  imageSrc,
  imageAlt = 'Twenty Three Layers Portfolio',
  imageOnLeft = true,
  heading,
  description,
  cta,
  additionalContent,
  reverseLayoutOnMobile = false,
}: AnimatedSectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 overflow-hidden relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
          imageOnLeft ? '' : 'lg:flex-row-reverse'
        }`}>
          
          {/* Image Container with Cinematic Fade + Blur Shift */}
          {imageSrc && (
            <motion.div
              className={`col-span-1 lg:col-span-6 overflow-hidden rounded-2xl border border-burgundy/15 bg-charcoal/20 shadow-2xl ${
                imageOnLeft ? 'lg:order-1' : 'lg:order-2'
              } ${reverseLayoutOnMobile ? 'order-2' : ''}`}
              initial={{ opacity: 0, filter: "blur(15px)", scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  referrerPolicy="no-referrer"
                  className="portfolio-img object-cover w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-105"
                  data-hover-text="VIEW PIECE"
                />
                {/* Beautiful custom Burgundy overlay mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          )}

          {/* Content Container with Staggered Fade + Blur Reveal */}
          <div className={`col-span-1 ${
            imageSrc ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl'
          } flex flex-col justify-center ${
            imageOnLeft ? 'lg:order-2' : 'lg:order-1'
          } ${reverseLayoutOnMobile ? 'order-1' : ''}`}>
            
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {heading}
            </motion.div>

            {/* Description */}
            <motion.div
              className="mt-6 text-gray-300 leading-relaxed font-sans text-base md:text-lg"
              initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {description}

              {cta && (
                <div className="mt-8">
                  {cta}
                </div>
              )}
            </motion.div>

            {/* Additional content */}
            {additionalContent && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.0, delay: 0.4 }}
              >
                {additionalContent}
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
