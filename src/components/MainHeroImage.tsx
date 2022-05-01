const MainHeroImage = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <iframe
        width="467"
        height="263"
        src="https://www.youtube.com/embed/WwxQb9plaAE"
        title="YouTube video player"
        frameBorder="0"
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainHeroImage;
