import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

export const configEnzyme = () =>
  Enzyme.configure({ adapter: new EnzymeAdapter() });
