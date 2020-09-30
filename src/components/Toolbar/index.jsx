import React from "react";
import { Button } from "../";
import plus from "../../content/images/plus.svg";
import minus from "../../content/images/minus.svg";
import styles from "./styles.module.scss";

const Toolbar = ({ weeksRepeated, updateWeeks }) => {
  // const maxWeeks = 16;
  // const minWeeks = 1;

  // const handleClick = (type) => {
  //   let newWeeksRepeated;
  //   if (type === "add") {
  //     newWeeksRepeated = weeksRepeated + 1;
  //     if (newWeeksRepeated > maxWeeks) {
  //       return;
  //     }
  //   } else {
  //     newWeeksRepeated = weeksRepeated - 1;
  //     if (newWeeksRepeated < minWeeks) {
  //       return;
  //     }
  //   }

  //   updateWeeksRepeated(newWeeksRepeated);
  // };

  return (
    <div className={styles.toolbar}>
      <Button
        onClick={() => updateWeeks("remove")}
        icon={minus}
        iconAlt={"minus"}
        className={styles.removeWeek}
      >
        <img src={minus} alt="minus" />
      </Button>
      <span className={styles.weeksRepeated}>{weeksRepeated}</span>
      <Button onClick={() => updateWeeks("add")} icon={plus} iconAlt={"plus"}>
        <img src={plus} alt="plus" className={styles.addWeek} />
      </Button>
      <span className={styles.weeksRepeatedText}>
        week{weeksRepeated > 1 && "s"} repeated
      </span>
    </div>
  );
};

export default Toolbar;
