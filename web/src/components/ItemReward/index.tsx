import { Data } from "../../../../common/data";
import { RouteData } from "../../../../common/route-processing/types";
import { CopyToClipboard } from "../CopyToClipboard";
import { GemCost } from "../GemCost";
import { InlineFakeBlock } from "../InlineFakeBlock";
import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";
import { ReactNode } from "react";
import { MdCircle } from "react-icons/md";

function ItemRewardVerb(type: ItemRewardProps["rewardType"]) {
  switch (type) {
    case "quest":
      return <span> 받기</span>;
    case "vendor":
      return <span> 사기 </span>;
    default:
      return <></>;
  }
}

interface ItemRewardProps {
  item: string;
  count?: number;
  rewardType?: "quest" | "vendor";
  cost?: ReactNode;
}

export function ItemReward({ item, count, cost, rewardType }: ItemRewardProps) {
  return (
    <>
      <span className={classNames(styles.default)}>{item}</span>
      {count && count > 1 && <span> x{count}</span>}
      {ItemRewardVerb(rewardType)}
      {rewardType === "vendor" && cost !== undefined && (
        <div className={classNames(styles.noWrap)}>
          <InlineFakeBlock child={cost} />
          <span> 필요</span>
        </div>
      )}
    </>
  );
}

interface GemRewardProps {
  requiredGem: RouteData.RequiredGem;
  count: number;
  rewardType?: ItemRewardProps["rewardType"];
}

export function GemReward({ requiredGem, count, rewardType }: GemRewardProps) {
  const gem = Data.Gems[requiredGem.id];

  if (!gem)
    return (
      <div className={classNames(styles.gemError)}>
        This is awkward, <b>{requiredGem.id}</b> doesn't seem to exist
      </div>
    );

  return (
    <SplitRow
      left={
        <>
          <MdCircle
            color={Data.GemColours[gem.primary_attribute]}
            className={classNames("inlineIcon")}
          />
          <ItemReward
            item={gem.name}
            cost={<GemCost gem={gem} />}
            rewardType={rewardType}
            count={count}
          />
        </>
      }
      right={
        <div className={classNames(styles.rewardNote)}>
          {requiredGem.note} <CopyToClipboard text={gem.name} />
        </div>
      }
    />
  );
}
