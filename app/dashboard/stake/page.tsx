import AssetLocked from "./AssetLocked";
import Chart from "./Chart";
import Stakestats from "./Stakestats";
import Stakings from "./Stakings";
import TokenRate from "./TokenRate";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Stakestats />
        <section className="grid grid-cols-2 gap-3">
          <Chart />
          <AssetLocked />

          <Stakings />
          <TokenRate />
        </section>
      </div>
    </div>
  );
};

export default page;
