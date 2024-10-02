import AssetLocked from "./AssetLocked";
import Chart from "./Chart";
import Stakestats from "./Stakestats";
import Stakings from "./Stakings";
import TokenRate from "./TokenRate";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <Stakestats />
        <div className="flex gap-4 items-center">
          <Chart />
          <AssetLocked />
        </div>

        <div className="flex gap-4 items-center">
          <Stakings />
          <TokenRate />
        </div>
      </div>
    </div>
  );
};

export default page;
