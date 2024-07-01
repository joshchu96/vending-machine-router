import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import FreshSardines from "./FreshSardines";

const VendingMachine = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/chips">Chips</Link>
            </li>
            <li>
              <Link to="/soda">Soda</Link>
            </li>
            <li>
              <Link to="/fresh-sardines">Fresh Sardines</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/fresh-sardines" element={<FreshSardines />} />
        </Routes>
      </div>
    </Router>
  );
};

export default VendingMachine;
