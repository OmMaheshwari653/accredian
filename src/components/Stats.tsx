const trackRecords = [
  {
    value: "10K+",
    text: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    text: "Sessions delivered with unmatched learning excellence",
  },
  {
    value: "5K+",
    text: "Active learners engaged in dynamic courses",
  },
];

const Stats = () => {
  return (
    <div className="px-0 sm:px-16 flex justify-center items-start">
      <div className="max-w-[85rem] w-full">
        <section className="w-full overflow-hidden flex flex-col items-center mt-8 sm:mt-28 px-4 capitalize">
          <div className="text-center mb-6 mx-2">
            <h2 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight">
              Our <span className="text-blue-600">Track Record</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
              The Numbers Behind{" "}
              <span className="text-blue-600">Our Success</span>
            </p>
          </div>

          <div className="w-full flex justify-center p-4 text-center">
            <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl">
              {trackRecords.map((item, index) => (
                <div
                  key={item.value}
                  className={`flex flex-col justify-start gap-4 items-center pr-4 ${
                    index !== trackRecords.length - 1
                      ? "border-r-2"
                      : "border-r-0"
                  }`}
                >
                  <div className="text-2xl text-blue-600 font-semibold w-24 bg-blue-100 p-2 rounded-full">
                    <h2>{item.value}</h2>
                  </div>
                  <p className="max-w-[300px]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="sm:hidden grid grid-cols-1 p-4 gap-10 rounded-xl">
              {trackRecords.map((item, index) => (
                <div
                  key={item.value}
                  className={`flex justify-start items-center text-left gap-4 ${
                    index !== trackRecords.length - 1
                      ? "border-b-2 pb-4"
                      : "border-b-0"
                  }`}
                >
                  <div className="flex justify-center items-center text-blue-600 text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full">
                    <h2 className="text-md md:text-2xl">{item.value}</h2>
                  </div>
                  <p className="text-md md:text-2xl">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
