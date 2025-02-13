import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CardSkeleton({ cards }) {
  return (
    <div className="flex flex-wrap gap-y-5 mt-4 sm:-mr-6 lg:-mr-3 xl:-mr-6">
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <SkeletonTheme
            baseColor="#20283e"
            highlightColor="#323b54"
            key={index}
          >
            <div className="px-2 pt-1 pb-4 bg-grey-900 rounded-xl relative w-full sm:mr-6 lg:mr-3 xl:mr-6 sm:w-[calc(50%-24px)] lg:w-[calc(25%-12px)] xl:w-[calc(25%-24px)]">
              <div className=" w-14 h-8 bg-black-20 rounded-lg absolute top-18px left-4 z-10"></div>
              <div className="mb-4 ">
                <Skeleton height={400} borderRadius={8} />
              </div>
              <div>
                <div className="w-1/2 mb-6">
                  <Skeleton borderRadius={8} />
                </div>
                <div className="flex gap-2">
                  <div className="w-4">
                    {" "}
                    <Skeleton circle />
                  </div>
                  <div className="w-1/2">
                    {" "}
                    <Skeleton borderRadius={8} />
                  </div>
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))}
    </div>
  );
}
