import { FunctionComponent } from "react";
import { Colors } from "./Colors";
interface Props {

}

const ColorList: FunctionComponent<Props> = (): JSX.Element => {
  return (
    <>
      <div>
        ColorList
      </div>
      <Colors />
    </>
  );
}

export default ColorList;