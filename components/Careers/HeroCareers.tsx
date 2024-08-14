/* eslint-disable react/no-unescaped-entities */
export default function HeroCareers() {
  return (
    <section className="w-full pt-28 md:py-24">
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
              If you're passionate about humanizing healthcare through
              technology and strive for excellence beyond the ordinary, we want
              you. Join a team of experts who view their work as a continuous
              journey towards innovation and quality. At Significo, we value our
              diverse, international family, where every voice contributes to
              our collective success. In our vibrant setting, opportunities for
              personal and professional growth abound. Meaningful work is our
              standard, leading to profound job satisfaction. Embark on a career
              with us, where you'll face innovative challenges and play a vital
              role in shaping the future of health technology.
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
