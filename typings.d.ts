type Post = {
  comment: Comment[];
  created_at: string;
  description: string;
  end_date: string;
  id: number;
  place_id: number;
  places: Places;
  start_date: string;
  title: string;
  user_id: number;
  usertable: Usertable;
  vote: Vote[];
  image: string;
};

type City = {
  created_at: string;
  description: string;
  hotel: Hotel[];
  id: number;
  name: string;
  places: Places[];
};
type Comment = {
  created_at: string;
  id: number;
  post: Post[];
  post_id: number;
  text: string;
  user_id: number;
  usertable: Usertable;
};
type Hotel = {
  city: City;
  city_id: number;
  created_at: string;
  description: String;
  id: number;
  name: string;
};

type Places = {
  city: City;
  city_id: number;
  created_at: string;
  description: string;
  id: number;
  name: string;
  post: Post[];
};

type Usertable = {
  comment: Comment[];
  created_at: DateTime;
  email: string;
  id: number;
  name: string;
  post: Post[];
  vote: Vote[];
};
type Vote = {
  created_at: string;
  id: number;
  post: Post;
  post_id: ID;
  upvote: Boolean;
  user_id: ID;
  usertable: Usertable;
};
