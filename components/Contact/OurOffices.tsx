/* eslint-disable @next/next/no-img-element */
export default function OurOffices() {
  return (
    <div data-color="light-blue" className="my-[20vh] p-8 md:p-16">
      <h2 className="text-4xl font-light mb-12">Our offices</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/images/Carecter2.jpeg"
              alt="Colorful abstract image representing Austin"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-light mb-2">Austin, Texas</h3>
            <p className="text-sm mb-1">900 Lydia Street Austin,TX, 78702</p>
            <p className="text-sm">
              Phone: <span className="font-semibold">(512) 348-8975</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/images/Carecter1.jpeg"
              alt="Berlin TV Tower"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-light mb-2">Berlin, Germany</h3>
            <p className="text-sm mb-1">Cuvrystrasse 1,10997, Berlin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
