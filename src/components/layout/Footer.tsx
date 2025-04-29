import LogoBlue from '@/assets/logo-blue.png';


export default function Footer() {
    return (
      <footer className="mt-30">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-300 pb-10">
          <div className="flex flex-col items-start ml-8">
              <img src={LogoBlue} alt="MobiusEngine Logo" className="h-18 mb-2 ml-6" />
              <hr className="border-gray-300 w-72 mt-6 mb-8 ml-6" /> 
              <div className="flex justify-center gap-28 text-sm text-custom-blue"> 
                <div className="ml-6">
                  <p className="font-semibold dm-sans underline mb-1">Address</p>
                  <p className="dm-sans">
                    1875 Mission St Ste 103 #450
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
                <div className="ml-6">
                  <p className="font-semibold dm-sans underline mb-1">Email</p>
                  <a
                    href="mailto:finance@mobiusengine.ai"
                    className="dm-sans hover:underline"
                  >
                    finance@mobiusengine.ai
                  </a>
                </div>
                <div className="ml-6">
                  <p className="font-semibold underline dm-sans mb-1">Telephone</p>
                  <a href="tel:6508896026" className="dm-sans hover:underline">
                    650-889-6026
                  </a>
                </div>
              </div>
            </div>
  
            <div className="flex flex-col items-start mt-34 mr-30">
              <p className="text-sm underline dm-sans font-semibold text-custom-blue mb-2">Socials</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="border border-custom-blue rounded-full w-8 h-8 flex items-center justify-center text-custom-blue hover:bg-custom-blue hover:text-white"
                >
                  <b>in</b>
                </a>
                <a
                  href="#"
                  className="border border-custom-blue rounded-full w-8 h-8 flex items-center justify-center text-custom-blue hover:bg-custom-blue hover:text-white"
                >
                  <b>in</b>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white bg-custom-blue px-6 py-4 w-full">
            <p className="dm-sans ml-8">© 2023 Mobiusservices LLC</p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <a href="#" className="mr-10 dm-sans hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="mr-10 dm-sans hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
