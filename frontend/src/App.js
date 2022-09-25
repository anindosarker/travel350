import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeLogout from "./pages/welcomelogout/WelcomeLogout";
import WelcomeLogin from "./pages/welcomelogin/WelcomeLogin";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import TouristSpots from "./pages/touristspots/TouristSpots";
import SingleSpots from "./pages/singlespots/SingleSpots";
import AddNewPost from "./pages/addnewpost/AddNewPost";
import Travelforum from "./pages/travelforum/Travelforum";
import AddNewCommunity from "./pages/addnewcommunity/AddNewCommunity";
import TravelPlanner from "./pages/travelplanner/TravelPlanner";
import UserProfile from "./pages/userprofile/UserProfile";
import CommunityList from "./pages/communitylist/CommunityList";
import Singleforum from "./pages/singleforum/Singleforum";
import SingleForumPostPage from "./pages/singleforumpostpage/SingleForumPostPage";
import EditPost from "./pages/editpost/EditPost";
import AddNewSpot from "./pages/addnewspot/AddNewSpot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomeLogout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcomelogin" element={<WelcomeLogin />} />
        <Route path="/welcomelogout" element={<WelcomeLogout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/touristplaces" element={<TouristSpots />} />
        <Route
          path="/home/touristplaces/singlespots"
          element={<SingleSpots />}
        />
        <Route path="/home/addnewpost" element={<AddNewPost />} />
        <Route path="/home/addnewspot" element={<AddNewSpot />} />
        <Route path="/home/addnewcommunity" element={<AddNewCommunity />} />
        <Route path="/home/travelforum" element={<Travelforum />} />
        <Route path="/home/travelplanner" element={<TravelPlanner />} />
        <Route path="/home/userprofile" element={<UserProfile />} />
        <Route
          path="/home/touristplaces/communitylist"
          element={<CommunityList />}
        />
        <Route
          path="/home/touristplaces/communitylist/singleforum"
          element={<Singleforum />}
        />
        <Route
          path="/home/touristplaces/communitylist/singleforum/singleforumpostpage"
          element={<SingleForumPostPage />}
        />
        <Route
          path="/home/touristplaces/communitylist/singleforum/singleforumpostpage/editpost"
          element={<EditPost />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
