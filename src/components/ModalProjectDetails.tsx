import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ArrowRight, MapPin, Calendar, Award, Share2 } from 'lucide-react';
import { Project } from '../types';

interface ModalProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export default function ModalProjectDetails({ project, onClose }: ModalProjectDetailsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset scroll-to-top whenever a project changes and lock body scrolling
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.galleryImages.length);
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Header floating top right */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-3 bg-white/95 backdrop-blur-md rounded-full shadow-md text-charcoal hover:text-burgundy hover:scale-105 transition-all duration-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Large Hero Image */}
          <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-charcoal">
            <img
              src={project.mainImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-12" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 z-10 text-white">
              <span className="inline-block px-3 py-1 bg-burgundy rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
                {project.categoryLabel}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Details Content Grid */}
          <div className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              
              {/* Left Column: Description & Gallery Slider */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-charcoal border-b border-gray-100 pb-3 mb-4">
                    The Story
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                {/* Sub Gallery Interactive Slider */}
                {project.galleryImages && project.galleryImages.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold tracking-wider text-charcoal uppercase">
                      Experiential Highlights ({currentSlide + 1}/{project.galleryImages.length})
                    </h4>
                    
                    <div className="relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group">
                      <img
                        src={project.galleryImages[currentSlide]}
                        alt={`${project.title} slide ${currentSlide + 1}`}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full transition-transform duration-700"
                      />

                      {/* Controls */}
                      <button
                        onClick={handlePrevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-burgundy hover:text-white transition-all duration-300 pointer-events-auto"
                      >
                        <ArrowLeft size={16} />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-burgundy hover:text-white transition-all duration-300 pointer-events-auto"
                      >
                        <ArrowRight size={16} />
                      </button>

                      {/* Pagination Indicator dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
                        {project.galleryImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentSlide === idx ? 'bg-burgundy w-4' : 'bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Meta Metrics & Results */}
              <div className="lg:col-span-4 space-y-8">
                {/* Showcase Metrics Card */}
                <div className="bg-offwhite p-6 rounded-2xl border border-gray-100 space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-burgundy">
                    Portfolio Specifications
                  </h4>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="p-2.5 bg-white rounded-lg border border-gray-100 text-burgundy shadow-sm">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                          Location
                        </span>
                        <span className="text-charcoal font-semibold text-sm">
                          {project.location}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="p-2.5 bg-white rounded-lg border border-gray-100 text-burgundy shadow-sm">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                          Client / Concept
                        </span>
                        <span className="text-charcoal font-semibold text-sm">
                          {project.clientName}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="p-2.5 bg-white rounded-lg border border-gray-100 text-burgundy shadow-sm">
                        <Award size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                          Launch Period
                        </span>
                        <span className="text-charcoal font-semibold text-sm">
                          Spring {project.year}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Results Section */}
                <div className="border border-burgundy/10 p-6 rounded-2xl bg-burgundy/[0.02] space-y-4">
                  <div className="flex items-center gap-2 text-burgundy">
                    <Share2 size={18} />
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      Event Performance
                    </h4>
                  </div>
                  <p className="text-charcoal font-medium leading-relaxed font-sans text-sm md:text-base">
                    {project.results}
                  </p>
                </div>

                {/* Close Button Callout */}
                <button
                  onClick={onClose}
                  className="w-full py-4 text-center border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white font-bold tracking-widest text-xs uppercase rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
