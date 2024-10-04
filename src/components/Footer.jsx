const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#154c79] px-5 lg:px-10 2xl:px-0">
      <div className="max-w-[1320px] mx-auto py-8 mt-auto text-center text-white">
        © {currentYear} MD Omar Faruque. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
