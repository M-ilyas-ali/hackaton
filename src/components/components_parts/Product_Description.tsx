import Wrapper from "../Wrapper";

export default function Description(){
    return(
        <>
        <Wrapper>
        <div className="flex flex-col  my-4 bg-white ">
          <div className="flex mt-8   ">
            <div className="flex text-9xl font-bold Sora,sans-serif  text-slate-100  divide-y-4">
              Over view
            </div>
            <h2 className="absolute pt-14 font-bold tracking-wider Sora,sans-serif text-slate-700 text-2xl z-20 ">
              Product Information
            </h2>
          </div>
          {/* //? First Container */}
          <div className="md:flex mt-8 ">
            <h4 className="basis-1/3 text-lg Sora,sans-serif text-gray-700 font-bold">
              PRODUCT DETAILS
            </h4>
            <p className="basis-1/2 Sora,sans-serif tracking-widest">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis numquam cum explicabo iusto. In, animi voluptate architecto fugiat eveniet ducimus non vero nam ex minima sapiente, aspernatur doloribus ipsam modi.
            </p>
          </div>
          {/* //! second container */}
          <div className="md:flex mt-8  ">
            <h4 className=" text-xs md:basis-1/3 md:text-lg Sora,sans-serif text-gray-700 font-bold ">
              PRODUCT CARD
            </h4>
            <ul className=" text-[8px] md:text-xl md:basis-1/2 Sora,sans-serif  font-bold">
              <li>Hand Wash Using Cold Water</li>
              <li>Do Not Use Bleach</li>
              <li>Hang It to Dry</li>
            </ul>
          </div>
        </div>
        </Wrapper>
        </>
    )
}