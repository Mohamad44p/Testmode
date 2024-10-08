/* eslint-disable react/no-unescaped-entities */
export default function HeroCareers() {
  return (
    <section
      data-color="Almond"
      className="section w-full pt-28 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-black rounded-full" />
            <span className="text-sm font-semibold uppercase">
              JOIN OUR TEAM
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Come Build the Future with Us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              If you’re passionate about shaping the future of digital marketing and pushing boundaries in creativity, we want to hear from you! Join our dynamic team at Be Found Online, where experts in data, design, and technology collaborate to create impactful solutions for businesses worldwide. We’re a global family that values every voice, offering an inspiring environment full of opportunities for growth. If you’re ready for exciting challenges and meaningful work that drives results, come be part of our mission to transform the digital landscape!
            </p>
          </div>
          <div className="w-full aspect-video">
            <video
              className="w-full h-full object-cover rounded-lg"
              controls
              muted
              autoPlay
              loop
              src="/Y2meta.app-THIS IS 4K MARVEL (Ultra HD)-(1080p60).mp4"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
