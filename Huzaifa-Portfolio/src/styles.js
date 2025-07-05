const styles = {
  // Mobile-first padding system
  paddingX: "px-4 mobile-lg:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20",
  paddingY: "py-4 mobile-lg:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20",
  padding: "px-4 py-6 mobile-lg:px-6 mobile-lg:py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-20",

  // Mobile-first typography - MUCH better scaling
  heroHeadText:
    "font-black text-white text-[28px] leading-[32px] mobile-lg:text-[32px] mobile-lg:leading-[36px] xs:text-[40px] xs:leading-[44px] sm:text-[50px] sm:leading-[54px] md:text-[60px] md:leading-[64px] lg:text-[70px] lg:leading-[74px] xl:text-[80px] xl:leading-[84px] mt-2",

  heroSubText:
    "text-[#dfd9ff] font-medium text-[14px] leading-[20px] mobile-lg:text-[16px] mobile-lg:leading-[22px] xs:text-[18px] xs:leading-[24px] sm:text-[20px] sm:leading-[26px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[34px] xl:text-[30px] xl:leading-[40px]",

  // Section typography with better mobile scaling
  sectionHeadText:
    "text-white font-black text-[24px] leading-[28px] mobile-lg:text-[28px] mobile-lg:leading-[32px] xs:text-[32px] xs:leading-[36px] sm:text-[40px] sm:leading-[44px] md:text-[50px] md:leading-[54px] lg:text-[60px] lg:leading-[64px]",

  sectionSubText:
    "text-[12px] mobile-lg:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[18px] text-secondary uppercase tracking-wider",

  // Mobile-specific utility classes
  mobileContainer: "max-w-full px-4 mobile-lg:px-6 sm:px-8 md:max-w-7xl md:mx-auto",
  mobileCard: "p-4 mobile-lg:p-5 sm:p-6 md:p-8",
  mobileButton: "px-4 py-2 mobile-lg:px-5 mobile-lg:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4",
  mobileText: "text-sm mobile-lg:text-base sm:text-lg md:text-xl",
};

export { styles };
